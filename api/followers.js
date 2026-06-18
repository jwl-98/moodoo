const crypto = require("node:crypto");

const MODDOO_API_BASE = "https://hera-prod.modoo.or.kr";
const MAX_IDS = 500;
const CONCURRENCY = 5;
const KEYSET_SECRET = "modoo-api-encryption-keyset";
const ENCRYPTED_KEYSETS = [
  "FlI0ECmUrZuzFnFPNdvpkLNTcRN01v6CqEB-CmDF9_Xv31kuAFPHotrCXiprcq2uz6hbfE9T3rb16ic8bWC56O6H6ipnByy9r4upKTJwNoWO9vcrcF0SyvSMhVg8S0CZl_7v9Dp7dSWtlpGtWw1UKovJxcRUVEFBkZaJwgNoAS36kO3MygYYBlWDiNeMSi1sf8bi9_tDL25mq_Gu7S0jfDZPgfCUti93Cmit8OGpPDVwbrDz7-4FH1A",
];

function parseKeyset(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = Buffer.from(
    normalized.padEnd(normalized.length + ((4 - normalized.length % 4) % 4), "="),
    "base64",
  ).toString("binary");

  let text = "";
  for (let index = 0; index < binary.length; index += 1) {
    text += String.fromCharCode(
      (binary.charCodeAt(index) ^
        KEYSET_SECRET.charCodeAt(index % KEYSET_SECRET.length) ^
        (31 * index)) &
        255,
    );
  }

  const parsed = JSON.parse(text);
  return {
    timestamp: parsed.t,
    keys: parsed.k,
  };
}

const KEYSETS = ENCRYPTED_KEYSETS.map(parseKeyset);

function decryptEnvelope(envelope) {
  if (!envelope?.data || !envelope?.timestamp) return envelope;

  let encryptedPayload = envelope.data;
  let keyText = String(envelope.timestamp).padEnd(16, "0");
  const keyset = KEYSETS.find((item) => item.timestamp === String(envelope.timestamp));

  if (keyset) {
    const left = parseInt(encryptedPayload.substring(0, 2), 16);
    const right = parseInt(encryptedPayload.substring(2, 4), 16);
    const key = keyset.keys[left ^ right];

    if (!key) {
      throw new Error("Invalid encrypted payload");
    }

    keyText = key;
    encryptedPayload = encryptedPayload.substring(4);
  }

  const key = Buffer.from(keyText, "utf8");
  const decipher = crypto.createDecipheriv(`aes-${key.byteLength * 8}-cbc`, key, key);
  const text = decipher.update(encryptedPayload, "base64", "utf8") + decipher.final("utf8");
  return JSON.parse(text);
}

async function fetchOrgMetrics(id) {
  const response = await fetch(`${MODDOO_API_BASE}/api/v1/ai-organizations/${id}`, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      origin: "https://www.modoo.or.kr",
      pragma: "no-cache",
      referer: `https://www.modoo.or.kr/ai-solution/organization/${id}`,
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    return { id, error: `HTTP ${response.status}` };
  }

  const envelope = await response.json();
  const organization = decryptEnvelope(envelope);
  const followerCount = organization.followerCount;
  const likeCount = (organization.solutions || []).reduce(
    (sum, solution) => sum + (solution.likeCount || 0),
    0,
  );

  if (typeof followerCount !== "number" && typeof likeCount !== "number") {
    return { id, error: "METRIC_NOT_FOUND" };
  }

  return {
    id,
    followerCount: followerCount ?? undefined,
    likeCount: likeCount ?? undefined,
  };
}

async function mapLimited(items, limit, mapper) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index]);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker()),
  );

  return results;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=1800");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ids = String(req.query.ids || "")
    .split(",")
    .map((id) => Number(id.trim()))
    .filter((id) => Number.isInteger(id) && id > 0)
    .slice(0, MAX_IDS);

  if (ids.length === 0) {
    return res.status(400).json({ error: "ids query is required" });
  }

  const results = await mapLimited(ids, CONCURRENCY, fetchOrgMetrics);
  const followers = {};
  const errors = {};

  for (const result of results) {
    if (!result || !result.id) continue;
    if (result.error) {
      errors[result.id] = result.error;
      continue;
    }
    followers[result.id] = {
      followerCount: result.followerCount,
      likeCount: result.likeCount,
    };
  }

  return res.status(200).json({
    updatedAt: new Date().toISOString(),
    followers,
    errors,
  });
};
