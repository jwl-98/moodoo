import React, { useEffect, useMemo, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronLeft,
  CreditCard,
  ExternalLink,
  Search,
  ThumbsUp,
  X,
} from "lucide-react";
import { SOLUTIONS, SolutionOrg } from "./data/solutions";

const PRIMARY_CATEGORIES = [
  { id: "고객검증/시장조사", label: "고객검증·시장조사", icon: "🔎" },
  { id: "랜딩페이지/홈페이지", label: "랜딩페이지·홈페이지", icon: "🌐" },
  { id: "MVP/개발", label: "MVP·개발", icon: "🛠️" },
  { id: "사업계획서/IR", label: "사업계획서·IR", icon: "📄" },
  { id: "마케팅 콘텐츠", label: "마케팅 콘텐츠", icon: "✍️" },
  { id: "업무자동화/생산성", label: "업무자동화", icon: "⚡" },
];

const SECONDARY_TAGS_BY_CATEGORY: Record<string, string[]> = {
  "고객검증/시장조사": [
    "수요조사",
    "시장조사",
    "가상고객/시뮬레이션",
    "패널 리서치",
    "설문/서베이",
    "시장/수요조사",
    "리포트",
    "무료 혜택 있음",
  ],
  "랜딩페이지/홈페이지": [
    "랜딩페이지",
    "홈페이지",
    "랜딩페이지 빌더",
    "노코드/앱빌더",
    "마케팅 콘텐츠",
    "가격 공개",
    "웹사이트 있음",
  ],
  "MVP/개발": [
    "MVP",
    "노코드",
    "DB설계",
    "MVP/프로토타입",
    "노코드/앱빌더",
    "업무 자동화/API",
    "DB/인프라",
    "무료 혜택 있음",
  ],
  "사업계획서/IR": [
    "사업계획서",
    "IR",
    "발표자료",
    "피드백",
    "IR/발표자료",
    "LLM/생성형AI",
    "컨설팅",
    "가격 공개",
  ],
  "마케팅 콘텐츠": [
    "카드뉴스",
    "포스터",
    "블로그",
    "SNS/광고 문구",
    "이미지 생성",
    "영상 생성",
    "무료 혜택 있음",
  ],
  "업무자동화/생산성": [
    "자동화",
    "업무 자동화/API",
    "AI 에이전트",
    "RAG/지식검색",
    "데이터 분석/대시보드",
    "웹사이트 있음",
  ],
};

const CONDITION_MATCHERS: Record<string, (org: SolutionOrg) => boolean> = {
  "무료 혜택 있음": (org) => org.hasFreeBenefit,
  "가격 공개": (org) => org.hasPrice,
  "웹사이트 있음": (org) => org.hasWebsite,
};

const SORT_OPTIONS = [
  { id: "default", label: "추천순" },
  { id: "popular", label: "인기순" },
  { id: "priceAsc", label: "가격 낮은순" },
  { id: "priceDesc", label: "가격 높은순" },
] as const;

type SortOption = (typeof SORT_OPTIONS)[number]["id"];

function allTags(org: SolutionOrg) {
  return [
    ...org.majorTags,
    ...org.detailTags,
    ...org.techTags,
    ...org.deliverables,
  ];
}

function matchesTag(org: SolutionOrg, tag: string) {
  const condition = CONDITION_MATCHERS[tag];
  if (condition) return condition(org);
  return allTags(org).includes(tag);
}

function matchesQuery(org: SolutionOrg, query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;
  return [
    org.name,
    org.summary,
    org.description,
    org.recommendation,
    ...org.serviceNames,
    ...org.sectors,
    ...allTags(org),
  ]
    .join(" ")
    .toLowerCase()
    .includes(normalized);
}

function initials(name: string) {
  return name.replace(/[()\s]/g, "").slice(0, 2) || "AI";
}

function compactTags(items: string[], limit: number) {
  return items.filter(Boolean).slice(0, limit);
}

function getSelectionDeadlineLabel() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadline = new Date("2026-06-24T00:00:00+09:00");
  deadline.setHours(0, 0, 0, 0);

  const diffDays = Math.ceil(
    (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (diffDays > 0) return `D-${diffDays}`;
  if (diffDays === 0) return "D-Day";
  return `D+${Math.abs(diffDays)}`;
}

const App: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [isComparing, setIsComparing] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<SolutionOrg | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [deadlineLabel, setDeadlineLabel] = useState(getSelectionDeadlineLabel);

  const hasSelectedCategory = selectedCategories.length > 0;

  const secondaryTags = useMemo(
    () =>
      Array.from(
        new Set(
          selectedCategories.flatMap(
            (category) => SECONDARY_TAGS_BY_CATEGORY[category] ?? [],
          ),
        ),
      ),
    [selectedCategories],
  );

  const filteredSolutions = useMemo(() => {
    const filtered = SOLUTIONS.filter((org) => {
      if (!matchesQuery(org, query)) return false;
      if (
        hasSelectedCategory &&
        !selectedCategories.some((category) => org.majorTags.includes(category))
      ) {
        return false;
      }
      return selectedTags.every((tag) => matchesTag(org, tag));
    });

    return [...filtered].sort((a, b) => {
      if (sortOption === "popular") {
        return b.followerCount - a.followerCount || b.likeCount - a.likeCount;
      }
      if (sortOption === "priceAsc") {
        const aPrice = a.minPrice ?? Number.POSITIVE_INFINITY;
        const bPrice = b.minPrice ?? Number.POSITIVE_INFINITY;
        return a.pricingSortRank - b.pricingSortRank || aPrice - bPrice || b.followerCount - a.followerCount;
      }
      if (sortOption === "priceDesc") {
        const aPrice = a.minPrice ?? Number.NEGATIVE_INFINITY;
        const bPrice = b.minPrice ?? Number.NEGATIVE_INFINITY;
        return a.pricingSortRank - b.pricingSortRank || bPrice - aPrice || b.followerCount - a.followerCount;
      }
      return b.likeCount + b.followerCount - (a.likeCount + a.followerCount);
    });
  }, [hasSelectedCategory, query, selectedCategories, selectedTags, sortOption]);

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    secondaryTags.forEach((tag) => {
      const nextTags = selectedTags.includes(tag) ? selectedTags : [...selectedTags, tag];
      counts[tag] = SOLUTIONS.filter((org) => {
        if (!matchesQuery(org, query)) return false;
        if (
          hasSelectedCategory &&
          !selectedCategories.some((category) => org.majorTags.includes(category))
        ) {
          return false;
        }
        return nextTags.every((item) => matchesTag(org, item));
      }).length;
    });
    return counts;
  }, [hasSelectedCategory, query, secondaryTags, selectedCategories, selectedTags]);

  useEffect(() => {
    setCompareIds((prev) => prev.filter((id) => filteredSolutions.some((org) => org.id === id)));
  }, [filteredSolutions]);

  useEffect(() => {
    setSelectedTags((prev) => prev.filter((tag) => secondaryTags.includes(tag)));
  }, [secondaryTags]);

  const comparedSolutions = useMemo(
    () => SOLUTIONS.filter((org) => compareIds.includes(org.id)),
    [compareIds],
  );

  const compareItems = comparedSolutions.length > 0 ? comparedSolutions : filteredSolutions;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDeadlineLabel(getSelectionDeadlineLabel());
    }, 1000 * 60 * 30);
    return () => window.clearInterval(timer);
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((category) => category !== categoryId)
        : [...prev, categoryId],
    );
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
    }, 420);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const toggleCompare = (id: number) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      return prev.length >= 5 ? prev : [...prev, id];
    });
  };

  const resetAll = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setQuery("");
    setCompareIds([]);
    setIsComparing(false);
    setSelectedOrg(null);
  };

  return (
    <div className="min-h-screen bg-[#E9EDF2] text-[#191F28] font-sans flex justify-center">
      <main className="w-full max-w-md md:max-w-5xl lg:max-w-6xl bg-[#F2F4F6] min-h-screen relative pb-36 shadow-xl md:shadow-none">
        <header className="px-6 md:px-10 pt-12 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFE5EB] px-3 py-1 text-[13px] font-bold text-[#F04452]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F04452] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F04452]" />
                </span>
                마감까지 {deadlineLabel}
              </div>
              <h1 className="text-2xl font-bold leading-tight">
                원하는 태그로 <br />
                <span className="text-[#3182F6]">AI 솔루션 업체</span> 찾기
              </h1>
              <p className="mt-2 text-[#8B95A1] text-sm">
                목적은 여러 개 선택할 수 있어요. 필요한 태그를 눌러 후보를 좁혀보세요.
              </p>
            </div>
            {(hasSelectedCategory || selectedTags.length > 0 || query) && (
              <button
                type="button"
                onClick={resetAll}
                className="mt-1 rounded-full bg-white px-3 py-2 text-[12px] font-bold text-[#4E5968] shadow-sm active:scale-95"
              >
                초기화
              </button>
            )}
          </div>

          <label className="mt-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm border border-gray-100">
            <Search size={18} className="text-[#8B95A1]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="업체명, 서비스명, 키워드 검색"
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#B0B8C1]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded-full p-1 text-[#8B95A1] active:bg-[#F2F4F6]"
                aria-label="검색어 지우기"
              >
                <X size={16} />
              </button>
            )}
          </label>
        </header>

        <section className="px-6 md:px-10 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PRIMARY_CATEGORIES.map((category) => {
              const isSelected = selectedCategories.includes(category.id);
              const count = SOLUTIONS.filter((org) => org.majorTags.includes(category.id)).length;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`flex flex-col items-start p-4 rounded-2xl transition-all duration-200 border-2 text-left active:scale-[0.98] ${
                    isSelected
                      ? "bg-[#E8F3FF] border-[#3182F6]"
                      : "bg-white border-transparent hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <span className="text-xl mb-2">{category.icon}</span>
                  <span
                    className={`text-[15px] font-semibold leading-snug ${
                      isSelected ? "text-[#1B64DA]" : "text-[#333D4B]"
                    }`}
                  >
                    {category.label}
                  </span>
                  <span className="mt-2 text-[12px] font-bold text-[#8B95A1]">
                    {count}개 업체
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <div
          className={`transition-all duration-500 ease-in-out ${
            hasSelectedCategory && !isLoading
              ? "opacity-100 max-h-none mt-8"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <section className="px-6 md:px-10">
            <div className="flex items-end justify-between mb-3">
              <div className="min-w-0 pr-4">
                <h3 className="text-[17px] font-bold text-[#333D4B]">
                  더 필요한 조건이 있나요?
                </h3>
                <p className="mt-1 text-[13px] text-[#8B95A1]">
                  선택한 목적 중 하나에 맞는 업체에서, 아래 조건을 모두 만족하는 업체만 보여줘요.
                </p>
              </div>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-[#E8F3FF] px-3 py-1.5 text-[13px] font-bold text-[#3182F6]">
                {filteredSolutions.length}개
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {secondaryTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors active:scale-[0.98] ${
                      isSelected
                        ? "bg-[#333D4B] text-white"
                        : "bg-white text-[#4E5968] border border-gray-200"
                    }`}
                  >
                    {tag}
                    <span className="ml-1 text-[11px] opacity-60">{tagCounts[tag] ?? 0}</span>
                  </button>
                );
              })}
            </div>

            {selectedTags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className="flex items-center gap-1 rounded-full bg-[#E8F3FF] px-3 py-1.5 text-[12px] font-bold text-[#1B64DA]"
                  >
                    {tag}
                    <X size={13} />
                  </button>
                ))}
              </div>
            )}
          </section>

          <section className="px-6 md:px-10 mt-8">
            <div className="mb-4 flex items-end justify-between gap-3">
              <h3 className="text-[17px] font-bold text-[#333D4B]">
                추천 업체 <span className="text-[#3182F6]">{filteredSolutions.length}</span>
              </h3>
              <label className="relative shrink-0">
                <span className="sr-only">정렬</span>
                <select
                  value={sortOption}
                  onChange={(event) => setSortOption(event.target.value as SortOption)}
                  className="appearance-none rounded-full border border-gray-200 bg-white py-2 pl-3 pr-8 text-[12px] font-bold text-[#333D4B] outline-none"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#8B95A1]">
                  ▼
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredSolutions.length === 0 ? (
                <div className="bg-white rounded-[24px] p-8 text-center flex flex-col items-center justify-center border border-gray-100">
                  <span className="text-3xl mb-3">🤔</span>
                  <p className="text-[#333D4B] font-bold text-[16px]">
                    조건에 딱 맞는 업체가 없어요
                  </p>
                  <p className="text-[#8B95A1] text-[14px] mt-1">
                    선택한 태그를 조금 줄여보세요.
                  </p>
                </div>
              ) : (
                filteredSolutions.slice(0, 120).map((org) => {
                  const isCompared = compareIds.includes(org.id);
                  const matchedTags = [
                    ...selectedCategories.filter((category) => org.majorTags.includes(category)),
                    ...selectedTags.filter((tag) => matchesTag(org, tag)),
                  ].filter(Boolean) as string[];
                  return (
                    <article
                      key={org.id}
                      onClick={() => setSelectedOrg(org)}
                      className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-50 hover:shadow-md transition-shadow active:scale-[0.98] cursor-pointer"
                    >
                      <div className="flex items-start mb-3 gap-3">
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-2xl bg-[#F2F4F6] border border-gray-100 flex items-center justify-center">
                            {org.logo ? (
                              <img
                                src={org.logo}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span className="text-[13px] font-bold text-[#6B7684]">
                                {initials(org.name)}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-[18px] font-bold text-[#191F28] leading-6">
                              {org.name}
                            </h4>
                            <p className="mt-1 text-[#6B7684] text-[13px] leading-snug">
                              {org.recommendation}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-[#6B7684] text-[14px] leading-snug mb-4">
                        {org.summary}
                      </p>

                      <div className="grid gap-2 text-[12px] text-[#4E5968] mb-4">
                        <InfoRow label="결과물" value={compactTags(org.deliverables, 4).join(", ")} />
                        <InfoRow label="기술" value={compactTags(org.techTags, 4).join(", ")} />
                        <InfoRow label="가격" value={org.priceText[0] || "상세 확인 필요"} />
                        <InfoRow label="혜택" value={org.benefits[0] || "등록된 무료 혜택 없음"} />
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {compactTags(matchedTags, 5).map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#E8F3FF] text-[#1B64DA] text-[12px] px-2.5 py-1 rounded-[6px] font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                        {compactTags(org.majorTags, 3).map((tag) =>
                          matchedTags.includes(tag) ? null : (
                            <span
                              key={tag}
                              className="bg-[#F2F4F6] text-[#4E5968] text-[12px] px-2.5 py-1 rounded-[6px] font-medium"
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleCompare(org.id);
                          }}
                          className={`flex-1 rounded-[14px] py-3 text-[14px] font-bold transition-colors ${
                            isCompared
                              ? "bg-[#E8F3FF] text-[#1B64DA]"
                              : "bg-[#F2F4F6] text-[#333D4B]"
                          }`}
                        >
                          {isCompared ? "비교함에 담김" : "비교 담기"}
                        </button>
                        <a
                          href={org.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="flex items-center justify-center gap-1 rounded-[14px] bg-[#191F28] px-4 py-3 text-[14px] font-bold text-white"
                        >
                          상세
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </section>
        </div>

        {isLoading && (
          <div className="px-6 mt-8 space-y-4 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/3 mb-6" />
            {[1, 2].map((index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] p-5 h-36 border border-gray-50 flex flex-col justify-center gap-3"
              >
                <div className="h-5 bg-gray-100 rounded-md w-1/2" />
                <div className="h-4 bg-gray-100 rounded-md w-3/4" />
                <div className="flex gap-2 mt-2">
                  <div className="h-6 bg-gray-100 rounded-md w-16" />
                  <div className="h-6 bg-gray-100 rounded-md w-16" />
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          className={`fixed bottom-0 left-1/2 w-full max-w-md md:max-w-2xl -translate-x-1/2 bg-gradient-to-t from-[#F2F4F6] via-[#F2F4F6] to-transparent pt-10 pb-6 px-6 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            hasSelectedCategory && !isLoading ? "translate-y-0" : "translate-y-[150%]"
          }`}
        >
          <button
            disabled={filteredSolutions.length === 0}
            onClick={() => {
              setIsComparing(true);
            }}
            className={`w-full py-4 rounded-[16px] text-[17px] font-bold transition-colors shadow-lg flex items-center justify-center gap-2 ${
              filteredSolutions.length === 0
                ? "bg-[#D1D6DB] text-white cursor-not-allowed shadow-none"
                : "bg-[#3182F6] text-white hover:bg-[#1B64DA] active:bg-[#1953B3]"
            }`}
          >
            <CheckCircle2 size={20} />
            {compareIds.length > 0
              ? `선택한 ${compareIds.length}개 업체 비교하기`
              : `${filteredSolutions.length}개 업체 한눈에 비교하기`}
          </button>
        </div>

        <CompareView
          isOpen={isComparing}
          items={compareItems}
          onBack={() => setIsComparing(false)}
          onOpenDetail={(org) => {
            setSelectedOrg(org);
            setIsComparing(false);
          }}
        />

        {selectedOrg && (
          <OrganizationDetailSheet
            org={selectedOrg}
            isCompared={compareIds.includes(selectedOrg.id)}
            onClose={() => setSelectedOrg(null)}
            onToggleCompare={() => toggleCompare(selectedOrg.id)}
          />
        )}
      </main>
    </div>
  );
};

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-2">
      <span className="font-bold text-[#8B95A1]">{label}</span>
      <span className="line-clamp-2 leading-5 text-[#4E5968]">{value}</span>
    </div>
  );
}

function OrganizationDetailSheet({
  org,
  isCompared,
  onClose,
  onToggleCompare,
}: {
  org: SolutionOrg;
  isCompared: boolean;
  onClose: () => void;
  onToggleCompare: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end md:items-center">
      <div className="absolute inset-0 bg-black/40 transition-opacity" onClick={onClose} />

      <div className="relative max-h-[92vh] w-full max-w-md md:max-w-3xl overflow-y-auto bg-white rounded-t-[24px] md:rounded-[24px] p-6 pb-8 transform transition-transform duration-300 animate-slide-up shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
          aria-label="상세 닫기"
        >
          <X size={20} />
        </button>

        <div className="mb-5 pr-8">
          <h2 className="text-2xl font-bold leading-8 text-[#191F28]">{org.name}</h2>
          <p className="mt-2 text-[#8B95A1] text-[14px] leading-5">{org.recommendation}</p>
        </div>

        <div className="mb-5 rounded-[24px] bg-white border border-[#F2F4F6] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
          <div className="flex gap-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-[#F2F4F6] border border-gray-100 flex items-center justify-center">
              {org.logo ? (
                <img src={org.logo} alt="" className="h-full w-full object-cover" />
              ) : (
                <span className="text-[15px] font-bold text-[#6B7684]">{initials(org.name)}</span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[#4E5968] text-[15px] leading-6">{org.summary}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {compactTags([...org.majorTags, ...org.techTags], 8).map((tag) => (
              <span
                key={tag}
                className="bg-[#F2F4F6] text-[#4E5968] text-[13px] px-3 py-1.5 rounded-[8px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#F9FAFB] rounded-[16px] p-4">
              <h4 className="text-[13px] font-bold text-[#8B95A1] mb-2 flex items-center gap-1.5">
                <span className="text-blue-500 text-lg">⚙️</span>
                AI 기술/방식
              </h4>
              <p className="text-[#333D4B] text-[14px] leading-relaxed">
                {compactTags(org.techTags, 12).join(", ") || "확인필요"}
              </p>
              <p className="mt-2 text-[#6B7684] text-[13px] leading-relaxed">
                근거: {org.techEvidence || "확인필요"}
              </p>
            </div>

            <div className="bg-[#E8F3FF] rounded-[16px] p-4">
              <h4 className="text-[13px] font-bold text-[#3182F6] mb-2 flex items-center gap-1.5">
                <span className="text-blue-600 text-lg">🎁</span>
                제공받는 결과물
              </h4>
              <p className="text-[#1B64DA] text-[14px] font-medium leading-relaxed">
                {compactTags(org.deliverables, 10).join(", ") || "상세 확인 필요"}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-[15px] font-bold text-[#191F28] mb-3">서비스 상세 특징</h4>
            <ul className="space-y-2.5">
              {org.services.map((service) => (
                <li key={service.id} className="flex items-start gap-2">
                  <Check size={16} className="text-[#3182F6] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4E5968] text-[14px] leading-relaxed">
                    <strong className="text-[#333D4B]">{service.name}</strong>
                    {service.summary ? ` · ${service.summary}` : ""}
                    {service.techTags.length > 0
                      ? ` · 기술: ${compactTags(service.techTags, 4).join(", ")}`
                      : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-gray-100 my-2" />

          <div className="bg-[#F9FAFB] border border-[#F2F4F6] rounded-[16px] p-4 flex gap-3 items-start">
            <div className="bg-white p-1.5 rounded-full shadow-sm text-blue-500 flex-shrink-0">
              <ThumbsUp size={18} />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#8B95A1] mb-1">이런 분들께 추천해요</h4>
              <p className="text-[#333D4B] text-[14px] leading-snug font-medium">{org.recommendation}</p>
            </div>
          </div>

          <div className="flex gap-3 items-start px-2">
            <div className="text-gray-400 mt-0.5 flex-shrink-0">
              <CreditCard size={18} />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#8B95A1] mb-0.5">예상 가격 / 요금제</h4>
              <p className="whitespace-pre-line text-[#333D4B] text-[14px]">
                {org.priceText.join("\n") || "상세 확인 필요"}
              </p>
            </div>
          </div>

          {org.benefits.length > 0 && (
            <div className="bg-[#F9FAFB] rounded-[16px] p-4">
              <h4 className="text-[13px] font-bold text-[#8B95A1] mb-2">무료 혜택</h4>
              <p className="whitespace-pre-line text-[#333D4B] text-[14px] leading-relaxed">
                {org.benefits.join("\n")}
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-[1fr_auto] gap-2">
          <button
            type="button"
            onClick={onToggleCompare}
            className={`rounded-[16px] py-4 text-[16px] font-bold transition-colors ${
              isCompared
                ? "bg-[#E8F3FF] text-[#1B64DA]"
                : "bg-[#3182F6] hover:bg-[#1B64DA] active:bg-[#1953B3] text-white"
            }`}
          >
            {isCompared ? "비교함에서 제거" : "비교 담기"}
          </button>
          <a
            href={org.website || org.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 rounded-[16px] bg-[#191F28] px-4 py-4 text-[16px] font-bold text-white"
          >
            방문
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

function CompareView({
  isOpen,
  items,
  onBack,
  onOpenDetail,
}: {
  isOpen: boolean;
  items: SolutionOrg[];
  onBack: () => void;
  onOpenDetail: (org: SolutionOrg) => void;
}) {
  const compareItems = items;
  const labelColumnWidth = 112;
  const orgColumnWidth = 248;
  const tableWidth = labelColumnWidth + compareItems.length * orgColumnWidth;
  const rows = [
    { id: "popularity", label: "인기", value: (org: SolutionOrg) => `팔로워 ${org.followerCount.toLocaleString("ko-KR")}명` },
    { id: "tags", label: "제공 형태", value: (org: SolutionOrg) => compactTags(org.majorTags, 5).join(", ") },
    { id: "price", label: "예상 비용", value: (org: SolutionOrg) => org.priceText[0] || "상세 확인 필요" },
    { id: "tech", label: "기술 방식", value: (org: SolutionOrg) => compactTags(org.techTags, 6).join(", ") || "확인필요" },
    { id: "deliverables", label: "결과물", value: (org: SolutionOrg) => compactTags(org.deliverables, 6).join(", ") || "상세 확인 필요" },
    { id: "features", label: "상세 특징", value: (org: SolutionOrg) => compactTags(org.services.map((service) => [service.name, service.summary].filter(Boolean).join(": ")), 3).join("\n") },
    { id: "benefits", label: "무료 혜택", value: (org: SolutionOrg) => org.benefits[0] || "등록된 무료 혜택 없음" },
  ];

  return (
    <div className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex h-full flex-col bg-white">
        <header className="shrink-0 px-5 md:px-8 pt-10 pb-4 flex items-center bg-white border-b border-gray-100 z-40">
          <button
            type="button"
            onClick={onBack}
            className="p-2 -ml-2 mr-2 text-[#4E5968] hover:bg-gray-100 rounded-full transition-colors"
            aria-label="비교 화면 닫기"
          >
            <ChevronLeft size={26} />
          </button>
          <div>
            <h2 className="text-[20px] font-bold text-[#191F28]">업체 상세 비교</h2>
            <p className="mt-0.5 text-[13px] text-[#8B95A1]">{compareItems.length}개 업체를 항목별로 비교합니다.</p>
          </div>
        </header>

        <div className="flex-1 overflow-x-auto overflow-y-auto bg-white pb-10">
          {compareItems.length === 0 ? (
            <div className="m-6 rounded-[24px] bg-[#F2F4F6] p-8 text-center">
              <p className="text-[16px] font-bold text-[#333D4B]">비교할 업체가 없습니다</p>
              <p className="mt-2 text-[14px] text-[#8B95A1]">업체 카드에서 비교 담기를 눌러보세요.</p>
            </div>
          ) : (
            <table
              className="table-fixed border-collapse text-left"
              style={{ minWidth: tableWidth, width: tableWidth }}
            >
              <colgroup>
                <col style={{ width: labelColumnWidth }} />
                {compareItems.map((org) => (
                  <col key={`col-${org.id}`} style={{ width: orgColumnWidth }} />
                ))}
              </colgroup>
              <thead>
                <tr>
                  <th className="sticky left-0 top-0 z-30 bg-white/95 p-4 align-bottom border-b border-r border-gray-100 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                    <span className="block text-[12px] font-medium text-[#8B95A1]">비교 항목</span>
                  </th>
                  {compareItems.map((org) => (
                    <th
                      key={`header-${org.id}`}
                      className="sticky top-0 z-20 bg-white/95 p-5 align-top border-b border-gray-100 backdrop-blur"
                    >
                      <h3 className="mb-1 line-clamp-2 h-12 whitespace-normal text-[18px] font-bold leading-6 text-[#191F28]">{org.name}</h3>
                      <p className="mb-3 line-clamp-2 h-10 whitespace-normal text-[13px] font-normal leading-snug text-[#6B7684]">{org.summary}</p>
                      <button
                        type="button"
                        onClick={() => onOpenDetail(org)}
                        className="w-full rounded-[8px] bg-[#F2F4F6] py-2 text-[13px] font-bold text-[#4E5968] transition-colors hover:bg-gray-200"
                      >
                        자세히 보기
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className={`transition-colors hover:bg-gray-50/50 ${
                      row.id === "tech" ? "bg-[#FAFBFC]" : row.id === "deliverables" ? "bg-[#F5F8FF]" : ""
                    }`}
                  >
                    <td
                      className={`sticky left-0 z-10 border-b border-r border-gray-100 p-4 shadow-[2px_0_5px_rgba(0,0,0,0.02)] ${
                        row.id === "tech" ? "bg-[#FAFBFC]" : row.id === "deliverables" ? "bg-[#F5F8FF]" : "bg-white"
                      }`}
                    >
                      <span className={`text-[14px] font-bold ${row.id === "deliverables" ? "text-[#3182F6]" : "text-[#4E5968]"}`}>
                        {row.id === "tech" && <span className="mb-1 block text-lg">⚙️</span>}
                        {row.id === "deliverables" && <span className="mb-1 block text-lg">🎁</span>}
                        {row.label}
                      </span>
                    </td>
                    {compareItems.map((org) => (
                      <td key={`${row.id}-${org.id}`} className="border-b border-gray-100 p-5 align-top">
                        <p className={`whitespace-pre-line text-[14px] leading-relaxed ${
                          row.id === "deliverables" ? "font-semibold text-[#1B64DA]" : "text-[#4E5968]"
                        }`}>
                          {row.value(org)}
                        </p>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="sticky left-0 z-10 border-r border-gray-100 bg-white p-4 shadow-[2px_0_5px_rgba(0,0,0,0.02)]" />
                  {compareItems.map((org) => (
                    <td key={`link-${org.id}`} className="p-5">
                      <a
                        href={org.website || org.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full items-center justify-center gap-1.5 rounded-[12px] bg-[#3182F6] py-3 text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#1B64DA]"
                      >
                        방문하기 <ExternalLink size={14} />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
