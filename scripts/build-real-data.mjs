import fs from "node:fs/promises";

const RAW_PATH = "/Users/macintosh/modoo_ai_solution/outputs/modoo_ai_solution/modoo_ai_solution_raw.json";
const OUT_PATH = new URL("../src/data/solutions.ts", import.meta.url);

const MAJOR_TAGS = [
  "사업계획서/IR",
  "마케팅 콘텐츠",
  "랜딩페이지/홈페이지",
  "MVP/개발",
  "고객검증/시장조사",
  "디자인/브랜딩",
  "영상/이미지",
  "업무자동화/생산성",
  "데이터/리포트",
  "교육/컨설팅",
];

const UNCERTAIN_TAG = "기타/확인필요";

const TAG_RULES = {
  "사업계획서/IR": ["사업계획서", "IR", "발표", "지원사업", "피칭", "서류"],
  "마케팅 콘텐츠": ["카드뉴스", "포스터", "블로그", "SNS", "광고", "SEO", "콘텐츠", "카톡", "문자"],
  "랜딩페이지/홈페이지": ["랜딩", "홈페이지", "웹페이지", "사이트", "페이지"],
  "MVP/개발": ["MVP", "개발", "노코드", "DB", "솔루션 설계", "시제품", "앱", "웹앱"],
  "고객검증/시장조사": ["수요조사", "시장조사", "고객검증", "검증", "설문", "리서치"],
  "디자인/브랜딩": ["디자인", "브랜딩", "로고", "BI", "브랜드"],
  "영상/이미지": ["영상", "이미지", "동영상", "숏폼", "사진"],
  "업무자동화/생산성": ["자동화", "생산성", "문서 작성", "업무", "백오피스"],
  "데이터/리포트": ["데이터", "리포트", "보고서", "분석", "점수표", "진단"],
  "교육/컨설팅": ["교육", "컨설팅", "멘토", "코칭", "강의"],
};

const DETAIL_TAG_RULES = {
  카드뉴스: ["카드뉴스"],
  포스터: ["포스터"],
  블로그: ["블로그"],
  SEO: ["SEO", "검색"],
  "SNS 문구": ["SNS", "카톡", "문자", "캡션"],
  광고: ["광고"],
  사업계획서: ["사업계획서"],
  IR: ["IR", "피칭"],
  발표자료: ["발표", "발표자료"],
  피드백: ["피드백", "첨삭", "진단"],
  랜딩페이지: ["랜딩"],
  홈페이지: ["홈페이지", "웹페이지", "사이트"],
  노코드: ["노코드"],
  DB설계: ["DB", "데이터베이스"],
  MVP: ["MVP", "시제품"],
  수요조사: ["수요조사"],
  시장조사: ["시장조사", "리서치"],
  리포트: ["리포트", "보고서", "점수표"],
  브랜딩: ["브랜딩", "브랜드"],
  로고: ["로고"],
  영상: ["영상", "동영상", "숏폼"],
  이미지: ["이미지", "사진"],
  자동화: ["자동화"],
  컨설팅: ["컨설팅", "코칭", "멘토"],
  교육: ["교육", "강의"],
};

const TECH_TAGS = [
  "LLM/생성형AI",
  "AI 에이전트",
  "가상고객/시뮬레이션",
  "패널 리서치",
  "설문/서베이",
  "시장조사/리서치",
  "노코드/앱빌더",
  "랜딩페이지 빌더",
  "MVP/프로토타입",
  "RAG/지식검색",
  "데이터 분석/대시보드",
  "이미지 생성",
  "영상 생성",
  "음성/STT/TTS",
  "업무 자동화/API",
  "DB/인프라",
];

const TECH_RULES = {
  "LLM/생성형AI": ["LLM", "GPT", "ChatGPT", "Claude", "Gemini", "생성형", "생성AI", "AI 모델"],
  "AI 에이전트": ["AI에이전트", "AI 에이전트", "에이전트", "멀티에이전트"],
  "가상고객/시뮬레이션": ["가상고객", "AI 고객", "가상 손님", "가상인터뷰", "FGI 시뮬레이션", "판매량 예측", "시뮬레이션"],
  "패널 리서치": ["패널", "10만", "3,000명", "응답자", "타기팅", "타겟팅"],
  "설문/서베이": ["설문", "서베이", "문항", "Kano", "응답"],
  "시장조사/리서치": ["시장조사", "리서치", "경쟁사", "페르소나", "시장 규모", "시장분석"],
  "노코드/앱빌더": ["노코드", "로우코드", "앱빌더", "빌더", "바이브코딩"],
  "랜딩페이지 빌더": ["랜딩페이지", "랜딩", "홈페이지", "웹페이지"],
  "MVP/프로토타입": ["MVP", "프로토타입", "목업", "와이어프레임", "시제품"],
  "RAG/지식검색": ["RAG", "GraphRAG", "지식검색", "지식그래프", "검색"],
  "데이터 분석/대시보드": ["데이터분석", "데이터 분석", "대시보드", "분석", "리포트", "보고서"],
  "이미지 생성": ["이미지 생성", "이미지제작", "이미지", "사진", "디자인 자동"],
  "영상 생성": ["영상 생성", "영상제작", "동영상", "숏폼", "비디오"],
  "음성/STT/TTS": ["STT", "TTS", "음성", "전화", "AI 전화"],
  "업무 자동화/API": ["자동화", "API", "워크플로우", "예약", "연동", "업무관리"],
  "DB/인프라": ["DB", "데이터베이스", "서버", "인프라", "GPU", "클라우드"],
};

const DELIVERABLE_RULES = {
  사업계획서: ["사업계획서", "서류"],
  "IR/발표자료": ["IR", "발표", "피칭"],
  카드뉴스: ["카드뉴스"],
  포스터: ["포스터"],
  블로그: ["블로그"],
  "SNS/광고 문구": ["SNS", "카톡", "문자", "광고", "캡션"],
  랜딩페이지: ["랜딩"],
  홈페이지: ["홈페이지", "웹페이지", "사이트"],
  MVP: ["MVP", "시제품"],
  "시장/수요조사": ["시장조사", "수요조사", "고객검증", "설문"],
  리포트: ["리포트", "보고서", "점수표", "진단"],
  로고: ["로고"],
  영상: ["영상", "동영상", "숏폼"],
  이미지: ["이미지", "사진"],
  자동화: ["자동화"],
  컨설팅: ["컨설팅", "코칭", "멘토"],
};

function cleanText(value, maxLength = 32700) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim()
    .slice(0, maxLength);
}

function compact(value, maxLength = 1000) {
  return cleanText(value, maxLength).replace(/\s*\n+\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}

function unique(items) {
  return [...new Set((items || []).filter(Boolean))];
}

function includesAny(text, keywords) {
  const lower = compact(text, 20000).toLowerCase();
  return (keywords || []).some((keyword) => lower.includes(String(keyword).toLowerCase()));
}

function matchingKeywords(text, keywords) {
  const lower = compact(text, 20000).toLowerCase();
  return unique((keywords || []).filter((keyword) => lower.includes(String(keyword).toLowerCase())));
}

function buildSearchText(org, solution) {
  const freeText = (solution?.freeServices || [])
    .map((item) => `${item.plan || ""} ${item.description || ""}`)
    .join(" ");

  return compact(
    [
      org?.name,
      (org?.sectors || []).join(" "),
      org?.description,
      solution?.name,
      (solution?.categories || []).join(" "),
      solution?.summary,
      (solution?.keywords || []).join(" "),
      freeText,
    ]
      .filter(Boolean)
      .join(" "),
    20000,
  );
}

function classifyTags(org, solution) {
  const text = buildSearchText(org, solution);
  const majorTags = MAJOR_TAGS.filter((tag) => includesAny(text, TAG_RULES[tag]));
  const detailTags = Object.entries(DETAIL_TAG_RULES)
    .filter(([, keywords]) => includesAny(text, keywords))
    .map(([tag]) => tag);

  return {
    majorTags: majorTags.length ? unique(majorTags) : [UNCERTAIN_TAG],
    detailTags: detailTags.length ? unique(detailTags) : [UNCERTAIN_TAG],
  };
}

function classifyTech(org, solution) {
  const text = buildSearchText(org, solution);
  const entries = Object.entries(TECH_RULES)
    .map(([tag, keywords]) => ({ tag, keywords: matchingKeywords(text, keywords) }))
    .filter((entry) => entry.keywords.length);

  return {
    techTags: entries.length ? entries.map((entry) => entry.tag) : ["확인필요"],
    techEvidence: entries.length
      ? unique(entries.flatMap((entry) => entry.keywords)).slice(0, 12).join(", ")
      : "원문에 기술 방식이 명확히 드러나지 않음",
  };
}

function extractDeliverables(org, solution) {
  const text = buildSearchText(org, solution);
  const deliverables = Object.entries(DELIVERABLE_RULES)
    .filter(([, keywords]) => includesAny(text, keywords))
    .map(([name]) => name);
  return deliverables.length ? unique(deliverables) : ["상세 확인 필요"];
}

function formatPrice(price) {
  if (!price) return "";
  const typeMap = {
    MONTHLY_SUBSCRIPTION: "월 구독",
    ONE_TIME_PAYMENT: "1회 결제",
    PAID_FREE_MIXED: "유/무료 혼합",
    FREE: "무료",
  };
  const type = typeMap[price.paymentType] || price.paymentType || "";
  const amount = typeof price.price === "number" ? `${price.price.toLocaleString("ko-KR")}원` : "";
  return [compact(price.label, 80), type, amount].filter(Boolean).join(" / ");
}

function priceNumber(price) {
  return typeof price?.price === "number" ? price.price : null;
}

function minPriceNumber(prices) {
  const numbers = (prices || []).map(priceNumber).filter((value) => typeof value === "number");
  return numbers.length ? Math.min(...numbers) : null;
}

function pricingKind(price) {
  const text = `${price?.paymentType || ""} ${price?.label || ""}`.toLowerCase();
  if (price?.price === 0 || price?.paymentType === "FREE" || text.includes("무료")) return "free";
  if (
    ["CREDIT_TOKEN", "CAPACITY_BASED"].includes(price?.paymentType) ||
    /api|종량|사용량|건당|크레딧|token|토큰|포인트|point|씨앗|bp|스타/.test(text)
  ) {
    return "usage";
  }
  if (typeof price?.price === "number") return "fixed";
  return "unknown";
}

function pricingSortRank(kind) {
  const ranks = { free: 0, fixed: 1, usage: 2, unknown: 3 };
  return ranks[kind] ?? 3;
}

function summarizePricing(prices) {
  const kinds = unique((prices || []).map(pricingKind));
  const numbers = (prices || []).map(priceNumber).filter((value) => typeof value === "number");
  const primaryKind = kinds.sort((a, b) => pricingSortRank(a) - pricingSortRank(b))[0] || "unknown";
  return {
    pricingKind: primaryKind,
    pricingSortRank: pricingSortRank(primaryKind),
    minPrice: numbers.length ? Math.min(...numbers) : null,
  };
}

function formatBenefits(solution, limit = 3) {
  return (solution?.freeServices || [])
    .slice(0, limit)
    .map((item) => [compact(item.plan, 70), compact(item.description, 120)].filter(Boolean).join(": "))
    .filter(Boolean);
}

function recommendationFor({ majorTags, deliverables, techTags, serviceNames, benefits, sectors }) {
  const serviceText = serviceNames[0] ? `${serviceNames[0]} 같은 서비스가 필요한` : "AI 솔루션을 검토하는";
  const deliverableText = deliverables.filter((item) => item !== "상세 확인 필요").slice(0, 2).join(", ");
  const techText = techTags.filter((item) => item !== "확인필요").slice(0, 2).join(", ");
  const sectorText = sectors[0] ? `${sectors[0]} 분야의 ` : "";
  const benefitText = benefits.length ? "무료 혜택까지 함께 확인하고 싶은" : "";

  if (majorTags.includes("고객검증/시장조사")) {
    return `${sectorText}아이디어 검증 단계에서 ${deliverableText || "시장/수요조사"} 근거가 필요한 ${benefitText || "초기 창업팀"}`;
  }
  if (majorTags.includes("랜딩페이지/홈페이지")) {
    return `${deliverableText || "랜딩페이지/홈페이지"} 결과물로 첫 고객 반응을 빠르게 확인하려는 ${serviceText} 팀`;
  }
  if (majorTags.includes("MVP/개발")) {
    return `${techText || "노코드/MVP"} 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 ${serviceText} 팀`;
  }
  if (majorTags.includes("사업계획서/IR")) {
    return `${deliverableText || "사업계획서와 발표자료"}를 보강해 지원사업·IR 준비를 앞당기려는 팀`;
  }
  if (majorTags.includes("마케팅 콘텐츠")) {
    return `${deliverableText || "홍보 콘텐츠"}를 빠르게 만들고 고객 모집을 시작하려는 ${serviceText} 팀`;
  }
  if (majorTags.includes("업무자동화/생산성")) {
    return `${techText || "자동화"} 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀`;
  }
  if (majorTags.includes("데이터/리포트") || deliverables.includes("리포트")) {
    return `${deliverableText || "리포트"} 기반으로 의사결정 자료를 확보하려는 팀`;
  }
  return `${serviceText} 예비창업자와 초기 팀`;
}

function buildOrganizationCard(org) {
  const solutions = org.solutions || [];
  const serviceSummaries = solutions.map((solution) => {
    const tags = classifyTags(org, solution);
    const tech = classifyTech(org, solution);
    return {
      id: solution.id,
      name: compact(solution.name, 120),
      summary: compact(solution.summary, 220),
      website: solution.website || "",
      keywords: unique(solution.keywords || []),
      priceText: (solution.prices || []).map(formatPrice).filter(Boolean),
      priceNumber: minPriceNumber(solution.prices),
      pricingKind: summarizePricing(solution.prices).pricingKind,
      benefits: formatBenefits(solution),
      deliverables: extractDeliverables(org, solution),
      ...tags,
      ...tech,
    };
  });

  const majorTags = unique(serviceSummaries.flatMap((item) => item.majorTags));
  const detailTags = unique(serviceSummaries.flatMap((item) => item.detailTags));
  const techTags = unique(serviceSummaries.flatMap((item) => item.techTags));
  const deliverables = unique(serviceSummaries.flatMap((item) => item.deliverables));
  const prices = unique(serviceSummaries.flatMap((item) => item.priceText));
  const pricingSummary = summarizePricing(solutions.flatMap((solution) => solution.prices || []));
  const benefits = unique(serviceSummaries.flatMap((item) => item.benefits));
  const serviceNames = unique(solutions.map((solution) => compact(solution.name, 100))).slice(0, 4);
  const techEvidence = unique(
    serviceSummaries
      .flatMap((item) => item.techEvidence.split(", "))
      .filter((item) => item && item !== "원문에 기술 방식이 명확히 드러나지 않음"),
  ).slice(0, 10);

  return {
    id: org.id,
    name: compact(org.name, 100),
    logo: org.logo || solutions.find((solution) => solution.logo)?.logo || "",
    summary: compact(solutions.find((solution) => solution.summary)?.summary || org.description, 190),
    description: compact(org.description, 500),
    website: org.website || solutions.find((solution) => solution.website)?.website || "",
    email: org.email || "",
    contact: org.contact || "",
    sourceUrl: `https://www.modoo.or.kr/ai-solution/organization/${org.id}`,
    sectors: unique(org.sectors || []),
    serviceNames,
    majorTags,
    detailTags,
    techTags,
    deliverables,
    techEvidence: techEvidence.length ? techEvidence.join(", ") : "확인필요",
    priceText: prices.slice(0, 4),
    minPrice: pricingSummary.minPrice,
    pricingKind: pricingSummary.pricingKind,
    pricingSortRank: pricingSummary.pricingSortRank,
    benefits: benefits.slice(0, 5),
    recommendation: recommendationFor({
      majorTags,
      deliverables,
      techTags,
      serviceNames,
      benefits,
      sectors: unique(org.sectors || []),
    }),
    followerCount: org.followerCount || 0,
    likeCount: solutions.reduce((count, solution) => count + (solution.likeCount || 0), 0),
    hasFreeBenefit: benefits.length > 0,
    hasPrice: prices.length > 0,
    hasWebsite: Boolean(org.website || solutions.some((solution) => solution.website)),
    services: serviceSummaries,
  };
}

const raw = JSON.parse(await fs.readFile(RAW_PATH, "utf8"));
const organizations = (raw.organizations || [])
  .filter((org) => !org.error)
  .map(buildOrganizationCard)
  .sort((a, b) => b.likeCount + b.followerCount - (a.likeCount + a.followerCount));

const conditions = ["무료 혜택 있음", "가격 공개", "웹사이트 있음"];
function safeJson(value) {
  return JSON.stringify(value, null, 2).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}

const output = `export type ServiceSummary = {
  id: number;
  name: string;
  summary: string;
  website: string;
  keywords: string[];
  priceText: string[];
  priceNumber: number | null;
  pricingKind: string;
  benefits: string[];
  deliverables: string[];
  majorTags: string[];
  detailTags: string[];
  techTags: string[];
  techEvidence: string;
};

export type SolutionOrg = {
  id: number;
  name: string;
  logo: string;
  summary: string;
  description: string;
  website: string;
  email: string;
  contact: string;
  sourceUrl: string;
  sectors: string[];
  serviceNames: string[];
  majorTags: string[];
  detailTags: string[];
  techTags: string[];
  deliverables: string[];
  techEvidence: string;
  priceText: string[];
  minPrice: number | null;
  pricingKind: string;
  pricingSortRank: number;
  benefits: string[];
  recommendation: string;
  followerCount: number;
  likeCount: number;
  hasFreeBenefit: boolean;
  hasPrice: boolean;
  hasWebsite: boolean;
  services: ServiceSummary[];
};

export const TAG_GROUPS = [
  { id: "majorTags", label: "큰 작업", tags: ${safeJson(MAJOR_TAGS)} },
  { id: "detailTags", label: "세부 작업", tags: ${safeJson(Object.keys(DETAIL_TAG_RULES))} },
  { id: "techTags", label: "기술/방식", tags: ${safeJson(TECH_TAGS)} },
  { id: "deliverables", label: "받을 결과물", tags: ${safeJson(Object.keys(DELIVERABLE_RULES))} },
  { id: "conditions", label: "조건", tags: ${safeJson(conditions)} },
] as const;

export const SOLUTIONS: SolutionOrg[] = ${safeJson(organizations)};
`;

await fs.mkdir(new URL("../src/data/", import.meta.url), { recursive: true });
await fs.writeFile(OUT_PATH, output);
console.log(`wrote ${OUT_PATH.pathname}`);
console.log(`organizations=${organizations.length}`);
