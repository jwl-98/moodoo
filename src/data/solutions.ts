export type ServiceSummary = {
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
  { id: "majorTags", label: "큰 작업", tags: [
  "사업계획서/IR",
  "마케팅 콘텐츠",
  "랜딩페이지/홈페이지",
  "MVP/개발",
  "고객검증/시장조사",
  "디자인/브랜딩",
  "영상/이미지",
  "업무자동화/생산성",
  "데이터/리포트",
  "교육/컨설팅"
] },
  { id: "detailTags", label: "세부 작업", tags: [
  "카드뉴스",
  "포스터",
  "블로그",
  "SEO",
  "SNS 문구",
  "광고",
  "사업계획서",
  "IR",
  "발표자료",
  "피드백",
  "랜딩페이지",
  "홈페이지",
  "노코드",
  "DB설계",
  "MVP",
  "수요조사",
  "시장조사",
  "리포트",
  "브랜딩",
  "로고",
  "영상",
  "이미지",
  "자동화",
  "컨설팅",
  "교육"
] },
  { id: "techTags", label: "기술/방식", tags: [
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
  "DB/인프라"
] },
  { id: "deliverables", label: "받을 결과물", tags: [
  "사업계획서",
  "IR/발표자료",
  "카드뉴스",
  "포스터",
  "블로그",
  "SNS/광고 문구",
  "랜딩페이지",
  "홈페이지",
  "MVP",
  "시장/수요조사",
  "리포트",
  "로고",
  "영상",
  "이미지",
  "자동화",
  "컨설팅"
] },
  { id: "conditions", label: "조건", tags: [
  "무료 혜택 있음",
  "가격 공개",
  "웹사이트 있음"
] },
] as const;

export const SOLUTIONS: SolutionOrg[] = [
  {
    "id": 855,
    "name": "주식회사 핸디컴퍼니",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191706/14ed6aee62ac4dacb34b92a4a69f4aad.png",
    "summary": "다음 라운드? 핸디독스로 준비하세요!",
    "description": "### **🏆 인기 AI 솔루션 [핸디독스](https://handydocs.ai.kr/) 🏆** 다음 라운드에 합격하신 여러분들을 진심으로 축하드립니다. 다음 라운드 진출을 위해 **고도화된 사업계획서**, **발표를 위한 IR자료** 등의 비즈니스 문서들이 필요해진다는 것 알고 계셨나요? 핸디독스는 모두의 창업 합격자분들의 페인포인트를 정확히 짚어 사업의 본질에 더 집중할 수 있도록 ++**모두의 창업가 전용**++ ++**사업계획서 전문 AI 서비스**++를 제공하고 있습니다. ### 🤖 핸디독스는 어떤 솔루션인가요? 핸디독스는 사업계획서 자동 생성 AI로 단 3분 안에 합격 패턴이 학습된 여러분들만의 사업계획서가 생성됩니다. 특히나 이번 모두의창업 시즌에는 **모두의 창업가 전용** **사업계획서(3P)** **서비스**가 제공됩니다. 로컬 분야의 경우 IR자료 제출이 필요하므로 IR 기획을 위한 아이데이션 기능도 체험판으로 활용하",
    "website": "https://handydocs.ai.kr/",
    "email": "ai@handycompany.kr",
    "contact": "010-7937-9414",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/855",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "handydocs (핸디독스)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "광고",
      "사업계획서",
      "IR",
      "발표자료",
      "랜딩페이지",
      "MVP",
      "리포트",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "랜딩페이지",
      "MVP",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "랜딩페이지, 랜딩, MVP, 리포트, 인프라",
    "priceText": [
      "프로 요금제 / 월 구독 / 199,000원"
    ],
    "minPrice": 199000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 🎁 (일반) 무료 MVP 자동 생성 1회 ㅣ 생성된 사업계획서로 MVP를 무료로 생성해보세요!",
      "Free: 🎁 (로컬) 무료 IR 덱 자동 생성 1회 ㅣ 생성된 사업계획서로 IR 덱을 무료로 생성해보세요!"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 6496,
    "likeCount": 6398,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1480,
        "name": "handydocs (핸디독스)",
        "summary": "다음 라운드? 핸디독스로 준비하세요!",
        "website": "https://handydocs.ai.kr/",
        "keywords": [
          "사업계획서",
          "사업계획서AI",
          "사업계획서자동생성",
          "시장검증",
          "정부지원사업"
        ],
        "priceText": [
          "프로 요금제 / 월 구독 / 199,000원"
        ],
        "priceNumber": 199000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 🎁 (일반) 무료 MVP 자동 생성 1회 ㅣ 생성된 사업계획서로 MVP를 무료로 생성해보세요!",
          "Free: 🎁 (로컬) 무료 IR 덱 자동 생성 1회 ㅣ 생성된 사업계획서로 IR 덱을 무료로 생성해보세요!"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "랜딩페이지",
          "MVP",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "광고",
          "사업계획서",
          "IR",
          "발표자료",
          "랜딩페이지",
          "MVP",
          "리포트",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "랜딩페이지, 랜딩, MVP, 리포트, 인프라"
      }
    ]
  },
  {
    "id": 620,
    "name": "모달리 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186579/da8df1495e9644b7b6a92bcf82ce1a1f.jpeg",
    "summary": "최고 전문가의 BM 전략, PPT, 사업계획서로 완성해 주는 AI 에이전트 솔루션",
    "description": "**최고 전문가의 BM 전략, PPT, 사업계획서로 완성해 주는 AI 에이전트 솔루션** 모달리(Modaly)는 ChatGPT, Claude, Gemini의 최신 플래그십 AI 모델을 적재적소에 활용하여 AI 채팅 및 에이전틱 워크플로우의 완성도를 극대화했습니다. 여기에 글로벌 탑티어 컨설팅, IB/PE/VC, 대기업, 테크 스타트업의 베스트 프랙티스와 실전 노하우를 결합하여, 창업가분들의 세상을 바꿀 아이디어를 최고 전문가 수준의 BM 전략, PPT, 사업계획서로 완성해 드립니다. 압도적인 결과물의 차이, 지금 모달리에서 직접 경험해 보세요. 성공적인 창업의 시작을 함께하겠습니다. **[1] 아이디어 고도화 위한 심층 채팅** ChatGPT, Claude, Gemini의 최신 플래그십 AI 모델을 사용하여, 창업가의 아이디어에 맞게 해당 분야 최고 전문가 수준의 사업 전략과 실행 계획을 수립합니다. 답변의 구체적 논리를 제공하고, 명확한 출처 제공을 통해 할루시네이션 없는",
    "website": "https://modaly.ai",
    "email": "support@modaly.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/620",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "모달리(Modaly)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "광고",
      "사업계획서",
      "IR",
      "발표자료",
      "MVP",
      "시장조사",
      "리포트",
      "영상",
      "이미지",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "시장조사/리서치",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "이미지 생성",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "MVP",
      "리포트",
      "영상",
      "이미지",
      "컨설팅"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, Gemini, AI 모델, AI 에이전트, 에이전트, 리서치, MVP, 데이터 분석",
    "priceText": [
      "Pro(모든 AI 모델 무제한) / 월 구독 / 330,000원"
    ],
    "minPrice": 330000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 초기 창업팀",
    "followerCount": 6507,
    "likeCount": 5852,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1133,
        "name": "모달리(Modaly)",
        "summary": "최고 전문가의 BM 전략, PPT, 사업계획서로 완성해 주는 AI 에이전트 솔루션",
        "website": "https://modaly.ai/ko/about",
        "keywords": [
          "BM",
          "IR",
          "PPT",
          "고객",
          "발표",
          "보고서",
          "사업계획서",
          "에이전틱 AI",
          "인터뷰",
          "클로드"
        ],
        "priceText": [
          "Pro(모든 AI 모델 무제한) / 월 구독 / 330,000원"
        ],
        "priceNumber": 330000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "MVP",
          "리포트",
          "영상",
          "이미지",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "광고",
          "사업계획서",
          "IR",
          "발표자료",
          "MVP",
          "시장조사",
          "리포트",
          "영상",
          "이미지",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, Gemini, AI 모델, AI 에이전트, 에이전트, 리서치, MVP, 데이터 분석, 분석, 리포트"
      }
    ]
  },
  {
    "id": 674,
    "name": "가까운 AI 파트너- 넥사코드(패스해커)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/249261/62c1c6ee00fd428bb5ea6de7a2d96eb1.png",
    "summary": "3분 AI홈페이지로 시장검증, 1,000회 노출 테스트까지 - 사업계획서용 시장 반응 데이터도 챙기세요!",
    "description": "PC 앞에서 멍때리는 시간을 결과물로 바꿔주는 AI회사",
    "website": "https://nexacode.co.kr",
    "email": "nexacode@nexacode.co.kr",
    "contact": "010-4836-2398",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/674",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "패스해커 레이더",
      "패스해커 서포터"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트",
      "교육/컨설팅",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "사업계획서",
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "DB설계",
      "MVP",
      "수요조사",
      "시장조사",
      "컨설팅",
      "자동화"
    ],
    "techTags": [
      "시장조사/리서치",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "업무 자동화/API",
      "DB/인프라",
      "LLM/생성형AI"
    ],
    "deliverables": [
      "사업계획서",
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "컨설팅",
      "자동화"
    ],
    "techEvidence": "시장조사, 노코드, 랜딩페이지, 랜딩, 홈페이지, MVP, 예약, DB, LLM, 생성형",
    "priceText": [
      "프로 스케일업/1개월 / 유/무료 혼합 / 298,000원",
      "프로 스케일업 / 유/무료 혼합 / 190,000원"
    ],
    "minPrice": 190000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "🫡선착순 100명 대상: MVP(앱/웹) 전문가의 1:1 컨설팅 제공",
      "1️⃣멀티모델 AI Pro 6개월 제공 [54만원 상당]: 기획 AI · 문서(PPT 등) 생성",
      "2️⃣멀티모델 AI Pro 1개월 추가 [9만원 상당]: 패스해커 레이더 + 서포터 동시 사용 시",
      "🫡예선 통과자 대상: MVP(앱/웹) 전문가의 1:1 컨설팅 제공",
      "1️⃣멀티모델 AI Pro 3개월 제공 [27만원 상당]: 기획 AI · 문서(PPT 등) 생성"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, 랜딩페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 3801,
    "likeCount": 6094,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1215,
        "name": "패스해커 레이더",
        "summary": "3분 AI홈페이지로 시장검증, 1,000회 노출 테스트까지 - 사업계획서용 시장 반응 데이터도 챙기세요!",
        "website": "https://passhacker.com/modoo",
        "keywords": [
          "0%에 수렴하는 실패확률, 성공 창업공식",
          "DB",
          "MVP",
          "노코드",
          "랜딩페이지",
          "사업계획서",
          "수요조사",
          "시장조사",
          "웹사이트",
          "홈페이지"
        ],
        "priceText": [
          "프로 스케일업/1개월 / 유/무료 혼합 / 298,000원"
        ],
        "priceNumber": 298000,
        "pricingKind": "fixed",
        "benefits": [
          "🫡선착순 100명 대상: MVP(앱/웹) 전문가의 1:1 컨설팅 제공",
          "1️⃣멀티모델 AI Pro 6개월 제공 [54만원 상당]: 기획 AI · 문서(PPT 등) 생성",
          "2️⃣멀티모델 AI Pro 1개월 추가 [9만원 상당]: 패스해커 레이더 + 서포터 동시 사용 시"
        ],
        "deliverables": [
          "사업계획서",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "DB설계",
          "MVP",
          "수요조사",
          "시장조사",
          "컨설팅"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "시장조사, 노코드, 랜딩페이지, 랜딩, 홈페이지, MVP, 예약, DB"
      },
      {
        "id": 1216,
        "name": "패스해커 서포터",
        "summary": "아이디어+3분 AI 사업계획서 =🎁1라운드 준비 완료🎁 다음 라운드 통과를 위해서 내 아이디어를 모두의 창업 사업계획서에 맞춰 논리를 정리해드려요!",
        "website": "https://passhacker.com/modoo",
        "keywords": [
          "LLM, 생성형 AI로 못하는 슈퍼 글쓰기 AI",
          "글쓰기",
          "글쓰기 ai",
          "문서 작성",
          "사업계획서",
          "사업계획서 ai",
          "서류 작성",
          "솔루션",
          "자동화",
          "정부지원사업"
        ],
        "priceText": [
          "프로 스케일업 / 유/무료 혼합 / 190,000원"
        ],
        "priceNumber": 190000,
        "pricingKind": "fixed",
        "benefits": [
          "🫡예선 통과자 대상: MVP(앱/웹) 전문가의 1:1 컨설팅 제공",
          "1️⃣멀티모델 AI Pro 3개월 제공 [27만원 상당]: 기획 AI · 문서(PPT 등) 생성",
          "2️⃣멀티모델 AI Pro 1개월 추가 제공 [9만원 상당]: 패스해커 레이더 + 서포터 동시 사용 시"
        ],
        "deliverables": [
          "사업계획서",
          "홈페이지",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "홈페이지",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 생성형, 홈페이지, MVP, 자동화, 예약"
      }
    ]
  },
  {
    "id": 680,
    "name": "가능성을 담다.. 담다랩스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186234/d131e5abf5b04ff9a982a9bf639485ee.png",
    "summary": "(체험판제공) 1 Round 통과를 간절히 원하는분들께 추천드립니다. 이번 라운드는 멘토링이 핵심입니다. 1라운드 제출용 멘토링 보고서를 고도화 해드립니다. 사업계획서의 품질을 높일 수 있는 AI 기반 사업전략 분석 딥리서치 솔루션",
    "description": "🤝 **모두의 창업 1 Round**에 진출하신 도전자분들 축하드립니다! 이제 다음 라운드 진출을 위해 바쁘게 움직이셔야할텐데요. 지원자분들의 편의를 위해 저희 솔루션이 많은 도움을 드리겠습니다. **솔루션 관련 무료 컨설팅,** **AI 솔루션 업체 비교 추천 솔루션,** **스타트업 스타터팩(문서) 제공, 창업자 커뮤니티 등** 다양한 혜택을 드리고자 합니다. 🚀 **주식회사 담다랩스**는 2026년에 설립된 AI 솔루션 스타트업입니다. 신생 기업이지만, 20억이상 정부지원사업을 수주한 기획자, 평균 경력 10년 이상의 개발팀과 생성형 AI 물류 챗봇 프로젝트를 성사시킨 경험을 가진 팀원들이 함께하며, 빠른 실행력과 실무 중심의 기술 역량을 바탕으로 AI 서비스를 개발하고 있습니다. 💡 **담다랩스는 초기 창업자가 겪는 현실적인 어려움에 주목합니다.** 많은 예비창업자와 초기 스타트업은 좋은 아이디어를 가지고 있어도 이를 사업계획서, 시장조사, 고객분석, 수익모",
    "website": "https://kstarterpack.com/",
    "email": "sales@kstarterpack.com",
    "contact": "010-8902-3121",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/680",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "K스타터팩"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "시장조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "시장/수요조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "생성형, 시장조사, 리서치, 시장분석, 분석, 보고서, 자동화, 인프라",
    "priceText": [
      "PRO / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료플랜: 프로젝트 1개 무료 분석, 기본분석 서비스 제공"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, 시장/수요조사 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 1216,
    "likeCount": 1128,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1227,
        "name": "K스타터팩",
        "summary": "(체험판제공) 1 Round 통과를 간절히 원하는분들께 추천드립니다. 이번 라운드는 멘토링이 핵심입니다. 1라운드 제출용 멘토링 보고서를 고도화 해드립니다. 사업계획서의 품질을 높일 수 있는 AI 기반 사업전략 분석 딥리서치 솔루션",
        "website": "https://kstarterpack.com/",
        "keywords": [
          "가성비솔루션",
          "마케팅",
          "멘토링",
          "비즈니스모델",
          "사업계획서",
          "사업기획",
          "스타트업전략",
          "시장분석",
          "전략분석",
          "정부지원사업"
        ],
        "priceText": [
          "PRO / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "무료플랜: 프로젝트 1개 무료 분석, 기본분석 서비스 제공"
        ],
        "deliverables": [
          "사업계획서",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "시장조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "생성형, 시장조사, 리서치, 시장분석, 분석, 보고서, 자동화, 인프라"
      }
    ]
  },
  {
    "id": 630,
    "name": "가장 빠른 웹 앱(MVP) 만들기 - 세리온.",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188775/5e8e9edc02174b1dac4992fc8b7fe680.png",
    "summary": "아이디어를 평가에서 보여줄 작동하는 앱으로, 시장검증데이터도 제공합니다.니다.",
    "description": "사업계획서에 작동하는 웹 앱(MVP)을 더하세요. ## **🔗 실제 작동하는 데모** **33종 라이브. 로그인 없이 바로 열어서 직접 만져보세요.** **· 의료 → 내증상AI (AI 증상분석 → 병원예약)** **[health-check.foundry.ai.kr](http://health-check.foundry.ai.kr)** **· 금융 → 머니노트 (가계부·자산 통합 관리)** **[money-note.foundry.ai.kr](http://money-note.foundry.ai.kr)** **· 마케팅 → 애드뷰 (광고 성과 통합 대시보드)** **[ad-view.foundry.ai.kr](http://ad-view.foundry.ai.kr)** **· 뷰티 → 컬러핏 (AI 퍼스널컬러 진단)** **[color-fit.foundry.ai.kr](http://color-fit.foundry.ai.kr)** **· 법률 → 서류도우미 (AI 법률",
    "website": "https://foundry.ai.kr",
    "email": "mark@serion.ai.kr",
    "contact": "050-7871-1707",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/630",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Foundry"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "SNS 문구",
      "광고",
      "사업계획서",
      "피드백",
      "홈페이지",
      "DB설계",
      "MVP",
      "리포트",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "SNS/광고 문구",
      "홈페이지",
      "MVP",
      "리포트",
      "자동화"
    ],
    "techEvidence": "GPT, Claude, 홈페이지, MVP, 시제품, 대시보드, 분석, 리포트, 보고서, 자동화",
    "priceText": [
      "36,000크래딧 / CREDIT_TOKEN / 290,000원"
    ],
    "minPrice": 290000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "회원가입 무료 크래딧: 회원가입 즉시 2,000 크레딧 무료 지급[가입 후 즉시 AI 상담 / 사업계획서 분석 / AI 회의실 체험 가능]",
      "비로그인 무료 체험 웹앱(MVP)만들기 (1회): 회원가입·결제 없이 아이디어만 입력하면, 10분 만에 진짜 작동하는 웹앱(MVP)을 1회 무료로 만들어 체험할 수 있습니다. 비개발자도 OK. 결과물은 회원가입 시 내 프로젝트로 이관됩니다."
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 746,
    "likeCount": 717,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1148,
        "name": "Foundry",
        "summary": "아이디어를 평가에서 보여줄 작동하는 앱으로, 시장검증데이터도 제공합니다.니다.",
        "website": "https://foundry.ai.kr/?utm_source=modu&utm_medium=solution&utm_content=website",
        "keywords": [
          "CLAUDE",
          "GPT",
          "MVP",
          "사업계획서",
          "수요분석",
          "시장검증",
          "시제품제작",
          "앱만들기",
          "클로드",
          "홈페이지"
        ],
        "priceText": [
          "36,000크래딧 / CREDIT_TOKEN / 290,000원"
        ],
        "priceNumber": 290000,
        "pricingKind": "usage",
        "benefits": [
          "회원가입 무료 크래딧: 회원가입 즉시 2,000 크레딧 무료 지급[가입 후 즉시 AI 상담 / 사업계획서 분석 / AI 회의실 체험 가능]",
          "비로그인 무료 체험 웹앱(MVP)만들기 (1회): 회원가입·결제 없이 아이디어만 입력하면, 10분 만에 진짜 작동하는 웹앱(MVP)을 1회 무료로 만들어 체험할 수 있습니다. 비개발자도 OK. 결과물은 회원가입 시 내 프로젝트로 이관됩니다."
        ],
        "deliverables": [
          "사업계획서",
          "SNS/광고 문구",
          "홈페이지",
          "MVP",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "광고",
          "사업계획서",
          "피드백",
          "홈페이지",
          "DB설계",
          "MVP",
          "리포트",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "GPT, Claude, 홈페이지, MVP, 시제품, 대시보드, 분석, 리포트, 보고서, 자동화, 예약, DB"
      }
    ]
  },
  {
    "id": 835,
    "name": "기업 AI 브랜딩 자동화, 요비",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/117714/41ebb8c6273b45cfac2a9bd301cbe32a.png",
    "summary": "다음 라운드를 위한 브랜드 준비, 로고·명함·SNS·포스터·상세페이지까지 한 번에.",
    "description": "# **↑ 상단 탭 'AI 솔루션' 클릭하고 자세한 설명 보기** # 다음 라운드를 위한 브랜드 준비를 시작하세요. > ### 요비(Yo-B)는 복잡한 브랜딩 과정을 쉽게 바꿉니다. > > 브랜드 방향을 정리하고, 그 기준에 맞춰 로고와 콘텐츠를 한 번에 만들 수 있습니다. ### **👉 요비(Yo-B) 소개 자세히 보기** ### [https://www.modoo.or.kr/ai-solution/organization/835?solutionTab=%EC%9A%94%EB%B9%84%28yo-b%29&tab=solution](https://www.modoo.or.kr/ai-solution/organization/835?solutionTab=%EC%9A%94%EB%B9%84%28yo-b%29&tab=solution) 요비(Yo-B)는 모두의창업 AI 솔루션 공급기업으로 선정되어 1차 아이디어 단계에 선발된 창업자 **5,000명을 위한 전용 혜택을 제공**합니다. ---",
    "website": "https://yo-b.com/modoo",
    "email": "info@tidy-b.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/835",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "요비(Yo-B)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "포스터",
      "SNS 문구",
      "광고",
      "사업계획서",
      "랜딩페이지",
      "브랜딩",
      "로고",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "포스터",
      "SNS/광고 문구",
      "랜딩페이지",
      "로고",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "랜딩, 이미지, 자동화",
    "priceText": [
      "모두의창업 전용 크레딧 패키지 / CREDIT_TOKEN / 234,000원"
    ],
    "minPrice": 234000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "🎯 2라운드 진출자(300명) 대상: '모두의 창업' 멘토 브랜드 전문가의 1:1 컨설팅 혜택 제공",
      "1️⃣ 전문 디자이너 로고 최종 완성: 요비 AI로 만든 로고를 전문 디자이너가 교정 1회 지원 [ 4만 원 상당 ]",
      "2️⃣ 명함 디자인·인쇄 배송: 명함 디자인 제작 후 1인 200매 인쇄 및 배송 제공 [ 8만 원 상당 ]"
    ],
    "recommendation": "사업계획서, 포스터 결과물로 첫 고객 반응을 빠르게 확인하려는 요비(Yo-B) 같은 서비스가 필요한 팀",
    "followerCount": 717,
    "likeCount": 588,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1443,
        "name": "요비(Yo-B)",
        "summary": "다음 라운드를 위한 브랜드 준비, 로고·명함·SNS·포스터·상세페이지까지 한 번에.",
        "website": "https://yo-b.com/modoo",
        "keywords": [
          "SNS",
          "광고",
          "디자인",
          "로고",
          "마케팅",
          "명함",
          "브랜드 전략",
          "브랜딩",
          "상세페이지",
          "자료"
        ],
        "priceText": [
          "모두의창업 전용 크레딧 패키지 / CREDIT_TOKEN / 234,000원"
        ],
        "priceNumber": 234000,
        "pricingKind": "usage",
        "benefits": [
          "🎯 2라운드 진출자(300명) 대상: '모두의 창업' 멘토 브랜드 전문가의 1:1 컨설팅 혜택 제공",
          "1️⃣ 전문 디자이너 로고 최종 완성: 요비 AI로 만든 로고를 전문 디자이너가 교정 1회 지원 [ 4만 원 상당 ]",
          "2️⃣ 명함 디자인·인쇄 배송: 명함 디자인 제작 후 1인 200매 인쇄 및 배송 제공 [ 8만 원 상당 ]"
        ],
        "deliverables": [
          "사업계획서",
          "포스터",
          "SNS/광고 문구",
          "랜딩페이지",
          "로고",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "포스터",
          "SNS 문구",
          "광고",
          "사업계획서",
          "랜딩페이지",
          "브랜딩",
          "로고",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩, 이미지, 자동화"
      }
    ]
  },
  {
    "id": 759,
    "name": "홍보 영상 자동화 에이전트 - 빠나나 AI",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189073/a999aafb6bc346b588444969e1185df5.png",
    "summary": "내 아이디어, 인스타·쇼츠·유튜브 광고영상으로 바로 만들어드립니다",
    "description": "**수 천장의 사업계획서보다 15초의 광고가 더 강력한 메시지를 전달합니다.** **빠나나 에이전트가 여러분의 서비스 영상을 자동으로 만들어 드립니다.** **📌 제품 이미지 한 장, 서비스 설명 한 줄만 넣으시면 광고 영상이 만들어집니다.** 빠나나 AI 에이전트가 자동으로 웹에서 시장을 조사하고, 후킹과 CTA를 분석하여 TV CF급 영상으로 완성합니다. **예시 1) 모두의 창업 브랜딩 영상 보기 - [https://youtu.be/araKiUsrmMY](https://youtu.be/araKiUsrmMY)** 원하는 컨셉을 선택 후 대략적으로 여러분의 서비스를 입력하시면 에이전트가 완벽한 광고로 만들어집니다. **예시 2) 빨래 수거 서비스 홍보 영상 보기 - [https://youtu.be/iQ_AKbvsKOQ](https://youtu.be/iQ_AKbvsKOQ)** **예시 3) 제품 홍보 영상 보기 - [https://youtu.be/hoHYP3fNMJ",
    "website": "https://bbanana.ai",
    "email": "support@bbanana.ai",
    "contact": "010-5643-5620",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/759",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "BBANANA.ai (빠나나에이아이)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "사업계획서",
      "IR",
      "발표자료",
      "랜딩페이지",
      "브랜딩",
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "랜딩페이지",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "GPT, AI 에이전트, 에이전트, 랜딩, 분석, 이미지, 영상 생성, 영상제작, 자동화",
    "priceText": [
      "프로 / 월 구독 / 149,000원"
    ],
    "minPrice": 149000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "가입시 5 크레딧 제공: 빠나나 서비스를 테스트 해보실 수 있습니다."
    ],
    "recommendation": "사업계획서, IR/발표자료 결과물로 첫 고객 반응을 빠르게 확인하려는 BBANANA.ai (빠나나에이아이) 같은 서비스가 필요한 팀",
    "followerCount": 412,
    "likeCount": 300,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1338,
        "name": "BBANANA.ai (빠나나에이아이)",
        "summary": "내 아이디어, 인스타·쇼츠·유튜브 광고영상으로 바로 만들어드립니다",
        "website": "https://bbanana.ai/",
        "keywords": [
          "1영상사업계획서",
          "IR영상",
          "광고영상제작",
          "발표평가",
          "사업소개영상",
          "서비스홍보영상",
          "쇼츠제작",
          "아이템시각화",
          "유튜브콘텐츠",
          "인스타"
        ],
        "priceText": [
          "프로 / 월 구독 / 149,000원"
        ],
        "priceNumber": 149000,
        "pricingKind": "fixed",
        "benefits": [
          "가입시 5 크레딧 제공: 빠나나 서비스를 테스트 해보실 수 있습니다."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "랜딩페이지",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "사업계획서",
          "IR",
          "발표자료",
          "랜딩페이지",
          "브랜딩",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, AI 에이전트, 에이전트, 랜딩, 분석, 이미지, 영상 생성, 영상제작, 자동화"
      }
    ]
  },
  {
    "id": 795,
    "name": "주식회사 트리거파트너스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186947/69b95c0f348c4a6eb2132e02cee954eb.png",
    "summary": "업무관리툴에서 AI에이전트(피터보이스)로 업무들을 바로 실행할 수 있는 업무관리툴 - 답변을 넘어 사업의 실질적인 실행을 돕는, 초기 창업가를 위한 자율 실행형 AI 에이전트 도나매니저",
    "description": "**오픈클로보다 쉽고 똑똑한**, 말한마디로 사업을 실현하는 AI비서 피터보이스/도나매니저를 운영하는 AX전문기업 **인공지능(AI)**/디지털자산 관련 특허 등록건수 **17건** • 2020 | 우리금융지주 「디노랩」, DGB금융그룹 「피움랩」 핀테크 기업 동시 선정 • 2020 | **벤처창업진흥유공 국무총리 표창**(중소기업벤처부) / 기술혁신유공 기술보증기금 이사장 표창 • 2020 | 우수벤처기업(벤처기업협회) • 2022 | 청년친화강소기업 선정(고용노동부) • 2025 | 가족친화인증기업 선정(여성가족부) • 2026 | ‘지능형 AICC솔루션’, 금융클라우드 지원사업자 선정(한국핀테크지원센터) • 2026 | ‘모두의 창업’, AI솔루션 공급업체 선정 (창업진흥원)",
    "website": "https://donamanager.ai/",
    "email": "woonha.kim@cocktailfd.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/795",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "도나매니저",
      "피터보이스"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "업무자동화/생산성",
      "교육/컨설팅",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "컨설팅",
      "DB설계",
      "시장조사"
    ],
    "techTags": [
      "AI 에이전트",
      "업무 자동화/API",
      "DB/인프라",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "음성/STT/TTS"
    ],
    "deliverables": [
      "컨설팅",
      "상세 확인 필요"
    ],
    "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 업무관리, 클라우드, 리서치, 분석, 음성, DB",
    "priceText": [
      "프로 플랜 / CREDIT_TOKEN / 490,000원",
      "프로 요금제 / CREDIT_TOKEN / 790,000원"
    ],
    "minPrice": 490000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 컨설팅 근거가 필요한 초기 창업팀",
    "followerCount": 251,
    "likeCount": 427,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1383,
        "name": "도나매니저",
        "summary": "업무관리툴에서 AI에이전트(피터보이스)로 업무들을 바로 실행할 수 있는 업무관리툴 - 답변을 넘어 사업의 실질적인 실행을 돕는, 초기 창업가를 위한 자율 실행형 AI 에이전트 도나매니저",
        "website": "",
        "keywords": [
          "1인 쇼핑몰",
          "F&B 리테일",
          "IT 스타트업",
          "경영관리",
          "기술개발·IT",
          "기획",
          "마케팅·콘텐츠",
          "실행",
          "컨설팅·프리랜서",
          "콘텐츠 크리에이터"
        ],
        "priceText": [
          "프로 플랜 / CREDIT_TOKEN / 490,000원"
        ],
        "priceNumber": 490000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 업무관리, 클라우드"
      },
      {
        "id": 1382,
        "name": "피터보이스",
        "summary": "오픈클로보다 쉽고 똑똑한 AI 비서, 1인사업가도 음성만으로 아이디어를 실현해주는 AI 비서",
        "website": "",
        "keywords": [
          "1인 기획자",
          "개발·IT",
          "기획서",
          "리서치·분석",
          "바이브 코딩",
          "쇼핑몰·커머스",
          "앱개발",
          "오픈클로",
          "초기 창업자",
          "콘텐츠제작"
        ],
        "priceText": [
          "프로 요금제 / CREDIT_TOKEN / 790,000원"
        ],
        "priceNumber": 790000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "시장조사"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "DB/인프라"
        ],
        "techEvidence": "리서치, 분석, 음성, DB, 클라우드"
      }
    ]
  },
  {
    "id": 854,
    "name": "비즈벨 - 한글 문서 작성 AI Agent",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/190727/2e74ccc7f3a44ee794614c8ffa64063a.png",
    "summary": "경쟁사 나노 단위로 뜯어봐요",
    "description": "🏆 **모두의 창업 1차 통과를 위한 \"최강 AI\" 비즈벨** 🏆 **[1] ChatGPT, Claude, Gemini, 나노바나나, ChatGPT Image 생성 모델 등 모든 AI 사용 가능** **[2] 웹에서 한글 문서 편집** **[3] AI와 함께 사업계획서 작성 (내용, 인포그래픽 모두 작성)** **[4] 거짓말 없는 국내외 전문 데이터 40종으로 전문 시장 분석** **비즈벨 바로가기 → [https://bizbell.site](https://bizbell.site)** **서비스 소개서 다운로드 →** **[https://drive.google.com/open?id=14fcQ0xRV78bblvn87uebQ-N19XQk7RT8&usp=drive_fs](https://drive.google.com/open?id=14fcQ0xRV78bblvn87uebQ-N19XQk7RT8&usp=drive_fs)** **[1] 모든 AI 모델을 한 곳에서** **-",
    "website": "https://bizbell.site",
    "email": "contact@bizbell.site",
    "contact": "010-2406-2537",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/854",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "bizbell (비즈벨)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "사업계획서"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, Gemini, AI 모델, 경쟁사, 분석",
    "priceText": [
      "350000 / CREDIT_TOKEN / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free: 3000 크레딧으로 AI 30회 사용"
    ],
    "recommendation": "사업계획서를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 341,
    "likeCount": 326,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1475,
        "name": "bizbell (비즈벨)",
        "summary": "경쟁사 나노 단위로 뜯어봐요",
        "website": "https://bizbell.site",
        "keywords": [
          "경쟁사 조사",
          "사업계획서",
          "시장 조사"
        ],
        "priceText": [
          "350000 / CREDIT_TOKEN / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "usage",
        "benefits": [
          "Free: 3000 크레딧으로 AI 30회 사용"
        ],
        "deliverables": [
          "사업계획서"
        ],
        "majorTags": [
          "사업계획서/IR",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, Gemini, AI 모델, 경쟁사, 분석"
      }
    ]
  },
  {
    "id": 841,
    "name": "퍼스트플루크(FIRST FLUKE)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185604/4f390bfcf7a0461b8ca88a34145d318c.jpeg",
    "summary": "법령데이터를 한 곳에 다 모았어요. 일상적인 법률상담 부터 개인정보 처리방침, 계약서 등 문서생성이 가능해요.",
    "description": "### **기술 자체보다 ‘왜 필요한가’와 ‘어떤 경험을 남기는가’를 먼저 생각합니다.** 아이디어 단계부터 실제 사용까지 이어지는 실행 중심의 프로덕트를 만듭니다. ### **유저의 니즈는 빠르게 반영합니다.** 늘 모니터 앞에 앉아 사용자의 피드백을 기다립니다. 만들고 배포하고 끝이 아닌 실제 사용자들이 느끼는 불편한 점, 추가되면 좋을 기능에 대해 빠르게 조치합니다. ### **친숙한 구조로 더 나은 일상을 만듭니다.** 화려한 UI, 기능을 많이 담는 서비스보다 오래 쓰는 경험을 고민합니다. 복잡한 기술을 전면에 드러내는 대신 사용자가 편하게 이해하고 쓸 수 있도록 구조와 흐름을 설계합니다.",
    "website": "https://www.firstfluke.com",
    "email": "hello@firstfluke.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/841",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Legalize KR",
      "플레이스 해줘 (place-haejo)",
      "콘텐츠 해줘 (contents-haejo)",
      "PromptsOps"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "데이터/리포트",
      "업무자동화/생산성",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "IR",
      "피드백",
      "랜딩페이지",
      "브랜딩",
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "확인필요",
      "랜딩페이지 빌더",
      "LLM/생성형AI",
      "DB/인프라",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "랜딩페이지",
      "리포트",
      "자동화"
    ],
    "techEvidence": "분석, 랜딩, LLM, DB, 자동화",
    "priceText": [
      "베이직 요금제 / 월 구독 / 39,000원",
      "플러스 / 월 구독 / 24,900원",
      "PRO / 월 구독 / 119,000원",
      "Starter / 월 구독 / 49,000원"
    ],
    "minPrice": 24900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "IR/발표자료, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 Legalize KR 같은 서비스가 필요한 팀",
    "followerCount": 137,
    "likeCount": 400,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1455,
        "name": "Legalize KR",
        "summary": "법령데이터를 한 곳에 다 모았어요. 일상적인 법률상담 부터 개인정보 처리방침, 계약서 등 문서생성이 가능해요.",
        "website": "https://legalize-haejo.firstfluke.com/",
        "keywords": [
          "규제검토",
          "규제대응",
          "리걸테크",
          "법령분석",
          "법령비교",
          "법률데이터",
          "정책검토"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "피드백"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "분석"
      },
      {
        "id": 1451,
        "name": "플레이스 해줘 (place-haejo)",
        "summary": "구글, 카카오, 네이버 플레이스 관리를 하나의 화면에서 할 수 있어요.",
        "website": "https://place-haejo.firstfluke.com/",
        "keywords": [
          "네이버플레이스",
          "로컬비즈니스",
          "리뷰관리",
          "매장운영",
          "매장최적화",
          "소상공인마케팅"
        ],
        "priceText": [
          "플러스 / 월 구독 / 24,900원"
        ],
        "priceNumber": 24900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "IR",
          "피드백"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      },
      {
        "id": 1452,
        "name": "콘텐츠 해줘 (contents-haejo)",
        "summary": "콘텐츠 기획부터 발행까지 귀찮은 일은 콘텐츠 해줘에 맡겨주세요.",
        "website": "https://contents-haejo.firstfluke.com/",
        "keywords": [
          "threads",
          "브랜딩",
          "스레드",
          "채널성장",
          "콘텐츠",
          "콘텐츠마케팅"
        ],
        "priceText": [
          "PRO / 월 구독 / 119,000원"
        ],
        "priceNumber": 119000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "랜딩페이지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "IR",
          "피드백",
          "랜딩페이지",
          "브랜딩"
        ],
        "techTags": [
          "랜딩페이지 빌더"
        ],
        "techEvidence": "랜딩"
      },
      {
        "id": 1453,
        "name": "PromptsOps",
        "summary": "코드 수정 없이 프롬프트를 관리하고 그 결과를 미리 볼 수 있는 AI 프롬프트 운영 플랫폼",
        "website": "https://www.promptsops.com/",
        "keywords": [
          "A/B테스트",
          "AI서비스운영",
          "AI품질관리",
          "LLM운영",
          "Prompt",
          "버전관리",
          "비용추적",
          "프롬프트",
          "프롬프트관리"
        ],
        "priceText": [
          "Starter / 월 구독 / 49,000원"
        ],
        "priceNumber": 49000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발"
        ],
        "detailTags": [
          "IR",
          "피드백",
          "DB설계"
        ],
        "techTags": [
          "LLM/생성형AI",
          "DB/인프라"
        ],
        "techEvidence": "LLM, DB"
      },
      {
        "id": 1454,
        "name": "CurateAI",
        "summary": "고객 진단·추천·전환 기능을 자동 생성하는 AI 추천 솔루션",
        "website": "https://curate.ai.kr/",
        "keywords": [
          "AI추천",
          "고객분석",
          "마케팅자동화",
          "이커머스",
          "전략최적화",
          "진단테스트",
          "추천엔진",
          "퍼널마케팅"
        ],
        "priceText": [
          "Starter / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "피드백",
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "분석, 자동화, DB"
      }
    ]
  },
  {
    "id": 843,
    "name": "프로브(PROBE)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185563/5dc11fcf1f034f2b94ae01dfbae276e5.png",
    "summary": "사업 아이디어를 넣으면 사업 기획서·제품 기획서·개발 설계서·할 일 목록 4종이 자동 완성되고, Cursor·Claude에 연결되어 동작하는 웹이나 앱이 됩니다.",
    "description": "🎯 AI를 똑똑하게 쓰게 해드리는 AI, 프로브 **\" 당신의 생각을, AI가 알아듣게 \"** 2026년, AI는 더 이상 선택이 아닙니다. ChatGPT·Claude·Gemini를 안 쓰는 창업자는 없습니다. 하지만 같은 AI를 써도 누구는 깊이 있는 결과를 얻고, 누구는 어디서나 본 듯한 일반론만 받습니다. 차이는 단 하나, **\"AI에게 무엇을, 어떻게 전달하느냐\"** 입니다. 프로브는 당신의 막연한 아이디어를 AI가 정확히 이해할 수 있는 **BRD·PRD·TRD 문서**로 자동 정리하고, **개발에 필요한 업무 태스크까지** 한 번에 만들어드립니다. 그리고 그 흐름 그대로 Claude·Cursor 바이브코딩 IDE와 직접 연결되어, **기획부터 실제 개발까지** 한 호흡으로 이어집니다. **⚡ 프로브가 만드는 변화** STEP 01 막연한 아이디어 ──── → 질의응답을 통해 비즈니스 가치 정리 STEP 02 AI가 헷갈리지 않게 ─",
    "website": "https://www.coprobe.com/",
    "email": "info@coprobe.com",
    "contact": "010-2616-4042",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/843",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "IGN8T(이그나이트)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "노코드",
      "MVP",
      "시장조사",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "설문/서베이",
      "시장조사/리서치",
      "노코드/앱빌더",
      "MVP/프로토타입"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "MVP",
      "시장/수요조사",
      "컨설팅"
    ],
    "techEvidence": "LLM, GPT, ChatGPT, Claude, Gemini, AI 에이전트, 에이전트, 응답, 시장조사, 노코드",
    "priceText": [
      "2,000크레딧 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "기본 가입 시: 1,000 크레딧 제공"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 243,
    "likeCount": 261,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1457,
        "name": "IGN8T(이그나이트)",
        "summary": "사업 아이디어를 넣으면 사업 기획서·제품 기획서·개발 설계서·할 일 목록 4종이 자동 완성되고, Cursor·Claude에 연결되어 동작하는 웹이나 앱이 됩니다.",
        "website": "https://www.ign8t.com",
        "keywords": [
          "1인 창업",
          "AI CTO",
          "AI 에이전트",
          "BRD/PRD/TRD 자동생성",
          "MVP 개발",
          "노코드·로우코드",
          "바이브 코딩",
          "자동 문서화",
          "컨텍스트 엔지니어링",
          "프로젝트 매니지먼트"
        ],
        "priceText": [
          "2,000크레딧 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [
          "기본 가입 시: 1,000 크레딧 제공"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "MVP",
          "시장/수요조사",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "노코드",
          "MVP",
          "시장조사",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "MVP/프로토타입"
        ],
        "techEvidence": "LLM, GPT, ChatGPT, Claude, Gemini, AI 에이전트, 에이전트, 응답, 시장조사, 노코드, 로우코드, 바이브코딩"
      }
    ]
  },
  {
    "id": 593,
    "name": "넷스프린트주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186747/2d64a5d4532642a9afeff110abe491b6.png",
    "summary": "2·3라운드, 업무자동화와 지원사업 평가 가점을 한번에 챙기세요",
    "description": "**🏢** 넷스프린트 주식회사는 “사장님의 시간을 사람에게 돌려드린다”는 미션 아래, 근로계약, 근태, 급여, 4대보험 등 **사업 운영의 핵심 업무를 AI로 자동화**하고, 그 과정에서 발생하는 모든 운영 기록이**K-ESG 증빙 데이터로 그대로 축적되도록 설계된 SaaS 기업입니다.** 🚀 창업 직후 가장 먼저 부딪히는 벽은 화려한 사업 아이디어가 아니라 **\"근로계약서는 어떻게 쓰지? 오늘 누가 출근했지? 이번 달 급여 얼마 줘야 하지? 4대보험 신고는 누가 하지?\"** 라는 현실의 질문들입니다. 일과사람은 이 모든 운영 업무를 모바일 한 대로 자동화하는 **현장형 풀스택 운영 OS** 입니다. 💡 단순한 출퇴근 앱이 아닙니다. **근로계약서 체결 → 근태 데이터 입력 → 급여 자동 계산 → 4대보험 산출 → 소득세 공제 → 급여명세서 자동 발송** 까지 하나의 파이프라인으로 흐릅니다. 사장님이 엑셀과 카톡으로 매달 반복하던 모든 일을, 시스템이 알아서 처리합니다.",
    "website": "https://ilsaram.co.kr",
    "email": "customer@ilsaram.co.kr",
    "contact": "010-3277-2778",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/593",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "일과사람"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "사업계획서",
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "자동화, 업무관리, 인프라",
    "priceText": [
      "프로요금제 / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, SNS/광고 문구 근거가 필요한 초기 창업팀",
    "followerCount": 246,
    "likeCount": 243,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1103,
        "name": "일과사람",
        "summary": "2·3라운드, 업무자동화와 지원사업 평가 가점을 한번에 챙기세요",
        "website": "https://ilsaram.co.kr",
        "keywords": [
          "1 업무자동화",
          "AI 업무관리",
          "근로계약서",
          "근태관리",
          "급여자동산출",
          "노무관리",
          "사업계획서강화",
          "정부정책부합",
          "출퇴근관리"
        ],
        "priceText": [
          "프로요금제 / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "사업계획서",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "자동화, 업무관리, 인프라"
      }
    ]
  },
  {
    "id": 582,
    "name": "(주)일루니",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191787/3e767d482c1545839816bef3a66f35d2.png",
    "summary": "AI의 지식을 시각화하고, 우리에게 딱 맞는 AI 챗봇을 만드는 지식 디자인 서비스🚀",
    "description": "## 내 사업을 소개하는 AI, 일루니가 창업팀에게 드립니다 🚀 사업·제품 정보로 나만의 소개 챗봇을 만들고(Knova), 거기에 살아 움직이는 캐릭터를 입히세요(MoiiMe). 모두의창업에 참여하는 창업팀을 위해, 일루니가 두 가지 AI 제품을 제공합니다. 복잡한 개발도, 외주 의뢰도 필요 없습니다. 창업팀이 직접 만들고, 바로 씁니다. 왜 창업팀에게 이 두 가지가 필요할까요? 창업 초기엔 알려야 할 건 많은데, 알릴 손과 시간이 부족합니다. 사업을 설명할 사람도, 24시간 응대할 인력도, 브랜드의 얼굴이 되어줄 캐릭터도 없습니다. 일루니의 두 제품은 바로 이 빈자리를 채웁니다. - **Knova**가 내 사업을 대신 설명하는 AI 챗봇이 되고, - **MoiiMe**가 그 AI에 살아 움직이는 얼굴을 입혀, 방문자와 직접 대화하게 합니다. --- ## **『Knova』 내 사업·제품을 소개하는, 내 회사만의 AI 챗봇 🧠** 당신의 사업·제품 정보로 AI",
    "website": "https://www.illuni.com/",
    "email": "contact@illuni.com",
    "contact": "070-4128-9007",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/582",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Knova",
      "MoiiMe"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "사업계획서",
      "발표자료",
      "피드백",
      "랜딩페이지",
      "홈페이지",
      "브랜딩",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "컨설팅"
    ],
    "techEvidence": "LLM, 생성형, AI에이전트, 에이전트, 랜딩페이지, 랜딩, RAG, GraphRAG, 지식그래프, 분석",
    "priceText": [
      "Topic(챗봇) 1개당 / 월 구독 / 89,000원",
      "Pro / 월 구독 / 199,000원"
    ],
    "minPrice": 89000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료 체험: 14일 간 무료 체험 시작",
      "2+2혜택: 2개월 구독 결제 시, 2개월 무료 이용",
      "무료: 캐릭터 1개, 월 메시지 200, 동시 접속 5명, 기본 임베드(MoiiMe 표기 포함), 커뮤니티 지원"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 85,
    "likeCount": 400,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1087,
        "name": "Knova",
        "summary": "AI의 지식을 시각화하고, 우리에게 딱 맞는 AI 챗봇을 만드는 지식 디자인 서비스🚀",
        "website": "https://knova.so/",
        "keywords": [
          "AI에이전트",
          "AI챗봇",
          "GraphRAG",
          "RAG",
          "공공기관AI",
          "지식관리AI",
          "지식그래프",
          "지식디자인",
          "지식설계",
          "챗봇"
        ],
        "priceText": [
          "Topic(챗봇) 1개당 / 월 구독 / 89,000원"
        ],
        "priceNumber": 89000,
        "pricingKind": "fixed",
        "benefits": [
          "무료 체험: 14일 간 무료 체험 시작",
          "2+2혜택: 2개월 구독 결제 시, 2개월 무료 이용"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "사업계획서",
          "발표자료",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "브랜딩",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 생성형, AI에이전트, 에이전트, 랜딩페이지, 랜딩, RAG, GraphRAG, 지식그래프, 분석, 음성, 인프라"
      },
      {
        "id": 1088,
        "name": "MoiiMe",
        "summary": "브랜드와 서비스를 AI 캐릭터로 표현하는 비주얼 AI 에이전트 제작 서비스🎭",
        "website": "https://moii.me/",
        "keywords": [
          "AI에이전트",
          "AI캐릭터",
          "GLB",
          "iframe",
          "SDK",
          "TTA모션",
          "위젯",
          "챗봇",
          "캐릭터",
          "한국어TTS"
        ],
        "priceText": [
          "Pro / 월 구독 / 199,000원"
        ],
        "priceNumber": 199000,
        "pricingKind": "fixed",
        "benefits": [
          "무료: 캐릭터 1개, 월 메시지 200, 동시 접속 5명, 기본 임베드(MoiiMe 표기 포함), 커뮤니티 지원"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "사업계획서",
          "발표자료",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "브랜딩",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "음성/STT/TTS"
        ],
        "techEvidence": "LLM, 생성형, AI에이전트, AI 에이전트, 에이전트, 랜딩페이지, 랜딩, 분석, TTS, 음성"
      }
    ]
  },
  {
    "id": 817,
    "name": "비자브릿지 VizaBridge Corporation",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/143387/3e6621ac3ba3484192643de2839f1ae3.png",
    "summary": "Want Round 1? Start here.",
    "description": "Korea's startup system is built for Koreans. We built ours for everyone else. VizaBridge Corp has been supporting **foreign founders in Korea** since 2023 — through incorporation, visa transitions, government programs, and everything the ecosystem assumes you already know. Over 1,000 founders from 30+ countries have gone through this with us. We know what Round 2 evaluators look for. We know exactly where foreign founders lose momentum. **And we know how to get past both.** We've turned ever",
    "website": "https://corp.vizabridge.co.kr",
    "email": "thinkbig90@naver.com",
    "contact": "010-5250-3694",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/817",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Korea Startup OS for Foreign Founders"
    ],
    "majorTags": [
      "사업계획서/IR",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "사업계획서",
      "IR"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "STANDARD / 월 구독 / 440,000원"
    ],
    "minPrice": 440000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE: Your Korean business plan, built by AI",
      "FREE: Korean gov funding matched to your startup"
    ],
    "recommendation": "사업계획서, IR/발표자료를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 302,
    "likeCount": 178,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1495,
        "name": "Korea Startup OS for Foreign Founders",
        "summary": "Want Round 1? Start here.",
        "website": "https://corp.vizabridge.co.kr/",
        "keywords": [
          "Admin Automation",
          "Business Plan AI",
          "Foreign Founders",
          "Gov Funding",
          "IR Deck",
          "K-Startup",
          "Korean Incorporation",
          "Visa Support",
          "사업계획서AI",
          "전문가연계"
        ],
        "priceText": [
          "STANDARD / 월 구독 / 440,000원"
        ],
        "priceNumber": 440000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: Your Korean business plan, built by AI",
          "FREE: Korean gov funding matched to your startup"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "사업계획서",
          "IR"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 806,
    "name": "프로젝트비아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/110313/32659d9cc6c84610b29ae7c01e0e5644.png",
    "summary": "사장님의 판단을 돕는 현명한 의사결정 파트너",
    "description": "🏆 **모두의창업 AI 솔루션 공급기업, 엔비아이(NBeAI)** 🏆 🎉 **모두의창업 1차 통과를 진심으로 축하드립니다.** 기쁨도 잠시, 이제는 **1라운드라는 벽을 넘어** 2차 심사에서 “아이디어”를 **심사위원이 납득할 수 있는 ‘사업’**으로 보여줘야 합니다. **🤔 열정만으로 충분할까요?** 멘토링을 성실히 듣는 것도 중요하지만, 2차에서 결국 확인하는 건 이것입니다. ✅ **아이디어가 제출 가능한 형태로 정리됐는지** ✅ **근거(시장·고객·차별점)가 있는지** ✅ **숫자(예산·수익 구조)가 말이 되는지** 즉, 창업 씬에서의 열정은 “의지”가 아니라 **결과물로 증명되는 준비 과정**입니다. ✅ 그래서 엔비아이가 돕습니다** 엔비아이는 창업자가 2차 심사 준비 과정에서 “무엇을 먼저 만들고, 무엇을 보완해야 하는지”를 **심사/사업 관점으로 정리**해주는 AI입니다. 📋 **사업계획서/자료를 기반으로** 1. 🧭 **심사 관점 점검**",
    "website": "https://chat.beai.kr",
    "email": "ms@silentservice.co.kr",
    "contact": "010-9453-1143",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/806",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "엔비아이"
    ],
    "majorTags": [
      "사업계획서/IR",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "발표자료",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "컨설팅"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "스타터 요금제 / 월 구독 / 90,000원"
    ],
    "minPrice": 90000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "체험 스타터 요금제: 회원 가입 후 72시간 무료 이용",
      "창업가 필수 AI 활용 특강: 엔비아이 선택시 무료제공",
      "창업가 사업 기초 특강: 엔비아이 선택시 무료제공"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 185,
    "likeCount": 161,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1398,
        "name": "엔비아이",
        "summary": "사장님의 판단을 돕는 현명한 의사결정 파트너",
        "website": "https://www.youtube.com/watch?v=8hey8pEABrE",
        "keywords": [
          "멘토",
          "비즈니스모델",
          "사업계획서",
          "사업기획",
          "사업멘토",
          "사업전략",
          "아이디어",
          "창업",
          "창업멘토",
          "코치"
        ],
        "priceText": [
          "스타터 요금제 / 월 구독 / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "usage",
        "benefits": [
          "체험 스타터 요금제: 회원 가입 후 72시간 무료 이용",
          "창업가 필수 AI 활용 특강: 엔비아이 선택시 무료제공",
          "창업가 사업 기초 특강: 엔비아이 선택시 무료제공"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 805,
    "name": "주식회사 포켓컴퍼니",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188823/6049f15b572a4939b10434d6820c7c89.jpg",
    "summary": "스타트업 성장 지원 솔루션 — AI 맞춤형 지원사업 추천·KPI 진단·투자 네트워킹 통합 솔루션 - 우리 회사에 딱 맞는 지원사업·투자유치·네트워킹 기회를 자동 추천하고, KPI 진단부터 데모데이·교육까지 한 플랫폼에서 원스톱 관리하는 스타트업 성장 올인원 솔루션입니다",
    "description": "**No.1 START-UP BUILDER, POCKET COMPANY** 우리는 \"컨설팅 회사\"가 아닙니다. **실무로 끝까지 가는 컴퍼니빌더**입니다. 대부분의 컨설팅사는 자료를 만들어 주고 끝납니다. 대부분의 플랫폼은 매칭만 시켜주고 끝납니다. 대부분의 교육기관은 강의로 끝납니다. 그 사이에서 대표가 알아서 다 메워야 하는 **'막막함의 벽'** — 포켓컴퍼니는 그 벽을 부수기 위해 만들어졌습니다 **숫자가 말하는 포켓컴퍼니** **6,000건+** 국내 최다 스타트업 빌드업 누적 **10,000명+** 교육 수강생 **400곳+** 국내 메이저 AC/VC 매칭 네트워크 **30명** 워커홀릭 인하우스 조직 (대대행 없음) **8개월 → 1개월** 대표가 직접 했을 실무 과정을 단축 **세 개의 부서, 하나의 약속 — \"A부터 Z까지 같이 합니다\"** **한 줄 요약** **\"대표님이 평균 8개월 걸릴 실무 과정을 1개월로 단축시키는, 국내 유일 6천 건+ 빌드업",
    "website": "https://xn--9i1b674cwc38r6pa.com/landing/biz",
    "email": "pocket.jkj@gmail.com",
    "contact": "010-5018-3791",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/805",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Pocket Biz"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "사업계획서",
      "IR",
      "피드백",
      "랜딩페이지",
      "홈페이지",
      "DB설계",
      "MVP",
      "브랜딩",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "블로그",
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "빌더, 랜딩, 홈페이지, MVP, 자동화, DB",
    "priceText": [
      "VIP 멤버십 / 월 구독 / 290,000원"
    ],
    "minPrice": 290000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "free: 포켓비즈 기능들을 탐색하고, 지원사업 리스트 추천가능"
    ],
    "recommendation": "사업계획서, IR/발표자료 결과물로 첫 고객 반응을 빠르게 확인하려는 Pocket Biz 같은 서비스가 필요한 팀",
    "followerCount": 323,
    "likeCount": 6,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1397,
        "name": "Pocket Biz",
        "summary": "스타트업 성장 지원 솔루션 — AI 맞춤형 지원사업 추천·KPI 진단·투자 네트워킹 통합 솔루션 - 우리 회사에 딱 맞는 지원사업·투자유치·네트워킹 기회를 자동 추천하고, KPI 진단부터 데모데이·교육까지 한 플랫폼에서 원스톱 관리하는 스타트업 성장 올인원 솔루션입니다",
        "website": "",
        "keywords": [
          "AI매칭",
          "KPI진단",
          "글로벌진출",
          "데모데이",
          "스타트업",
          "액셀러레이팅",
          "지원사업추천",
          "투자유치",
          "투자자CRM",
          "포켓컴퍼니"
        ],
        "priceText": [
          "VIP 멤버십 / 월 구독 / 290,000원"
        ],
        "priceNumber": 290000,
        "pricingKind": "fixed",
        "benefits": [
          "free: 포켓비즈 기능들을 탐색하고, 지원사업 리스트 추천가능"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "블로그",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "사업계획서",
          "IR",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "DB설계",
          "MVP",
          "브랜딩",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "빌더, 랜딩, 홈페이지, MVP, 자동화, DB"
      }
    ]
  },
  {
    "id": 810,
    "name": "주식회사 핀하이브 (FinHive Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/102851/cc75b41953ba4a88a099e7acfe588895.jpeg",
    "summary": "메시지·워크시트·AI 자동화 통합 B2B 협업 플랫폼 - 나의 업무를 하나의 앱으로, 룸으로 모이세요.",
    "description": "**■ 개요** **주식회사 핀하이브 (FinHive Inc.)** **\"마케팅 · 영업 · 운영 · 세무 · 노무 관리와 고객 상담과 사내 메신저까지, 한 번에.\"** 사업 운영의 모든 단계를 AI 에이전트와 함께 굴리는 **사업 표준 OS**를 만들고 있습니다. 한국 사업 운영의 모든 단계를 **AI 에이전트로 혁신하는** B2B SaaS 회사입니다. 창업 후 1년 안에 **특허 6건 · 계정 4,450개 사전 계약 · 정부 공급기업 2건 동시 선정** 트랙을 만들었습니다. **■ Mission — 우리가 푸는 문제** **사업 운영의 모든 단계를 AI 에이전트와 함께 굴리는 표준 OS가 된다.** 한국 1-30인 사업장은 도구 5-6개를 동시에 띄우고도 실제 운영은 사장님 한 명의 손에 의존합니다. 글로벌 워크스페이스 (Notion·Airtable·Google Sheet) 는 한국 결제·알림톡·간편인증·국세청 미지원. 한국 SaaS 는 단일 기능에 머무르고, 통",
    "website": "",
    "email": "bankm87@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/810",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "룸 (Room)",
      "스튜디오 (Studio)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "IR",
      "자동화",
      "블로그",
      "SNS 문구",
      "브랜딩"
    ],
    "techTags": [
      "AI 에이전트",
      "MVP/프로토타입",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "자동화",
      "블로그",
      "SNS/광고 문구"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 프로토타입, 자동화, 연동, 클라우드",
    "priceText": [
      "Pro·퍼니처 / 유/무료 혼합 / 150,000원",
      "컨텐츠 발행 수당 / CREDIT_TOKEN / 2,500원"
    ],
    "minPrice": 2500,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 팀 메신저"
    ],
    "recommendation": "AI 에이전트, MVP/프로토타입 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 룸 (Room) 같은 서비스가 필요한 팀",
    "followerCount": 112,
    "likeCount": 205,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1403,
        "name": "룸 (Room)",
        "summary": "메시지·워크시트·AI 자동화 통합 B2B 협업 플랫폼 - 나의 업무를 하나의 앱으로, 룸으로 모이세요.",
        "website": "",
        "keywords": [
          "AI 에이전트",
          "AI 워크스페이스",
          "CRM",
          "메신저",
          "스타트업",
          "연동",
          "자동화",
          "협업툴"
        ],
        "priceText": [
          "Pro·퍼니처 / 유/무료 혼합 / 150,000원"
        ],
        "priceNumber": 150000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 팀 메신저"
        ],
        "deliverables": [
          "IR/발표자료",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 프로토타입, 자동화, 연동, 클라우드"
      },
      {
        "id": 1402,
        "name": "스튜디오 (Studio)",
        "summary": "AI 콘텐츠 생성·발행 플랫폼 - 3일 걸리던 콘텐츠 발행 작업을 3분 만에 끝낼 수 있어요",
        "website": "",
        "keywords": [
          "AI 콘텐츠",
          "SNS",
          "뉴스레터",
          "마케팅",
          "브랜드",
          "블로그",
          "스타트업",
          "자동화"
        ],
        "priceText": [
          "컨텐츠 발행 수당 / CREDIT_TOKEN / 2,500원"
        ],
        "priceNumber": 2500,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "블로그",
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "IR",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 프로토타입, 자동화, 클라우드"
      }
    ]
  },
  {
    "id": 654,
    "name": "웜블러드 (모노클AI)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/174427/1fd3de385a064984becbfca5a7b9bd28.png",
    "summary": "창업자를 위한 종합 AI (ChatGPT·Claude·Gemini 등) 워크스페이스 : ChatGPT, Claude, Gemini, Perplexity, Solar 등 다양한 AI 모델을 한곳에서 활용 가능합니다.",
    "description": "주식회사 웜블러드는 기업용 AI 워크스페이스 **'모노클AI(Monocle AI)'** 를 운영하는 AI 전문 기업입니다. 2022년 설립 이후 부동산 개발·B2B 금융 플랫폼 '딜매치', 산업안전 위험성평가 AI '세이프티스냅' 등을 직접 기획·개발·운영하며 산업 현장에 필요한 AI 솔루션을 만들어왔고, 그 경험을 토대로 모든 산업과 직무에서 활용 가능한 범용 AI 워크스페이스 모노클AI를 개발했습니다. **모노클AI는 어떤 서비스인가요?** [(monocle-ai.com)](http://monocle-ai.com) 모노클AI는 **ChatGPT, Claude, Gemini, Perplexity 등** **주요 생성형 AI를 하나의 워크스페이스에서 선택·비교·활용할 수 있는 기업용 AI SaaS**입니다. 여러 AI 서비스에 각각 가입하고 화면을 오갈 필요 없이, 하나의 계정 안에서 목적에 맞는 모델을 골라 사용할 수 있습니다. 단순한 챗봇이 아니라 **문서 작성, 자료 분석,",
    "website": "https://monocle-ai.com/",
    "email": "support@monocle-ai.com",
    "contact": "010-9340-1645",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/654",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "모노클AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "시장조사",
      "리포트",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "시장/수요조사",
      "리포트",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, Gemini, 생성형, AI 모델, 시장조사, 분석, 보고서, 이미지",
    "priceText": [
      "1인 예상 비용(월 평균 리서치 800건 분량 제공, 모델별 상이) / CREDIT_TOKEN / 30,000원"
    ],
    "minPrice": 30000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 초기 창업팀",
    "followerCount": 214,
    "likeCount": 97,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1186,
        "name": "모노클AI",
        "summary": "창업자를 위한 종합 AI (ChatGPT·Claude·Gemini 등) 워크스페이스 : ChatGPT, Claude, Gemini, Perplexity, Solar 등 다양한 AI 모델을 한곳에서 활용 가능합니다.",
        "website": "https://monocle-ai.com/guide/user/features/overview",
        "keywords": [
          "ChatGPT",
          "IR자료",
          "PPT",
          "마케팅",
          "사업계획서",
          "시장조사",
          "이미지",
          "제미나이",
          "챗지피티",
          "클로드"
        ],
        "priceText": [
          "1인 예상 비용(월 평균 리서치 800건 분량 제공, 모델별 상이) / CREDIT_TOKEN / 30,000원"
        ],
        "priceNumber": 30000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "시장/수요조사",
          "리포트",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "시장조사",
          "리포트",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, Gemini, 생성형, AI 모델, 시장조사, 분석, 보고서, 이미지, 자동화, 연동"
      }
    ]
  },
  {
    "id": 617,
    "name": "매니패스트 (Manyfast)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/100765/dac48edfc860490697e144994f0929b0.png",
    "summary": "글로벌 IT 창업가 15,000명이 사용하는 기획 AI - APP / WEB / SaaS 서비스를 더욱 탄탄하게 만들어요.",
    "description": "글로벌 IT 창업가 15,000명이 사용하는 소프트웨어 기획 AI 매니패스트입니다 🐢 누구나 다 만들 수 있는 시대, **프로덕트의 경쟁력은 기획 과정에서 결정**됩니다. 국내 기업 2,000개 이상, **대기업 20개사, 상장사 유니콘 19개사, 대학 40여곳**에서 이용 중 이에요. 대화만으로 PRD부터 와이어프레임까지, 모든 기획을 하나의 캔버스에서 완성하고 **코딩 도구와 연동**하세요. **APP / WEB / SaaS / 플랫폼**을 개발하려고 하시는분들께 추천드립니다. 매니패스트는 **누구나 무료로 체험가능**하니, 신중하게 체험해보시고 결제하세요. 자신있습니다 🙌 **[ 매니패스트 주식회사🐢 ]** - 스파크랩 / 라구나인베스트먼트 투자 유치, 누적 매출 50억원 - 2025 팁스(TIPS) R&D 프로그램 선정 - 창업도약패키지(딥테크) / 글로벌창업사관학교 7기 선정 - 신용보증기금 Start-up NEST 13기 선정 - 엔비디아 인셉션 프로그램",
    "website": "https://manyfast.io",
    "email": "contact@manyfast.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/617",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "매니패스트"
    ],
    "majorTags": [
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "MVP/프로토타입",
      "업무 자동화/API"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "와이어프레임, 연동",
    "priceText": [
      "3000(+1000) / CREDIT_TOKEN / 90,000원"
    ],
    "minPrice": 90000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "📋 일단 무료: 누구나 무료로 체험이 가능합니다. 체험 후 구독을 결정하세요😉",
      "👉 모두의 창업 전용 혜택: 월간 1000크레딧 추가 지급 [5만원 상당 / 유효기간 없음]",
      "👉 2개월 구독시 추가 혜택: 총 3000크레딧 추가 지급 [15만원 상당 / 유효기간 없음]"
    ],
    "recommendation": "MVP/프로토타입, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 매니패스트 같은 서비스가 필요한 팀",
    "followerCount": 184,
    "likeCount": 122,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1129,
        "name": "매니패스트",
        "summary": "글로벌 IT 창업가 15,000명이 사용하는 기획 AI - APP / WEB / SaaS 서비스를 더욱 탄탄하게 만들어요.",
        "website": "https://manyfast.io",
        "keywords": [
          "PRD",
          "거북이",
          "서비스 기획",
          "와이어프레임",
          "플로우차트"
        ],
        "priceText": [
          "3000(+1000) / CREDIT_TOKEN / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "usage",
        "benefits": [
          "📋 일단 무료: 누구나 무료로 체험이 가능합니다. 체험 후 구독을 결정하세요😉",
          "👉 모두의 창업 전용 혜택: 월간 1000크레딧 추가 지급 [5만원 상당 / 유효기간 없음]",
          "👉 2개월 구독시 추가 혜택: 총 3000크레딧 추가 지급 [15만원 상당 / 유효기간 없음]"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "MVP/프로토타입",
          "업무 자동화/API"
        ],
        "techEvidence": "와이어프레임, 연동"
      }
    ]
  },
  {
    "id": 707,
    "name": "주식회사 버스에잇코리아 (Verse Eight Korea)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/190344/f8a5e7587d2942dbae9f7f104c9e9fe0.png",
    "summary": "코딩 없이 프롬프트 한 줄로 게임·웹서비스·인터랙티브 콘텐츠를 만들고 즉시 공유할 수 있어요",
    "description": "\"아이디어는 있는데 개발자가 없어서-\" 그 말이 창업의 걸림돌이 되지 않도록, AI 에이전트 '**Verse8**'이 여러분과 함께 합니다. Verse8은 **텍스트 프롬프트 입력만으로** 게임, 웹/앱 서비스, 인터랙티브 콘텐츠 등 **다양한 디지털 프로덕트를 코딩 없이 제작·배포·수익화할 수 있는 AI 네이티브 플랫폼**입니다. AI 에이전트(Agent8)가 코드 작성, 에셋 생성, 시스템 구축을 자동 수행하며, 생성된 결과물은 별도 설치 없이 브라우저에서 즉시 실행·공유할 수 있습니다. 사업 아이디어를 검증할 프로토타입, 고객에게 보여줄 데모, 투자자 피칭용 인터랙티브 자료까지 — Verse8 하나로 직접 만들고 바로 공유할 수 있습니다. 스마일게이트의 사내 HR 온보딩, 화장품 브랜드 Entropy의 뉴욕 팝업 이벤트 게임처럼, 이미 **다양한 기업들이 외주 없이 Verse8로 직접 만들어 쓰고 있습니다**. 주식회사 버스에잇 코리아(Verse Eight Korea)",
    "website": "",
    "email": "ops@verse8.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/707",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Verse8 (버스에잇)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "IR",
      "노코드",
      "MVP",
      "브랜딩"
    ],
    "techTags": [
      "AI 에이전트",
      "노코드/앱빌더",
      "MVP/프로토타입"
    ],
    "deliverables": [
      "IR/발표자료",
      "MVP"
    ],
    "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 노코드, MVP, 프로토타입",
    "priceText": [
      "크레딧 / 유/무료 혼합 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "크레딧: 가입 시 체험 크레딧 무료 제공"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 IR/발표자료, MVP 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 107,
    "likeCount": 182,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1261,
        "name": "Verse8 (버스에잇)",
        "summary": "코딩 없이 프롬프트 한 줄로 게임·웹서비스·인터랙티브 콘텐츠를 만들고 즉시 공유할 수 있어요",
        "website": "",
        "keywords": [
          "AI에이전트",
          "MVP",
          "게임제작",
          "노코드",
          "디지털프로덕트",
          "웹앱개발",
          "인터랙티브콘텐츠",
          "창업툴",
          "코딩없이",
          "프로토타입"
        ],
        "priceText": [
          "크레딧 / 유/무료 혼합 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "크레딧: 가입 시 체험 크레딧 무료 제공"
        ],
        "deliverables": [
          "IR/발표자료",
          "MVP"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "IR",
          "노코드",
          "MVP",
          "브랜딩"
        ],
        "techTags": [
          "AI 에이전트",
          "노코드/앱빌더",
          "MVP/프로토타입"
        ],
        "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 노코드, MVP, 프로토타입"
      }
    ]
  },
  {
    "id": 650,
    "name": "엠엠제이그룹 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/433/0a50b96b1e3446e7a6f7b6c72b4c7f41.png",
    "summary": "★2라운드 필수★ AI 마진계산 부터 매출 시뮬레이션까지 한 번에 해결하는 유통계산기 AI",
    "description": "# 회사 소개 · MMJ GROUP 주식회사 ## \"팔면 팔수록 왜 남는 게 없을까?\" 이 현장의 질문에 **기술로 답하는** 이커머스 비즈니스 인텔리전스 기업입니다. 10년간 9만 명이 넘는 창업자를 직접 만나며 같은 문제를 반복해서 봤습니다. **마진 구조의 맹점...** 그래서 직접 풀기로 했습니다! 프리미엄 뱀부타올 PB브랜드 **로얄베르겐**을 기획부터 홈쇼핑·이커머스 유통까지 직접 운영하며, 누적 **235억 원**의 매출을 만들었고, 이커머스 전반의 **누적 700억 원** 유통 운영 경험을 그대로 녹여 **유통계산기 AI**를 설계했습니다. 무신사·와디즈·KOSME·서울경제진흥원·한국무역협회 등 **220개+ 기관**의 교육 레퍼런스 및 창업현장, 정책 최전선에서 유통 생태계를 움직여 왔습니다. 그리고 2026년, 설립 직후 중소벤처기업부·창업진흥원 「모두의 창업 프로젝트」에서 **마진관리 AI 분야 전국 유일 공식 솔루션**으로 선정되었습니다. 목표는",
    "website": "https://uton-ai.com/",
    "email": "jssacademy1@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/650",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "유통계산기 AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "피드백",
      "브랜딩",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "시뮬레이션, 분석",
    "priceText": [
      "PROFESSIONAL + / 월 구독 / 388,000원"
    ],
    "minPrice": 388000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "채널 계산기: 판매가·원가·배송비로 N개 채널의 마진을 한눈에 비교",
      "공동구매 계산기: 공구 진행 시 마진 달성률을 즉시 계산",
      "프로모션 계산기: 평소 vs 프로모션 기간 이익 비교 — “할인하면 정말 더 남나?”"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 SNS/광고 문구, 리포트 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 153,
    "likeCount": 105,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1180,
        "name": "유통계산기 AI",
        "summary": "★2라운드 필수★ AI 마진계산 부터 매출 시뮬레이션까지 한 번에 해결하는 유통계산기 AI",
        "website": "",
        "keywords": [
          "마진계산",
          "원가계산",
          "유통계산기",
          "유통채널관리",
          "일일매출",
          "일일매출관리",
          "창업자역량진단",
          "판매가계산"
        ],
        "priceText": [
          "PROFESSIONAL + / 월 구독 / 388,000원"
        ],
        "priceNumber": 388000,
        "pricingKind": "fixed",
        "benefits": [
          "채널 계산기: 판매가·원가·배송비로 N개 채널의 마진을 한눈에 비교",
          "공동구매 계산기: 공구 진행 시 마진 달성률을 즉시 계산",
          "프로모션 계산기: 평소 vs 프로모션 기간 이익 비교 — “할인하면 정말 더 남나?”"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "피드백",
          "브랜딩",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "시뮬레이션, 분석"
      }
    ]
  },
  {
    "id": 721,
    "name": "주식회사 사페레아우데",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188827/3594f1af2aca4678a19bfe501554f3bb.png",
    "summary": "K-Startup, 기업마당 모든 지원사업 사업계획서 전부 작성해드립니다.",
    "description": "사페레아우데는 창업자와 초기 기업이 정부지원사업 사업계획서를 더 쉽고 빠르게 완성할 수 있도록 돕는 AI 문서 자동화 솔루션 **독스헌트**를 운영합니다. 독스헌트는 지원사업별 양식에 맞춘 질문, AI 답변 생성, 근거자료와 시각자료 반영, 한글 파일 다운로드까지 연결해 실제 제출 가능한 사업계획서 작성을 지원합니다. 사페레아우데는 창업자가 문서 작성에 막히지 않고 자신의 사업에 더 집중할 수 있도록, 정부지원사업 준비 과정을 가장 실용적인 방식으로 자동화하고 있습니다.",
    "website": "https://docshunt.ai",
    "email": "maeee@maeee.co.kr",
    "contact": "010-2871-5352",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/721",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "독스헌트AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서",
      "자동화"
    ],
    "techTags": [
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "자동화"
    ],
    "techEvidence": "경쟁사, 시장분석, 분석, 자동화",
    "priceText": [
      "Pro 요금제 / 월 구독 / 190,000원"
    ],
    "minPrice": 190000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "초안 만들기 1회 무료: 지원사업 양식 채우기 1회 무료"
    ],
    "recommendation": "시장조사/리서치, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 독스헌트AI 같은 서비스가 필요한 팀",
    "followerCount": 121,
    "likeCount": 135,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1279,
        "name": "독스헌트AI",
        "summary": "K-Startup, 기업마당 모든 지원사업 사업계획서 전부 작성해드립니다.",
        "website": "https://drive.google.com/file/d/1ASKrEW_BTocYP_zqnfmfIdYG7kYsT7kg/view?usp=sharing",
        "keywords": [
          "경쟁사분석",
          "근거자료탐색",
          "사업계획서",
          "시장분석",
          "자동화",
          "전 양식 지원",
          "지원사업",
          "창업"
        ],
        "priceText": [
          "Pro 요금제 / 월 구독 / 190,000원"
        ],
        "priceNumber": 190000,
        "pricingKind": "fixed",
        "benefits": [
          "초안 만들기 1회 무료: 지원사업 양식 채우기 1회 무료"
        ],
        "deliverables": [
          "사업계획서",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "경쟁사, 시장분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 600,
    "name": "드랩 - 상세페이지, 영상(쇼츠) 딸깍 생성",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188608/df223655aa2748d7993d6e791553a4f9.png",
    "summary": "제품 사진 한 장으로 제품 연출샷, 모델 피팅컷, 숏폼 광고 영상, 상세페이지 완성까지 한 번에 해결하는 올인원 비주얼 AI",
    "description": "### 💯 **모두의 창업 공식 지정 '이커머스 비주얼 AI 국가대표' 주식회사 드랩** 💯 ### 🎉 **어려운 아이디어 심사를 뚫고 당당히 합격하신 대표님들, 진심으로 축하드립니다!** 🎉 세상을 바꿀 멋진 아이디어를 손에 쥐었지만, 당장 1라운드 시장성 검증을 위한 '실체화(비주얼)' 단계에서 막막함을 느끼고 계시진 않나요? - *\"제품 연출샷 하나 찍으려니 스튜디오 대관료에 장비 렌탈비만 수백만 원이네...\"* - *\"피팅 모델 섭외하고 촬영하려니 하루 만에 예산이 바닥나겠어...\"* - *\"상세페이지 기획하고 디자인 외주 주자니 돈도 돈이지만 완성까지 몇 주나 걸린다는데...\"* - *\"광고 숏폼 영상이랑 배너 광고 소재도 만들어야 하는데, 이 많은 AI 도구를 매달 다 구독해야 하나?\"* 창업 초기, 기획·촬영·디자인 인력도 부족하고 예산도 타이트한 대표님들의 이 아픈 마음을 누구보다 잘 알기에! 대한민국 AI 비주얼 콘텐츠 업계를 선도하는 **주식회사 드랩",
    "website": "https://draph.art",
    "email": "hi@draph.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/600",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "드랩아트 - AI 상세페이지 자동 생성",
      "에이아일리언",
      "배리에이드"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "홈페이지",
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "홈페이지",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "생성형, 이미지 생성, 이미지, 사진, 영상 생성, 숏폼, 비디오, 자동화, 생성AI, AI 모델",
    "priceText": [
      "3300 BP / CREDIT_TOKEN / 99,900원",
      "5,227 스타 / CREDIT_TOKEN / 99,000원",
      "Professional / 월 구독 / 79,000원"
    ],
    "minPrice": 79000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "25BGP: 가입하면 즉시 지급, 지금 상세페이지 생성해보세요",
      "102 스타 무료 충전: 회원가입 시 다양한 AI 모델을 경험해 볼 수 있는 무료 스타 지급",
      "5개 프로젝트 및 20 Vari 무료: 가입하면 배너 베리에이션 20회 무료"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 127,
    "likeCount": 114,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1491,
        "name": "드랩아트 - AI 상세페이지 자동 생성",
        "summary": "제품 사진 한 장으로 제품 연출샷, 모델 피팅컷, 숏폼 광고 영상, 상세페이지 완성까지 한 번에 해결하는 올인원 비주얼 AI",
        "website": "https://draph.art/",
        "keywords": [
          "AI모델",
          "상세페이지",
          "생성 AI",
          "생성형 AI",
          "썸네일",
          "영상",
          "영상 생성",
          "이미지",
          "이미지 생성",
          "커머스"
        ],
        "priceText": [
          "3300 BP / CREDIT_TOKEN / 99,900원"
        ],
        "priceNumber": 99900,
        "pricingKind": "usage",
        "benefits": [
          "25BGP: 가입하면 즉시 지급, 지금 상세페이지 생성해보세요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "홈페이지",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 이미지 생성, 이미지, 사진, 영상 생성, 숏폼, 비디오, 자동화"
      },
      {
        "id": 1110,
        "name": "에이아일리언",
        "summary": "씨댄스, 클링, 비오3, 나노바나나 등 세계 최강 50+개 영상/이미지 AI를 한 곳에서 쓸 수 있어요.",
        "website": "https://ailien.live/ko",
        "keywords": [
          "AI영상제작",
          "광고영상제작",
          "나노바나나",
          "비오3",
          "씨댄스",
          "영상생성AI",
          "영상제작",
          "이미지생성AI",
          "클링"
        ],
        "priceText": [
          "5,227 스타 / CREDIT_TOKEN / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "usage",
        "benefits": [
          "102 스타 무료 충전: 회원가입 시 다양한 AI 모델을 경험해 볼 수 있는 무료 스타 지급"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "홈페이지",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성AI, AI 모델, 이미지, 사진, 영상 생성, 영상제작, 숏폼, 비디오, 자동화"
      },
      {
        "id": 1111,
        "name": "배리에이드",
        "summary": "제일기획 합작! PSD 파일 하나로 네이버, 카카오, 구글 등 50여 개 광고 채널별 규격을 3분 만에 자동 리사이징하는 배너 자동화 AI",
        "website": "https://variaid.com/ko",
        "keywords": [
          "GDN",
          "광고배너제작",
          "광고제작",
          "구글광고",
          "네이버GFA",
          "마케팅자동화",
          "배너리사이징",
          "배너자동화",
          "배너제작",
          "카카오비즈보드"
        ],
        "priceText": [
          "Professional / 월 구독 / 79,000원"
        ],
        "priceNumber": 79000,
        "pricingKind": "fixed",
        "benefits": [
          "5개 프로젝트 및 20 Vari 무료: 가입하면 배너 베리에이션 20회 무료"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "홈페이지",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "이미지, 사진, 영상 생성, 숏폼, 비디오, 자동화"
      }
    ]
  },
  {
    "id": 601,
    "name": "들로우에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/164186/c5f0dedaa9054aeba16f04d0c974eaa7.png",
    "summary": "10팀 선발, 6개월 혜택 제공, 마케팅 자동화 🌱",
    "description": "10팀 선발, 6개월 혜택 제공, 마케팅 자동화 🌱 🔥 2개월 마케팅 자동화, 10팀 선발, 6개월 혜택 제공 사업계획서·IR·영상 생성에서 멈추면, 사업도 멈춥니다. 2라운드는 60일 동안 수집된 기록으로 디벨롭해야 합니다. 공고문 그대로, 2라운드는 활동 결과물로 갈립니다. 합격을 부른 서류가 아니라, 그다음 60일에 무엇을 남겼는지가 평가받습니다. 입학 즉시 손에 들어옵니다. 첫 고객 모집 홈페이지, 5종 콘텐츠, AI평가단 사업성 리포트, 멘토 제출 리포트. 단품 다섯 개를 따로 살까, 60일 하나로 묶을까? 로고·영상·랜딩·서류·콘텐츠 각각 사면 60만원이 넘습니다. 들로우는 월 29만, 60일 완주까지. AI솔루션 성실히 사용하고, 멘토에게 제출할 보고서 만들어드립니다. 2라운드 제출용 사업 리포트와 멘토 제출 리포트",
    "website": "https://www.dlrow-ai.com/modoo",
    "email": "ntlwkr10@hanmail.net",
    "contact": "010-8836-0861",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/601",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "들로우에이아이(Dlrow-AI)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "카드뉴스",
      "포스터",
      "블로그",
      "SEO",
      "SNS 문구",
      "광고",
      "사업계획서",
      "IR",
      "피드백",
      "랜딩페이지",
      "홈페이지",
      "리포트",
      "로고",
      "영상",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "카드뉴스",
      "포스터",
      "블로그",
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "리포트",
      "로고",
      "영상",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "랜딩페이지, 랜딩, 홈페이지, 웹페이지, 리포트, 보고서, 영상 생성, 자동화",
    "priceText": [
      "베이직 / 월 구독 / 290,000원"
    ],
    "minPrice": 290000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "🎯 1라운드 선정자 한정 · 선착순 30팀: 2개월만 완주하면 6개월 연장 혜택. 회원가입 즉시 결과물도 손에.",
      "1️⃣ 2개월 완주 보너스- 베이직 6개월 연장 혜택: 2개월 연속 이용 완주 시 6개월 추가 혜택 제공 [ 약 150만원 상당 ]",
      "2️⃣ 고객모집 웹페이지 1장: 잠재고객 문의를 모으는 랜딩페이지가 가입 즉시 자동 생성"
    ],
    "recommendation": "사업계획서, IR/발표자료 결과물로 첫 고객 반응을 빠르게 확인하려는 들로우에이아이(Dlrow-AI) 같은 서비스가 필요한 팀",
    "followerCount": 117,
    "likeCount": 105,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1112,
        "name": "들로우에이아이(Dlrow-AI)",
        "summary": "10팀 선발, 6개월 혜택 제공, 마케팅 자동화 🌱",
        "website": "https://dlrow-ai.com/modoo",
        "keywords": [
          "60일부트캠프",
          "두AI동료",
          "마케팅AI",
          "매주실행",
          "멘토리포트",
          "소수정예10팀",
          "운영전략AI",
          "정부지원사업",
          "첫고객문의",
          "홈페이지"
        ],
        "priceText": [
          "베이직 / 월 구독 / 290,000원"
        ],
        "priceNumber": 290000,
        "pricingKind": "fixed",
        "benefits": [
          "🎯 1라운드 선정자 한정 · 선착순 30팀: 2개월만 완주하면 6개월 연장 혜택. 회원가입 즉시 결과물도 손에.",
          "1️⃣ 2개월 완주 보너스- 베이직 6개월 연장 혜택: 2개월 연속 이용 완주 시 6개월 추가 혜택 제공 [ 약 150만원 상당 ]",
          "2️⃣ 고객모집 웹페이지 1장: 잠재고객 문의를 모으는 랜딩페이지가 가입 즉시 자동 생성"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "카드뉴스",
          "포스터",
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "로고",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "카드뉴스",
          "포스터",
          "블로그",
          "SEO",
          "SNS 문구",
          "광고",
          "사업계획서",
          "IR",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "로고",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩페이지, 랜딩, 홈페이지, 웹페이지, 리포트, 보고서, 영상 생성, 자동화"
      }
    ]
  },
  {
    "id": 844,
    "name": "플러스펀 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/154201/c9a38dfb6b92431e998dab0278ee01ff.png",
    "summary": "사업계획서 실리콘밸리 수준의 피드백 받아보세요.",
    "description": "**플러스펀(주)은 단순한 개발사를 넘어, 지난 10년간의 창업 현장 경험과 최첨단 AI 기술력을 결합하여 비즈니스의 생존을 넘어 혁신을 설계하는 비즈니스 테크 파트너입니다.** 단순히 '만드는 것'에 그치지 않고, 시장에서 '작동하는 시스템'을 구축하는 것이 우리의 핵심 가치입니다. **-10년 업력의 비즈니스 인사이트**: 창업부터 사업 컨설팅까지 10년간 축적된 실무 노하우를 바탕으로, 고객사의 아이디어를 시장 경쟁력이 있는 비즈니스 모델(BM)로 고도화합니다. **-정부지원사업 컨설팅 및 수행 이력**: 수많은 정부지원사업 컨설팅을 성공적으로 이끈 경험을 통해, 공공 및 민간 과제의 요구사항을 정확히 이해하고 사업화 성공률을 극대화합니다. **-AI 플랫폼 개발 전문성**: LLM(대형언어모델) 연동, 워크플로우 자동화, 지능형 시스템 구축 등 기업의 디지털 전환(DX)을 선도하는 맞춤형 AI 솔루션을 제공합니다. **-원스탑 서비스 출시 시스템**: 기획 및 BM",
    "website": "https://www.plusfunai.com",
    "email": "phonefun@naver.com",
    "contact": "010-7450-4747",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/844",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "지원24",
      "포스팅해",
      "블로블로"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅",
      "마케팅 콘텐츠",
      "영상/이미지"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "발표자료",
      "피드백",
      "홈페이지",
      "자동화",
      "컨설팅",
      "광고",
      "영상",
      "이미지",
      "블로그"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "이미지 생성"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "홈페이지",
      "자동화",
      "컨설팅",
      "SNS/광고 문구",
      "영상",
      "이미지",
      "블로그"
    ],
    "techEvidence": "LLM, 시장분석, 분석, 자동화, 워크플로우, 연동, 이미지, 사진",
    "priceText": [
      "460토큰 / CREDIT_TOKEN / 33,000원",
      "PRO / 월 구독 / 33,000원"
    ],
    "minPrice": 33000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "신규가입 혜택: 30토큰 제공",
      "블로그ID 당 10회/일 조회 서비스: 기본 조회 제공(전문 분석 불가능)"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 68,
    "likeCount": 140,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1460,
        "name": "지원24",
        "summary": "사업계획서 실리콘밸리 수준의 피드백 받아보세요.",
        "website": "https://jiwon24.com",
        "keywords": [
          "IR자료",
          "문서작성",
          "발표자료",
          "사업계획서",
          "시장분석",
          "정부지원",
          "지원사업",
          "창업컨설팅",
          "컨설팅",
          "투자유치"
        ],
        "priceText": [
          "460토큰 / CREDIT_TOKEN / 33,000원"
        ],
        "priceNumber": 33000,
        "pricingKind": "usage",
        "benefits": [
          "신규가입 혜택: 30토큰 제공"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "피드백",
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 시장분석, 분석, 자동화, 워크플로우, 연동"
      },
      {
        "id": 1458,
        "name": "포스팅해",
        "summary": "사진 한장으로 광고 이미지 자동 생성 해드립니다.",
        "website": "https://postinghae.com",
        "keywords": [
          "광고",
          "광고영상",
          "마케팅",
          "상세페이지",
          "상품촬영",
          "쇼핑몰",
          "이미지",
          "이미지생성",
          "홍보",
          "홍보영상"
        ],
        "priceText": [
          "460토큰 / CREDIT_TOKEN / 33,000원"
        ],
        "priceNumber": 33000,
        "pricingKind": "usage",
        "benefits": [
          "신규가입 혜택: 30토큰 제공"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "영상",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "광고",
          "홈페이지",
          "영상",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 이미지, 사진, 자동화, 워크플로우, 연동"
      },
      {
        "id": 1459,
        "name": "블로블로",
        "summary": "네이버 블로그 노출 상태 확인해 드립니다.",
        "website": "https://bloblo.kr",
        "keywords": [
          "게시물분석",
          "광고",
          "네이버",
          "네이버블로그",
          "블로그",
          "블로그광고",
          "블로그노출",
          "블로그마케팅",
          "블로그분석",
          "블로그지수"
        ],
        "priceText": [
          "PRO / 월 구독 / 33,000원"
        ],
        "priceNumber": 33000,
        "pricingKind": "fixed",
        "benefits": [
          "블로그ID 당 10회/일 조회 서비스: 기본 조회 제공(전문 분석 불가능)"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "광고",
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 분석, 자동화, 워크플로우, 연동"
      }
    ]
  },
  {
    "id": 604,
    "name": "디엑스아이알 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/130482/35d220b3a92042bf92e21a6bdb9497f0.webp",
    "summary": "AI 기반 의사결정 인텔리전스 - 기업 리서치부터 전략·실행 로드맵까지 생성하는 AI 의사결정 플랫폼",
    "description": "**[리서치 · 전략 부문의 ChatGPT]** **ChatGPT/Claude 위의 레이어에서 기업들의 보고서 생성을 위한 서비스를 제공합니다.** 각 기업에서 저희의 솔루션을 통해 자체 보고서를 생산합니다. 47개 언어로 전세계에 서비스를 제공하는 글로벌 리서치· 전략 회사입니다. 제품소개 : [https://dxir.co/product-intro](https://dxir.co/product-intro) 우수스타트업 대상|NICE평가정보가 엄선한 B2B 솔루션|검증된 사업자 **디엑스아이알 주식회사 | DXIR Co., Ltd.** - **2026년 우수 스타트업 대상(['전략 실행 자동화 플랫폼' 디엑스아이알, '우수스타트업' 선정 - 머니투데이)](https://www.mt.co.kr/industry/2026/04/16/2026041609534683684)** - **NICE평가정보가 엄선한 B2B 솔루션 기업([https://www.nicebizinfo.com/]",
    "website": "https://dxir.co/",
    "email": "support@dxir.co",
    "contact": "010-9690-3380",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/604",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "DXIR"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "IR",
      "홈페이지",
      "DB설계",
      "시장조사",
      "리포트",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "홈페이지",
      "시장/수요조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, 생성형, AI 모델, 시장조사, 리서치, 경쟁사, 시장 규모, 홈페이지",
    "priceText": [
      "Standard 요금제(월 40크레딧, $29) / CREDIT_TOKEN / 43,500원"
    ],
    "minPrice": 43500,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "구독시 30크레딧(약 35,000원) 제공: 구독시 크레딧 별도 추가 제공"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 IR/발표자료, 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 91,
    "likeCount": 112,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1115,
        "name": "DXIR",
        "summary": "AI 기반 의사결정 인텔리전스 - 기업 리서치부터 전략·실행 로드맵까지 생성하는 AI 의사결정 플랫폼",
        "website": "https://dxir.co/about",
        "keywords": [
          "경영전략",
          "경쟁사 분석",
          "글로벌 리서치",
          "리서치",
          "보고서 자동화",
          "시장조사",
          "실행 로드맵",
          "의사결정",
          "전략 컨설팅",
          "프로젝트 트래커"
        ],
        "priceText": [
          "Standard 요금제(월 40크레딧, $29) / CREDIT_TOKEN / 43,500원"
        ],
        "priceNumber": 43500,
        "pricingKind": "usage",
        "benefits": [
          "구독시 30크레딧(약 35,000원) 제공: 구독시 크레딧 별도 추가 제공"
        ],
        "deliverables": [
          "IR/발표자료",
          "홈페이지",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "IR",
          "홈페이지",
          "DB설계",
          "시장조사",
          "리포트",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, 생성형, AI 모델, 시장조사, 리서치, 경쟁사, 시장 규모, 홈페이지, 분석, 보고서"
      }
    ]
  },
  {
    "id": 773,
    "name": "주식회사 지디피스튜디오",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191809/d67feb560e4341a5b6e7b8e40d965e98.jpeg",
    "summary": "전문가의 판단을 자동 실행하는 규제·법률 SaaS - 업무 자동화 SaaS (마케팅 등)",
    "description": "Threads, X, Reddit 텍스트 컨텐츠 플랫폼에서 브랜드 마케팅을 통한 전환을 설계합니다. 대표님! 진짜 이상한 곳에 돈 쓰지 마시고, SNS 계정도 하나 키우시면서, 당장 구매 전환까지 만들어내세요.",
    "website": "https://threadsmarketing.netlify.app/",
    "email": "ason@gdpstudio.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/773",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "규제·법률 SaaS"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "SNS 문구",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "자동화",
    "priceText": [
      "Free(무료), Enterprise(별도 계약) / 유/무료 혼합 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "free",
    "pricingSortRank": 0,
    "benefits": [
      "Free: 기업 1개 등록 가능"
    ],
    "recommendation": "SNS/광고 문구, 자동화를 빠르게 만들고 고객 모집을 시작하려는 규제·법률 SaaS 같은 서비스가 필요한 팀",
    "followerCount": 85,
    "likeCount": 104,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1354,
        "name": "규제·법률 SaaS",
        "summary": "전문가의 판단을 자동 실행하는 규제·법률 SaaS - 업무 자동화 SaaS (마케팅 등)",
        "website": "https://www.threads.com/@ee.yxx",
        "keywords": [
          "AI",
          "AX",
          "마케팅",
          "콘텐츠"
        ],
        "priceText": [
          "Free(무료), Enterprise(별도 계약) / 유/무료 혼합 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "free",
        "benefits": [
          "Free: 기업 1개 등록 가능"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      }
    ]
  },
  {
    "id": 640,
    "name": "가고자 하는 곳, 시오닉스AI 함께",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185558/a308e8f9a47146d99a0034ff21570c36.png",
    "summary": "어려운 설치 제로, 로그인 한 번이면 끝. 24시간 일하는 AI 행정 비서를 전용 서버까지 통째로.",
    "description": "## 대표님은 현장으로. 실무는 시오닉스가. 화면 앞에 갇힌 창업자는 시장과 멀어집니다. 사람 만나고 검증하는 시간, **나머지는 24시간 전용 서버가 대신 뜁니다.** **오픈채팅으로 상담받기** `→` ( [https://open.kakao.com/o/gZBGgJxi](https://open.kakao.com/o/gZBGgJxi) ) **사전신청하기** `→` ( [https://forms.gle/DYezHMF6Tguxxb498](https://forms.gle/DYezHMF6Tguxxb498) ) # \"왜 시오닉스AI인가?\" ### ① AI 기능이 아니라, 대표님의 '시간'을 드립니다. #### 다른 솔루션이 *\"이런 자동화가 됩니다\"* 를 자랑할 때, 시오닉스는 묻습니다. #### **\"그 시간에 대표님은 어디 계셔야 합니까?\"** 승부는 화면 속이 아니라 **고객 앞, 현장 한복판**에서 갈립니다. 조사·검증·네트워킹은 대표님이, **반복 실무와 인프라는 시",
    "website": "http://synapsion.ai/",
    "email": "ai@synapsion.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/640",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "베이직 AI 에이전트 (STANDARD) 및 서버",
      "프로 AI 에이전트 (DELLUXE) 및 서버",
      "기업용 통합 수석 AI 에이전트 (PREMIUM) 및 서버"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "IR",
      "피드백",
      "시장조사",
      "영상",
      "자동화",
      "컨설팅",
      "사업계획서",
      "리포트"
    ],
    "techTags": [
      "AI 에이전트",
      "시장조사/리서치",
      "노코드/앱빌더",
      "업무 자동화/API",
      "DB/인프라",
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "RAG/지식검색"
    ],
    "deliverables": [
      "IR/발표자료",
      "영상",
      "자동화",
      "컨설팅",
      "사업계획서",
      "시장/수요조사",
      "리포트"
    ],
    "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 리서치, 빌더, 자동화, 서버, 인프라, AI 모델, 시장조사",
    "priceText": [
      "베이직 요금제 / 월 구독 / 200,000원",
      "디럭스 요금제 / 월 구독 / 300,000원",
      "프리미엄 요금제 / 월 구독 / 500,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "AI 모델 추천: 수요기관의 용도에 맞는 AI 모델 추천 (로컬 모델 포함)",
      "AI 모델 이식: 수요기관의 용도에 맞는 AI 모델 셋팅 지원 (로컬 모델 포함)"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 IR/발표자료, 영상 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 66,
    "likeCount": 108,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1167,
        "name": "베이직 AI 에이전트 (STANDARD) 및 서버",
        "summary": "어려운 설치 제로, 로그인 한 번이면 끝. 24시간 일하는 AI 행정 비서를 전용 서버까지 통째로.",
        "website": "",
        "keywords": [
          "AI비서",
          "AI에이전트",
          "경영",
          "리서치",
          "반복업무",
          "백오피스",
          "업무자동화",
          "에이전트",
          "직원",
          "행정"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "IR",
          "피드백",
          "시장조사",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "노코드/앱빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 리서치, 빌더, 자동화, 서버, 인프라"
      },
      {
        "id": 1479,
        "name": "프로 AI 에이전트 (DELLUXE) 및 서버",
        "summary": "한국어로 \"시장조사 해줘\" 한마디면, AI가 직접 웹을 뒤져 보고서 초안까지. 로그인 한 번으로 시작하는 나만의 AI전문가.",
        "website": "",
        "keywords": [
          "AI 비서",
          "AI에이전트",
          "데이터 수집",
          "마케팅",
          "보고서 작성",
          "사업계획서",
          "시장 조사",
          "자동화",
          "전략 기획",
          "콘텐츠 작성"
        ],
        "priceText": [
          "디럭스 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "AI 모델 추천: 수요기관의 용도에 맞는 AI 모델 추천 (로컬 모델 포함)"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "시장/수요조사",
          "리포트",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "피드백",
          "시장조사",
          "리포트",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "노코드/앱빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 모델, AI에이전트, AI 에이전트, 에이전트, 시장조사, 리서치, 빌더, 보고서, 자동화, 서버, 인프라"
      },
      {
        "id": 1168,
        "name": "기업용 통합 수석 AI 에이전트 (PREMIUM) 및 서버",
        "summary": "우리 회사를 가장 잘 아는 'AI 수석'. 사내 지식을 학습한 AI가 여럿이, 동시에, 24시간 일합니다 — 매번 회사 사정을 처음부터 설명하는 시간은 끝.",
        "website": "",
        "keywords": [
          "AI에이전트",
          "AI최적화",
          "RAG",
          "데이터분석",
          "리서치",
          "멀티에이전트",
          "멀티태스킹",
          "서버",
          "에이전트",
          "효율"
        ],
        "priceText": [
          "프리미엄 요금제 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "AI 모델 이식: 수요기관의 용도에 맞는 AI 모델 셋팅 지원 (로컬 모델 포함)"
        ],
        "deliverables": [
          "IR/발표자료",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "IR",
          "피드백",
          "시장조사",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "노코드/앱빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 모델, AI에이전트, AI 에이전트, 에이전트, 멀티에이전트, 리서치, 빌더, RAG, 데이터분석, 분석, 자동화, 서버"
      }
    ]
  },
  {
    "id": 570,
    "name": "(주)드림플래닛",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189131/a3762c95b7a74e578e04e464abf9b20a.png",
    "summary": "AI 기반 창업 전략 분석 솔루션 : 전략AI는 예비창업자와 스타트업이 아이디어만으로도 실행 가능한 사업 전략을 수립할 수 있도록 돕는 AI 기반 창업 전략 분석 솔루션입니다.",
    "description": "🚀 **창업자의 실행을 돕는 기업, 드림플래닛** **드림플래닛**은 예비창업자와 초기 스타트업이 실제로 사업을 시작하고 성장할 수 있도록 돕는 창업 전문 기업입니다. 단순히 이론 중심의 교육을 제공하는 것이 아니라, **창업자가 시장에서 직접 부딪히는 문제를 해결**할 수 있도록 실무 중심의 창업교육, 마케팅 컨설팅, 전략 설계, 콘텐츠 지원 등을 운영하고 있습니다. 🤝 **현장에서 함께 성장해온 창업 파트너** 2019년부터 다양한 분야의 창업자들을 직접 만나며 사업 아이템 검증, 고객 확보, 브랜딩, 온라인 마케팅, 정부지원사업 준비 등 창업 과정 전반에 필요한 실질적인 도움을 제공해왔으며, 창업 초기 단계에서 필요한 실행 전략을 함께 만들어가고 있습니다. 특히 창업자의 현실적인 고민과 시행착오를 이해하고 있다는 점에서 단순 교육기관이 아닌 ✨‘**실행 중심의 창업 파트너**’로서의 역할을 수행하고 있습니다. 🌐 **온라인창업교육서비스 드림스타트업과 창업자 네트",
    "website": "https://www.dreamplanet.co.kr/",
    "email": "dreamplanet@dreamplanet.co.kr",
    "contact": "010-7997-9369",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/570",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "전략AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "랜딩페이지",
      "리포트",
      "브랜딩",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "패널 리서치",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "랜딩페이지",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "10만, 랜딩, 분석, 보고서",
    "priceText": [
      "STAR / 유/무료 혼합 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료: 매일 일정량 무료로 사용 가능"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 랜딩페이지, 리포트 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 89,
    "likeCount": 81,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1072,
        "name": "전략AI",
        "summary": "AI 기반 창업 전략 분석 솔루션 : 전략AI는 예비창업자와 스타트업이 아이디어만으로도 실행 가능한 사업 전략을 수립할 수 있도록 돕는 AI 기반 창업 전략 분석 솔루션입니다.",
        "website": "https://ai.dreamstartup.co.kr/",
        "keywords": [
          "AI 기반 창업 전략",
          "데이터 기반 의사결정",
          "마케팅 전략",
          "맞춤형 전략 보고서",
          "시장 분석",
          "실행 중심 창업 파트너",
          "아이디어 사업화",
          "예비창업자 지원",
          "창업 준비 시간 단축",
          "타겟 고객 분석"
        ],
        "priceText": [
          "STAR / 유/무료 혼합 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "무료: 매일 일정량 무료로 사용 가능"
        ],
        "deliverables": [
          "랜딩페이지",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "랜딩페이지",
          "리포트",
          "브랜딩",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "패널 리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "10만, 랜딩, 분석, 보고서"
      }
    ]
  },
  {
    "id": 581,
    "name": "(주)위레이저",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186588/9bed93af02a448d49b9a6a2f19627a78.png",
    "summary": "투자자보다 먼저, 내 사업을 냉정하게 봐주는 AI — IR 덱·재무제표·창업자 역량까지 투자자 관점에서 분석하고 투자심사보고서까지 자동 생성합니다.",
    "description": "**주식회사 위레이저 (Weraser)** **— OpenAI가 선정한 AI 기술 스타트업** 위레이저는 중소벤처기업부와 **OpenAI**가 공동 진행한 글로벌 협업 프로그램에서 **AI 유망 스타트업 14개사** 중 한 곳으로 선정된 AI 기술 기업입니다. 세계가 인정한 기술력을, 이제 막 사업을 시작하는 예비창업자의 책상 위에 그대로 올려 드립니다. > 저희의 출발점도 여러분과 같았습니다. 투자 유치를 위해 밤새 IR 덱을 고치고, 어렵게 만든 기술을 특허로 지키고, 끝없는 회의 속에서 결정사항을 놓치지 않으려 애쓰던 경험이 곧 제품이 되었습니다. \"누구나 AI를 자기 사업의 무기로 쓸 수 있어야 한다\"는 믿음으로 2020년 시작해, 대기업과 전문가 집단만 누리던 역량을 AI 에이전트로 다시 설계했습니다. **모두의 IR**은 투자자를 만나기 전에 내 사업을 냉정하게 점검해주고, **모두의 IP**는 아이디어만 있으면 특허 명세서까지 만들어줍니다. 창업은 시간도, 돈",
    "website": "https://www.weraser.com/",
    "email": "modu@weraser.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/581",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "모두의 IR",
      "모두의 IP"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR",
      "피드백",
      "리포트",
      "SEO"
    ],
    "techTags": [
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "데이터 분석/대시보드",
      "RAG/지식검색",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "리포트"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 시뮬레이션, 분석, 보고서, 검색, 연동",
    "priceText": [
      "스탠다드 (월 1,100 크레딧) / 유/무료 혼합 / 200,000원",
      "Standard (월 4건) / 유/무료 혼합 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "모두의 창업 참가자 특별 할인: 기존 요금 50% 할인된 가격에 제공",
      "특별 할인: 모두의 창업 참가자 특별 50% 할인 제공"
    ],
    "recommendation": "AI 에이전트, 가상고객/시뮬레이션 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 모두의 IR 같은 서비스가 필요한 팀",
    "followerCount": 119,
    "likeCount": 47,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1085,
        "name": "모두의 IR",
        "summary": "투자자보다 먼저, 내 사업을 냉정하게 봐주는 AI — IR 덱·재무제표·창업자 역량까지 투자자 관점에서 분석하고 투자심사보고서까지 자동 생성합니다.",
        "website": "",
        "keywords": [
          "AI투자시뮬레이션",
          "IR덱분석",
          "예비창업자",
          "재무제표분석",
          "창업자역량진단",
          "투자심사보고서자동생성",
          "투자유치준비"
        ],
        "priceText": [
          "스탠다드 (월 1,100 크레딧) / 유/무료 혼합 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "usage",
        "benefits": [
          "모두의 창업 참가자 특별 할인: 기존 요금 50% 할인된 가격에 제공"
        ],
        "deliverables": [
          "IR/발표자료",
          "리포트"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "피드백",
          "리포트"
        ],
        "techTags": [
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 시뮬레이션, 분석, 보고서"
      },
      {
        "id": 1086,
        "name": "모두의 IP",
        "summary": "아이디어만 있으면, AI가 특허를 만들어줍니다 — 선행특허 검색부터 명세서 작성, 도면 생성까지 한 번에 해결해 특허 비용을 90% 이상 절감합니다.",
        "website": "",
        "keywords": [
          "KRPRIS연동",
          "도면자동생성",
          "선행특허검색",
          "예비창업자IP보호",
          "직접출원가능",
          "특허명세서자동작성",
          "특허비용절감",
          "특허전략수립"
        ],
        "priceText": [
          "Standard (월 4건) / 유/무료 혼합 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "특별 할인: 모두의 창업 참가자 특별 50% 할인 제공"
        ],
        "deliverables": [
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발"
        ],
        "detailTags": [
          "SEO",
          "IR"
        ],
        "techTags": [
          "AI 에이전트",
          "RAG/지식검색",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 검색, 연동"
      }
    ]
  },
  {
    "id": 730,
    "name": "주식회사 시너지앤",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186706/2e5b0ad2b9f6430b90961880f4999e99.jpeg",
    "summary": "AI 기반 공공 정책자원 매칭·경영전략 지원 SaaS 플랫폼 : 250+출처, 4,000건+ 정부지원사업 자동 매칭 +심층분석+사업계획서 작성 + 매칭 적합성, 모두 한 곳에.",
    "description": "주식회사 시너지앤은 창업자와 공공 정책자원의 '시너지(Synergy)'를 만드는 AI 경영전략 SaaS 스타트업입니다. 대한민국에서는 매년 수조 원 규모의 정부·지자체·공공기관 창업지원·R&D·정책자금·인증 사업이 열려있습니다. 그러나 \"내 회사에 맞는 사업이 무엇인지\", \"어떻게 준비해야 합격하는지\" 몰라 기회를 놓치는 창업자가 너무 많습니다. 시너지앤은 이 정보·전략 격차를 AI로 해결합니다. ▸ 4,000건 이상의 공공정책 데이터로 학습된 자체 매칭 엔진 ▸ 현직 변리사가 설계한 R&D 과제 최적화 로직 ▸ NLP 기반 사업계획서 자동 작성 기술 특히 시너지앤의 AI에는 KAIST 출신 변리사이자 대기업 CIPO, 다수 정부지원사업 심사위원을 역임한 창업자의 현장 경험이 그대로 담겨있습니다. '심사하던 시선'을 AI 로직 자체에 반영한 것이 다른 매칭 서비스와의 결정적 차이입니다. 이 세 가지 기술의 융합으로, 창업자가 본업에 집중하면서도 지원사업과 정책자금을 전",
    "website": "https://www.jiwonmatch.com",
    "email": "support@synergyn.kr",
    "contact": "010-2131-9128",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/730",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "지원매치(JiwonMatch)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "사업계획서"
    ],
    "techEvidence": "분석",
    "priceText": [
      "베이직 요금제 / 월 구독 / 58,000원"
    ],
    "minPrice": 58000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "베이직: 베이직 요금제 7일 무료 제공"
    ],
    "recommendation": "사업계획서를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 74,
    "likeCount": 92,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1292,
        "name": "지원매치(JiwonMatch)",
        "summary": "AI 기반 공공 정책자원 매칭·경영전략 지원 SaaS 플랫폼 : 250+출처, 4,000건+ 정부지원사업 자동 매칭 +심층분석+사업계획서 작성 + 매칭 적합성, 모두 한 곳에.",
        "website": "https://jiwonmatch.com/guide",
        "keywords": [
          "AI사업계획서",
          "보조금",
          "사업계획서",
          "스타트업",
          "정부R&D",
          "정부지원금",
          "정부지원사업",
          "정책자금",
          "창업",
          "창업지원"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 58,000원"
        ],
        "priceNumber": 58000,
        "pricingKind": "fixed",
        "benefits": [
          "베이직: 베이직 요금제 7일 무료 제공"
        ],
        "deliverables": [
          "사업계획서"
        ],
        "majorTags": [
          "사업계획서/IR",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "분석"
      }
    ]
  },
  {
    "id": 668,
    "name": "주식회사 깔로",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188562/eca8f22658894aa8b969220ada89b314.png",
    "summary": "AI 기반 디지털 리서치 솔루션 - 약 10만 명 패널을 정밀 타기팅해 초기 시장조사, 수요조사, 제품·서비스 검증을 빠르게 수행하는 AI 시장조사·고객검증 솔루션입니다.",
    "description": "**창업의 가장 큰 리스크는 제품을 만드는 것이 아니라, 고객을 잘못 이해하는 데서 시작됩니다.** **깔로는 그 불확실성을 데이터로 줄이는 리서치 테크 기업입니다.** 1️⃣웹 기반 솔루션을 통해 설문 설계, 타깃 응답자 모집, 응답 품질 검증, 결과 분석·리포트 생성까지 시장조사와 고객검증의 전 과정을 자동화합니다. 2️⃣10만 명 규모의 패널과 7대 핵심 속성 기반 정밀 타기팅으로 초기 시장조사, 제품·서비스 검증, MVP 테스트, 가격·광고·메시지 반응 확인을 빠르고 정확하게 수행할 수 있도록 돕습니다. 3️⃣AI 패널관리시스템을 통해 불성실 응답과 비정상 데이터를 걸러내고, 실시간 대시보드와 분석 리포트를 제공해 창업자가 복잡한 데이터 해석 없이도 바로 다음 의사결정을 내릴 수 있게 지원합니다. 📊한국소프트웨어산업협회 등록 소프트웨어사업자이자 한국조사협회 회원사로, 공공·기업·교육기관 등 다양한 현장에서 축적한 디지털 리서치 역량을 바탕으로 창업의 불확실성을 줄이고",
    "website": "https://research.kaloidea.com",
    "email": "sw.kim@kaloidea.com",
    "contact": "010-7342-3299",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/668",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "깔로 AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "홈페이지",
      "MVP",
      "수요조사",
      "시장조사",
      "리포트",
      "자동화",
      "교육"
    ],
    "techTags": [
      "패널 리서치",
      "설문/서베이",
      "시장조사/리서치",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "리포트",
      "자동화"
    ],
    "techEvidence": "패널, 10만, 응답자, 타기팅, 설문, 문항, 응답, 시장조사, 리서치, MVP",
    "priceText": [
      "500,000씨앗(포인트) / CREDIT_TOKEN / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "회원가입 시, 월 2회 무료 체험판 이용 가능: 체험판: 10문항 이내, 응답자 100명 이하, 응답자 타깃팅 조건(성별/연령/지역으로) 제한"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 SNS/광고 문구, 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 115,
    "likeCount": 46,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1205,
        "name": "깔로 AI",
        "summary": "AI 기반 디지털 리서치 솔루션 - 약 10만 명 패널을 정밀 타기팅해 초기 시장조사, 수요조사, 제품·서비스 검증을 빠르게 수행하는 AI 시장조사·고객검증 솔루션입니다.",
        "website": "https://research.kaloidea.com",
        "keywords": [
          "10만패널",
          "MVP테스트",
          "고객검증",
          "대시보드",
          "설문자동설계",
          "속성기반타기팅",
          "시장조사",
          "응답자자동매칭",
          "제품서비스검증",
          "품질관리"
        ],
        "priceText": [
          "500,000씨앗(포인트) / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "회원가입 시, 월 2회 무료 체험판 이용 가능: 체험판: 10문항 이내, 응답자 100명 이하, 응답자 타깃팅 조건(성별/연령/지역으로) 제한"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "홈페이지",
          "MVP",
          "수요조사",
          "시장조사",
          "리포트",
          "자동화",
          "교육"
        ],
        "techTags": [
          "패널 리서치",
          "설문/서베이",
          "시장조사/리서치",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "패널, 10만, 응답자, 타기팅, 설문, 문항, 응답, 시장조사, 리서치, MVP, 대시보드, 분석"
      }
    ]
  },
  {
    "id": 780,
    "name": "주식회사 코그로보",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185766/535dd78c92374caf8280f19f700a7734.webp",
    "summary": "AI API 오마카세 LLM API - Google Gemma4 LLM 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
    "description": "· 주식회사 코그로보는 **“고객 삶 속에 숨어 있는 가치를 발견하고(Kognition), 그것을 현실로 만들어가는(Robotics)”** 비전을 가지고 시작했어요. 저희는 버려지는 데이터들을 AI 기술로 활용해서, 우리 사회가 가진 문제들을 하나하나 해결해가고 있어요. 작은 문제라도 기술로 더 나은 방향을 만들 수 있다면, 그게 바로 저희가 존재하는 이유라고 생각해요. 또 저희는 사회에 만들어내는 긍정적인 영향력이 커질수록, 회사도 함께 성장한다고 믿고 있어요. 그래서 세대별 발달과 삶의 변화를 돕는 서비스들을 꾸준히 만들어가며, **‘함께’, ‘즐겁게’, ‘가치로운’ 세상**을 만들어가고자 해요. · 저희가 하고 있는 일 **AI 컨설팅/구축** 기업과 서비스에 꼭 맞는 AI 기술을 함께 고민하고, 실제로 사용할 수 있도록 구축해줘요. **GPU 임대/API 서비스** AI 개발에 꼭 필요한 GPU 인프라와(**[kogrobo.co.kr](http://kogrobo.c",
    "website": "https://aiapi.kogrobo.com",
    "email": "help@kogrobo.com",
    "contact": "070-4104-0244",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/780",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "대규모 언어 모델(LLM)",
      "음성을 텍스트로 변환(STT)",
      "텍스트를 음성으로 변환(TTS)",
      "텍스트 임베딩(Embedding)"
    ],
    "majorTags": [
      "MVP/개발",
      "데이터/리포트",
      "교육/컨설팅",
      "영상/이미지"
    ],
    "detailTags": [
      "DB설계",
      "컨설팅",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "업무 자동화/API",
      "DB/인프라",
      "음성/STT/TTS",
      "RAG/지식검색",
      "이미지 생성"
    ],
    "deliverables": [
      "컨설팅",
      "이미지"
    ],
    "techEvidence": "LLM, GPT, API, DB, 인프라, GPU, STT, 음성, TTS, RAG",
    "priceText": [
      "Pro / 월 구독 / 450,000원",
      "Pro / 월 구독 / 90,000원",
      "Pro / 월 구독 / 60,000원",
      "Pro / 월 구독 / 240,000원"
    ],
    "minPrice": 60000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료사용 (일30회): 무료 워크벤치"
    ],
    "recommendation": "LLM/생성형AI, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 대규모 언어 모델(LLM) 같은 서비스가 필요한 팀",
    "followerCount": 159,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1506,
        "name": "대규모 언어 모델(LLM)",
        "summary": "AI API 오마카세 LLM API - Google Gemma4 LLM 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=llm",
        "keywords": [
          "AI",
          "API",
          "Gemma4",
          "GPT",
          "LLM",
          "오마카세"
        ],
        "priceText": [
          "Pro / 월 구독 / 450,000원"
        ],
        "priceNumber": 450000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, GPT, API, DB, 인프라, GPU"
      },
      {
        "id": 1507,
        "name": "음성을 텍스트로 변환(STT)",
        "summary": "AI API 오마카세 Speech to Text (STT) API - faster-whisper-large 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=stt",
        "keywords": [
          "AI",
          "API",
          "Chatbot",
          "Speech",
          "Speech to Text",
          "STT",
          "오마카세",
          "챗봇"
        ],
        "priceText": [
          "Pro / 월 구독 / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "STT, 음성, API, DB, 인프라, GPU"
      },
      {
        "id": 1499,
        "name": "텍스트를 음성으로 변환(TTS)",
        "summary": "AI API 오마카세 Text to Speech (TTS) API - Qwen3 TTS 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=tts",
        "keywords": [
          "AI",
          "API",
          "Chatbot",
          "Speech",
          "Text to Speech",
          "TTS",
          "오마카세",
          "챗봇"
        ],
        "priceText": [
          "Pro / 월 구독 / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "TTS, 음성, API, DB, 인프라, GPU"
      },
      {
        "id": 1500,
        "name": "텍스트 임베딩(Embedding)",
        "summary": "AI API 오마카세 Text Embedding API - Qwen3 Embedding 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=embedding",
        "keywords": [
          "AI",
          "API",
          "Chatbot",
          "Embedding",
          "RAG",
          "오마카세",
          "챗봇"
        ],
        "priceText": [
          "Pro / 월 구독 / 60,000원"
        ],
        "priceNumber": 60000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "RAG/지식검색",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "RAG, API, DB, 인프라, GPU"
      },
      {
        "id": 1501,
        "name": "문장 재순위(Reranking)",
        "summary": "AI API 오마카세 Text Reranking API - Qwen3 Reranking 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=reranker",
        "keywords": [
          "AI",
          "API",
          "RAG",
          "Rerank",
          "Reranker",
          "리랭커",
          "오마카세"
        ],
        "priceText": [
          "Pro / 월 구독 / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "RAG/지식검색",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "RAG, API, DB, 인프라, GPU"
      },
      {
        "id": 1502,
        "name": "목소리 복제(Voice Clone)",
        "summary": "AI API 오마카세 Voice Clone API - Qwen3 TTS Custom Voice 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=voiceClone",
        "keywords": [
          "API",
          "Clone",
          "TTS",
          "Voice",
          "Voice Clone",
          "목소리",
          "오마카세"
        ],
        "priceText": [
          "Pro / 월 구독 / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "TTS, API, DB, 인프라, GPU"
      },
      {
        "id": 1503,
        "name": "이미지를 문장으로 변환(Image-to-Text)",
        "summary": "AI API 오마카세 Image to Text (I2T) API - Multi-modal 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=image2text",
        "keywords": [
          "AI",
          "API",
          "GPU",
          "I2T",
          "Image to Text",
          "LLM",
          "Multi Modal",
          "OCR",
          "오마카세"
        ],
        "priceText": [
          "Pro / 월 구독 / 240,000원"
        ],
        "priceNumber": 240000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "이미지",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "이미지",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 이미지, API, DB, 인프라, GPU"
      },
      {
        "id": 1504,
        "name": "이미지 생성(Image Generation)",
        "summary": "AI API 오마카세 Text to Image (T2I) API - Qwen Image 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=t2i",
        "keywords": [
          "AI",
          "API",
          "Image",
          "Image Gen",
          "T2I",
          "Text2Image",
          "오마카세",
          "이미지"
        ],
        "priceText": [
          "Pro / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "이미지",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "이미지",
          "컨설팅"
        ],
        "techTags": [
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "이미지 생성, 이미지, API, DB, 인프라, GPU"
      },
      {
        "id": 1505,
        "name": "문장을 음악으로 변환(Text-to-Music)",
        "summary": "AI API 오마카세 Text to Music (T2M) API - Acestep 최신 모델 무제한 월정액 서비스, 샘플 코드로 AI 앱은 딸깍, 무제한 사용해도 비용은 월정액, 토큰 스트레스/빌쇼크 제로",
        "website": "https://aiapi.kogrobo.com/api-test?api=t2m",
        "keywords": [
          "AI",
          "API",
          "gen Music",
          "Music",
          "T2M",
          "Text2Music",
          "오마카세",
          "음악",
          "음악 생성"
        ],
        "priceText": [
          "Pro / 월 구독 / 180,000원"
        ],
        "priceNumber": 180000,
        "pricingKind": "fixed",
        "benefits": [
          "무료사용 (일30회): 무료 워크벤치"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "API, DB, 인프라, GPU"
      }
    ]
  },
  {
    "id": 818,
    "name": "호미에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187906/9d2e683bf61a491095fa1b7c3bd87bc1.png",
    "summary": "SNS 광고 한 번에 끝내세요.",
    "description": "## AI 광고 이미지 제작 + 인플루언서 마케팅 SNS 광고에 필요한 두 가지를 한 곳에서, 필요한 것만 골라 쓰세요. > **광고 이미지가 필요하면 AI로 직접 만들고(OOWA)** > > **광고를 맡기고 싶으면 인플루언서에게 맡기세요(인플루픽)** 각각 따로 써도 되고, 함께 쓰면 더 좋습니다. --- --- --- ### 🎨 OOWA — AI 광고 이미지 제작 제품 사진 한 장만 올리면 광고 수준의 홍보 이미지가 완성됩니다. > - **제품과 로고를 왜곡 없이 그대로** 살립니다 > - 프롬프트를 최소화하고 **버튼 클릭으로 제작, 마음에 안 드는 부분만 콕 집어 수정** > - **앵글·조명·분위기까지 조절**해 상세페이지, SNS 광고, 썸네일을 무제한으로 --- --- --- ### 📢 인플루픽 — 인플루언서 마케팅 같은 10만 팔로워라도 팔로워 구성에 따라 광고 성과는 전혀 다릅니다. AI가 대표님의 모두의창업 프로필로 비즈니스 맥락을 분",
    "website": "https://gov.oowa.ai",
    "email": "leo@homilabs.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/818",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "광고 제작 + 인플루언서 마케팅 : 골라 쓰는 SNS 광고 솔루션"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "로고",
      "이미지"
    ],
    "techTags": [
      "패널 리서치",
      "데이터 분석/대시보드",
      "이미지 생성"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "로고",
      "이미지"
    ],
    "techEvidence": "10만, 분석, 이미지, 사진",
    "priceText": [
      "OOWA 크레딧 / 인플루언서 매칭 (최소 단위) / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "인플루언서 마케팅 상담: 상담 무료 / 계약시 바우처 사용 가능"
    ],
    "recommendation": "SNS/광고 문구, 로고 결과물로 첫 고객 반응을 빠르게 확인하려는 광고 제작 + 인플루언서 마케팅 : 골라 쓰는 SNS 광고 솔루션 같은 서비스가 필요한 팀",
    "followerCount": 90,
    "likeCount": 55,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1497,
        "name": "광고 제작 + 인플루언서 마케팅 : 골라 쓰는 SNS 광고 솔루션",
        "summary": "SNS 광고 한 번에 끝내세요.",
        "website": "https://influpick.vercel.app",
        "keywords": [
          "AI",
          "SNS",
          "SNS광고",
          "광고",
          "마케팅",
          "바이럴",
          "바이럴마케팅",
          "인스타",
          "인플루언서",
          "인플루언서마케팅"
        ],
        "priceText": [
          "OOWA 크레딧 / 인플루언서 매칭 (최소 단위) / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [
          "인플루언서 마케팅 상담: 상담 무료 / 계약시 바우처 사용 가능"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "로고",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "로고",
          "이미지"
        ],
        "techTags": [
          "패널 리서치",
          "데이터 분석/대시보드",
          "이미지 생성"
        ],
        "techEvidence": "10만, 분석, 이미지, 사진"
      }
    ]
  },
  {
    "id": 726,
    "name": "주식회사 스퀘어스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186732/0cb4b3ec9a294955a6e950c72ee9cc67.png",
    "summary": "코딩없이 3분 만에 AI로 홈페이지 완성, 파워포인트 처럼 드래그&드롭으로 간편하게 수정하고 배포까지!",
    "description": "**스퀘어스**는 생성형 AI / 바이브코딩으로 웹사이트를 3분만에 제작하는 **큐샵(QSHOP)** 을 서비스하고 있습니다. 큐샵(QShop)은 \"누구나 쉽고 빠르게\" 자신만의 브랜드를 온라인에서 시작할 수 있도록 돕는 \"웹사이트·커머스 빌더 플랫폼\"입니다. 마우스 클릭만으로 나만의 웹사이트를 만드는 노코드(NoCode) 플랫폼이며, 생성형 AI를 활용해 ChatGPT처럼 대화형으로 웹사이트를 만드는 \"큐샵AI\" 서비스를 출시하여 빠르게 성장하고 있습니다. 2024년 4월 출시 이후 현재까지 큐샵을 통해 개설된 웹사이트는 17만개 이상이며, 서비스 성과와 기술력을 인정받아 Strong Ventures, 현대투자파트너스, 신용보증기금으로부터 누적 30억 원 규모의 투자를 유치하였습니다.",
    "website": "https://www.qshop.ai",
    "email": "gov@squares.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/726",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "큐샵 AI 노코드 홈페이지 빌더 + AI 크레딧 (2개월)",
      "큐샵 AI 노코드 홈페이지 빌더 + 초기 세팅 패키지 (2개월)"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "브랜딩"
    ],
    "techTags": [
      "LLM/생성형AI",
      "노코드/앱빌더",
      "랜딩페이지 빌더"
    ],
    "deliverables": [
      "랜딩페이지",
      "홈페이지"
    ],
    "techEvidence": "GPT, ChatGPT, 생성형, 노코드, 빌더, 바이브코딩, 랜딩, 홈페이지",
    "priceText": [
      "큐샵 Growth 플랜 + AI 크레딧 1만 / 월 구독 / 100,000원",
      "큐샵 Growth 플랜 + AI 크레딧 1만 + 초기 셋팅/브랜딩 가이드 / 월 구독 / 500,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free Plan: 기능 제한이 있는 무료 플랜을 제공합니다",
      "Free 플랜: 기능 제한있는 무료 플랜을 제공합니다"
    ],
    "recommendation": "랜딩페이지, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 큐샵 AI 노코드 홈페이지 빌더 + AI 크레딧 (2개월) 같은 서비스가 필요한 팀",
    "followerCount": 60,
    "likeCount": 84,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1286,
        "name": "큐샵 AI 노코드 홈페이지 빌더 + AI 크레딧 (2개월)",
        "summary": "코딩없이 3분 만에 AI로 홈페이지 완성, 파워포인트 처럼 드래그&드롭으로 간편하게 수정하고 배포까지!",
        "website": "https://qshop.ai/landing/modoo.html",
        "keywords": [
          "노코드",
          "랜딩 페이지",
          "바이브코딩",
          "웹사이트",
          "홈페이지"
        ],
        "priceText": [
          "큐샵 Growth 플랜 + AI 크레딧 1만 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [
          "Free Plan: 기능 제한이 있는 무료 플랜을 제공합니다"
        ],
        "deliverables": [
          "랜딩페이지",
          "홈페이지"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "브랜딩"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "랜딩페이지 빌더"
        ],
        "techEvidence": "GPT, ChatGPT, 생성형, 노코드, 빌더, 바이브코딩, 랜딩, 홈페이지"
      },
      {
        "id": 1287,
        "name": "큐샵 AI 노코드 홈페이지 빌더 + 초기 세팅 패키지 (2개월)",
        "summary": "코딩없이 3분 만에 AI로 홈페이지 완성, 파워포인트 처럼 드래그&드롭으로 간편하게 수정하고 배포까지!",
        "website": "https://qshop.ai/landing/modoo.html",
        "keywords": [
          "노코드",
          "바이브코딩",
          "쇼핑몰",
          "웹사이트",
          "홈페이지",
          "홈페이지 빌더",
          "홈페이지 제작"
        ],
        "priceText": [
          "큐샵 Growth 플랜 + AI 크레딧 1만 + 초기 셋팅/브랜딩 가이드 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "Free 플랜: 기능 제한있는 무료 플랜을 제공합니다"
        ],
        "deliverables": [
          "홈페이지"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "홈페이지",
          "노코드",
          "브랜딩"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "랜딩페이지 빌더"
        ],
        "techEvidence": "GPT, ChatGPT, 생성형, 노코드, 빌더, 바이브코딩, 홈페이지"
      }
    ]
  },
  {
    "id": 736,
    "name": "가장 쉬운 홍보· 디자인 자동화, AI 솔루션 - 로보엠디",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191799/248d2fb4a7d1436681ae04e9dd0d294d.png",
    "summary": "매일 홍보자동제작과 등록자동화로 사업성과를 보여주세요",
    "description": "**Ai이미지·디자인·홍보글·Ai마케팅 완전자동화~🤖** **디자인 제작은 쉽게 하고 홍보 컨텐츠 제작부터 홍보 컨텐츠 발행까지 자동화하세요** **2개월 사용시 AI 인스타그램 자동화 1년쿠폰 증정** **어떤 서비스를 신청하실지 고민하지 마세요~** **홍보! 디자인! 마케팅업무 자동화 모두 드립니다~** **📍AI디자인 신청시 AI인스타그자동관리 추가제공** **📍AI인스타그램자동관리 신청시 AI디자인 추가제공** **📍API서비스 신청시 세가지 서비스 모두 제공** 아이디어만 입력하세요. 홍보 콘텐츠 제작부터 인스타그램 등록까지 로보엠디가 한 번에 도와드립니다. 🎉 모두의창업 아이디어 심사 통과를 진심으로 축하드립니다. 이제는 좋은 아이디어를 더 많은 사람에게 보여줄 차례입니다. 로보엠디는 창업팀과 기업을 위한 **AI 콘텐츠 자동화솔루션**입니다. 생성AI로 이미지를 만들고, 수백 개 템플릿으로 디자인을 편집하고, 홍보 문구와 해시태그를 자동으로 만",
    "website": "https://iclave.co.kr/aiapi",
    "email": "support@iclave.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/736",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "로보엠디 AI 인스타그램자동관리",
      "로보엠디 AI 콘텐츠 API",
      "로보엠디 AI 디자인"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "랜딩페이지/홈페이지"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "사업계획서",
      "발표자료",
      "MVP",
      "브랜딩",
      "이미지",
      "자동화",
      "홈페이지",
      "노코드",
      "DB설계"
    ],
    "techTags": [
      "LLM/생성형AI",
      "MVP/프로토타입",
      "이미지 생성",
      "업무 자동화/API",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "MVP",
      "이미지",
      "자동화",
      "홈페이지"
    ],
    "techEvidence": "생성AI, MVP, 이미지 생성, 이미지, 디자인 자동, 자동화, API, 예약, 연동, 생성형",
    "priceText": [
      "유/무료 혼합 / 200,000원",
      "이미지수 1,000+텍스트수 5,000,000 / 월 구독 / 450,000원",
      "프리미엄 / 월 구독 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "🎁: 2달 연속 사용시 1년 무료이용 쿠폰 증정",
      "🎁: AI 디자인 추가 제공",
      "🖼️: 생성AI 이미지 제작 TOOL",
      "📍: 홍보를 돕는 AI인스타그램자동관리 추가제공",
      "📍: 디자인을 돕는 AI디자인 추가제공"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 87,
    "likeCount": 49,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1299,
        "name": "로보엠디 AI 인스타그램자동관리",
        "summary": "매일 홍보자동제작과 등록자동화로 사업성과를 보여주세요",
        "website": "https://iclave.co.kr/aiapi",
        "keywords": [
          "AI광고자동화",
          "디자인",
          "마케팅 컨텐츠 제작",
          "사업계획서 시장 성과지표",
          "사업소개 발표평가",
          "아이디어 시각화",
          "아이템 이미지",
          "인스타그램 콘텐츠 등록 업무자동화",
          "정부지원사업판매전략",
          "홍보기획 시각화"
        ],
        "priceText": [
          "유/무료 혼합 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "🎁: 2달 연속 사용시 1년 무료이용 쿠폰 증정",
          "🎁: AI 디자인 추가 제공",
          "🖼️: 생성AI 이미지 제작 TOOL"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "MVP",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "사업계획서",
          "발표자료",
          "MVP",
          "브랜딩",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "MVP/프로토타입",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성AI, MVP, 이미지 생성, 이미지, 디자인 자동, 자동화, API, 예약, 연동"
      },
      {
        "id": 1300,
        "name": "로보엠디 AI 콘텐츠 API",
        "summary": "AI학습기능,생성Ai텍스트,Ai이미지API,개인별Ai설정 페이지 API모두 제공",
        "website": "https://iclave.co.kr/aiapi",
        "keywords": [
          "Ai콘덴트생성",
          "Ai텍스트 api",
          "Ai활용서비스",
          "It api기술개발",
          "MVP",
          "노코드",
          "생성ai",
          "생성형 이미지",
          "인공지능 개인별 학습설정 웹페이지 제공",
          "프로토 타입"
        ],
        "priceText": [
          "이미지수 1,000+텍스트수 5,000,000 / 월 구독 / 450,000원"
        ],
        "priceNumber": 450000,
        "pricingKind": "fixed",
        "benefits": [
          "📍: 홍보를 돕는 AI인스타그램자동관리 추가제공",
          "📍: 디자인을 돕는 AI디자인 추가제공"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "MVP",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "홈페이지",
          "노코드",
          "DB설계",
          "MVP",
          "브랜딩",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "생성형, 생성AI, 노코드, 웹페이지, MVP, 이미지 생성, 이미지, 디자인 자동, 자동화, API, 예약, 연동"
      },
      {
        "id": 1301,
        "name": "로보엠디 AI 디자인",
        "summary": "생성AI 이미지제작 및 디자인제작을 돕는 디자인편집툴",
        "website": "https://iclave.co.kr/aiapi",
        "keywords": [
          "AI",
          "디자인",
          "마케팅",
          "마케팅디자인",
          "배너",
          "생성AI",
          "이미지",
          "홍보물"
        ],
        "priceText": [
          "프리미엄 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "📍: 홍보를 돕는 AI인스타그램자동관리 추가제공"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "MVP",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "MVP",
          "브랜딩",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "MVP/프로토타입",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성AI, MVP, 이미지 생성, 이미지제작, 이미지, 디자인 자동, 자동화, API, 예약, 연동"
      }
    ]
  },
  {
    "id": 827,
    "name": "지로",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/179897/4394980aec424ee48e3de98432c646a1.png",
    "summary": "50여개 이미지∙영상 AI모델과 프리셋을 제공하는 올인원 AI 크리에이티브 플랫폼",
    "description": "# 회사 소개 - 드롭샷 AI는 한국의 콘텐츠 제작 환경에 특화된 올인원 크리에이티브 AI 플랫폼입니다. - 드롭샷에서는 누구나 자유롭게 이미지와 영상을 프롬프트를 기반으로 생성하실 수 있어요. - 하나의 구독으로 전세계 50여개 모델을 한 번에 사용하실 수 있습니다. **이런 분들에게 도움될 수 있어요** - 제품 이미지나 컨셉 사진 촬영이 필요한 창업가 - 영상 제작 외주 비용이 부담되는 창업가 - 릴스 제작 등 SNS 운영을 고민 중인 창업가 - 모델 섭외 없이 AI로 제품 사용 튜토리얼을 제작하고 싶은 창업가 ## 빅테크 파트너십 기반 모델 제공 **드롭샷은 글로벌 빅테크 기업과의 파트너십을 바탕으로 가장 빠르고 저렴하게 모델을 제공합니다.** **✅ 주요 모델 목록** - [이미지] 나노바나나프로 / 나노바나나2 / GPT 이미지2 / 그록 이매진 이미지 등 - [영상] 씨댄스 2.0 / 클링 3.0 / 비오 3.1 / 그록 이매진 비디오 / 하이루오 2.3 /",
    "website": "https://aistudio.dropshot.io",
    "email": "jasonlee@jirocorp.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/827",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "드롭샷 AI(Dropshot AI)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "SNS 문구",
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지"
    ],
    "techEvidence": "GPT, 이미지, 사진, 비디오",
    "priceText": [
      "크레딧 10,000당 / CREDIT_TOKEN / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free: 300크레딧"
    ],
    "recommendation": "SNS/광고 문구, 영상를 빠르게 만들고 고객 모집을 시작하려는 드롭샷 AI(Dropshot AI) 같은 서비스가 필요한 팀",
    "followerCount": 79,
    "likeCount": 57,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1427,
        "name": "드롭샷 AI(Dropshot AI)",
        "summary": "50여개 이미지∙영상 AI모델과 프리셋을 제공하는 올인원 AI 크리에이티브 플랫폼",
        "website": "https://aistudio.dropshot.io",
        "keywords": [
          "AI 영상",
          "AI 이미지",
          "나노바나나",
          "나노바나나프로",
          "디자인",
          "마케팅",
          "씨댄스",
          "콘텐츠 제작"
        ],
        "priceText": [
          "크레딧 10,000당 / CREDIT_TOKEN / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "usage",
        "benefits": [
          "Free: 300크레딧"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "SNS 문구",
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성"
        ],
        "techEvidence": "GPT, 이미지, 사진, 비디오"
      }
    ]
  },
  {
    "id": 646,
    "name": "엔톨로지",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/149244/5591ff475c1a4bec98cf3f308053c10f.png",
    "summary": "사업 시작 전, 100만 명의 가상 손님에게 미리 물어볼 수 있는 AI 도구예요",
    "description": "엔톨로지 (Entology) 회사 소개서 **기업가의 머릿속 결정을, 손에 쥘 수 있는 시스템으로** **1. 우리는 누구인가** 엔톨로지(Entology)는 **창업자·소상공인·창업지원기관 운영자**의 의사결정을 시스템으로 바꾸는 한국 SaaS 기업입니다. 미국 팔란티어(Palantir)가 정부·대기업의 의사결정을 자동화한 모델을, 우리는 **한 명의 의사결정자**(1인 창업자·매장주·기관 담당자)부터 시작해 상향식으로 구축하고 있습니다. **공식 도메인**: [entology.net](http://entology.net) **자회사 제품**: BizForge · Sangsang(상상) · Marketing Agent · 지원사업 PMS **2. 미션 · 비전 · 약속** **항목내용Mission**기업가의 머릿속에 있는 의사결정을, 손에 쥘 수 있는 시스템으로 바꿉니다. Vision (2031)한국의 모든 의사결정자가 엔톨로지 위에서 자기 영역의 결정을 내린다.**T",
    "website": "",
    "email": "jdson@kakao.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/646",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "비즈포지"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "사업계획서",
      "IR",
      "랜딩페이지",
      "시장조사",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "가상고객/시뮬레이션",
      "설문/서베이",
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "랜딩페이지",
      "시장/수요조사",
      "자동화"
    ],
    "techEvidence": "GPT, ChatGPT, 가상 손님, 가상인터뷰, 설문, 시장조사, 리서치, 경쟁사, 페르소나, 랜딩",
    "priceText": [
      "3,000 / CREDIT_TOKEN / 19,000원"
    ],
    "minPrice": 19000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "100 크레딧 무료제공: 서비스 내 원하는 기능을 사용해볼 수 있어요."
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 107,
    "likeCount": 17,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1175,
        "name": "비즈포지",
        "summary": "사업 시작 전, 100만 명의 가상 손님에게 미리 물어볼 수 있는 AI 도구예요",
        "website": "",
        "keywords": [
          "AI창업",
          "가상인터뷰",
          "고객설문",
          "광구문구",
          "마케팅",
          "사업아이템검증",
          "손님찾기",
          "시장조사",
          "창업준비",
          "타겟고객"
        ],
        "priceText": [
          "3,000 / CREDIT_TOKEN / 19,000원"
        ],
        "priceNumber": 19000,
        "pricingKind": "usage",
        "benefits": [
          "100 크레딧 무료제공: 서비스 내 원하는 기능을 사용해볼 수 있어요."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "랜딩페이지",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "사업계획서",
          "IR",
          "랜딩페이지",
          "시장조사",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, 가상 손님, 가상인터뷰, 설문, 시장조사, 리서치, 경쟁사, 페르소나, 랜딩, 분석, 자동화"
      }
    ]
  },
  {
    "id": 845,
    "name": "플리트소프트 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185371/8fb77878dc0147e3a704fa9f8d785140.png",
    "summary": "채팅으로 아이디어를 말하면 앱이 됩니다. AI CTO가 풀스택 MVP를 설계하고, 개발하고, 배포합니다.",
    "description": "**아이디어를 말하면, 앱이 됩니다.** AI CTO가 풀스택 MVP를 설계하고, 개발하고, 배포합니다. 소스코드까지. **[당신의 그 밤을, 우리는 압니다]** 밤 11시에 노트북 앞에 앉아, 머릿속 서비스를 누군가에게 설명해본 적 있으신가요. 개발자 친구를 수소문하고, 외주 견적을 받아보고, 노코드 툴을 만지작거리다 결국 *\"내가 코딩을 배워야 하나\"* 하고 한숨을 쉬어본 적 있으신가요. 대부분의 창업이 그 밤에 끝납니다. 아이디어가 나빠서가 아니라, **첫 번째 화면 하나를 만드는 데 6개월이 걸리기 때문**입니다. **[그 6개월을 없애기 위해, 우리는 모였습니다]** 플리트소프트는 그 6개월을 없애기 위해 만들어진 회사입니다. 국내 대형 금융사·유통사·통신사·F&B 브랜드의 핵심 서비스를 만들어온 엔터프라이즈 SI 전문가 30명. 그들이 한 가지 질문에 답하기 위해 모였습니다. *\"이 모든 과정을 AI가 대신할 수 있다면, 창업의 문턱은 얼마나 낮아질까?\"* 그 답이",
    "website": "https://chat.ontotic.com/",
    "email": "sw.jung@plitsoft.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/845",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Ontotic Chat"
    ],
    "majorTags": [
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "노코드",
      "DB설계",
      "MVP",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "노코드/앱빌더",
      "MVP/프로토타입",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "MVP",
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 노코드, MVP, 자동화, DB",
    "priceText": [
      "프로 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "AI 에이전트, 노코드/앱빌더 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Ontotic Chat 같은 서비스가 필요한 팀",
    "followerCount": 71,
    "likeCount": 53,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1461,
        "name": "Ontotic Chat",
        "summary": "채팅으로 아이디어를 말하면 앱이 됩니다. AI CTO가 풀스택 MVP를 설계하고, 개발하고, 배포합니다.",
        "website": "https://plitsoft.com/plitsoft/tech",
        "keywords": [
          "1인 창업자 개발도구",
          "AI 풀스택 개발",
          "AI를 활용한 개발",
          "MVP 자동생성",
          "개발 자동화",
          "노코드",
          "노코드 개발툴",
          "솔루션 개발",
          "앱 개발",
          "앱개발 자동화"
        ],
        "priceText": [
          "프로 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "MVP",
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "노코드",
          "DB설계",
          "MVP",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "노코드/앱빌더",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 노코드, MVP, 자동화, DB"
      }
    ]
  },
  {
    "id": 638,
    "name": "스페이스플로(젠카우)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/190343/3fab89c1a9c147b1a7618875a4df9690.png",
    "summary": "복잡한 백엔드 인프라 설정을 바이브코딩으로 빠르게 AI서비스를 구축하고 배포 할 수 있는 AI 에이전트 서비스",
    "description": "젠카우(Gencow)는 AI서비스에 필요한 서버 · 데이터베이스 · 인증·AI연동을 하나의 플랫폼으로 통합 제공하는 AI백엔드 엔진 입니다. 개발 경험이 없는 예비 창업자도 AI 코딩 도구(Cursor, Claude 등)와 함께 사용하면 외주 없이 직접 서비스를 구축할 수 있습니다. 전문 인프라 엔지니어나 코딩 지식 없이도 상용화 수준의 AI 에이전트를 CLI 기반으로, 단 3분 만에 구축할 수 있는 올인원 AI 백엔드 엔진이자 서비스형 백엔드(BaaS)입니다. 단일 API 키와 통합 크레딧으로 다양한 대형언어모델(LLM)을 지원하며, RAG 파이프라인, 벡터 DB, 인증, 결제 등 필수 인프라를 통합 컴포넌트로 제공합니다. 명령어 한 줄로 로컬(PGlite)에서 상용(PostgreSQL)으로 즉시 전환되는 원커맨드 배포와 nsjail 샌드박스 보안을 통해 엔터프라이즈급 안정성을 확보했습니다. ★★★서비스 즉시 이용 [https://gencow.com/modoo](https:/",
    "website": "https://www.gencow.com",
    "email": "hello@spaceflo.io",
    "contact": "070-5236-4626",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/638",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "백엔드 구축 AI-Native 플랫폼 젠카우(Gencow)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SEO",
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "DB설계",
      "MVP",
      "자동화",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "설문/서베이",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "자동화"
    ],
    "techEvidence": "LLM, GPT, ChatGPT, Claude, AI 에이전트, 에이전트, 응답, 노코드, 바이브코딩, 랜딩페이지",
    "priceText": [
      "스타트업 요금제 / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "ChatGPT 크레딧: 월 100,000 크레딧을 제공"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 랜딩페이지, 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 70,
    "likeCount": 40,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1492,
        "name": "백엔드 구축 AI-Native 플랫폼 젠카우(Gencow)",
        "summary": "복잡한 백엔드 인프라 설정을 바이브코딩으로 빠르게 AI서비스를 구축하고 배포 할 수 있는 AI 에이전트 서비스",
        "website": "https://www.gencow.com/",
        "keywords": [
          "API",
          "backend",
          "LLM",
          "RAG",
          "결제",
          "노코드",
          "바이브코딩",
          "백엔드",
          "사용자인증",
          "프롬프트"
        ],
        "priceText": [
          "스타트업 요금제 / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "usage",
        "benefits": [
          "ChatGPT 크레딧: 월 100,000 크레딧을 제공"
        ],
        "deliverables": [
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "DB설계",
          "MVP",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, GPT, ChatGPT, Claude, AI 에이전트, 에이전트, 응답, 노코드, 바이브코딩, 랜딩페이지, 랜딩, MVP"
      }
    ]
  },
  {
    "id": 576,
    "name": "(주)스마트크리에이터",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/194083/00ef1da5c1d54b7f84f4f5d477a51200.jpeg",
    "summary": "AI 기반 창업사업계획서 작성 지원 플랫폼 : 굿잡.Ai 멘토를 만날때 무작정 가지마세요~ AI 기반 창업사업계획서 작성이라도 해 보고 가서 설명하세요!",
    "description": "강력한 아이디어로 무장하고 있는 스타트업, 연구개발을 통해 발전시키고자 끊임없이 노력하는 벤처기업 입니다 디지털기술을 이용해 지역과 청년을 연결하고, IT기술과 교육을 융합하여 새로운 가치를 만들어가는 창의, 혁신 기업입니다. 새로운 기술이 새로운 방식으로 사람들과 만날 수 있도록 한 발자욱 더 앞서 나가고자 합니다. IT와 EDU의 스마트한 만남! 사람과 세상을 잇는 디지털 사회혁신을 #에듀테크 전문기업 스마트크리에이터와 함께 만들어 가요! **굿잡 . Ai** (AI 기반 창업사업계획서 작성 지원 플랫폼) ● 창업자가 사업계획서 작성에서 포기하는 3가지 이유 ▪ 막막함_아이디어는 있지만 어디서, 어떻게 시작해야 할지 모른다 ▪ 전문성 장벽_지원사업 평가 기준·서류 양식에 맞춰 논리를 구성하는 방법을 모른다 ▪ 시간·비용_전문가 멘토링을 신청할 때 내용을 정리해서 말하려니 뭐부터 말해야 할지 모르겠다. 반복 수정에 지쳐 포기한다 ※ **굿잡 . Ai** 는 이 3가",
    "website": "https://goodjobai.kr/",
    "email": "abc7971@smartcreator.co.kr",
    "contact": "002-1522-6088",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/576",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "굿잡.Ai"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "시장조사",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "시장조사/리서치"
    ],
    "deliverables": [
      "사업계획서",
      "시장/수요조사",
      "컨설팅"
    ],
    "techEvidence": "시장조사",
    "priceText": [
      "프리미엄 플랜 / 유/무료 혼합 / 39,900원"
    ],
    "minPrice": 39900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료 플랜: 500크레딧"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, 시장/수요조사 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 64,
    "likeCount": 45,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1079,
        "name": "굿잡.Ai",
        "summary": "AI 기반 창업사업계획서 작성 지원 플랫폼 : 굿잡.Ai 멘토를 만날때 무작정 가지마세요~ AI 기반 창업사업계획서 작성이라도 해 보고 가서 설명하세요!",
        "website": "",
        "keywords": [
          "AI",
          "기획",
          "멘토링",
          "사업계획서",
          "서류",
          "시장조사",
          "자료작성",
          "창업"
        ],
        "priceText": [
          "프리미엄 플랜 / 유/무료 혼합 / 39,900원"
        ],
        "priceNumber": 39900,
        "pricingKind": "fixed",
        "benefits": [
          "무료 플랜: 500크레딧"
        ],
        "deliverables": [
          "사업계획서",
          "시장/수요조사",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "시장조사",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "시장조사/리서치"
        ],
        "techEvidence": "시장조사"
      }
    ]
  },
  {
    "id": 840,
    "name": "팩타고라 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186569/65a30f8336ac443d85e1713d1d380f3c.png",
    "summary": "AI로 쓴 사업계획서와 IR자료의 수치 오류를 20분 만에 팩트체크하고, 공인된 출처와 근거 자료를 자동으로 찾아 붙여드립니다.",
    "description": "### 🎉 모두의창업 AI 솔루션 공급기업 선정을 진심으로 축하드립니다. 🎉 사업계획서나 IR 자료를 작성하다 보면 생각보다 많은 시간을 자료 찾기보다 **자료 검증하기**에 쓰게 됩니다. AI에게 시장조사를 맡기면 순식간에 결과가 나오지만, **“이 시장 규모 수치는 어디서 나온 거지?”** **“이 경쟁사 정보는 최신 정보가 맞나?”** **“이 자료를 사업계획서에 그대로 써도 될까?”** 결국 다시 검색하고, 보고서를 찾아보고, 출처를 확인하게 됩니다. 특히 정부지원사업, 투자 유치, 사업계획서 작성 과정에서는 정보의 양보다 **정보의 신뢰성**이 더 중요합니다. 실제로 심사위원과 투자자가 확인하는 것은 화려한 문장이 아니라 그 **문장을 뒷받침하는 데이터와 근거**입니다. Factagora는 이러한 문제를 해결하기 위해 설립된 **AI Fact Verification 기업**입니다. 우리는 뉴스, 보고서, 정부 문서, 공개 데이터 등 다양한 정보를 실시간",
    "website": "https://factagora.com/ko?utm_source=modu",
    "email": "randy@factagora.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/840",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Factagora Search API"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "사업계획서",
      "IR",
      "시장조사",
      "리포트"
    ],
    "techTags": [
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "시장/수요조사",
      "리포트"
    ],
    "techEvidence": "시장조사, 리서치, 경쟁사, 시장 규모, 검색, 분석, 보고서, API, 인프라",
    "priceText": [
      "Bootstrap 요금제 (12,000 credit) / 월 구독 / 155,000원"
    ],
    "minPrice": 155000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "free 플랜 (100 credit): 첫 로그인시 100 credit를 제공해드립니다!"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 58,
    "likeCount": 41,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1450,
        "name": "Factagora Search API",
        "summary": "AI로 쓴 사업계획서와 IR자료의 수치 오류를 20분 만에 팩트체크하고, 공인된 출처와 근거 자료를 자동으로 찾아 붙여드립니다.",
        "website": "https://factagora.com/ko?utm_source=modu",
        "keywords": [
          "AI",
          "AI검증",
          "API",
          "경쟁사 분석",
          "사업계획서",
          "시장조사",
          "예비창업패키지",
          "정부지원사업",
          "출처표기",
          "팩트체크"
        ],
        "priceText": [
          "Bootstrap 요금제 (12,000 credit) / 월 구독 / 155,000원"
        ],
        "priceNumber": 155000,
        "pricingKind": "fixed",
        "benefits": [
          "free 플랜 (100 credit): 첫 로그인시 100 credit를 제공해드립니다!"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "시장/수요조사",
          "리포트"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "사업계획서",
          "IR",
          "시장조사",
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "시장조사, 리서치, 경쟁사, 시장 규모, 검색, 분석, 보고서, API, 인프라"
      }
    ]
  },
  {
    "id": 596,
    "name": "더블제로",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/168831/6dfd27dc30ff49ff8e5081ff415c44e1.jpeg",
    "summary": "Claude, GPT, Codex, Gemini, QWEN 등 다양한 AI 서비스의 API와 구독형 플랜(Max급 포함)을 하나의 계정과 한 번의 결제로 통합 이용할 수 있는 AI 플랫폼입니다.",
    "description": "Billing AI “한 번의 결제로, 모든 AI를.” Billing AI는 Claude, GPT, Gemini, Seedance 등 다양한 AI 서비스의 API와 구독형 플랜(Max 포함)을 하나의 계정과 한 번의 결제로 통합 사용할 수 있는 AI 운영 플랫폼입니다. 여러 AI 서비스를 각각 따로 결제하거나 관리할 필요 없이, 사용량·비용·증빙·세금계산서까지 한 번에 간편하게 통합 관리할 수 있습니다. ⸻ 🚀 지원 AI 서비스 - Claude (Anthropic) - GPT / Codex (OpenAI) - Gemini (Google) - Seedance 2.0 - 기타 글로벌 AI 모델 및 API 하나의 플랫폼에서 다양한 AI를 자유롭게 연결하고 사용할 수 있습니다. ⸻ 💳 핵심 기능 ✔ AI API·구독 통합 결제 여러 AI 서비스의 API와 Max·Pro 구독제를 한 번에 결제 및 관리 ✔ 통합 증빙·세금계산서 관리 분산된 영수증·증빙·세금계산서를 자동 통합",
    "website": "https://billing-ai.doublezero.kr/",
    "email": "biz@doublezero.kr",
    "contact": "010-7942-9480",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/596",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "빌링AI"
    ],
    "majorTags": [
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "LLM/생성형AI",
      "업무 자동화/API"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "GPT, Claude, Gemini, AI 모델, API",
    "priceText": [
      "비즈니스 요금제 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 빌링AI 같은 서비스가 필요한 팀",
    "followerCount": 67,
    "likeCount": 31,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1106,
        "name": "빌링AI",
        "summary": "Claude, GPT, Codex, Gemini, QWEN 등 다양한 AI 서비스의 API와 구독형 플랜(Max급 포함)을 하나의 계정과 한 번의 결제로 통합 이용할 수 있는 AI 플랫폼입니다.",
        "website": "https://billing-ai.doublezero.kr/",
        "keywords": [
          "chat gpt",
          "Claude",
          "codex",
          "gemini",
          "GPT",
          "seedance",
          "챗지피티",
          "클러드"
        ],
        "priceText": [
          "비즈니스 요금제 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "LLM/생성형AI",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, Claude, Gemini, AI 모델, API"
      }
    ]
  },
  {
    "id": 648,
    "name": "엠바스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/111083/790f8f1f845d496babd72eafb4924872.png",
    "summary": "코딩없이 알림톡, 결제, 설문조사, 데이터 시트등 간편 연동",
    "description": "> ***솔루션 소개 영상 바로가기 -> [https://youtu.be/cL8COMVYh9s?si=FPdwtJb4ewwwiIDP](https://youtu.be/cL8COMVYh9s?si=FPdwtJb4ewwwiIDP)*** > > ***솔루션 소개 페이지 바로가기 -> [https://aiapp.help/modoo.html](https://aiapp.help/modoo.html)*** ## 1. 한 줄 정의 - 채팅 대화만으로 실제 운영 가능한 웹·앱을 만드는 BaaS 기반 AI 바이브 코딩 플랫폼 기업 --- ## 2. 핵심 서비스: AiApp - 아이디어를 채팅으로 설명하면 AI가 기획, UI, 기능, DB를 자동 생성하여 즉시 배포 가능한 서비스 완성 - 프론트엔드 + 백엔드 + 관리자 기능까지 하나의 플랫폼에서 통합 제공 - 코딩 지식 불필요 — 비개발자 창업자도 직접 제작 및 운영 가능 --- ## 3. 바이브코딩이란 - 코드를 직접 작성하지 않고, 만들고",
    "website": "https://aiapp.help",
    "email": "help@aiapp.help",
    "contact": "010-7640-4707",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/648",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AiApp"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "DB설계",
      "MVP",
      "영상",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "설문/서베이",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "영상",
      "자동화"
    ],
    "techEvidence": "AI에이전트, 에이전트, 설문, 노코드, 바이브코딩, 랜딩페이지, 랜딩, 홈페이지, MVP, 대시보드",
    "priceText": [
      "모두의창업 전용 / 월 구독 / 299,000원"
    ],
    "minPrice": 299000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 랜딩페이지 근거가 필요한 초기 창업팀",
    "followerCount": 69,
    "likeCount": 29,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1177,
        "name": "AiApp",
        "summary": "코딩없이 알림톡, 결제, 설문조사, 데이터 시트등 간편 연동",
        "website": "https://aiapp.help/modoo.html",
        "keywords": [
          "AI에이전트",
          "AI자동화",
          "SaaS",
          "랜딩페이지",
          "바이브코딩",
          "웹사이트제작",
          "프론트엔드",
          "플랫폼",
          "홈페이지제작",
          "홍보페이지"
        ],
        "priceText": [
          "모두의창업 전용 / 월 구독 / 299,000원"
        ],
        "priceNumber": 299000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "DB설계",
          "MVP",
          "영상",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI에이전트, 에이전트, 설문, 노코드, 바이브코딩, 랜딩페이지, 랜딩, 홈페이지, MVP, 대시보드, 자동화, 연동"
      }
    ]
  },
  {
    "id": 578,
    "name": "SF34 - 사업성 검증 및 프로토타이핑 솔루션",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/166893/15f20e5f249f4e5d970a4f24cee55066.png",
    "summary": "아이디어를 데이터로 검증하고 목업까지",
    "description": "### SF34는 아이디어를 현실로 만드는 스타트업입니다. 창업을 준비하면서 이런 고민을 해보신 적 있나요? > *\"내 아이디어, 정말 시장에서 통할까?\"* > *\"비슷한 서비스가 이미 있는 건 아닐까?\"* > *\"어디서부터 어떻게 시작해야 하지?\"* SF34는 바로 이 질문들에서 출발했습니다. 우리는 ++**아이디어가 실행으로 이어지는 과정에서 만나는 장벽을 허무는 것**++을 목표로 합니다. --- ### 우리가 만드는 것 SF34는 아이디어의 **실행 가능성을 높이는 두 가지 플랫폼**을 운영합니다. - **[렛플](https://letspl.me/)** : 아이디어·프로젝트 중심의 팀원 매칭 플랫폼. 개발자, 디자이너, 기획자가 프로젝트를 통해 만납니다. - **[Bunzee](https://bunzee.ai/)** : AI 기반 아이디어 검증 플랫폼. 실측 데이터로 시장성을 분석하고, PRD·프로토타입까지 자동 생성합니다. 렛플로 **\"함께할 사람\"**을,",
    "website": "https://bunzee.ai/modoo",
    "email": "gibuhapi@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/578",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "BUNZEE (번지)"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "데이터/리포트"
    ],
    "detailTags": [
      "노코드",
      "MVP"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "노코드/앱빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "MVP"
    ],
    "techEvidence": "Claude, 경쟁사, 시장 규모, 노코드, MVP, 프로토타입, 목업, 와이어프레임, 분석",
    "priceText": [
      "프로 / 월 구독 / 90,000원"
    ],
    "minPrice": 90000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free Plan: 무료로 체험해보실 수 있습니다."
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 MVP 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 55,
    "likeCount": 43,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1081,
        "name": "BUNZEE (번지)",
        "summary": "아이디어를 데이터로 검증하고 목업까지",
        "website": "https://d20jzv1ghtxgkk.cloudfront.net/notice/2026_Bunzee_Deck+V1.0.pdf",
        "keywords": [
          "기획검증",
          "노코드",
          "목업",
          "와이어프레임",
          "웹 앱 개발",
          "제품흐름",
          "차별화전략",
          "프로토타입"
        ],
        "priceText": [
          "프로 / 월 구독 / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "fixed",
        "benefits": [
          "Free Plan: 무료로 체험해보실 수 있습니다."
        ],
        "deliverables": [
          "MVP"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "데이터/리포트"
        ],
        "detailTags": [
          "노코드",
          "MVP"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "노코드/앱빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "Claude, 경쟁사, 시장 규모, 노코드, MVP, 프로토타입, 목업, 와이어프레임, 분석"
      }
    ]
  },
  {
    "id": 728,
    "name": "주식회사 스타트뷰",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/2823/d05e4ee1bfb9473099d43e5b59fcc604.png",
    "summary": "AI 기반 올인원 숏폼 마케팅 솔루션 - 숏폼 콘텐츠의 기획과 제작, 운영 관리, 성과 측정, 후속 전략 제안까지 숏폼 마케팅의 전 과정을 지원하는 솔루션",
    "description": "스타트뷰는 예비·초기 창업기업이 아이디어, 제품, 서비스를 빠르게 시장에 알리고 초기 고객 반응을 확보할 수 있도록 지원하는 AI 기반 숏폼 마케팅 솔루션입니다. 제품/서비스 정보와 홍보 목적을 입력하면 숏폼 콘텐츠 기획안을 자동 생성하고, 제품/서비스 특성과 적합도가 높은 크리에이터를 자동 모집하며, 이후 협업 대상 선정,콘텐츠 제작, 운영 관리, 성과 측정, 후속 전략 제안까지 숏폼 마케팅의 전과정을 지원합니다. --- --- --- --- --- 안녕하세요! 스타트뷰입니다. 먼저 모두의 창업 선정 진심으로 축하드립니다. 다음 라운드 진출을 준비하려면 아이디어의 가능성뿐만 아니라, 실제 고객 반응과 초기 매출 가능성을 어떻게 만들어가는지도 중요해질 수 있습니다. 스타트뷰는 모두의 창업 AI 공급기업으로, 최소 30만원 부터 100만 원 한도 안에서 숏폼 콘텐츠와 바이럴 실험을 통해 구매·예약·문의 반응을 만들 수 있도록 지원하고 있습니다. 런칭, 팝업, 제품",
    "website": "https://biz.startview.co.kr/",
    "email": "dyddyd002@startview.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/728",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "스타트뷰"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "피드백",
      "영상"
    ],
    "techTags": [
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "리포트",
      "영상"
    ],
    "techEvidence": "숏폼, 예약",
    "priceText": [
      "숏폼 체험단 서비스 / 유/무료 혼합 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "스타트뷰 무료 체험: 제품/서비스 등록 및 기획안 생성 무료 체험"
    ],
    "recommendation": "리포트, 영상를 빠르게 만들고 고객 모집을 시작하려는 스타트뷰 같은 서비스가 필요한 팀",
    "followerCount": 56,
    "likeCount": 42,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1289,
        "name": "스타트뷰",
        "summary": "AI 기반 올인원 숏폼 마케팅 솔루션 - 숏폼 콘텐츠의 기획과 제작, 운영 관리, 성과 측정, 후속 전략 제안까지 숏폼 마케팅의 전 과정을 지원하는 솔루션",
        "website": "",
        "keywords": [
          "마케팅",
          "숏폼",
          "인스타그램",
          "인플루언서",
          "콘텐츠",
          "크리에이터"
        ],
        "priceText": [
          "숏폼 체험단 서비스 / 유/무료 혼합 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "스타트뷰 무료 체험: 제품/서비스 등록 및 기획안 생성 무료 체험"
        ],
        "deliverables": [
          "리포트",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백",
          "영상"
        ],
        "techTags": [
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "숏폼, 예약"
      }
    ]
  },
  {
    "id": 673,
    "name": "주식회사 네오에이전트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/151285/cfa169e95b0f4823997a85ae981880d3.png",
    "summary": "창업자의 아이디어를 설문형 UI로 입력받아 특허출원 명세서, 실용신안 명세서, 청구항 보강본, 선행기술 검색을 자동 생성하는 웹 기반 AI 솔루션입니다. 휴대폰번호·이메일 인증 후 발명명, 문제점, 구성요소, 차별성, 실시예 등을 입력하면 결과물을 문서로 생성해 이메일로 발송합니다.",
    "description": "주식회사 네오에이전트는 창업자와 중소기업이 아이디어를 빠르게 구체화하고 사업화할 수 있도록 지원하는 AI 솔루션 전문기업 입니다. AI를 활용하여 창업 아이디어 정리, 사업 계획서 작성, PSST 구조화, MVP 기획, 랜딩 페이지 제작, 시장 검증 자료 생성, 홍보 콘텐츠 제작, IP 문서 자동화 등 창업 초기 단계에서 필요한 핵심 업무를 웹 기반 솔루션으로 제공합니다. 네오에이전트는 특히 비 개발자와 예비 창업자도 쉽게 사용할 수 있는 설문형 UI 기반 AI 서비스를 지향합니다. 사용자가 아이디어, 고객 문제, 해결 방식, 시장, 실행 계획 등을 입력하면 사업 계획서, PRD, 기능 명세서, 랜딩페이지, IR 자료, 특허 · 실용신안 관련 문서 등 실무형 결과물을 생성하여 이메일로 제공하는 방식의 AI 자동화 서비스를 개발·공급하고 있습니다. 당사는 2026년 NIPA AI 바우처 솔루션 공급업체 및 「모두의 창업」 AI 솔루션 공급업체로 선정되어, 창업자와 기업의 AI 활용",
    "website": "https://www.aimodoo.kr/solutions/ip",
    "email": "sdosa@kakao.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/673",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "IP 문서 자동화 AI",
      "창업 사업계획서·PSST 코파일럿 AI",
      "아이템 홍보 콘텐츠 스튜디오 AI",
      "홈페이지·랜딩페이지 빌더 AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "교육/컨설팅",
      "디자인/브랜딩",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "IR",
      "랜딩페이지",
      "MVP",
      "자동화",
      "사업계획서",
      "발표자료",
      "피드백",
      "컨설팅",
      "로고",
      "이미지",
      "홈페이지",
      "시장조사",
      "리포트",
      "DB설계"
    ],
    "techTags": [
      "AI 에이전트",
      "설문/서베이",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "RAG/지식검색",
      "업무 자동화/API",
      "이미지 생성",
      "노코드/앱빌더",
      "DB/인프라",
      "시장조사/리서치",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "IR/발표자료",
      "랜딩페이지",
      "MVP",
      "시장/수요조사",
      "자동화",
      "사업계획서",
      "컨설팅",
      "로고",
      "이미지",
      "홈페이지",
      "리포트"
    ],
    "techEvidence": "에이전트, 설문, 랜딩페이지, 랜딩, MVP, 검색, 자동화, 이미지, 빌더, 홈페이지",
    "priceText": [
      "1건 당 / CAPACITY_BASED / 20,000원",
      "1건당 / CAPACITY_BASED / 50,000원",
      "1건 당 / CAPACITY_BASED / 100,000원",
      "1건당 / CAPACITY_BASED / 20,000원"
    ],
    "minPrice": 20000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 IR/발표자료, 랜딩페이지 근거가 필요한 초기 창업팀",
    "followerCount": 54,
    "likeCount": 34,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1210,
        "name": "IP 문서 자동화 AI",
        "summary": "창업자의 아이디어를 설문형 UI로 입력받아 특허출원 명세서, 실용신안 명세서, 청구항 보강본, 선행기술 검색을 자동 생성하는 웹 기반 AI 솔루션입니다. 휴대폰번호·이메일 인증 후 발명명, 문제점, 구성요소, 차별성, 실시예 등을 입력하면 결과물을 문서로 생성해 이메일로 발송합니다.",
        "website": "https://www.aimodoo.kr/solutions/ip",
        "keywords": [
          "선행기술",
          "실용신안출원명세서",
          "청구항",
          "특허출원명세서"
        ],
        "priceText": [
          "1건 당 / CAPACITY_BASED / 20,000원"
        ],
        "priceNumber": 20000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SEO",
          "IR",
          "랜딩페이지",
          "MVP",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "RAG/지식검색",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 설문, 랜딩페이지, 랜딩, MVP, 검색, 자동화"
      },
      {
        "id": 1211,
        "name": "창업 사업계획서·PSST 코파일럿 AI",
        "summary": "예비창업패키지용 사업계획서, PSST 간단버전, 멘토 피드백 반영 재작성, 심사질문·발표 스크립트를 자동 생성하는 창업 특화 AI 솔루션입니다. 사용자가 사업 아이템, 고객 문제, 해결방식, 시장, BM, 자금계획 등을 설문형 UI로 입력하면 결과물을 문서로 생성하고 이메일로 발송합니다. 멘토 코멘트 업로드 시 꼭지별 재생성도 지원합니다.",
        "website": "https://www.aimodoo.kr/solutions/bp",
        "keywords": [
          "PSST",
          "멘토피드백",
          "발표스크립트",
          "사업계획서"
        ],
        "priceText": [
          "1건 당 / CAPACITY_BASED / 20,000원"
        ],
        "priceNumber": 20000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "피드백",
          "랜딩페이지",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 설문, 랜딩페이지, 랜딩, MVP, 자동화"
      },
      {
        "id": 1212,
        "name": "아이템 홍보 콘텐츠 스튜디오 AI",
        "summary": "창업 아이템 설명을 입력하면 아이템 소개 쇼츠, 소개 만화, 제품 설명 이미지, 프로덕트 이미지를 생성하는 멀티모달 AI 솔루션입니다. 사용자는 설문형 UI에서 아이템명, 핵심 가치, 타깃 고객, 톤앤매너, 로고·제품 이미지 등을 입력하고, 결과물을 MP4/PNG/JPG/PDF 형태로 이메일로 수신합니다.",
        "website": "https://www.aimodoo.kr/solutions/mc",
        "keywords": [
          "소개만화",
          "아이템쇼츠",
          "제품이미지",
          "프로덕트이미지"
        ],
        "priceText": [
          "1건당 / CAPACITY_BASED / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "로고",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "IR",
          "랜딩페이지",
          "MVP",
          "로고",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 설문, 랜딩페이지, 랜딩, MVP, 이미지, 자동화"
      },
      {
        "id": 1213,
        "name": "홈페이지·랜딩페이지 빌더 AI",
        "summary": "서비스 소개 문장, 고객, 핵심 기능, CTA를 입력하면 원페이지 랜딩페이지, 다중 페이지 홈페이지, 문의/사전예약 폼, SEO·정책문서 패키지를 자동 생성하는 AI 웹빌더입니다. 결과물은 HTML ZIP, PDF 시안, 미리보기 링크, 정책문서 등으로 구성되며 이메일로 전달됩니다.",
        "website": "https://www.aimodoo.kr/solutions/web",
        "keywords": [
          "SEO",
          "등록폼",
          "랜딩페이지",
          "정책문서",
          "홈페이지"
        ],
        "priceText": [
          "1건 당 / CAPACITY_BASED / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "IR",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 설문, 빌더, 랜딩페이지, 랜딩, 홈페이지, MVP, 자동화, 예약, 인프라"
      },
      {
        "id": 1214,
        "name": "시장검증·IR·운영 코파일럿 AI",
        "summary": "시장조사, 경쟁사 분석, 페르소나 정의, VOC 요약, IR Deck, 발표 스크립트, 회의록, 규제 스크리닝 자료를 생성하는 경영지원형 AI 솔루션입니다. 창업자가 설문형 UI로 아이템 정보, 시장 범위, 고객군, 경쟁사, 발표 목적 등을 입력하면 문서 리포트를 이메일로 수령하는 방식입니다.",
        "website": "https://www.aimodoo.kr/solutions/ops",
        "keywords": [
          "IR Deck",
          "VOC",
          "경쟁사 분석",
          "발표 스크립트",
          "시장조사",
          "페르소나"
        ],
        "priceText": [
          "1건당 / CAPACITY_BASED / 20,000원"
        ],
        "priceNumber": 20000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "발표자료",
          "랜딩페이지",
          "MVP",
          "시장조사",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 설문, 시장조사, 경쟁사, 페르소나, 랜딩페이지, 랜딩, MVP, 분석, 리포트, 자동화"
      },
      {
        "id": 1488,
        "name": "MVP 바이브코딩 빌더 AI",
        "summary": "창업자의 아이디어를 설문형 UI로 입력받아 PRD, 기능명세서, 화면흐름도, 와이어프레임, 코드 스캐폴드, API 명세, DB 스키마, 테스트/배포 문서를 생성하는 AI 기반 MVP 구축지원 솔루션입니다. 비개발자도 핵심 기능을 정의하고 초기 구현 문서를 확보할 수 있도록 설계했습니다. 생성물은 문서/이미지/파일 형태로 이메일 전달합니다.",
        "website": "https://www.aimodoo.kr/solutions/mvp",
        "keywords": [
          "PRD",
          "기능명세서",
          "배포문서",
          "코드 스캐폴드",
          "테스트문서",
          "화면흐름도"
        ],
        "priceText": [
          "1건당 / CAPACITY_BASED / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "IR",
          "랜딩페이지",
          "DB설계",
          "MVP",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 설문, 빌더, 바이브코딩, 랜딩페이지, 랜딩, MVP, 와이어프레임, 이미지, 자동화, API, DB"
      }
    ]
  },
  {
    "id": 765,
    "name": "주식회사 위커밋(WECOMMIT Co., Ltd.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/108486/4889089532484e3ab935fa6cb84e6e04.png",
    "summary": "창업 문서, 지원사업 여기서 끝 AI와 멘토와 무제한 피드백",
    "description": "**(주)위커밋은 창업가를 위한 AI 실행 레이어를 개발·운영하는 AI 스타트업입니다.** 안녕하세요 위커밋 대표 강수진입니다. 모두의창업 선정을 축하드리며, 앞으로의 창업 여정에 무궁한 발전이 있으시길 기원합니다. 뜻이 이루어지는 자리, *\"Will, done.\"* 창업자가 한 문장으로 목표를 말하면, AI가 이를 *구조화된 약속*으로 받아 — 기다림도, 채용 부담도, 놓친 마감도 없이 — **24시간 실행**합니다. 더벤처스·앤틀러 등과 함께, *\"한 사람이 여러 개의 회사를 운영하는 세상\"*을 만들고 있습니다. **지원사업·조달의 신청–접수–정산 전 과정을 잇는 원스톱 솔루션**을 만들고 있습니다. 이 중 창업자를 위한 풀사이클 제품 2가지를 모두의창업 합격자분들에게 선보입니다. (맨 아래 설명 참조) - **StageX** — AI 창업 스튜디오 : 막막한 창업이라는 문제를 당장 실행 가능한 로드맵으로 안내해, 아이디어 단계부터 실행과 서류 준비까지 한 흐름으로 이",
    "website": "https://wecommit.ai/",
    "email": "modoo@wecommit.ai",
    "contact": "070-4509-2582",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/765",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "genDOC(젠닥)",
      "StageX(스테이지엑스)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "발표자료",
      "피드백",
      "홈페이지",
      "MVP",
      "시장조사",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "AI 에이전트",
      "패널 리서치",
      "시장조사/리서치",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "에이전트, 패널, 시장조사, 리서치, 경쟁사, MVP, 분석, 자동화, 연동",
    "priceText": [
      "2000 크레딧 / CREDIT_TOKEN / 200,000원",
      "500 크레딧 / CREDIT_TOKEN / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free 플랜: 문서 생성(기본 제공 크레딧 기반)",
      "Free 플랜: AI 맞춤 로드맵 1회 생성. 비주얼 캔버스. 주간 아카이브 기록. 기본 AI 코파운더 채팅."
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 55,
    "likeCount": 31,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1346,
        "name": "genDOC(젠닥)",
        "summary": "창업 문서, 지원사업 여기서 끝 AI와 멘토와 무제한 피드백",
        "website": "https://gendoc.ai/r/9HLJ5mgK",
        "keywords": [
          "IR피칭덱",
          "MVP",
          "멘토",
          "발표자료",
          "사업계획서",
          "세일즈",
          "시장조사",
          "정부지원사업",
          "지원금",
          "피드백"
        ],
        "priceText": [
          "2000 크레딧 / CREDIT_TOKEN / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "usage",
        "benefits": [
          "Free 플랜: 문서 생성(기본 제공 크레딧 기반)"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "피드백",
          "홈페이지",
          "MVP",
          "시장조사",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "AI 에이전트",
          "패널 리서치",
          "시장조사/리서치",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 패널, 시장조사, 리서치, 경쟁사, MVP, 분석, 자동화, 연동"
      },
      {
        "id": 1490,
        "name": "StageX(스테이지엑스)",
        "summary": "모두의 창업 1라운드 진행 기록이 서면 평가 제출 자료가 되는 유일한 플랫폼",
        "website": "https://www.stagex.kr/",
        "keywords": [
          "AI 코칭",
          "멘토피드백",
          "비주얼캔버스",
          "서면평가",
          "실행계획",
          "예비창업자",
          "주제별자료추천",
          "진행기록",
          "창업로드맵",
          "창업일지"
        ],
        "priceText": [
          "500 크레딧 / CREDIT_TOKEN / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "usage",
        "benefits": [
          "Free 플랜: AI 맞춤 로드맵 1회 생성. 비주얼 캔버스. 주간 아카이브 기록. 기본 AI 코파운더 채팅."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "피드백",
          "홈페이지",
          "시장조사",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "AI 에이전트",
          "패널 리서치",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 패널, 리서치, 경쟁사, 분석, 자동화, 연동"
      }
    ]
  },
  {
    "id": 737,
    "name": "주식회사 아이피나우 (NOW AX)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187342/e54b38fd5b6340fc9f8e37059b986b28.png",
    "summary": "창업자를 위한 AI 업무자동화 올인원 플랫폼 : 사업계획서 작성부터 정부과제 매칭, 문서 관리, 경영 행정까지 하나로 해결",
    "description": "1. 백오피스 업무 및 경영 행정 자동화 🚀 출퇴근 관리, 전자결재, 이메일, 인사관리 통합 + 회의록·출장보고서 초안 AI 자동 작성 2. AI 기반 사업계획서 초안 자동 생성 ✍ 키워드만 입력하면 사업계획서 양식에 맞는 초안 즉시 작성, 서류 작업 시간 90% 단축 3. 정부과제 현황 및 문서 통합 관리 📋 지원 현황부터 컨소시엄, 예산관리까지 한 번에 통합 관리 4. 문서 기반 AI DESK 지식베이스 💻 보안·환각 걱정 없이 사내 문서 기반으로 계약서 검토, 규정집 검토, 인사이트 도출 등 활용 ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣ Enterprise형 AI 업무자동화 플랫폼 NOW AX 플랫폼 시리즈와 NOW AX Studio를 개발했습니다. 기업 업무 전 과정을 자율 실행하는 조직형 AI Agent 환경을 실현합니다. ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣ 💼 직원이 하던 반복 업무",
    "website": "http://megaworks-modoo.ipnow.co.kr",
    "email": "ipnow@ipnow.co.kr",
    "contact": "070-4249-1023",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/737",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "메가웍스 (Mega-works)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서",
      "홈페이지",
      "리포트",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "홈페이지",
      "리포트",
      "자동화"
    ],
    "techEvidence": "보고서, 자동화",
    "priceText": [
      "베이직 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "사업계획서, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 메가웍스 (Mega-works) 같은 서비스가 필요한 팀",
    "followerCount": 52,
    "likeCount": 32,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1302,
        "name": "메가웍스 (Mega-works)",
        "summary": "창업자를 위한 AI 업무자동화 올인원 플랫폼 : 사업계획서 작성부터 정부과제 매칭, 문서 관리, 경영 행정까지 하나로 해결",
        "website": "",
        "keywords": [
          "AI사업계획서",
          "문서기반AI",
          "업무자동화",
          "이메일",
          "전자결재",
          "정부지원사업",
          "프로젝트관리"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "보고서, 자동화"
      }
    ]
  },
  {
    "id": 718,
    "name": "주식회사 빅데이터마케팅",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/152296/b5e37582889f4f8aaad269a323d6cfdd.png",
    "summary": "한양대 경영대 교수가 만든 AI 에이전트 전문가들로 차원이 다른 아이디어 검증, 사업성 검증 보고서 작성 해드립니다.",
    "description": "㈜빅데이터마케팅은 한양대학교 빅데이터마케팅랩(Big Data Marketing Lab)의 학술 연구를 산업에 적용하는 AI 솔루션 전문 기업입니다. [Who we are] 마케팅 애널리틱스 박사이자 한양대 경영학부 임보람 교수가 대표를 맡고 있으며, 다수의 국제 학술지에 게재된 연구를 토대로 LLM 멀티에이전트 페르소나 합성, 매출 예측 모델링, 소비자 반응 시뮬레이션 등 핵심 기술을 자체 개발하였습니다. [What we do — MindLens] 대표 솔루션 'MindLens(마인드렌즈)'는 창업자와 기업이 의사결정을 내리기 전에 시장의 반응을 미리 검증할 수 있도록 설계된 AI 플랫폼입니다. · AI 사업검증 에이전트 — 가상 포커스그룹(FGI)이 아이디어를 다각도 검증 · AI 고객조사 자동화 — 국내·외국인 진짜 고객 반응을 인터뷰·서베이로 수집·분석 · AI 매출예측 에이전트 — 매출 예측과 핵심 요인 분석을 동시에 · AI 심사위원 시뮬레이터 — 사업계획서·IR을 사전",
    "website": "",
    "email": "brlim@hanyang.ac.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/718",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "MindLens AI 사업검증 에이전트",
      "MindLens AI 고객조사 자동화 (국내/외국인)",
      "MindLens AI 매출예측 에이전트",
      "MindLens AI 심사위원 시뮬레이터"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "홈페이지",
      "시장조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "설문/서베이",
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "패널 리서치"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "홈페이지",
      "시장/수요조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "LLM, AI 에이전트, 에이전트, 멀티에이전트, AI 고객, 시뮬레이션, 서베이, 시장조사, 페르소나, 홈페이지",
    "priceText": [
      "기본 구독 / 월 구독 / 250,000원",
      "5000원 - 만원 / 건당 / CAPACITY_BASED / 500,000원",
      "협의 후 산정 / CAPACITY_BASED / 500,000원",
      "250000원 / 월 구독 / 250,000원"
    ],
    "minPrice": 250000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "검증 보고서 샘플 열람: 이메일로 요청하시면 실제 발급된 사업검증 보고서 샘플을 즉시 열람할 수 있습니다. 시장성 평가, 경쟁 분석, AI 전문가 토론 내용, 전략 권고가 어떤 형태로 제공되는지 확인하세요.",
      "1회 무료 검증: 이메일로 요청하시면 사업 아이디어를 입력하시면, AI 전문가 3명이 시뮬레이션한 사업검증 보고서(요약본)를 24시간 안에 받아보실 수 있습니다.",
      "외국인 리서치 샘플 리포트: 기반 외국인 패널(중국·베트남·우즈벡·미국·일본 등)로 실제 진행한 정성 리서치 샘플 리포트를 열람할 수 있습니다",
      "5명 미니 서베이 1회 무료: 타깃 고객 5명에게 AI 자동 서베이를 1회 무료로 진행해드립니다. 응답 결과와 인사이트 요약을 24시간 안에 받아보실 수 있습니다.",
      "5명 미니 인터뷰 1회 무료: 타깃 고객 5명에게 AI 자동 인터뷰를 1회 무료로 진행해드립니다. 응답 결과와 인사이트 요약을 48시간 안에 받아보실 수 있습니다."
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 58,
    "likeCount": 26,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1272,
        "name": "MindLens AI 사업검증 에이전트",
        "summary": "한양대 경영대 교수가 만든 AI 에이전트 전문가들로 차원이 다른 아이디어 검증, 사업성 검증 보고서 작성 해드립니다.",
        "website": "",
        "keywords": [
          "AI 에이전트 가상 아이디어 검증",
          "BM 점검",
          "사업검증",
          "시장성 평가",
          "아이디어 검증 시뮬레이션"
        ],
        "priceText": [
          "기본 구독 / 월 구독 / 250,000원"
        ],
        "priceNumber": 250000,
        "pricingKind": "fixed",
        "benefits": [
          "검증 보고서 샘플 열람: 이메일로 요청하시면 실제 발급된 사업검증 보고서 샘플을 즉시 열람할 수 있습니다. 시장성 평가, 경쟁 분석, AI 전문가 토론 내용, 전략 권고가 어떤 형태로 제공되는지 확인하세요.",
          "1회 무료 검증: 이메일로 요청하시면 사업 아이디어를 입력하시면, AI 전문가 3명이 시뮬레이션한 사업검증 보고서(요약본)를 24시간 안에 받아보실 수 있습니다."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "홈페이지",
          "시장조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 멀티에이전트, AI 고객, 시뮬레이션, 서베이, 시장조사, 페르소나, 홈페이지, 분석, 보고서"
      },
      {
        "id": 1273,
        "name": "MindLens AI 고객조사 자동화 (국내/외국인)",
        "summary": "I가 국내·외국인 진짜 고객 3,000명+ 패널에게 인터뷰·서베이를 자동 수행하고 인사이트 보고서를 작성합니다",
        "website": "",
        "keywords": [
          "고객조사",
          "외국인 심층 인터뷰",
          "정성리서치"
        ],
        "priceText": [
          "5000원 - 만원 / 건당 / CAPACITY_BASED / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "외국인 리서치 샘플 리포트: 기반 외국인 패널(중국·베트남·우즈벡·미국·일본 등)로 실제 진행한 정성 리서치 샘플 리포트를 열람할 수 있습니다",
          "5명 미니 서베이 1회 무료: 타깃 고객 5명에게 AI 자동 서베이를 1회 무료로 진행해드립니다. 응답 결과와 인사이트 요약을 24시간 안에 받아보실 수 있습니다.",
          "5명 미니 인터뷰 1회 무료: 타깃 고객 5명에게 AI 자동 인터뷰를 1회 무료로 진행해드립니다. 응답 결과와 인사이트 요약을 48시간 안에 받아보실 수 있습니다."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "홈페이지",
          "시장조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "패널 리서치",
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 에이전트, 멀티에이전트, AI 고객, 시뮬레이션, 패널, 3,000명, 서베이, 응답, 시장조사, 리서치, 페르소나"
      },
      {
        "id": 1274,
        "name": "MindLens AI 매출예측 에이전트",
        "summary": "한양대 빅데이터 마케팅 교수가 만든 AI 모델로, 미래를 예측하고, '왜 그만큼 팔리는지'까지 설명해드립니다. 프랜차이즈 매출 오차율 2.35%.",
        "website": "",
        "keywords": [
          "AI 매출예측",
          "리테일",
          "머신러닝",
          "미래예측",
          "신규매장 입지분석"
        ],
        "priceText": [
          "협의 후 산정 / CAPACITY_BASED / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "실증 케이스 리포트 열람: 실제 진행한 매출 예측 프로젝트의 결과 리포트(오차율 2.35%, 핵심 요인 분석 포함)를 열람할 수 있습니다. AI가 어떤 형태로 인사이트를 제공하는지 확인하세요."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "홈페이지",
          "시장조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, AI 모델, 에이전트, 멀티에이전트, AI 고객, 시뮬레이션, 서베이, 시장조사, 페르소나, 홈페이지, 분석, 리포트"
      },
      {
        "id": 1275,
        "name": "MindLens AI 심사위원 시뮬레이터",
        "summary": "한양대 경영대 교수가 만든 AI 심사위원단이 제출 전에 사업계획서·IR을 시뮬레이션 심사하여 약점·예상 질문·개선안을 제시합니다.",
        "website": "",
        "keywords": [
          "AI 심사위원",
          "IR 시뮬레이션",
          "데모데이 피칭 리허설",
          "사업계획서 사전검증",
          "정부지원사업 점검"
        ],
        "priceText": [
          "250000원 / 월 구독 / 250,000원"
        ],
        "priceNumber": 250000,
        "pricingKind": "fixed",
        "benefits": [
          "심사 리포트 샘플 열람: 실제 사업계획서를 AI 심사위원 5명이 시뮬레이션 심사한 리포트 샘플(항목별 점수·예상 질문 Top 10·개선안)을 즉시 열람할 수 있습니다.",
          "1회 무료 심사 (샘플): 사업계획서/IR/신청서를 업로드하시면, 샘플 AI 심사위원 3명이 시뮬레이션 심사한 요약 리포트를 24시간 안에 받아보실 수 있습니다."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "홈페이지",
          "시장조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 에이전트, 멀티에이전트, AI 고객, 시뮬레이션, 서베이, 시장조사, 페르소나, 홈페이지, 분석, 리포트, 자동화"
      }
    ]
  },
  {
    "id": 856,
    "name": "Aristo",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/236455/1f2e5b70e1f545169a8bd9b7c134db97.png",
    "summary": "ChatGPT, Claude, Gemini에 기억을 연결해서 \"진짜 나만의 AI 비서\"처럼 사용하세요.",
    "description": "안녕하세요, AI에게 기억과 맥락을 연결해주는 서비스 **Membase**를 만드는 **Aristo**입니다. Membase는 ChatGPT, Claude, Gemini, Cursor 같은 다양한 AI 도구가 하나의 기억과 업무 맥락을 공유할 수 있게 해주는 **범용 AI 메모리 서비스**입니다. AI를 쓰다 보면 “이 얘기 또 해야 하나?” 싶은 순간이 많죠. 매번 같은 배경 설명을 반복하고, 흩어진 자료를 다시 찾고, 이전 회의·결정·작업 내역이 반영되지 않아 답답할 때가 많습니다. Membase는 사업 아이디어, 고객 인터뷰, 회의 내용, 이메일, 캘린더, 작업 히스토리 등 중요한 맥락을 안전하게 연결하고, 필요한 순간 AI가 바로 이해할 수 있도록 돕습니다. 새로운 도구를 다시 배울 필요도 없습니다. 기존에 사용하시던 AI 서비스에 클릭 한 번만으로도 쉽게 연결할 수 있어, 실무에 바로 적용할 수 있습니다. Membase와 함께 AI가 처음부터 나와 내 사업을 이해하",
    "website": "https://membase.so/?utm_source=modu",
    "email": "support@aristo.so",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/856",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Membase - AI 어플리케이션을 위한 맞춤형 공유 메모리"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, Gemini, 자동화",
    "priceText": [
      "Pro / 월 구독 / 60,000원"
    ],
    "minPrice": 60000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 클릭 한번이면 손쉽게 설치! 무료로 직접 경험해보세요."
    ],
    "recommendation": "LLM/생성형AI, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Membase - AI 어플리케이션을 위한 맞춤형 공유 메모리 같은 서비스가 필요한 팀",
    "followerCount": 47,
    "likeCount": 35,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1493,
        "name": "Membase - AI 어플리케이션을 위한 맞춤형 공유 메모리",
        "summary": "ChatGPT, Claude, Gemini에 기억을 연결해서 \"진짜 나만의 AI 비서\"처럼 사용하세요.",
        "website": "https://membase.so/?utm_source=modu",
        "keywords": [
          "AI메모리",
          "AI비서",
          "ChatGPT",
          "Claude",
          "Gemini",
          "생산성",
          "업무자동화"
        ],
        "priceText": [
          "Pro / 월 구독 / 60,000원"
        ],
        "priceNumber": 60000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 클릭 한번이면 손쉽게 설치! 무료로 직접 경험해보세요."
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, Gemini, 자동화"
      }
    ]
  },
  {
    "id": 812,
    "name": "가장 쉬운 MVP, 랜딩페이지 AI 앱빌더, 주식회사 하마다랩스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185817/a364335fabed45df826569211c3927d6.jpg",
    "summary": "아이디어 한마디로 작동하는 MVP, 랜딩페이지, AI 서비스 빌더, 코딩도, 개발자도 없이 — 노코드 AI MVP / 랜딩페이지 / 서비스 빌더",
    "description": "**- 모두의 창업 AI 솔루션 윈디플로 서비스 바로가기 : [modu.windyflo.com](http://modu.home.windyflo.com)** **\"하고 싶은 일을 말하면, 내 사업에 필요한 랜딩페이지, 홈페이지, AI 서비스 MVP가 동시에 만들어지는 플랫폼\"** 코딩 없이, 외주 없이, 며칠이 아닌 몇 분 만에 — 아이디어를 \"보여줄 수 있는 것\"으로 만들어드립니다. 하마다랩스(Hamada Labs)는 \"누구나 AI를 활용할 수 있는 세상\"을 목표로, 기술 지식이 전혀 없는 예비창업자도 직접 AI 서비스를 만들고, 고객에게 바로 보여줄 수 있는 웹사이트까지 완성할 수 있는 플랫폼을 개발·공급하고 있습니다. ### 예비창업자에게 WindyFlo가 필요한 이유 창업을 준비하는 단계에서 가장 막막한 것은 **\"아이디어는 있는데, 보여줄 게 없다\"**는 점입니다. - 홈페이지/랜딩페이지를 만들려면 개발자가 필요하고 - 상세페이지 하나 만들려면 디자이너에게 외주를",
    "website": "https://modu.home.windyflo.com/",
    "email": "victoria@hamadalabs.com",
    "contact": "010-8888-0180",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/812",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "윈디플로(WindyFlo 2.5)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "SNS 문구",
      "광고",
      "사업계획서",
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "DB설계",
      "MVP",
      "시장조사",
      "리포트",
      "브랜딩",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "설문/서베이",
      "시장조사/리서치",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "블로그",
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "에이전트, 응답, 시장조사, 노코드, 앱빌더, 빌더, 바이브코딩, 랜딩페이지, 랜딩, 홈페이지",
    "priceText": [
      "스타터 / 월 구독 / 150,000원"
    ],
    "minPrice": 150000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, 블로그 근거가 필요한 초기 창업팀",
    "followerCount": 55,
    "likeCount": 25,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1406,
        "name": "윈디플로(WindyFlo 2.5)",
        "summary": "아이디어 한마디로 작동하는 MVP, 랜딩페이지, AI 서비스 빌더, 코딩도, 개발자도 없이 — 노코드 AI MVP / 랜딩페이지 / 서비스 빌더",
        "website": "https://modu.home.windyflo.com/",
        "keywords": [
          "AX",
          "DX",
          "노코드",
          "바이브코딩",
          "비용절감",
          "앱빌더",
          "에이전트",
          "웹빌더",
          "자동화",
          "창업"
        ],
        "priceText": [
          "스타터 / 월 구독 / 150,000원"
        ],
        "priceNumber": 150000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "광고",
          "사업계획서",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "DB설계",
          "MVP",
          "시장조사",
          "리포트",
          "브랜딩",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 응답, 시장조사, 노코드, 앱빌더, 빌더, 바이브코딩, 랜딩페이지, 랜딩, 홈페이지, MVP, 분석"
      }
    ]
  },
  {
    "id": 583,
    "name": "(주)트리플오스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185298/0c698eca79984a57ab351e6efa9caa74.jpg",
    "summary": "유명한 AI를 한번에 사용하고 싶으신가요?",
    "description": "**1차 아이디어 심사를 통과했다면,** **이제는 “실행 가능성”을 보여줄 차례입니다.** 아이디어는 있지만 어떻게 구체화하고 실행해야 할지 고민되시나요? ## 바로 여기, 트리플오스가 ## 여러분들과 함께 합니다. 트리플오스는 AI 전문 경력을 가진 엔지니어들이 만든 **AI 중심 IT 기술 스타트업입니다.** **여러 AI 서비스를 한 번에 활용할 수 있는 ATA**, **AI 문서 정리 협업 플랫폼 ATAnote**를 제공해 기획부터 정리, 실행까지 빠르게 연결합니다. 창업 아이디어가 실제 서비스가 되는 과정, 트리플오스가 함께하겠습니다. ## 주요 연혁 ### **🚀** 2026년 - 캡스톤파트너스와 Pre-A 투자유치 ### **🚀** 2025년 - Repeto AI 출시 - 메가 AI 출시 후 메가스터디 매출 1위 등극 - ATA 앱 출시 - ATA Solutions - 교육 Think 수학 Agent 출시 - ATA Solutions",
    "website": "https://www.tripleauth.com/",
    "email": "contact@tripleauth.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/583",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "ATA (아타)",
      "atanote (아타노트)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "시장조사",
      "이미지",
      "교육",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "이미지 생성"
    ],
    "deliverables": [
      "사업계획서",
      "이미지",
      "컨설팅"
    ],
    "techEvidence": "LLM, AI 모델, 리서치, 분석, 이미지 생성, 이미지",
    "priceText": [
      "MAX 요금제 / 월 구독 / 60,000원",
      "PRO 플랜 / 월 구독 / 19,900원"
    ],
    "minPrice": 19900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "첫 가입 시 한달 무료 제공: 스타터 플랜 (AI 모델 동시에 2개 사용)",
      "이미지 스튜디오 제공: 나노바나나 pro 기반의 이미지 생성 가능",
      "기본 무료 플랜(파일 총 50개 제한): 노트 업로드 10회, 내 노트 활성화, 공유 노트 초대 받기",
      "첫 가입 시 한달 무료: 유료 베이직 플랜(월간 50개 파일 업로드)"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, 이미지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 31,
    "likeCount": 46,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1089,
        "name": "ATA (아타)",
        "summary": "유명한 AI를 한번에 사용하고 싶으신가요?",
        "website": "https://www.allthatai.io",
        "keywords": [
          "AI",
          "리서치·분석",
          "사업계획서",
          "생산성",
          "아이디어",
          "올인원",
          "정부지원금",
          "콘텐츠제작"
        ],
        "priceText": [
          "MAX 요금제 / 월 구독 / 60,000원"
        ],
        "priceNumber": 60000,
        "pricingKind": "fixed",
        "benefits": [
          "첫 가입 시 한달 무료 제공: 스타터 플랜 (AI 모델 동시에 2개 사용)",
          "이미지 스튜디오 제공: 나노바나나 pro 기반의 이미지 생성 가능"
        ],
        "deliverables": [
          "사업계획서",
          "이미지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "시장조사",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "이미지 생성"
        ],
        "techEvidence": "LLM, AI 모델, 리서치, 분석, 이미지 생성, 이미지"
      },
      {
        "id": 1090,
        "name": "atanote (아타노트)",
        "summary": "1라운드에서 자료 정리 힘들지 않으세요? 복잡한 문서도 알아서 정리 가능!",
        "website": "https://atanote.com/",
        "keywords": [
          "AI",
          "멘토링",
          "문서정리",
          "사업전략",
          "자료관리",
          "재무관리",
          "정부지원사업",
          "창업",
          "팀 창업",
          "협업"
        ],
        "priceText": [
          "PRO 플랜 / 월 구독 / 19,900원"
        ],
        "priceNumber": 19900,
        "pricingKind": "fixed",
        "benefits": [
          "기본 무료 플랜(파일 총 50개 제한): 노트 업로드 10회, 내 노트 활성화, 공유 노트 초대 받기",
          "첫 가입 시 한달 무료: 유료 베이직 플랜(월간 50개 파일 업로드)"
        ],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI"
        ],
        "techEvidence": "LLM"
      }
    ]
  },
  {
    "id": 609,
    "name": "레피소드 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/105309/6430ff76e3254d1db6e3a10d25dc6b5a.png",
    "summary": "창업 초기팀 맞춤형 AI 프로젝트 관리 솔루션 : 요구사항부터 협업까지, 분절된 프로세스를 AI 자동화로 잇는 통합 프로젝트 관리 시스템",
    "description": "🎯**기획부터 AI까지, 비즈니스의 상상을 기술로 실현하는 디지털 전환 파트너 레피소드입니다!** 창업 아이디어는 있는데, 그걸 실제로 만들어줄 팀을 찾기가 막막하셨나요? 레피소드는 AI를 중심에 두고 **기획·디자인·개발**을 한 팀이 끝까지 함께 달리는 기술 파트너입니다. 단순히 \"AI를 쓰는\" 개발사가 아닙니다. **AI 솔루션 설계부터 실제 서비스 구현까지,** 창업팀의 아이디어를 가장 빠르게 현실로 만드는 방법을 압니다. 한번 함께한 클라이언트가 다시 찾고, 주변에 소개하는 팀. 6년간 50개 이상의 프로젝트를 **단 한 건의 중단 없이** 완수한 실행력이 그 이유입니다. AI 솔루션·AX 전환부터 웹·앱 개발, SNS 마케팅까지, 키오스크·사이니지 등 하드웨어 연동이 필요한 고난도 환경도, 정부지원사업·R&D의 복잡한 행정도 함께 챙깁니다. **창업팀이 비즈니스 본질에만 집중할 수 있도록, 나머지는 레피소드가 다 처리합니다.** **📌연혁** 20",
    "website": "https://lepisode.kr/",
    "email": "help@lepisode.team",
    "contact": "010-9828-2314",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/609",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "플래니(Plany)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "카드뉴스",
      "포스터",
      "SNS 문구",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "카드뉴스",
      "포스터",
      "SNS/광고 문구",
      "이미지",
      "자동화"
    ],
    "techEvidence": "페르소나, 분석, 이미지, 사진, 자동화, 워크플로우, 연동",
    "priceText": [
      "Team 플랜(시트 당 결제) / 월 구독 / 2,900원"
    ],
    "minPrice": 2900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: 워크스페이스 사용, 프로젝트 1개 생성/관리 가능"
    ],
    "recommendation": "시장조사/리서치, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 플래니(Plany) 같은 서비스가 필요한 팀",
    "followerCount": 35,
    "likeCount": 40,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1121,
        "name": "플래니(Plany)",
        "summary": "창업 초기팀 맞춤형 AI 프로젝트 관리 솔루션 : 요구사항부터 협업까지, 분절된 프로세스를 AI 자동화로 잇는 통합 프로젝트 관리 시스템",
        "website": "",
        "keywords": [
          "AI",
          "DX/AX",
          "백오피스",
          "스마트오피스",
          "업무자동화",
          "업무효율화",
          "워크플로우",
          "자동화",
          "프로젝트관리",
          "협업"
        ],
        "priceText": [
          "Team 플랜(시트 당 결제) / 월 구독 / 2,900원"
        ],
        "priceNumber": 2900,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: 워크스페이스 사용, 프로젝트 1개 생성/관리 가능"
        ],
        "deliverables": [
          "카드뉴스",
          "포스터",
          "SNS/광고 문구",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "카드뉴스",
          "포스터",
          "SNS 문구",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "페르소나, 분석, 이미지, 사진, 자동화, 워크플로우, 연동"
      }
    ]
  },
  {
    "id": 789,
    "name": "주식회사 테르밋",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185869/0a201292989843689df5ae7b0245466a.png",
    "summary": "진짜로 팔리는 검증된 상세페이지 AI - 상품 사진만 올리고, 내 상품에 최적화된 상세페이지를 1분만에 만들어보세요",
    "description": "테르밋은 AI 에이전트 기술력을 바탕으로, 온라인 판매에 필요한 마케팅 콘텐츠를 제작하는 서비스 \"크리에이지\"를 운영하고 있습니다. 크리에이지는 상품 사진만 올리면 3분만에 내 상품에 최적화된 상품 상세페이지를 만들 수 있는 서비스입니다. > [https://creazy.app/ko?ref=modoo](https://creazy.app/ko?ref=modoo) 에서 보다 자세히 확인해보세요",
    "website": "https://creazy.app/ko?ref=modoo",
    "email": "contact@thermit.io",
    "contact": "010-5559-2283",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/789",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "크리에이지"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "랜딩페이지",
      "브랜딩",
      "이미지"
    ],
    "techTags": [
      "AI 에이전트",
      "랜딩페이지 빌더",
      "이미지 생성"
    ],
    "deliverables": [
      "랜딩페이지",
      "이미지"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 랜딩, 사진",
    "priceText": [
      "프로 요금제 / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "크레딧: 최초 가입 시 200크레딧 제공"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 랜딩페이지, 이미지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 30,
    "likeCount": 44,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1373,
        "name": "크리에이지",
        "summary": "진짜로 팔리는 검증된 상세페이지 AI - 상품 사진만 올리고, 내 상품에 최적화된 상세페이지를 1분만에 만들어보세요",
        "website": "https://creazy.app/ko?ref=modoo",
        "keywords": [
          "디자인",
          "마케팅",
          "브랜딩",
          "상세페이지",
          "커머스"
        ],
        "priceText": [
          "프로 요금제 / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "크레딧: 최초 가입 시 200크레딧 제공"
        ],
        "deliverables": [
          "랜딩페이지",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "랜딩페이지",
          "브랜딩",
          "이미지"
        ],
        "techTags": [
          "AI 에이전트",
          "랜딩페이지 빌더",
          "이미지 생성"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 랜딩, 사진"
      }
    ]
  },
  {
    "id": 776,
    "name": "주식회사 캐스톤",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/124136/99e6d7e8bd0545c189eea349966d89e2.png",
    "summary": "AI 가상 팀 회의 솔루션 - 회의 주제만 입력하면 AI 전문가 팀이 자동 구성되어 실시간 토론하고 결론 보고서를 만들어서 신사업 , 사업전략 검토와 경영전략 수립 , 사업타당성 의사결정 , 사업계획서 아이디어 회의까지 지원합니다.",
    "description": "**주식회사 캐스톤** **[CASTON.AI](http://CASTON.AI)** **1. 회사 개요** **- 회사명 :** 캐스톤 ([CASTON.AI](http://CASTON.AI)) **- 이메일** : [support@caston.ai](mailto:support@caston.ai) **2. 사업 소개** 캐스톤([CASTON.AI](http://CASTON.AI))은 **AI 서비스 플랫폼 구축 전문 파트너**로, 스타트업·소상공인·기업 신사업팀의 아이디어를 실제 서비스로 구현합니다. 현재 **다수의** 서비스를 직접 운영하고 있으며 다양한 서비스 개발을 통해 쌓은 실전 경험을 바탕으로, 기획 및 개발부터 배포·운영까지 전 과정을 수행합니다. **3. 서비스 구성** **- SaaS 플랫폼 구축 :** 구독 결제·멀티 테넌시·역할 기반 접근 제어 포함 완전한 SaaS 구축 **- 웹 서비스 개발 :** 독립 웹 애플리케이션, MVP 즉시 출시,",
    "website": "https://www.caston.ai/",
    "email": "support@caston.ai",
    "contact": "070-8027-4334",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/776",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "BizRoom (비즈룸)",
      "BizPlan (비즈플랜)",
      "BizCanvas(비즈캔버스)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "발표자료",
      "랜딩페이지",
      "DB설계",
      "MVP",
      "시장조사",
      "리포트",
      "브랜딩",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "시장조사/리서치",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "랜딩페이지",
      "MVP",
      "시장/수요조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "에이전트, 시장조사, 경쟁사, 시장분석, 빌더, 랜딩페이지, 랜딩, MVP, 대시보드, 분석",
    "priceText": [
      "MAX / CREDIT_TOKEN / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "FREE 플랜: AI Pro 크레딧 2회, AI Lite 크레딧 10회 체험"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 16,
    "likeCount": 50,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1357,
        "name": "BizRoom (비즈룸)",
        "summary": "AI 가상 팀 회의 솔루션 - 회의 주제만 입력하면 AI 전문가 팀이 자동 구성되어 실시간 토론하고 결론 보고서를 만들어서 신사업 , 사업전략 검토와 경영전략 수립 , 사업타당성 의사결정 , 사업계획서 아이디어 회의까지 지원합니다.",
        "website": "https://bizroom.caston.ai/",
        "keywords": [
          "경쟁사분석",
          "고객분석",
          "발표자료",
          "사업계획서",
          "사업계획서작성",
          "사업아이디어",
          "사업전략",
          "시장분석",
          "시장조사",
          "컨설팅"
        ],
        "priceText": [
          "MAX / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "FREE 플랜: AI Pro 크레딧 2회, AI Lite 크레딧 10회 체험"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "랜딩페이지",
          "DB설계",
          "MVP",
          "시장조사",
          "리포트",
          "브랜딩",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 시장조사, 경쟁사, 시장분석, 빌더, 랜딩페이지, 랜딩, MVP, 대시보드, 분석, 보고서, 자동화"
      },
      {
        "id": 1358,
        "name": "BizPlan (비즈플랜)",
        "summary": "AI 사업계획서 생성 솔루션 - 사업 아이디어나 기존 양식을 입력하면 AI가 양식 기준에 맞춘 사업계획서를 블록별로 자동 작성하고, 정부지원사업 , R&D과제 , 정책자금 , 공모전 지원과 투자유치 IR자료 준비까지 폭넓게 활용됩니다.",
        "website": "https://bizplan.caston.ai/",
        "keywords": [
          "경쟁분석",
          "발표자료",
          "사업계획서",
          "사업계획서작성",
          "사업전략",
          "사업타당성",
          "시장분석",
          "시장조사",
          "정부과제",
          "투자제안서"
        ],
        "priceText": [
          "MAX / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "FREE 플랜: AI Pro 크레딧 2회, AI Lite 크레딧 10회 체험"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "랜딩페이지",
          "DB설계",
          "MVP",
          "시장조사",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 시장조사, 시장분석, 빌더, 랜딩페이지, 랜딩, MVP, 대시보드, 분석, 자동화, 예약, 연동"
      },
      {
        "id": 1359,
        "name": "BizCanvas(비즈캔버스)",
        "summary": "AI 비즈니스 모델 생성 솔루션 - 사업 아이디어, 타겟 고객, 핵심 가치만 입력하면 AI가 9블록 비즈니스모델캔버스 를 자동 완성하고, 캔버스 작성과 시장분석 , 경쟁분석 , 사업계획서의 사업모델 파트까지 지원합니다.",
        "website": "https://bizcanvas.caston.ai/",
        "keywords": [
          "경쟁사분석",
          "발표자료",
          "비즈니스모델",
          "비즈니스모델캔버스",
          "사업계획서",
          "사업계획서작성",
          "사업아이디어",
          "사업전략",
          "사업타당성",
          "시장조사"
        ],
        "priceText": [
          "MAX / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "FREE 플랜: AI Pro 크레딧 2회, AI Lite 크레딧 10회 체험"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "랜딩페이지",
          "MVP",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "랜딩페이지",
          "DB설계",
          "MVP",
          "시장조사",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 시장조사, 경쟁사, 시장분석, 빌더, 랜딩페이지, 랜딩, MVP, 대시보드, 분석, 자동화, 예약"
      }
    ]
  },
  {
    "id": 701,
    "name": "주식회사 모노플로우",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/200533/5286bda0ab6444319dd7b63f931c4530.jpg",
    "summary": "창업 업무 전반을 지원하는 올인원 AI 플랫폼",
    "description": "**주식회사 모노플로우**는 공공기관·교육기관·기업을 대상으로 생성형 AI 및 멀티 LLM 기반 SaaS 서비스를 제공하는 AI 전문 기업입니다. 자체 플랫폼 ‘**MonoGPT**’를 통해 **ChatGPT, Gemini, Claude 등 글로벌 최신 AI 모델을 통합 제공하며, 기획·문서 작성·마케팅·업무 자동화부터 API 기반 AI 서비스 개발까지 하나의 환경에서 수행할 수 있도록 지원**하고 있습니다. 또한 다양한 기관 및 기업이 보다 쉽고 효율적으로 AI를 도입·활용할 수 있도록 멀티모달 AI, API 연동, 업무 자동화 기능을 통합 제공하고 있습니다. **1. MonoGPT Biz-Starter** MonoGPT Biz-Starter는 창업 및 초기 비즈니스 운영을 지원하는 올인원 AI 플랫폼입니다. GPT-5.4 Pro, Gemini 3.1 Pro, Opus 4.6 등 25종 이상의 최신 AI 모델을 하나의 웹 환경에서 제공하며, 사업계획서 작성, IR 자료 제",
    "website": "https://monogpt.kr/",
    "email": "sales@monoflow.kr",
    "contact": "010-8675-1284",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/701",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "MonoGPT Biz-Starter",
      "MonoGPT Biz-Pro(창업을 위한 올인원 AI 플랫폼 + 멀티 LLM API 솔루션 MonoRouter)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "영상",
      "이미지",
      "자동화",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "MVP/프로토타입",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "LLM, GPT, ChatGPT, Claude, Gemini, 생성형, AI 모델, 프로토타입, 이미지, 영상 생성",
    "priceText": [
      "250,000 크레딧 / CREDIT_TOKEN / 250,000원",
      "500000 크레딧 / CREDIT_TOKEN / 500,000원"
    ],
    "minPrice": 250000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "LLM/생성형AI, MVP/프로토타입 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 MonoGPT Biz-Starter 같은 서비스가 필요한 팀",
    "followerCount": 54,
    "likeCount": 11,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1253,
        "name": "MonoGPT Biz-Starter",
        "summary": "창업 업무 전반을 지원하는 올인원 AI 플랫폼",
        "website": "",
        "keywords": [
          "ai",
          "Chatgpt",
          "Claude",
          "Gemini",
          "gpt",
          "Nanobanana",
          "인공지능",
          "제미나이",
          "챗지피티",
          "클로드"
        ],
        "priceText": [
          "250,000 크레딧 / CREDIT_TOKEN / 250,000원"
        ],
        "priceNumber": 250000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "영상",
          "이미지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "MVP/프로토타입",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, GPT, ChatGPT, Claude, Gemini, 생성형, AI 모델, 프로토타입, 이미지, 영상 생성, 자동화, API"
      },
      {
        "id": 1254,
        "name": "MonoGPT Biz-Pro(창업을 위한 올인원 AI 플랫폼 + 멀티 LLM API 솔루션 MonoRouter)",
        "summary": "창업을 위한 올인원 AI 플랫폼 + 멀티 LLM API 솔루션 MonoRouter",
        "website": "",
        "keywords": [
          "ai",
          "chatgpt",
          "claude",
          "gemini",
          "llm",
          "monogpt",
          "인공지능",
          "제미나이",
          "챗지피티",
          "클로드"
        ],
        "priceText": [
          "500000 크레딧 / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "영상",
          "이미지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "MVP/프로토타입",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, GPT, ChatGPT, Claude, Gemini, 생성형, AI 모델, 프로토타입, 이미지, 영상 생성, 자동화, API"
      }
    ]
  },
  {
    "id": 686,
    "name": "주식회사 디엔지니어",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186557/88161b16ce43459ebe775010a6936a63.png",
    "summary": "AI 기반으로 제조 설계·공정 기획·Proposal·3D 시각화를 자동화하는 Manufacturing Workflow Agent AI 솔루션",
    "description": "㈜디엔지니어(이하 “당사”)는 2020년 설립 이후 엔지니어링 서비스, 자동화 설비 제작, 스마트 제조 솔루션 개발을 기반으로 제조 산업 분야에서 사업을 영위하고 있는 기술 중심 기업임. 당사는 디스플레이, 반도체, 2차전지, 스마트팩토리 분야를 중심으로 OEM Turn-Key 제작, 자동화 설비 제작, 공정 개선, 엔지니어링 서비스를 수행해왔으며, 현장 제조 경험과 설계 데이터를 기반으로 제조 특화 인공지능 기술 개발을 추진하고 있음. 현재 당사는 자연어 기반 설계 자동화 플랫폼인 “X concep AI” 사업에 역량을 집중하고 있음. 기존 제조 및 자동화 분야에서 축적된 설계·공정·제조 데이터를 기반으로 AI 모델과 자동설계 파이프라인을 구축하고 있으며, 설계 초기 단계에서 요구사항 분석, 개념 설계 시각화, 구조 검토 및 3D 모델 생성까지 수행 가능한 Pre-CAD 기반 설계 인텔리전스 시스템 구축을 목표로 하고 있음. 특히 단순 이미지 생성형 AI가 아닌 제조 공정과",
    "website": "https://theengineer.co.kr/",
    "email": "the-engineer@naver.com",
    "contact": "010-7524-3560",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/686",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "제품 아이디어 시각화 목업 AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "IR",
      "발표자료",
      "피드백",
      "홈페이지",
      "브랜딩",
      "로고",
      "영상",
      "이미지",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "가상고객/시뮬레이션",
      "패널 리서치",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "블로그",
      "홈페이지",
      "리포트",
      "로고",
      "영상",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "생성형, AI 모델, 시뮬레이션, 패널, 홈페이지, 프로토타입, 목업, 분석, 이미지 생성, 이미지",
    "priceText": [
      "1000 / CREDIT_TOKEN / 55,000원"
    ],
    "minPrice": 55000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "회원가입 무료 체험: 회원가입 시 50 크레딧을 무료 제공하며, 컨셉 이미지 생성·Proposal 생성 등 주요 기능을 체험할 수 있음."
    ],
    "recommendation": "IR/발표자료, 블로그 결과물로 첫 고객 반응을 빠르게 확인하려는 제품 아이디어 시각화 목업 AI 같은 서비스가 필요한 팀",
    "followerCount": 55,
    "likeCount": 10,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1233,
        "name": "제품 아이디어 시각화 목업 AI",
        "summary": "AI 기반으로 제조 설계·공정 기획·Proposal·3D 시각화를 자동화하는 Manufacturing Workflow Agent AI 솔루션",
        "website": "https://xconcepai.com/",
        "keywords": [
          "3D생성",
          "Proposal",
          "Workflow",
          "산업장비설계",
          "생성형AI",
          "설계자동화",
          "스마트팩토리",
          "자동화설비",
          "제조AI",
          "컨셉이미지생성"
        ],
        "priceText": [
          "1000 / CREDIT_TOKEN / 55,000원"
        ],
        "priceNumber": 55000,
        "pricingKind": "usage",
        "benefits": [
          "회원가입 무료 체험: 회원가입 시 50 크레딧을 무료 제공하며, 컨셉 이미지 생성·Proposal 생성 등 주요 기능을 체험할 수 있음."
        ],
        "deliverables": [
          "IR/발표자료",
          "블로그",
          "홈페이지",
          "리포트",
          "로고",
          "영상",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "IR",
          "발표자료",
          "피드백",
          "홈페이지",
          "브랜딩",
          "로고",
          "영상",
          "이미지",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "패널 리서치",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "생성형, AI 모델, 시뮬레이션, 패널, 홈페이지, 프로토타입, 목업, 분석, 이미지 생성, 이미지, 자동화, 서버"
      }
    ]
  },
  {
    "id": 667,
    "name": "글루리 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189374/4d4bc82aa7e248899d7b2bc7e3e5088b.png",
    "summary": "서버? 백엔드? 하나도 몰라도 괜찮아요! 원클릭으로 백엔드를 만들고 배포를 할 수 있습니다. 한국형 클라우드 배포 플랫폼 - GitHub 연결만으로 AI가 자동 배포하고, 보안·성능·UX 점검까지!",
    "description": "글루리는 현대자동차 분사창업기업으로, ***확실한 AI 기술력과 수준 높은 서비스로 여러분의 기대를 충족시켜드립니다.*** AI 시대에는 창업에 대한 접근 방식이 달라져야 합니다. 인공지능 경진대회 최우수상 수상, 벤처기업 인증, 현대자동차그룹 AI 솔루션 개발 프로젝트 수행 등 다수의 프로젝트와 서비스를 성공적으로 운영한 노하우를 바탕으로, **창업자에게 가장 필요한 서비스**를 만들었습니다. 2020 **인공지능경진대회 최우수상 수상** 2021 **창업성장연구개발사업 선정** 2023 **글로벌소셜벤처경연대회 최우수상** 2024 **인공지능경진대회 최우수상 수상** 2025 **벤처기업인증** 여러분의 서비스와 프로덕트가 더욱 빛날 수 있도록, 늘 곁에서 함께 하겠습니다. **솜사탕 CLOUD 팀 드림**",
    "website": "https://somsatang.cloud",
    "email": "contact@gluri.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/667",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "솜사탕 클라우드"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "노코드/앱빌더",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "바이브코딩, 자동화, DB, 데이터베이스, 서버, 인프라, 클라우드",
    "priceText": [
      "Starter 스타터 요금제 / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "무료 플랜: 기본 프로젝트 1개 사용 가능"
    ],
    "recommendation": "노코드/앱빌더, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 솜사탕 클라우드 같은 서비스가 필요한 팀",
    "followerCount": 41,
    "likeCount": 23,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1204,
        "name": "솜사탕 클라우드",
        "summary": "서버? 백엔드? 하나도 몰라도 괜찮아요! 원클릭으로 백엔드를 만들고 배포를 할 수 있습니다. 한국형 클라우드 배포 플랫폼 - GitHub 연결만으로 AI가 자동 배포하고, 보안·성능·UX 점검까지!",
        "website": "https://somsatang.cloud",
        "keywords": [
          "AI배포자동화",
          "PaaS",
          "supabase",
          "Vercel",
          "데이터베이스",
          "바이브코딩",
          "서버리스",
          "서버호스팅",
          "스타트업인프라",
          "웹앱배포"
        ],
        "priceText": [
          "Starter 스타터 요금제 / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "usage",
        "benefits": [
          "무료 플랜: 기본 프로젝트 1개 사용 가능"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "노코드/앱빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "바이브코딩, 자동화, DB, 데이터베이스, 서버, 인프라, 클라우드"
      }
    ]
  },
  {
    "id": 663,
    "name": "조코딩",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/112392/4dbba69b6503484a97df708f0d3b87a1.jpg",
    "summary": "AI로 광고 이미지와 영상을 몇 분 만에 자동 생성할 수 있습니다.",
    "description": "[https://jocoding.io/](https://jocoding.io/)",
    "website": "https://jocoding.io",
    "email": "business@jocoding.net",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/663",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "gwanggo (광고)",
      "Noosphere"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "고객검증/시장조사"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "영상",
      "이미지",
      "자동화",
      "피드백",
      "MVP",
      "시장조사"
    ],
    "techTags": [
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API",
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "시장조사/리서치",
      "MVP/프로토타입"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화",
      "MVP",
      "시장/수요조사"
    ],
    "techEvidence": "이미지, 사진, 숏폼, 자동화, 에이전트, 시뮬레이션, 시장조사, 페르소나, MVP",
    "priceText": [
      "Starter 요금제 / 월 구독 / 14,500원",
      "Starter / 월 구독 / 42,000원"
    ],
    "minPrice": 14500,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 35 크레딧"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 영상 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 48,
    "likeCount": 16,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1197,
        "name": "gwanggo (광고)",
        "summary": "AI로 광고 이미지와 영상을 몇 분 만에 자동 생성할 수 있습니다.",
        "website": "https://gwanggo.jocoding.io/ko",
        "keywords": [
          "AI 광고",
          "AI 영상",
          "AI 이미지",
          "SNS 광고",
          "광고 제작",
          "마케팅 자동화",
          "상세페이지",
          "숏폼 광고",
          "제품 사진",
          "콘텐츠 생성"
        ],
        "priceText": [
          "Starter 요금제 / 월 구독 / 14,500원"
        ],
        "priceNumber": 14500,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 35 크레딧"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "이미지, 사진, 숏폼, 자동화"
      },
      {
        "id": 1198,
        "name": "Noosphere",
        "summary": "출시 전, 수백 명의 AI 페르소나가 내 제품을 써보고 평가하게 해서 시장 반응을 미리 시뮬레이션해 드려요",
        "website": "noosphere.jocoding.io",
        "keywords": [
          "AI 시뮬레이션",
          "MVP",
          "멀티 에이전트",
          "사용자 피드백",
          "소셜 시뮬레이션",
          "시장조사",
          "아이디어 검증",
          "인디해커",
          "제품 검증",
          "페르소나"
        ],
        "priceText": [
          "Starter / 월 구독 / 42,000원"
        ],
        "priceNumber": 42000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "MVP",
          "시장/수요조사"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사"
        ],
        "detailTags": [
          "피드백",
          "MVP",
          "시장조사"
        ],
        "techTags": [
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "시장조사/리서치",
          "MVP/프로토타입"
        ],
        "techEvidence": "에이전트, 시뮬레이션, 시장조사, 페르소나, MVP"
      }
    ]
  },
  {
    "id": 755,
    "name": "주식회사 오마이브랜드(O'MY BRAND Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/115389/8a2009859bd648598912c601cdb625c1.png",
    "summary": "전문 디자이너 없이도 우리 브랜드만의 고품질 AI 마케팅 콘텐츠를 만들어내는 맞춤형 창작 솔루션",
    "description": "**● 누구나 사용가능한 생성형 AI 아트창작 솔루션 : 오마이브랜드** (SaaS형 web/app) B2B : 전시회나 행사시 자사 솔루션을 활용한 브랜드 마케팅 솔루션으로 활용(고객+브랜드 AI창작) B2C : 창작작품을 AI를 통한 고도화 기술제공 및 굿즈제작 등 상업화가 가능하도록 상업화솔루션 제공 **● 오마이브랜드 AI기술** (벤처기업, 이노비즈, 기업부설연구소, 기술평가BBB, 특허기술) 1. AI활용 창작 (화풍 및 오토AI포토샵 기술R&D) 2. 저작권 보호 (AI작품 권리 인증 및 추적) 3. 상용화 ( 온라인 : 브랜드 기업 특화 AI아트창작 기술/ 오프라인: 기념품 창작 솔루션 ) **● 오마이브랜드 소개**(벤처기업, 이노비즈, 기업부설연구소, 기술평가BBB) (주)오마이브랜드는 생성형AI기술을 통해, 누구나 쉽게 아트컨텐츠를 창작할 수 있고, 창작물을 다양한 곳에 연계하여 수익을 창출할 수 있는 [AI활용 아트 창작 AX플랫폼 솔루션] 입니다",
    "website": "https://omybrand.com",
    "email": "ceo@omybrand.com",
    "contact": "070-4680-5217",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/755",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "브랜드 맞춤형 AI 마케팅 콘텐츠 창작 SaaS 솔루션",
      "AI 에셋 상용화 및 보안 결합 실물 생산 SaaS 솔루션"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "SNS 문구",
      "랜딩페이지",
      "브랜딩",
      "로고"
    ],
    "techTags": [
      "LLM/생성형AI",
      "랜딩페이지 빌더"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "로고",
      "상세 확인 필요"
    ],
    "techEvidence": "생성형, 랜딩",
    "priceText": [
      "전용 플랜 / 월 구독 / 330,000원",
      "AI컨텐츠 연계 굿즈제작이 가능한 300,000P지급 / CREDIT_TOKEN / 330,000원"
    ],
    "minPrice": 330000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "디자인 생성 크레딧: 월 30,000크레딧 제공",
      "결과물의 창작권리 인증(소유권 인증권): 월 10건(장)",
      "오마이브랜드 플랫폼 이용 무료크레딧: 매일 100크레딧 제공",
      "결과물의 창작권리 인증(소유권 인증권): 30건(장)"
    ],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 브랜드 맞춤형 AI 마케팅 콘텐츠 창작 SaaS 솔루션 같은 서비스가 필요한 팀",
    "followerCount": 31,
    "likeCount": 31,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1333,
        "name": "브랜드 맞춤형 AI 마케팅 콘텐츠 창작 SaaS 솔루션",
        "summary": "전문 디자이너 없이도 우리 브랜드만의 고품질 AI 마케팅 콘텐츠를 만들어내는 맞춤형 창작 솔루션",
        "website": "https://omybrand.com/desktop/",
        "keywords": [
          "AI디자인",
          "SNS마케팅",
          "로고제작",
          "마케팅",
          "마케팅콘텐츠",
          "브랜딩",
          "상세페이지제작",
          "생성형AI",
          "캐릭터제작",
          "홍보물"
        ],
        "priceText": [
          "전용 플랜 / 월 구독 / 330,000원"
        ],
        "priceNumber": 330000,
        "pricingKind": "fixed",
        "benefits": [
          "디자인 생성 크레딧: 월 30,000크레딧 제공",
          "결과물의 창작권리 인증(소유권 인증권): 월 10건(장)",
          "오마이브랜드 플랫폼 이용 무료크레딧: 매일 100크레딧 제공"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "로고"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "SNS 문구",
          "랜딩페이지",
          "브랜딩",
          "로고"
        ],
        "techTags": [
          "LLM/생성형AI",
          "랜딩페이지 빌더"
        ],
        "techEvidence": "생성형, 랜딩"
      },
      {
        "id": 1334,
        "name": "AI 에셋 상용화 및 보안 결합 실물 생산 SaaS 솔루션",
        "summary": "단 1개의 재고도 없이, AI창작물을 '실물 굿즈'로 바꿔주는 무자본 커머스 풀필먼트 솔루션",
        "website": "https://omybrand.com/mobile/goods?type=diy",
        "keywords": [
          "POD",
          "굿즈제작",
          "기념품제작",
          "무재고창업",
          "상품제작",
          "쇼핑몰창업",
          "주문제작",
          "판촉물제작",
          "풀필먼트",
          "홍보물"
        ],
        "priceText": [
          "AI컨텐츠 연계 굿즈제작이 가능한 300,000P지급 / CREDIT_TOKEN / 330,000원"
        ],
        "priceNumber": 330000,
        "pricingKind": "usage",
        "benefits": [
          "오마이브랜드 플랫폼 이용 무료크레딧: 매일 100크레딧 제공",
          "결과물의 창작권리 인증(소유권 인증권): 30건(장)"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "브랜딩"
        ],
        "techTags": [
          "LLM/생성형AI"
        ],
        "techEvidence": "생성형"
      }
    ]
  },
  {
    "id": 657,
    "name": "위인터랙트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186789/72260ac4b8eb45acaabf73bbacc35b49.jpeg",
    "summary": "사업화 아이템에 대한 연구동향 및 기술고도화 전략, 사업화 이슈를 자동 분석 및 검토하는 기술사업화 인텔리전스 솔루션",
    "description": "**위인터랙트(WeINTERACT)는** AI 기반 기술사업화 인텔리전스 OS를 개발하는 **\"AI 스타트업\"** 입니다. 단순한 정보 검색이나 생성형 AI 서비스를 넘어, 논문·특허·산업기술보고서·시장정보·규제정보 등 다양한 과학/기술/시장 데이터를 통합하여 딥테크 기업의 연구개발(R&D)과 사업화(R&BD) 프로세스의 전략적 의사결정을 지원하는 것을 목표로 합니다. 예비/초기 기술창업자의 사업화 성공가능성과 사업화 이슈를 다중 근거(Evidence) 기반으로 분석·평가하는 지능형 기술사업화 의사결정 솔루션, \"**랩투월드(Lab2World)**\"를 **개발, 운영하고 있습니다.**",
    "website": "https://weinteract.co",
    "email": "insu@weinteract.co",
    "contact": "010-2479-4239",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/657",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "랩투월드(Lab2World)"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "리포트"
    ],
    "techTags": [
      "LLM/생성형AI",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "리포트"
    ],
    "techEvidence": "생성형, 검색, 분석, 보고서",
    "priceText": [
      "베이직 요금제 / 월 구독 / 30,000원"
    ],
    "minPrice": 30000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 리포트 근거가 필요한 초기 창업팀",
    "followerCount": 45,
    "likeCount": 16,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1190,
        "name": "랩투월드(Lab2World)",
        "summary": "사업화 아이템에 대한 연구동향 및 기술고도화 전략, 사업화 이슈를 자동 분석 및 검토하는 기술사업화 인텔리전스 솔루션",
        "website": "https://lab2world.com/",
        "keywords": [
          "기술고도화 전략수립",
          "기술사업화 전략",
          "문제솔루션 정의",
          "사업화 이슈 분석",
          "사업화아이템 검증",
          "연구개발 동향 분석",
          "창업아이템 검증"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 30,000원"
        ],
        "priceNumber": 30000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "리포트"
        ],
        "techTags": [
          "LLM/생성형AI",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "생성형, 검색, 분석, 보고서"
      }
    ]
  },
  {
    "id": 793,
    "name": "주식회사 톡키",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/133758/00b15cdce10346f88d956099fe1dbb69.png",
    "summary": "시장조사부터 사업계획서, 마케팅 전략, IR 준비까지 한 번에 돕는 창업 실전형 AI 리서치 솔루션",
    "description": "주식회사 톡키는 AI 음성 대화·RAG(검색 증강 생성)·이미지 생성을 통합한 자체 코어 엔진으로 다양한 산업의 업무 자동화 솔루션을 만드는 AI 스타트업입니다. 한 개의 AI 엔진을 커머스, 교육, 창업자 도구 등 여러 도메인에 적용해 자본 효율을 극대화하는 전략을 추구합니다. 현재 네이버 스마트스토어 셀러용 통합 도구 '톡키AI 올인원'은 광고비 없이 꾸준히 성장 중이며, AI 음성 대화 기반 아동 학습 서비스 '톡키 홈쌤'은 정식 출시를 앞두고 베타 운영 중입니다. 모두의창업 플랫폼에서는 동일 엔진을 활용한 창업자용 'AI 리서치'와 'AI 챗봇 빌더'를 공급합니다. 연구개발 전담부서 등록, KOITA 회원사, 네이버 솔루션마켓 정식 등록, GBSA G-AIX 멤버십, 경기도 협력연구센터 가족기업 등 다양한 외부 인증·등록을 보유하고 있습니다.",
    "website": "https://tokki-ai.com/",
    "email": "kchoi@tokki-ai.com",
    "contact": "010-9182-4258",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/793",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "톡키 AI 리서치 (Tokki AI Research)",
      "톡키 AI 음성 챗봇 빌더"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅",
      "랜딩페이지/홈페이지"
    ],
    "detailTags": [
      "SEO",
      "광고",
      "사업계획서",
      "IR",
      "시장조사",
      "이미지",
      "자동화",
      "교육",
      "SNS 문구",
      "홈페이지",
      "노코드"
    ],
    "techTags": [
      "시장조사/리서치",
      "노코드/앱빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "이미지 생성",
      "음성/STT/TTS",
      "업무 자동화/API",
      "LLM/생성형AI"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "시장/수요조사",
      "이미지",
      "자동화",
      "홈페이지"
    ],
    "techEvidence": "시장조사, 리서치, 경쟁사, 페르소나, 빌더, RAG, 검색, 분석, 이미지 생성, 이미지",
    "priceText": [
      "Pro / 월 구독 / 100,000원",
      "Pro / 월 구독 / 150,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 초기 창업팀",
    "followerCount": 43,
    "likeCount": 18,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1379,
        "name": "톡키 AI 리서치 (Tokki AI Research)",
        "summary": "시장조사부터 사업계획서, 마케팅 전략, IR 준비까지 한 번에 돕는 창업 실전형 AI 리서치 솔루션",
        "website": "https://research.tokki-ai.com",
        "keywords": [
          "AI 사업계획서",
          "AI 시장조사",
          "IR덱 자동생성",
          "K-Startup",
          "SWOT BMC 분석",
          "경쟁사 분석",
          "단계별 창업코치",
          "사업분석 AI",
          "정부지원사업 매칭",
          "페르소나 분석"
        ],
        "priceText": [
          "Pro / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "시장/수요조사",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "광고",
          "사업계획서",
          "IR",
          "시장조사",
          "이미지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "시장조사, 리서치, 경쟁사, 페르소나, 빌더, RAG, 검색, 분석, 이미지 생성, 이미지, 음성, 자동화"
      },
      {
        "id": 1380,
        "name": "톡키 AI 음성 챗봇 빌더",
        "summary": "코딩 없이 5분이면 완성 — 카톡·네이버 톡톡·웹사이트·음성으로 24시간 응대하는 AI 챗봇",
        "website": "",
        "keywords": [
          "AI 비서",
          "AI 챗봇 빌더",
          "GPT-5",
          "RAG 챗봇",
          "고객 응대",
          "네이버 톡톡",
          "노코드",
          "음성 챗봇 (STT TTS)",
          "채팅 API",
          "카카오톡 챗봇"
        ],
        "priceText": [
          "Pro / 월 구독 / 150,000원"
        ],
        "priceNumber": 150000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "광고",
          "홈페이지",
          "노코드",
          "시장조사",
          "이미지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "노코드/앱빌더",
          "RAG/지식검색",
          "이미지 생성",
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, 리서치, 노코드, 빌더, RAG, 검색, 이미지 생성, 이미지, STT, TTS, 음성, 자동화"
      }
    ]
  },
  {
    "id": 783,
    "name": "주식회사 코발트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/106100/77bfcbf09fd646ada044b75825b8e3fc.png",
    "summary": "AI가 고객 정리부터 팔로업까지 도와주는 창업자용 세일즈 도구",
    "description": "🏢 CoBALT Inc.는 “첫 만남을 실제 사업 기회로 연결한다”는 목표로 AI 기반 B2B 세일즈·관계 관리 솔루션 ‘REALIZER’를 운영하는 글로벌 SaaS 스타트업입니다. 🚀 REALIZER는 전시회, 컨퍼런스, 네트워킹, 미팅 등 다양한 비즈니스 현장에서 발생하는 첫 접점을 데이터화하여 고객 발굴, 관계 관리, 후속 커뮤니케이션까지 연결하는 AI 기반 First Contact Intelligence 솔루션입니다. 단순 명함 저장이 아니라 AI가 고객 정보를 정리·분석하고 맞춤형 팔로업까지 지원하여 초기 창업자와 세일즈 팀의 고객 관리 효율을 높입니다. 💡 CoBALT는 글로벌 전시 및 B2B 시장에서 반복적으로 발생하는 “리드 유실”과 “관계 단절” 문제를 해결하는 데 집중하고 있습니다. 현재 싱가포르 SWITCH, e27 Echelon, Seattle WABA 등 다양한 글로벌 행사 및 커뮤니티 현장에서 서비스를 실증하며 글로벌 시장 확장을 진행 중입니다.",
    "website": "https://realizer.ai/modoo",
    "email": "stella@cobalt.run",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/783",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "리얼라이저"
    ],
    "majorTags": [
      "사업계획서/IR",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR",
      "자동화"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "자동화"
    ],
    "techEvidence": "AI 고객, 분석, 자동화",
    "priceText": [
      "프로 패키지 요금제 / 월 구독 / 120,000원"
    ],
    "minPrice": 120000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료 체험 플"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 IR/발표자료, 자동화 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 25,
    "likeCount": 35,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1367,
        "name": "리얼라이저",
        "summary": "AI가 고객 정리부터 팔로업까지 도와주는 창업자용 세일즈 도구",
        "website": "",
        "keywords": [
          "AI 고객관리",
          "AI 마케팅",
          "AI 영업툴",
          "CRM 자동화",
          "고객 분석 AI",
          "리드 관리",
          "명함 관리",
          "세일즈 자동화",
          "스타트업 AI 툴"
        ],
        "priceText": [
          "프로 패키지 요금제 / 월 구독 / 120,000원"
        ],
        "priceNumber": 120000,
        "pricingKind": "fixed",
        "benefits": [
          "무료 체험 플"
        ],
        "deliverables": [
          "IR/발표자료",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "자동화"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 고객, 분석, 자동화"
      }
    ]
  },
  {
    "id": 619,
    "name": "메크랩 주식회사(Mek-lab Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/108910/6c8e3e622f644baf9adb5b45d6fcda8f.png",
    "summary": "CAD 도면을 사용해서 어디서, 왜, 얼마나 변형하기 쉬운지, 부서지기 쉬운지 시뮬레이션을 지원하는 AI 서비스",
    "description": "**시뮬레이션 자동화 플랫폼 | 초보자도 CAD 도면으로 10분만에 구조 해석 !** 유명 오픈소스들을 활용한 홈페이지, 챗봇, 워크플로우, 자동화, 멀티-에이전트, SaaS 등 맞춤형 프로그램 개발 및 기술 지원 업체 [문제] 기존 구조 해석은 작업 시간이 오래 걸리고 전문가 의존도가 높습니다. (상용툴 1copy 당 수천만원) [해결] 우리는 AI 기반 시뮬레이션 자동화 플랫폼을 제공합니다. [차별점] 튜토리얼 무료 제공, 사용법 등 기술 지원 무료 시뮬레이션 결과 얻기 전까지 무료 실무 경력 10년 Ph.D 전문가가 결과 검토 지원 [결과] 고객은 해석 시간을 최대 80% 단축하고 비용을 절감합니다. [Call To Action] [https://www.mek-lab.com](https://www.mek-lab.com/) 방문 / 데모 요청 / 튜토리얼 가이드 컨설팅 / PoC 문의 Mek-Lab은 오픈 소스 코드, 소프트웨어 및 AI를 사용하여 기계 공학 애",
    "website": "https://www.mek-lab.com",
    "email": "s.yoo@mek-lab.com",
    "contact": "010-4667-3233",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/619",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "기구 설계 검증을 위한 구조 시뮬레이션 SaaS",
      "기구 설계 검증을 위한 구조 시뮬레이션 수행 인공지능"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "홈페이지",
      "DB설계",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "홈페이지",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "에이전트, 시뮬레이션, 홈페이지, 분석, 자동화, 워크플로우, DB",
    "priceText": [
      "베이직 요금제 / 월 구독 / 200,000원",
      "Solver, 결과 분석 / 유/무료 혼합 / 500,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free Trial Service: CAD 수정, 격자 변환, 시뮬레이션 모델링",
      "Free Trial Service: CAD upload, 시뮬레이션 모델 생성, 컨설팅"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 홈페이지, 자동화 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 37,
    "likeCount": 23,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1132,
        "name": "기구 설계 검증을 위한 구조 시뮬레이션 SaaS",
        "summary": "CAD 도면을 사용해서 어디서, 왜, 얼마나 변형하기 쉬운지, 부서지기 쉬운지 시뮬레이션을 지원하는 AI 서비스",
        "website": "",
        "keywords": [
          "CAD",
          "가상 실험",
          "구조 해석",
          "기구 설계",
          "불량 분석",
          "설계 검토",
          "시뮬레이션",
          "자동화",
          "최적화",
          "형상 변경"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "Free Trial Service: CAD 수정, 격자 변환, 시뮬레이션 모델링"
        ],
        "deliverables": [
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "홈페이지",
          "DB설계",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 시뮬레이션, 홈페이지, 분석, 자동화, 워크플로우, DB"
      },
      {
        "id": 1131,
        "name": "기구 설계 검증을 위한 구조 시뮬레이션 수행 인공지능",
        "summary": "CAD 도면으로 어디서, 왜, 얼마나 변형하기 쉬운지, 부서지기 쉬운지 시뮬레이션을 대신 수행하는 AI 서비스",
        "website": "",
        "keywords": [
          "CAD",
          "가상 실험",
          "구조 해석",
          "기구 설계",
          "불량 분석",
          "설계 검토",
          "시뮬레이션",
          "자동화",
          "최적화",
          "형상 변경"
        ],
        "priceText": [
          "Solver, 결과 분석 / 유/무료 혼합 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "Free Trial Service: CAD upload, 시뮬레이션 모델 생성, 컨설팅"
        ],
        "deliverables": [
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "홈페이지",
          "DB설계",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 시뮬레이션, 홈페이지, 분석, 자동화, 워크플로우, DB"
      }
    ]
  },
  {
    "id": 791,
    "name": "주식회사 테크디엔에이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/209364/1696a9c1bec049a1b00b2e963ddfd329.png",
    "summary": "특허/시장 빅데이터의 분석 효율성 극대화, 빠르고, 신뢰성 있는 연구 빅데이터 통합 분석 플랫폼",
    "description": "창업 전, 내 아이템이 시장에서 통할지 데이터로 확인해보세요 창업을 준비하다 보면 가장 먼저 떠오르는 고민이 있습니다. “내 아이템과 비슷한 기술이 이미 있을까?”, “경쟁사는 어떤 방향으로 움직이고 있을까?”, “이 기술이 실제 시장에서 가능성이 있을까?”와 같은 질문입니다. 좋은 아이디어를 갖고 있어도, 시장과 기술 정보를 충분히 확인하지 못하면 사업화 과정에서 예상하지 못한 위험을 만날 수 있습니다. 특히 기술 기반 창업이나 제조·소재·바이오·AI·ICT 분야의 창업을 준비하는 경우에는 특허, 논문, 뉴스, 산업정보, 기업정보를 함께 살펴보는 과정이 중요합니다. 테크디엔에이는 이러한 고민을 해결하기 위해 AI 기반 연구정보 빅데이터 분석 플랫폼 ‘ResearchALL’을 운영하고 있습니다. ResearchALL은 특허, 논문, 뉴스, 산업정보 등 다양한 데이터를 통합해 기술과 시장을 함께 분석할 수 있도록 지원하는 서비스입니다. 자료에서도 ResearchALL은 특허·논문",
    "website": "https://researchall.net",
    "email": "help@techdna.kr",
    "contact": "031-8027-3753",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/791",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "리서치올 (ResearchALL)",
      "AI 기술 닥터"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "시장조사",
      "리포트"
    ],
    "techTags": [
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "리포트"
    ],
    "techEvidence": "리서치, 경쟁사, 검색, 데이터 분석, 분석, 리포트, 보고서",
    "priceText": [
      "월간 플랜 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE: 특허 검색 및 제한된 특허 프로젝트 생성, 보고서 생성",
      "무료 사용자: 모든 과정을 제한된 횟수 내에서 체험 가능합니다."
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 리포트 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 38,
    "likeCount": 21,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1376,
        "name": "리서치올 (ResearchALL)",
        "summary": "특허/시장 빅데이터의 분석 효율성 극대화, 빠르고, 신뢰성 있는 연구 빅데이터 통합 분석 플랫폼",
        "website": "https://researchall.net/Help/researchALLInfo",
        "keywords": [
          "논문",
          "동향조사",
          "딥테크",
          "리포트",
          "보고서",
          "빅데이터",
          "자동 분석",
          "조사분석",
          "특허"
        ],
        "priceText": [
          "월간 플랜 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: 특허 검색 및 제한된 특허 프로젝트 생성, 보고서 생성"
        ],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "시장조사",
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "리서치, 경쟁사, 검색, 데이터 분석, 분석, 리포트, 보고서"
      },
      {
        "id": 1377,
        "name": "AI 기술 닥터",
        "summary": "간단한 채팅만으로 사용자의 분석 의도를 파악하고, 검색 및 분석 후 자동 리포팅 까지!",
        "website": "",
        "keywords": [
          "선행조사",
          "의도파악",
          "자동 검색",
          "특허"
        ],
        "priceText": [
          "월간 플랜 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "무료 사용자: 모든 과정을 제한된 횟수 내에서 체험 가능합니다."
        ],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "경쟁사, 검색, 데이터 분석, 분석, 리포트, 보고서"
      }
    ]
  },
  {
    "id": 777,
    "name": "주식회사 커널스페이스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/199588/d5f2b78b8b994410a083637004919682.png",
    "summary": "기장부터 급여·세무신고·자금관리까지, 사장님의 재무 업무를 AI가 대신 처리해드려요",
    "description": "주식회사 커널스페이스는 '일의 본질적인 문제를 풀고, 일하는 즐거움을 되찾아주자'는 미션으로 시작한 AI 스타트업입니다. 사명 '커널스페이스(Kernelspace)'는 수학에서 차용한 개념으로, 복잡한 변환을 거치고도 남는 본질의 공간을 뜻합니다. 비본질적인 반복 업무를 AI가 걷어낼 때, 사람은 비로소 본질에 집중하며 일의 즐거움을 되찾을 수 있다고 믿습니다. 그리디(Gridie)는 커널스페이스의 첫 제품으로, 모든 비즈니스가 CFO 수준의 재무 인프라를 가질 수 있도록 돕는 AI 재무 자동화 SaaS입니다. 기장, 급여·원천세, 세무신고, 자금관리, 경영보고 — 엑셀과 여러 툴에 흩어져 있던 재무 업무를 하나의 AI 워크플로우로 묶었습니다. 사장님은 본업에, 회계·세무 파트너는 더 많은 고객에게 더 깊은 자문에 집중할 수 있습니다. 15년차 공인회계사와 AI 전문가(전 네이버 클로바노트 개발자)가 함께 창업했으며, 회계법인·세무법인 파트너십과 중견기업 ERP 자동화를 중심으로",
    "website": "https://gridie.ai/",
    "email": "gridie@kernelspace.io",
    "contact": "010-5143-5857",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/777",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "그리디 (Gridie AI)"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "자동화, 워크플로우, 인프라",
    "priceText": [
      "Pro / 월 구독 / 29,000원"
    ],
    "minPrice": 29000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "자금관리 키트: 자금일보"
    ],
    "recommendation": "업무 자동화/API, DB/인프라 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 그리디 (Gridie AI) 같은 서비스가 필요한 팀",
    "followerCount": 30,
    "likeCount": 28,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1360,
        "name": "그리디 (Gridie AI)",
        "summary": "기장부터 급여·세무신고·자금관리까지, 사장님의 재무 업무를 AI가 대신 처리해드려요",
        "website": "https://www.instagram.com/reel/DTJqXwCiOpM/",
        "keywords": [
          "AI CFO",
          "AI 재무 자동화",
          "경영보고",
          "급여자동화",
          "부가세",
          "스타트업재무",
          "원천세",
          "자금관리",
          "자영업회계",
          "회계자동화"
        ],
        "priceText": [
          "Pro / 월 구독 / 29,000원"
        ],
        "priceNumber": 29000,
        "pricingKind": "fixed",
        "benefits": [
          "자금관리 키트: 자금일보"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "자동화, 워크플로우, 인프라"
      }
    ]
  },
  {
    "id": 724,
    "name": "주식회사 스모어톡",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191916/bcb52add82154a908178abd097d4c244.png",
    "summary": "AI 이미지/영상 생성 편집 도구 - AI로 이미지와 영상을 빠르게 생성하고 편집해, 누구나 쉽게 고퀄리티 콘텐츠를 제작할 수 있어요.",
    "description": "**주식회사 스모어톡은 창업 3년차에 3만 명 이상의 사용자, 5개국 60여 기업 고객,** **실리콘밸리 유니콘 AI 모델 수출까지 달성한 AI 미디어 스타트업입니다.** KAIST AI대학원·삼성전자 출신 기술 리더십과 AI 콘텐츠 1,000만 조회·펀딩 5.5억원의 크리에이티브 역량을 결합한 6인 빌더 조직으로, AI 이미지 생성·편집 플랫폼 '플라멜(Flamel)'과 AI 광고 소재 자동 제작 에이전트 'LATENT'를 운영하고 있습니다. ━━━━━━━━━━━━━━━━━━━━━━━━━━ **[제품·서비스]** **1) 플라멜 (Flamel) — AI 이미지 생성·편집 플랫폼** - 텍스트 입력만으로 고품질 이미지를 생성하는 AI 이미지 플랫폼 - Gemini(나노바나나2, 나노바나나프로), OpenAI(GPT 이미지-2), 한국인·아시아인 표현 최강 Seedream(씨드림), 벡터·로고 특화 Recraft(리크래프트) 등 최신 모델을 통합 크레딧으로 이용",
    "website": "https://smoretalk.io/",
    "email": "contact@smoretalk.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/724",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "플라멜 (Flamel)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "광고",
      "브랜딩",
      "로고",
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "패널 리서치",
      "노코드/앱빌더",
      "이미지 생성",
      "영상 생성",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "로고",
      "영상",
      "이미지"
    ],
    "techEvidence": "GPT, Gemini, 생성형, AI 모델, 에이전트, 패널, 빌더, 이미지 생성, 이미지, 사진",
    "priceText": [
      "엔터프라이즈 요금제 / 월 구독 / 250,000원"
    ],
    "minPrice": 250000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 플라멜 (Flamel) 같은 서비스가 필요한 팀",
    "followerCount": 29,
    "likeCount": 28,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1284,
        "name": "플라멜 (Flamel)",
        "summary": "AI 이미지/영상 생성 편집 도구 - AI로 이미지와 영상을 빠르게 생성하고 편집해, 누구나 쉽게 고퀄리티 콘텐츠를 제작할 수 있어요.",
        "website": "https://welcome.flamel.app/",
        "keywords": [
          "AI 광고",
          "AI 디자인",
          "AI 숏폼",
          "AI 영상",
          "AI 이미지",
          "광고",
          "생성형 이미지",
          "숏폼 광고",
          "영상광고",
          "이미지 편집"
        ],
        "priceText": [
          "엔터프라이즈 요금제 / 월 구독 / 250,000원"
        ],
        "priceNumber": 250000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "로고",
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "광고",
          "브랜딩",
          "로고",
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "패널 리서치",
          "노코드/앱빌더",
          "이미지 생성",
          "영상 생성",
          "DB/인프라"
        ],
        "techEvidence": "GPT, Gemini, 생성형, AI 모델, 에이전트, 패널, 빌더, 이미지 생성, 이미지, 사진, 영상 생성, 숏폼"
      }
    ]
  },
  {
    "id": 832,
    "name": "코스타트 - 예비/초기창업 A-Z AI 에이전트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/123547/88a3e090dc31425aa798bbc711f5ca72.png",
    "summary": "MVP 범위를 좁히지 못해 개발이 늦어질 때, 핵심 기능 우선순위와 PRD를 먼저 정리해 출시 시점을 앞당깁니다.",
    "description": "# 🎉 모두의창업 라운드 진출자 여러분 — 사업의 A부터 Z까지, 한 엔진으로. **1인 사업자와 예비/초기 창업가의 5단계를 하나로 묶었습니다.** > 💬 \"1라운드 통과는 했는데, 그 다음 5단계(가설·자금·마케팅·운영·세무)를 혼자 다 굴려야 한다는 부담…\" ## 🏆 인기 AI 공급기업 코스타트 — 왜 우리인가 ✅ **글로벌 AI 공식 자격을 후킹으로 박은 운영진** — IBM · Anthropic · Microsoft · Google 공식 자격 20+종 (모두의창업 408개 공급기업 중 사실상 우리뿐) ✅ **7개 사업 실운영 트랙레코드** — 51곳 컨설팅 · 5,000명+ 강의 · 50+ 기관 협력 · 외부 투자 0원으로 도달한 매출 라인 ✅ **도구 공급자가 아닌 협력 파트너** — 결과물 한 번 뽑고 끝나지 않고 사업을 같이 고도화 📩 **먼저, 편하게 연락 주세요 — 무료 30분 상담** 사업을 어디서부터 고도화해야 할지 막막하시다면, 30분 정",
    "website": "https://star-t.io",
    "email": "help@star-t.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/832",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AI MVP Builder",
      "AI-Developer-KIT",
      "BIDS",
      "AI-MARKETING"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트",
      "교육/컨설팅",
      "업무자동화/생산성",
      "디자인/브랜딩",
      "마케팅 콘텐츠",
      "영상/이미지"
    ],
    "detailTags": [
      "사업계획서",
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "컨설팅",
      "교육",
      "자동화",
      "카드뉴스",
      "블로그",
      "영상",
      "SEO"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "노코드/앱빌더",
      "업무 자동화/API",
      "데이터 분석/대시보드",
      "영상 생성",
      "RAG/지식검색"
    ],
    "deliverables": [
      "사업계획서",
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "컨설팅",
      "자동화",
      "카드뉴스",
      "블로그",
      "영상"
    ],
    "techEvidence": "LLM, Claude, Gemini, 생성형, AI 에이전트, 에이전트, 랜딩페이지, 랜딩, 홈페이지, MVP",
    "priceText": [
      "Starter 요금제 / 월 구독 / 9,900원",
      "베이직 요금제 / 월 구독 / 149,000원",
      "베이직 요금제 / 월 구독 / 99,000원",
      "베이직 요금제 / 월 구독 / 190,000원"
    ],
    "minPrice": 9900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 체험 (Lean Canvas + PRD): Lean Canvas와 PRD까지 무료로 체험해 사업 방향을 먼저 확인하세요. 요구사항 문서·랜딩페이지·PSST 초안은 유료 플랜에서 이어서 생성합니다.",
      "AI-Developer-KIT Lite: Decision Gate, MVP Scope Lock, Task Breakdown, QA Checklist, RFP/PPT Flow Mini Guide를 Lite 패키지로 무료 체험할 수 있습니다. 외주 개발 관리·",
      "데모 / 체험 계정: 데모 또는 체험 계정으로 회사 프로필 기반 공고 추천, FIT 점수, 검토 흐름을 먼저 확인하고 유료 전환할 수 있습니다.",
      "Free Trial 플랜: Free Trial로 월 5건까지 캠페인 기획, 카드뉴스·블로그 콘텐츠 생성, 승인 흐름, 기본 발행 관리를 무료 체험할 수 있습니다.",
      "Free 플랜 / 데모 체험: 무료 데모 채팅과 Free 플랜으로 부가세·비용처리·법인세 같은 실제 세무 질문 흐름을 먼저 체험할 수 있습니다. 더 깊은 검토·설명 자료는 유료 플랜에서 이어집니다."
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, 랜딩페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 40,
    "likeCount": 15,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1435,
        "name": "AI MVP Builder",
        "summary": "MVP 범위를 좁히지 못해 개발이 늦어질 때, 핵심 기능 우선순위와 PRD를 먼저 정리해 출시 시점을 앞당깁니다.",
        "website": "https://ai-planner.star-t.io/ko",
        "keywords": [
          "MVP",
          "PRD",
          "PSST",
          "개발문서",
          "랜딩페이지",
          "사업계획서",
          "생성형AI",
          "스타트업",
          "외주개발",
          "창업지원"
        ],
        "priceText": [
          "Starter 요금제 / 월 구독 / 9,900원"
        ],
        "priceNumber": 9900,
        "pricingKind": "fixed",
        "benefits": [
          "Free 체험 (Lean Canvas + PRD): Lean Canvas와 PRD까지 무료로 체험해 사업 방향을 먼저 확인하세요. 요구사항 문서·랜딩페이지·PSST 초안은 유료 플랜에서 이어서 생성합니다."
        ],
        "deliverables": [
          "사업계획서",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더",
          "MVP/프로토타입"
        ],
        "techEvidence": "LLM, Claude, Gemini, 생성형, AI 에이전트, 에이전트, 랜딩페이지, 랜딩, 홈페이지, MVP"
      },
      {
        "id": 1436,
        "name": "AI-Developer-KIT",
        "summary": "코드 작성 전에 무엇을 만들지 합의하고, 만든 후 무엇을 검증할지 정해주는 AI 개발 운영 보조 도구입니다.",
        "website": "http://ai-kit.star-t.io/onboarding-portal",
        "keywords": [
          "AI개발",
          "OS",
          "QA 자동화",
          "개발자동화",
          "바이브코딩",
          "스킬",
          "에이전트",
          "운영 자동화",
          "프로젝트 관리",
          "하네스"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 149,000원"
        ],
        "priceNumber": 149000,
        "pricingKind": "fixed",
        "benefits": [
          "AI-Developer-KIT Lite: Decision Gate, MVP Scope Lock, Task Breakdown, QA Checklist, RFP/PPT Flow Mini Guide를 Lite 패키지로 무료 체험할 수 있습니다. 외주 개발 관리·"
        ],
        "deliverables": [
          "홈페이지",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "홈페이지",
          "MVP",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, Claude, Gemini, AI 에이전트, 에이전트, 빌더, 바이브코딩, 홈페이지, MVP, 자동화"
      },
      {
        "id": 1437,
        "name": "BIDS",
        "summary": "우리 사업에 맞는 정부지원사업·R&D·기술이전 공고를 찾고, FIT 점수로 먼저 볼 기회를 좁혀줍니다.",
        "website": "https://bids.star-t.io/",
        "keywords": [
          "K-STARTUP",
          "R&D",
          "RFP",
          "공고추천",
          "기술이전",
          "사업화지원금",
          "정부지원사업",
          "제안검토"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "데모 / 체험 계정: 데모 또는 체험 계정으로 회사 프로필 기반 공고 추천, FIT 점수, 검토 흐름을 먼저 확인하고 유료 전환할 수 있습니다."
        ],
        "deliverables": [
          "홈페이지",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "홈페이지",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더"
        ],
        "techEvidence": "LLM, Claude, Gemini, AI 에이전트, 에이전트, 홈페이지"
      },
      {
        "id": 1438,
        "name": "AI-MARKETING",
        "summary": "발행 캘린더와 대시보드로 콘텐츠 상태·성과를 관리하는, 작은 팀의 마케팅 운영 OS입니다.",
        "website": "https://ai-marketing.star-t.io",
        "keywords": [
          "AI 마케팅",
          "다국어 콘텐츠",
          "발행 관리",
          "생성형 AI",
          "성과 분석",
          "영상 생성",
          "워크플로우",
          "카드뉴스",
          "캠페인 기획",
          "콘텐츠 자동화"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 190,000원"
        ],
        "priceNumber": 190000,
        "pricingKind": "fixed",
        "benefits": [
          "Free Trial 플랜: Free Trial로 월 5건까지 캠페인 기획, 카드뉴스·블로그 콘텐츠 생성, 승인 흐름, 기본 발행 관리를 무료 체험할 수 있습니다."
        ],
        "deliverables": [
          "카드뉴스",
          "블로그",
          "홈페이지",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "카드뉴스",
          "블로그",
          "홈페이지",
          "영상",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, Claude, Gemini, 생성형, AI 에이전트, 에이전트, 홈페이지, 대시보드, 분석, 영상 생성, 자동화, 워크플로우"
      },
      {
        "id": 1439,
        "name": "TaxPro-KR AI",
        "summary": "무료 데모 채팅으로 실제 세무 질문 흐름을 먼저 체험할 수 있는 창업자용 세무 검토 AI입니다.",
        "website": "https://tax.star-t.io/",
        "keywords": [
          "B2B",
          "법령 검색",
          "세금",
          "세무 AI",
          "세무 정리",
          "세무사",
          "예규 검색",
          "판례 검색"
        ],
        "priceText": [
          "Plus 요금제 / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜 / 데모 체험: 무료 데모 채팅과 Free 플랜으로 부가세·비용처리·법인세 같은 실제 세무 질문 흐름을 먼저 체험할 수 있습니다. 더 깊은 검토·설명 자료는 유료 플랜에서 이어집니다."
        ],
        "deliverables": [
          "홈페이지",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "홈페이지",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더",
          "RAG/지식검색"
        ],
        "techEvidence": "LLM, Claude, Gemini, AI 에이전트, 에이전트, 홈페이지, 검색"
      }
    ]
  },
  {
    "id": 804,
    "name": "주식회사 포랩스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/130154/b9da89fe0cc14479b728645042bd5b1f.png",
    "summary": "복잡한 프로젝트 관리를 한눈에, 스마트 협업 및 프로젝트 관리 솔루션",
    "description": "Forlabs는 창업과 사업 운영 전반의 문제를 해결하는 AI Native 기업입니다. 웹 취약점 분석부터 프로젝트 관리까지, 비즈니스 성장에 필수적인 핵심 인프라를 AI 기술로 통합 제공하여 운영 효율과 보안 경쟁력을 극대화합니다. 창업의 시작부터 글로벌 확장(Scale)까지, 데이터 기반의 시장 검증을 통해 지속 가능한 성장의 토대를 마련해 드립니다. [모두의 창업 AI 솔루션 및 서비스] - 보안: 웹 취약점 분석(Antifrag), 비가시성 워터마크 솔루션 - 분석: 경쟁사 분석 리포트(Business Validation) - 관리: 구독 만료 자동 알림(Repay), 프로젝트 통합 관리(Hub) From Launch to Scale, Powered by Forlabs.",
    "website": "https://www.forlabs.io",
    "email": "peter@forlabs.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/804",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Forlabs Hub",
      "Forlabs Biz",
      "Antifrag",
      "Repay"
    ],
    "majorTags": [
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "사업계획서/IR",
      "디자인/브랜딩",
      "교육/컨설팅",
      "MVP/개발",
      "마케팅 콘텐츠",
      "영상/이미지"
    ],
    "detailTags": [
      "리포트",
      "사업계획서",
      "컨설팅",
      "DB설계",
      "자동화",
      "이미지"
    ],
    "techTags": [
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라",
      "LLM/생성형AI",
      "이미지 생성"
    ],
    "deliverables": [
      "리포트",
      "사업계획서",
      "컨설팅",
      "자동화",
      "이미지"
    ],
    "techEvidence": "경쟁사, RAG, 대시보드, 분석, 리포트, 업무관리, 인프라, 보고서, LLM, DB",
    "priceText": [
      "베이직 요금제 / 월 구독 / 9,900원",
      "49000 / CREDIT_TOKEN / 500,000원",
      "베이직 요금제 / 월 구독 / 39,000원",
      "베이직 요금제 / 월 구독 / 49,000원"
    ],
    "minPrice": 9900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 리포트, 사업계획서 근거가 필요한 초기 창업팀",
    "followerCount": 33,
    "likeCount": 19,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1392,
        "name": "Forlabs Hub",
        "summary": "복잡한 프로젝트 관리를 한눈에, 스마트 협업 및 프로젝트 관리 솔루션",
        "website": "https://hub.forlabs.io",
        "keywords": [
          "PM",
          "대시보드",
          "백오피스",
          "업무관리",
          "업무효율",
          "외주관리",
          "일정관리",
          "태스크관리",
          "프로젝트관리",
          "협업툴"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 9,900원"
        ],
        "priceNumber": 9900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "경쟁사, RAG, 대시보드, 분석, 리포트, 업무관리, 인프라"
      },
      {
        "id": 1393,
        "name": "Forlabs Biz",
        "summary": "10분 만에 완성되는 AI 기반 맥킨지 스타일 경쟁사 분석 및 시장 검증 보고서",
        "website": "https://biz.forlabs.io",
        "keywords": [
          "10분완성",
          "AI보고서",
          "AI분석",
          "경쟁사분석",
          "맥킨지",
          "비즈니스컨설팅",
          "사업계획서",
          "사업전략",
          "시장규모",
          "전략컨설팅"
        ],
        "priceText": [
          "49000 / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "리포트",
          "컨설팅"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "경쟁사, RAG, 분석, 리포트, 보고서, 인프라"
      },
      {
        "id": 1394,
        "name": "Antifrag",
        "summary": "깃허브 주소 하나로 끝내는 런칭 전 필수 보안 관문, AI 기반 웹 취약점 자동 점검 SaaS",
        "website": "https://antifrag.forlabs.io",
        "keywords": [
          "LLM보안",
          "OWASP",
          "SaaS보안",
          "런칭전점검",
          "보안가이드",
          "보안리스크분석",
          "웹보안",
          "웹보안점검",
          "취약점분석",
          "취약점자동탐지"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "리포트"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 경쟁사, RAG, 분석, 리포트, DB, 인프라"
      },
      {
        "id": 1395,
        "name": "Repay",
        "summary": "Stripe 결제 기반 서비스의 구독 만료 방지 및 매출 누수 방어 솔루션",
        "website": "https://repay.forlabs.io",
        "keywords": [
          "SaaS운영",
          "Stripe연동",
          "결제실패",
          "결제자동화",
          "구독관리",
          "리텐션향상",
          "매출누수방지",
          "매출보호",
          "이탈방지",
          "자동알림"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 49,000원"
        ],
        "priceNumber": 49000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "경쟁사, RAG, 분석, 리포트, 자동화, 연동, DB, 인프라"
      },
      {
        "id": 1396,
        "name": "비가시성 워터마크 삽입 및 증명시스템",
        "summary": "보이지 않는 기술로 자산의 가치를 증명하는 AI 비가시성 워터마크 유출 추적 시스템",
        "website": "https://imprint.forlabs.io",
        "keywords": [
          "AI워터마크",
          "데이터무결성",
          "디지털자산보호",
          "무단배포방지",
          "비가시성워터마크",
          "이미지보안",
          "지식재산권보호",
          "출처식별",
          "콘텐츠보안",
          "콘텐츠유출추적"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트",
          "이미지"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성",
          "DB/인프라"
        ],
        "techEvidence": "경쟁사, RAG, 분석, 리포트, 이미지, 인프라"
      }
    ]
  },
  {
    "id": 815,
    "name": "주식회사 허니엠앤비",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191804/814be6abeef54490a6c9b7fa1c31d716.png",
    "summary": "AI 기반 고객검증 및 고객분석 서비스-인공지능 합성 페르소나를 이용하여, 설문조사, 심층인터뷰(IDI), 포커스그룹인터뷰(FGI), 미래 상황 예측까지 신속하게 검증할 수 있습니다.",
    "description": "AI 기반 아이디어 창출/고도화 및 설문/인터뷰를 통한 검증 서비스 (주)허니엠앤비는 \"혁신 기술로 이어가는 디지털 혁신, 삶을 더욱 편리하게 만드는 서비스 개발\" 이라는 미션 아래 인간의 삶에 실질적인 도움을 주는 AI·디지털 서비스를 개발하고 있습니다. 사람을 위해 마음을 이해하고 생각을 만들어가며 새로운 가치를 창조한다는 철학을 바탕으로, IT/SW 연구개발, 플랫폼 서비스 운영, 학술연구라는 세 축을 중심으로 사업을 전개하고 있습니다. 허니엠앤비는 지금까지 심리 분석 기반의 허니마인드, 아동 발달 지원 서비스 허니키즈, 상담 솔루션 온빛담, 대화형 AI 서비스 루비톡 등을 개발·운영해 왔습니다. AI·신경과학·정신건강의학·심리학 분야 전문가들로 구성된 자문단과 함께 지속적으로 연구하고 있으며, 이러한 결과로 3건의 등록 특허 및 각종 저작권 등을 보유하여, 기술의 신뢰성과 서비스 품질을 공식적으로 검증 받고 있습니다. 허니엠앤비는 바로 그 역량을 바탕으로 **RUBIR",
    "website": "https://rubiris.com/",
    "email": "service@rubiris.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/815",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "RUBIRIS Persona",
      "RUBIRIS Concept"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "IR",
      "시장조사",
      "교육",
      "사업계획서"
    ],
    "techTags": [
      "설문/서베이",
      "시장조사/리서치",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "IR/발표자료",
      "시장/수요조사",
      "사업계획서"
    ],
    "techEvidence": "설문, 시장조사, 리서치, 페르소나, 분석, 시장분석",
    "priceText": [
      "MAX 요금제 / 월 구독 / 59,900원"
    ],
    "minPrice": 59900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 IR/발표자료, 시장/수요조사 근거가 필요한 초기 창업팀",
    "followerCount": 43,
    "likeCount": 7,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1409,
        "name": "RUBIRIS Persona",
        "summary": "AI 기반 고객검증 및 고객분석 서비스-인공지능 합성 페르소나를 이용하여, 설문조사, 심층인터뷰(IDI), 포커스그룹인터뷰(FGI), 미래 상황 예측까지 신속하게 검증할 수 있습니다.",
        "website": "https://rubiris.com/persona",
        "keywords": [
          "FGD",
          "FGI",
          "고객 분석",
          "리서치",
          "설문",
          "소비자조사",
          "시장조사",
          "의사결정",
          "인터뷰",
          "페르소나"
        ],
        "priceText": [
          "MAX 요금제 / 월 구독 / 59,900원"
        ],
        "priceNumber": 59900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "시장/수요조사"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "IR",
          "시장조사",
          "교육"
        ],
        "techTags": [
          "설문/서베이",
          "시장조사/리서치",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "설문, 시장조사, 리서치, 페르소나, 분석"
      },
      {
        "id": 1410,
        "name": "RUBIRIS Concept",
        "summary": "AI 기반 아이디어 생성 서비스-아이디어 발굴과 포착부터 구체적인 정리를 통해 바로 활용할 수 있게 도와주는 AI 기반 비즈니스 아이디어 스튜디오입니다.",
        "website": "https://rubiris.com/concept",
        "keywords": [
          "기획",
          "니즈",
          "데이터",
          "문제해결",
          "사업계획서",
          "솔루션",
          "시장분석",
          "아이디어",
          "챗봇",
          "컨셉"
        ],
        "priceText": [
          "MAX 요금제 / 월 구독 / 59,900원"
        ],
        "priceNumber": 59900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "시장/수요조사"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "교육"
        ],
        "techTags": [
          "설문/서베이",
          "시장조사/리서치",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "설문, 페르소나, 시장분석, 분석"
      }
    ]
  },
  {
    "id": 779,
    "name": "가설검증 - 풀스택 MVP로 도와드립니다 - (주)코그니랩스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/101319/81d71206c9534d6e9839e014467c8c7a.webp",
    "summary": "아이디어 입력을 하면 시스템으로 구현해 드림 - MVP(풀스택) 자동 구현 시스템 : 기획부터 실서버 배포까지, 단 2개월. AI가 만드는 진짜 동작하는 시스템 - PPT가 아닌, 직접 써 볼 수 있는 MVP로 시장과 심사자를 설득하세요.",
    "description": "***“이 기회에 실구현된 내 아이디어 구현품 하나 만들어 놓으시는 것 어떨까요?\"*** ***흉내만 내는 MVP가 아닌, 실제 운영 시스템(풀스택)으로 만들어 드립니다.*** *주식회사 코그니랩스는 창업자와 소상공인, 제조업체, 교육기관, 서비스 기업이 원하는 웹 결과물을 AI와 전문가의 협업으로 빠르게 구현하는 AI 웹 시스템, 플랫폼 제작 솔루션 기업입니다. MVP이상으로, 실제 사용가능한 수준까지 끌어올립니다.* **[ 회사 소개 ]** 주식회사 코그니랩스(CognyLabs)는 AI 기반 MVP 설계·구현 자동화 전문기업입니다. \"개발을 모르는 사람도 아이디어만 있으면 서비스를 만들 수 있어야 한다\"는 믿음으로 2024년 설립된 이후, 아이디어가 실제 서비스가 되기까지의 모든 과정을 AI로 자동화하는 일에 매진해 왔습니다. 기존에는 MVP 제작을 중심으로 소개되어 왔지만, 코그니랩스가 실제로 지원하는 범위는 훨씬 넓습니다. 창업 아이디어 검증용 MVP는 물론, 제품",
    "website": "https://cognylabs.com/",
    "email": "minsui@naver.com",
    "contact": "010-2036-0723",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/779",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Prometheon"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "피드백",
      "랜딩페이지",
      "홈페이지",
      "DB설계",
      "MVP",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "AI 에이전트",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "에이전트, 멀티에이전트, 로우코드, 랜딩페이지, 랜딩, 웹페이지, MVP, 자동화, API, 예약",
    "priceText": [
      "MVP 시스템 기획, 구현 및 2개월 팔로업 / 유/무료 혼합 / 930,000원"
    ],
    "minPrice": 930000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "스파크보드 - 아이디어 구조화 - 회원가입 후 5회 자유 이용: Spark Board로 아이디어를 구조화하고, AI 코칭으로 사업성을 검증하세요. 공공데이터 연계로 실세계에서의 전략을 문서화 해 볼 수 있습니다."
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 랜딩페이지, 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 38,
    "likeCount": 11,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1362,
        "name": "Prometheon",
        "summary": "아이디어 입력을 하면 시스템으로 구현해 드림 - MVP(풀스택) 자동 구현 시스템 : 기획부터 실서버 배포까지, 단 2개월. AI가 만드는 진짜 동작하는 시스템 - PPT가 아닌, 직접 써 볼 수 있는 MVP로 시장과 심사자를 설득하세요.",
        "website": "https://prometheon.kr/build",
        "keywords": [
          "2개월 시스템 완성",
          "AI MVP 올인원",
          "AI 멀티에이전트",
          "AI자동개발",
          "기획부터 배포까지",
          "로우코드",
          "멘토 피드백 즉시반영",
          "시장검증 MVP",
          "실서버 배포",
          "풀스택"
        ],
        "priceText": [
          "MVP 시스템 기획, 구현 및 2개월 팔로업 / 유/무료 혼합 / 930,000원"
        ],
        "priceNumber": 930000,
        "pricingKind": "fixed",
        "benefits": [
          "스파크보드 - 아이디어 구조화 - 회원가입 후 5회 자유 이용: Spark Board로 아이디어를 구조화하고, AI 코칭으로 사업성을 검증하세요. 공공데이터 연계로 실세계에서의 전략을 문서화 해 볼 수 있습니다."
        ],
        "deliverables": [
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "DB설계",
          "MVP",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "AI 에이전트",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 멀티에이전트, 로우코드, 랜딩페이지, 랜딩, 웹페이지, MVP, 자동화, API, 예약, DB, 데이터베이스"
      }
    ]
  },
  {
    "id": 735,
    "name": "주식회사 에이아이브",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/199433/15183aeee7e044369843d7db6e3c3f5a.png",
    "summary": "모두의 창업에서 GPU 제일 싼 집 👌💸",
    "description": "쉽고 싸고 빠른 GPU 클라우드, API 서비스 팔아요 📢 --- # AIEEV ### AI Equality, Everyone's Value 우리는 전 세계에서 가장 효율적인 AI 클라우드 플랫폼 기업을 목표로, 모두가 AI의 혜택을 동등하게 누릴 수 있는 지속 가능한 AI 서비스 생태계를 만듭니다. 🌏 --- # Keyword 1. 효율성 ### 세상에 잠들어있는 GPU 깨우기 GPU Shortage, 한번쯤은 들어보셨죠? AI 서비스가 확산되면서 GPU 수요는 폭발하는데 공급은 따라가지 못하고, 모두가 더 많은 GPU를 확보하기 위한 경쟁에 뛰어듭니다. 하지만 우리는 다른 질문에서 출발했습니다. **\"새로운 자원을 확보하기 전에, 우리는 이미 존재하는 자원을 충분히 쓰고 있을까?\"** 세상에는 잠들어 있는 컴퓨팅 자원이 곳곳에 흩어져 있습니다. 우리는 이 분산된 유휴 자원을 지리적 거리에 관계없이 네트워크로 연결해 하나의 클라우드 스택으로 쌓았습니다",
    "website": "https://www.aieev.com",
    "email": "hk.kim@aieev.com",
    "contact": "010-9888-4696",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/735",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Air Container",
      "Air API"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR"
    ],
    "techTags": [
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료"
    ],
    "techEvidence": "API, 인프라, GPU, 클라우드",
    "priceText": [
      "RTX 4090 24GB 기준 1시간 당 / CAPACITY_BASED / 742원",
      "제공 모델별 요금 상이 / CREDIT_TOKEN / 0원"
    ],
    "minPrice": 0,
    "pricingKind": "free",
    "pricingSortRank": 0,
    "benefits": [],
    "recommendation": "업무 자동화/API, DB/인프라 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Air Container 같은 서비스가 필요한 팀",
    "followerCount": 21,
    "likeCount": 24,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1297,
        "name": "Air Container",
        "summary": "모두의 창업에서 GPU 제일 싼 집 👌💸",
        "website": "https://www.aieev.com/",
        "keywords": [
          "AI",
          "AI서비스",
          "AI인프라",
          "AI클라우드",
          "추론",
          "클라우드"
        ],
        "priceText": [
          "RTX 4090 24GB 기준 1시간 당 / CAPACITY_BASED / 742원"
        ],
        "priceNumber": 742,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "API, 인프라, GPU, 클라우드"
      },
      {
        "id": 1298,
        "name": "Air API",
        "summary": "내 제품에 AI를 붙이는 가장 저렴한 방법 👌💸",
        "website": "https://docs.aieev.com/docs/ko/air-api",
        "keywords": [
          "AI",
          "AI모델",
          "AI서비스",
          "API"
        ],
        "priceText": [
          "제공 모델별 요금 상이 / CREDIT_TOKEN / 0원"
        ],
        "priceNumber": 0,
        "pricingKind": "free",
        "benefits": [],
        "deliverables": [
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발"
        ],
        "detailTags": [
          "IR"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "API, GPU, 클라우드"
      }
    ]
  },
  {
    "id": 579,
    "name": "(주)워트인텔리전스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/204432/5eb21244c08c43d2a8d9414a8fd9b941.jpg",
    "summary": "어려운 특허 데이터를 AI를 통해 쉽게 찾아 비즈니스 의사결정에 활용할 수 있어요!",
    "description": "워트인텔리전스는 국내 최초 AI 특허검색엔진 ‘키워트 3.0’을 개발한 AI 기반 IP Tech 기업으로, 특허 데이터와 자연어처리·거대언어모델(LLM) 기술을 결합해 연구개발, 기술사업화, IP 전략 수립을 지원하는 솔루션을 제공하고 있습니다. 2017년 국내 첫 AI 특허검색 서비스인 키워트를 출시한 이후, AI Native Research 플랫폼 ‘키워트 인사이트' 등 지식재산(IP) 분야에 특화된 AI 서비스를 지속적으로 고도화해 왔습니다. 현재 대학, 공공연구기관, 대기업, 스타트업, 특허법인 등 다양한 기관에서 활용되고 있으며, 연간 검색량 1억 건 이상, 회원 3만 명 규모의 국내 대표 AI 특허 플랫폼으로 성장하고 있습니다. 또한 특허청·중소기업청 주최 IP정보 분야 스타트업 프로그램 1등 수상, 과학기술정보통신부 선정 AI혁신 100대 기업, Gartner 국내 첫 AI 특허솔루션 벤더 브리핑 선정, 2025 아기유니콘 육성사업 선정 등 기술력과 성장성을 대외적",
    "website": "https://www.wertcorp.com/kr",
    "email": "hjeong@wert.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/579",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "키워트 3.0",
      "키워트 인사이트"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "홈페이지",
      "시장조사",
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "DB/인프라",
      "업무 자동화/API"
    ],
    "deliverables": [
      "홈페이지",
      "시장/수요조사",
      "자동화"
    ],
    "techEvidence": "LLM, 시장조사, 리서치, 검색, 분석, 인프라, 자동화, DB",
    "priceText": [
      "그룹 요금제 / 월 구독 / 500,000원",
      "월 400만 토큰 / CREDIT_TOKEN / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 홈페이지, 시장/수요조사 근거가 필요한 초기 창업팀",
    "followerCount": 25,
    "likeCount": 19,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1082,
        "name": "키워트 3.0",
        "summary": "어려운 특허 데이터를 AI를 통해 쉽게 찾아 비즈니스 의사결정에 활용할 수 있어요!",
        "website": "https://www.keywert.com/?utm_source=modoo&utm_medium=site&utm_campaign=keywert&utm_content=modoo",
        "keywords": [
          "IP",
          "R&D",
          "검색",
          "기술",
          "리서치",
          "분석",
          "연구",
          "지식재산",
          "특허",
          "특허 데이터"
        ],
        "priceText": [
          "그룹 요금제 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "홈페이지",
          "시장/수요조사"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "홈페이지",
          "시장조사"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 시장조사, 리서치, 검색, 분석, 인프라"
      },
      {
        "id": 1083,
        "name": "키워트 인사이트",
        "summary": "특허 AI를 통해 복잡한 IP, 기술 정보를 빠르게 탐색하고 핵심 인사이트를 도출할 수 있는 분석 플랫폼 입니다.",
        "website": "https://ai.keywert.com/about?utm_source=modoo&utm_medium=site&utm_campaign=keywertinsight&utm_content=modoo",
        "keywords": [
          "AI",
          "IP",
          "LLM",
          "R&D",
          "검색",
          "기술",
          "분석",
          "자동화",
          "특허",
          "특허 데이터"
        ],
        "priceText": [
          "월 400만 토큰 / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "홈페이지",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "홈페이지",
          "DB설계",
          "시장조사",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 시장조사, 검색, 분석, 자동화, DB, 인프라"
      }
    ]
  },
  {
    "id": 702,
    "name": "주식회사 모듈스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/201422/330fa150ddb74d6dbe8768f4dd1aec6e.jpeg",
    "summary": "코딩 몰라도 괜찮아요. 대화만으로 몇 분 만에 펌웨어가 완성됩니다.",
    "description": "하드웨어와 소프트웨어, 그리고 AI를 잇는 기술 파트너 **모듈스**는 오랜 하드웨어 설계 노하우 위에 IoT 시스템 구축 역량과 최신 AI 기술 활용 능력을 더해, 아이디어를 실제 동작하는 제품으로 완성해 드리는 기술 전문 기업입니다. **1. 검증된 하드웨어 설계 전문성** 수년간 축적해 온 회로 설계, PCB 아트워크, 펌웨어 개발 경험을 바탕으로 안정성과 양산성을 모두 갖춘 하드웨어를 설계합니다. 센서 모듈부터 임베디드 컨트롤러, 통신 보드까지 — 고객의 요구사항을 단순히 \"동작하는 시제품\"이 아닌 **현장에서 견디는 제품**으로 구현합니다. **2. 실전 IoT 시스템 프로젝트 경력** 다양한 산업 현장에서 IoT 시스템을 직접 설계·구축·운영해 온 풍부한 프로젝트 경험을 보유하고 있습니다. 디바이스 ↔ 게이트웨이 ↔ 클라우드 ↔ 사용자 인터페이스에 이르는 **End-to-End 데이터 흐름**을 한 팀에서 설계할 수 있다는 점이 모듈스의 가장 큰 강점입니다. 단발",
    "website": "https://www.modules.co.kr",
    "email": "modules20200522@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/702",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "바벨",
      "인디보드"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "IR",
      "노코드",
      "MVP",
      "자동화",
      "컨설팅",
      "DB설계"
    ],
    "techTags": [
      "LLM/생성형AI",
      "노코드/앱빌더",
      "MVP/프로토타입",
      "업무 자동화/API",
      "DB/인프라",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "IR/발표자료",
      "MVP",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "LLM, AI 모델, 노코드, 바이브코딩, 시제품, 자동화, 클라우드, 분석, DB",
    "priceText": [
      "프로 요금제 / 월 구독 / 399,000원"
    ],
    "minPrice": 399000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 요금제: 1000만 AI 사용 토큰 제공",
      "Free 요금제: 동시 작업 프로젝트 1개",
      "Free 요금제: 회로도 분석 기능",
      "Free 요금제: AI 사용 토큰 1000만 지원"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 IR/발표자료, MVP 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 23,
    "likeCount": 21,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1256,
        "name": "바벨",
        "summary": "코딩 몰라도 괜찮아요. 대화만으로 몇 분 만에 펌웨어가 완성됩니다.",
        "website": "https://babel.ai.kr/docs/introduction",
        "keywords": [
          "ai",
          "firmware",
          "IoT",
          "stm32",
          "노코드",
          "바이브코딩",
          "바이브펌웨어",
          "임베디드",
          "펌웨어",
          "하드웨어"
        ],
        "priceText": [
          "프로 요금제 / 월 구독 / 399,000원"
        ],
        "priceNumber": 399000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 요금제: 1000만 AI 사용 토큰 제공",
          "Free 요금제: 동시 작업 프로젝트 1개"
        ],
        "deliverables": [
          "IR/발표자료",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "IR",
          "노코드",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "MVP/프로토타입",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 모델, 노코드, 바이브코딩, 시제품, 자동화, 클라우드"
      },
      {
        "id": 1255,
        "name": "인디보드",
        "summary": "회로도 그리기부터 PCB 아트워크까지, AI가 함께 설계해주는 전자회로 개발 플랫폼",
        "website": "https://www.indiyboard.com/docs",
        "keywords": [
          "AI",
          "EDA",
          "PCB설계",
          "바이브설계",
          "바이브하드웨어",
          "설계자동화",
          "아트워크",
          "하드웨어",
          "하드웨어 개발",
          "회로도"
        ],
        "priceText": [
          "프로 요금제 / 월 구독 / 399,000원"
        ],
        "priceNumber": 399000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 요금제: 회로도 분석 기능",
          "Free 요금제: AI 사용 토큰 1000만 지원"
        ],
        "deliverables": [
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "MVP",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 모델, 시제품, 분석, 자동화, DB, 클라우드"
      }
    ]
  },
  {
    "id": 764,
    "name": "주식회사 위즈컴퍼니",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/163174/a3cf9eacbfcd44098c921c0d52f39f0d.png",
    "summary": "AI 기반 랜딩페이지 제작 및 마케팅 데이터 수집 SaaS 플랫폼 - 코딩없이 랜딩페이지를 제작하고 고객 전환 추적 및 DB 관리까지 지원하는 웹 기반 솔루션",
    "description": "주식회사 위즈컴퍼니는 웹 기반 비즈니스 솔루션과 운영 자동화 시스템을 개발하는 IT 기업입니다. 쇼핑몰, 렌탈 플랫폼, 랜딩페이지, 고객 관리 시스템 등 다양한 분야의 웹 서비스를 직접 개발·운영하고 있으며, 실제 사업 현장에서 필요한 기능을 중심으로 실용적인 솔루션을 만드는 데 집중하고 있습니다. 현재 등록된 솔루션인 MubloBiz는 소상공인과 중소사업자를 위한 AI 기반 랜딩페이지 및 고객 전환 관리 플랫폼입니다. 광고를 통해 유입된 고객을 단순 방문으로 끝내지 않고, 문의 수집, 전환 추적, 상담 연결, 고객 관리까지 하나의 흐름으로 운영할 수 있도록 구성되어 있습니다. 또한 AI를 활용한 랜딩페이지 생성 기능과 광고 성과 분석 기능을 통해 초기 창업자도 보다 쉽게 온라인 마케팅을 운영할 수 있도록 지원하고 있습니다. 특히 반복적인 마케팅 및 운영 업무를 자동화하여 소규모 사업자의 운영 부담을 줄이고, 데이터 기반으로 광고 효율을 개선할 수 있도록 돕는 것을 목표로 하",
    "website": "https://mublo.biz/board/blog",
    "email": "wwizkr@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/764",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "MubloBiz"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "블로그",
      "광고",
      "랜딩페이지",
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "랜딩페이지",
      "자동화"
    ],
    "techEvidence": "랜딩페이지, 랜딩, 데이터분석, 분석, 자동화, DB",
    "priceText": [
      "Master / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "블로그, SNS/광고 문구 결과물로 첫 고객 반응을 빠르게 확인하려는 MubloBiz 같은 서비스가 필요한 팀",
    "followerCount": 17,
    "likeCount": 27,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1345,
        "name": "MubloBiz",
        "summary": "AI 기반 랜딩페이지 제작 및 마케팅 데이터 수집 SaaS 플랫폼 - 코딩없이 랜딩페이지를 제작하고 고객 전환 추적 및 DB 관리까지 지원하는 웹 기반 솔루션",
        "website": "https://mublo.biz/board/blog",
        "keywords": [
          "CRM",
          "고객관리",
          "광고분석",
          "데이터분석",
          "디지털전환",
          "랜딩페이지",
          "마케팅자동화",
          "블로그자동화"
        ],
        "priceText": [
          "Master / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "광고",
          "랜딩페이지",
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "랜딩페이지, 랜딩, 데이터분석, 분석, 자동화, DB"
      }
    ]
  },
  {
    "id": 802,
    "name": "통합데이터관리 솔루션 DataCraft - (주)펀셰어",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185744/1ed656d2b97e420b8faac596835a0610.png",
    "summary": "프로젝트관리, 인사관리, 마케팅 관리 등 기존 엑셀을 대체할 새로운 업무관리 솔루션 - 데이터 통합관리 솔루션",
    "description": "“협업툴 - 프로젝트관리, 재무관리, 인사관리, 마케팅 관리 등 여러분의 엑셀업무를 완벽하게 대체하세요!” **데이터크래프**는 기업의 다양한 업무와 데이터를 하나로 연결하여 우리 조직에 꼭 맞는 업무 시스템을 직접 만들 수 있는 **AI 기반 Work OS 플랫폼을 제공**합니다. 🧩 **모든 업무를 하나의 시스템에서** **프로젝트 관리, 일정 관리, 인사 관리, 재무 관리, 현장 운영 등** 흩어져 있는 업무를 하나의 플랫폼에서 통합 관리할 수 있습니다. 🛠️**드래그 앤 드롭으로 완성하는 업무 시스템** 복잡한 개발 없이도 **드래그 앤 드롭 방식의 노코드(No-Code)** 환경으로 업무 화면과 협업 프로세스를 손쉽게 구성할 수 있습니다. 🤖 **AI 기반 업무 자동화** 반복 업무는 자동화하고, 데이터는 실시간으로 연결하여 더 빠르고 효율적인 업무 환경을 제공합니다. 🔗 **우리 조직에 맞게 자유롭게** 어떤 업무 데이터도, 어떤 협업",
    "website": "https://funshare.co.kr",
    "email": "dh.lee@funshare.co.kr",
    "contact": "010-4202-1718",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/802",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "DataCraft AI"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "노코드",
      "자동화"
    ],
    "techTags": [
      "노코드/앱빌더",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "노코드, 빌더, 자동화, 업무관리",
    "priceText": [
      "프로모션 상품 / 월 구독 / 149,000원"
    ],
    "minPrice": 149000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "노코드/앱빌더, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 DataCraft AI 같은 서비스가 필요한 팀",
    "followerCount": 23,
    "likeCount": 20,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1390,
        "name": "DataCraft AI",
        "summary": "프로젝트관리, 인사관리, 마케팅 관리 등 기존 엑셀을 대체할 새로운 업무관리 솔루션 - 데이터 통합관리 솔루션",
        "website": "https://funshare.co.kr",
        "keywords": [
          "WORK OS",
          "경영관리",
          "그룹웨어",
          "기업관리",
          "노코드",
          "웹빌더",
          "인사관리",
          "일정관리",
          "프로젝트관리",
          "협업툴"
        ],
        "priceText": [
          "프로모션 상품 / 월 구독 / 149,000원"
        ],
        "priceNumber": 149000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "노코드",
          "자동화"
        ],
        "techTags": [
          "노코드/앱빌더",
          "업무 자동화/API"
        ],
        "techEvidence": "노코드, 빌더, 자동화, 업무관리"
      }
    ]
  },
  {
    "id": 772,
    "name": "가능성의 시작! 데브다이브(devdive)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/193066/753ef9f6e5a4462a9723d874bae55944.webp",
    "summary": "글·이미지·영상 통합 AI 한곳에서 · API로 내 서비스에 바로 연결 · AI 광고영상 제작 · 계속 쌓이는 워크플로우",
    "description": "# ↗️ 데브다이브 소개는 위 **'AI 솔루션'** 을 클릭해서 확인해주세요. --- 젠다이브(Gendive)는 기업과 창업자가 AI를 실제 업무에 적용할 수 있도록 돕는 AI WorkOS 기업입니다. 2022년 설립 이후 AI 학습 데이터 구축, 실무형 AI 교육, 생성형 AI 워크플로우 서비스 개발을 기반으로 다양한 기업과 기관의 AI 도입을 지원해왔습니다. 현재는 devdive를 중심으로 기획, 문서 작성, 콘텐츠 제작, AI 광고 제작, 마케팅, 업무 자동화 등 창업과 기업 운영에 필요한 AI 기능을 하나의 흐름으로 연결하는 서비스를 제공하고 있습니다. --- □ 젠다이브는 **검증된 AI 기업**입니다. - TIPS R&D 수행 - IBK창공 광주 2기 - 딥테크창업사관학교 선정 - 더벤처스, 페이스메이커스, 전남창조경제혁신센터 투자 유치 - **모두의 창업 멘토 & 솔루션 제공 기업** - **Agentic AI Alliance 생태계 분과** --- *",
    "website": "https://www.devdive.ai/",
    "email": "info@gendive.ai",
    "contact": "070-4895-5550",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/772",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "데브다이브(devdive)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "광고",
      "사업계획서",
      "IR",
      "랜딩페이지",
      "시장조사",
      "브랜딩",
      "로고",
      "영상",
      "이미지",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "랜딩페이지",
      "시장/수요조사",
      "로고",
      "영상",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, 생성형, 에이전트, 시장조사, 랜딩, 이미지, 자동화, API",
    "priceText": [
      "모두의 창업 요금제 / CREDIT_TOKEN / 299,000원"
    ],
    "minPrice": 299000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "회원가입 크레딧: 회원가입시 1000크레딧 무료 제공"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 33,
    "likeCount": 10,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1353,
        "name": "데브다이브(devdive)",
        "summary": "글·이미지·영상 통합 AI 한곳에서 · API로 내 서비스에 바로 연결 · AI 광고영상 제작 · 계속 쌓이는 워크플로우",
        "website": "https://www.devdive.ai/ko/modoo",
        "keywords": [
          "API",
          "API 사업계획서 IR PPT 시장조사 바이럴 유튜브 쇼츠 브랜딩 상세페이지 로고 카피라이팅 썸네일 클로드 챗지피티 에이전트 워크플로우 자동화 MCP",
          "chatgpt",
          "claude",
          "광고영상",
          "마케팅",
          "영상",
          "올인원AI",
          "이미지"
        ],
        "priceText": [
          "모두의 창업 요금제 / CREDIT_TOKEN / 299,000원"
        ],
        "priceNumber": 299000,
        "pricingKind": "usage",
        "benefits": [
          "회원가입 크레딧: 회원가입시 1000크레딧 무료 제공"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "랜딩페이지",
          "시장/수요조사",
          "로고",
          "영상",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "광고",
          "사업계획서",
          "IR",
          "랜딩페이지",
          "시장조사",
          "브랜딩",
          "로고",
          "영상",
          "이미지",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, 생성형, 에이전트, 시장조사, 랜딩, 이미지, 자동화, API, 워크플로우"
      }
    ]
  },
  {
    "id": 826,
    "name": "GWR Korea",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185338/15e3559af7c746a78aca19e098104316.png",
    "summary": "업로드한 문서의 내용을 학습해 그 범위 안에서만 사람처럼 대화하는 AI를 5분 안에 생성합니다. 정해진 버튼과 답변만 제공하는 기존 자동응답과 달리, 어떤 방식의 질문에도 맥락을 이해해 자연스럽게 응답합니다.",
    "description": "[http://askmind.ai](http://askmind.aisiyeon_gwr@proton.me010-2222-2257) [https://modu.askmind.ai/](https://modu.askmind.ai/) [siyeon_gwr@proton.me](http://askmind.aisiyeon_gwr@proton.me010-2222-2257) [010-2222-2257](http://askmind.aisiyeon_gwr@proton.me010-2222-2257) -GWR Korea 회사 소개- GWR Korea는 RAG(검색 증강 생성) 기반 AI 솔루션을 개발하고 운영하는 기업입니다. 보유한 지식과 문서를 그대로 AI 서비스로 전환하는 기술을 핵심 역량으로 삼고 있으며, 창업자·기업·교육기관·연구자가 별도의 개발 인력 없이 자신의 도메인에 특화된 AI를 구축할 수 있도록 지원합니다. -기술 기반- GWR Korea는 한국어 특화 하이브리드 검색 알고리즘, 키워",
    "website": "http://askmind.ai",
    "email": "siyeon_gwr@proton.me",
    "contact": "010-2222-2257",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/826",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AskMind AI 빌더",
      "AskMind 고객 응대 AI",
      "AskMind 교육 AI 튜터",
      "AskMind 시장 검증 AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SEO",
      "SNS 문구",
      "홈페이지",
      "노코드",
      "DB설계",
      "리포트",
      "브랜딩",
      "자동화",
      "교육",
      "컨설팅",
      "시장조사",
      "랜딩페이지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "설문/서베이",
      "시장조사/리서치",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "홈페이지",
      "리포트",
      "자동화",
      "컨설팅",
      "시장/수요조사",
      "랜딩페이지"
    ],
    "techEvidence": "LLM, AI 에이전트, 에이전트, 응답, 페르소나, 노코드, 빌더, 홈페이지, RAG, 검색",
    "priceText": [
      "2개월 이후 수정 외 별도금 없음/ 분납 가능 / 월 구독 / 330,000원",
      "2개월간 고객 맞춤지원(2개월 이후 수정비 외 별도 추가금 없음)/2개월 분납 가능 / 월 구독 / 330,000원",
      "2개월 지불 이후 수정비용 외 추가비 없음/2개월 분납 가능 / 월 구독 / 330,000원",
      "2개월 지불 이후 최종단계까지 수정 외 추가 비용 없음/분납 가능 / 월 구독 / 330,000원"
    ],
    "minPrice": 330000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
      "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 23,
    "likeCount": 20,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1422,
        "name": "AskMind AI 빌더",
        "summary": "업로드한 문서의 내용을 학습해 그 범위 안에서만 사람처럼 대화하는 AI를 5분 안에 생성합니다. 정해진 버튼과 답변만 제공하는 기존 자동응답과 달리, 어떤 방식의 질문에도 맥락을 이해해 자연스럽게 응답합니다.",
        "website": "https://modu.askmind.ai/",
        "keywords": [
          "AI",
          "askmind",
          "노코드",
          "브랜드",
          "영어",
          "창업",
          "챗봇",
          "카카오톡",
          "캐릭터",
          "페르소나"
        ],
        "priceText": [
          "2개월 이후 수정 외 별도금 없음/ 분납 가능 / 월 구독 / 330,000원"
        ],
        "priceNumber": 330000,
        "pricingKind": "fixed",
        "benefits": [
          "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
          "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "홈페이지",
          "노코드",
          "DB설계",
          "리포트",
          "브랜딩",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 응답, 페르소나, 노코드, 빌더, 홈페이지, RAG, 검색, 분석, 리포트"
      },
      {
        "id": 1423,
        "name": "AskMind 고객 응대 AI",
        "summary": "제품 설명서·가격표·FAQ 등 매장 문서를 업로드하면 고객 문의를 24시간 자동 응대하는 AI 상담원이 만들어집니다. \"아토피가 있는데 이 비누 써도 되나요\" \"노견인데 약도 먹는데 맡길 수 있나요\" 같은 복합 조건 질문도 문서 내용을 바탕으로 상황에 맞게 답변합니다.",
        "website": "https://modu.askmind.ai/",
        "keywords": [
          "24시간",
          "AI",
          "무인",
          "상담",
          "쇼핑몰",
          "응대",
          "인스타",
          "자동응답",
          "챗봇",
          "카카오톡"
        ],
        "priceText": [
          "2개월간 고객 맞춤지원(2개월 이후 수정비 외 별도 추가금 없음)/2개월 분납 가능 / 월 구독 / 330,000원"
        ],
        "priceNumber": 330000,
        "pricingKind": "fixed",
        "benefits": [
          "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
          "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "홈페이지",
          "DB설계",
          "리포트",
          "브랜딩",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 응답, 페르소나, 빌더, 홈페이지, RAG, 검색, 분석, 리포트, 전화"
      },
      {
        "id": 1424,
        "name": "AskMind 교육 AI 튜터",
        "summary": "강의 자료·교재·커리큘럼 문서를 업로드하면 학생의 학습 질문과 수강 상담을 동시에 처리하는 AI 튜터가 만들어집니다. \"이 공식이 왜 이렇게 되나요\" 같은 학습 질문에 학생 수준에 맞춰 단계별로 설명하고, \"수강료가 얼마인가요\" 같은 신규 수강 상담에도 답변해 수강 신청까지 연결합니다.",
        "website": "https://modu.askmind.ai/",
        "keywords": [
          "AI",
          "강의",
          "선생님",
          "수강",
          "인강",
          "챗봇",
          "코칭",
          "튜터",
          "학원"
        ],
        "priceText": [
          "2개월 지불 이후 수정비용 외 추가비 없음/2개월 분납 가능 / 월 구독 / 330,000원"
        ],
        "priceNumber": 330000,
        "pricingKind": "fixed",
        "benefits": [
          "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
          "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "홈페이지",
          "DB설계",
          "리포트",
          "브랜딩",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 응답, 페르소나, 빌더, 홈페이지, RAG, 검색, 분석, 리포트, 전화"
      },
      {
        "id": 1425,
        "name": "AskMind 시장 검증 AI",
        "summary": "AskMind로 만든 AI와 잠재 고객 사이의 대화 데이터를 자동으로 수집해, 매주 월요일 주간 리포트를 이메일로 발송합니다. 리포트에는 가장 많이 받은 질문 TOP 10, 긍정·부정 반응 비율, 전주 대비 변화, 개선 제안이 포함되며, 2개월 후 오디션 제출용 종합 PDF가 그래프와 수치 형태로 자동 생성됩니다.",
        "website": "https://modu.askmind.ai/",
        "keywords": [
          "AI",
          "검증",
          "고객분석",
          "데이터",
          "리포트",
          "설문",
          "시장조사",
          "오디션",
          "창업",
          "피치덱"
        ],
        "priceText": [
          "2개월 지불 이후 최종단계까지 수정 외 추가 비용 없음/분납 가능 / 월 구독 / 330,000원"
        ],
        "priceNumber": 330000,
        "pricingKind": "fixed",
        "benefits": [
          "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
          "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "시장/수요조사",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "홈페이지",
          "DB설계",
          "시장조사",
          "리포트",
          "브랜딩",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 설문, 응답, 시장조사, 페르소나, 빌더, 홈페이지, RAG, 검색, 분석"
      },
      {
        "id": 1426,
        "name": "AskMind 랜딩 페이지 AI 빌더",
        "summary": "원하는 홈페이지의 콘셉트를 입력하면 AI 상담원이 기본 내장된 홈페이지·웹앱이 자동 생성되고, 예시) user123.askmind.ai 형태의 무료 서브도메인이 발급됩니다. 모바일 반응형 디자인과 PWA가 기본 적용되어 스마트폰 홈 화면에 앱 아이콘으로 추가할 수 있으며, 방문자는 사이트 접속 즉시 AI 상담원과 대화를 시작합니다.",
        "website": "https://modu.askmind.ai/",
        "keywords": [
          "AI",
          "노코드",
          "도메인",
          "랜딩",
          "모바일",
          "웹사이트",
          "웹앱",
          "창업",
          "챗봇",
          "홈페이지"
        ],
        "priceText": [
          "2개월 지불 이후 수정 외 별도 비용 없음/분납 가능 / 월 구독 / 550,000원"
        ],
        "priceNumber": 550000,
        "pricingKind": "fixed",
        "benefits": [
          "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
          "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "DB설계",
          "리포트",
          "브랜딩",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 응답, 페르소나, 노코드, 빌더, 랜딩, 홈페이지, RAG, 검색, 분석"
      },
      {
        "id": 1469,
        "name": "AI 챗봇 + 고객 반응 데이터 + 홈페이지까지",
        "summary": "[1] AI 빌더 / [2] 고객 응대 AI / [3] 교육 AI 튜터 중 창업 아이디어에 맞는 1개를 선택하면, [4] 시장 검증 AI와 [5] 랜딩 페이지 AI 빌더가 자동 포함되는 통합 패키지입니다. 대화형 AI 생성으로 아이디어를 검증하고, 고객 반응 데이터로 오디션 증거를 확보하며, AI 상담원 내장 홈페이지까지 함께 구축됩니다. 모든 솔루션의 URL·API 방식이 기본 포함되며,",
        "website": "https://modu.askmind.ai/",
        "keywords": [
          "AI",
          "노코드",
          "모두의창업",
          "오디션",
          "올인원",
          "창업",
          "챗봇",
          "패키지",
          "홈페이지"
        ],
        "priceText": [
          "2개월 지불 이후 수정 외 추가 월정액 없음 /분납 가능 / 월 구독 / 770,000원"
        ],
        "priceNumber": 770000,
        "pricingKind": "fixed",
        "benefits": [
          "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
          "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "DB설계",
          "리포트",
          "브랜딩",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 응답, 페르소나, 노코드, 빌더, 랜딩, 홈페이지, RAG, 검색, 분석"
      },
      {
        "id": 1470,
        "name": "AskMind AI 플랫폼 빌더",
        "summary": "말하면 끝, 내 브랜드 AI 플랫폼이 2개월 안에 완성",
        "website": "https://modu.askmind.ai/",
        "keywords": [
          "AI",
          "노코드",
          "데모",
          "브랜드",
          "시연",
          "창업",
          "챗봇",
          "플랫폼",
          "홈페이지"
        ],
        "priceText": [
          "2개월간 지불 이후 수정 외 추가 비용 없음 / 월 구독 / 770,000원"
        ],
        "priceNumber": 770000,
        "pricingKind": "fixed",
        "benefits": [
          "만든 AI, 외부 사이트·카톡·앱에 API로 바로 연결 가능: API 발급 가능 — 만든 AI를 내 홈페이지·카카오톡·네이버 톡톡·앱 어디든 가져다 쓸 수 있어요",
          "무료 견적 상담: 전화, 이메일, 메세지 상담을 통해 원하는 ai 플랫폼에 대해 구체적으로 설계할 수 있어요"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "홈페이지",
          "노코드",
          "DB설계",
          "리포트",
          "브랜딩",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 응답, 페르소나, 노코드, 빌더, 홈페이지, RAG, 검색, 분석, 리포트"
      }
    ]
  },
  {
    "id": 753,
    "name": "주식회사 여명거리",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191684/0741cb7a09cc412ba422f4f13facee71.webp",
    "summary": "스타트업/소상공인 맞춤형 AI SNS 마케팅 자동화 솔루션 - 쓰레드, 인스타 마케팅 시작은 오토케에서 ! 릴스 영상 제작, 쓰레드 게시글 작성부터 연결된 채널로 자동업로드까지",
    "description": "주식회사 여명거리는 **창업자의 시간을 되찾아주는 AI 스타트업**입니다. **미국 VC로부터 투자**를 유치한 기술 검증 기업입니다. 마케팅과 사업계획서 — 창업자가 가장 많이 시간을 쓰지만, 정작 본업은 아닌 두 가지 일을 AI가 대신 처리합니다. · AutoKe(오토케) — **AI SNS 마케팅 자동화** 중소벤처기업부 스마트상점 기술보급사업 인증 솔루션 콘텐츠 기획부터 발행까지, 손 안 대고 굴러가는 마케팅 누적 120+ 유료 고객사가 검증 · K-Startup AI — **AI 사업계획서 자동화** 정부지원사업·IR에 맞는 사업계획서를 AI가 초안부터 작성 창업자는 본업에, 나머지는 여명거리에 맡기세요.",
    "website": "https://dawn.kim",
    "email": "iam@dawn.kim",
    "contact": "010-8430-7345",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/753",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "오토케(autoke)",
      "창업지원도움e"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "사업계획서",
      "IR",
      "영상",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "SNS/광고 문구",
      "영상",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "자동화",
    "priceText": [
      "스탠다드 / 월 구독 / 35,900원",
      "월간 플랜 / 월 구독 / 100,000원"
    ],
    "minPrice": 35900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 초기 창업팀",
    "followerCount": 35,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1328,
        "name": "오토케(autoke)",
        "summary": "스타트업/소상공인 맞춤형 AI SNS 마케팅 자동화 솔루션 - 쓰레드, 인스타 마케팅 시작은 오토케에서 ! 릴스 영상 제작, 쓰레드 게시글 작성부터 연결된 채널로 자동업로드까지",
        "website": "",
        "keywords": [
          "AI마케팅",
          "SNS자동화",
          "마케팅자동화",
          "멀티플랫폼",
          "소상공인",
          "스마트상점",
          "인스타그램",
          "콘텐츠생성",
          "콘텐츠스케줄러",
          "페이스북"
        ],
        "priceText": [
          "스탠다드 / 월 구독 / 35,900원"
        ],
        "priceNumber": 35900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "사업계획서",
          "IR",
          "영상",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      },
      {
        "id": 1329,
        "name": "창업지원도움e",
        "summary": "AI 사업계획서 자동 작성 - 복잡한 정부지원사업 사업계획서 작성 도우미, 공식 문서 양식에 맞춰 5분 만에 완성",
        "website": "",
        "keywords": [
          "IR자료",
          "기획서",
          "사업계획서",
          "사업계획서자동",
          "예비창업자",
          "예비창업패키지",
          "정부지원사업",
          "창업컨설팅",
          "컨설팅"
        ],
        "priceText": [
          "월간 플랜 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "SNS/광고 문구",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "사업계획서",
          "IR",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      }
    ]
  },
  {
    "id": 749,
    "name": "주식회사 에이엑스솔루션즈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/167282/a8664520e6f243e992b2c9db2b8e5188.webp",
    "summary": "단 몇 번의 클릭으로 우리 사업에 딱 맞는 고효율 마케팅 콘텐츠를 즉시 생성합니다.",
    "description": "**AX Solutions : Zero to Launch in 60 Minutes.** 에이엑스솔루션즈는 아이디어와 실행 사이의 시차를 제로(0)로 만듭니다. 복잡한 기획의 막막함, 느린 개발 속도라는 병목을 깨고, 비즈니스 현장에 즉시 투입 가능한 AI 솔루션과 초고속 빌드 시스템을 공급합니다. 우리는 기술을 화려하게 포장하기보다, 비즈니스의 속도를 바꾸는 실질적인 프로덕트를 만듭니다. **⚡️ What We Build** **- AX Research** — 아이디어 한 줄로 복잡한 시장 기회와 분석 리포트를 1분 만에 도출하는 AI 비즈니스 인텔리전스 **- AX Marketing Studio** — 리서치된 데이터를 기반으로 고효율 마케팅 콘텐츠와 시각화 자료를 즉시 생산하는 마케팅 자동화 엔진 **- Speed Production** — 기획부터 배포까지, 단 60분 만에 시장 검증용 랜딩페이지를 완성하는 고속 빌드 파이프라인 **🛠️ Our Core Princi",
    "website": "https://www.axsolutions.kr/",
    "email": "dev@axsolutions.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/749",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AX Marketing Studio",
      "AX Research"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "사업계획서/IR"
    ],
    "detailTags": [
      "블로그",
      "SNS 문구",
      "랜딩페이지",
      "시장조사",
      "리포트",
      "영상",
      "이미지",
      "자동화",
      "사업계획서"
    ],
    "techTags": [
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "랜딩페이지",
      "리포트",
      "영상",
      "이미지",
      "자동화",
      "사업계획서",
      "시장/수요조사"
    ],
    "techEvidence": "리서치, 랜딩페이지, 랜딩, 분석, 리포트, 이미지, 숏폼, 자동화, 시장조사, 경쟁사",
    "priceText": [
      "초기 창업자 GTM 전략 패키지 / 월 구독 / 300,000원",
      "초기 창업자를 위한 올인원 리서치 패키지 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE: 회원가입 시 3회 무료"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 블로그, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 23,
    "likeCount": 17,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1320,
        "name": "AX Marketing Studio",
        "summary": "단 몇 번의 클릭으로 우리 사업에 딱 맞는 고효율 마케팅 콘텐츠를 즉시 생성합니다.",
        "website": "https://marketing.solution.it.kr/",
        "keywords": [
          "AI 마케팅",
          "SNS",
          "마케팅",
          "블로그",
          "숏폼",
          "스타트업",
          "이미지"
        ],
        "priceText": [
          "초기 창업자 GTM 전략 패키지 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: 회원가입 시 3회 무료"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "리포트",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "랜딩페이지",
          "시장조사",
          "리포트",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "리서치, 랜딩페이지, 랜딩, 분석, 리포트, 이미지, 숏폼, 자동화"
      },
      {
        "id": 1321,
        "name": "AX Research",
        "summary": "아이디어 한 줄로 시장 규모부터 경생사 분석, 고객 페르소나까지 비즈니스 리서치를 1분만에 완성합니다.",
        "website": "https://research.solution.it.kr/",
        "keywords": [
          "경쟁사분석",
          "계획서",
          "기획서",
          "사업계획서",
          "시장조사",
          "타겟페르소나",
          "타켓"
        ],
        "priceText": [
          "초기 창업자를 위한 올인원 리서치 패키지 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: 회원가입 시 3회 무료"
        ],
        "deliverables": [
          "사업계획서",
          "랜딩페이지",
          "시장/수요조사",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "랜딩페이지",
          "시장조사",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "시장조사, 리서치, 경쟁사, 페르소나, 시장 규모, 랜딩페이지, 랜딩, 분석, 리포트, 자동화"
      }
    ]
  },
  {
    "id": 829,
    "name": "커뮤니티원",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/154733/a3f0fdf76a0e40e89c8be5871182eea1.png",
    "summary": "멘토 1명 의견만으로는 확신이 안 서시죠? 50명의 현업 전문가 — VC 심사역, 엑싯 창업자, 정부지원사업 심사위원, CTO — 의 피드백을 학습한 AI가 내 자료를 동시에 교차 평가합니다. 최대 5명이 각자의 관점에서 등급과 구체적 보완점을 한 번에 제공합니다.",
    "description": "커뮤니티원은 2025년 6월 설립된 기술 기반 스타트업으로, \"전문가 수준의 AI를, 누구나 쉽게\"를 원칙으로 각 도메인의 복잡한 전문 지식을 깊이 이해하고 AI로 풀어내어, 비전문가도 바로 활용할 수 있는 서비스 환경을 만들고 있습니다. **[제공 서비스]** **LOGICAL AI** 분석 → 리서치 → 전략, AI가 3단계로 완성하는 비즈니스 리포트 **50인의 평가단** 50명의 현업 전문가를 학습한 AI가 사업계획서를 동시에 교차 평가하고, 등급과 구체적 보완점을 제공하는 AI 평가 플랫폼 **아파트 커뮤니티 AI OS** 폐쇄형 공간(아파트)에서의 운영 데이터를 활용하여 고객(입주민) 맞춤형 서비스 제공. SaaS + 콘텐츠 공급 / 데이터 기반 전문 위탁 브랜드 론칭 진행중 **반영구 뷰티 AI 보정 서비스** AI를 활용해 시술 부위를 제외한 얼굴의 섬세한 보정 서비스를 제공",
    "website": "https://www.50judges.co.kr/",
    "email": "3cafe@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/829",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "50인의 평가단",
      "LOGICAL"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "피드백",
      "시장조사",
      "리포트",
      "브랜딩",
      "컨설팅"
    ],
    "techTags": [
      "시장조사/리서치",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "사업계획서",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "리서치, 분석, 리포트",
    "priceText": [
      "피드백 월 300회 지원 / 유/무료 혼합 / 149,000원",
      "유료 플랜 / 유/무료 혼합 / 250,000원"
    ],
    "minPrice": 149000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, 리포트 근거가 필요한 초기 창업팀",
    "followerCount": 29,
    "likeCount": 10,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1429,
        "name": "50인의 평가단",
        "summary": "멘토 1명 의견만으로는 확신이 안 서시죠? 50명의 현업 전문가 — VC 심사역, 엑싯 창업자, 정부지원사업 심사위원, CTO — 의 피드백을 학습한 AI가 내 자료를 동시에 교차 평가합니다. 최대 5명이 각자의 관점에서 등급과 구체적 보완점을 한 번에 제공합니다.",
        "website": "https://www.50judges.co.kr/",
        "keywords": [
          "문서 분석",
          "전문가 피드백"
        ],
        "priceText": [
          "피드백 월 300회 지원 / 유/무료 혼합 / 149,000원"
        ],
        "priceNumber": 149000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "피드백",
          "시장조사",
          "리포트",
          "브랜딩",
          "컨설팅"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "리서치, 분석, 리포트"
      },
      {
        "id": 1430,
        "name": "LOGICAL",
        "summary": "AI가 3단계로 완성하는 비지니스 리포트 : 분석 → 리서치 → 전략, AI가 3단계로 완성하는 비즈니스 리포트",
        "website": "https://logical-ai.app",
        "keywords": [
          "딥 리서치",
          "비즈니스 리포트",
          "시장 조사",
          "아이템 분석",
          "전략 수립"
        ],
        "priceText": [
          "유료 플랜 / 유/무료 혼합 / 250,000원"
        ],
        "priceNumber": 250000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "리포트"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "시장조사",
          "리포트",
          "브랜딩"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "리서치, 분석, 리포트"
      }
    ]
  },
  {
    "id": 608,
    "name": "레페토에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/117029/120baff0e9a64ceeaa69ef9e9f450301.jpg",
    "summary": "콘텐츠 자동 출판화 AI 플랫폼 : 인터뷰 1시간이면, 우리 회사의 이야기가 출판 수준의 콘텐츠가 됩니다 - AI 자동 출판 플랫폼",
    "description": "**레페토에이아이(Repeto AI) - 콘텐츠 자동 출판화 AI 플랫폼** **레페토에이아이는 인터뷰·강연·영상·외국어 문서 등 모든 비정형 원자료를 출판 품질의 완성 원고로 자동 변환하는 AI 글쓰기 솔루션 기업입니다.** 출판 산업의 높은 진입장벽과 비효율적인 제작 프로세스를 AI 기술로 해결하여, 누구나 자신의 이야기와 지식을 책·콘텐츠로 발행할 수 있는 시대를 열어가고 있습니다. **핵심 솔루션과 기능** 레페토AI는 텍스트 직접 입력 또는 문서 파일 업로드만으로 작동합니다. AI가 문맥을 분석해 구어체·비정형 내용을 가독성 높은 문어체 서술 구조로 재구성하고, 자서전·보고서·아카이브·기사 등 목적에 맞는 출판 원고로 완성합니다. 추가 프롬프트를 통해 톤앤매너, 분량, 형식까지 세밀하게 조정할 수 있어, 전문 편집자나 카피라이터 없이도 기업·기관 수준의 콘텐츠 제작이 가능합니다. 외국어 원문 역시 한국어 출판물로 자연스럽게 변환합니다. **창업 기업이 자기 비즈니스·",
    "website": "https://repetoai.allthatai.io",
    "email": "woong@repetoai.com",
    "contact": "010-4889-3641",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/608",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Repeto AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "피드백",
      "리포트",
      "영상",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "리포트",
      "영상",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "분석, 리포트, 보고서, 자동화",
    "priceText": [
      "Repeto AI Standard / 월 구독 / 39,000원"
    ],
    "minPrice": 39000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 가입만 하면 간단한 글 편집은 무료로 가능"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 리포트 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 30,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1120,
        "name": "Repeto AI",
        "summary": "콘텐츠 자동 출판화 AI 플랫폼 : 인터뷰 1시간이면, 우리 회사의 이야기가 출판 수준의 콘텐츠가 됩니다 - AI 자동 출판 플랫폼",
        "website": "https://www.youtube.com/watch?v=R3c08HYuei0",
        "keywords": [
          "AI 글쓰기",
          "AI 콘텐츠 자동화",
          "AI저술엔진",
          "강의 콘텐츠화",
          "녹취록 변환",
          "출판"
        ],
        "priceText": [
          "Repeto AI Standard / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 가입만 하면 간단한 글 편집은 무료로 가능"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "리포트",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "피드백",
          "리포트",
          "영상",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 리포트, 보고서, 자동화"
      }
    ]
  },
  {
    "id": 647,
    "name": "엘제이노아 유한회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/192735/81cb711127264b7782ced16659116051.png",
    "summary": "AI 답변에 브랜드가 더 잘 노출되도록 돕는 AEO/GEO 콘텐츠 자동화 플랫폼",
    "description": "AI 기반 마케팅 자동화와 콘텐츠 최적화 솔루션을 개발하는 기업입니다. 대표 플랫폼 넥스트몽은 기업과 브랜드가 AI 검색 및 답변형 검색 환경에서 더 잘 노출될 수 있도록 AEO·GEO 분석, 콘텐츠 최적화, 자동 발행, 성과 측정 기능을 제공합니다. 변화하는 검색 환경에 맞춰 소상공인, 스타트업, 기업이 보다 효율적으로 디지털 마케팅을 운영할 수 있도록 지원합니다.",
    "website": "https://nextmong.com/",
    "email": "ljnoah@ljnoah.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/647",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "NextMong 넥스트몽"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "피드백",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "리포트",
      "자동화"
    ],
    "techEvidence": "검색, 분석, 자동화",
    "priceText": [
      "600 / CREDIT_TOKEN / 490,000원"
    ],
    "minPrice": 490000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free 플랜: 브랜드 기본 분석을 체험할 수 있는 무료 플랜입니다. 8토큰을 제공하여 AEO/GEO 관점의 기본 진단과 AI 검색 노출 가능성을 확인할 수 있습니다."
    ],
    "recommendation": "RAG/지식검색, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 NextMong 넥스트몽 같은 서비스가 필요한 팀",
    "followerCount": 18,
    "likeCount": 19,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1176,
        "name": "NextMong 넥스트몽",
        "summary": "AI 답변에 브랜드가 더 잘 노출되도록 돕는 AEO/GEO 콘텐츠 자동화 플랫폼",
        "website": "https://nextmong.com/",
        "keywords": [
          "AEO",
          "AI검색최적화",
          "AI마케팅",
          "AI콘텐츠",
          "GEO",
          "SEO",
          "답변엔진최적화",
          "브랜드분석",
          "생성엔진최적화",
          "콘텐츠자동화"
        ],
        "priceText": [
          "600 / CREDIT_TOKEN / 490,000원"
        ],
        "priceNumber": 490000,
        "pricingKind": "usage",
        "benefits": [
          "Free 플랜: 브랜드 기본 분석을 체험할 수 있는 무료 플랜입니다. 8토큰을 제공하여 AEO/GEO 관점의 기본 진단과 AI 검색 노출 가능성을 확인할 수 있습니다."
        ],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "피드백",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "검색, 분석, 자동화"
      }
    ]
  },
  {
    "id": 711,
    "name": "가나다보다 쉬운 AI 문서 자동화, EZ Approve",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188356/cccd4c368b144892a6460d0d9a713cb5.png",
    "summary": "EZ Approve AI는 모두의 창업, 예비창업패키지, 초기창업패키지, TIPS, 창구 프로그램 선정자를 위한 AI 문서·과제 준비 비서입니다",
    "description": "## **안녕하세요, 창업자여러분!** **블루버스는 정부지원사업 창업자를 위한 AI 업무 도우미 'EZ-Approve'를 만드는 회사예요.** 정부지원사업에 선정되면 기쁨도 잠시, 곧 일이 쏟아져요. 발표 자료에 멘토링 준비, 사업비 증빙, 중간·최종 보고서까지. 정작 집중해야 할 제품과 고객은 자꾸 뒤로 밀리죠. 블루버스는 이 행정 부담을 덜어드리려고 EZ-Approve를 만들었어요. ### **☑ 대표 솔루션 EZ-Approve** EZ-Approve는 선정 이후의 일을 한 줄기로 정리해 주는 AI 업무 도우미예요. 진행 중인 사업을 고르면, AI가 보고서에 꼭 필요한 것만 짧게 묻고 팀이 바로 손볼 수 있는 초안과 체크리스트를 만들어 드려요. 발표·멘토링·보고 일정은 한 화면에서 챙기고, 제출 직전엔 빠진 증빙까지 한 번 더 짚어드리고요. 모두의 창업을 시작으로 예비창업패키지, 초기창업패키지, TIPS, 창구 프로그램까지 사업에 맞춰 차근차근 넓혀가요. 대신 넘지",
    "website": "https://ez-approve.com/",
    "email": "info@blueverse.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/711",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "EZ-Approve"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "발표자료",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 보고서, 자동화",
    "priceText": [
      "PRO 기준 / 유/무료 혼합 / 59,800원"
    ],
    "minPrice": 59800,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "AI 에이전트, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 EZ-Approve 같은 서비스가 필요한 팀",
    "followerCount": 20,
    "likeCount": 15,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1265,
        "name": "EZ-Approve",
        "summary": "EZ Approve AI는 모두의 창업, 예비창업패키지, 초기창업패키지, TIPS, 창구 프로그램 선정자를 위한 AI 문서·과제 준비 비서입니다",
        "website": "https://ez-approve.com/",
        "keywords": [
          "AI",
          "IR자료",
          "마케팅",
          "백오피스",
          "보고서",
          "사업계획서",
          "자동화",
          "정부지원사업",
          "챗지피티",
          "클로드"
        ],
        "priceText": [
          "PRO 기준 / 유/무료 혼합 / 59,800원"
        ],
        "priceNumber": 59800,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 보고서, 자동화"
      }
    ]
  },
  {
    "id": 709,
    "name": "주식회사 브이유컴퍼니",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/167009/076102d269b14b1da9f8ced71a41eb7b.png",
    "summary": "APG.AI는 전통적인 광고 제작의 고비용·저효율 문제를 해결하여 , K-뷰티 및 이커머스 기업이 저렴하고 편리하게 상업용 광고 콘텐츠를 즉시 생성할 수 있도록 지원하는 국내 감성 맞춤형 생성형 AI 종합 플랫폼입니다.",
    "description": "**주식회사 브이유컴퍼니** **■ 기업 비전 및 핵심 가치** **\"생성형 AI 기술을 통한 이커머스 비주얼 혁신과 마케팅 생산성 극대화\"** 주식회사 브이유컴퍼니는 무분별한 기술의 나열이 아닌, 실제 상업적으로 즉시 매출을 견인할 수 있는 가장 고도화된 K-비주얼 AI 솔루션을 제공합니다. **1. 추진 배경 및 시장의 문제점** 현재 뷰티 및 이커머스 산업에서 고감도 화보와 영상 등의 시각 콘텐츠는 소비자의 구매 결정을 좌우하는 가장 강력한 요소입니다. 하지만 대다수의 중소 브랜드는 트렌드 변화에 맞춰 폭발하는 콘텐츠 수요를 감당하지 못해 성장에서 심각한 병목 현상을 겪고 있습니다. - **전통적인 제작 방식의 한계:** 모델 섭외, 초상권 및 기간 제한 계약, 전문 촬영팀 소집, 스튜디오 대관 등으로 인해 단 한 번의 촬영에도 수백에서 수천만 원의 막대한 비용과 수일 이상의 시간이 소모됩니다. - **비정상적인 예산 구조:** 이로 인해 중소 K-뷰티 기업은 전체 예",
    "website": "https://vucompany.kr/",
    "email": "vucompany@vucompany.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/709",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "광고소재 제작에 활용할 수 있는 생성형 AI 플랫폼"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "브랜딩",
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지"
    ],
    "techEvidence": "생성형, AI 모델, 이미지 생성, 이미지, 비디오, API",
    "priceText": [
      "스타터 / 월 구독 / 9,900원"
    ],
    "minPrice": 9900,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 영상 근거가 필요한 초기 창업팀",
    "followerCount": 12,
    "likeCount": 20,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1263,
        "name": "광고소재 제작에 활용할 수 있는 생성형 AI 플랫폼",
        "summary": "APG.AI는 전통적인 광고 제작의 고비용·저효율 문제를 해결하여 , K-뷰티 및 이커머스 기업이 저렴하고 편리하게 상업용 광고 콘텐츠를 즉시 생성할 수 있도록 지원하는 국내 감성 맞춤형 생성형 AI 종합 플랫폼입니다.",
        "website": "",
        "keywords": [
          "LoRA",
          "광고소재",
          "비용절감",
          "생성형AI",
          "콘텐츠",
          "플랫폼"
        ],
        "priceText": [
          "스타터 / 월 구독 / 9,900원"
        ],
        "priceNumber": 9900,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "브랜딩",
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, AI 모델, 이미지 생성, 이미지, 비디오, API"
      }
    ]
  },
  {
    "id": 757,
    "name": "아이디어 고객 검증 솔루션 - 와로컬AI",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188547/c021a55f875b4bc994ef380e835d6ec3.jpg",
    "summary": "아이디어의 시장성을 즉시 증명하는 데이터 기반 고객 검증 SaaS 솔루션 - AI 고객(가상 고객 설정)을 통해 제품과 서비스의 판매량 예측과 시장 반응 확인을 할 수 있습니다.",
    "description": "주식회사 와로는 2019년 설립된 인증 사회적기업으로 로컬 창업가 육성 및 발굴, 교육 전문 회사입니다. 고객 검증 솔루션을 기반으로 실행 기반 창업 교육 및 솔루션의 선두자 입니다. Web/App, 비즈니스 솔루션 등 다양한 개발 프로젝트도 수행해왔습니다. **\"아이디어의 시장성을 즉시 증명합니다.\"** 주식회사 와로는 예비·초기 창업자들이 겪는 타겟 고객 정의와 시장 반응 확인의 어려움을 해결하기 위해 탄생했습니다. 직관이나 추측이 아닌, 실제 데이터에 기반한 고객 검증 솔루션 '와로컬 AI(Walocal AI)'를 통해 사업의 실패 리스크를 줄이고 성공적인 시장 안착을 돕습니다. **-사명:** 주식회사 와로 **-솔루션 명:** 와로컬 AI (Walocal AI) **-핵심 가치:** 데이터 기반 시장성 증명, 리스크 절감, 의사결정 가속화 와로컬 AI는 가상 고객 시뮬레이션과 실제 설문 기반 분석을 결합한 **고객 검증 SaaS**입니다. ① AI 페르소나 판",
    "website": "https://walocal.space/",
    "email": "waro1004@naver.com",
    "contact": "010-4047-0017",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/757",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "와로컬AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "피드백",
      "홈페이지",
      "MVP",
      "시장조사",
      "리포트",
      "자동화",
      "교육"
    ],
    "techTags": [
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "패널 리서치",
      "설문/서베이",
      "시장조사/리서치",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "리포트",
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, AI 고객, FGI 시뮬레이션, 판매량 예측, 시뮬레이션, 응답자, 설문, Kano, 응답",
    "priceText": [
      "550크레딧 / CREDIT_TOKEN / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Kano 모델 설문 도구: 키워드만 입력하면 자동으로 설문이 생성되고, 품질 요소를 분석하여 우선순위를 결정할 수 있습니다.",
      "판매량/매출 시뮬레이션: 실제 FGI나 설문조사 없이도 다양한 페르소나의 AI 에이전트로 시장 반응을 즉시 확인할 수 있습니다.",
      "FGI 시뮬레이션: 실제 포커스 그룹 없이도 다양한 페르소나의 AI 에이전트가 인터뷰에 참여해 심층 의견과 니즈를 분석해드립니다."
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 23,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1336,
        "name": "와로컬AI",
        "summary": "아이디어의 시장성을 즉시 증명하는 데이터 기반 고객 검증 SaaS 솔루션 - AI 고객(가상 고객 설정)을 통해 제품과 서비스의 판매량 예측과 시장 반응 확인을 할 수 있습니다.",
        "website": "https://walocal.space/page/validator",
        "keywords": [
          "검증",
          "고객검증",
          "고객인터뷰",
          "고객조사",
          "솔루션검증",
          "시장조사",
          "아이디어검증",
          "주식회사와로",
          "판매량예측",
          "품질조사"
        ],
        "priceText": [
          "550크레딧 / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "Kano 모델 설문 도구: 키워드만 입력하면 자동으로 설문이 생성되고, 품질 요소를 분석하여 우선순위를 결정할 수 있습니다.",
          "판매량/매출 시뮬레이션: 실제 FGI나 설문조사 없이도 다양한 페르소나의 AI 에이전트로 시장 반응을 즉시 확인할 수 있습니다.",
          "FGI 시뮬레이션: 실제 포커스 그룹 없이도 다양한 페르소나의 AI 에이전트가 인터뷰에 참여해 심층 의견과 니즈를 분석해드립니다."
        ],
        "deliverables": [
          "사업계획서",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "피드백",
          "홈페이지",
          "MVP",
          "시장조사",
          "리포트",
          "자동화",
          "교육"
        ],
        "techTags": [
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "패널 리서치",
          "설문/서베이",
          "시장조사/리서치",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, AI 고객, FGI 시뮬레이션, 판매량 예측, 시뮬레이션, 응답자, 설문, Kano, 응답, 시장조사, 페르소나"
      }
    ]
  },
  {
    "id": 691,
    "name": "주식회사 레비오사에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186999/c31d4ac2e790430c99617b5a1cc81016.png",
    "summary": "셀러를 위한 AI 기반 고객응대 및 마케팅 콘텐츠 제작 플랫폼 - 몇 번으로 카드뉴스 형태의 마케팅 콘텐츠를 제작. AI 고객응대 자동화",
    "description": "레비오사 AI는 소상공인 및 온라인 셀러의 운영 부담을 줄이고 매출 성장을 지원하기 위해 개발된 AI 기반 커머스 운영 지원 플랫폼입니다.",
    "website": "https://leviosa.ai.kr",
    "email": "leviosa_ai@naver.com",
    "contact": "010-8737-6022",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/691",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "레비오사 AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "카드뉴스",
      "광고",
      "자동화"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "업무 자동화/API"
    ],
    "deliverables": [
      "카드뉴스",
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "AI 고객, 자동화",
    "priceText": [
      "Light 요금제 / 월 구독 / 29,900원"
    ],
    "minPrice": 29900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 요금제: 회원가입만 해도 레비오사AI의 기능들을 체험해 볼 수 있도록 500 크레딧 제공해 드립니다!"
    ],
    "recommendation": "가상고객/시뮬레이션, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 레비오사 AI 같은 서비스가 필요한 팀",
    "followerCount": 12,
    "likeCount": 19,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1239,
        "name": "레비오사 AI",
        "summary": "셀러를 위한 AI 기반 고객응대 및 마케팅 콘텐츠 제작 플랫폼 - 몇 번으로 카드뉴스 형태의 마케팅 콘텐츠를 제작. AI 고객응대 자동화",
        "website": "https://blog.naver.com/leviosa_ai",
        "keywords": [
          "AI",
          "CS",
          "광고",
          "마케팅",
          "인스타",
          "자동화",
          "챗봇",
          "카드뉴스",
          "콘텐츠",
          "홍보"
        ],
        "priceText": [
          "Light 요금제 / 월 구독 / 29,900원"
        ],
        "priceNumber": 29900,
        "pricingKind": "fixed",
        "benefits": [
          "Free 요금제: 회원가입만 해도 레비오사AI의 기능들을 체험해 볼 수 있도록 500 크레딧 제공해 드립니다!"
        ],
        "deliverables": [
          "카드뉴스",
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "카드뉴스",
          "광고",
          "자동화"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 고객, 자동화"
      }
    ]
  },
  {
    "id": 666,
    "name": "주식회사 그랜터",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186742/e44e214c3f5744d08db8347694a860c4.png",
    "summary": "AI 초개인화 재무회계 자동화 서비스 - 기장·결재·급여·근태를 하나로 묶은 AI 회계 자동화 서비스 + 전 서비스 API 제공",
    "description": "주식회사 그랜터(Granter)는 한국 중소기업과 소상공인을 위한 AI 기반 재무회계·HR 통합 자동화 플랫폼을 운영하는 B2B SaaS 기업입니다. 회계장부 작성, 부가세·종합소득세 신고 보조, 전자결재, 급여, 근태관리 등 기업 백오피스 운영의 모든 영역을 단일 플랫폼에서 자동화합니다. 자체 개발한 113개 머신러닝 모델과 6개 LLM 에이전트를 기반으로, 거래 데이터를 실시간 분석하여 적절한 계정과목으로 자동 분류하며, 사용할수록 정확도가 향상되는 데이터 플라이휠 구조를 갖추고 있습니다. 또한 풀 기능 REST API와 CLI를 제공하여, 외부 AI 에이전트가 그랜터의 회계·HR 기능을 직접 호출할 수 있는 'AI 네이티브 백오피스 인프라'를 지향합니다. 현재 1,160여 개 법인이 그랜터를 유료로 이용 중이며, 네오위즈, 채널코퍼레이션 등의 엔터프라이즈 고객사를 보유하고 있습니다. Primer, Strong Ventures, Utagon Venture Partners로부터",
    "website": "https://granter.biz/",
    "email": "youngin1.lee@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/666",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "그랜터 (Granter)",
      "그랜터 AX"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "LLM, AI 에이전트, 에이전트, 분석, 자동화, API, 인프라",
    "priceText": [
      "스탠다드 / 월 구독 / 39,000원"
    ],
    "minPrice": 39000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 그랜터 (Granter) 같은 서비스가 필요한 팀",
    "followerCount": 19,
    "likeCount": 12,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1202,
        "name": "그랜터 (Granter)",
        "summary": "AI 초개인화 재무회계 자동화 서비스 - 기장·결재·급여·근태를 하나로 묶은 AI 회계 자동화 서비스 + 전 서비스 API 제공",
        "website": "https://granter.biz/",
        "keywords": [
          "AI회계",
          "LLM에이전트",
          "근태관리",
          "급여관리",
          "기장자동화",
          "백오피스SaaS",
          "부가세신고",
          "재무자동화",
          "전자결재",
          "중소기업"
        ],
        "priceText": [
          "스탠다드 / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 분석, 자동화, API, 인프라"
      },
      {
        "id": 1203,
        "name": "그랜터 AX",
        "summary": "(Agent eXperience) API & MCP",
        "website": "",
        "keywords": [],
        "priceText": [],
        "priceNumber": null,
        "pricingKind": "unknown",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 분석, 자동화, API, 인프라"
      }
    ]
  },
  {
    "id": 800,
    "name": "주식회사 패딧(Faddit)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186538/66b3dfefa4e64c709099cc91f45d2c96.png",
    "summary": "AI 기반 패션 디자인·생산 자동화 SaaS — 작업지시서, 도식화, 의류 CAD를 하나로 연결해 디자인부터 생산까지 효율화하는 올인원 협업 플랫폼",
    "description": "**👕 회사 소개** 패션 상품 제작 솔루션 “패션 디자인 에디터”의 약자 입니다. 패션 상품을 더 쉽게 제작할 수 있도록 돕는 **패션 제작 올인원 도구**예요. **디자인 스케치부터 도식화, 원단 정리, 작업지시서 작성, 생산 의뢰**까지 복잡한 제작 과정을 한 곳에서 정리하고 공유할 수 있게 도와줘요. 👏 **모두의 창업 1라운드에 통과하신 분들, 진심으로 축하드립니다!** 브랜드를 시작한다는 건 단순히 아이디어를 내는 것에서 끝나지 않고, 그 아이디어를 실제 제품으로 만들고 시장에 보여주는 과정까지 이어져야 하죠. 패딧은 **나만의 브랜드 옷을 직접 만들고 싶은 창업가분들**이 조금 더 쉽게 제작을 시작할 수 있도록 돕는 **패션 디자인**·**제작 SaaS 플랫폼**을 만들고 있습니다. ## **✨ 패딧을 쓰면 이런 점이 좋아요** **👕 의류 도식화 템플릿** 자켓, 셔츠, 팬츠, 원피스처럼 자주 쓰는 옷 도식화 3600개가 미리 준비돼 있어요.",
    "website": "https://faddit.co.kr",
    "email": "ceo@faddit.co.kr",
    "contact": "02-3394-6141",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/800",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Faddit (패딧)"
    ],
    "majorTags": [
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "피드백",
      "브랜딩",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "이미지 생성",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "이미지",
      "자동화"
    ],
    "techEvidence": "시뮬레이션, 이미지 생성, 이미지, 자동화, 인프라",
    "priceText": [
      "비즈니스 / 유/무료 혼합 / 149,000원"
    ],
    "minPrice": 149000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "비즈니스: ai 이미지 생성 토큰 제공"
    ],
    "recommendation": "가상고객/시뮬레이션, 이미지 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Faddit (패딧) 같은 서비스가 필요한 팀",
    "followerCount": 21,
    "likeCount": 9,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1388,
        "name": "Faddit (패딧)",
        "summary": "AI 기반 패션 디자인·생산 자동화 SaaS — 작업지시서, 도식화, 의류 CAD를 하나로 연결해 디자인부터 생산까지 효율화하는 올인원 협업 플랫폼",
        "website": "",
        "keywords": [
          "cad",
          "saas",
          "동대문종합시장",
          "무료 도식화",
          "생산관리",
          "스마트팩토리",
          "의류",
          "작업지시서",
          "패션",
          "패션테크"
        ],
        "priceText": [
          "비즈니스 / 유/무료 혼합 / 149,000원"
        ],
        "priceNumber": 149000,
        "pricingKind": "fixed",
        "benefits": [
          "비즈니스: ai 이미지 생성 토큰 제공"
        ],
        "deliverables": [
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백",
          "브랜딩",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "시뮬레이션, 이미지 생성, 이미지, 자동화, 인프라"
      }
    ]
  },
  {
    "id": 786,
    "name": "주식회사 클라이(Clayee Co., Ltd.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/209361/dee32ab26e834d5f8f0d34be05b9e25a.png",
    "summary": "스몰 비즈니스 사업자를 위한 올인원 마케팅 솔루션입니다. 사업의 형태를 파악하여 매주 새로운 전략과 분석을 제공하며 Organic marketing 및 컨텐츠 생산을 자동화할 수 있는 에이전틱 마케팅 시스템입니다.",
    "description": "# **만드는 것에서, 알려지는 것까지 — Clayee가 함께합니다** ## \"좋은 제품은 많지만, 세상에 알려지는 제품은 드뭅니다.\" --- ### Clayee는 이 문제에 집중합니다. **반복적인 일은 AI가, 본질적인 가치 창출은 사람이.** 창업가가 제품과 고객에 집중하는 동안, 마케팅이라는 가장 큰 병목을 AI가 대신 굴려주는 환경을 만드는 것이 우리의 목표입니다. --- ### Clayee가 만드는 서비스 **MultiCast (멀티캐스트) — AI 마케팅 자동화 플랫폼** 마케팅 인력이 없어도 괜찮습니다. 브랜드 하나만 정하면 **전략 수립 → 콘텐츠 제작 → 멀티 채널 발행→ 성과 분석** 까지 마케팅 전 과정을 자동화하고, 매주 더 똑똑해집니다. 1인 창업자도, 작은 팀도 — **전담 마케팅팀을 둔 것처럼** 일할 수 있습니다. 제품이 고객을 만나고 성장하기까지 어떤 과정이 필요한지 직접 겪어왔기에, MultiCast를 만들 수 있었습니다.",
    "website": "https://multi-cast.live/",
    "email": "royjang12@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/786",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "멀티캐스트 (Multicast)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "카드뉴스",
      "블로그",
      "SNS 문구",
      "브랜딩",
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "카드뉴스",
      "블로그",
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "분석, 이미지, 숏폼, 자동화",
    "priceText": [
      "기본요금제 / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "카드뉴스, 블로그를 빠르게 만들고 고객 모집을 시작하려는 멀티캐스트 (Multicast) 같은 서비스가 필요한 팀",
    "followerCount": 14,
    "likeCount": 16,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1370,
        "name": "멀티캐스트 (Multicast)",
        "summary": "스몰 비즈니스 사업자를 위한 올인원 마케팅 솔루션입니다. 사업의 형태를 파악하여 매주 새로운 전략과 분석을 제공하며 Organic marketing 및 컨텐츠 생산을 자동화할 수 있는 에이전틱 마케팅 시스템입니다.",
        "website": "https://multi-cast.live/ko/modoo",
        "keywords": [
          "AI",
          "AI agent",
          "Marketing",
          "Organic Marketing",
          "sns",
          "마케팅",
          "스몰비즈니스",
          "올인원"
        ],
        "priceText": [
          "기본요금제 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "카드뉴스",
          "블로그",
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "카드뉴스",
          "블로그",
          "SNS 문구",
          "브랜딩",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 이미지, 숏폼, 자동화"
      }
    ]
  },
  {
    "id": 833,
    "name": "큐밋 (Qmeet)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/200340/e22a91c50c8740479bae8ca372c57869.png",
    "summary": "월 30만원으로 예상 팔로워 500명, 좋아요 100개 이상, 댓글 30개 이상의 SNS 성장 흐름을 만드는 AI 마케팅 서비스",
    "description": "EO 유니콘 하우스, 토스 파운드 등 스타트업 서바이벌 본선 진출 역량을 가지고 있으며, 든든한 지원군이 되어드리겠습니다. 솔루션1. AI 마케팅 솔루션으로 각종 SNS 홍보 솔루션2. AI 기반 SNS 게시물 제작 툴",
    "website": "https://www.useaimarketer.com/",
    "email": "ceo.qmeet@gmail.com",
    "contact": "010-4928-7666",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/833",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AI 마케터 (인스타그램, 유튜브 마케팅)",
      "SNS 게시물 AI 생성기"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "SNS 문구",
      "랜딩페이지",
      "브랜딩",
      "이미지"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "이미지 생성"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "이미지"
    ],
    "techEvidence": "랜딩, 사진",
    "priceText": [
      "AI 마케터 1명 / 월 구독 / 300,000원",
      "베이직 / 월 구독 / 20,000원"
    ],
    "minPrice": 20000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "체험 플랜: 1회 무료"
    ],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 AI 마케터 (인스타그램, 유튜브 마케팅) 같은 서비스가 필요한 팀",
    "followerCount": 22,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1441,
        "name": "AI 마케터 (인스타그램, 유튜브 마케팅)",
        "summary": "월 30만원으로 예상 팔로워 500명, 좋아요 100개 이상, 댓글 30개 이상의 SNS 성장 흐름을 만드는 AI 마케팅 서비스",
        "website": "",
        "keywords": [
          "고객유입",
          "마케팅",
          "브랜딩",
          "유튜브",
          "인스타그램",
          "팔로워"
        ],
        "priceText": [
          "AI 마케터 1명 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "SNS 문구",
          "랜딩페이지",
          "브랜딩"
        ],
        "techTags": [
          "랜딩페이지 빌더"
        ],
        "techEvidence": "랜딩"
      },
      {
        "id": 1440,
        "name": "SNS 게시물 AI 생성기",
        "summary": "상품 사진 한 장만 업로드하면 판매용 SNS 콘텐츠를 1분 만에 완성합니다.",
        "website": "",
        "keywords": [
          "게시물",
          "마케터",
          "마케팅",
          "유튜브",
          "인스타",
          "인스타그램",
          "페이스북"
        ],
        "priceText": [
          "베이직 / 월 구독 / 20,000원"
        ],
        "priceNumber": 20000,
        "pricingKind": "fixed",
        "benefits": [
          "체험 플랜: 1회 무료"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "영상/이미지"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지"
        ],
        "techTags": [
          "이미지 생성"
        ],
        "techEvidence": "사진"
      }
    ]
  },
  {
    "id": 629,
    "name": "뿌릿",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/116415/b6d379c3460d45da8510ae72e96207cf.png",
    "summary": "회사 URL 하나만 입력하면 30초 만에 경쟁사·키워드·채널 전략을 분석해주는 AI 마케팅 전략보고서",
    "description": "뿌릿은 초기 창업자가 마케팅 전문가 없이도 데이터 기반의 마케팅 전략을 세우고 홈페이지와 랜딩페이지를 30초 만에 직접 만들 수 있도록 돕는 AI SaaS 스타트업입니다 현장 창업자들이 가장 어려워하는 두 가지 \"어떤 채널에서 어떻게 알려야 하는가\"와 \"홈페이지를 어떻게 빠르고 저렴하게 만드는가\" 를 직접 해결하기 위해 두 가지 솔루션을 운영하고 있습니다 첫 번째는 '올림(OLLIM) AI 마케팅 전략보고서' — 회사 URL 하나만 입력하면 AI가 30초 안에 비즈니스를 분석하고 경쟁사·키워드·채널 전략·옴니채널 설계·콘텐츠 캘린더까지 자동 생성합니다 마케팅 컨설턴트 비용(회당 200~500만 원) 없이 초기 창업자가 즉시 사용 가능한 AI CMO 역할을 수행합니다 두 번째는 '뿌릿 AI 랜딩페이지 빌더' — 40개 이상 업종 프리셋 중 선택하고 사업 정보만 입력하면 30초안에 시안 3종이 생성되며 채팅으로 실시간 수정·배포까지 한 흐름에 끝납니다 디자인 외주비와 제작",
    "website": "https://ollimmarketing.co.kr",
    "email": "younggle1521@gmail.com",
    "contact": "010-9969-1536",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/629",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "올림 AI 마케팅 전략보고서 — Standard",
      "올림 AI 마케팅 전략보고서 — Pro",
      "뿌릿 AI 랜딩페이지 빌더 — Starter",
      "뿌릿 AI 랜딩페이지 빌더 — Pro"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "데이터/리포트",
      "업무자동화/생산성",
      "MVP/개발",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SEO",
      "광고",
      "랜딩페이지",
      "홈페이지",
      "리포트",
      "브랜딩",
      "자동화",
      "노코드",
      "SNS 문구",
      "교육"
    ],
    "techTags": [
      "시장조사/리서치",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "가상고객/시뮬레이션"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "리포트",
      "자동화"
    ],
    "techEvidence": "경쟁사, 빌더, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 보고서, API, 시뮬레이션",
    "priceText": [
      "Standard / 월 구독 / 99,000원",
      "pro / 월 구독 / 328,900원",
      "Starter / 월 구독 / 60,500원",
      "pro / 월 구독 / 108,900원"
    ],
    "minPrice": 60500,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 올림 AI 마케팅 전략보고서 — Standard 같은 서비스가 필요한 팀",
    "followerCount": 18,
    "likeCount": 12,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1143,
        "name": "올림 AI 마케팅 전략보고서 — Standard",
        "summary": "회사 URL 하나만 입력하면 30초 만에 경쟁사·키워드·채널 전략을 분석해주는 AI 마케팅 전략보고서",
        "website": "",
        "keywords": [
          "AI마케팅전략",
          "URL분석",
          "경쟁사분석",
          "마케팅",
          "마케팅전략",
          "상권분석",
          "채널전략",
          "초기창업자",
          "키워드추천",
          "트렌드분석"
        ],
        "priceText": [
          "Standard / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "광고",
          "랜딩페이지",
          "홈페이지",
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "경쟁사, 빌더, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 보고서, API"
      },
      {
        "id": 1144,
        "name": "올림 AI 마케팅 전략보고서 — Pro",
        "summary": "옴니채널 전략 + 2개월 콘텐츠 캘린더 + 광고 예산 시뮬레이션 + AI 콘텐츠 작성까지 한 번에, 초기 창업자를 위한 AI CMO",
        "website": "",
        "keywords": [
          "AICMO",
          "AI콘텐츠",
          "ROI예측",
          "고객페르소나",
          "광고예산",
          "마케팅자동화",
          "브랜딩가이드",
          "옴니채널전략",
          "초기창업",
          "콘텐츠캘린더"
        ],
        "priceText": [
          "pro / 월 구독 / 328,900원"
        ],
        "priceNumber": 328900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "광고",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "시뮬레이션, 경쟁사, 페르소나, 빌더, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 보고서, 자동화, API"
      },
      {
        "id": 1145,
        "name": "뿌릿 AI 랜딩페이지 빌더 — Starter",
        "summary": "업종과 사업 설명만 입력하면 AI가 30초 만에 프로급 랜딩페이지를 자동 생성, 채팅으로 수정·원클릭 배포",
        "website": "",
        "keywords": [
          "40업종프리셋",
          "Imagen",
          "네이버SEO",
          "노코드",
          "랜딩페이지",
          "원클릭배포",
          "채팅수정",
          "초기창업홈페이지",
          "카카오공유",
          "홈페이지자동생성"
        ],
        "priceText": [
          "Starter / 월 구독 / 60,500원"
        ],
        "priceNumber": 60500,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "광고",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "경쟁사, 노코드, 빌더, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 보고서, API"
      },
      {
        "id": 1146,
        "name": "뿌릿 AI 랜딩페이지 빌더 — Pro",
        "summary": "월 5개 랜딩페이지 + 네이버 SEO·카카오 연동 + 방문자 분석까지, 본격 마케팅 단계 창업자를 위한 플랜",
        "website": "",
        "keywords": [
          "광고전환",
          "네이버SEO",
          "노코드",
          "랜딩페이지",
          "방문자분석",
          "시즌프로모션",
          "업종맞춤",
          "워터마크제거",
          "이벤트페이지",
          "카카오공유"
        ],
        "priceText": [
          "pro / 월 구독 / 108,900원"
        ],
        "priceNumber": 108900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "경쟁사, 노코드, 빌더, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 보고서, API, 연동"
      },
      {
        "id": 1147,
        "name": "뿌릿 AI 랜딩페이지 빌더 — Business",
        "summary": "무제한 랜딩페이지 + 커스텀 도메인 + 상세 방문자 분석 + 올림 마케팅 전략 연계, 다브랜드·다지점용 최상위 플랜",
        "website": "",
        "keywords": [
          "다지점",
          "무제한랜딩",
          "브랜드통합",
          "상세전환분석",
          "에이전시",
          "온라인교육",
          "올림연계",
          "옴니채널",
          "커스텀도메인",
          "프랜차이즈"
        ],
        "priceText": [
          "Business / 월 구독 / 198,000원"
        ],
        "priceNumber": 198000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "브랜딩",
          "교육"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "경쟁사, 빌더, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 보고서, API"
      }
    ]
  },
  {
    "id": 750,
    "name": "주식회사 엑사온",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186514/723ebc3012084bb1852e5eb1a34b2715.png",
    "summary": "기업의 정보를 학습하여 다국어 상담과 맞춤형 안내를 제공하는 RAG 기반 AI 챗봇 서비스",
    "description": "**EXAON – AI와 임베디드 기술로 만드는 비즈니스 혁신** 엑사온은 AI, 임베디드 시스템, 컴퓨터 비전, OCR 및 RAG 기술을 기반으로 기업의 업무와 서비스를 혁신하는 기술기업입니다. 현장에 필요한 하드웨어부터 소프트웨어, AI 모델, 관제·연동 시스템까지 고객의 요구에 맞는 통합 솔루션을 제공합니다. 보유 기술과 다양한 개발 경험을 바탕으로 아이디어 검증, PoC, 제품 개발 및 사업화까지 고객과 함께하겠습니다. **회사 홈페이지** [https://exaon.co.kr/](https://exaon.co.kr/)",
    "website": "https://exaon.co.kr/",
    "email": "scott@exaon.co.kr",
    "contact": "010-2544-4269",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/750",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "다국어 AI Chatbot",
      "PlateOCR"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "홈페이지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "업무 자동화/API"
    ],
    "deliverables": [
      "홈페이지"
    ],
    "techEvidence": "AI 모델, 홈페이지, RAG, 연동, API",
    "priceText": [
      "베이직 / 월 구독 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "베이직: 미니홈페이지제작",
      "가입 리워드: 회원가입 시 번호판 인식 10건을 무료로 제공하며, REST API와 웹 UI 등 전체 기능을 체험할 수 있습니다."
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 22,
    "likeCount": 7,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1322,
        "name": "다국어 AI Chatbot",
        "summary": "기업의 정보를 학습하여 다국어 상담과 맞춤형 안내를 제공하는 RAG 기반 AI 챗봇 서비스",
        "website": "https://chatbotsmb.co.kr",
        "keywords": [
          "AI",
          "RAG",
          "고객상담",
          "고객응대",
          "다국어",
          "소상공인",
          "인공지능",
          "자동응대",
          "챗봇",
          "홈페이지"
        ],
        "priceText": [
          "베이직 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "베이직: 미니홈페이지제작"
        ],
        "deliverables": [
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "홈페이지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 모델, 홈페이지, RAG, 연동"
      },
      {
        "id": 1323,
        "name": "PlateOCR",
        "summary": "한국 차량 번호판을 빠르게 인식하고 번호·신뢰도·검출 위치를 API로 제공하는 AI OCR 서비스",
        "website": "https://plateocr.co.kr/",
        "keywords": [
          "AI비전",
          "OCR",
          "교통데이터",
          "번호판인식",
          "주차관제",
          "차량인식",
          "출입관리",
          "컴퓨터비전"
        ],
        "priceText": [
          "베이직 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "가입 리워드: 회원가입 시 번호판 인식 10건을 무료로 제공하며, REST API와 웹 UI 등 전체 기능을 체험할 수 있습니다."
        ],
        "deliverables": [
          "홈페이지"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "홈페이지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 모델, 홈페이지, RAG, API, 연동"
      }
    ]
  },
  {
    "id": 626,
    "name": "벨로네틱",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185242/6fa4f5b29ece4676a338c200a79aef20.png",
    "summary": "노코드 방식으로 손그림 및 요구 조건을 기반으로 VSCODE와 같은 IDE없이 웹안에서 UI를 디자인 생성해주는 솔루션",
    "description": "Velonetic은 로봇, 비전, 데이터 등을 운영하며 SI,및 자체 AMR/Machine Vision Solution으로 사업을 진행중에 있습니다. 이번에 공급하게된 UI솔루션은 로봇 및 설비에도 진행되는 HMI등 UI설정을 편리하게 하도록 개발을 진행하였으나 B2C형태로 고객들의 편리한 웹 디자인,UI 셋팅을 도와드리기 위해 공급 업체로 등록하게 되었습니다. 벨로네틱도 모두의 창업을 진행 중인 여러분들과 같은 초기 창업 스타트업 입니다. 함께 성장하여 대한민국을 빛내는 사업을 만들어 나가면 좋겠습니다. 감사합니다. ---------------------------------------------------------------------------------------------------------------- **벨로네틱의 Roadmap** **2025.07** Velonetic 설립 제조 현장의 자동화 경험을 디지털 운영 구조로 전환하는 산업 AI 솔루션 팀으로",
    "website": "https://www.velonetic.co.kr",
    "email": "velonetic@velonetic.co.kr",
    "contact": "010-5805-0138",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/626",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "노코드 디자인 솔루션"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "노코드",
      "MVP",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "노코드/앱빌더",
      "MVP/프로토타입",
      "업무 자동화/API"
    ],
    "deliverables": [
      "MVP",
      "자동화"
    ],
    "techEvidence": "LLM, AI 모델, 노코드, 시제품, 자동화",
    "priceText": [
      "50000크래딧 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 MVP, 자동화 근거가 필요한 초기 창업팀",
    "followerCount": 16,
    "likeCount": 13,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1140,
        "name": "노코드 디자인 솔루션",
        "summary": "노코드 방식으로 손그림 및 요구 조건을 기반으로 VSCODE와 같은 IDE없이 웹안에서 UI를 디자인 생성해주는 솔루션",
        "website": "https://large-jackal-a8a.notion.site/Auto-UI-35bb1778cfb680a39af6d2c54ea76be8",
        "keywords": [
          "AWS",
          "LLM",
          "Nocode",
          "UI",
          "노코드",
          "손그림",
          "웹디자인",
          "프론트엔드",
          "플랫폼"
        ],
        "priceText": [
          "50000크래딧 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "MVP",
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "노코드",
          "MVP",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "MVP/프로토타입",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, AI 모델, 노코드, 시제품, 자동화"
      }
    ]
  },
  {
    "id": 754,
    "name": "주식회사 오내피플",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191337/623e76462c744de3b704157db508d199.png",
    "summary": "개인정보 수집부터 파기까지 완벽하게 통제하는 올인원(All-in-one) 보안·관리 솔루션",
    "description": "👋 오늘보다 더 나은 내일을 만드는 사람들, 우리는 오내피플입니다.\u2028ㅤ ㅤ 서비스 기획, 마케팅, 개발... 사업 하나 키우기도 벅찬 스타트업에게 '개인정보 보호'는 너무 멀고 복잡한 이야기입니다. ㅤ *\"인터넷에 떠도는 개인정보 처리방침, 대충 복사해서 써도 될까?\"* *\"구글 폼으로 받은 고객 연락처, 마케팅 문자에 그대로 써도 불법이 아닐까?\"* ㅤ 초기 창업자들이 가장 많이 겪는 이 막막함, 오내피플이 해결해 드립니다. 우리는 개인정보 보호를 자동화하는 🚀 **B2B 솔루션, 캐치시큐**를 운영하고 있습니다.ㅤ ㅤ ㅤ **🤔 왜 캐치시큐를 선택해야 할까요?** 캐치시큐는 단순한 문서 서식을 제공하는 곳이 아닙니다. 비즈니스 성장에만 집중하실 수 있도록, 복잡한 컴플라이언스(규제 준수) 리스크를 알아서 없애드립니다. ㅤ ✔️ 법령이 바뀌어도 걱정 없는 자동 업데이트 매번 바뀌는 까다로운 규제, 담당자가 없어도 알아서 개정안을 반영하고 업데이트해 주어 과태료 부과 위험",
    "website": "https://www.catchsecu.com",
    "email": "aycho@catchsecu.com",
    "contact": "070-7776-8552",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/754",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "캐치시큐 엔터프라이즈",
      "캐치시큐 수명관리",
      "캐치시큐 처리방침 관리"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "SNS 문구",
      "홈페이지",
      "자동화"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "홈페이지",
      "자동화"
    ],
    "techEvidence": "홈페이지, 자동화, 클라우드",
    "priceText": [
      "엔터프라이즈 / 월 구독 / 2,000,000원",
      "수명관리 / 월 구독 / 660,000원",
      "처리방침관리 / 월 구독 / 132,000원"
    ],
    "minPrice": 132000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 SNS/광고 문구, 홈페이지 근거가 필요한 초기 창업팀",
    "followerCount": 14,
    "likeCount": 15,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1330,
        "name": "캐치시큐 엔터프라이즈",
        "summary": "개인정보 수집부터 파기까지 완벽하게 통제하는 올인원(All-in-one) 보안·관리 솔루션",
        "website": "https://www.catchsecu.com/",
        "keywords": [
          "개인정보",
          "개인정보보호",
          "동의서",
          "라이프사이클자동화",
          "보안",
          "보안강화",
          "접근권한통제",
          "처리방침"
        ],
        "priceText": [
          "엔터프라이즈 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "홈페이지",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "홈페이지, 자동화, 클라우드"
      },
      {
        "id": 1331,
        "name": "캐치시큐 수명관리",
        "summary": "복잡한 개인정보 수집부터 파기까지, 폼 하나로 끝내는 라이프사이클 자동화 서비스",
        "website": "https://www.catchsecu.com/",
        "keywords": [
          "개인정보",
          "개인정보 보호",
          "개인정보수명관리",
          "동의서",
          "동의이력관리",
          "라이프사이클",
          "로그모니터링",
          "자동화",
          "캐치폼"
        ],
        "priceText": [
          "수명관리 / 월 구독 / 660,000원"
        ],
        "priceNumber": 660000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "홈페이지",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "홈페이지, 자동화, 클라우드"
      },
      {
        "id": 1332,
        "name": "캐치시큐 처리방침 관리",
        "summary": "규제 기준에 맞춘 개인정보 처리방침과 동의서를 자동 제작 및 관리해주는 솔루션",
        "website": "https://www.catchsecu.com/",
        "keywords": [
          "URL호스팅",
          "개인정보",
          "개인정보처리방침",
          "규제 업데이트",
          "동의서",
          "동의서자동제작",
          "버전관리",
          "이력관리",
          "처리방침"
        ],
        "priceText": [
          "처리방침관리 / 월 구독 / 132,000원"
        ],
        "priceNumber": 132000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "홈페이지",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "홈페이지, 자동화, 클라우드"
      }
    ]
  },
  {
    "id": 831,
    "name": "코드라이브 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187193/78bb63b87c9f4b40be47f42c8a8a04d1.png",
    "summary": "DB 설계 자동화 솔루션-비개발자도 자연어로 전문가 수준의 DB 스키마를 설계할 수 있는 AI-ERD 솔루션",
    "description": "코드라이브 주식회사는 창업자의 아이디어가 실제 제품과 서비스로 빠르게 구현될 수 있도록 돕는 AI 솔루션 기업입니다. 자연어 기반 DB 설계 자동화 솔루션 **AI-ERD**와 RAG 기반 AI 상담 자동화 솔루션 **FELIQ**를 개발·운영하고 있습니다. AI-ERD는 창업자가 서비스 아이디어를 자연어로 설명하면 데이터베이스 구조를 자동으로 설계하고, 설계 오류를 검증하며, SQL·DBML·JSON 등 개발에 필요한 산출물로 변환해주는 클라우드 기반 SaaS입니다. FELIQ는 기업의 FAQ, 매뉴얼, 서비스 정보를 기반으로 고객 문의에 자동 응답하는 AI 상담 솔루션입니다. 코드라이브는 기획, 설계, 개발, 운영 경험을 갖춘 전문 인력으로 구성되어 있으며, 창업 초기 기업이 겪는 기술 장벽과 개발 시행착오를 줄이는 것을 목표로 합니다. 창업자가 복잡한 개발 지식 없이도 아이디어를 구조화하고, 검증된 기술 산출물을 바탕으로 빠르게 MVP와 서비스를 구축할 수 있도록 실용적인",
    "website": "https://www.codelive.co.kr",
    "email": "edwin@codelive.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/831",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AI-ERD",
      "펠릭(FELIQ) RAG"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "마케팅 콘텐츠"
    ],
    "detailTags": [
      "DB설계",
      "MVP",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "설문/서베이",
      "MVP/프로토타입",
      "RAG/지식검색",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "MVP",
      "자동화"
    ],
    "techEvidence": "GPT, Claude, 응답, MVP, RAG, 자동화, 연동, DB, 데이터베이스, 클라우드",
    "priceText": [
      "월구독 / 월 구독 / 50,000원",
      "FELIQ 20K / 월 구독 / 399,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 데이터베이스 생성 체험"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 MVP, 자동화 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 15,
    "likeCount": 13,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1433,
        "name": "AI-ERD",
        "summary": "DB 설계 자동화 솔루션-비개발자도 자연어로 전문가 수준의 DB 스키마를 설계할 수 있는 AI-ERD 솔루션",
        "website": "",
        "keywords": [
          "AI",
          "AI 코딩 연동",
          "Claude, GPT, Cursor",
          "DB 스키마",
          "DBML",
          "ERD",
          "SQL",
          "개발 자동화",
          "데이터베이스 설계"
        ],
        "priceText": [
          "월구독 / 월 구독 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 데이터베이스 생성 체험"
        ],
        "deliverables": [
          "MVP",
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "MVP",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "설문/서베이",
          "MVP/프로토타입",
          "RAG/지식검색",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "GPT, Claude, 응답, MVP, RAG, 자동화, 연동, DB, 데이터베이스, 클라우드"
      },
      {
        "id": 1434,
        "name": "펠릭(FELIQ) RAG",
        "summary": "자체 데이터를 학습한 AI 상담사가 고객 문의에 24시간 자동 응답하는 RAG 기반 상담 자동화 솔루션",
        "website": "",
        "keywords": [
          "AI상담사",
          "RAG",
          "고객응대",
          "다국어",
          "상담자동화",
          "웹위젯",
          "챗봇",
          "카카오톡"
        ],
        "priceText": [
          "FELIQ 20K / 월 구독 / 399,000원"
        ],
        "priceNumber": 399000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "MVP",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "MVP",
          "자동화"
        ],
        "techTags": [
          "설문/서베이",
          "MVP/프로토타입",
          "RAG/지식검색",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "응답, MVP, RAG, 자동화, DB, 데이터베이스, 클라우드"
      }
    ]
  },
  {
    "id": 664,
    "name": "겁쟁이사자들",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/199375/ed1aa438f63e4955a4a9f630461f28d1.png",
    "summary": "사람과 기회를 관리하는 서비스- NFC 디지털 명함. 태그하는 순간 관계가 시작되고, AI가 사람과 기회를 자산으로 잇는 NFC 비즈니스 명함 플랫폼 \"터치미\"",
    "description": "# 창업가의 시간과 마음을 진짜로 아는 팀이 만든,두 가지 솔루션 2020년 창업 이래 스타트업과 함께 성장해온 겁쟁이사자들이 창업 현장에서 가장 필요한 두 가지 문제를 직접 해결합니다. ────────────────────────────────────────── **DOIT — 대표와 팀이 함께 성장하는 AI 협업 플랫폼** ────────────────────────────────────────── **스타트업은 대표가 곧 회사**입니다. 대표가 번아웃되면 팀도 멈춥니다. DOIT은 \"**개인의 행동과 삶과 일은 하나**\"라는 철학으로, 대표가 자신을 잘 돌보면서 팀과 자연스럽게 협업할 수 있도록 설계된 **AI 기반 솔루션**입니다. ────────────────────────────────────────── **Touchme — 작은 스타트업이 당당해지는 AI·NFC 명함** ────────────────────────────────────────── 내세울 게 없",
    "website": "https://gupsa.com",
    "email": "mail@gupsa.com",
    "contact": "010-3021-5471",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/664",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "터치미",
      "doit"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SEO",
      "랜딩페이지",
      "브랜딩",
      "리포트",
      "컨설팅"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "랜딩페이지",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "랜딩, 검색, 분석, 보고서",
    "priceText": [
      "5인 커스터마이징 NFC사원증/명함 안심번호 요금제 / 월 구독 / 200,000원",
      "베이직 요금제 ( 5인기준 ) / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "랜딩페이지, 리포트 결과물로 첫 고객 반응을 빠르게 확인하려는 터치미 같은 서비스가 필요한 팀",
    "followerCount": 12,
    "likeCount": 15,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1199,
        "name": "터치미",
        "summary": "사람과 기회를 관리하는 서비스- NFC 디지털 명함. 태그하는 순간 관계가 시작되고, AI가 사람과 기회를 자산으로 잇는 NFC 비즈니스 명함 플랫폼 \"터치미\"",
        "website": "https://touchme.im/about",
        "keywords": [
          "AI 명함",
          "AI 챗봇",
          "AI미팅노트",
          "Fitscore",
          "NFC 명함",
          "기업미팅",
          "명함",
          "사원증",
          "스타트업 브랜딩",
          "인맥별자리"
        ],
        "priceText": [
          "5인 커스터마이징 NFC사원증/명함 안심번호 요금제 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "랜딩페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "SEO",
          "랜딩페이지",
          "브랜딩"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "RAG/지식검색"
        ],
        "techEvidence": "랜딩, 검색"
      },
      {
        "id": 1200,
        "name": "doit",
        "summary": "시간과 실행을 관리하는 서비스 - AI 기반 타임트래킹 플랫폼 타이머 한 번으로 업무·학습·협업까지 — AI가 분석하고 팀의 흐름이 실시간으로 보이는 스마트 타임 트래킹 플랫폼",
        "website": "https://doit.co.kr/about",
        "keywords": [
          "AI보고서",
          "AI템플릿",
          "가볍고 빠른 협업",
          "멘토링툴",
          "스마트폰 전용 협업툴",
          "실시간 협업",
          "업무 템플릿",
          "타임트래킹"
        ],
        "priceText": [
          "베이직 요금제 ( 5인기준 ) / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "리포트",
          "컨설팅"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "검색, 분석, 보고서"
      }
    ]
  },
  {
    "id": 710,
    "name": "주식회사 블렌드엑스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186536/695e490bdc4b46f8b90b2425c044dc29.png",
    "summary": "AI Brand Iconization 플랫폼 - 광고회사의 노하우를 통해 성과 높은 마케팅 전략과 콘텐츠 제작 서비스를 제공합니다.",
    "description": "\"Curating & Re-Creating\" 블렌드엑스는 대기업출신 광고인들이 설립한 5년차 광고회사입니다. 최고의 광고 노하우로 브랜드에 가장 적합한 조합을 찾아내고 【 Curating 】 그것을 이전 없던 방식으로 재창조하여 【 Re-Creating 】 최상의 성과를 만듭니다. 블렌드엑스는 업계 최고의 기술을 활용할 줄 아는 융합적 상상력으로 시장을 선도하는 새로운 마케팅과 성공사례를 창출하고 있습니다. 매출: 4년 누적 취급고 542억원 수상: 국내 · 외 광고제 수상 40 회 (과학기술정보통신부 장관상, AI 브랜드 컨설팅 서비스 부분 등) 특허: 기술 특허 4건 등록 (제10-2537428호, 제10-2913981호, 제10-2917293호, 제10-2934090호) 인증: 기업부설연구소설립, 벤처기업인증, 경영혁신형 Main-Biz, 서울형 강소기업 [www.blendx.co.kr](http://www.blendx.co.kr)",
    "website": "https://xicon.co.kr",
    "email": "2x@blendx.co.kr",
    "contact": "010-3290-4170",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/710",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "XiCON(엑시콘)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "랜딩페이지",
      "브랜딩",
      "영상",
      "이미지",
      "컨설팅"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "이미지 생성"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "영상",
      "이미지",
      "컨설팅"
    ],
    "techEvidence": "랜딩, 이미지",
    "priceText": [
      "14300 / CREDIT_TOKEN / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "1000 크레딧 제공: 무료 사용 가능"
    ],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 XiCON(엑시콘) 같은 서비스가 필요한 팀",
    "followerCount": 16,
    "likeCount": 11,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1264,
        "name": "XiCON(엑시콘)",
        "summary": "AI Brand Iconization 플랫폼 - 광고회사의 노하우를 통해 성과 높은 마케팅 전략과 콘텐츠 제작 서비스를 제공합니다.",
        "website": "https://www.instagram.com/xicon.co.kr",
        "keywords": [
          "AI",
          "SNS",
          "광고",
          "마케팅",
          "브랜딩",
          "솔루션",
          "영상",
          "이미지",
          "전략",
          "콘텐츠"
        ],
        "priceText": [
          "14300 / CREDIT_TOKEN / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "usage",
        "benefits": [
          "1000 크레딧 제공: 무료 사용 가능"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "영상",
          "이미지",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "영상/이미지",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "브랜딩",
          "영상",
          "이미지",
          "컨설팅"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "이미지 생성"
        ],
        "techEvidence": "랜딩, 이미지"
      }
    ]
  },
  {
    "id": 603,
    "name": "디씽랩 - AI 대시보드 솔루션",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186001/2af2dd403a884204adfe9995fbe7bad5.png",
    "summary": "AI가 다음 해야 할 일을 연결해주는 창업 실행 워크스페이스",
    "description": "🍀🍀 막막한 창업 과정을 단계별 템플릿으로 정리해드립니다! 🍀🍀 좋은 아이디어는 있었는데, 회의가 끝나면 결국 이런 경험 해보신 적 없으신가요? “그래서 결론이 뭐였지?” “누가 어떤 의견 냈더라?” “왜 이 방향으로 결정했지?” “회의는 많이 했는데 정리가 안 된다” “발표 직전에 다시 회의록 뒤지는 중…” 디씽랩은 단순 메신저나 화이트보드 툴이 아닙니다. 팀의 생각과 논의 과정을 AI가 구조화하고, 핵심 인사이트와 다음 액션까지 정리해주는 AI 기반 협업 플랫폼입니다. ◎ 왜 기존 협업툴만으로는 부족할까요? 많은 팀들이 슬랙, 카톡, 노션, 피그마, 화이트보드를 함께 사용합니다. 하지만 협업 과정에서 가장 중요한 ‘맥락’은 쉽게 사라집니다. ◎ 그래서 디씽랩을 만들었습니다. \"흩어진 팀 논의를 실행 가능한 인사이트로.\" 🧠 디씽랩은 화이트보드, 노트, 회의 카드 안에서 이루어진 팀 활동을 AI가 실시간으로 분석하고 핵심 내용을 구",
    "website": "https://www.dthink.io/",
    "email": "leemtion@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/603",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "디씽랩"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "IR",
      "발표자료",
      "홈페이지",
      "컨설팅"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "IR/발표자료",
      "SNS/광고 문구",
      "홈페이지",
      "시장/수요조사",
      "컨설팅"
    ],
    "techEvidence": "대시보드, 분석",
    "priceText": [
      "플러스 플랜 / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "스타터 플랜: 카드 10개 이하/ 프로젝트 1개/ AI PM 1회 생성"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 IR/발표자료, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 14,
    "likeCount": 13,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1114,
        "name": "디씽랩",
        "summary": "AI가 다음 해야 할 일을 연결해주는 창업 실행 워크스페이스",
        "website": "https://www.dthink.io/",
        "keywords": [
          "AI PM",
          "AI 협업",
          "IR",
          "IR준비",
          "고객검증",
          "대시보드",
          "멘토링",
          "창업오디션",
          "책임멘토링",
          "팀워크"
        ],
        "priceText": [
          "플러스 플랜 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [
          "스타터 플랜: 카드 10개 이하/ 프로젝트 1개/ AI PM 1회 생성"
        ],
        "deliverables": [
          "IR/발표자료",
          "SNS/광고 문구",
          "홈페이지",
          "시장/수요조사",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "IR",
          "발표자료",
          "홈페이지",
          "컨설팅"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "대시보드, 분석"
      }
    ]
  },
  {
    "id": 631,
    "name": "셀로빈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/115382/064a920dc9484540909476a7410bfd7c.png",
    "summary": "도전자가 웹·앱 기획, 프로토타입, IR 발표 자료를 직접 만들고, AI 리뷰로 약점까지 미리 점검하는 기술 개발 도구입니다.",
    "description": "**사람의 가능성을 확장하는 기술.** 셀로빈은 창작, 검증, 생산성, 시뮬레이션의 경계를 넓히는 소프트웨어를 만듭니다. 최고의 도구는 그 존재를 잊게 합니다. 복잡한 기술을 단순한 경험으로 바꾸는 일, 그것이 셀로빈의 설계 기준입니다.",
    "website": "https://usan.ai",
    "email": "hello@celovin.com",
    "contact": "010-2322-1746",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/631",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "우산"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "발표자료",
      "홈페이지",
      "MVP",
      "영상",
      "이미지"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "MVP/프로토타입",
      "이미지 생성",
      "영상 생성"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "홈페이지",
      "MVP",
      "영상",
      "이미지"
    ],
    "techEvidence": "시뮬레이션, MVP, 프로토타입, 이미지 생성, 이미지, 영상 생성",
    "priceText": [
      "우산 플로우 / 유/무료 혼합 / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 우산 Free 플랜으로 기본 워크스페이스, 프로젝트 생성, 빠른 초안 작업, 제한된 정밀 작업을 무료로 사용할 수 있습니다."
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 14,
    "likeCount": 13,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1149,
        "name": "우산",
        "summary": "도전자가 웹·앱 기획, 프로토타입, IR 발표 자료를 직접 만들고, AI 리뷰로 약점까지 미리 점검하는 기술 개발 도구입니다.",
        "website": "",
        "keywords": [
          "AI",
          "IR 자료",
          "MVP 제작",
          "바이브 코딩",
          "사업계획서",
          "사업화 자금",
          "앱 만들기",
          "영상 생성",
          "웹사이트 제작",
          "이미지 생성"
        ],
        "priceText": [
          "우산 플로우 / 유/무료 혼합 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 우산 Free 플랜으로 기본 워크스페이스, 프로젝트 생성, 빠른 초안 작업, 제한된 정밀 작업을 무료로 사용할 수 있습니다."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "홈페이지",
          "MVP",
          "영상",
          "이미지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "발표자료",
          "홈페이지",
          "MVP",
          "영상",
          "이미지"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "MVP/프로토타입",
          "이미지 생성",
          "영상 생성"
        ],
        "techEvidence": "시뮬레이션, MVP, 프로토타입, 이미지 생성, 이미지, 영상 생성"
      }
    ]
  },
  {
    "id": 744,
    "name": "주식회사 어피더스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186873/5ec878aa3f144d7b8a4c734d2bb69ebd.png",
    "summary": "AI 기반 패션 룩북스타일링 서비스.",
    "description": "Apitheth(어피더스)는 패션및 요식업 실전경험을 바탕으로 AI 기술로 패션과 푸드 콘텐츠를 혁신하는 기업입니다. 패션 AI 스타일링과 가상 음식 사진작가 서비스를 Toss 미니앱과 웹 플랫폼으로 서비스를 통해 사용자에게 맞춤형 고품질 이미지를 제공하며, 웹/쇼핑몰 개발과 비즈니스 지원을 주요 사업으로 운영합니다. 특허청에 디자인 등록된 후디세트를 활용한 굿즈 생산을 준비 중이며, '모두의 창업 프로젝트' AI 솔루션 공급기업 선정으로 창업 도전자들의 아이디어 실현을 지원합니다.",
    "website": "https://apitheth.com/",
    "email": "apitheth@naver.com",
    "contact": "070-8064-4805",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/744",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AI 패션 스타일리스트 스튜디오",
      "가상음식 사진작가"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "이미지",
      "SNS 문구"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "이미지",
      "SNS/광고 문구"
    ],
    "techEvidence": "생성형, 이미지, 사진, API",
    "priceText": [
      "1500개 / CREDIT_TOKEN / 490,000원",
      "1500 / CREDIT_TOKEN / 499,000원"
    ],
    "minPrice": 490000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 이미지 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 패션 스타일리스트 스튜디오 같은 서비스가 필요한 팀",
    "followerCount": 6,
    "likeCount": 21,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1310,
        "name": "AI 패션 스타일리스트 스튜디오",
        "summary": "AI 기반 패션 룩북스타일링 서비스.",
        "website": "",
        "keywords": [
          "ai",
          "마케팅",
          "생성형 ai",
          "컨텐츠",
          "패션 스타일리스트",
          "패션룩북"
        ],
        "priceText": [
          "1500개 / CREDIT_TOKEN / 490,000원"
        ],
        "priceNumber": 490000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 이미지, 사진, API"
      },
      {
        "id": 1311,
        "name": "가상음식 사진작가",
        "summary": "AI 기반 음식 가상 사진 생성 서비스",
        "website": "",
        "keywords": [
          "ai",
          "sns마케팅",
          "메뉴사진",
          "생성형ai",
          "음식사진",
          "컨테츠"
        ],
        "priceText": [
          "1500 / CREDIT_TOKEN / 499,000원"
        ],
        "priceNumber": 499000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 이미지, 사진, API"
      }
    ]
  },
  {
    "id": 635,
    "name": "스테이블AI - 이벤트기획, 블로그작성, VMD, 로고/ 브랜딩 전략",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/181149/f431b2e0b312417e8b006918a7d890f0.png",
    "summary": "홍보 이벤트 '골든 타임'을 찾아내는 의사결정 솔루션",
    "description": "경쟁이 치열한 시장에서 우리 가게를 알리는 일은 정말 중요합니다. 하지만 바쁜 업무와 제한된 예산 탓에 마케팅은 늘 뒷전으로 밀리기 쉽죠. 복잡한 광고 분석이나 트렌드 파악은 엄두조차 내기 어렵습니다. ​ 하지만 이제 걱정하지 마세요. **AI 마케팅**이 사장님의 든든한 조력자가 되어 드릴 겁니다. AI는 더 이상 거대 기업만의 전유물이 아닙니다. 소상공인도 충분히 활용하여 효율적인 마케팅 성과를 낼 수 있습니다. **AI 마케팅이란 무엇일까요?** AI 마케팅은 인공지능 기술을 활용하여 고객 데이터를 분석하고, 최적의 마케팅 전략을 자동으로 실행하는 것을 의미합니다. AI가 고객의 행동 패턴, 관심사 등을 파악해 **가장 효과적인 메시지와 광고를 가장 적절한 타이밍에** 전달하도록 도와주는 거죠. 마치 최고의 마케팅 전문가를 24시간 고용하는 것과 같습니다. **AI 마케팅이 소상공인에게 필요한 3가지 이유** **시간과 비용 절약:** AI는 단순 반복 작업을 자동",
    "website": "https://stableai.store",
    "email": "swchan@naver.com",
    "contact": "010-2604-2124",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/635",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AI 이벤트 제안: 데이터 기반 정밀 타겟팅 엔진",
      "홍보 블로그 작성: SEO 최적화 및 방문 유도 콘텐츠 자동화",
      "매장 인테리어 개선: 비구조적 VMD 환경 최적화",
      "로고 브랜드 개발: 데이터 기반 브랜드 아이덴티티 설계"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅",
      "MVP/개발"
    ],
    "detailTags": [
      "블로그",
      "SNS 문구",
      "광고",
      "랜딩페이지",
      "브랜딩",
      "로고",
      "자동화",
      "SEO",
      "컨설팅"
    ],
    "techTags": [
      "패널 리서치",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "랜딩페이지",
      "로고",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "타겟팅, 랜딩, 데이터 분석, 분석, 자동화",
    "priceText": [
      "20 크레딧 / CREDIT_TOKEN / 200,000원",
      "40 크레딧 / CREDIT_TOKEN / 400,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "블로그, SNS/광고 문구 결과물로 첫 고객 반응을 빠르게 확인하려는 AI 이벤트 제안: 데이터 기반 정밀 타겟팅 엔진 같은 서비스가 필요한 팀",
    "followerCount": 16,
    "likeCount": 10,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1155,
        "name": "AI 이벤트 제안: 데이터 기반 정밀 타겟팅 엔진",
        "summary": "홍보 이벤트 '골든 타임'을 찾아내는 의사결정 솔루션",
        "website": "https://moimez.shop",
        "keywords": [
          "마케팅",
          "모바일전단",
          "이벤트",
          "홍보"
        ],
        "priceText": [
          "20 크레딧 / CREDIT_TOKEN / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "로고",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "브랜딩",
          "로고",
          "자동화"
        ],
        "techTags": [
          "패널 리서치",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "타겟팅, 랜딩, 데이터 분석, 분석, 자동화"
      },
      {
        "id": 1157,
        "name": "홍보 블로그 작성: SEO 최적화 및 방문 유도 콘텐츠 자동화",
        "summary": "SEO 최적화 및 방문 유도 홍보블로그 작성",
        "website": "https://moimez.shop",
        "keywords": [
          "SEO",
          "마케팅",
          "블로그",
          "홍보"
        ],
        "priceText": [
          "20 크레딧 / CREDIT_TOKEN / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "로고",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "브랜딩",
          "로고",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩, 데이터 분석, 분석, 자동화"
      },
      {
        "id": 1156,
        "name": "매장 인테리어 개선: 비구조적 VMD 환경 최적화",
        "summary": "현재 매장의 구조를 유지하면서 매출과 체류 경험을 극대화하는 실전형 VMD 컨설팅",
        "website": "https://moimez.shop",
        "keywords": [
          "VMD",
          "맞춤형진열",
          "매장환경개선",
          "시각화"
        ],
        "priceText": [
          "40 크레딧 / CREDIT_TOKEN / 400,000원"
        ],
        "priceNumber": 400000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "로고",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "브랜딩",
          "로고",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩, 데이터 분석, 분석, 자동화"
      },
      {
        "id": 1158,
        "name": "로고 브랜드 개발: 데이터 기반 브랜드 아이덴티티 설계",
        "summary": "타겟고객을 정밀 분석하여 '기억되는 브랜드'의 시각적 기틀을 마련하는 전략적 브랜딩 솔루션",
        "website": "https://moimez.shop",
        "keywords": [
          "BI",
          "로고",
          "마케팅",
          "브랜딩"
        ],
        "priceText": [
          "40 크레딧 / CREDIT_TOKEN / 400,000원"
        ],
        "priceNumber": 400000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "로고",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "브랜딩",
          "로고",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩, 데이터 분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 681,
    "name": "주식회사 대모산개발단",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/209682/396bc53aa3d44e82bef5dee9f6778e5d.png",
    "summary": "1분이면 뚝딱 광고용 쇼츠제작",
    "description": "가장 빠르게 성장중인 개발사 대모산개발단",
    "website": "https://demodev.io",
    "email": "contact@demodev.io",
    "contact": "010-4718-8591",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/681",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "쇼츠젠"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발"
    ],
    "detailTags": [
      "광고"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "SNS/광고 문구"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "1건당 / CAPACITY_BASED / 4,900원"
    ],
    "minPrice": 4900,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "노코드/MVP 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 쇼츠젠 같은 서비스가 필요한 팀",
    "followerCount": 15,
    "likeCount": 11,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1228,
        "name": "쇼츠젠",
        "summary": "1분이면 뚝딱 광고용 쇼츠제작",
        "website": "",
        "keywords": [
          "AI",
          "광고",
          "바이럴",
          "쇼츠"
        ],
        "priceText": [
          "1건당 / CAPACITY_BASED / 4,900원"
        ],
        "priceNumber": 4900,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발"
        ],
        "detailTags": [
          "광고"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 837,
    "name": "트리플앤 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186134/ab38bf8fa2a24b008619596c40b5d926.png",
    "summary": "꼭 필요한 사업홍보용 랜딩페이지 : 5분 안에 홈페이지 생성부터 메일링리스트수집, 고객 유입 분석까지",
    "description": "【우리가 하는 일】 트리플앤은 창업기업, 비영리기관, 중간지원조직 등 실제 현장에서 발생하는 문제를 AI와 데이터 기술로 해결하는 SaaS 기업입니다. 우리는 단순히 AI 기능을 만드는 회사가 아닙니다. \"사람들이 매일 반복하지만, 사실은 더 쉽게 할 수 있는 일은 없을까?\" 라는 질문에서 시작합니다. 현재 운영 중인 서비스: 🚀 **[IntroPage.net](http://IntroPage.net)** AI 기반 랜딩페이지 자동 생성 플랫폼 📈 **[Page2.me](http://Page2.me) Plus** AI 기반 정보 모니터링 및 뉴스레터 자동화 플랫폼 📋 **[Gwon.net](http://Gwon.net)** 지원사업 접수·심사·선정·운영 통합관리 플랫폼 🌏 **[EasyMenu.kr](http://EasyMenu.kr)** AI 기반 다국어 음식 콘텐츠 및 통합 메뉴 플랫폼 ───────────────────────────── 【왜 만들었나요",
    "website": "http://treeple.net",
    "email": "juro@treeple.net",
    "contact": "070-8692-0392",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/837",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "창업기업 대상 랜딩페이지 제작",
      "웹크롤링 기반 뉴스레터 발행 서비스"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "피드백",
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "MVP",
      "시장조사",
      "자동화"
    ],
    "techTags": [
      "시장조사/리서치",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "자동화"
    ],
    "techEvidence": "시장조사, 경쟁사, 노코드, 랜딩페이지, 랜딩, 홈페이지, MVP, 분석, 자동화",
    "priceText": [
      "초기 구축 + 전환 최적화 패키지 / 유/무료 혼합 / 300,000원",
      "모니터링 환경세팅 / 유/무료 혼합 / 80,000원"
    ],
    "minPrice": 80000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "최초 계약 시 1년 호스팅 비용: 50mb이내 연간 호스팅 비용 무료",
      "사회혁신분야 뉴스레터: 사회혁신 및 스타트업 관련 지원사업, 뉴스, 행사정보를 메일로 제공합니다.",
      "키워드 기반 정보수집 무료 체험: 채널 개설후 2개 키워드까지 무료제공"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 랜딩페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 16,
    "likeCount": 10,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1446,
        "name": "창업기업 대상 랜딩페이지 제작",
        "summary": "꼭 필요한 사업홍보용 랜딩페이지 : 5분 안에 홈페이지 생성부터 메일링리스트수집, 고객 유입 분석까지",
        "website": "",
        "keywords": [
          "MVP",
          "노코드",
          "랜딩페이지",
          "반응형웹",
          "창업홍보",
          "홈페이지제작"
        ],
        "priceText": [
          "초기 구축 + 전환 최적화 패키지 / 유/무료 혼합 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "최초 계약 시 1년 호스팅 비용: 50mb이내 연간 호스팅 비용 무료"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "MVP",
          "시장조사",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "시장조사, 경쟁사, 노코드, 랜딩페이지, 랜딩, 홈페이지, MVP, 분석, 자동화"
      },
      {
        "id": 1447,
        "name": "웹크롤링 기반 뉴스레터 발행 서비스",
        "summary": "매일 반복되는 시장조사와 정보 수집을 AI로 자동화하고, 뉴스레터 발행까지 한 번에 해결하세요",
        "website": "https://page2.me/plus/plus_info",
        "keywords": [
          "뉴스레터",
          "시장조사",
          "웹크롤링",
          "이메일마케팅",
          "정보모니터링",
          "정보수집",
          "지원사업"
        ],
        "priceText": [
          "모니터링 환경세팅 / 유/무료 혼합 / 80,000원"
        ],
        "priceNumber": 80000,
        "pricingKind": "fixed",
        "benefits": [
          "사회혁신분야 뉴스레터: 사회혁신 및 스타트업 관련 지원사업, 뉴스, 행사정보를 메일로 제공합니다.",
          "키워드 기반 정보수집 무료 체험: 채널 개설후 2개 키워드까지 무료제공"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "시장조사",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "업무 자동화/API"
        ],
        "techEvidence": "시장조사, 경쟁사, 랜딩페이지, 랜딩, 홈페이지, 자동화"
      }
    ]
  },
  {
    "id": 723,
    "name": "주식회사 순순팩토리",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185884/80e977a73bd4440eb1f922db3f6da8a8.jpg",
    "summary": "SOONSOON AI Management - 멀티 AI LLM 통합 라우팅 및 운영 관리 SaaS",
    "description": "**순순팩토리**는 기술 기반 콘텐츠를 제작하는 창작자들을 위한 도구를 만들고, 더 나은 제작 방법을 연구하는 팀입니다. 게임, 캐릭터, AI 에이전트, 가상 환경 제작 과정에서 창작자가 반복적으로 겪는 기술적 장벽을 낮추고, 팀 자체에서 AX 전환을 통해서 적은 인원으로도 높은 완성도의 콘텐츠를 만들 수 있는 SaaS 기반 창작 도구를 개발하고 있습니다. 주요 연혁 **2021년**: 2D 픽셀 아트 캐릭터 제작 툴 **SPUM** 서비스 시작 **2024년**: 주식회사 순순팩토리 법인 설립 **2024년**: SPUM 활용 고객사 게임 **Cup Heroes** 글로벌 1,000만 다운로드 돌파 **2025년**: SPUM을 웹 기반 SaaS 플랫폼 **SPUM BASE**로 확장하는 전환 추진 **2025년**: AI 기반 캐릭터 조합·생성 기술 **SPUM CG** 특허 출원 **2025년**: 경기창업혁신공간 데모데이 최우수상 수상 및 기술보증기금 운전자금 확",
    "website": "https://sam.soonsoon.ai/",
    "email": "soonsoon@soonsoons.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/723",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "SAM",
      "SPUM Studio"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "홈페이지",
      "자동화",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "랜딩페이지 빌더",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "홈페이지",
      "자동화"
    ],
    "techEvidence": "LLM, AI 모델, AI 에이전트, 에이전트, 시뮬레이션, 홈페이지, 자동화, API, 인프라, 클라우드",
    "priceText": [
      "Builder / 월 구독 / 59,000원",
      "Integrated License / 월 구독 / 99,000원"
    ],
    "minPrice": 59000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Startup: 무료체험후 유료 전환 가능"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 홈페이지, 자동화 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 17,
    "likeCount": 9,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1282,
        "name": "SAM",
        "summary": "SOONSOON AI Management - 멀티 AI LLM 통합 라우팅 및 운영 관리 SaaS",
        "website": "https://sam.soonsoon.ai/",
        "keywords": [
          "AI",
          "API",
          "LLM",
          "SaaS",
          "라우팅",
          "생산성"
        ],
        "priceText": [
          "Builder / 월 구독 / 59,000원"
        ],
        "priceNumber": 59000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "홈페이지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "랜딩페이지 빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 모델, AI 에이전트, 에이전트, 시뮬레이션, 홈페이지, 자동화, API, 인프라, 클라우드"
      },
      {
        "id": 1283,
        "name": "SPUM Studio",
        "summary": "WebGPU 기반 2D 픽셀 아트 생성 AI SaaS - AI 에이전트 가상 환경을 만드는 웹 기반 2D 캐릭터 창작 SaaS",
        "website": "",
        "keywords": [
          "2D",
          "AI",
          "SaaS",
          "가상환경",
          "게임개발",
          "에이전트",
          "캐릭터",
          "콘텐츠제작"
        ],
        "priceText": [
          "Integrated License / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "Startup: 무료체험후 유료 전환 가능"
        ],
        "deliverables": [
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "홈페이지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "랜딩페이지 빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 모델, AI 에이전트, 에이전트, 시뮬레이션, 홈페이지, 자동화, 인프라, GPU, 클라우드"
      }
    ]
  },
  {
    "id": 606,
    "name": "라이트웨이트 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/199162/cd8422ae1c824a1aaa27b9fb4d73794d.png",
    "summary": "크리에이터를 위한 통합 워크스페이스, 개발자를 위한 API, 누구나 만드는 광고 영상",
    "description": "라이트웨이트는 게임과 소셜 서비스에서 제품을 만들어 온 팀이 2021년 공동 창업한 회사입니다. 자사 게임 개발 과정에서 AI 이미지 생성 기술을 적극 활용하면서, 아티스트 공수를 50% 이상 절감할 수 있었습니다. 동시에 한 가지 문제를 발견했습니다. **AI로 이미지를 만드는 것은 쉬워졌지만, 그걸 편집하고 팀과 공유하고 배포하는 과정은 여전히 여러 도구를 오가야 했습니다.** 그리고 모든 디지털 컨텐츠 크리에이터들이 동일한 문제를 겪고 있음을 확인하고, 이를 풀고자 저희 기술을 서비스로 엮기 시작했습니다. 생성은 시작일 뿐, 워크플로우 전체가 하나여야 한다는 확신. 이 믿음에서 XBrush가 출발했습니다.",
    "website": "https://lightweight.kr",
    "email": "contact@lightweight.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/606",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "만들고 바로 배포 - AI 광고 이미지 & 영상 생성부터 SNS 게시까지 한 번에"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "영상",
      "이미지"
    ],
    "techTags": [
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지"
    ],
    "techEvidence": "이미지 생성, 이미지, 영상 생성, API, 워크플로우",
    "priceText": [
      "Basic 플랜 / 월 구독 / 10,000원"
    ],
    "minPrice": 10000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: 처음 사용자 또는 팀 멤버로 활동",
      "Discord 가입 후 쿠폰 사용: 주기적으로 발행되는 쿠폰을 받아 사용"
    ],
    "recommendation": "이미지 생성, 영상 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 만들고 바로 배포 - AI 광고 이미지 & 영상 생성부터 SNS 게시까지 한 번에 같은 서비스가 필요한 팀",
    "followerCount": 24,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1498,
        "name": "만들고 바로 배포 - AI 광고 이미지 & 영상 생성부터 SNS 게시까지 한 번에",
        "summary": "크리에이터를 위한 통합 워크스페이스, 개발자를 위한 API, 누구나 만드는 광고 영상",
        "website": "",
        "keywords": [
          "AI",
          "SNS",
          "SNS광고",
          "광고",
          "디지털 콘텐츠",
          "바이럴",
          "영상 & 이미지 생성",
          "영상 & 이미지 편집",
          "인플루언서",
          "콘텐츠"
        ],
        "priceText": [
          "Basic 플랜 / 월 구독 / 10,000원"
        ],
        "priceNumber": 10000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: 처음 사용자 또는 팀 멤버로 활동",
          "Discord 가입 후 쿠폰 사용: 주기적으로 발행되는 쿠폰을 받아 사용"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "영상",
          "이미지"
        ],
        "techTags": [
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "이미지 생성, 이미지, 영상 생성, API, 워크플로우"
      }
    ]
  },
  {
    "id": 716,
    "name": "주식회사 비투윈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191881/4f9b46d1fea049c79f6eae53114fd1ad.png",
    "summary": "떠오르는 아이디어부터 특허를 출원할 때까지 도와주는 발명•특허 AI Agent",
    "description": "비투윈(BtoWIN)은 **기술과 특허 정보를 AI로 쉽게 분석해주는 회사**입니다. 기업이나 연구자가 새로운 기술 아이디어를 찾고, 어떤 방향으로 연구를 진행해야 할지 더 빠르고 정확하게 판단할 수 있도록 돕고 있습니다. 비투윈이 개발 중인 **AIEM**은 복잡한 기술 정보와 특허 내용을 **대화하듯 쉽게 찾고 정리할 수 있고, 기술문서를 자동으로 생성해주는 AI 플랫폼**입니다. 사용자는 AI와 대화하면서 필요한 기술 정보를 찾아보고, 떠오른 아이디어를 기록하고 정리하며, 경쟁 기술이나 개발 방향도 함께 살펴볼 수 있습니다. 그렇게 정리된 기술정보와 아이디어로 내 발명을 고도화하며 완성시킬수 있습니다. 쉽게 말해 AIEM은 “기술 정보를 찾는 것부터 아이디어 정리, 연구개발 방향 설정까지 도와주는 AI 조력자”입니다. 비투윈은 오랜 특허 분석과 기술사업화 경험을 바탕으로, 연구자와 스타트업, 기업이 **기술 정보를 더 쉽게 이해하고 실제 사업과 연구에 활용할 수 있도록",
    "website": "https://aiem.co/",
    "email": "jykim@btowin.co.kr",
    "contact": "002-2088-8219",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/716",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AIEM(아이엠)"
    ],
    "majorTags": [
      "MVP/개발",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO"
    ],
    "techTags": [
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "검색, 분석",
    "priceText": [
      "Plus / 유/무료 혼합 / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 회원가입만으로 일일 2회 AI 특허검색지원"
    ],
    "recommendation": "RAG/지식검색, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AIEM(아이엠) 같은 서비스가 필요한 팀",
    "followerCount": 13,
    "likeCount": 13,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1270,
        "name": "AIEM(아이엠)",
        "summary": "떠오르는 아이디어부터 특허를 출원할 때까지 도와주는 발명•특허 AI Agent",
        "website": "",
        "keywords": [
          "AI",
          "R&D고도화",
          "기술 전략",
          "발명",
          "아이디어",
          "특허"
        ],
        "priceText": [
          "Plus / 유/무료 혼합 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 회원가입만으로 일일 2회 AI 특허검색지원"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "검색, 분석"
      }
    ]
  },
  {
    "id": 734,
    "name": "모스트(MOAST) | 마케팅 콘텐츠 딸깍 AI",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185210/f1c2a0c2280148968169b674f4034f4c.png",
    "summary": "모스트(moast)에서 클릭 한번으로 메타, 네이버, 구글 등 광고 소재부터 제품 상세페이지를 생성하고 편집할 수 있어요!",
    "description": "# 상품을 팔기 위한 상세페이지와 광고 소재, 이제 AI로 빠르게 만드세요. > **모스트(Moast)는 커머스 / 대표님들의 콘텐츠 제작 과정을 쉽게 바꿉니다.** > 상품 사진과 간단한 정보만 입력하면, 상세페이지·광고 이미지·상품 소개 콘텐츠를 AI로 빠르게 생성할 수 있습니다. ## 👉 모스트(Moast) 소개 자세히 보기 [https://bit.ly/4eoE4d1](https://bit.ly/4eoE4d1) 모스트(Moast)는 모두의창업 AI 솔루션 공급기업으로 참여하여 아이디어와 제품을 가진 창업자들이 **실제 고객에게 보여줄 수 있는 판매 콘텐츠를 빠르게 만들 수 있도록 지원**합니다. --- # 🎁 모두의창업 전용 혜택 안내 창업자는 제품을 만들기도 바쁜데, 상세페이지와 광고 소재까지 직접 기획하고 디자인하는 데 많은 시간을 쓰게 됩니다. 상세페이지를 외주로 맡기면 건당 수십만 원에서 수백만 원까지 비용이 발생하고, 광고 이미지를 계속 테스트하려면",
    "website": "https://www.moast.ai/?route=modoo",
    "email": "support@astarcorp.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/734",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "모스트 (moast)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "사업계획서",
      "브랜딩",
      "영상",
      "이미지"
    ],
    "techTags": [
      "이미지 생성"
    ],
    "deliverables": [
      "사업계획서",
      "SNS/광고 문구",
      "영상",
      "이미지"
    ],
    "techEvidence": "이미지 생성, 이미지, 사진",
    "priceText": [
      "Max 요금제 / 월 구독 / 150,000원"
    ],
    "minPrice": 150000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: 가입시 기본 250 크레딧 제공(상세페이지 약 2회, 광고 소재 약 20회 생성 가능 수준)"
    ],
    "recommendation": "사업계획서, SNS/광고 문구 결과물로 첫 고객 반응을 빠르게 확인하려는 모스트 (moast) 같은 서비스가 필요한 팀",
    "followerCount": 17,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1296,
        "name": "모스트 (moast)",
        "summary": "모스트(moast)에서 클릭 한번으로 메타, 네이버, 구글 등 광고 소재부터 제품 상세페이지를 생성하고 편집할 수 있어요!",
        "website": "",
        "keywords": [
          "광고 콘텐츠",
          "네이버 광고",
          "딸깍 생성",
          "마케팅",
          "메타 광고",
          "모스트",
          "상세페이지",
          "편집까지 쉽게"
        ],
        "priceText": [
          "Max 요금제 / 월 구독 / 150,000원"
        ],
        "priceNumber": 150000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: 가입시 기본 250 크레딧 제공(상세페이지 약 2회, 광고 소재 약 20회 생성 가능 수준)"
        ],
        "deliverables": [
          "사업계획서",
          "SNS/광고 문구",
          "영상",
          "이미지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "사업계획서",
          "브랜딩",
          "영상",
          "이미지"
        ],
        "techTags": [
          "이미지 생성"
        ],
        "techEvidence": "이미지 생성, 이미지, 사진"
      }
    ]
  },
  {
    "id": 585,
    "name": "(주)티틀랩",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187995/3502886107cc412e8e635a163d66c477.png",
    "summary": "웹 및 PC/모바일 설치용 앱을 노코드로 생성하는 AI 솔루션 웹사이트부터 카드뉴스 생성까지, 홍보∙마케팅 AI 빌더 솔루션으로 창업 전 아이디어에 대한 소비자 사전 피드백을 받고 아이디어를 검증하세요. (웹과 앱을 한번에 해결! 생성 사이트에 마케팅을 위한 네이버/구글 검색 설정, 방문자 접속 정보, 소비자 피드백 정보 제공)",
    "description": "🏫**기업 개요 및 미션: \"Small Mark, Big Impact\"** 주식회사 티틀랩은 \"Small Mark, Big Impact\"라는 슬로건 아래, 사람들의 창의적인 아이디어를 인공지능(AI) 기술과 결합하여 온라인 서비스로 구현하는 AI 실용주의 기업입니다. 2024년 10월 설립된 티틀랩은 \"AI Creates, Humans Choose\"라는 미션을 지향합니다. 이는 복잡한 생성 및 운영 업무는 AI에게 맡기고, 인간은 더욱 가치 있는 결정과 창의적인 활동에 집중할 수 있도록 돕는 기술적 환경을 제공하겠다는 의지를 담고 있습니다. **핵심 서비스 및 확장 서비스** 🚀 **티틀스페이스(tittleSpace):** 코딩이나 앱 개발에 대한 전문 지식이 없는 일반 사용자도 자신만의 AI 웹앱을 즉시 생성하고 공유할 수 있는 노코드(No-code) 플랫폼입니다. 템플릿과 앱마켓을 통해 빠르게 앱을 만들어 배포하고, 에이전트 기능을 이용해 개인 브랜딩부터 기업의",
    "website": "https://tittlelab.com",
    "email": "tittlelab@tittlelab.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/585",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "티틀스페이스",
      "티틀그라운드"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "카드뉴스",
      "SEO",
      "SNS 문구",
      "피드백",
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "시장조사",
      "브랜딩",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "시장조사/리서치",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "카드뉴스",
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "시장/수요조사",
      "이미지",
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 시뮬레이션, 시장조사, 노코드, 빌더, 랜딩, 홈페이지, 검색, 분석",
    "priceText": [
      "비지니스팩 외 다수 이용권 구매 / CREDIT_TOKEN / 300,000원",
      "AI 소비자 이용권 외 다수 이용권 구매 / CREDIT_TOKEN / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "회원가입 축하 이용권: 앱 3개 생성, 프롬프트 3회 수행, 이미지 1개 생성",
      "일반 회원용 배틀 생성: 일반 회원이 참여할 수 있는 배틀 생성"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 카드뉴스, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 13,
    "likeCount": 12,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1092,
        "name": "티틀스페이스",
        "summary": "웹 및 PC/모바일 설치용 앱을 노코드로 생성하는 AI 솔루션 웹사이트부터 카드뉴스 생성까지, 홍보∙마케팅 AI 빌더 솔루션으로 창업 전 아이디어에 대한 소비자 사전 피드백을 받고 아이디어를 검증하세요. (웹과 앱을 한번에 해결! 생성 사이트에 마케팅을 위한 네이버/구글 검색 설정, 방문자 접속 정보, 소비자 피드백 정보 제공)",
        "website": "https://blog.naver.com/PostList.naver?blogId=tittlelab&from=postList&categoryNo=1",
        "keywords": [
          "검증",
          "노코드",
          "마케팅",
          "빌더",
          "소비자",
          "시장조사",
          "웹",
          "카드 뉴스",
          "카드뉴스",
          "홈페이지"
        ],
        "priceText": [
          "비지니스팩 외 다수 이용권 구매 / CREDIT_TOKEN / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "usage",
        "benefits": [
          "회원가입 축하 이용권: 앱 3개 생성, 프롬프트 3회 수행, 이미지 1개 생성"
        ],
        "deliverables": [
          "카드뉴스",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "시장/수요조사",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "카드뉴스",
          "SEO",
          "SNS 문구",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "시장조사",
          "브랜딩",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 시뮬레이션, 시장조사, 노코드, 빌더, 랜딩, 홈페이지, 검색, 분석, 이미지, 자동화"
      },
      {
        "id": 1093,
        "name": "티틀그라운드",
        "summary": "AI 에이전트를 활용해 서비스 시장 분석을 진행하는 AI 솔루션 창업 아이템, 출시 전에 AI 판정단에게 먼저 물어보세요. 100만 명의 한국형 AI 소비자(판정단)가 내 아이디어, 홍보 방식, 기능, 가격, 타깃 고객을 미리 평가해드립니다.",
        "website": "https://blog.naver.com/PostList.naver?blogId=tittlelab&from=postList&categoryNo=3",
        "keywords": [
          "AI 소비자",
          "검증",
          "고객",
          "마케팅",
          "분석",
          "시장조사",
          "여론",
          "페르소나",
          "피드백",
          "홍보"
        ],
        "priceText": [
          "AI 소비자 이용권 외 다수 이용권 구매 / CREDIT_TOKEN / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "usage",
        "benefits": [
          "일반 회원용 배틀 생성: 일반 회원이 참여할 수 있는 배틀 생성"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "피드백",
          "랜딩페이지",
          "노코드",
          "시장조사",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "시장조사/리서치",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 시뮬레이션, 시장조사, 페르소나, 노코드, 랜딩, 검색, 분석, 자동화"
      }
    ]
  },
  {
    "id": 821,
    "name": "주식회사에네이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185926/8b7e3ad1bce8433e98f03ab4823f3f25.jpg",
    "summary": "“AI 서비스를 만들고 싶은 창업자가 서버·GPU·DB·벡터DB·보안·운영을 따로 고민하지 않도록, 실증 가능한 클라우드 실행환경을 제공한다.”",
    "description": "클라우드 전환과 운영에 필요한 모든 서비스를 포괄하는 서비스를 제공하고 있습니다. 1. 클라우드 : 기업들에게 퍼블릭 클라우드와 프라이빗 클라우드 솔루션을 서비스 포털을 통해 제공하고 있습니다. AI-OPs플랫폼을 활용하여 클라우드 운영관리의 효율성을 극대화 하고 있습니다. 2. 홈페이지 : 지난 10년간 500개 이상의 프로젝트를 성공적으로 완료했으며, 주력 분야는 CMS와 Java Spring, React 프레임워크입니다. 우리는 웹 기반의 앱과 홈페이지 구축에 탁우렇나 전문성을 보유하고 있습니다. 3. 컨설팅 : 클라우드 아키텍처 및 네트워크 보안 컨설팅 서비스를 제공하며, 고객의 비즈니스 요구를 충족시키는 최적의 솔루션을 제안합니다. 3. 보안 : 네트워크 및 웹 보안 분야에서 10년 이상의 경력을 가진 전문가들로 구성되어 있습니다. Forti네트워크 방화벽 및 펜타시큐리티 웹 방화벽과 의 파트너십을 통해 최고의 보안솔루션을 제공합니다.",
    "website": "https://eney.cloud/",
    "email": "accounts@eney.co.kr",
    "contact": "070-7933-1616",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/821",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "에네이클라우드"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "홈페이지",
      "DB설계",
      "컨설팅"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "DB/인프라"
    ],
    "deliverables": [
      "홈페이지",
      "컨설팅"
    ],
    "techEvidence": "홈페이지, RAG, DB, 서버, 인프라, GPU, 클라우드",
    "priceText": [
      "mi250c-1g GPU : vCPU 12, RAM 64GB, Storage 75GB / CAPACITY_BASED / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "에네이클라우드 Pre-sales 담당자에게 문의 부탁드립니다.: 컨설팅후 사용가능한 맞춤형 크레딧을 제공합니다."
    ],
    "recommendation": "홈페이지, 컨설팅 결과물로 첫 고객 반응을 빠르게 확인하려는 에네이클라우드 같은 서비스가 필요한 팀",
    "followerCount": 18,
    "likeCount": 7,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1416,
        "name": "에네이클라우드",
        "summary": "“AI 서비스를 만들고 싶은 창업자가 서버·GPU·DB·벡터DB·보안·운영을 따로 고민하지 않도록, 실증 가능한 클라우드 실행환경을 제공한다.”",
        "website": "https://eney.cloud/",
        "keywords": [
          "Ollama",
          "Open WebUI",
          "RAG",
          "데이터레이크",
          "보안존",
          "컨텐그스윈도우",
          "클라우드"
        ],
        "priceText": [
          "mi250c-1g GPU : vCPU 12, RAM 64GB, Storage 75GB / CAPACITY_BASED / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "에네이클라우드 Pre-sales 담당자에게 문의 부탁드립니다.: 컨설팅후 사용가능한 맞춤형 크레딧을 제공합니다."
        ],
        "deliverables": [
          "홈페이지",
          "컨설팅"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "홈페이지",
          "DB설계",
          "컨설팅"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "DB/인프라"
        ],
        "techEvidence": "홈페이지, RAG, DB, 서버, 인프라, GPU, 클라우드"
      }
    ]
  },
  {
    "id": 787,
    "name": "가격 부담 없이, 특허 조사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185206/a51c449903ea43058dfda9fb67de1d5e.png",
    "summary": "AI 아이디어 사전검증 서비스 - 전 세계 1억 건 이상의 특허 데이터를 기반으로 창업자의 아이디어를 AI가 즉시 검토하여 법적 분쟁 가능성과 차별점을 보고서로 제공",
    "description": "**\"AI 기술로 지식재산권의 문턱을 낮추고 아이디어의 가치를 증명합니다.\"** 타날리시스는 전 세계 방대한 특허 데이터를 지능적으로 분석하여 기업의 혁신을 돕는 AI 기반 특허 분석 솔루션 전문 기업(B2B SaaS)입니다. 변리사의 전문 지식과 최첨단 AI 기술을 결합하여, 누구나 쉽고 정확하게 자신의 아이디어를 보호하고 사업화 전략을 세울 수 있는 환경을 구축하고 있습니다. **주요 솔루션 및 서비스** - Tana Check(타나 체크): 아이디어만 입력하면 전 세계 1억 건 이상의 특허 데이터를 분석하여 15분 만에 AI 선생조사 보고서를 제공하는 서비스입니다. - AI 특허 분석: 딥러닝 기반의 맥락 이해 기술을 통해 기술적 유사도를 85% 이상의 높은 정확도로 판단하며, 침해 분석 및 무효 사유 조사 등 고도화된 리걸테크 서비스를 제공합니다. **핵심 역량 및 차별점** 1. 압도적인 효율성: 기존의 수주가 걸리던 선행조사 업무를 AI를 통해 단 15분으로 단",
    "website": "https://tanalysis.ai",
    "email": "cs@tanalysis.co.kr",
    "contact": "010-3142-2407",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/787",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "타나 체크(Tana Check)"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "리포트"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "리포트"
    ],
    "techEvidence": "분석, 보고서, 인프라",
    "priceText": [
      "기본보고서(아이디어 1건) / CREDIT_TOKEN / 66,000원"
    ],
    "minPrice": 66000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 리포트 근거가 필요한 초기 창업팀",
    "followerCount": 17,
    "likeCount": 7,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1371,
        "name": "타나 체크(Tana Check)",
        "summary": "AI 아이디어 사전검증 서비스 - 전 세계 1억 건 이상의 특허 데이터를 기반으로 창업자의 아이디어를 AI가 즉시 검토하여 법적 분쟁 가능성과 차별점을 보고서로 제공",
        "website": "https://tanalysis-1.gitbook.io/tanalysis-docs",
        "keywords": [
          "AI",
          "기술사업화",
          "딥테크",
          "리걸테크",
          "선행기술조사",
          "아이디어보호",
          "지식재산권",
          "특허",
          "특허검증",
          "특허분석"
        ],
        "priceText": [
          "기본보고서(아이디어 1건) / CREDIT_TOKEN / 66,000원"
        ],
        "priceNumber": 66000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "분석, 보고서, 인프라"
      }
    ]
  },
  {
    "id": 685,
    "name": "주식회사 드로우드림",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185248/4855afc2e6f44f1eb1e1854caeb6ff9b.png",
    "summary": "나를 학습하는 나만의 AI 전화비서 - 나 대신 전화 받아주고 걸어주고 일처리까지!",
    "description": "**회사 개요** 드로우드림(DrawDream Inc.) 은 실시간 음성 AI 인프라를 자체 개발·운영하는 기술 회사입니다. 대표 서비스 LiveSpeech ai를 통해 전화 기반 음성 AI 솔루션을 한국과 북미 양대 통신망 위에서 제공하고 있으며, 2026 모두의 창업 공식 공급기업으로 등록되어 도전자들의 사업화 과정을 지원합니다. **창업진과 인적 구성** 미국 아마존(Amazon)·구글(Google) 등 글로벌 빅테크 출신 시니어 개발자들이 직접 코어 아키텍처를 설계하고 운영합니다. 미국 시애틀과 캐나다 밴쿠버의 빅테크 현업 경험에 한국 대기업의 엔터프라이즈 경험까지 결합된 한·미 하이브리드 팀 구조이며, 본사는 한국에 두고 캐나다 밴쿠버·미국 오리건까지 활동 거점을 확장해 운영합니다. 약 3,000명 규모의 자체 개발자·비즈니스 커뮤니티를 운영하며, 이를 통한 강력한 네트워크와 초기 B2B 파이프라인을 확보하고 있습니다. **기술 정체성** \"껍데기 AI가 아닌,",
    "website": "https://livespeech.ai",
    "email": "jay.kim@livespeech.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/685",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "LiveSpeech"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "컨설팅"
    ],
    "techTags": [
      "패널 리서치",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "컨설팅"
    ],
    "techEvidence": "3,000명, 음성, 전화, AI 전화, API, 인프라",
    "priceText": [
      "Basic / 월 구독 / 9,900원"
    ],
    "minPrice": 9900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 컨설팅 근거가 필요한 초기 창업팀",
    "followerCount": 15,
    "likeCount": 9,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1232,
        "name": "LiveSpeech",
        "summary": "나를 학습하는 나만의 AI 전화비서 - 나 대신 전화 받아주고 걸어주고 일처리까지!",
        "website": "https://livespeech.ai/",
        "keywords": [
          "AI Agent",
          "AI비서",
          "API",
          "ARS",
          "무료"
        ],
        "priceText": [
          "Basic / 월 구독 / 9,900원"
        ],
        "priceNumber": 9900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "컨설팅"
        ],
        "techTags": [
          "패널 리서치",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "3,000명, 음성, 전화, AI 전화, API, 인프라"
      }
    ]
  },
  {
    "id": 745,
    "name": "주식회사 에듀템",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185879/34d94a563bdf44a4bc36b26385525cba.png",
    "summary": "AI기반, 원클릭 홈페이지(APP) 제작 빌더",
    "description": "음성인식, 문서인식, 이미지인식, 챗봇, 생성형AI 등, 다양한 AI모델을 기업요구 수준에 맞춤형 개발하여 모델을 공급하고 운영합니다. LG CNS, YBM, 동아출판, 인천교육청동아시아국제교육원등에 다수의 AI기술 공급사례 보유 **2016** 회사 설립 **2018** 보라구 APP 개발 **2019** ELA 음성지능 엔진 상용화 **2022** Pre-A 투자 유치 **2023** LG CNS, 모델 공급 계약 체결 / 인천교육청 단독 수주 **2024** 동아출판 음성·화자인식·필기·문자인식등 모델 공급 / NE능률 음성인식·문장생성·교정등 모델 공급 **2025** YBM 음성·필기인식 공급 / 중앙대학교 Speak Master 공동개발 / ETRI 한국어 말하기 평가 공급 **2026** 시원스쿨 AI 챗봇, AI분석시스템 공급",
    "website": "https://www.elasolution.com/agents/builder",
    "email": "ceo@edutem.net",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/745",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "Web Parter ai",
      "ELA Chabot",
      "ELA Agent",
      "ELA Meeting Assistant"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "영상/이미지",
      "데이터/리포트",
      "교육/컨설팅",
      "업무자동화/생산성",
      "사업계획서/IR"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "홈페이지",
      "이미지",
      "교육",
      "자동화",
      "DB설계",
      "발표자료"
    ],
    "techTags": [
      "LLM/생성형AI",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "이미지 생성",
      "음성/STT/TTS",
      "AI 에이전트",
      "시장조사/리서치",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "홈페이지",
      "이미지",
      "자동화",
      "IR/발표자료"
    ],
    "techEvidence": "생성형, 빌더, 홈페이지, 분석, 이미지, 음성, 에이전트, LLM, GPT, 시장분석",
    "priceText": [
      "월 구독 / 1,000,000원",
      "월 최대 2개Bot 생성 / 월 구독 / 500,000원",
      "1user, 100만 토큰 제한 / 월 구독 / 200,000원",
      "1,000만 토큰 이내/월 / 월 구독 / 500,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "SNS/광고 문구, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 Web Parter ai 같은 서비스가 필요한 팀",
    "followerCount": 20,
    "likeCount": 4,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1312,
        "name": "Web Parter ai",
        "summary": "AI기반, 원클릭 홈페이지(APP) 제작 빌더",
        "website": "https://www.elasolution.com/agents/builder",
        "keywords": [
          "고객상담",
          "광고",
          "모바일앱",
          "온라인",
          "웹사이트",
          "이러닝",
          "제품소개",
          "챗봇",
          "홈페이지",
          "홍보페이지"
        ],
        "priceText": [
          "월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "홈페이지",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 빌더, 홈페이지, 분석, 이미지, 음성"
      },
      {
        "id": 1483,
        "name": "ELA Chabot",
        "summary": "고객상담, FAQ 대응 지능형 챗봇 (제품명 : ELA Chabot)",
        "website": "https://www.elasolution.com/agents/chatbot",
        "keywords": [
          "aicc",
          "bot",
          "CS",
          "고객상담",
          "고객센터",
          "대화챗봇",
          "봇",
          "상담톡",
          "에이전트",
          "챗봇"
        ],
        "priceText": [
          "월 최대 2개Bot 생성 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 에이전트, 분석, 이미지, 음성"
      },
      {
        "id": 1487,
        "name": "ELA Agent",
        "summary": "비즈니스 특화 통합 에이전트 (Agent)",
        "website": "https://www.elasolution.com/agents/assistant",
        "keywords": [
          "agent",
          "gpt",
          "llm",
          "마케팅",
          "비서",
          "시장분석",
          "업무자동화",
          "에이전트",
          "자료생성",
          "챗봇"
        ],
        "priceText": [
          "1user, 100만 토큰 제한 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, GPT, 생성형, 에이전트, 시장분석, 분석, 이미지, 음성, 자동화"
      },
      {
        "id": 1484,
        "name": "ELA Meeting Assistant",
        "summary": "스마트 미팅 회의록 자동생성",
        "website": "https://www.elasolution.com/agents/meeting",
        "keywords": [
          "미팅",
          "번역",
          "속기록",
          "연구노트",
          "요약",
          "회의",
          "회의록"
        ],
        "priceText": [
          "1,000만 토큰 이내/월 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 분석, 이미지, 음성"
      },
      {
        "id": 1314,
        "name": "ELA STT",
        "summary": "다국어 음성인식(STT) 엔진",
        "website": "https://www.elasolution.com/agents/stt",
        "keywords": [
          "stt",
          "다국어",
          "발음평가",
          "온라인교육",
          "외국어학습",
          "음성분석",
          "음성인식",
          "음향분석",
          "텍스트추출",
          "한국어학습"
        ],
        "priceText": [
          "월 1000만 토큰 / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 분석, 이미지, STT, 음성"
      },
      {
        "id": 1315,
        "name": "ELA OCR",
        "summary": "각종 문서, 이미지등 인식 OCR",
        "website": "https://www.elasolution.com/agents/ocr",
        "keywords": [
          "문서",
          "문서인식",
          "수식인식",
          "온라인교육",
          "외국어",
          "이러닝",
          "이미지인식",
          "중국어",
          "텍스트추출",
          "한국어"
        ],
        "priceText": [
          "1,000만 토큰 이내/월 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 분석, 이미지, 음성"
      },
      {
        "id": 1485,
        "name": "ELA TTS",
        "summary": "다국어 음성재생 TTS",
        "website": "https://www.elasolution.com/agents/voice",
        "keywords": [
          "TTS",
          "나레이션",
          "목소리",
          "음성",
          "음성생성",
          "음성재생",
          "음성파일",
          "음성합성",
          "한국어"
        ],
        "priceText": [
          "1,000만 토큰 이내/월 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "DB설계",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS",
          "DB/인프라"
        ],
        "techEvidence": "생성형, 분석, 이미지, TTS, 음성, DB"
      },
      {
        "id": 1316,
        "name": "ELA Handwriting",
        "summary": "노트북, 스마트폰, 태블릿 액정에 손글씨 인식 엔진(디지털 스케너)",
        "website": "https://www.elasolution.com/agents/h_ocr",
        "keywords": [
          "글자인식",
          "손글씨",
          "손글씨인식",
          "액정 글쓰기",
          "핸드라이팅"
        ],
        "priceText": [
          "1,000만 토큰 이내/월 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 분석, 이미지, 음성"
      },
      {
        "id": 1486,
        "name": "아이캔톡AI",
        "summary": "AI 기반, 영어훈련 솔루션 (제품명 : 아이캔톡AI)",
        "website": "https://www.elasolution.com/agents/tutor",
        "keywords": [
          "번역",
          "생활영어",
          "영어",
          "영어공부",
          "영어발표",
          "영어회화",
          "외국어",
          "중국어",
          "통역",
          "한국어"
        ],
        "priceText": [
          "2인/월, 무제한사용 / 월 구독 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "발표자료",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 분석, 이미지, 음성"
      },
      {
        "id": 1313,
        "name": "Book Builder ai",
        "summary": "AI 기반, 전자책 제작",
        "website": "https://www.elasolution.com/agents/ebook",
        "keywords": [
          "e북",
          "OCR",
          "다국어",
          "도서",
          "이북",
          "전자도서",
          "전자책",
          "카달로그",
          "퍼블리싱",
          "홍보물"
        ],
        "priceText": [
          "최대 500page / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "이미지",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 분석, 이미지, 음성"
      }
    ]
  },
  {
    "id": 584,
    "name": "(주)티토",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/157010/ff5b974277fc4508802e5b0495904101.png",
    "summary": "아이디어로 홈페이지·콘텐츠·유입·반응측정까지 초기 창업자의 시장 검증을 한 곳에서 지원합니다",
    "description": "**아이디어는 있는데, 홈페이지부터 막막하신가요?** > 창업자들이 가장 많이 하는 말이 있습니다. > > \"홈페이지가 필요한 건 아는데, 뭘 어떻게 만들어야 할지 모르겠어요.\" > \"블로그는 써야 하는 거 아는데, 뭘 써야 할지 모르겠어요.\" > \"방향이 조금 바뀌었는데 수정 비용이 또 나온대요.\" 외주도, 웹빌더도, AI 코딩도 해봤지만 결과는 같습니다. **콘텐츠가 쌓이지 않으면 홈페이지는 금방 방치됩니다.** 지금 필요한 건 예쁜 홈페이지가 아닙니다. 아이디어를 제대로 보여주고, 고객 반응을 확인하고, 방향이 바뀌면 바로 고칠 수 있는 **살아있는 홈페이지**입니다. 티토는 그 문제를 **10분 안에 시작**합니다 **★ 티토가 하는 5가지.** (티토는 멘티&멘토의 줄임말입니다) WordPress 기반 위에, 홈페이지 자동 제작부터 블로그·SNS 멀티채널 확산까지 하나의 플랫폼에서 운영합니다. 코딩도, 외주도, 디자이너도 필요 없습니다. **① 홈페이지 자동",
    "website": "https://teetto.app/modoo",
    "email": "ykkwon2@naver.com",
    "contact": "010-7687-4252",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/584",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "티토 DX-5060"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "SNS 문구",
      "피드백",
      "홈페이지",
      "MVP",
      "브랜딩",
      "영상",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "설문/서베이",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "홈페이지",
      "MVP",
      "시장/수요조사",
      "영상",
      "컨설팅"
    ],
    "techEvidence": "Claude, 설문, 빌더, 바이브코딩, 홈페이지, MVP, 검색, 분석, 동영상, API",
    "priceText": [
      "AI 홈페이지 제작 · 2개월 무료 관리 / 유/무료 혼합 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "free",
    "pricingSortRank": 0,
    "benefits": [
      "티토관리(2개월무료관리): 홈페이지 블로그 + 네이버 블로그 글 발행 각 월 4건",
      "호스팅+API사용료 무료: 호스팅+API사용료+설치비 (1년)무료"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 블로그, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 15,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1091,
        "name": "티토 DX-5060",
        "summary": "아이디어로 홈페이지·콘텐츠·유입·반응측정까지 초기 창업자의 시장 검증을 한 곳에서 지원합니다",
        "website": "https://teetto.app/guide/",
        "keywords": [
          "AI홈페이지제작",
          "mvp제작",
          "워드프레스홈페이지",
          "홈페이지",
          "홈페이지제작"
        ],
        "priceText": [
          "AI 홈페이지 제작 · 2개월 무료 관리 / 유/무료 혼합 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "free",
        "benefits": [
          "티토관리(2개월무료관리): 홈페이지 블로그 + 네이버 블로그 글 발행 각 월 4건",
          "호스팅+API사용료 무료: 호스팅+API사용료+설치비 (1년)무료"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "MVP",
          "시장/수요조사",
          "영상",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "SNS 문구",
          "피드백",
          "홈페이지",
          "MVP",
          "브랜딩",
          "영상",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "설문/서베이",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "Claude, 설문, 빌더, 바이브코딩, 홈페이지, MVP, 검색, 분석, 동영상, API, 예약, 연동"
      }
    ]
  },
  {
    "id": 572,
    "name": "(주)멜라카",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/198917/3fc5d6e5d0f54b1d94c48af232d029ee.png",
    "summary": "이미지·영상·음성 생성을 통한 콘텐츠 제작 SaaS : 이미지·영상·음악까지, 기업 보안을 지키며 AI 콘텐츠를 한 번에 만드는 올인원 크리에이션 플랫폼",
    "description": "(주)멜라카는 대구·경북 소재 AI 전문 기업으로, 기업의 콘텐츠 제작 혁신을 목표로 설립되었습니다. 자사 핵심 제품인 **GENDIA**는 이미지 생성, 영상 제작, 보이스·뮤직 생성을 단 하나의 플랫폼에서 처리하는 **기업용 올인원 AI 크리에이션 SaaS**입니다. 흩어진 AI 도구를 각각 구독하고 배워야 하는 비효율을 없애고, 비전문가도 전문가 수준의 콘텐츠를 즉시 제작할 수 있는 환경을 제공합니다. GENDIA의 핵심 경쟁력은 **블록체인 기반 보안**입니다. 기업 전용 AI 모델에 대한 접근 권한을 분산원장으로 인증하여 허가된 임직원만 사용 가능하도록 제한하고, AI 생성 콘텐츠에 위변조 불가능한 저작권 인증서를 자동 발급합니다. 브랜드 자산 유출과 무단 복제를 기술적으로 원천 차단하여 기업이 안심하고 AI를 도입할 수 있는 환경을 구현합니다. 경북대학교 기술이전 특허 2건, 자체 등록 특허 2건, PCT 출원 1건을 보유하고 있으며, 베트남·태국 등 해외 계약 실적",
    "website": "https://gendia.ai/",
    "email": "jhgoo8150@melaka.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/572",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "젠디아"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "광고",
      "브랜딩",
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성",
      "음성/STT/TTS",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "생성형, AI 모델, 이미지 생성, 이미지, 영상제작, 음성, 자동화",
    "priceText": [
      "엘리트 / 월 구독 / 218,900원"
    ],
    "minPrice": 218900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "free: 1000크레딧"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 SNS/광고 문구, 영상 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 15,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1074,
        "name": "젠디아",
        "summary": "이미지·영상·음성 생성을 통한 콘텐츠 제작 SaaS : 이미지·영상·음악까지, 기업 보안을 지키며 AI 콘텐츠를 한 번에 만드는 올인원 크리에이션 플랫폼",
        "website": "https://gendia.ai/",
        "keywords": [
          "AI",
          "AI 광고 제작",
          "AI 솔루션",
          "AI 영상제작",
          "AI 음악생성",
          "AI 이미지 제작",
          "마케팅 콘텐츠 자동화",
          "생성형",
          "올인원 AI 툴",
          "콘텐츠"
        ],
        "priceText": [
          "엘리트 / 월 구독 / 218,900원"
        ],
        "priceNumber": 218900,
        "pricingKind": "fixed",
        "benefits": [
          "free: 1000크레딧"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "광고",
          "브랜딩",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, AI 모델, 이미지 생성, 이미지, 영상제작, 음성, 자동화"
      }
    ]
  },
  {
    "id": 615,
    "name": "마인드풀랩스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191134/4f99d242222c413897c28b8a8489b00c.png",
    "summary": "AI 기반 통합 마케팅 콘텐츠 자동 생성 플랫폼 : 웹사이트 주소 하나로 숏폼·카드뉴스·SNS 콘텐츠까지 AI가 자동 제작합니다",
    "description": "마인드풀랩스(Mindful Labs)는 'AI로 모든 창업가가 자신의 이야기를 빠르게 시장에 전할 수 있도록 한다'는 미션 아래 AI 솔루션을 개발·운영하는 회사입니다. 대표 서비스인 마케타(Maketaa)는 웹사이트 주소 하나만 있으면 AI가 비즈니스를 분석해 타깃 고객·톤앤매너·핵심 메시지를 도출하고, 그 전략을 기반으로 숏폼 영상·카드뉴스·SNS 카피까지 자동 생성하는 통합 마케팅 콘텐츠 플랫폼입니다. 디자이너나 마케터를 따로 두지 않아도 1인 창업가와 소상공인이 분 단위로 전문가 수준의 콘텐츠를 만들 수 있는 환경을 제공해, 창업의 마케팅 진입 장벽을 한층 낮추는 것을 목표로 합니다.",
    "website": "",
    "email": "honam.kang@mindfullabs.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/615",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "마케타(Maketaa)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "카드뉴스",
      "블로그",
      "SNS 문구",
      "홈페이지",
      "영상",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "카드뉴스",
      "블로그",
      "SNS/광고 문구",
      "홈페이지",
      "영상",
      "자동화"
    ],
    "techEvidence": "분석, 숏폼, 자동화",
    "priceText": [
      "500 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "카드뉴스, 블로그 결과물로 첫 고객 반응을 빠르게 확인하려는 마케타(Maketaa) 같은 서비스가 필요한 팀",
    "followerCount": 15,
    "likeCount": 8,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1127,
        "name": "마케타(Maketaa)",
        "summary": "AI 기반 통합 마케팅 콘텐츠 자동 생성 플랫폼 : 웹사이트 주소 하나로 숏폼·카드뉴스·SNS 콘텐츠까지 AI가 자동 제작합니다",
        "website": "",
        "keywords": [
          "SNS",
          "마케팅",
          "블로그",
          "숏폼",
          "자동화",
          "카드뉴스"
        ],
        "priceText": [
          "500 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "카드뉴스",
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "카드뉴스",
          "블로그",
          "SNS 문구",
          "홈페이지",
          "영상",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 숏폼, 자동화"
      }
    ]
  },
  {
    "id": 769,
    "name": "가장 빠르고 완성도 높은 아웃소싱 이지태스크",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/201278/3042c5e6cdfd4504a6caf3fa8c43ac19.png",
    "summary": "가장 빠른 사무 보조 서비스 이지태스크(인간지능+인공지능 결과물보장)- 30분내 연결되는 협업인력 매칭 및 관리 서비스",
    "description": "인간지능+인공지능으로 결과물까지 책임지는 실시간 재택근로자 매칭 및 관리 플랫폼 이지태스크입니다. 누구나 원할 때 , 원하는 사람과 협업 하며 상호 성장 할 수 있도록 지원하고 있습니다. 마케팅, 디자인, 행정, 회계, 홍보 등 모든 영역에서 10분단위로 일을 맡기실 수도 있고 정기매칭을 통해 지속적인 협업도 가능합니다. 인력 채용 및 관리에 드는 시간과 에너지를 최소화 하고 사업에 실행력을 더할 수 있습니다.",
    "website": "http://www.easytask.co.kr/modoo",
    "email": "hello@easytask.co.kr",
    "contact": "02-1833-6212",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/769",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "EasyTask"
    ],
    "majorTags": [
      "사업계획서/IR",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "사업계획서"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "사업계획서"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "500000 / CREDIT_TOKEN / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "1시간무료이용: 1시간의 업무 대행"
    ],
    "recommendation": "사업계획서를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 22,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1350,
        "name": "EasyTask",
        "summary": "가장 빠른 사무 보조 서비스 이지태스크(인간지능+인공지능 결과물보장)- 30분내 연결되는 협업인력 매칭 및 관리 서비스",
        "website": "https://easytask.co.kr/business",
        "keywords": [
          "HR",
          "디자인",
          "마케팅",
          "사무보조",
          "사업계획서",
          "아웃소싱",
          "업무대행",
          "인력지원",
          "제안서",
          "채용"
        ],
        "priceText": [
          "500000 / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "1시간무료이용: 1시간의 업무 대행"
        ],
        "deliverables": [
          "사업계획서"
        ],
        "majorTags": [
          "사업계획서/IR",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "사업계획서"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 796,
    "name": "주식회사 팀오버플로잉",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185361/97a3e1d14857440b8e238c17af18c268.png",
    "summary": "상품/서비스의 최적 인플루언서를 찾아주고, 제안/일정 및 원고료 협상/업로드 성과까지 에이전트가 지원합니다. 초기 MVP 과정 인터뷰 대상을 찾는데도 유용하게 쓰실 수 있습니다",
    "description": "팀오버플로잉입니다. 마케터가 없는 중소 브랜드/개인이 쉽게 자신의 제품을 인플루언서 마케팅을 통해 노출하고 검증할 수 있도록 서비스를 제공합니다.",
    "website": "https://moody.team/v2",
    "email": "donny@overflowing.team",
    "contact": "010-2765-6005",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/796",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "무디"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "MVP",
      "브랜딩"
    ],
    "techTags": [
      "AI 에이전트",
      "MVP/프로토타입"
    ],
    "deliverables": [
      "MVP"
    ],
    "techEvidence": "에이전트, MVP",
    "priceText": [
      "standard / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 MVP 근거가 필요한 초기 창업팀",
    "followerCount": 13,
    "likeCount": 9,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1384,
        "name": "무디",
        "summary": "상품/서비스의 최적 인플루언서를 찾아주고, 제안/일정 및 원고료 협상/업로드 성과까지 에이전트가 지원합니다. 초기 MVP 과정 인터뷰 대상을 찾는데도 유용하게 쓰실 수 있습니다",
        "website": "https://docs.google.com/presentation/d/1QwvSScnChxnj-Oh4snEFv1P0_s65QrbFUwd-ut3Xh7w/edit?usp=sharing",
        "keywords": [
          "AI",
          "MVP",
          "고객",
          "마케팅",
          "무디",
          "에이전트",
          "인터뷰",
          "인플루언서",
          "콘텐츠"
        ],
        "priceText": [
          "standard / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "MVP"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "MVP",
          "브랜딩"
        ],
        "techTags": [
          "AI 에이전트",
          "MVP/프로토타입"
        ],
        "techEvidence": "에이전트, MVP"
      }
    ]
  },
  {
    "id": 770,
    "name": "주식회사 제오노스 (Xeonos Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185438/09e04c4b3891406b9e59bb20edc6f1e4.png",
    "summary": "k-마누스 제오나: 카드뉴스, 상세페이지, 블로그 글쓰기 자동화, 세상의 모든 자동화를 다 커버하는 그날까지!!!!",
    "description": "제오노스는 최근 화제가 된 '마누스(Manus)'처럼, 사람이 눈으로 화면을 보고 마우스와 키보드를 조작하는 모든 과정을 웹 브라우저 위에서 똑같이 수행하는 AI 에이전트 기술을 만듭니다. 특히 제오노스의 브라우징 에이전트 'Xeona(제오나)'는 단순한 범용 AI를 넘어, 기업과 실무자가 매일 반복하는 귀찮은 수기 업무를 완벽히 덜어내는 데 초점을 맞춘 가장 실용적인 솔루션입니다. ▶ ⚡ Xeona가 즉시 대신해 드리는 핵심 업무 ⚡ 블로그 포스팅 (생성부터 발행까지 100% 무인화) - 주제만 주어지면 글 작성, 이미지 첨부, 플랫폼 로그인 후 발행 버튼 클릭까지 사람이 하듯 알아서 완료합니다. ⚡ 상품 상세페이지 기획 및 판매 채널 자동 등록 - 제품 정보만으로 설득력 있는 상세페이지를 만들고, 스마트스토어나 자사몰 등 판매 채널에 직접 접속해 등록을 마칩니다. ⚡ 카드뉴스 제작 및 SNS 자동 게시 - 마케팅 콘텐츠 기획 및 제작부터 SNS 채널 로그인, 업로드",
    "website": "https://xeona.xyz",
    "email": "yanghoon@xeonos.xyz",
    "contact": "050-7139-8530",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/770",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "제오나(Xeona)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "카드뉴스",
      "블로그",
      "SNS 문구",
      "홈페이지",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "시장조사/리서치",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "카드뉴스",
      "블로그",
      "SNS/광고 문구",
      "홈페이지",
      "이미지",
      "자동화"
    ],
    "techEvidence": "LLM, 생성형, AI 에이전트, 에이전트, 경쟁사, 이미지, 자동화, API, 워크플로우, 연동",
    "priceText": [
      "1370 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "X-smart: 50 크레딧 제공 (한시적)"
    ],
    "recommendation": "카드뉴스, 블로그 결과물로 첫 고객 반응을 빠르게 확인하려는 제오나(Xeona) 같은 서비스가 필요한 팀",
    "followerCount": 14,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1351,
        "name": "제오나(Xeona)",
        "summary": "k-마누스 제오나: 카드뉴스, 상세페이지, 블로그 글쓰기 자동화, 세상의 모든 자동화를 다 커버하는 그날까지!!!!",
        "website": "https://www.instagram.com/p/DX_TdVvEgc4/?img_index=1",
        "keywords": [
          "sns자동화",
          "블로그자동화",
          "상세페이지",
          "업무자동화",
          "웹브라우징자동화",
          "웹에이전트",
          "카드뉴스"
        ],
        "priceText": [
          "1370 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [
          "X-smart: 50 크레딧 제공 (한시적)"
        ],
        "deliverables": [
          "카드뉴스",
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "카드뉴스",
          "블로그",
          "SNS 문구",
          "홈페이지",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 생성형, AI 에이전트, 에이전트, 경쟁사, 이미지, 자동화, API, 워크플로우, 연동"
      }
    ]
  },
  {
    "id": 669,
    "name": "주식회사 나두모두",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185218/8b1aa1bacd12450c8c23b9a6f0567e80.webp",
    "summary": "나두아이오(Nadoo) : 비즈니스의 핵심을 연결하는 사업운영 OS",
    "description": "나두아이오(Nadoo) : 비즈니스의 핵심을 연결하는 AI OS 웹사이트 관리에 뺏기는 시간을 제로(0)로 만들고, [리드 생성 - 견적 - 계약 - 인보이스]로 이어지는 비즈니스 파이프라인을 한곳에서 연결하는 비지니스 운영 플랫폼입니다. 핵심 가치 준비 시간의 단축: AI가 30초 만에 업종에 맞는 사이트를 생성하여 오늘 바로 영업을 시작할 수 있습니다. 프로세스의 통합: 파편화된 외부 툴(전자계약, 엑셀, 청구서 등)을 쓸 필요 없이, 하나의 대시보드에서 비즈니스의 흐름을 한눈에 파악합니다. 본질로의 집중: 기술적인 관리와 행정적 마찰을 줄여, 사장님이 매출을 만드는 '현장 영업'에 더 많은 시간을 쓰게 합니다. 주요 기능 (Key Pipeline) AI 사이트 생성: 비즈니스 이름과 업종 입력만으로 레이아웃, 이미지, 카피가 완비된 전문 사이트 구축 리드 수집 및 관리: 유입된 고객 문의를 체계적으로 기록하고 관리하는 통합 대시보드 전자계약 (E-contracts): 외부",
    "website": "https://nadoo.io",
    "email": "cs@nadoomodoo.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/669",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "나두아이오"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "랜딩페이지",
      "홈페이지",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "랜딩페이지",
      "홈페이지",
      "이미지",
      "자동화"
    ],
    "techEvidence": "랜딩페이지, 랜딩, 홈페이지, 검색, 대시보드, 이미지, 자동화",
    "priceText": [
      "스탠다드 / 월 구독 / 29,900원"
    ],
    "minPrice": 29900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "체험: 가입 시 2주 무료체험이 제공됩니다."
    ],
    "recommendation": "블로그, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 나두아이오 같은 서비스가 필요한 팀",
    "followerCount": 13,
    "likeCount": 9,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1206,
        "name": "나두아이오",
        "summary": "나두아이오(Nadoo) : 비즈니스의 핵심을 연결하는 사업운영 OS",
        "website": "https://home.nadoo.io/ko",
        "keywords": [
          "CRM",
          "견적서",
          "고객관리",
          "랜딩페이지",
          "송장",
          "웹사이트",
          "인보이스",
          "전자계약",
          "제품홍보",
          "회사홈페이지"
        ],
        "priceText": [
          "스탠다드 / 월 구독 / 29,900원"
        ],
        "priceNumber": 29900,
        "pricingKind": "fixed",
        "benefits": [
          "체험: 가입 시 2주 무료체험이 제공됩니다."
        ],
        "deliverables": [
          "블로그",
          "랜딩페이지",
          "홈페이지",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "랜딩페이지",
          "홈페이지",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩페이지, 랜딩, 홈페이지, 검색, 대시보드, 이미지, 자동화"
      }
    ]
  },
  {
    "id": 612,
    "name": "리브포워드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191823/71d1db10380f46fabdb9361956b6dc05.png",
    "summary": "가구, 제품, 인테리어, 베딩 등 다양한 제품 이미지를 3D로 정확하게 AI로 다채롭게 실제와 같이 무한대로 생성 가능한 서비스입니다.",
    "description": "모두의 창업, 꿈꾸는 모든 여러분 반갑습니다. 특히 가구, 인테리어, 라이프스타일 제품군 등 우리나라의 우수한 문화와 디자인을 기반으로 다채로운 제조업 및 제품디자인 산업 분야 여러분 모두 응원합니다. 저희 리브포워드는 23년 삼성전자 사내벤처 Spin-Off 선정 기업으로 출발하여, 제조업을 위한 특화 서비스인 Material Digitaltwin, MATWIN 서비스를 개발하게 되었습니다. 저희 MATWIN 서비스는 3D와 AI기술을 융복합적으로 활용하여, (1) 3D를 기반으로 완전히 실제와 같은 제품 이미지를 무한대로 생성할 수 있게 해 드리고 (2) AI 적용을 통해 다채로운 제품 이미지들을 풍요롭게 생성하여 활용할 수 있습니다. 이를 통해 '실제와 완전 같은' 제품 이미지를 통해 아래와 같은 새로운 방식의 비지니스가 가능합니다. (1) 시제품의 제작 비용없이 미리 다채로운 디자인을 검토할 수 있고 (2) 촬영 및 이미지 편집 비용의 획기적인 절감은 물론",
    "website": "https://matwin.ai/",
    "email": "tchaikovsky1052@hanmail.net",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/612",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "MATWIN (Material Twin)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "MVP",
      "이미지"
    ],
    "techTags": [
      "MVP/프로토타입",
      "이미지 생성"
    ],
    "deliverables": [
      "MVP",
      "이미지"
    ],
    "techEvidence": "시제품, 이미지",
    "priceText": [
      "제품 3D 모델링 및 이미지 생성 월구독 / 유/무료 혼합 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "MVP, 이미지 결과물로 첫 고객 반응을 빠르게 확인하려는 MATWIN (Material Twin) 같은 서비스가 필요한 팀",
    "followerCount": 18,
    "likeCount": 4,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1124,
        "name": "MATWIN (Material Twin)",
        "summary": "가구, 제품, 인테리어, 베딩 등 다양한 제품 이미지를 3D로 정확하게 AI로 다채롭게 실제와 같이 무한대로 생성 가능한 서비스입니다.",
        "website": "https://matwin.ai/",
        "keywords": [
          "3D이미지",
          "AI이미지",
          "가구",
          "가상이미지",
          "라이프스타일",
          "마케팅컨텐츠",
          "베딩",
          "상세페이지",
          "인테리어",
          "제품디자인"
        ],
        "priceText": [
          "제품 3D 모델링 및 이미지 생성 월구독 / 유/무료 혼합 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "MVP",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "MVP",
          "이미지"
        ],
        "techTags": [
          "MVP/프로토타입",
          "이미지 생성"
        ],
        "techEvidence": "시제품, 이미지"
      }
    ]
  },
  {
    "id": 675,
    "name": "주식회사 넥시시스랩",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/143114/1a7b26ef7af7492183ee8cdcf2a65f6e.png",
    "summary": "AI 기반 외주·제조 의사결정 및 공급망 매칭 SaaS : 3D CAD 설계부터 제조 의사결정, 공급망 매칭까지 원스톱으로 지원하는 AI 제조 솔루션",
    "description": "**AI 연구 및 파생 서비스와 기업 맞춤형 솔루션을 제공합니다.** **홈페이지 메인 :** [www.nexysys.com](http://www.nexysys.com) **Custom Dev :** 기업별 요구사항에 맞춘 최적화된 AI 소프트웨어 및 시스템 개발 **NexyFab :** AI 기반 외주·제조 의사결정 및 공급망 매칭 SaaS ([www.nexyfab.com](http://www.nexyfab.com)) **NexyFlow :** AI 기반 업무 자동화 및 생산성 관리 SaaS ([www.nexyflow.com](http://www.nexyflow.com))",
    "website": "https://www.nexysys.com",
    "email": "jay@nexysys.com",
    "contact": "010-7271-8773",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/675",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "NexyFab",
      "NexyFlow"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "홈페이지",
      "자동화"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "업무 자동화/API",
      "AI 에이전트",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "홈페이지",
      "자동화"
    ],
    "techEvidence": "홈페이지, 자동화, AI에이전트, 에이전트, RAG, 분석, 워크플로우",
    "priceText": [
      "AI 제조 조달 플랫폼 베이직 / 유/무료 혼합 / 500,000원",
      "PRO / 월 구독 / 22,500원"
    ],
    "minPrice": 22500,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "AI 3D CAD: OPENSCAD를 활용한 AI 3D 설계 지원",
      "그룹웨어 FREE 버전: 그룹웨어 기본 기능 제공"
    ],
    "recommendation": "홈페이지, 자동화 결과물로 첫 고객 반응을 빠르게 확인하려는 NexyFab 같은 서비스가 필요한 팀",
    "followerCount": 17,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1217,
        "name": "NexyFab",
        "summary": "AI 기반 외주·제조 의사결정 및 공급망 매칭 SaaS : 3D CAD 설계부터 제조 의사결정, 공급망 매칭까지 원스톱으로 지원하는 AI 제조 솔루션",
        "website": "https://www.nexyfab.com/",
        "keywords": [
          "3D_CAD",
          "OpenSCAD",
          "공급망관리",
          "리스크 관리",
          "비교견적",
          "생산최적화",
          "설계자동화",
          "스마트제조",
          "외주매칭",
          "제조AI"
        ],
        "priceText": [
          "AI 제조 조달 플랫폼 베이직 / 유/무료 혼합 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "AI 3D CAD: OPENSCAD를 활용한 AI 3D 설계 지원"
        ],
        "deliverables": [
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "홈페이지",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "업무 자동화/API"
        ],
        "techEvidence": "홈페이지, 자동화"
      },
      {
        "id": 1218,
        "name": "NexyFlow",
        "summary": "AI 기반 업무 자동화 및 생산성 관리 SaaS : AI 기반 업무 흐름 분석 및 조직 생산성 관리 자동화 SaaS",
        "website": "https://nexyflow.com/",
        "keywords": [
          "AI그룹웨어",
          "AI에이전트",
          "RAG",
          "생산성",
          "스타트업",
          "업무자동화",
          "워크플로우",
          "조직관리"
        ],
        "priceText": [
          "PRO / 월 구독 / 22,500원"
        ],
        "priceNumber": 22500,
        "pricingKind": "fixed",
        "benefits": [
          "그룹웨어 FREE 버전: 그룹웨어 기본 기능 제공"
        ],
        "deliverables": [
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "홈페이지",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "AI에이전트, 에이전트, 홈페이지, RAG, 분석, 자동화, 워크플로우"
      }
    ]
  },
  {
    "id": 590,
    "name": "가온소프트랩",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/166939/47c35561cc934660b7c0329571ad5483.png",
    "summary": "'KRoot' — 당신의 아이디어를 가장 빠르게 완성된 서비스로 구현해드립니다.",
    "description": "## **'AI로 더 빠르고, 더 안전하게 소프트웨어를 만드는 방법'을 연구하고 구현하는 기업** 우리는 단순히 코드를 빠르게 만드는 데 그치지 않고, 기획부터 설계·개발·테스트·배포에 이르는 개발 라이프사이클(SDLC) 전체를 데이터로 제어하여 프로젝트의 성공 확률을 끌어올리는 일을 합니다. ## **우리가 하는 일** 창업과 신규 서비스 개발의 여정에서 가장 큰 병목은 언제나 **'개발'**입니다. 가온소프트랩은 고객이 아이디어의 본질에 집중하는 동안, 보이지 않는 곳에서 발생하는 개발 공정의 리스크를 대신 제어하는 **기술 파트너**입니다. 이를 위해 우리는 자체 솔루션 **KRoot** 를 개발·서비스하고 있습니다. ## 핵심 역량 **1. 검증된 엔터프라이즈 개발 경험** 50회 이상의 대형 프로젝트에서 검증된 표준 아키텍처 가이드를 보유하고 있습니다. 스타트업도 엔터프라이즈급 안정성을 확보할 수 있도록 이 노하우를 솔루션에 녹였습니다. **2.",
    "website": "https://kaonsoft.com",
    "email": "ga@kaonsoft.com",
    "contact": "070-4012-1300",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/590",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "KRoot"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, Gemini, 생성형, 자동화",
    "priceText": [
      "사업 상담 및 솔루션 활용 / 유/무료 혼합 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "사업 컨설팅: 아이디어 구체화, 개발 방향 제안 및 컨설팅"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 자동화, 컨설팅 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 15,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1100,
        "name": "KRoot",
        "summary": "'KRoot' — 당신의 아이디어를 가장 빠르게 완성된 서비스로 구현해드립니다.",
        "website": "",
        "keywords": [
          "AI개발",
          "AI코딩",
          "SDLC",
          "가온소프트랩",
          "개발자동화",
          "기획",
          "기획자동화",
          "사업기획",
          "솔루션기획",
          "코딩"
        ],
        "priceText": [
          "사업 상담 및 솔루션 활용 / 유/무료 혼합 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "사업 컨설팅: 아이디어 구체화, 개발 방향 제안 및 컨설팅"
        ],
        "deliverables": [
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, Gemini, 생성형, 자동화"
      }
    ]
  },
  {
    "id": 661,
    "name": "제스트 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/196616/d5c6c8dbebe94a0fbb3f0d1b091611e3.png",
    "summary": "초기 창업가를 위한 마케팅 자동화 + 경영관리 효율화 통합 Saas",
    "description": "7번째 창업가의 노하우를 Saas 솔루션에 녹여내고 있습니다. 다수의 정부지원사업에 선정되어, 창업 전 1억5천 확보, 창업 1년반만에 10억원의 자금을 확보한 비밀을 공유들겠습니다. - '24년 에코스타트업(예비창업) 우수기업 - '24년 창업중심대학(예비창업) 최우수기업 - '24년 G-Statrtup(예비창업) 선정 그 외 ‘26년 05월 한국수력원자력 AI-nuri 협력기업 신정 ‘25년 11월 TIPS R&D 선정 ‘25년 11월 예비사회적기업 선정 ‘25년 06월 SEED 투자유치(강원대기술지주) ’25년 05월 Google for Startup 선정 ’25년 04월 소셜벤처인증 ’25년 01월 벤처기업인증 ‘24년 11월 pre-SEED 투자유치(스파크랩코리아)",
    "website": "",
    "email": "info@zest.im",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/661",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "임팩트북 impactbook"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "카드뉴스",
      "사업계획서",
      "피드백",
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "카드뉴스",
      "자동화"
    ],
    "techEvidence": "자동화",
    "priceText": [
      "Starter / 월 구독 / 38,500원"
    ],
    "minPrice": 38500,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: ✓ 카드뉴스 체험판 1세트 (6장 · 워터마크 포함) ✓ 사업계획서 피드백 ✓ 직원 초대 1명"
    ],
    "recommendation": "사업계획서, 카드뉴스를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 11,
    "likeCount": 9,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1195,
        "name": "임팩트북 impactbook",
        "summary": "초기 창업가를 위한 마케팅 자동화 + 경영관리 효율화 통합 Saas",
        "website": "",
        "keywords": [
          "마케팅",
          "사업계획서",
          "인사관리",
          "재무관리",
          "카드뉴스"
        ],
        "priceText": [
          "Starter / 월 구독 / 38,500원"
        ],
        "priceNumber": 38500,
        "pricingKind": "fixed",
        "benefits": [
          "Free: ✓ 카드뉴스 체험판 1세트 (6장 · 워터마크 포함) ✓ 사업계획서 피드백 ✓ 직원 초대 1명"
        ],
        "deliverables": [
          "사업계획서",
          "카드뉴스",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "카드뉴스",
          "사업계획서",
          "피드백",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      }
    ]
  },
  {
    "id": 571,
    "name": "(주)딜리버리엠",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/166937/c4dd02d80f6e4d4a92808a0097b96ca7.png",
    "summary": "AI 다국어 번역지원 수출특화 자사몰(해외 쇼핑몰)",
    "description": "🌏 글로벌 시장 진출까지 고려하시는 예비 창업자님, 👋안녕하세요~. '**수출 전문 자사몰(쇼핑몰) 제작툴+AI 해외영업 매니저**' 서비스 소개드립니다. ❓수출 기업은 **해외 바이어로부터** 단순한 제품관련 문의부터, B2B 독점 파트너쉽 문의까지 **반복적인 문의**를 자주 받습니다. “제품 수출입 관련 인증/허가가 있나요?” “샘플 주문이 가능한가요?” “MOQ는 얼마인가요?” “납기와 견적은 어떻게 되나요?” “독점 유통 조건이 있나요?” 🤷‍♀️ 하지만 시차, 언어, 담당자 부재로 즉시 답변하지 못하면 좋은 바이어 문의도 거래로 이어지기 어렵습니다. **딜리버리아이오**는 수출기업 대표님/영업매니저님이 직접, 누구나 쉽게 글로벌 자사몰을 만들고, 해외 바이어 문의를 AI Agent로 응대할 수 있도록 돕는 솔루션입니다. 제품정보, 인증자료, 거래조건, FAQ를 등록해두면 **AI Agent**가 **바이어 문의**에 **다국어**로 **응대**하고, 필",
    "website": "https://dealivery.io",
    "email": "team@dealiverym.com",
    "contact": "010-5479-8105",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/571",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "딜리버리아이오(Dealivery)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "SEO",
      "SNS 문구"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "RAG/지식검색",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구"
    ],
    "techEvidence": "GPT, ChatGPT, Gemini, AI에이전트, 에이전트, 검색, 연동, 인프라",
    "priceText": [
      "Pro / 월 구독 / 148,000원"
    ],
    "minPrice": 148000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "SNS/광고 문구 결과물로 첫 고객 반응을 빠르게 확인하려는 딜리버리아이오(Dealivery) 같은 서비스가 필요한 팀",
    "followerCount": 14,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1073,
        "name": "딜리버리아이오(Dealivery)",
        "summary": "AI 다국어 번역지원 수출특화 자사몰(해외 쇼핑몰)",
        "website": "https://dealivery.io",
        "keywords": [
          "AI번역",
          "AI에이전트",
          "글로벌",
          "쇼핑몰",
          "수출",
          "에이전트",
          "인보이스",
          "자사몰",
          "챗봇",
          "해외"
        ],
        "priceText": [
          "Pro / 월 구독 / 148,000원"
        ],
        "priceNumber": 148000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "RAG/지식검색",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "GPT, ChatGPT, Gemini, AI에이전트, 에이전트, 검색, 연동, 인프라"
      }
    ]
  },
  {
    "id": 621,
    "name": "모두원",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/130337/3fdeb941027f472981feb26c2fb7df84.png",
    "summary": "아이디어 입력만으로 RFP부터 MVP까지 2개월 안에 검증하는 AI 창업 기획·개발 올인원 SaaS",
    "description": "모두원은 IT 기반 창업의 기획-개발-검증 전 과정을 AI로 자동화하여, 예비창업자와 초기 스타트업이 아이디어를 빠르게 실행할 수 있도록 지원하는 기술 기업입니다. 핵심 솔루션 [saleskit.one](http://saleskit.one)(세일즈킷)은 자연어로 아이디어를 입력하면 요구사항 정의(RFP)부터 기능 명세, 디자인 스케치, PoC·Prototype·MVP 빌드까지 하나의 파이프라인으로 수행하는 AI SaaS입니다. 최신 대형언어모델 3종을 기획·디자인·개발 각 단계에 특화하여 배치함으로써, 최적의 합리적인 비용으로 최상의 결과물을 도출합니다. AI API 서비스를 직접 다루는 데 익숙하지 않거나, 특정 작업에만 최신 모델을 선택적으로 적용하고 싶은 사용자에게 특히 적합합니다. 크레딧·토큰 기반 실사용 정산으로 비용 부담을 최소화합니다. 모두원은 '도구 의존'이 아닌 '기술 내재화'를 지향합니다. 생성된 코드는 모두 다운로드 가능하고, 코드 트레이싱 리포트와 아키텍처",
    "website": "https://www.saleskit.one/",
    "email": "modooone.team@gmail.com",
    "contact": "010-3969-2858",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/621",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "saleskit.one(세일즈킷) - AI 창업 기획·개발 올인원"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "랜딩페이지",
      "DB설계",
      "MVP",
      "리포트",
      "자동화"
    ],
    "techTags": [
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "랜딩페이지",
      "MVP",
      "리포트",
      "자동화"
    ],
    "techEvidence": "빌더, 랜딩, MVP, 리포트, 자동화, API, DB",
    "priceText": [
      "2개월 기준 30,000원 ~ 200,000원, 팩 선택에 따라 상이 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "시네마틱 랜딩 페이지 (1회): 최신 시네마틱 프롬프트(Tailwind CSS, GSAP, Lenis, ScrollTrigger)가 적용된 즉시 사용 가능한 단일 HTML 랜딩 페이지로, 별도 개발 없이 서비스에 적합한 랜딩 페이지를 완성할 수 있"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 랜딩페이지, MVP 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 10,
    "likeCount": 10,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1134,
        "name": "saleskit.one(세일즈킷) - AI 창업 기획·개발 올인원",
        "summary": "아이디어 입력만으로 RFP부터 MVP까지 2개월 안에 검증하는 AI 창업 기획·개발 올인원 SaaS",
        "website": "https://www.saleskit.one/guide",
        "keywords": [
          "AI SaaS",
          "AI 코드 생성",
          "MVP 빌더",
          "RFP 자동 생성",
          "기능 명세 자동화",
          "기술 내재화",
          "웹앱 자동 생성",
          "창업 기획 자동화",
          "크레딧 과금",
          "트리플 AI 엔진"
        ],
        "priceText": [
          "2개월 기준 30,000원 ~ 200,000원, 팩 선택에 따라 상이 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [
          "시네마틱 랜딩 페이지 (1회): 최신 시네마틱 프롬프트(Tailwind CSS, GSAP, Lenis, ScrollTrigger)가 적용된 즉시 사용 가능한 단일 HTML 랜딩 페이지로, 별도 개발 없이 서비스에 적합한 랜딩 페이지를 완성할 수 있"
        ],
        "deliverables": [
          "랜딩페이지",
          "MVP",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "랜딩페이지",
          "DB설계",
          "MVP",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "빌더, 랜딩, MVP, 리포트, 자동화, API, DB"
      }
    ]
  },
  {
    "id": 820,
    "name": "주식회사볼트앤너트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/214/c3c8a1f860a7485a8d8302a9b4c84952.png",
    "summary": "대화로 완성하는 복잡한 제품 기획 명세서로 제조 비용 절감",
    "description": "**제조업의 AI혁신 생태계를 만드는 컴퍼니 빌더, 볼트앤너트(BOLT&NUT)** 볼트앤너트는 제품을 만들고 싶은 사람과 신뢰할 수 있는 제조 기업을 연결하여 세상을 뒤흔드는 혁신 기업을 만드는 제조 전문 컴퍼니 빌더입니다. 제조업의 거대한 진입장벽을 제거하고, 제조 스타트업의 탄탄한 기반 구축과 지속 가능한 성장을 든든하게 지원합니다 **🏆 대표이력** -산자부 초지능 제조플랫폼 Idea to Product 알키미스트 과제 최종선정(200억 예산) -디자인진흥원 디자인-온라인 제조 플랫폼 6년 연속 선정(국내 유일) -산단공 B2B제조거래 활성화 사업 2년 연속 선정 -창진원 메이커스페이스 제조 전문형 운영 -창진원 올인원팩 주관기관(서울) **🏆 왜 볼트앤너트와 함께해야 할까요?** **압도적인 레퍼런스**: 현재까지 5,500건 이상의 누적 제조 프로젝트를 성공적으로 수행하며, 1,000개 사 이상의 스타트업 성장을 견인한 노하우를 보유하고 있습니다. **신뢰",
    "website": "",
    "email": "gyyoon@boltnnut.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/820",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AI 가상 PM 및 예산·조달 최적화 솔루션 (CHAT NPI)"
    ],
    "majorTags": [
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "노코드/앱빌더"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "빌더",
    "priceText": [
      "월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "노코드/앱빌더 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 가상 PM 및 예산·조달 최적화 솔루션 (CHAT NPI) 같은 서비스가 필요한 팀",
    "followerCount": 17,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1415,
        "name": "AI 가상 PM 및 예산·조달 최적화 솔루션 (CHAT NPI)",
        "summary": "대화로 완성하는 복잡한 제품 기획 명세서로 제조 비용 절감",
        "website": "",
        "keywords": [
          "개발명세서",
          "대화형",
          "제조",
          "제품",
          "하드웨어"
        ],
        "priceText": [
          "월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "노코드/앱빌더"
        ],
        "techEvidence": "빌더"
      }
    ]
  },
  {
    "id": 662,
    "name": "제이엠코퍼레이션 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185346/5bef5ca047734c3ea92e2d9b193a2cbd.png",
    "summary": "[AI이미지(사진) | AI비디오(영상) | AI오디오(목소리)] 생성형 AI콘텐츠 생성 워크스페이스 - AI제품사진,상세페이지 이미지 작업을 전문 프롬프트 엔지니어링으로 손쉽게 하세요.",
    "description": "제이엠코퍼레이션은 누구나 쉽고 전문적으로 AI 콘텐츠를 제작할 수 있는 환경을 만들어가는 AI 콘텐츠 전문기업입니다. AI 모델 활용, 프롬프트 엔지니어링, 워크플로우 기반 제작 환경을 중심으로 크리에이터와 비즈니스가 더 합리적인 비용으로 고품질 콘텐츠를 생산할 수 있도록 지원합니다.",
    "website": "https://www.momocanvas.com",
    "email": "help@momocanvas.com",
    "contact": "050-7131-1017",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/662",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "momocanvas"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "영상/이미지"
    ],
    "detailTags": [
      "광고",
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지"
    ],
    "techEvidence": "생성형, AI 모델, 이미지, 사진, 비디오, 워크플로우",
    "priceText": [
      "Wonderful / 월 구독 / 4,900원"
    ],
    "minPrice": 4900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "15일: Free 사용권"
    ],
    "recommendation": "SNS/광고 문구, 영상 결과물로 첫 고객 반응을 빠르게 확인하려는 momocanvas 같은 서비스가 필요한 팀",
    "followerCount": 12,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1196,
        "name": "momocanvas",
        "summary": "[AI이미지(사진) | AI비디오(영상) | AI오디오(목소리)] 생성형 AI콘텐츠 생성 워크스페이스 - AI제품사진,상세페이지 이미지 작업을 전문 프롬프트 엔지니어링으로 손쉽게 하세요.",
        "website": "",
        "keywords": [
          "AI광고사진",
          "AI그림",
          "AI비디오생성",
          "AI사진",
          "AI상세페이지",
          "AI오디오생성",
          "AI워크스페이스",
          "AI이미지생성",
          "AI제품사진",
          "프롬프트엔지니어링"
        ],
        "priceText": [
          "Wonderful / 월 구독 / 4,900원"
        ],
        "priceNumber": 4900,
        "pricingKind": "fixed",
        "benefits": [
          "15일: Free 사용권"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "영상/이미지"
        ],
        "detailTags": [
          "광고",
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, AI 모델, 이미지, 사진, 비디오, 워크플로우"
      }
    ]
  },
  {
    "id": 842,
    "name": "펄스나인 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/119639/2f19f88a00654ea9b8bcc64329507a77.png",
    "summary": "AI 캐릭터 디자인 스튜디오",
    "description": "[공급기업 소개] 펄스나인 (PULSE9) 모두의창업 공급 AI솔루션 : 딥리얼 스튜디오 - https://deepreal.online 노코드·로우코드 : 웹/앱 빌더 AI, 데이터베이스 설계 지원 등 생산성 : AI 페어 프로그래밍, 코딩, 기술 문서 자동화(API 생성 툴 등) 등 데이터·인프라 : AI 분석 대시보드, 서버/GPU 자원 등 1. 기업 핵심 역량 기술 혁신성: 독자적인 'Deep Real AI' 기술을 보유한 그래픽 AI 전문 벤처기업 및 TIPS 선정 기업 글로벌 검증: 세계 최초 가상 걸그룹 '이터니티'를 통해 CNN, BBC 등 글로벌 매체로부터 기술력과 시장성 인정 맞춤형 솔루션: 대형 자본 없이도 고퀄리티 디지털 휴먼 콘텐츠 생성이 가능한 초효율 AI 프로세스 구축 2. 주요 제공 솔루션 및 서비스 (모두의 창업 특화) ① 딥리얼 스튜디오 (DeepReal Studio) - AI 영상 생성 SaaS 특징: AI캐릭터 개발에 특화된 AI 스튜디오 웹",
    "website": "https://www.pulse9.net",
    "email": "jp@pulse9.net",
    "contact": "010-2495-8441",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/842",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "딥리얼 스튜디오"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "노코드",
      "DB설계",
      "브랜딩",
      "영상",
      "이미지",
      "자동화",
      "교육"
    ],
    "techTags": [
      "시장조사/리서치",
      "노코드/앱빌더",
      "데이터 분석/대시보드",
      "이미지 생성",
      "영상 생성",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "페르소나, 노코드, 로우코드, 빌더, 대시보드, 분석, 이미지, 사진, 영상 생성, 숏폼",
    "priceText": [
      "2000000 / CREDIT_TOKEN / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 영상, 이미지 근거가 필요한 초기 창업팀",
    "followerCount": 10,
    "likeCount": 10,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1456,
        "name": "딥리얼 스튜디오",
        "summary": "AI 캐릭터 디자인 스튜디오",
        "website": "",
        "keywords": [
          "디지털휴먼",
          "뮤직비디오",
          "버튜버",
          "세계관",
          "영상",
          "캐릭터"
        ],
        "priceText": [
          "2000000 / CREDIT_TOKEN / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "노코드",
          "DB설계",
          "브랜딩",
          "영상",
          "이미지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "데이터 분석/대시보드",
          "이미지 생성",
          "영상 생성",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "페르소나, 노코드, 로우코드, 빌더, 대시보드, 분석, 이미지, 사진, 영상 생성, 숏폼, 비디오, 음성"
      }
    ]
  },
  {
    "id": 704,
    "name": "주식회사 바로스튜디오",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/112955/92be6e883b6b444c8ee9f95db529e7e4.png",
    "summary": "AI 콘텐츠 자동 제작 플랫폼을 활용하여 실제 숏폼·홍보영상을 제작하고 기술을 실증하는 사업",
    "description": "주식회사 바로스튜디오는 부산을 기반으로 영상 콘텐츠 제작과 AI 기반 콘텐츠 기획 서비스를 제공하는 콘텐츠 전문 기업입니다. 기업홍보영상, 인터뷰 영상, 제품사진, 웹드라마, 브랜디드 콘텐츠 등 다양한 제작 경험을 보유하고 있으며, 소상공인·로컬 브랜드·창업기업의 온라인 홍보 콘텐츠 제작을 지원하고 있습니다. 🚀 주요 사업 분야 ① 기업 및 기관 홍보영상 제작 ② 제품·서비스 홍보 콘텐츠 제작 ③ 웹드라마 및 브랜디드 콘텐츠 제작 ④ 숏폼 영상 및 SNS 콘텐츠 제작 ⑤ AI 기반 콘텐츠 기획·제작 서비스 개발 💡 AI BARO MEDIA 서비스 현재 자체 개발 중인 「AI BARO MEDIA」 플랫폼은 사용자가 등장인물, 장소, 상황 및 콘텐츠 정보를 입력하면 AI가 영상 대본, 촬영가이드, 자막, 콘티 기획안을 자동 생성하는 AI 콘텐츠 제작 서비스입니다. 또한 생성된 결과물을 실제 숏폼 영상, 홍보영상, SNS 콘텐츠 제작 과정과 연계하여 콘텐츠 제작의 효",
    "website": "https://aibaromedia.com",
    "email": "baromedia@naver.com",
    "contact": "010-2844-1461",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/704",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "소상공인을 위한 AI 콘텐츠 자동 제작 SaaS 플랫폼 개발"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "SNS 문구",
      "브랜딩",
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "생성형, 사진, 숏폼, 자동화",
    "priceText": [
      "1000 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 이미지 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 소상공인을 위한 AI 콘텐츠 자동 제작 SaaS 플랫폼 개발 같은 서비스가 필요한 팀",
    "followerCount": 11,
    "likeCount": 8,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1258,
        "name": "소상공인을 위한 AI 콘텐츠 자동 제작 SaaS 플랫폼 개발",
        "summary": "AI 콘텐츠 자동 제작 플랫폼을 활용하여 실제 숏폼·홍보영상을 제작하고 기술을 실증하는 사업",
        "website": "",
        "keywords": [
          "AI 콘텐츠",
          "숏폼·홍보영상을 제작",
          "자동 제작 플랫폼"
        ],
        "priceText": [
          "1000 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "브랜딩",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 사진, 숏폼, 자동화"
      }
    ]
  },
  {
    "id": 634,
    "name": "스위치 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189289/73d7a9a8326d47ed806af8d8369e36c9.png",
    "summary": "처음 바이브코딩 사용자를 위한 AI 코파일럿 : 아이디어만 넣으면 기획 구체화·자료조사·수익모델·시장분석·DB/솔루션 개발까지 끝내주는 창업 AI 솔루션",
    "description": "***\"AI로 누구나 창업할 수 있는 세상을 만듭니다\"*** **🌍 Our Vision** ***\"좋은 아이디어가 자본·경험·인맥 때문에 사라지지 않는 세상.\"*** 매년 수만 명의 창업가가 \"어떻게 사업화해야 할지 몰라서\" 아이디어를 포기합니다. Sweech는 **AI라는 가장 강력한 평등화 도구**로, 누구나 자신의 아이디어를 실제 사업으로 만들 수 있게 합니다. **💡 Why Sweech?** **\"Sweech\" = Smart + Workflow + Reach** *복잡한 일을 AI로 똑똑하게 풀어내고, 누구에게나 닿게 한다.* 우리는 단순히 AI 도구를 만들지 않습니다. **\"창업 · 기획 · 실행\"이라는 인간의 가장 본질적인 도전**을 AI로 다시 정의합니다.",
    "website": "https://sweech.io",
    "email": "admin@sweech.io",
    "contact": "010-2547-2432",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/634",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "PMPO(피엠피오)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "피드백",
      "DB설계",
      "리포트"
    ],
    "techTags": [
      "시장조사/리서치",
      "노코드/앱빌더",
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "리포트"
    ],
    "techEvidence": "시장분석, 바이브코딩, 분석, 리포트, DB",
    "priceText": [
      "베이직 플랜 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "아이디어 진단: 회원가입 후 아이디어를 입력하면 AI가 시장성·실현가능성·차별성 3가지 점수를 무료로 평가해드립니다."
    ],
    "recommendation": "시장조사/리서치, 노코드/앱빌더 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 PMPO(피엠피오) 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 12,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1154,
        "name": "PMPO(피엠피오)",
        "summary": "처음 바이브코딩 사용자를 위한 AI 코파일럿 : 아이디어만 넣으면 기획 구체화·자료조사·수익모델·시장분석·DB/솔루션 개발까지 끝내주는 창업 AI 솔루션",
        "website": "",
        "keywords": [
          "IR준비",
          "PDF리포트",
          "사업계획서",
          "수익모델",
          "시장분석",
          "아이디어진단",
          "예비창업자",
          "창업AI",
          "피칭연습"
        ],
        "priceText": [
          "베이직 플랜 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "아이디어 진단: 회원가입 후 아이디어를 입력하면 AI가 시장성·실현가능성·차별성 3가지 점수를 무료로 평가해드립니다."
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "리포트"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "피드백",
          "DB설계",
          "리포트"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "시장분석, 바이브코딩, 분석, 리포트, DB"
      }
    ]
  },
  {
    "id": 677,
    "name": "주식회사 뉴런즈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188675/9da31dd0db7e4cc2a99126595d5d5e43.png",
    "summary": "딥페이크 생성 방지 솔루션: 얼굴 이미지·영상을 딥페이크 생성에 활용할 수 없도록 얼굴 검출 단계를 선제적으로 방어하는 AI 솔루션",
    "description": "㈜뉴런즈는 AI 솔루션 개발, 데이터 분석, 데이터 가공 및 AI 서비스 구축을 전문으로 하는 AI·데이터 전문기업입니다. 데이터바우처 AI 공급기업으로서 데이터 기획·설계부터 수집·생성, 가공, 분석, AI 모델 적용까지 전 과정을 지원할 수 있는 역량을 보유하고 있으며, 스마트서비스 지원사업 등 정부지원사업 수행 경험을 바탕으로 기업의 AI 도입과 서비스 고도화를 지원하고 있습니다. 주요 공급 솔루션으로는 딥페이크 생성 방지 솔루션 **Deepguard**, 한국관광특화 LLM 챗봇 솔루션 **PerfecTour**, 이미지 표절 검증 AI 솔루션 **SimiliQ**를 보유하고 있습니다. 각 솔루션은 이미지·영상 보호, 관광 특화 대화형 안내, 이미지 유사도 및 표절 검증 등 다양한 산업 현장의 AI 활용 수요에 대응할 수 있도록 구성되어 있습니다. 또한 뉴런즈는 자체 개발·운영 중인 관광 플랫폼 **완벽한하루**를 통해 실제 20만 사용자 기반 서비스 운영 경험과 관광",
    "website": "https://nwrn.net/",
    "email": "young.kim@nwrn.net",
    "contact": "070-8080-4607",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/677",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "딥가드(Deepguard)",
      "퍼펙투어(PerfecTour)",
      "SimiliQ"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "영상",
      "이미지",
      "SEO"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "이미지 생성",
      "설문/서베이",
      "RAG/지식검색"
    ],
    "deliverables": [
      "영상",
      "이미지"
    ],
    "techEvidence": "LLM, AI 모델, 데이터 분석, 분석, 이미지, 사진, 응답, RAG, 검색",
    "priceText": [
      "스타터 / 월 구독 / 300,000원",
      "1,000 크레딧 / CREDIT_TOKEN / 15,000원",
      "100 크레딧 / CREDIT_TOKEN / 20,000원"
    ],
    "minPrice": 15000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "월 무료 이용: 비기너(무료플랜) 이미지 5장/월 무료 제공",
      "월 무료 이용: 월 기본 50회 무료 제공",
      "월 무료 이용: 월 기본 5회 무료 제공"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 영상, 이미지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 13,
    "likeCount": 6,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1221,
        "name": "딥가드(Deepguard)",
        "summary": "딥페이크 생성 방지 솔루션: 얼굴 이미지·영상을 딥페이크 생성에 활용할 수 없도록 얼굴 검출 단계를 선제적으로 방어하는 AI 솔루션",
        "website": "",
        "keywords": [
          "AI 얼굴탐지",
          "딥페이크",
          "딥페이크방지",
          "사진/영상/이미지",
          "영상 보호",
          "콘텐츠 보안"
        ],
        "priceText": [
          "스타터 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "usage",
        "benefits": [
          "월 무료 이용: 비기너(무료플랜) 이미지 5장/월 무료 제공"
        ],
        "deliverables": [
          "영상",
          "이미지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성"
        ],
        "techEvidence": "LLM, AI 모델, 데이터 분석, 분석, 이미지, 사진"
      },
      {
        "id": 1222,
        "name": "퍼펙투어(PerfecTour)",
        "summary": "한국관광특화 LLM 챗봇 솔루션: 한국 관광 도메인에 특화된 AI 챗봇 구축 및 대화형 정보제공 솔루션",
        "website": "",
        "keywords": [
          "AI 관광 챗봇",
          "RAG 검색",
          "관광해설",
          "다국어 응답",
          "맛집 추천",
          "스마트관광",
          "여행일정 추천",
          "한국관광 특화"
        ],
        "priceText": [
          "1,000 크레딧 / CREDIT_TOKEN / 15,000원"
        ],
        "priceNumber": 15000,
        "pricingKind": "usage",
        "benefits": [
          "월 무료 이용: 월 기본 50회 무료 제공"
        ],
        "deliverables": [
          "영상",
          "이미지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "설문/서베이",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성"
        ],
        "techEvidence": "LLM, AI 모델, 응답, RAG, 검색, 데이터 분석, 분석, 이미지"
      },
      {
        "id": 1223,
        "name": "SimiliQ",
        "summary": "이미지 표절 검증 AI 솔루션: 저작권 검증, 표절 확인을 위한 AI 이미지 유사도 분석 및 사유 분석 솔루션",
        "website": "",
        "keywords": [
          "AI 이미지 분석",
          "디자인 검토",
          "사유 분석",
          "시각적 근거",
          "이미지 유사도",
          "저작권 보호",
          "콘텐츠 검수",
          "표절 검증"
        ],
        "priceText": [
          "100 크레딧 / CREDIT_TOKEN / 20,000원"
        ],
        "priceNumber": 20000,
        "pricingKind": "usage",
        "benefits": [
          "월 무료 이용: 월 기본 5회 무료 제공"
        ],
        "deliverables": [
          "영상",
          "이미지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성"
        ],
        "techEvidence": "LLM, AI 모델, 데이터 분석, 분석, 이미지"
      }
    ]
  },
  {
    "id": 836,
    "name": "투기브랩스(주)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185783/13e8f60ecd56404a9a2d80df78ca41ce.png",
    "summary": "최신 글로벌 AI 모델부터 고품질 이미지 · 영상 생성까지, WOLI(워리)에서 모두 활용하세요.",
    "description": "TOGIEVE LABS 투기브랩스(주)는 인간과 AI 기술의 조화로운 연결을 통해 혁신적인 서비스를 창출하는 AI Tech 스타트업입니다. AI 엔지니어링, 서비스 개발, 기획·디자인·마케팅 등 각 분야에서 10년 이상의 탄탄한 경력을 쌓은 베테랑 전문가들이 모여 최상의 시너지를 내고 있습니다. 이를 바탕으로 누구나 쉽게 활용할 수 있는 범용성과 비즈니스 실무에 최적화된 전문성을 동시에 갖춘 올인원 AI 플랫폼, 'WOLI(워리)'를 개발하여 서비스하고 있습니다.",
    "website": "https://www.mywoli.ai",
    "email": "hgkim@togievelabs.com",
    "contact": "010-6763-0340",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/836",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "'WOLI' (워리)"
    ],
    "majorTags": [
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성"
    ],
    "deliverables": [
      "영상",
      "이미지"
    ],
    "techEvidence": "AI 모델, 이미지, 영상 생성, 동영상",
    "priceText": [
      "Pro 요금제 / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: WOLI의 강력한 기능을 부담 없이 체험해 볼 수 있는 무료 플랜"
    ],
    "recommendation": "LLM/생성형AI, 이미지 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 'WOLI' (워리) 같은 서비스가 필요한 팀",
    "followerCount": 11,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1445,
        "name": "'WOLI' (워리)",
        "summary": "최신 글로벌 AI 모델부터 고품질 이미지 · 영상 생성까지, WOLI(워리)에서 모두 활용하세요.",
        "website": "",
        "keywords": [
          "AI동영상생성",
          "AI모델",
          "AI서비스",
          "AI이미지생성",
          "다중AI답변",
          "멀티AI",
          "생산성",
          "생산성AI"
        ],
        "priceText": [
          "Pro 요금제 / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: WOLI의 강력한 기능을 부담 없이 체험해 볼 수 있는 무료 플랜"
        ],
        "deliverables": [
          "영상",
          "이미지"
        ],
        "majorTags": [
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성"
        ],
        "techEvidence": "AI 모델, 이미지, 영상 생성, 동영상"
      }
    ]
  },
  {
    "id": 682,
    "name": "주식회사 데이타몬드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/100626/5087f55b013b4b7986fc8d89e9c07792.png",
    "summary": "예비창업자가 아이디어 검증부터 제품 사용성 평가까지, 초기 창업의 전 과정에서 필요한 고객 데이터를 손쉽게 수집하고 해석할 수 있는 AI 기반 UX 리서치 솔루션",
    "description": "> 데이타몬드는 고객의 제로파티 데이트를 통해 고객의 페르소나를 분석하고 소비자에게 최적화된 맞춤형 정보를 제공하는 AI/ 빅데이터 기업입니다. ### 🌟 우리의 비전 - **Mission**: 고객 데이터를 세상에서 가장 가치 있는 자산으로 만들어, 데이터 소득을 통해 풍요로운 삶을 가능하게 합니다. - **Vision**: 지식 노동자의 시대에서 데이터 생산자의 시대로 전환을 주도합니다. ### 🚀 예비창업자를 위한 솔루션 보유 ``` ``` - **포인트몬스터**: 미션 리워드 기반 제로파티 데이터 수집 플랫폼. 스타트업도 손쉽게 고객 데이터를 확보할 수 있습니다. - **PDA**: 결측치 자동 완성 및 데이터 증강 솔루션으로 불완전한 데이터를 보완합니다. - **페르소나 파인더**: 고객 페르소나 검색·분석·마케팅을 연결하는 플랫폼으로 빠른 시장 적응을 지원합니다. - **펠린AI**: 기록을 실행으로 바꾸는 대화형 AI 코칭 플랫폼으로 창업자의 실행력을 높입",
    "website": "http://datamond.ai",
    "email": "choi.sungphil@datamond.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/682",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "SurveyLab - AI 기반 UX리서치 플랫폼"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SEO",
      "시장조사",
      "컨설팅"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "설문/서베이",
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "시장/수요조사",
      "컨설팅"
    ],
    "techEvidence": "AI 고객, 설문, 서베이, 리서치, 페르소나, 검색, 분석",
    "priceText": [
      "기본 요금 / 월 구독 / 48,000원"
    ],
    "minPrice": 48000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 시장/수요조사, 컨설팅 근거가 필요한 초기 창업팀",
    "followerCount": 12,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1229,
        "name": "SurveyLab - AI 기반 UX리서치 플랫폼",
        "summary": "예비창업자가 아이디어 검증부터 제품 사용성 평가까지, 초기 창업의 전 과정에서 필요한 고객 데이터를 손쉽게 수집하고 해석할 수 있는 AI 기반 UX 리서치 솔루션",
        "website": "https://www.surveylab.co.kr/",
        "keywords": [
          "AI 고객 분석",
          "고객 데이터 수집",
          "서베이",
          "서베이랩",
          "설문조사"
        ],
        "priceText": [
          "기본 요금 / 월 구독 / 48,000원"
        ],
        "priceNumber": 48000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "시장/수요조사",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "시장조사",
          "컨설팅"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "설문/서베이",
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "AI 고객, 설문, 서베이, 리서치, 페르소나, 검색, 분석"
      }
    ]
  },
  {
    "id": 739,
    "name": "주식회사 아토즈소프트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/198039/a54025888e844816baa03dc06805125b.png",
    "summary": "AI 기반 사내문서 지능형 챗봇 플랫폼 : 물어보는 AI가 아닌, 일해주는 AI - 사내 문서 Q&A부터 제안서 자동생성, 주간보고서까지. 5분 안에 시작하세요.",
    "description": "**기업의 성장을 돕는 AX·DX 파트너** 기획부터 구축, 운영, 확장까지 비즈니스에 바로 힘이 되는 AI·데이터·플랫폼을 만듭니다",
    "website": "https://docpilot.kr",
    "email": "atozsoft@atozsoft.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/739",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "DocPilot",
      "팀데이"
    ],
    "majorTags": [
      "데이터/리포트",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "리포트",
      "기타/확인필요"
    ],
    "techTags": [
      "AI 에이전트",
      "데이터 분석/대시보드",
      "DB/인프라",
      "확인필요"
    ],
    "deliverables": [
      "리포트",
      "상세 확인 필요"
    ],
    "techEvidence": "AI에이전트, 에이전트, 보고서, 인프라",
    "priceText": [
      "Pro 요금제 / 유/무료 혼합 / 400,000원",
      "프로요금제 / 월 구독 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 티어: 문서 5건, 월 20회 체험 후 유료 전환",
      "Free 티어: 5명이하 스토리지 1GB 30일 체험 제공"
    ],
    "recommendation": "AI 에이전트, 데이터 분석/대시보드 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 6,
    "likeCount": 12,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1304,
        "name": "DocPilot",
        "summary": "AI 기반 사내문서 지능형 챗봇 플랫폼 : 물어보는 AI가 아닌, 일해주는 AI - 사내 문서 Q&A부터 제안서 자동생성, 주간보고서까지. 5분 안에 시작하세요.",
        "website": "https://docpilot.kr",
        "keywords": [
          "AI에이전트",
          "AI챗봇",
          "사내문서",
          "위젯",
          "제안서자동생성"
        ],
        "priceText": [
          "Pro 요금제 / 유/무료 혼합 / 400,000원"
        ],
        "priceNumber": 400000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 티어: 문서 5건, 월 20회 체험 후 유료 전환"
        ],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트"
        ],
        "techTags": [
          "AI 에이전트",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "AI에이전트, 에이전트, 보고서, 인프라"
      },
      {
        "id": 1305,
        "name": "팀데이",
        "summary": "출퇴근, 프로젝트, 채팅, 급여, AI 까지 하나의 플랫폼으로 회사 운영의 모든 것을 관리하세요.",
        "website": "https://teamday.kr",
        "keywords": [
          "급여",
          "채팅",
          "출퇴근",
          "프로젝트관리"
        ],
        "priceText": [
          "프로요금제 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 티어: 5명이하 스토리지 1GB 30일 체험 제공"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 671,
    "name": "주식회사 나래정보기술",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186429/01656c995db649c5b1bb8807901c5ebd.jpg",
    "summary": "AI기반 SQL성능 튜닝관리시스템 : SQL을 A등급에서 F 등급으로 자동 평가하고 LLM으로 튜닝 가이드를 제시합니다",
    "description": "나래정보기술은 2019년 설립된 데이터베이스 컨설팅·엔지니어링 전문 기업으로, Oracle과 PostgreSQL을 중심으로 한 DBMS 성능 튜닝, SI 프로젝트, IT 컨설팅 분야에서 깊이 있는 전문성을 축적해 왔습니다. 단순 기술 용역을 넘어 고객사의 데이터 자산이 진정한 비즈니스 가치로 전환되도록 돕는 것을 사명으로 삼고 있습니다. 회사의 핵심 슬로건인 \"數據利世(수거이세)\" 는 '데이터로 세상을 이롭게 한다'는 의미로, 데이터베이스 기술이 단순한 인프라가 아니라 고객사의 이익 창출과 경쟁력 강화의 원천이 되어야 한다는 철학을 담고 있습니다. 주요 사업 영역 첫째, DBMS 성능 진단 및 튜닝 컨설팅입니다. Oracle RAC 분석, AWR/ASH 기반 워크로드 진단, 메모리 구성 최적화, 장애 상황의 근본 원인 분석 및 사후보고서 작성에 이르기까지, 운영 현장에서 검증된 풍부한 경험을 보유하고 있습니다. 둘째, Oracle to PostgreSQL 마이그레이션 및 차세대 DB",
    "website": "https://www.naraeit.co.kr",
    "email": "sijung@naraeit.co.kr",
    "contact": "031-8034-1318",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/671",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "SQL TMS for Oracle, PostgreSQL"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "피드백",
      "DB설계",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "LLM, 분석, 보고서, 자동화, 연동, DB, 데이터베이스, 인프라",
    "priceText": [
      "Standard 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 리포트, 자동화 근거가 필요한 초기 창업팀",
    "followerCount": 13,
    "likeCount": 5,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1468,
        "name": "SQL TMS for Oracle, PostgreSQL",
        "summary": "AI기반 SQL성능 튜닝관리시스템 : SQL을 A등급에서 F 등급으로 자동 평가하고 LLM으로 튜닝 가이드를 제시합니다",
        "website": "https://www.naraeit.co.kr/app-landing-page",
        "keywords": [
          "AI데이터베이스",
          "DBA자동화",
          "DB성능",
          "LLM튜닝",
          "oracle",
          "postgresql",
          "SQL튜닝",
          "데이터베이스관리",
          "성능모니터링",
          "쿼리최적화"
        ],
        "priceText": [
          "Standard 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "피드백",
          "DB설계",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 분석, 보고서, 자동화, 연동, DB, 데이터베이스, 인프라"
      }
    ]
  },
  {
    "id": 743,
    "name": "주식회사 어크로스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/122694/84649d2269204d759284766563a63a2b.png",
    "summary": "블로그가 네이버 AI 검색에 추천되고 있는지 확인하는 도구",
    "description": "🏢 어크로스는 “AI가 답하는 세상에서, 브랜드가 선택받도록” 만든다는 미션 아래 AI 답변 최적화, GEO·AEO를 전문으로 하는 AI 콘텐츠 최적화 기업입니다. 검색의 시대가 답의 시대로 바뀌면서, 이제 브랜드는 검색 결과 상위 노출을 넘어 ChatGPT, Claude, Gemini, Perplexity, 네이버 AI 브리핑 등 AI 답변 안에서 어떻게 언급되고 추천되는지가 중요해졌습니다. 어크로스는 기업과 브랜드가 AI의 답변 속에서 선택받을 수 있도록 진단, 전략 설계, 콘텐츠 최적화, 성과 모니터링을 제공합니다. 🚀 어크로스는 자체 프로덕트 GPTO, GenRank, NAEO를 직접 운영하며, 파트너사와 함께 산업별 AI 답변 최적화 솔루션도 공급하고 있습니다. 브랜드가 AI 답변에서 어떻게 불리는지 분석하고, 경쟁사 대비 언급률과 맥락을 측정하며, AI가 학습하기 좋은 콘텐츠 구조와 배포 전략을 설계합니다. 💡 대표 이재홍은 KAIST 산업공학을 졸업하고 제일기",
    "website": "https://www.across.cx/",
    "email": "ask@naeo.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/743",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "NAEO"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "발표자료",
      "피드백",
      "브랜딩",
      "영상",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "IR/발표자료",
      "블로그",
      "리포트",
      "영상",
      "컨설팅"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, Gemini, 생성형, 경쟁사, 검색, 분석",
    "priceText": [
      "베이직 / 유/무료 혼합 / 19,900원"
    ],
    "minPrice": 19900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료 플랜: 무료 즉시 진단 회원가입 후 블로그 주소만 넣으면 블로그 최신 포스팅 10개 AI 브리핑 추천 여부, 통합검색 여부, 키워드 검색량 등 확인 가능 합니다"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 IR/발표자료, 블로그 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 9,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1309,
        "name": "NAEO",
        "summary": "블로그가 네이버 AI 검색에 추천되고 있는지 확인하는 도구",
        "website": "https://www.naeo.kr/",
        "keywords": [
          "AI추천",
          "검색노출",
          "네이버AI",
          "네이버블로그",
          "마케팅성과",
          "블로그마케팅",
          "키워드분석"
        ],
        "priceText": [
          "베이직 / 유/무료 혼합 / 19,900원"
        ],
        "priceNumber": 19900,
        "pricingKind": "fixed",
        "benefits": [
          "무료 플랜: 무료 즉시 진단 회원가입 후 블로그 주소만 넣으면 블로그 최신 포스팅 10개 AI 브리핑 추천 여부, 통합검색 여부, 키워드 검색량 등 확인 가능 합니다"
        ],
        "deliverables": [
          "IR/발표자료",
          "블로그",
          "리포트",
          "영상",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "발표자료",
          "피드백",
          "브랜딩",
          "영상",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, Gemini, 생성형, 경쟁사, 검색, 분석"
      }
    ]
  },
  {
    "id": 751,
    "name": "주식회사 엘엔디씨",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186587/11e7f5d56d9e433f97670be24e6744b1.png",
    "summary": "부동산 매물 비교분석, 투자 수익 시뮬레이션, 신축·개발 사업성 검토를 지원하는 데이터 기반 의사결정 솔루션입니다.",
    "description": "빅데이터/AI 기반, 부동산 사업성검토 자동화솔루션 \"랜드업 (LanDup)\" 서비스를 운영중입니다. \"랜드업\"은 서비스런칭 단기간에 1만명 이상의 사용자를 확보하며, 중개, 시행/시공, 경/공매, 금융 업종에서 빠르게 퍼져가고 있습니다. \"랜드업\"과 함께 빠르게 성장하고 싶은 분들을 환영합니다 ! #랜드업 #AI자동화보고서 #부동산분석 #사업성검토 #자동화솔루션 #중개 #시행 #시공 #금융 #경매 #경공매 고객과 함께 성장하는 부동산 시장의 밸류체인 연결 플랫폼을 지향합니다. - (’26.04) 2026년 「모두의 창업 프로젝트」 AI 솔루션 공급기업 선정 - (’26.04) 2026년 핀테크 큐브 (프론트원) 9기 선정 - (’26.04) 2026년 중소벤처기업부 창업도약패키지 (경기창조경제혁신센터) 선정 - (’25.10) NH농협은행 'NH올원뱅크' App 내, 랜드업 서비스 제공 계약체결 (\"내일의 땅\" 메뉴에서 랜드업 서비스 제공중) - (’25.08) 글로벌 부",
    "website": "https://www.lan-dup.com/",
    "email": "biz@lndc.co.kr",
    "contact": "070-8624-7890",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/751",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "랜드업(LanDup) - 부동산 투자 분석 및 사업성 검토 솔루션",
      "랜드업(LanDup) - 부동산 매물 탐색 및 정보 조회 솔루션",
      "랜드업(LanDup) - 단일 매물 투자 분석 리포트 솔루션"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "DB설계",
      "리포트",
      "자동화",
      "SEO"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라",
      "RAG/지식검색"
    ],
    "deliverables": [
      "리포트",
      "자동화"
    ],
    "techEvidence": "시뮬레이션, 분석, 보고서, 자동화, API, DB, 인프라, 검색, 리포트",
    "priceText": [
      "랜드업 투자 분석 및 사업성 검토 2개월 이용권 / 월 구독 / 1,000,000원",
      "랜드업 매물 탐색 및 정보 조회 2개월 이용권 / 월 구독 / 600,000원",
      "랜드업 단일 매물 투자 분석 리포트 2개월 이용권 / 월 구독 / 400,000원"
    ],
    "minPrice": 400000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "가상고객/시뮬레이션, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 랜드업(LanDup) - 부동산 투자 분석 및 사업성 검토 솔루션 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 13,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1324,
        "name": "랜드업(LanDup) - 부동산 투자 분석 및 사업성 검토 솔루션",
        "summary": "부동산 매물 비교분석, 투자 수익 시뮬레이션, 신축·개발 사업성 검토를 지원하는 데이터 기반 의사결정 솔루션입니다.",
        "website": "",
        "keywords": [
          "API데이터제공",
          "CSV데이터제공",
          "매물비교분석",
          "부동산데이터",
          "부동산투자분석",
          "사업성검토",
          "수익률분석",
          "신축개발분석",
          "의사결정지원",
          "투자시뮬레이션"
        ],
        "priceText": [
          "랜드업 투자 분석 및 사업성 검토 2개월 이용권 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "시뮬레이션, 분석, 보고서, 자동화, API, DB, 인프라"
      },
      {
        "id": 1325,
        "name": "랜드업(LanDup) - 부동산 매물 탐색 및 정보 조회 솔루션",
        "summary": "지역·가격·유형·면적 조건으로 부동산 매물을 탐색하고, 실거래 기반 가격 정보와 가격 흐름을 확인할 수 있는 데이터 기반 매물 정보 조회 솔루션",
        "website": "",
        "keywords": [
          "API데이터제공",
          "CSV데이터제공",
          "가격흐름",
          "건축물정보",
          "매물정보조회",
          "부동산데이터",
          "부동산매물탐색",
          "실거래가",
          "입지정보",
          "조건검색"
        ],
        "priceText": [
          "랜드업 매물 탐색 및 정보 조회 2개월 이용권 / 월 구독 / 600,000원"
        ],
        "priceNumber": 600000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "DB설계",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "검색, 분석, 보고서, 자동화, API, DB, 인프라"
      },
      {
        "id": 1326,
        "name": "랜드업(LanDup) - 단일 매물 투자 분석 리포트 솔루션",
        "summary": "개별 부동산 매물의 투자 구조와 수익성을 분석하여, 주요 투자 지표와 입지·가격 흐름 정보를 리포트로 제공하는 데이터 기반 단일 매물 분석 솔루션",
        "website": "",
        "keywords": [
          "API데이터제공",
          "CSV데이터제공",
          "가격흐름",
          "단일매물분석",
          "부동산데이터",
          "수익률분석",
          "수익성분석",
          "입지분석",
          "투자분석리포트",
          "투자지표"
        ],
        "priceText": [
          "랜드업 단일 매물 투자 분석 리포트 2개월 이용권 / 월 구독 / 400,000원"
        ],
        "priceNumber": 400000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "분석, 리포트, 보고서, 자동화, API, DB, 인프라"
      }
    ]
  },
  {
    "id": 763,
    "name": "주식회사 위븐",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/146919/8f317530f9584569a12c8281775f5a85.png",
    "summary": "AI 바이브코딩 기반 웹사이트 자동생성 서비스 - 대화하듯 입력하면 AI가 랜딩페이지·홈페이지를 자동으로 만들어드립니다",
    "description": "**주식회사 위븐은 누구나 3분 안에 웹사이트를 만들 수 있도록 돕는 AI 바이브코딩 전문기업입니다.** 위븐은 웹 개발·디자인 분야에서 20년 이상 경력을 쌓아온 전문가들이 모여 창업한 회사입니다. 웹어워드코리아 대상 수상, LG·삼성 등 대기업 웹 프로젝트 총괄, 다년간의 웹에이전시 운영을 통해 쌓아 온 노하우를 AI로 옮기는 작업에서 출발했습니다. 자체 개발한 Z.LLM 언어모델과 컴퓨터비전 AI를 기반으로, 프롬프트 한 줄만으로 디자인까지 완성된 반응형 웹사이트를 3분 안에 자동 생성하는 **'Zaemit(재밋)**'을 서비스하고 있습니다. AI 웹 생성 관련 기술특허와 GS 1등급, ISO27001 등 기술·보안 인증을 보유하고 있으며, **2026년 일본·미국 시장에 진출**하며 글로벌 사업을 본격화하고 있습니다. 창업을 시작하는 모든 분들이 자신의 아이디어를 가장 빠르게 선보일 수 있도록, **'보다 쉽고 아름다운 웹**'을 제공하겠습니다.",
    "website": "https://zaemit.com",
    "email": "weven@weven.kr",
    "contact": "070-4131-0730",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/763",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Zaemit(standard)",
      "Zaemit(premium)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "랜딩페이지",
      "홈페이지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "노코드/앱빌더",
      "랜딩페이지 빌더"
    ],
    "deliverables": [
      "랜딩페이지",
      "홈페이지"
    ],
    "techEvidence": "LLM, 바이브코딩, 랜딩페이지, 랜딩, 홈페이지",
    "priceText": [
      "Standard 요금제 / 월 구독 / 30,000원",
      "Premium 요금제 / 월 구독 / 50,000원"
    ],
    "minPrice": 30000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE 요금제: 회원가입시 무료 크레딧 제공",
      "Free 요금제: 회원가입 시 무료 크레딧 제공"
    ],
    "recommendation": "랜딩페이지, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 Zaemit(standard) 같은 서비스가 필요한 팀",
    "followerCount": 12,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1343,
        "name": "Zaemit(standard)",
        "summary": "AI 바이브코딩 기반 웹사이트 자동생성 서비스 - 대화하듯 입력하면 AI가 랜딩페이지·홈페이지를 자동으로 만들어드립니다",
        "website": "https://zaemit.com",
        "keywords": [
          "AI 웹사이트",
          "드래그앤드롭",
          "랜딩페이지",
          "바이브코딩",
          "반응형 웹",
          "웹사이트 자동생성",
          "창업자 웹사이트"
        ],
        "priceText": [
          "Standard 요금제 / 월 구독 / 30,000원"
        ],
        "priceNumber": 30000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE 요금제: 회원가입시 무료 크레딧 제공"
        ],
        "deliverables": [
          "랜딩페이지",
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "랜딩페이지",
          "홈페이지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "랜딩페이지 빌더"
        ],
        "techEvidence": "LLM, 바이브코딩, 랜딩페이지, 랜딩, 홈페이지"
      },
      {
        "id": 1344,
        "name": "Zaemit(premium)",
        "summary": "AI 바이브코딩 기반 웹사이트 자동생성 서비스 - AI 자동생성에 디자이너 리터치와 다국어 지원까지 더한 프리미엄 웹사이트 제작 서비스",
        "website": "https://zaemit.com",
        "keywords": [
          "AI 웹사이트 생성",
          "글로벌 진출",
          "다국어 웹사이트",
          "랜딩페이지",
          "반응형 웹",
          "홈페이지 제작"
        ],
        "priceText": [
          "Premium 요금제 / 월 구독 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 요금제: 회원가입 시 무료 크레딧 제공"
        ],
        "deliverables": [
          "랜딩페이지",
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩"
        ],
        "detailTags": [
          "랜딩페이지",
          "홈페이지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "노코드/앱빌더",
          "랜딩페이지 빌더"
        ],
        "techEvidence": "LLM, 바이브코딩, 랜딩페이지, 랜딩, 홈페이지"
      }
    ]
  },
  {
    "id": 790,
    "name": "주식회사 테이큰소프트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/204941/01dc3e69136d43379fac0fd6e4a18c16.png",
    "summary": "인프라 및 기술 개발 지원 솔루션 - Memory, Storage, vGPU 등 모든 IT 자원을 하나의 흐름으로 통합 관리하는 멀티 AI 에이전트 오케스트레이터입니다.",
    "description": "주식회사 테이큰소프트는 인공지능, 빅데이터, 클라우드·쿠버네티스 기반 플랫폼 기술을 바탕으로 제조, 공공, 교육, 스마트시티 등 다양한 산업 분야의 디지털 전환을 지원하는 AI 솔루션 전문기업입니다. 당사는 AI 모델 개발 및 운영, 데이터 수집·분석·시각화, GPU 자원 가상화 및 AI 서비스 배포 환경 구축 등 AI 서비스 도입에 필요한 전주기 기술 역량을 보유하고 있습니다. 특히 자체 AI 플랫폼 및 데이터 분석 기술을 기반으로 기업이 보유한 데이터를 활용하여 업무 효율화, 예측·분석, 자동화 서비스를 구현할 수 있도록 지원하고 있습니다. 또한 다양한 정부지원사업 및 산학협력 프로젝트를 통해 AI 모델 개발, 플랫폼 구축, 실증 운영 경험을 축적해 왔으며, 수요기업의 업무 환경과 목적에 맞춘 맞춤형 AI 솔루션 제공을 목표로 하고 있습니다. 주식회사 테이큰소프트는 2026년 「모두의 창업」 AI솔루션 공급기업으로서 선정된 AI 솔루션을 안정적으로 제공하고, 이용기업의 AI",
    "website": "http://www.takensoft.co.kr/",
    "email": "hdchoi@takensoft.co.kr",
    "contact": "010-6415-8691",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/790",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "TS FlowOne v1.0",
      "TS AIGen 3D"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅",
      "마케팅 콘텐츠"
    ],
    "detailTags": [
      "자동화",
      "교육",
      "MVP"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라",
      "MVP/프로토타입"
    ],
    "deliverables": [
      "자동화",
      "MVP"
    ],
    "techEvidence": "AI 모델, AI 에이전트, 에이전트, RAG, 데이터 분석, 분석, 자동화, 인프라, GPU, 클라우드",
    "priceText": [
      "기본 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 TS FlowOne v1.0 같은 서비스가 필요한 팀",
    "followerCount": 10,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1374,
        "name": "TS FlowOne v1.0",
        "summary": "인프라 및 기술 개발 지원 솔루션 - Memory, Storage, vGPU 등 모든 IT 자원을 하나의 흐름으로 통합 관리하는 멀티 AI 에이전트 오케스트레이터입니다.",
        "website": "",
        "keywords": [
          "GPU",
          "맞춤형",
          "분할",
          "비용최적화",
          "원격",
          "인프라"
        ],
        "priceText": [
          "기본 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 모델, AI 에이전트, 에이전트, RAG, 데이터 분석, 분석, 자동화, 인프라, GPU, 클라우드"
      },
      {
        "id": 1375,
        "name": "TS AIGen 3D",
        "summary": "콘텐츠 제작 및 마케팅 지원 - 초기 아이디어를 빠르게 실체화할 수 있도록 돕는 생성형 3D 모델링 플랫폼입니다.",
        "website": "",
        "keywords": [
          "3D",
          "Prototype",
          "마케팅",
          "생성형AI",
          "설계",
          "시제품",
          "제조"
        ],
        "priceText": [
          "기본 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "MVP",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "MVP",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "MVP/프로토타입",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "생성형, AI 모델, 시제품, 데이터 분석, 분석, 자동화, GPU, 클라우드"
      }
    ]
  },
  {
    "id": 834,
    "name": "큐케이파트너스 유한책임회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/196636/fb0e5235fea54aa39234dc1504040171.png",
    "summary": "Genie-AI는 AI로 프로토타입 생성, 타겟 테스터 매칭, 인사이트 보고서를 한 번에 제공해 스타트업의 시장검증을 빠르게 돕는 창업 검증 솔루션입니다.",
    "description": "큐케이파트너스는 **모두의창업 AI 솔루션 공급기업**으로 선정된 기업으로, 실 타겟 고객 기반의 **AI 고객검증 SaaS 솔루션**을 통해 예비창업자와 스타트업의 빠른 시장검증을 지원하고 있습니다. 또한 소프트웨어사업자 등록을 바탕으로 기술 기반 서비스를 체계적으로 제공하고 있으며, **성공적인 창업 경험과 벤처캐피탈 투자 경험을 보유한 창업자**가 설립해 스타트업의 성장 과정과 투자 관점에 대한 높은 이해를 갖추고 있습니다. 더불어 다수의 **공공기관·대학·정부 연계 액셀러레이팅 프로그램**을 수행하며 창업팀 발굴, 검증, 성장지원까지 폭넓은 현장 경험을 축적해 왔습니다. 이를 바탕으로 큐케이파트너스는 창업 아이디어를 실제 고객 검증과 실행 가능한 사업화로 연결하는 신뢰할 수 있는 파트너로 자리하고 있습니다.",
    "website": "",
    "email": "ceo@qk-partners.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/834",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Genie-AI (지니-에이아이)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "랜딩페이지",
      "홈페이지",
      "리포트",
      "영상"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "랜딩페이지 빌더",
      "MVP/프로토타입",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "랜딩페이지",
      "홈페이지",
      "시장/수요조사",
      "리포트",
      "영상"
    ],
    "techEvidence": "AI 고객, 랜딩페이지, 랜딩, 프로토타입, 목업, 보고서",
    "priceText": [
      "베이직 요금제 / 유/무료 혼합 / 770,000원"
    ],
    "minPrice": 770000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 랜딩페이지, 홈페이지 근거가 필요한 초기 창업팀",
    "followerCount": 10,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1442,
        "name": "Genie-AI (지니-에이아이)",
        "summary": "Genie-AI는 AI로 프로토타입 생성, 타겟 테스터 매칭, 인사이트 보고서를 한 번에 제공해 스타트업의 시장검증을 빠르게 돕는 창업 검증 솔루션입니다.",
        "website": "",
        "keywords": [
          "데모영상",
          "랜딩페이지",
          "목업영상",
          "시장검증",
          "실타겟고객",
          "인사이트보고서",
          "타겟고객",
          "타겟테스터매칭",
          "프로토타입",
          "프리토타이핑"
        ],
        "priceText": [
          "베이직 요금제 / 유/무료 혼합 / 770,000원"
        ],
        "priceNumber": 770000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "랜딩페이지",
          "홈페이지",
          "시장/수요조사",
          "리포트",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "영상"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "랜딩페이지 빌더",
          "MVP/프로토타입",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "AI 고객, 랜딩페이지, 랜딩, 프로토타입, 목업, 보고서"
      }
    ]
  },
  {
    "id": 808,
    "name": "릴레잇/스프레드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185197/323cdc03cf7f4558a709df864efa254d.webp",
    "summary": "마케팅·영업이 처음인 분을 위한 AI Agent, 400여 팀의 누적 경험 고객 데이터로 도와드립니다",
    "description": "릴레잇/스프레드는 영업 CRM 인 Relate, 이메일 인프라인 Spread, 그리고 그 위에서 영업과 마케팅 실행을 자동화하는 AI 인 SpreadAI 를 만듭니다. 잠재 고객에게 메일을 보내고, 누가 우리 제품에 관심을 보이는지 AI가 찾아드립니다. 영업팀이 따로 없는 초기 창업자도 직접 사용할 수 있도록 설계됐습니다. 미국 Y Combinator(YC S22) 액셀러레이팅을 받았으며, 100여 개 국내 B2B 팀이 사용하고 있습니다.",
    "website": "https://spread.so/ko",
    "email": "we@relate.so",
    "contact": "010-5644-0488",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/808",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Spread AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "피드백",
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "리포트",
      "자동화"
    ],
    "techEvidence": "자동화, 인프라",
    "priceText": [
      "Spread AI Starter / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "30분 무료 마케팅·영업 진단 및 셋업 콜: 현재 마케팅·영업 상태, 전문적으로 진단 받아 보셨나요? 스팸 방지 도메인 설정 등 기술적인 부분부터 운영 방향까지, 한 번에 도와드립니다."
    ],
    "recommendation": "리포트, 자동화를 빠르게 만들고 고객 모집을 시작하려는 Spread AI 같은 서비스가 필요한 팀",
    "followerCount": 12,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1400,
        "name": "Spread AI",
        "summary": "마케팅·영업이 처음인 분을 위한 AI Agent, 400여 팀의 누적 경험 고객 데이터로 도와드립니다",
        "website": "https://www.spread.so/ko/spreadai/modoo",
        "keywords": [
          "마케팅",
          "마케팅자동화",
          "세일즈",
          "아웃바운드",
          "영업",
          "영업자동화",
          "이메일마케팅",
          "인바운드",
          "콜드메일"
        ],
        "priceText": [
          "Spread AI Starter / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [
          "30분 무료 마케팅·영업 진단 및 셋업 콜: 현재 마케팅·영업 상태, 전문적으로 진단 받아 보셨나요? 스팸 방지 도메인 설정 등 기술적인 부분부터 운영 방향까지, 한 번에 도와드립니다."
        ],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "자동화, 인프라"
      }
    ]
  },
  {
    "id": 633,
    "name": "스마트동스쿨",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185411/5639a8e9af6449d88465785b81018c73.png",
    "summary": "에어블로그(AirBlog)는 AI 기반 블로그 콘텐츠 제작 및 마케팅 자동화 솔루션입니다.",
    "description": "㈜스마트동스쿨은 AI 교육, AI기반 콘텐츠 제작, 디지털 마케팅 및 운영 서비스를 전문으로 하는 기업입니다. 다양한 정부지원사업 수행 경험과 온라인 플랫폼 운영 노하우를 바탕으로 예비창업자와 초기 창업기업이 빠르게 시장에 진입할 수 있도록 실질적인 디지털 솔루션을 제공합니다. ## 🚀 성공 창업을 위해 에어블로그가 필요한 이유 성공 창업을 위해 필요한 것은 단순히 “좋은 아이디어가 있습니다”라는 설명이 아닙니다. 아이디어를 누구에게 제공할 것인지, 고객은 어떤 문제를 겪고 있는지, 우리의 해결책이 왜 필요한지, 실제 시장에서 어떤 반응이 나타났는지를 보여주어야 합니다. **아이디어가 머릿속에만 머물러 있다면 아직 계획입니다.** **고객이 상품과 서비스에 대한 정보를 읽고 반응하기 시작하면 사업이 됩니다.** 에어블로그는 창업자의 아이디어를 고객이 이해할 수 있는 콘텐츠로 바꾸고, 시장에 공개하여 초기 반응을 확인할 수 있도록 돕습니다. ## 📊 고객 반응이라는 검증",
    "website": "http://dotem.kr/modu",
    "email": "admin@smartdongs.com",
    "contact": "070-4707-2727",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/633",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "에어블로그",
      "튜브동스쿨",
      "도트 타이머 AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅",
      "영상/이미지"
    ],
    "detailTags": [
      "카드뉴스",
      "블로그",
      "SEO",
      "SNS 문구",
      "광고",
      "사업계획서",
      "IR",
      "발표자료",
      "피드백",
      "랜딩페이지",
      "홈페이지",
      "브랜딩",
      "자동화",
      "교육",
      "영상"
    ],
    "techTags": [
      "설문/서베이",
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "영상 생성"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "카드뉴스",
      "블로그",
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "시장/수요조사",
      "자동화",
      "영상"
    ],
    "techEvidence": "설문, 응답, 시장 규모, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 자동화, 영상제작",
    "priceText": [
      "1000000크레딧 / CREDIT_TOKEN / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "맛보기보기"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 8,
    "likeCount": 7,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1151,
        "name": "에어블로그",
        "summary": "에어블로그(AirBlog)는 AI 기반 블로그 콘텐츠 제작 및 마케팅 자동화 솔루션입니다.",
        "website": "https://aibl.kr",
        "keywords": [
          "ai",
          "sns",
          "광고",
          "마케팅",
          "블로그",
          "인플루언서",
          "자동화",
          "크리에이터",
          "홍보"
        ],
        "priceText": [
          "1000000크레딧 / CREDIT_TOKEN / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "맛보기보기"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "카드뉴스",
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "카드뉴스",
          "블로그",
          "SEO",
          "SNS 문구",
          "광고",
          "사업계획서",
          "IR",
          "발표자료",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "브랜딩",
          "자동화",
          "교육"
        ],
        "techTags": [
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "설문, 응답, 시장 규모, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 자동화"
      },
      {
        "id": 1152,
        "name": "튜브동스쿨",
        "summary": "튜브동스쿨은 AI기반의 유튜브 및 숏폼 콘텐츠 제작, 영상 마케팅, 채널 운영 매칭을 지원하는 유튜브 캠페인 플랫폼입니다.",
        "website": "https://tubd.kr/ai",
        "keywords": [
          "sns",
          "동영상",
          "마케팅",
          "쇼츠",
          "영상제작",
          "유튜브",
          "인스타",
          "인플루언서",
          "크리에이터",
          "틱톡"
        ],
        "priceText": [
          "1000000크레딧 / CREDIT_TOKEN / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "맛보기보기"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "카드뉴스",
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "시장/수요조사",
          "영상"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "카드뉴스",
          "블로그",
          "SEO",
          "SNS 문구",
          "사업계획서",
          "IR",
          "발표자료",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "브랜딩",
          "영상",
          "교육"
        ],
        "techTags": [
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "영상 생성"
        ],
        "techEvidence": "설문, 응답, 시장 규모, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석, 영상제작, 동영상, 숏폼"
      },
      {
        "id": 1153,
        "name": "도트 타이머 AI",
        "summary": "도트 타이머 AI는 사용자의 시간 사용 데이터를 AI가 분석하여 보다 효율적인 집중 전략을 제안합니다.",
        "website": "https://doti.kr/ai",
        "keywords": [
          "HRD",
          "경영관리",
          "스케쥴",
          "시간관리",
          "인사관리",
          "조직관리",
          "캘린더",
          "투두리스트",
          "팀관리",
          "프로젝트관리"
        ],
        "priceText": [
          "1000000크레딧 / CREDIT_TOKEN / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "맛보기보기"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "카드뉴스",
          "블로그",
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "시장/수요조사"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "카드뉴스",
          "블로그",
          "SEO",
          "SNS 문구",
          "사업계획서",
          "IR",
          "발표자료",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "브랜딩",
          "교육"
        ],
        "techTags": [
          "설문/서베이",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "설문, 응답, 시장 규모, 랜딩페이지, 랜딩, 홈페이지, 검색, 분석"
      }
    ]
  },
  {
    "id": 828,
    "name": "카나프(Kanapp)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/118868/7cdfa2c8f399403e99c81b12f2848be4.png",
    "summary": "AI로 견적서, 계약서, 청구서 생성 및 세금 관리. 월간 운영 분석으로 사업을 한눈에 파악이 가능한 솔루션",
    "description": "🌍 **Kanapp**은 AI 기술을 누구나 쓸 수 있는 도구로 만드는 회사입니다. 우리는 고급 기술이 대기업의 전유물이 되어선 안 된다고 믿습니다. 1인 창업자에게도, 디지털에 익숙하지 않은 누군가에게도, AI는 일상에서 손쉽게 닿을 수 있어야 합니다. ✨ Kanapp은 복잡한 기술을 단순한 경험으로 옮기는 일에 집중합니다. 부담 없이 시작할 수 있고, 쓸수록 사용자의 시간을 돌려주는 도구. 그것이 우리가 만드는 제품의 기준입니다. 기술이 아니라 사람의 시간을 돌려드리는 것 — Kanapp은 그 일을 합니다. 🎉 이번에 \"**창업자가 혼자서도 회사를 운영할 수 있게, 행정 업무를 AI가 대신하는 백오피스 SaaS를 오픈**\"했습니다. 보다 자세한 것은 AI 솔루션 탭에서 보시면 스크린샷과 구성을 보실수 있습니다. 🔗 [https://www.startcoo.com/about](http://www.startcoo.com/about) 으로 직접 이동하셔서 바로 사용이",
    "website": "https://www.startcoo.com",
    "email": "support@kanapp.net",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/828",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Start COO"
    ],
    "majorTags": [
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "리포트"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "리포트"
    ],
    "techEvidence": "분석, 보고서",
    "priceText": [
      "PLUS / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 월 30 크레딧 무상 제공"
    ],
    "recommendation": "데이터 분석/대시보드 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 11,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1428,
        "name": "Start COO",
        "summary": "AI로 견적서, 계약서, 청구서 생성 및 세금 관리. 월간 운영 분석으로 사업을 한눈에 파악이 가능한 솔루션",
        "website": "https://www.startcoo.com/about",
        "keywords": [
          "AI",
          "견적서",
          "계약서",
          "세금",
          "청구서"
        ],
        "priceText": [
          "PLUS / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 월 30 크레딧 무상 제공"
        ],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "분석, 보고서"
      }
    ]
  },
  {
    "id": 825,
    "name": "지구코리아 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187487/25f7cf6138664d6388bddc8d3efa61f2.png",
    "summary": "Ai 기반 SaaS 솔루션-Zigu 하나로 Claude, ChatGPT, Gemini 최신 유료 AI와 함께 협업하세요. ✨",
    "description": "**AI 협업** 플랫폼 Zigu(지구)🌏 **팀 메신저, 칸반보드, AI 자동화**를 하나로. 👀 업무가 일어나는 바로 그자리에서 AI를 활용하세요. AI가 **필요한 순간에만 Zico를 충전**하여, **✨ Cluade ✨, ✨ Chat GPT ✨, ✨ Gemini ✨최신 유료 모델을 골라서 사용**하세요. **사용량 만큼만 소진**됩니다. ◝◜ ◝◜ ◝◜ ◝◜ *◢╲***◢╲◢╲*◢╲*◢╲**◢╲*◢╲◢╲◢╲◢╲* 𓀚𓀛𓀜𓀝𓀞𓀟𓀠𓀡𓀢𓀣𓀤𓀥𓀦𓀧𓀨𓀩𓀚𓀛𓀜𓀝𓀞𓀟𓀠𓀡𓀢𓀣𓀤𓀥𓀦𓀧𓀨𓀩 $5부터 소액으로도 사용 가능! ✩✩✩✩✩✩✩✩✩✩✩✩✩✩",
    "website": "https://zigu.space",
    "email": "selfprintworld@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/825",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Zigu(지구)"
    ],
    "majorTags": [
      "업무자동화/생산성"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "GPT, ChatGPT, Claude, Gemini, 자동화, 업무관리",
    "priceText": [
      "10 zico / CREDIT_TOKEN / 15,000원"
    ],
    "minPrice": 15000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free Plan: AI와 고급기능을 제외한 모든 기능"
    ],
    "recommendation": "LLM/생성형AI, 업무 자동화/API 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 5,
    "likeCount": 10,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1421,
        "name": "Zigu(지구)",
        "summary": "Ai 기반 SaaS 솔루션-Zigu 하나로 Claude, ChatGPT, Gemini 최신 유료 AI와 함께 협업하세요. ✨",
        "website": "https://zigu.space",
        "keywords": [
          "AI자동화",
          "ChatGPT",
          "Claude",
          "Gemini",
          "나노바나나",
          "메신저",
          "스크래핑",
          "업무관리",
          "칸반보드",
          "협업툴"
        ],
        "priceText": [
          "10 zico / CREDIT_TOKEN / 15,000원"
        ],
        "priceNumber": 15000,
        "pricingKind": "usage",
        "benefits": [
          "Free Plan: AI와 고급기능을 제외한 모든 기능"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "업무자동화/생산성"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, Claude, Gemini, 자동화, 업무관리"
      }
    ]
  },
  {
    "id": 641,
    "name": "아도바 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/197505/e76579041a60405094b3ca0666f581bb.png",
    "summary": "AI 기반 크리에이터 글로벌 콘텐츠 현지화 및멀티플랫폼 유통 자동화 솔루션 : 마케터 없이 AI 에이전트가 내 채널을 글로벌로 확장해줘요",
    "description": "아도바 주식회사는 크리에이터와 브랜드의 글로벌 진출을 AI Agent가 직접 실행하는 플랫폼 기업입니다. 크리에이터용 「adobaRo」는 채널 개설부터 콘텐츠 로컬라이제이션, 플랫폼 운영, 광고·협업 매칭까지 글로벌 진출에 필요한 전 과정을 AI Agent에게 위임하는 실행형 솔루션입니다. 브랜드용 「adobaRo ON」은 시장 조사, 현지 채널 개설·운영, 콘텐츠 기획·제작, 캠페인 집행, 중국 커머스몰 입점·운영까지 중국 시장 진출의 엔드투엔드 마케팅 업무를 직접 수행합니다. 아도바는 도우인·샤오홍슈·비리비리·콰이쇼우·웨이보·아이치이 등 중국 12개 핵심 플랫폼과의 직접 파트너십을 통해, 외국인 여권 기반 계정 생성, 콘텐츠 저작권 확보, 크로스보더(콰징) 상점 입점, 해외 계좌를 통한 합법적 수익 정산까지 단일 구조로 연결하고, 2025년 말 기준 1,000개 이상의 중국 채널·상점 운영 레퍼런스를 보유하고 있습니다.",
    "website": "https://adobaro.com/home",
    "email": "jtlee@adoba.net",
    "contact": "010-6269-8117",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/641",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "adobaRo (아도바로)",
      "adobaro ON"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "광고",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 자동화",
    "priceText": [
      "Lite 플랜 / 월 구독 / 29,000원",
      "Starter / 월 구독 / 900,000원"
    ],
    "minPrice": 29000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "AI 에이전트, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 adobaRo (아도바로) 같은 서비스가 필요한 팀",
    "followerCount": 9,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1169,
        "name": "adobaRo (아도바로)",
        "summary": "AI 기반 크리에이터 글로벌 콘텐츠 현지화 및멀티플랫폼 유통 자동화 솔루션 : 마케터 없이 AI 에이전트가 내 채널을 글로벌로 확장해줘요",
        "website": "",
        "keywords": [
          "AI 에이전트",
          "글로벌진출",
          "멀티플랫폼",
          "비리비리",
          "샤오홍슈",
          "유튜브",
          "자동화",
          "중국 마케팅",
          "콘텐츠 현지화",
          "크리에이터"
        ],
        "priceText": [
          "Lite 플랜 / 월 구독 / 29,000원"
        ],
        "priceNumber": 29000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "광고",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 자동화"
      },
      {
        "id": 1170,
        "name": "adobaro ON",
        "summary": "중국 마케팅 AI 에이전트 : 중국 진출을 원하는 브랜드를 위해, AI Agent가 채널 운영부터 매출까지 대신 수행해드려요",
        "website": "",
        "keywords": [
          "AI Agent",
          "마케팅 자동화",
          "브랜드 마케팅",
          "인플루언서 마케팅",
          "중국 마케팅",
          "중국 진출",
          "채널 운영 자동화",
          "콘텐츠 현지화"
        ],
        "priceText": [
          "Starter / 월 구독 / 900,000원"
        ],
        "priceNumber": 900000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "광고",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 자동화"
      }
    ]
  },
  {
    "id": 819,
    "name": "주식회사모트에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191848/8f78b694ca454a64894745ce8efc3df9.png",
    "summary": "딥다이브(Deep Dive)는 \"10배의 AI로 한 번에 끝내는 리서치\"를 구현한 AI 멀티 에이전트 자동 리서치 서비스입니다.",
    "description": "모트에이아이(Moat AI)는 기업이 축적해 온 데이터와 고객 신뢰, 산업 노하우에 AI를 연결해 실질적인 성과로 전환하는 맞춤형 AI 컨설팅 회사입니다.",
    "website": "https://www.moatai.io/",
    "email": "finance@moatai.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/819",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "MoatAI Deep Dive"
    ],
    "majorTags": [
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "시장조사",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 리서치, 경쟁사, 분석, 보고서, 자동화",
    "priceText": [
      "100 / CREDIT_TOKEN / 15,000원"
    ],
    "minPrice": 15000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 리포트, 자동화 근거가 필요한 초기 창업팀",
    "followerCount": 12,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1414,
        "name": "MoatAI Deep Dive",
        "summary": "딥다이브(Deep Dive)는 \"10배의 AI로 한 번에 끝내는 리서치\"를 구현한 AI 멀티 에이전트 자동 리서치 서비스입니다.",
        "website": "https://research.moatai.app/",
        "keywords": [
          "AI 리서치",
          "AI 보고서",
          "AI 애널리스트",
          "AI 에이전트",
          "경쟁사 분석",
          "딥다이브",
          "리서치 보고서",
          "리서치 자동화",
          "산업 분석",
          "시장 조사"
        ],
        "priceText": [
          "100 / CREDIT_TOKEN / 15,000원"
        ],
        "priceNumber": 15000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "시장조사",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 리서치, 경쟁사, 분석, 보고서, 자동화"
      }
    ]
  },
  {
    "id": 643,
    "name": "Muzig AI (아티움그룹)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185991/1f5cec34adec4c66bc61967defecf6af.jpg",
    "summary": "1분만에 만드는AI 음악",
    "description": "Muzig AI는 텍스트 입력만으로 1분 만에 음악을 자동 생성하는 혁신적 AI 음악 솔루션입니다. 사용자가 장르, 분위기, 길이 등 원하는 조건을 입력하면 AI가 즉시 맞춤 BGM을 제작하며, 크리에이터, 마케팅, 영상 제작자 등 다양한 고객이 상업적으로 안전하게 활용할 수 있습니다. 모든 음원은 김앤장 법률 검토를 거쳐 저작권 걱정 없이 사용 가능하며, 빠른 제작 속도와 안정성을 갖춘 AI 음악 플랫폼입니다.",
    "website": "https://muzig.ai/",
    "email": "play@muzig.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/643",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "상업적 이용이 가능한 AI 음악"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지"
    ],
    "detailTags": [
      "영상"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "영상"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "10000 / CREDIT_TOKEN / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "회원가입시 10곡 무료"
    ],
    "recommendation": "노코드/MVP 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 상업적 이용이 가능한 AI 음악 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 8,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1172,
        "name": "상업적 이용이 가능한 AI 음악",
        "summary": "1분만에 만드는AI 음악",
        "website": "https://muzig.ai/",
        "keywords": [
          "AI",
          "음악",
          "저작권",
          "콘텐츠"
        ],
        "priceText": [
          "10000 / CREDIT_TOKEN / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "회원가입시 10곡 무료"
        ],
        "deliverables": [
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지"
        ],
        "detailTags": [
          "영상"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 720,
    "name": "주식회사 빅시프트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/166979/1966374a872844a28ef0b9d0f879134a.png",
    "summary": "기업 내부 지식베이스를 기반으로 고객·사업별 맞춤형 제안서 초안을 자동 생성하는 AI 문서 작성 서비스",
    "description": "주식회사 빅시프트는 기업의 실제 업무 문제를 AI 기술로 해결하는 AI 전문 개발사입니다. 단순한 챗봇이나 일반적인 웹·앱 개발을 넘어, RAG 기반 사내 지식 검색, AI Agent, MCP, NL2SQL, 문서 자동화, 음성 AI, 비정형 데이터 분석 등 최신 AI 기술을 고객사의 업무 환경에 맞게 설계하고 구현합니다. 빅시프트는 기획과 영업 중심의 외주사가 아니라, 실서비스를 직접 기획하고 개발해본 AI 개발자들이 프로젝트를 수행하는 팀입니다. 고객의 아이디어가 현재 기술로 구현 가능한지, 어떤 AI 구조가 적합한지, 어떤 데이터와 인프라가 필요한지, 실제 운영 단계에서 어떤 문제가 발생할 수 있는지를 기술적으로 검토하고 실행 가능한 형태로 구체화합니다. 또한 단순히 기능을 개발하는 데 그치지 않고, 고객사가 AI를 실제 업무 생산성 향상과 비용 절감 수단으로 활용할 수 있도록 기획, 설계, 개발, 배포, 운영 고도화까지 전 과정을 함께 수행합니다. 공공기관, 병원, 금융사",
    "website": "https://www.bigshift.kr/",
    "email": "jay@bigshift.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/720",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "기업 지식베이스 기반 AI 맞춤형 제안서 생성 서비스"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "자동화"
    ],
    "techTags": [
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "RAG, 검색, 데이터 분석, 분석, 음성, 자동화, 인프라",
    "priceText": [
      "기업 맞춤형 제안서 생성 베이직 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "RAG/지식검색, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 기업 지식베이스 기반 AI 맞춤형 제안서 생성 서비스 같은 서비스가 필요한 팀",
    "followerCount": 8,
    "likeCount": 7,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1278,
        "name": "기업 지식베이스 기반 AI 맞춤형 제안서 생성 서비스",
        "summary": "기업 내부 지식베이스를 기반으로 고객·사업별 맞춤형 제안서 초안을 자동 생성하는 AI 문서 작성 서비스",
        "website": "",
        "keywords": [
          "AI 제안서",
          "RAG",
          "RFP 분석",
          "문서 자동화",
          "영업 자동화",
          "제안서 생성",
          "지식베이스"
        ],
        "priceText": [
          "기업 맞춤형 제안서 생성 베이직 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "RAG, 검색, 데이터 분석, 분석, 음성, 자동화, 인프라"
      }
    ]
  },
  {
    "id": 683,
    "name": "주식회사 데이트리스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/141527/d3c5dab3c469453182116d6ac948122a.jpeg",
    "summary": "글로벌 이커머스 시장 분석 리포트 솔루션 - AI 기반 글로벌 데이터 리포트를 통해 시장·소비자·상품 트렌드를 빠르게 분석합니다.",
    "description": "데이트리스는 소비자 행동 데이터와 유통 데이터를 기반으로 기업의 의사결정을 지원하는 AI 데이터 인프라 기업입니다. 단순한 데이터 수집을 넘어, 실제 구매·가격·수요 흐름을 분석하여 기업이 실행 가능한 인사이트로 전환하는 것을 목표로 합니다. 자체 B2C 애플리케이션과 다양한 데이터 수집 채널을 통해 소비자 구매 데이터, 가격 변동 데이터, 시장 반응 데이터를 축적하고 있으며, 이를 AI 기반으로 분석하여 기업 고객에게 제공합니다. 특히 브랜드·상품·플랫폼 단위의 정밀 분석을 통해 시장 흐름을 구조적으로 이해할 수 있도록 지원합니다. Datriss는 데이터 확보 → 분석 → 리포트 → 의사결정까지 이어지는 전 과정을 하나의 인프라로 통합한 것이 특징입니다.",
    "website": "https://founderbrief.datriss.com",
    "email": "datrissdev@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/683",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "레몬AI (LemonAI)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "데이터/리포트"
    ],
    "detailTags": [
      "홈페이지",
      "리포트",
      "브랜딩"
    ],
    "techTags": [
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "홈페이지",
      "리포트"
    ],
    "techEvidence": "시장분석, 분석, 리포트, 인프라",
    "priceText": [
      "베이직 / 월 구독 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "기본 샘플리포트: 기본적인 리포트 무료 제공"
    ],
    "recommendation": "홈페이지, 리포트 결과물로 첫 고객 반응을 빠르게 확인하려는 레몬AI (LemonAI) 같은 서비스가 필요한 팀",
    "followerCount": 12,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1230,
        "name": "레몬AI (LemonAI)",
        "summary": "글로벌 이커머스 시장 분석 리포트 솔루션 - AI 기반 글로벌 데이터 리포트를 통해 시장·소비자·상품 트렌드를 빠르게 분석합니다.",
        "website": "https://founderbrief.datriss.com/",
        "keywords": [
          "ai",
          "글로벌",
          "데이터리포트",
          "리포트",
          "상품분석",
          "소비자분석",
          "시장분석",
          "이커머스",
          "트렌트 분석",
          "해외 진출"
        ],
        "priceText": [
          "베이직 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "기본 샘플리포트: 기본적인 리포트 무료 제공"
        ],
        "deliverables": [
          "홈페이지",
          "리포트"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "데이터/리포트"
        ],
        "detailTags": [
          "홈페이지",
          "리포트",
          "브랜딩"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "시장분석, 분석, 리포트, 인프라"
      }
    ]
  },
  {
    "id": 714,
    "name": "주식회사 비욘드엔티티",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186871/4a9ea7309b1e45b189b6a91c961d8e81.png",
    "summary": "AI 기반 설계 및 코드 생성 플랫폼 : Don’t read code. See the system. AI 시대의 실시간 소프트웨어 시각화 플랫폼, Beyond Entity.",
    "description": "**Beyond Entity는 AI가 코드를 빠르게 생산하는 시대에,** **개발자가 단순한 코드 생산자가 아니라 시스템의 ‘조종사’가 되도록 만듭니다.** 우리는 설계를 더 이상 멈춰있는 산출물로 보지 않습니다. **설계는 AI와 인간이 같은 시스템 상태를 이해하고,** **빠르게 판단하며,** **같은 방향으로 움직이기 위한 실시간 의사소통 구조라고 생각합니다.** 앱, API, 데이터베이스, 데이터 흐름, AI 변경사항까지. Beyond Entity는 소프트웨어의 현재 상태를 실시간으로 시각화하여 인간과 AI가 같은 구조를 바라보며 협업하도록 합니다. **AI가 생성하고,** **인간이 방향을 결정합니다.** 빠르게 만드는 시대일수록, 더 빠른 이해와 더 정확한 판단이 필요합니다. **Beyond Entity는 AI 시대의 개발자에게 소프트웨어 전체를 바라볼 수 있는 ‘조종석(Cockpit)’을 제공합니다.**",
    "website": "https://beyondentity.com",
    "email": "kstartup@beyondentity.com",
    "contact": "050-6707-2903",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/714",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Beyond Entity"
    ],
    "majorTags": [
      "MVP/개발",
      "데이터/리포트"
    ],
    "detailTags": [
      "DB설계"
    ],
    "techTags": [
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "API, DB, 데이터베이스",
    "priceText": [
      "스타트업패키지 / 월 구독 / 120,000원"
    ],
    "minPrice": 120000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "업무 자동화/API, DB/인프라 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Beyond Entity 같은 서비스가 필요한 팀",
    "followerCount": 8,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1268,
        "name": "Beyond Entity",
        "summary": "AI 기반 설계 및 코드 생성 플랫폼 : Don’t read code. See the system. AI 시대의 실시간 소프트웨어 시각화 플랫폼, Beyond Entity.",
        "website": "https://beyondentity.com/ko/modoo-changup",
        "keywords": [
          "AI 설계",
          "AI코딩",
          "API",
          "cursor",
          "ERD",
          "mcp",
          "mysql",
          "postgres",
          "Supabase",
          "협업"
        ],
        "priceText": [
          "스타트업패키지 / 월 구독 / 120,000원"
        ],
        "priceNumber": 120000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "API, DB, 데이터베이스"
      }
    ]
  },
  {
    "id": 676,
    "name": "주식회사 누리에에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/107431/78623b44f33f4de2a13379724030bceb.png",
    "summary": "여러VLM에서 이미지/동영상을 동시에 생성하고, 여러 인원이 함께 이미지 생성을 협업할 수 있습니다.",
    "description": "**NURIE AI는 AI 에이전트를 만드는 기업입니다.** 우리는 기업과 창업자들이 자신의 데이터와 워크플로우로 AI 에이전트를 빠르게 구축할 수 있도록 돕습니다. 복잡한 엔지니어링 없이, 자신의 비즈니스에 맞는 지능형 자동화를 만들 수 있게 하는 것이 우리의 목표입니다. 실제 유저가 사용하는 서비스 외에도, API,MCP 등을 제공하여, AI agent 구축 생태계를 만들고자 합니다. 볼트세이지 [vaultsage.ai](http://vaultsage.ai) [mcp.vaultsage.ai](http://mcp.vaultsage.ai) [미디어세이지] [media.nurie.ai](http://media.nurie.ai) [브리핑허브] [briefing.nurie.ai](http://briefing.nurie.ai)",
    "website": "https://nurie.ai",
    "email": "partnership@nurie.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/676",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "미디어세이지",
      "브리핑허브"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "영상",
      "이미지",
      "자동화",
      "SNS 문구"
    ],
    "techTags": [
      "AI 에이전트",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API",
      "LLM/생성형AI"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 이미지 생성, 이미지, 동영상, 자동화, API, 워크플로우, GPT, ChatGPT",
    "priceText": [
      "프로플랜 / 월 구독 / 137,000원",
      "베이직 요금제 / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "1일 생성량 제한(10개이미지, 3개 동영상): 광고 팝업",
      "7일 무료체험: 무료체험 이후 유료 전환"
    ],
    "recommendation": "SNS/광고 문구, 영상를 빠르게 만들고 고객 모집을 시작하려는 미디어세이지 같은 서비스가 필요한 팀",
    "followerCount": 9,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1219,
        "name": "미디어세이지",
        "summary": "여러VLM에서 이미지/동영상을 동시에 생성하고, 여러 인원이 함께 이미지 생성을 협업할 수 있습니다.",
        "website": "https://www.instagram.com/mediasage.nurie",
        "keywords": [
          "AI",
          "동영상생성",
          "쇼츠",
          "이미지생성",
          "컨텐츠"
        ],
        "priceText": [
          "프로플랜 / 월 구독 / 137,000원"
        ],
        "priceNumber": 137000,
        "pricingKind": "fixed",
        "benefits": [
          "1일 생성량 제한(10개이미지, 3개 동영상): 광고 팝업"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 이미지 생성, 이미지, 동영상, 자동화, API, 워크플로우"
      },
      {
        "id": 1220,
        "name": "브리핑허브",
        "summary": "뉴스와 SNS, ChatGPT/Perplexity 언급을 실시간으로 추적하는 AI 모니터링 플랫폼",
        "website": "",
        "keywords": [
          "AEO",
          "AI",
          "GEO",
          "뉴스",
          "모니터링"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [
          "7일 무료체험: 무료체험 이후 유료 전환"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, AI 에이전트, 에이전트, 자동화, API, 워크플로우"
      }
    ]
  },
  {
    "id": 649,
    "name": "엠씨테크",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191516/ab374a31a0794472b4342f18b0477516.png",
    "summary": "AI 디지털 정신건강 검진 플랫폼 : 그림 한 장과 간단한 설문만으로 창업자·팀원의 심리상태를 5분 이내 자동 분석, 리포트화하는 AI 기반 디지털 정신건강 웹 서비스",
    "description": "엠씨테크는 AIoT와 케어로봇 기술을 통해 인간의 삶의 질을 높이는 융합 헬스케어 솔루션 기업입니다. 우리는 전통적인 심리 검사와 건강 상담의 한계를 넘어, AI 기반 그림 심리 검사(K-HTP)와 지능형 건강 정보 챗봇을 통해 누구나 일상에서 쉽고 정밀하게 자신의 몸과 마음을 돌볼 수 있는 세상을 만듭니다. 핵심콘텐츠1. AI 기반 그림 심리 검사 솔루션 (DamiCare Mind) 서비스 내용: 사용자가 그린 그림(집-나무-사람)을 AI가 분석하여 심리 상태와 정서적 위험도를 선별하는 디지털 진단 서비스입니다. 핵심콘텐츠2. 지능형 건강 정보 챗봇 (DamiCare Chatbot) 서비스 내용: LLM(거대언어모델) 기반으로 일상적인 대화를 통해 건강 상태를 체크하고, 한국표준건강분류체계에 기반한 맞춤형 건강 정보를 제공하는 전문 챗봇입니다.",
    "website": "https://mctech.ai.kr/",
    "email": "mctech5286@gmail.com",
    "contact": "010-3153-3737",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/649",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "DamiCare Mind (다미케어: 마인드)",
      "DamiCare Chat (다미케어 챗)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "피드백",
      "리포트"
    ],
    "techTags": [
      "LLM/생성형AI",
      "설문/서베이",
      "데이터 분석/대시보드",
      "음성/STT/TTS"
    ],
    "deliverables": [
      "시장/수요조사",
      "리포트"
    ],
    "techEvidence": "LLM, 설문, 분석, 리포트, 음성",
    "priceText": [
      "1건당 / CAPACITY_BASED / 9,000원"
    ],
    "minPrice": 9000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "기본플랜: 그림심리AI분석에 대한 간단한 결과 제공 및 설문조사 요청"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 시장/수요조사, 리포트 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 11,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1178,
        "name": "DamiCare Mind (다미케어: 마인드)",
        "summary": "AI 디지털 정신건강 검진 플랫폼 : 그림 한 장과 간단한 설문만으로 창업자·팀원의 심리상태를 5분 이내 자동 분석, 리포트화하는 AI 기반 디지털 정신건강 웹 서비스",
        "website": "",
        "keywords": [
          "AI심리",
          "HTP",
          "MBTI",
          "SCD",
          "그림심리",
          "다미케어",
          "불안장애",
          "스트레스",
          "우울",
          "정신건강"
        ],
        "priceText": [
          "1건당 / CAPACITY_BASED / 9,000원"
        ],
        "priceNumber": 9000,
        "pricingKind": "usage",
        "benefits": [
          "기본플랜: 그림심리AI분석에 대한 간단한 결과 제공 및 설문조사 요청"
        ],
        "deliverables": [
          "시장/수요조사",
          "리포트"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백",
          "리포트"
        ],
        "techTags": [
          "LLM/생성형AI",
          "설문/서베이",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "LLM, 설문, 분석, 리포트"
      },
      {
        "id": 1179,
        "name": "DamiCare Chat (다미케어 챗)",
        "summary": "AI 음성 대화형 어시스턴트 : 건강 분야에 특화된 AI 대화형 어시스턴트로, 질병·건강 분류 기 준(KCD/KCF)을 기반으로 신뢰도 높은 정보를 제공하는 웹 기반 SaaS 서비스. 별도 설치 없이 웹 브라우저에서 즉시 사용 가능",
        "website": "",
        "keywords": [
          "AI어시스턴트",
          "KCF",
          "건강분류",
          "건강정보",
          "디지털취약계층",
          "음성대화",
          "챗봇",
          "헬스케어"
        ],
        "priceText": [
          "1건당 / CAPACITY_BASED / 9,000원"
        ],
        "priceNumber": 9000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "음성/STT/TTS"
        ],
        "techEvidence": "LLM, 분석, 음성"
      }
    ]
  },
  {
    "id": 618,
    "name": "메이커스글로벌(주)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191552/953517a55b3140ad9b812d3757a825d3.png",
    "summary": "\"레퍼런스 URL 하나로 썸네일부터 대본까지, 데이터 기반 유튜브 기획 전 과정을 자동화하는 AI 솔루션\"",
    "description": "안녕하세요, 메이커스글로벌(주) 대표 김상협입니다. 저희 회사는 29만 유튜브 채널을 포함하여 총 40만 SNS 채널을 보유한 콘텐츠 제작 회사입니다. 아무리 좋은 이야기 일지라도, 조회수가 높은 영상을 만드는 것은 어렵습니다. 시청자에 대한 이해, 레퍼런스 조사, 썸네일 기획, 대본구조 등 영상 노출을 위해 쌓아야 할 지식과 경험이 많기 때문입니다. 저희 팀은 이 문제를 해결하기 위해 \"콘텐츠 제작의 벽을 허물자\"라는 미션을 기반으로 콘텐츠를 제작 AI 서비스, Cornbot을 런칭했습니다. 이제 콘텐츠에 대한 지식 없이도, 좋은 이야기만 있다면 높은 조회수를 만들 수 있도록 돕겠습니다.",
    "website": "https://cornbot.co.kr",
    "email": "kims_95@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/618",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "콘봇(CornBot)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "영상",
      "자동화"
    ],
    "techTags": [
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "자동화"
    ],
    "techEvidence": "동영상, 자동화",
    "priceText": [
      "10000 / CREDIT_TOKEN / 199,000원"
    ],
    "minPrice": 199000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "SNS/광고 문구, 영상를 빠르게 만들고 고객 모집을 시작하려는 콘봇(CornBot) 같은 서비스가 필요한 팀",
    "followerCount": 10,
    "likeCount": 4,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1130,
        "name": "콘봇(CornBot)",
        "summary": "\"레퍼런스 URL 하나로 썸네일부터 대본까지, 데이터 기반 유튜브 기획 전 과정을 자동화하는 AI 솔루션\"",
        "website": "",
        "keywords": [
          "기획",
          "동영상",
          "롱폼",
          "릴스",
          "마케팅",
          "쇼츠",
          "영상",
          "유튜브",
          "콘텐츠"
        ],
        "priceText": [
          "10000 / CREDIT_TOKEN / 199,000원"
        ],
        "priceNumber": 199000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "영상",
          "자동화"
        ],
        "techTags": [
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "동영상, 자동화"
      }
    ]
  },
  {
    "id": 627,
    "name": "비피엑스지(BPXG)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/121380/35754b05f1b04ec19343b694cf43cca4.png",
    "summary": "영상 기획 효율화를 위한 AI 솔루션",
    "description": "BPXG는 AI 기술 기반의 콘텐츠·마케팅 전문 기업으로, AI 광고 영상 제작부터 AEO·GEO 기반의 차세대 검색 최적화 마케팅까지 통합적으로 제공하고 있습니다. 생성형 AI 시대에 맞춘 콘텐츠 제작 역량과 디지털 마케팅 전략을 결합하여 브랜드에 최적화된 솔루션을 제공합니다. 주요 사업 분야는 AI 광고·홍보 영상 제작, 애니메이션 및 모션그래픽 콘텐츠 제작, 검색 최적화(AEO·GEO·SEO) 마케팅, 캐릭터 IP 기반 콘텐츠 개발 등이며, 공공기관·브랜드·스타트업 등 다양한 기업과 프로젝트를 진행하고 있습니다. 또한 자체 AI 제작 파이프라인과 콘텐츠 제작 노하우를 기반으로, 빠른 제작 속도와 높은 완성도의 결과물을 제공하며 기업의 브랜딩 및 디지털 마케팅 성과 향상을 지원하고 있습니다.",
    "website": "https://bpxg.io",
    "email": "michaelpark@bpxg.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/627",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "영상 기획 효율화를 위한 AI 솔루션"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "SEO",
      "광고",
      "랜딩페이지",
      "브랜딩",
      "영상"
    ],
    "techTags": [
      "LLM/생성형AI",
      "랜딩페이지 빌더",
      "RAG/지식검색"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "영상"
    ],
    "techEvidence": "생성형, 랜딩, 검색",
    "priceText": [
      "Standard / 월 구독 / 99,800원"
    ],
    "minPrice": 99800,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 영상 기획 효율화를 위한 AI 솔루션 같은 서비스가 필요한 팀",
    "followerCount": 13,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1141,
        "name": "영상 기획 효율화를 위한 AI 솔루션",
        "summary": "영상 기획 효율화를 위한 AI 솔루션",
        "website": "https://drive.google.com/file/d/1ZQEAw20ApYaeEAhiJQWQEYFR6WE_5MsJ/view?usp=drive_link",
        "keywords": [
          "AI영상",
          "마케팅",
          "영상",
          "홍보영상"
        ],
        "priceText": [
          "Standard / 월 구독 / 99,800원"
        ],
        "priceNumber": 99800,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "SEO",
          "광고",
          "랜딩페이지",
          "브랜딩",
          "영상"
        ],
        "techTags": [
          "LLM/생성형AI",
          "랜딩페이지 빌더",
          "RAG/지식검색"
        ],
        "techEvidence": "생성형, 랜딩, 검색"
      }
    ]
  },
  {
    "id": 852,
    "name": "주식회사 벨루가(Veluga Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189867/8a21ce8333ad4bb28189512869253347.png",
    "summary": "GraphRAG + Agent Orchestration 기술 기반 기업 업무 자동화 및 대화형 AI 솔루션",
    "description": "'대화가 자산이 되는 기업' 주식회사 벨루가 대화형 인공지능 서비스(Conversation AI Serivce)",
    "website": "https://veluga.app",
    "email": "dwjoe@veluga.io",
    "contact": "070-7600-6699",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/852",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AI 에이전트 오케스트레이션 플랫폼"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "RAG/지식검색",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, RAG, GraphRAG, 자동화, 연동, DB",
    "priceText": [
      "베이직 플랜 / 유/무료 혼합 / 19,500원"
    ],
    "minPrice": 19500,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료플랜: 서비스 이용료 : 0원 / 월 200크레딧 / 70만 Byte / 1채 채널 생성 가능 / 커스텀 프롬프트 설정 및 웹, 노션 플러그인 연동"
    ],
    "recommendation": "AI 에이전트, RAG/지식검색 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 에이전트 오케스트레이션 플랫폼 같은 서비스가 필요한 팀",
    "followerCount": 8,
    "likeCount": 6,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1473,
        "name": "AI 에이전트 오케스트레이션 플랫폼",
        "summary": "GraphRAG + Agent Orchestration 기술 기반 기업 업무 자동화 및 대화형 AI 솔루션",
        "website": "https://slashpage.com/velugadoc/36nj8v2wq5v4825ykq9z",
        "keywords": [
          "AI",
          "AI 에이전트",
          "MCP",
          "RAG엔진",
          "딥테크",
          "업무 자동화",
          "챗봇"
        ],
        "priceText": [
          "베이직 플랜 / 유/무료 혼합 / 19,500원"
        ],
        "priceNumber": 19500,
        "pricingKind": "fixed",
        "benefits": [
          "무료플랜: 서비스 이용료 : 0원 / 월 200크레딧 / 70만 Byte / 1채 채널 생성 가능 / 커스텀 프롬프트 설정 및 웹, 노션 플러그인 연동"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "RAG/지식검색",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 에이전트, 에이전트, RAG, GraphRAG, 자동화, 연동, DB"
      }
    ]
  },
  {
    "id": 798,
    "name": "주식회사 파트너잇",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/136375/b4552176b87442f0ae25bee5d7ad56e5.png",
    "summary": "수천 개의 지원사업 공고를 직접 찾을 필요 없습니다. @@ 2라운드 평가에서 활용할 수 있는 실질적인 성과를 제공합니다. @@",
    "description": "@ 2라운드 평가에서 활용할 수 있는 실질적인 성과를 제공합니다. @ 창업자의 시간을 아끼고, 기회를 늘리는 AI 솔루션, 파트너잇 좋은 아이디어가 있어도 어떤 지원사업을 신청해야 할지 몰라 기회를 놓치는 창업자가 많습니다. 파트너잇은 예비, 초기창업자의 현 상황에 가장 적합한 지원사업, 창업경진대회, 액셀러레이팅 프로그램 등 을 AI가 분석하여 추천합니다. 기업 정보를 기반으로 선정 가능성이 높은 지원사업들을 매칭하고, 성장 단계에 맞는 기회를 연결하여 창업자의 시간과 비용을 절감합니다.",
    "website": "https://partnerit.kr/modu",
    "email": "jjangu0706@naver.com",
    "contact": "010-9235-4407",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/798",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "파트너잇"
    ],
    "majorTags": [
      "사업계획서/IR",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서",
      "피드백",
      "리포트"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "사업계획서",
      "리포트"
    ],
    "techEvidence": "분석, 리포트",
    "priceText": [
      "베이직 요금제 / 월 구독 / 159,000원"
    ],
    "minPrice": 159000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "사업계획서 개선 포인트 리포트: 지원사업 선정 가능성을 높이기 위해 사업계획서를 AI가 평가하고, 부족한 부분을 구체적으로 짚어주는 진단형 리포트"
    ],
    "recommendation": "사업계획서, 리포트를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 9,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1386,
        "name": "파트너잇",
        "summary": "수천 개의 지원사업 공고를 직접 찾을 필요 없습니다. @@ 2라운드 평가에서 활용할 수 있는 실질적인 성과를 제공합니다. @@",
        "website": "",
        "keywords": [
          "AI추천",
          "예비창업",
          "정부사업",
          "지원사업",
          "지원사업추천",
          "창업",
          "초기창업"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 159,000원"
        ],
        "priceNumber": 159000,
        "pricingKind": "fixed",
        "benefits": [
          "사업계획서 개선 포인트 리포트: 지원사업 선정 가능성을 높이기 위해 사업계획서를 AI가 평가하고, 부족한 부분을 구체적으로 짚어주는 진단형 리포트"
        ],
        "deliverables": [
          "사업계획서",
          "리포트"
        ],
        "majorTags": [
          "사업계획서/IR",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "피드백",
          "리포트"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "분석, 리포트"
      }
    ]
  },
  {
    "id": 569,
    "name": "(주)그리네타",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/114794/9b4a7cc913aa4756966051bb1d01d6bc.png",
    "summary": "3D 사물, 공간, 월드 자동 생성 및 용량 99.6% 최적화 솔루션",
    "description": "**회사 소개** 아이디어가 떠올랐는데, “이걸 3D로 보여주고 싶다”는 생각은 들지만 기술도 없고 비용도 부담스럽지 않으셨나요? 3D 모델링은 전문 지식이 필요하고, 파일 용량이 커서 다루기 어렵다는 게 예비 창업자들의 가장 큰 고민이었습니다. **그리네타 AI는 바로 그런 분들을 위해 만든 AI 3D 콘텐츠 생성 솔루션**입니다. 텍스트 설명이나 간단한 이미지 하나만 입력하면 **3D 사물, 공간, 월드(월드모델)**를 자동으로 생성해 주고, 생성된 3D 데이터를 **최대 99.6%까지 최적화**해줍니다. 이제 전문 3D 툴이나 고사양 컴퓨터 없이도 누구나 빠르게 고품질 3D 콘텐츠를 만들 수 있습니다. 제품 시각화, 서비스 프로토타입, 투자 유치용 데모, 마케팅 영상, 메타버스 공간까지 — 아이디어를 바로 시각화하고 테스트할 수 있게 도와드립니다. **주요 특징** - AI가 텍스트·이미지로 3D 자동 생성 - 생성 후 즉시 99.6% 용량 최적화 (파일 크기 걱정 N",
    "website": "https://greneta.ai/",
    "email": "keeep@greneta.co",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/569",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Greneta AI (그리네타 AI)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "MVP/프로토타입",
      "이미지 생성",
      "DB/인프라"
    ],
    "deliverables": [
      "영상",
      "이미지"
    ],
    "techEvidence": "생성형, 프로토타입, 이미지, 인프라",
    "priceText": [
      "18000 / CREDIT_TOKEN / 1,982,902원"
    ],
    "minPrice": 1982902,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 영상, 이미지 근거가 필요한 초기 창업팀",
    "followerCount": 12,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1071,
        "name": "Greneta AI (그리네타 AI)",
        "summary": "3D 사물, 공간, 월드 자동 생성 및 용량 99.6% 최적화 솔루션",
        "website": "https://greneta.ai/",
        "keywords": [
          "3D",
          "3D Gen AI",
          "3D 생성",
          "3D 압축",
          "3D 용량최적화",
          "4D",
          "Gen AI",
          "생성형 AI",
          "월드모델",
          "콘텐츠"
        ],
        "priceText": [
          "18000 / CREDIT_TOKEN / 1,982,902원"
        ],
        "priceNumber": 1982902,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "MVP/프로토타입",
          "이미지 생성",
          "DB/인프라"
        ],
        "techEvidence": "생성형, 프로토타입, 이미지, 인프라"
      }
    ]
  },
  {
    "id": 616,
    "name": "마지글",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/2740/2e689b8b7c684f01bc06323dd9ef1432.png",
    "summary": "시나리오 및 스크립트 입력만으로 씬/컷 자동 분할, 세계관 설정, 스토리보드 이미지 생성까지 영상 프리프로덕션 전 과정을 자동화하는 AI SaaS",
    "description": "마지글은 비정형 데이터를 자체 온톨로지 엔진으로 구조화하고, 이를 기반으로 지능형 AI 에이전트를 구축하는 KAIST 출신 딥테크 스타트업입니다. 다수의 국내 주요 대기업 및 기관 산업 AI 프로젝트를 수행하며 기술력을 검증했고, 제조·에너지·조선·건설·언론·미디어 등 다양한 산업군의 솔루션을 보유하고 있습니다. 현재 크리에이터 미디어 산업에 특화한 AI SaaS를 통해 콘텐츠 기획 단계의 End-to-End 자동화 파이프라인을 구축하고 있습니다.",
    "website": "",
    "email": "donghyun@mazigle.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/616",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "스크립트 및 세계관 설정 기반 자동 스토리보드 생성 AI SaaS"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 이미지 생성, 이미지, 자동화",
    "priceText": [
      "Starter / 월 구독 / 13,000원"
    ],
    "minPrice": 13000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "크레딧 제: 첫 가입 시, 30크레딧 무료"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 SNS/광고 문구, 영상 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 10,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1128,
        "name": "스크립트 및 세계관 설정 기반 자동 스토리보드 생성 AI SaaS",
        "summary": "시나리오 및 스크립트 입력만으로 씬/컷 자동 분할, 세계관 설정, 스토리보드 이미지 생성까지 영상 프리프로덕션 전 과정을 자동화하는 AI SaaS",
        "website": "",
        "keywords": [
          "광고",
          "스토리보드",
          "영상",
          "콘티",
          "프리프로덕션"
        ],
        "priceText": [
          "Starter / 월 구독 / 13,000원"
        ],
        "priceNumber": 13000,
        "pricingKind": "fixed",
        "benefits": [
          "크레딧 제: 첫 가입 시, 30크레딧 무료"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 이미지 생성, 이미지, 자동화"
      }
    ]
  },
  {
    "id": 588,
    "name": "(주)핀인사이트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/126439/3a9bd3dc418f4da993bd133328b4a8dc.png",
    "summary": "기업/인물 온라인평판분석 (뉴스, 블로그, SNS, 카페 모니터링), 이슈 분석 비교 분석",
    "description": "# 핀인사이트(Fin Insight) **기술(AI·Big Data)로 인간을 더 인간답게** 핀인사이트는 AI, 데이터분석, 금융공학 분야의 전문성을 기반으로 기업의 디지털 혁신을 지원하는 AX(AI Transformation) 전문기업입니다. 우리는 단순히 AI를 도입하는 것이 아니라 조직과 업무 프로세스를 AI 중심으로 재설계하여 사람이 더 가치 있는 사고와 의사결정에 집중할 수 있도록 지원합니다. 2015년 설립 이후 금융공학 솔루션, 데이터 분석, 인공지능 서비스, 실무 교육 사업을 수행해 왔으며 현재는 교육, 컨설팅, 솔루션을 통합 제공하는 AX 전문 기업으로 성장하고 있습니다. ## 주요 사업영역 ### AX(AI Transformation) 컨설팅 기업의 업무 프로세스를 분석하고 AI 중심 조직으로 전환하기 위한 전략을 수립합니다. - AX 진단 및 전략 수립 - AI 도입 로드맵 설계 - 업무 프로세스 혁신(BPR) - AI 에이전트 구축 - 데이터 기",
    "website": "https://fins.ai",
    "email": "contact@fins.ai",
    "contact": "002-2605-0427",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/588",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Insight Page",
      "Insight Studio"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "SNS 문구",
      "IR",
      "피드백",
      "홈페이지",
      "브랜딩",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "블로그",
      "SNS/광고 문구",
      "홈페이지",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "생성형, AI 모델, AI 에이전트, 에이전트, 데이터분석, 데이터 분석, 분석, 자동화, 클라우드, LLM",
    "priceText": [
      "프로 요금제 / 월 구독 / 95,000원",
      "10,000크레딧 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 95000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "IR/발표자료, 블로그 결과물로 첫 고객 반응을 빠르게 확인하려는 Insight Page 같은 서비스가 필요한 팀",
    "followerCount": 12,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1097,
        "name": "Insight Page",
        "summary": "기업/인물 온라인평판분석 (뉴스, 블로그, SNS, 카페 모니터링), 이슈 분석 비교 분석",
        "website": "",
        "keywords": [
          "AI",
          "SNS분석",
          "감성분석",
          "감정분석",
          "블로그분석",
          "온라인평판분석",
          "이슈분석"
        ],
        "priceText": [
          "프로 요금제 / 월 구독 / 95,000원"
        ],
        "priceNumber": 95000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "IR",
          "피드백",
          "홈페이지",
          "브랜딩",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "생성형, AI 모델, AI 에이전트, 에이전트, 데이터분석, 데이터 분석, 분석, 자동화, 클라우드"
      },
      {
        "id": 1098,
        "name": "Insight Studio",
        "summary": "데이터 분석부터 AI 에이전트 구축까지 End-to-End AX 서비스",
        "website": "",
        "keywords": [
          "AI에이전트",
          "AX",
          "데이터처리자동화",
          "멀티LLM",
          "코딩에이전트"
        ],
        "priceText": [
          "10,000크레딧 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "IR",
          "피드백",
          "홈페이지",
          "브랜딩",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 생성형, AI 모델, AI에이전트, AI 에이전트, 에이전트, 데이터분석, 데이터 분석, 분석, 자동화, 클라우드"
      }
    ]
  },
  {
    "id": 784,
    "name": "주식회사 콘티고",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/170488/97a91c8452204a06a6fdf549ee992ed1.png",
    "summary": "창업가를 위한 인사관리 에이전트 | 구조화된 인사, 노무 데이터베이스 구축 및 인사관리 자동화 - 인사관리의 새로운 표준, AI가 완성하는 스마트 HR 워크플로우",
    "description": "주식회사 콘티고는 AI가 완성하는 스마트 HR 워크플로우 [노랑]을 개발, 운영하고 있습니다. 창업가가 꼭 챙겨야 할 업무지만 손이 많이 가는 인사관리 업무를 [노랑]과 함께 간단하게 처리해보세요. 근로계약 자동화부터 증빙서류 관리, 근태 집계 및 급여 정산 등 우리회사를 안정적으로 운영하기 위해 필수적인 인사관리가 쉬워집니다.",
    "website": "https://www.contigo.im",
    "email": "contigo@contigo.im",
    "contact": "070-4035-5099",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/784",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "노랑"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "자동화"
    ],
    "techEvidence": "에이전트, 자동화, 워크플로우, 데이터베이스",
    "priceText": [
      "SME 요금제 / 월 구독 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "AI 에이전트, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 노랑 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 9,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1368,
        "name": "노랑",
        "summary": "창업가를 위한 인사관리 에이전트 | 구조화된 인사, 노무 데이터베이스 구축 및 인사관리 자동화 - 인사관리의 새로운 표준, AI가 완성하는 스마트 HR 워크플로우",
        "website": "https://contigo.im/",
        "keywords": [
          "AI",
          "HR",
          "근로계약",
          "근태",
          "에이전트",
          "인사관리",
          "인사정보시스템",
          "자동화"
        ],
        "priceText": [
          "SME 요금제 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "에이전트, 자동화, 워크플로우, 데이터베이스"
      }
    ]
  },
  {
    "id": 599,
    "name": "도시혁신그룹 무브먼트 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186282/fca261b1946d4246bef5386c27856524.png",
    "summary": "혼자 창업? 이제 AI에이전트팀과 함께! - KAIST+MENSA 팀이 만든 정부지원금 매칭·사업계획서·일정·고객을 AI가 알아서 챙기는 1인 기업 비즈니스 OS",
    "description": "**도시혁신그룹 무브먼트**는 AI솔루션과·공간·커뮤니티를 결합해 도시의 다양한 문제를 해결하고 기업의 성장을 돕는 임팩트테크 소셜벤처입니다. KAIST MBA·PhD, MENSA 출신 전문가들이 모여, \"최고의 두뇌와 AI로 미래를 설계하고 문제를 해결한다\"는 미션 아래 세 가지 영역을 운영합니다: **① AI 솔루션 (HI × AI)** - 1인 기업가를 위한 AI 비즈니스 OS '[friday.ceo](http://friday.ceo)' 개발·운영 - 전국 226개 지자체 탄소전환 os 'movezero.earth' 개발·운영 **② 공간·커뮤니티** — 강남 창업/커뮤니티 공간 '무브먼트 강남' 운영 **③ AI 콘텐츠·브랜딩** — 기업·기관 대상 맞춤형 AI 콘텐츠 설계·구현 2024년 시드 투자 유치 후, 1인 창업자·소상공인 420만 명을 위한 AI 솔루션으로 창업생태계와 함께 성장하고 있습니다.",
    "website": "https://friday.ceo",
    "email": "jaewook@mvmt.city",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/599",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "Friday.ceo (프라이데이 CEO)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "사업계획서",
      "랜딩페이지",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "랜딩페이지 빌더",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "랜딩페이지",
      "자동화"
    ],
    "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 랜딩, 자동화, 업무관리",
    "priceText": [
      "10000 / CREDIT_TOKEN / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "FREE: 정부지원사업 매칭·탐색 무료, AI 비서 채팅 하루 10회, 업무·인맥·문서 기본 관리, 환영 인터뷰 + 사업 프로필 자동 생성. (사업계획서 초안은 체험 후 Pro)"
    ],
    "recommendation": "사업계획서, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 Friday.ceo (프라이데이 CEO) 같은 서비스가 필요한 팀",
    "followerCount": 6,
    "likeCount": 7,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1109,
        "name": "Friday.ceo (프라이데이 CEO)",
        "summary": "혼자 창업? 이제 AI에이전트팀과 함께! - KAIST+MENSA 팀이 만든 정부지원금 매칭·사업계획서·일정·고객을 AI가 알아서 챙기는 1인 기업 비즈니스 OS",
        "website": "https://friday.ceo",
        "keywords": [
          "AI 비서 OS",
          "AI 에이전트",
          "AI비서",
          "비즈니스 자동화",
          "사업계획서 AI",
          "업무관리",
          "일정관리",
          "정부지원사업"
        ],
        "priceText": [
          "10000 / CREDIT_TOKEN / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "usage",
        "benefits": [
          "FREE: 정부지원사업 매칭·탐색 무료, AI 비서 채팅 하루 10회, 업무·인맥·문서 기본 관리, 환영 인터뷰 + 사업 프로필 자동 생성. (사업계획서 초안은 체험 후 Pro)"
        ],
        "deliverables": [
          "사업계획서",
          "랜딩페이지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "사업계획서",
          "랜딩페이지",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "랜딩페이지 빌더",
          "업무 자동화/API"
        ],
        "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 랜딩, 자동화, 업무관리"
      }
    ]
  },
  {
    "id": 639,
    "name": "승인행정사사무소",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/178383/102ba7ab91544173b44f4fa119a33b27.png",
    "summary": "업종·키워드만 입력하면 30초 만에 SEO 블로그 글과 AI 이미지까지 만들어주는 네이버 블로그 자동화 SaaS",
    "description": "승인행정사사무소는 행정사 업무와 AI 자동화 SaaS를 함께 운영하는 스타트업입니다. 2025년 1월 서울 성동구에서 출발해, 김수빈 대표가 행정 실무 경험을 토대로 소상공인·1인 기업에게 필요한 자동화 도구를 직접 기획·개발해 공급하고 있습니다. 현재 운영 중인 솔루션은 두 갈래입니다. 첫째, 블로그 마케팅 자동화 SaaS '블로릿(Blolit)' — 1인 사장님부터 마케팅 대행사·프랜차이즈 본사까지 사용하는 AI 콘텐츠 발행 도구입니다. 둘째, 1인 기업·프리랜서를 위한 클라우드 경영관리 SaaS 'Solo Biz ERP' — 거래내역 AI 자동분류, 런웨이 분석, 세금 캘린더로 경리 인력 없이도 사업 숫자를 직접 관리하게 돕습니다. 모든 솔루션은 한국 시장과 한국 세법·검색 환경에 맞춰 설계되었으며, AWS 서울 리전 기반의 안전한 데이터 보관과 Supabase Row Level Security를 통한 고객별 데이터 완전 격리를 기본 정책으로 운영합니다.",
    "website": "https://approval.ai.kr",
    "email": "kwwhale1204@gmail.com",
    "contact": "010-4747-9647",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/639",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Blolit Pro",
      "Blolit Enterprise",
      "Solo Biz ERP Basic",
      "Solo Biz ERP Standard"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "사업계획서/IR",
      "랜딩페이지/홈페이지"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "이미지",
      "자동화",
      "IR",
      "홈페이지",
      "리포트"
    ],
    "techTags": [
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "블로그",
      "이미지",
      "자동화",
      "IR/발표자료",
      "사업계획서",
      "홈페이지",
      "리포트"
    ],
    "techEvidence": "검색, 분석, 이미지, 자동화, 클라우드, 대시보드, 리포트",
    "priceText": [
      "pro / 월 구독 / 79,200원",
      "Enterprise / 월 구독 / 198,000원",
      "Basic / 월 구독 / 30,000원",
      "Standard / 월 구독 / 50,000원"
    ],
    "minPrice": 30000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료 체험 제공: 가입 후 7일: 무료 체험 제공: 가입 후 7일"
    ],
    "recommendation": "블로그, 이미지 결과물로 첫 고객 반응을 빠르게 확인하려는 Blolit Pro 같은 서비스가 필요한 팀",
    "followerCount": 9,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1162,
        "name": "Blolit Pro",
        "summary": "업종·키워드만 입력하면 30초 만에 SEO 블로그 글과 AI 이미지까지 만들어주는 네이버 블로그 자동화 SaaS",
        "website": "",
        "keywords": [
          "AI콘텐츠",
          "SEO자동화",
          "네이버블로그",
          "블로그자동발행",
          "소상공인마케팅",
          "자영업마케팅"
        ],
        "priceText": [
          "pro / 월 구독 / 79,200원"
        ],
        "priceNumber": 79200,
        "pricingKind": "fixed",
        "benefits": [
          "무료 체험 제공: 가입 후 7일: 무료 체험 제공: 가입 후 7일"
        ],
        "deliverables": [
          "블로그",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "검색, 분석, 이미지, 자동화, 클라우드"
      },
      {
        "id": 1163,
        "name": "Blolit Enterprise",
        "summary": "다점포·프랜차이즈·마케팅 대행사를 위한 대량 블로그 콘텐츠 자동 운영 패키지",
        "website": "",
        "keywords": [
          "ai자동발행",
          "네이버블로그",
          "다점포관리",
          "대량콘텐츠",
          "마케팅대행사",
          "프팬차이즈마케팅"
        ],
        "priceText": [
          "Enterprise / 월 구독 / 198,000원"
        ],
        "priceNumber": 198000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "블로그",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "검색, 분석, 자동화, 클라우드"
      },
      {
        "id": 1164,
        "name": "Solo Biz ERP Basic",
        "summary": "1인 기업·프리랜서를 위한 AI 거래분류 + 손익 대시보드 + 한국 세금 캘린더 SaaS",
        "website": "",
        "keywords": [
          "1기업ERP",
          "ai거래분류",
          "pwa",
          "세금캘린더",
          "손익대시보드",
          "엑셀업로드",
          "자영업가계부",
          "프리랜서경리",
          "한국세법"
        ],
        "priceText": [
          "Basic / 월 구독 / 30,000원"
        ],
        "priceNumber": 30000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "블로그",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "검색, 대시보드, 분석, 자동화, 클라우드"
      },
      {
        "id": 1165,
        "name": "Solo Biz ERP Standard",
        "summary": "Basic + 런웨이 분석·12개월 잔액 프로젝션·고정지출 관리로 투자 유치 준비 스타트업을 위한 패키지",
        "website": "",
        "keywords": [
          "IR자료",
          "고정비최적화",
          "런웨이분석",
          "법인경영",
          "시나리오분석",
          "시드스타트업",
          "자금소진",
          "캐시플로우",
          "투자유치준비"
        ],
        "priceText": [
          "Standard / 월 구독 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "블로그",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "IR",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "검색, 분석, 자동화, 클라우드"
      },
      {
        "id": 1166,
        "name": "Solo Biz ERP Premium",
        "summary": "사업장별 손익·서류 보관함·AI 인사이트 리포트·전담 온보딩까지 갖춘 시리즈 A 준비 스타트업용 최상위 패키지",
        "website": "",
        "keywords": [
          "AI인사이트",
          "IR준비",
          "다지점손익",
          "사업장관리",
          "서류보관함",
          "시리즈A",
          "투자DD"
        ],
        "priceText": [
          "Premium / 월 구독 / 90,000원"
        ],
        "priceNumber": 90000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "블로그",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "IR",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "검색, 분석, 리포트, 자동화, 클라우드"
      }
    ]
  },
  {
    "id": 642,
    "name": "아크원",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/122594/fe6e626f704d4c8b951eff4a66f810d3.png",
    "summary": "아이디어를 사업 전략으로 구조화하고, 실행 계획과 개발 수행까지 연결해 운영 가능한 서비스로 만들어가는 AI 실행 자동화 솔루션",
    "description": "저희는 100개 이상의 개발 프로젝트를 수행하며, 아이디어가 실제 서비스로 완성되기까지 필요한 과정을 가장 가까이에서 경험해왔습니다. 좋은 아이디어가 있어도 무엇부터 만들어야 할지 정리되지 않거나, 기획과 개발이 분리되거나, 회의에서 결정된 내용이 실제 실행으로 이어지지 않는 경우를 수없이 보았습니다. 우리는 이러한 문제를 해결하기 위해 프로젝트 수행 과정에서 반복되는 판단 구조, 기능 정의, 개발 흐름, 검증 단계, 출시 준비 과정을 지식 온톨로지로 구축했습니다. DOO는 이 경험과 구조를 바탕으로 만들어진 AI 기반 사업 수행 자동화 시스템입니다. 창업자는 DOO를 통해 막연한 아이디어를 사업 구조와 제품 구조로 정리하고, 실행 가능성을 판단하며, 필요한 기능과 작업을 도출하고, 개발 수행과 검증, 출시 준비까지 이어갈 수 있습니다. 우리는 단순히 AI를 활용하는 회사가 아니라, 실제 프로젝트 수행 경험을 AI가 이해하고 실행할 수 있는 구조로 바꾸는 회사입니다. D",
    "website": "https://idea.doo.so",
    "email": "npcoms@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/642",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "DOO"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "DB설계",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 자동화, DB",
    "priceText": [
      "PRO 요금제 / 월 구독 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 자동화, 컨설팅 근거가 필요한 초기 창업팀",
    "followerCount": 12,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1171,
        "name": "DOO",
        "summary": "아이디어를 사업 전략으로 구조화하고, 실행 계획과 개발 수행까지 연결해 운영 가능한 서비스로 만들어가는 AI 실행 자동화 솔루션",
        "website": "https://idea.doo.so",
        "keywords": [
          "AI 개발",
          "AI 멘토",
          "AI 에이전트",
          "AI 자동화",
          "사업 전략",
          "서비스 개발",
          "온톨로지",
          "전문가 미팅",
          "프로젝트 실행"
        ],
        "priceText": [
          "PRO 요금제 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 자동화, DB"
      }
    ]
  },
  {
    "id": 706,
    "name": "버딧",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/125328/614199a5a648401d851f34142aa0156a.png",
    "summary": "AI 기반 마케팅 및 시장 조사 자동화 툴 - 경쟁사 분석, 가격 모니터링부터 광고 제작까지 - 올인원 AI 마케팅 솔루션",
    "description": "버딧은 AI 기반 마케팅 자동화 솔루션을 개발하는 마케팅 테크 기업입니다. 초기 창업기업과 소상공인이 마케팅 전담 인력 없이도 시장·경쟁사 분석, 광고 콘텐츠 제작, SNS 마케팅 운영, 인플루언서 캠페인 실행까지 효율적으로 수행할 수 있도록 지원합니다. 이번에 ViewVibe가 ‘모두의 창업’ 솔루션 공급기업으로 선정됨에 따라, 참여 기업들이 보다 낮은 비용과 시간으로 실질적인 마케팅 성과를 만들 수 있도록 돕고자 합니다.",
    "website": "https://viewvibe.ai",
    "email": "spark@budit.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/706",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "ViewVibe"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "시장조사",
      "자동화"
    ],
    "techTags": [
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "시장/수요조사",
      "자동화"
    ],
    "techEvidence": "시장조사, 경쟁사, 분석, 자동화",
    "priceText": [
      "맥스 요금제 / 월 구독 / 150,000원"
    ],
    "minPrice": 150000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "ViewVibe 맥스플랜 이용자 대상 수수료 면제: 인플루언서 마케팅 플랫폼"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 SNS/광고 문구, 시장/수요조사 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 9,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1260,
        "name": "ViewVibe",
        "summary": "AI 기반 마케팅 및 시장 조사 자동화 툴 - 경쟁사 분석, 가격 모니터링부터 광고 제작까지 - 올인원 AI 마케팅 솔루션",
        "website": "",
        "keywords": [
          "SNS 마케팅",
          "경쟁사 분석",
          "마케팅",
          "시장조사",
          "인플루언서 마케팅"
        ],
        "priceText": [
          "맥스 요금제 / 월 구독 / 150,000원"
        ],
        "priceNumber": 150000,
        "pricingKind": "fixed",
        "benefits": [
          "ViewVibe 맥스플랜 이용자 대상 수수료 면제: 인플루언서 마케팅 플랫폼"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "시장조사",
          "자동화"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "시장조사, 경쟁사, 분석, 자동화"
      }
    ]
  },
  {
    "id": 782,
    "name": "주식회사 코리아에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189144/dfabbdd6214e4e81b9bd18c13186decd.png",
    "summary": "초고속 PDF 분석으로 문서를 AI 지식 데이터로 변환하고, 챗봇·검색까지 바로 구현할 수 있는 통합 파싱 엔진",
    "description": "KOAI PDF Parser는 LLM·RAG 시대의 핵심 문제인 “한국형 PDF 데이터 처리”를 해결하는 AI 기술 기업입니다. 현재 많은 기업들이 생성형 AI를 도입하고 있지만, 실제 현장에서는 복잡한 한국형 PDF 문서를 제대로 읽지 못해 AI 정확도가 떨어지는 문제가 발생합니다. KOAI는 이러한 문제를 해결하기 위해 한국어 문서 구조 분석에 최적화된 초고속 PDF Parsing 엔진을 자체 개발했습니다. 당사의 기술은 단순 텍스트 추출을 넘어, 표·다단 문서·복합 레이아웃·깨진 한글 인코딩까지 분석하여 AI가 이해 가능한 구조 데이터로 변환합니다. 여기에 그치지 않고, KOAI는 파싱된 문서를 임베딩(Embedding)하여 벡터 데이터베이스(Vector DB)에 저장하고, 시맨틱 서치(Semantic Search)까지 지원하는 통합 AI 데이터 파이프라인을 제공합니다. 이를 통해 고객사는 별도의 복잡한 개발 없이도 다음과 같은 기능을 바로 구현할 수 있습니다: - PD",
    "website": "https://pdf.korea-ai.net/",
    "email": "koai@korea-ai.net",
    "contact": "070-8098-7387",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/782",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "K-PARSER"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "설문/서베이",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "LLM, 생성형, 응답, RAG, 검색, 분석, 자동화, DB, 데이터베이스, 인프라",
    "priceText": [
      "314,286포인트 / CREDIT_TOKEN / 220,000원"
    ],
    "minPrice": 220000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 설문/서베이 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 K-PARSER 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 6,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1366,
        "name": "K-PARSER",
        "summary": "초고속 PDF 분석으로 문서를 AI 지식 데이터로 변환하고, 챗봇·검색까지 바로 구현할 수 있는 통합 파싱 엔진",
        "website": "",
        "keywords": [
          "AI 챗봇",
          "LLM 데이터 전처리",
          "PDF 파싱",
          "RAG"
        ],
        "priceText": [
          "314,286포인트 / CREDIT_TOKEN / 220,000원"
        ],
        "priceNumber": 220000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "설문/서베이",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 생성형, 응답, RAG, 검색, 분석, 자동화, DB, 데이터베이스, 인프라"
      }
    ]
  },
  {
    "id": 632,
    "name": "소셜프로젝트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/124193/fc3c3f028a5f467b9c2c1cadabb26c55.png",
    "summary": "프로젝트를 알아서 계획하고, 실행하고, 스스로 검토까지 하는 AI 비서",
    "description": "소셜프로젝트 \"프로젝트가 실패하지 않는 세상을 만드는 AI 회사\" 25년간 금융권 IT 현장에서 프로젝트 실패를 직접 겪어온 대표가, \"AI가 프로젝트를 지켜줄 수 있다\"는 확신으로 창업한 회사입니다. 직접 만든 AI 엔진(DUNA)과 자율 에이전트 기술로, 프로젝트 관리의 방식 자체를 바꿉니다. 우리가 하는 일 제품 AIPM — AI가 직접 관리하는 프로젝트 관리 서비스 기술 DUNA — 자체 개발 실시간 AI 분석 엔진 고객 금융기관, IT기업, 1인기업 등 프로젝트를 하는 모든 곳 목표 프로젝트 실패율을 줄이고, 작은 팀도 큰 일을 할 수 있게",
    "website": "https://www.socialproject.net/aipm/web/",
    "email": "stuko@nate.com",
    "contact": "010-5282-4947",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/632",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "인공지능 프로젝트 관리 서비스(AIPM)"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "AI 에이전트",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "에이전트, 분석",
    "priceText": [
      "Pro / 월 구독 / 9,900원"
    ],
    "minPrice": 9900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "3인 이내: 3개 프로젝트"
    ],
    "recommendation": "AI 에이전트, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 인공지능 프로젝트 관리 서비스(AIPM) 같은 서비스가 필요한 팀",
    "followerCount": 8,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1150,
        "name": "인공지능 프로젝트 관리 서비스(AIPM)",
        "summary": "프로젝트를 알아서 계획하고, 실행하고, 스스로 검토까지 하는 AI 비서",
        "website": "https://www.socialproject.net/aipm/web/manual",
        "keywords": [
          "AI리뷰",
          "WBS",
          "요구사항관리",
          "이슈관리",
          "일정관리",
          "프로젝트",
          "프로젝트관리"
        ],
        "priceText": [
          "Pro / 월 구독 / 9,900원"
        ],
        "priceNumber": 9900,
        "pricingKind": "fixed",
        "benefits": [
          "3인 이내: 3개 프로젝트"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "AI 에이전트",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "에이전트, 분석"
      }
    ]
  },
  {
    "id": 705,
    "name": "주식회사 바이스퀘어",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/101484/3dc5ea5d919d4706a1d4e1be152c89a4.png",
    "summary": "창업 초기 시장분석·광고기획을 위한AI 마케팅 SaaS - 네이버 급상승 키워드를 AI가 매일 자동 분석해, 경쟁 전 신규 아이템과 진입 타이밍을 알려주는 창업 초기 시장분석 AI 솔루션",
    "description": "바이스퀘어는 온·오프라인 종합광고대행사로 비즈니스 컨설팅, 광고 매체 운용, 브랜드 관리 등 성과 향상에 필요한 모든 업무를 꼼꼼히 설계합니다. 자체 브랜드 운영경험을 토대로 압도적인 매출 상승을 만듭니다. 고민이 있다면 잘 찾아오셨습니다. 바이스퀘어는 반드시 성과를 내는 곳입니다. ▶ 회사 소개 주식회사 바이스퀘어는 중소업체 및 소상공인(SMB)을 위한 7년 업력의 디지털 마케팅 종합 대행사입니다. 키워드 기반 Full Funnel Marketing 전략으로 고객의 검색 데이터를 분석해 유입부터 구매 전환, CS&CRM까지 전 과정을 통합 설계합니다. ▶ 핵심 역량 15,000+ 키워드 DB (8개 이상 업종, 6년 이상 축적) 1,200+ 광고 패턴 분석 경험 700+ 누적 프로젝트 수행 네이버 블로그·VIEW·쇼핑·지식iN·카페·커뮤니티·라이브커머스 전 매체 운영 가능 ▶ 고객사 성공 사례 베**펜 (리빙/문구): ROAS 468%, 구매전환 4,3",
    "website": "",
    "email": "bill@bysq.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/705",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AI 마케팅 SaaS"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "광고",
      "홈페이지",
      "DB설계",
      "시장조사",
      "브랜딩",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "홈페이지",
      "시장/수요조사",
      "컨설팅"
    ],
    "techEvidence": "시장조사, 경쟁사, 시장분석, 홈페이지, 검색, 분석, DB",
    "priceText": [
      "베이직 요금제 / 유/무료 혼합 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "게스트 무료플랜: 급등 키워드 TOP3, 7일 조회, 증감률 일부 공개 무료 제공"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 블로그, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 10,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1259,
        "name": "AI 마케팅 SaaS",
        "summary": "창업 초기 시장분석·광고기획을 위한AI 마케팅 SaaS - 네이버 급상승 키워드를 AI가 매일 자동 분석해, 경쟁 전 신규 아이템과 진입 타이밍을 알려주는 창업 초기 시장분석 AI 솔루션",
        "website": "",
        "keywords": [
          "경쟁사분석",
          "광고기획",
          "광고대본",
          "네이버쇼핑",
          "쇼핑몰창업",
          "시장조사",
          "아이템발굴",
          "자사몰창업",
          "키워드분석",
          "트렌드분석"
        ],
        "priceText": [
          "베이직 요금제 / 유/무료 혼합 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "게스트 무료플랜: 급등 키워드 TOP3, 7일 조회, 증감률 일부 공개 무료 제공"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "시장/수요조사",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "광고",
          "홈페이지",
          "DB설계",
          "시장조사",
          "브랜딩",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "시장조사, 경쟁사, 시장분석, 홈페이지, 검색, 분석, DB"
      }
    ]
  },
  {
    "id": 849,
    "name": "하베스터",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/111327/929dc3a482bf4205bc922ef2ee2fee0b.png",
    "summary": "모니터링부터 위기 대응까지, 인플루언서·기업의 평판을 지키는 AI 통합 플랫폼",
    "description": "하베스터(Harvester)는 AI 기반 디지털 평판 보호 SaaS를 개발하는 스타트업 입니다. 악플 대응부터 평판 보호까지, 인플루언서와 기업의 디지털 평판을 자동화로 지키는 통합 솔루션을 제공합니다. 핵심 제품은 두 가지입니다. **LALA Legal**은 법무법인 대상 B2B 솔루션으로, 악성 댓글을 자동 수집하고 11개 유형으로 AI 분류한 뒤 채증 PDF와 범죄일람표를 자동 생성합니다. 법무법인 해율과의 실증(PoC)에서 2,049건의 댓글을 분석해 380건의 악성 댓글을 탐지(탐지율 19%)했으며, 100만 구독 인플루언서, 아나운서, 야구선수 등 유명인의 고소 처리에 실제 활용되고 있습니다. **LAXIT**은 크리에이터·인플루언서를 위한 평판 모니터링 SaaS로, 운영 채널과 외부 10종 플랫폼(DC인사이드, 루리웹, 에펨코리아 등)을 통합 분석해 평판 변화를 실시간으로 감지하고 위기 알림을 제공합니다. 핵심 경쟁력은 자체 구축한 49,000건의 학",
    "website": "https://harvester.kr",
    "email": "admin@harvester.kr",
    "contact": "010-3905-3849",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/849",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "LALA (라라)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "LLM, 분석, 자동화",
    "priceText": [
      "모두의창업 패키지 / 월 구독 / 250,000원"
    ],
    "minPrice": 250000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 자동화 근거가 필요한 초기 창업팀",
    "followerCount": 7,
    "likeCount": 5,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1465,
        "name": "LALA (라라)",
        "summary": "모니터링부터 위기 대응까지, 인플루언서·기업의 평판을 지키는 AI 통합 플랫폼",
        "website": "",
        "keywords": [
          "AI분석",
          "댓글모니터링",
          "브랜드보호",
          "악플대응",
          "위기알림",
          "인플루언서",
          "채증자동화",
          "콘텐츠처방",
          "평판관리",
          "평판보호"
        ],
        "priceText": [
          "모두의창업 패키지 / 월 구독 / 250,000원"
        ],
        "priceNumber": 250000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 분석, 자동화"
      }
    ]
  },
  {
    "id": 853,
    "name": "그루브웍스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187304/2cbab3d17d1a439e90f0888d7a9126fc.png",
    "summary": "브랜드IP 및 기업용 미니홈페이지와 AI채팅 서비스 빌더",
    "description": "그루브웍스는 최신 생성형 AI기술과 디자인과 UX기술을 융합하여 사용자 중심의 서비스을 만들고 있는 국내 최고의 AI기술융합 전문회사입니다. LG CNS에서 20년간 다양한 프로젝트를 성공적으로 수행한 경험을 갖고 있는 IT전문가인 대표이사를 비롯하여 각 분야의 전문가팀으로 구성되어 있습니다. AI관련 특허 6건 및 상표권 9건을 보유하고 있으며 고려대학교 AI연구센터 협력기관으로 등록되어 있습니다. 삼성, LG, 대상그룹, SK, 경기교육청, 소방병원등 대기업 및 다양한 고객들과 성공적인 프로젝트를 수행한 경험을 갖고 있습니다.",
    "website": "https://www.avatalk.in/",
    "email": "groov@groovworks.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/853",
    "sectors": [],
    "serviceNames": [
      "아바톡(Avatalk)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "교육/컨설팅"
    ],
    "detailTags": [
      "랜딩페이지",
      "홈페이지",
      "브랜딩",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "노코드/앱빌더",
      "랜딩페이지 빌더"
    ],
    "deliverables": [
      "랜딩페이지",
      "홈페이지"
    ],
    "techEvidence": "생성형, AI에이전트, 에이전트, 빌더, 랜딩페이지, 랜딩, 홈페이지",
    "priceText": [
      "All-in-One / 월 구독 / 589,800원"
    ],
    "minPrice": 589800,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "랜딩페이지, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 아바톡(Avatalk) 같은 서비스가 필요한 팀",
    "followerCount": 9,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1474,
        "name": "아바톡(Avatalk)",
        "summary": "브랜드IP 및 기업용 미니홈페이지와 AI채팅 서비스 빌더",
        "website": "https://www.avatalk.in/",
        "keywords": [
          "AI",
          "AI에이전트",
          "고객상담",
          "랜딩페이지",
          "미니홈페이지",
          "아바톡",
          "챗봇",
          "홈페이지"
        ],
        "priceText": [
          "All-in-One / 월 구독 / 589,800원"
        ],
        "priceNumber": 589800,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "랜딩페이지",
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "교육/컨설팅"
        ],
        "detailTags": [
          "랜딩페이지",
          "홈페이지",
          "브랜딩",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "노코드/앱빌더",
          "랜딩페이지 빌더"
        ],
        "techEvidence": "생성형, AI에이전트, 에이전트, 빌더, 랜딩페이지, 랜딩, 홈페이지"
      }
    ]
  },
  {
    "id": 729,
    "name": "주식회사 스트라",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/154226/a1f679b6c1594fabb07fe04ed8fac650.png",
    "summary": "한국어로 된 홍보 영상 다국어 음성으로 변환",
    "description": "STRA AI는 AI 기반 영상 현지화 솔루션을 개발하는 스타트업입니다. 영상 업로드만으로 자동 번역 자막 생성, AI 더빙, 음성 합성(TTS), 다국어 콘텐츠 제작까지 한 번에 처리할 수 있는 서비스를 제공합니다. 현재 방송사, 미디어 기업, 콘텐츠 제작사와 협업하며 드라마·예능·교육·유튜브 콘텐츠의 글로벌 현지화를 지원하고 있습니다. 특히 한국 콘텐츠를 영어·스페인어 등 다양한 언어로 빠르게 변환하는 AI 더빙 기술에 집중하고 있습니다. STRA AI는 삼성전자 사내벤처 출신 팀이 설립했으며, 자체 개발한 음성 합성·음성 변환·자막 싱크·번역 기술을 기반으로 콘텐츠 제작 비용과 시간을 획기적으로 절감하고 있습니다. 누구나 언어 장벽 없이 콘텐츠를 소비할 수 있도록, 글로벌 AI 미디어 인프라를 만드는 것이 STRA AI의 목표입니다.",
    "website": "https://stra.ai",
    "email": "yongho@stra.ai",
    "contact": "010-9954-9930",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/729",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AI 더빙 자동화 플랫폼",
      "AI 자막 자동화 플랫폼"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "영상",
      "자동화",
      "교육"
    ],
    "techTags": [
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "영상",
      "자동화"
    ],
    "techEvidence": "TTS, 음성, 자동화, 인프라",
    "priceText": [
      "20000000 / CREDIT_TOKEN / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free: 가입 시 1만 크레딧 무료 제공합니다.",
      "Free: 가입 시 10000 크레딧 제"
    ],
    "recommendation": "음성/STT/TTS, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 더빙 자동화 플랫폼 같은 서비스가 필요한 팀",
    "followerCount": 9,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1290,
        "name": "AI 더빙 자동화 플랫폼",
        "summary": "한국어로 된 홍보 영상 다국어 음성으로 변환",
        "website": "https://stra.ai/blog/stra-ai-guide-global-market",
        "keywords": [
          "TTS",
          "더빙",
          "번역",
          "보이스",
          "현지화"
        ],
        "priceText": [
          "20000000 / CREDIT_TOKEN / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "usage",
        "benefits": [
          "Free: 가입 시 1만 크레딧 무료 제공합니다."
        ],
        "deliverables": [
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "영상",
          "자동화",
          "교육"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "TTS, 음성, 자동화, 인프라"
      },
      {
        "id": 1291,
        "name": "AI 자막 자동화 플랫폼",
        "summary": "AI로 영상 번역 자막을 만들어요",
        "website": "https://stra.ai/blog/subtitle-editing-with-stra-ai",
        "keywords": [
          "SRT",
          "번역",
          "자막"
        ],
        "priceText": [
          "20000000 / CREDIT_TOKEN / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "usage",
        "benefits": [
          "Free: 가입 시 10000 크레딧 제"
        ],
        "deliverables": [
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "영상",
          "자동화",
          "교육"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "TTS, 음성, 자동화, 인프라"
      }
    ]
  },
  {
    "id": 692,
    "name": "주식회사 로넥트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185366/a822d4bfe14a4e2b804ada3f1d88be17.png",
    "summary": "문서 작성에 특화된 AI 글쓰기 서비스 - 막막한 첫 문장부터 최종 검토까지, AI와 함께 쓰는 문서 워크스페이스",
    "description": "로넥트는 변호사가 직접 만든 AI 테크 스타트업입니다. 처음에는 복잡하고 방대한 규제 정보를 누구나 쉽게 찾을 수 있도록 돕는 검색 플랫폼 'Lawnect'로 시작했습니다. 실제 실무 현장에서 느낀 불편함에서 출발했기에, 단순한 기술 서비스가 아니라 현장의 언어로 만들어진 솔루션입니다. 이후 문서 업무 전반의 비효율을 해결하기 위해 AI 문서 작성 플랫폼 NextWrite로 서비스를 확장했습니다. 사업계획서, 보고서, 제안서, 회의록 등 반복적으로 쏟아지는 문서 작업을 AI와 함께 더 빠르고 완성도 있게 처리할 수 있도록 지원합니다. 기업용 AI 환경 구축 솔루션 Firm Assistant도 운영 중으로, 대형 로펌과 금융기관에 이미 도입된 검증된 서비스입니다. 앞으로는 전문 보고서부터 마케팅 콘텐츠, 내부 운영 문서까지 — 모든 유형의 글쓰기가 더 쉬워지는 세상을 만들어가고 있습니다.",
    "website": "https://nextwrite.net/",
    "email": "contact@lawnect.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/692",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "넥스트 라이트 (Next Write)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "사업계획서",
      "IR",
      "리포트"
    ],
    "techTags": [
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "블로그",
      "리포트"
    ],
    "techEvidence": "검색, 보고서",
    "priceText": [
      "플러스 (월 구독료) / 유/무료 혼합 / 15,000원"
    ],
    "minPrice": 15000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "체험 무료: 최대 작성 문서 수 제한, 기본 템플릿 제공, 제한된 AI 이용량"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 8,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1240,
        "name": "넥스트 라이트 (Next Write)",
        "summary": "문서 작성에 특화된 AI 글쓰기 서비스 - 막막한 첫 문장부터 최종 검토까지, AI와 함께 쓰는 문서 워크스페이스",
        "website": "https://blog.naver.com/lawnect/223863717393",
        "keywords": [
          "문서작성AI",
          "번역",
          "블로그글",
          "사업계획서",
          "제안서",
          "지원사업신청서",
          "회의록정리"
        ],
        "priceText": [
          "플러스 (월 구독료) / 유/무료 혼합 / 15,000원"
        ],
        "priceNumber": 15000,
        "pricingKind": "fixed",
        "benefits": [
          "체험 무료: 최대 작성 문서 수 제한, 기본 템플릿 제공, 제한된 AI 이용량"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "블로그",
          "리포트"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "사업계획서",
          "IR",
          "리포트"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "검색, 보고서"
      }
    ]
  },
  {
    "id": 625,
    "name": "벤처랩스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/195193/e42d3b1d29f1420083a38032b04cdca9.png",
    "summary": "[창업가를 위한 AI 심사역] 사업계획서와 IR의 빈틈을 찾다!",
    "description": "AI 심사역 비즈니어스가 '심사의 장벽'을 허물어드립니다. # **비즈니어스가 '심사의 장벽'을 허물어드립니다** 안녕하세요, **벤처랩스**입니다. 저희는 1인 창업가와 초기 스타트업의 강력한 무기이자, ### 국내 최초의 AI 기반 사업계획서·IR 검증 솔루션 ### '비즈니어스(BizniUs)'를 만들고 있습니다. 누구나 정보 격차나 네트워크의 한계 없이, 오직 아이디어와 역량만으로 세상에 증명해 보일 수 있는 '**기회가 평등한 세상**'을 꿈꾸는 팀입니다. ## **🌍 누구나 AI로 쓰는 시대, 진짜 격차는 '검증'에서 벌어집니다** 수많은 정보와 생성형 AI 툴이 넘쳐나는 지금, 역설적으로 '선택'의 문턱은 더 높아졌습니다. 이제는 **누구나 그럴듯한 사업계획서를** **몇 분 만에 생성**해내는 시대이기 때문입니다. 진짜 격차는 생성 이후에 발생합니다. 모두가 문서를 생성하고 꾸미는 데 집중하거나 각종 컨설팅과 액셀러레이팅을 진행할 때,",
    "website": "https://bizni.us",
    "email": "just.do@venturelabs.fun",
    "contact": "010-8671-1744",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/625",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "비즈니어스"
    ],
    "majorTags": [
      "사업계획서/IR",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "피드백",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "생성형",
    "priceText": [
      "BeGenius 요금제 / 월 구독 / 419,600원"
    ],
    "minPrice": 419600,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 초기 창업팀",
    "followerCount": 7,
    "likeCount": 4,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1139,
        "name": "비즈니어스",
        "summary": "[창업가를 위한 AI 심사역] 사업계획서와 IR의 빈틈을 찾다!",
        "website": "",
        "keywords": [
          "AI심사역",
          "IR진단",
          "QnA대비",
          "사업계획서진단"
        ],
        "priceText": [
          "BeGenius 요금제 / 월 구독 / 419,600원"
        ],
        "priceNumber": 419600,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "피드백",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI"
        ],
        "techEvidence": "생성형"
      }
    ]
  },
  {
    "id": 695,
    "name": "주식회사 리메릭",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/194377/f58d0d32ec664c51b17b9e8f08742998.png",
    "summary": "기록하려고 멈추지 마세요. 이미 쓰는 도구에서 매일 작업을 자동으로 모아, 사업계획서·공유용 메모·보고 초안까지 스스로 정리되는 AI 워크스페이스 MashNote",
    "description": "리메릭은 창업팀과 연구개발 조직을 위한 AI 업무 자동화 솔루션을 개발하는 스타트업입니다. 저희는 단순히 AI와 대화하는 도구가 아니라, 아이디어·회의 내용·조사자료·사업계획서·제안서 같은 실제 업무 산출물이 팀의 자산으로 쌓이는 AI 워크스페이스를 만들고 있습니다. 생성형 AI, 지식베이스, 데이터 구조화 기술을 바탕으로 실무자가 반복적인 문서 작성과 정보 정리 업무를 더 빠르고 체계적으로 수행할 수 있도록 돕는 것이 리메릭의 핵심 방향입니다. 대표 솔루션인 MashNote는 창업자가 머릿속에 있는 아이디어를 빠르게 문서로 구조화하고, 사업계획서·IR 초안·회의록·제안서·업무보고 등 반복적으로 필요한 문서 작업을 AI와 함께 효율적으로 처리할 수 있도록 돕습니다. 또한 팀 내 업무 기록, 의사결정 과정, 조사자료, 기획 문서를 한곳에 축적해 이후 업무에 반복 활용할 수 있도록 지원합니다. 초기 창업팀이 적은 인원으로 더 많은 일을 해낼 수 있도록, 문서 작성과 지식 정리에 드",
    "website": "https://www.mashnote.io",
    "email": "contact@lymeric.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/695",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "MashNote (매시노트)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "자동화"
    ],
    "techEvidence": "생성형, 에이전트, 자동화",
    "priceText": [
      "비즈니스 요금제 / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 MashNote (매시노트) 같은 서비스가 필요한 팀",
    "followerCount": 8,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1245,
        "name": "MashNote (매시노트)",
        "summary": "기록하려고 멈추지 마세요. 이미 쓰는 도구에서 매일 작업을 자동으로 모아, 사업계획서·공유용 메모·보고 초안까지 스스로 정리되는 AI 워크스페이스 MashNote",
        "website": "",
        "keywords": [
          "AI 문서작성",
          "AI워크스페이스",
          "노트",
          "에이전트",
          "작업자동정리",
          "협업",
          "회의록"
        ],
        "priceText": [
          "비즈니스 요금제 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 에이전트, 자동화"
      }
    ]
  },
  {
    "id": 614,
    "name": "가장 사람 같은 AI - 마인드브이알 (마브)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188848/f9d1d51c4a644dd99a10a6e57904317b.png",
    "summary": "교육, 상담, 면접, 서비스, 훈련 분야에 적용 가능한 멀티모달 AI 인터랙티브 휴먼",
    "description": "### 한 줄 소개 마인드브이알은 사용자의 **음성·언어·표정·행동을 실시간으로 인식해 사람처럼 반응하는 AI 인터랙티브 휴먼**을 개발하는 회사입니다. 단순히 말하는 아바타가 아니라, 상대방의 상태를 읽고 그에 맞는 표정과 태도로 응답하는 진짜 대화 상대에 가까운 AI를 만들고 있습니다. ### 우리가 풀고 있는 문제 기존 AI 휴먼은 사용자의 입력 중 한 가지(주로 텍스트)만 보기 때문에 반응 정확도가 50~65% 수준에 머물고, 상호작용이 정형적입니다. 반면 실시간 영상 생성형 AI 휴먼은 사용자 한 명당 GPU 한 개가 필요해서 비용이 너무 비싸 대규모 서비스로 확장하기 어렵습니다. 그런데 면접·상담·직무 훈련 등 사람을 대체하는 AI 인터랙션 시장은 매년 30% 이상 성장하고 있기도 합니다.**저희는 GPU 비용을 70% 절감하면서 동시에 멀티모달 반응 인식을 적용해 이 두 가지 한계를 해결하는 기술을 만들고 있습니다.** ### 핵심 기술 — 두 가지 #### ①",
    "website": "http://mindprep.co.kr",
    "email": "daeyeop.lee@mindvr.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/614",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AI 영상 기반 실사, 멀티모달 감정인시 기반 자연스러운 인터랙티브 휴먼"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "SNS 문구",
      "IR",
      "발표자료",
      "리포트",
      "브랜딩",
      "영상",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "가상고객/시뮬레이션",
      "설문/서베이",
      "데이터 분석/대시보드",
      "영상 생성",
      "음성/STT/TTS",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "블로그",
      "SNS/광고 문구",
      "리포트",
      "영상"
    ],
    "techEvidence": "LLM, 생성형, 시뮬레이션, 응답, 분석, 리포트, 영상 생성, 비디오, STT, TTS",
    "priceText": [
      "베이직 / 월 구독 / 0원"
    ],
    "minPrice": 0,
    "pricingKind": "free",
    "pricingSortRank": 0,
    "benefits": [
      "AI 영상생성: TTS/STT/LLM"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 IR/발표자료, 블로그 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 9,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1126,
        "name": "AI 영상 기반 실사, 멀티모달 감정인시 기반 자연스러운 인터랙티브 휴먼",
        "summary": "교육, 상담, 면접, 서비스, 훈련 분야에 적용 가능한 멀티모달 AI 인터랙티브 휴먼",
        "website": "https://mindprep.co.kr",
        "keywords": [
          "AI",
          "교육",
          "마케팅",
          "면접",
          "불안",
          "스피치 연습",
          "실사 아바타",
          "심리상담",
          "인공지능",
          "훈련"
        ],
        "priceText": [
          "베이직 / 월 구독 / 0원"
        ],
        "priceNumber": 0,
        "pricingKind": "free",
        "benefits": [
          "AI 영상생성: TTS/STT/LLM"
        ],
        "deliverables": [
          "IR/발표자료",
          "블로그",
          "SNS/광고 문구",
          "리포트",
          "영상"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "IR",
          "발표자료",
          "리포트",
          "브랜딩",
          "영상",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "설문/서베이",
          "데이터 분석/대시보드",
          "영상 생성",
          "음성/STT/TTS",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 생성형, 시뮬레이션, 응답, 분석, 리포트, 영상 생성, 비디오, STT, TTS, 음성, GPU"
      }
    ]
  },
  {
    "id": 699,
    "name": "주식회사 메타비션",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/250652/9be903103cce4d508b184d93fb279cb7.jpeg",
    "summary": "상품 사진 한 장으로 스튜디오 촬영부터 상세페이지까지, AI가 90% 비용 절감으로 완성해드립니다.",
    "description": "> \"디자이너도, 스튜디오도, 모델도 필요 없습니다. 이미지 한 장이면 충분합니다.\" 메타비션은 **AI로 콘텐츠 제작의 모든 비용과 시간을 혁신**하는 스타트업입니다. 스마트폰으로 찍은 상품 사진 한 장을 올리면, 스튜디오급 제품컷·모델 착용 이미지·SNS 광고 소재·상세페이지까지 단 몇 분 안에 자동으로 완성됩니다. 미용실 원장님이라면, 고객 얼굴 사진 한 장으로 5초 만에 20가지 헤어스타일을 미리 보여줄 수 있습니다. **지금까지 이런 일에 돈을 쓰고 계셨나요?** - 스튜디오 대관비, 모델 섭외비, 디자인 외주비 - 상세페이지 하나 만드는 데 2~3주 메타비전의 AI 솔루션은 이 모든 과정을 **클릭 몇 번**으로 대체합니다. 제작 비용 **90% 절감**, 제작 기간 **1/10 단축** — 수치로 증명된 결과입니다. 설치도 필요 없습니다. 지금 바로 브라우저에서 시작할 수 있습니다. --- **대표 솔루션** 🛍️ **TRANSFER** — 이커머",
    "website": "http://metabition.com",
    "email": "manager@metabition.com",
    "contact": "010-3201-8631",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/699",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "TRANSFER – 비주얼 생성 AI 기반 이커머스 콘텐츠 자동화 SaaS 플랫폼"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "IR",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "가상고객/시뮬레이션",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "SNS/광고 문구",
      "이미지",
      "자동화"
    ],
    "techEvidence": "생성AI, 시뮬레이션, 이미지 생성, 이미지, 사진, 자동화",
    "priceText": [
      "100 / CREDIT_TOKEN / 49,000원"
    ],
    "minPrice": 49000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "무료 서비스의 플랜 혹은 유형 무료 플랜 (Free): 무료 서비스에 대한 설명 별도 설치 없이 회원가입 후 즉시 사용 가능하며, 기본 크레딧 제공으로 AI 이미지 생성 핵심 기능을 무료로 체험하실 수 있습니다."
    ],
    "recommendation": "IR/발표자료, SNS/광고 문구 결과물로 첫 고객 반응을 빠르게 확인하려는 TRANSFER – 비주얼 생성 AI 기반 이커머스 콘텐츠 자동화 SaaS 플랫폼 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 6,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1251,
        "name": "TRANSFER – 비주얼 생성 AI 기반 이커머스 콘텐츠 자동화 SaaS 플랫폼",
        "summary": "상품 사진 한 장으로 스튜디오 촬영부터 상세페이지까지, AI가 90% 비용 절감으로 완성해드립니다.",
        "website": "",
        "keywords": [
          "AI광고소재생",
          "AI모델착용이미지",
          "AI상품이미지생성",
          "SaaS플랫폼",
          "무재고셀러솔루션",
          "비주얼생성AI",
          "상세페이지자동제작",
          "스튜디오촬영대체",
          "이커머스콘텐츠자동화",
          "제작비용절감"
        ],
        "priceText": [
          "100 / CREDIT_TOKEN / 49,000원"
        ],
        "priceNumber": 49000,
        "pricingKind": "usage",
        "benefits": [
          "무료 서비스의 플랜 혹은 유형 무료 플랜 (Free): 무료 서비스에 대한 설명 별도 설치 없이 회원가입 후 즉시 사용 가능하며, 기본 크레딧 제공으로 AI 이미지 생성 핵심 기능을 무료로 체험하실 수 있습니다."
        ],
        "deliverables": [
          "IR/발표자료",
          "SNS/광고 문구",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "IR",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성AI, 시뮬레이션, 이미지 생성, 이미지, 사진, 자동화"
      }
    ]
  },
  {
    "id": 788,
    "name": "주식회사 탤런트시커",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185217/0b55b0bff629463c8ba581bc8b266d72.png",
    "summary": "AI 헤드헌터 - 예비창업자의 가장 중요한 첫 팀 빌딩을 돕습니다.",
    "description": "코파운더는 예비창업자의 첫 번째 팀입니다 좋은 코파운더는 단순히 부족한 역량을 채우는 사람이 아닙니다. 같은 방향을 보고, 어려운 순간을 함께 버티며, 회사와 함께 성장할 수 있는 사람입니다. 창업자가 집중해야 할 질문은 “어떻게 찾을까?”가 아닙니다 많은 예비창업자가 코파운더를 찾을 때 “어디서 찾지?”, “누구를 소개받지?”, “어떻게 연락하지?”를 먼저 고민합니다. 하지만 정말 중요한 질문은 이것입니다. 우리 회사에 어떤 코파운더가 필요한가? 그 사람과 함께 성장할 수 있는가? 탤런트시커는 코파운더 탐색 과정을 자동화합니다 저 역시 탤런트시커의 서비스 흐름에 따라 함께 성장할 코파운더를 찾았습니다. 필요한 역할을 정의하고, 후보자의 경험과 역량을 분석하고, 회사와의 적합도와 성장 가능성을 판단했습니다. 그리고 이 과정을 자동화했습니다. 이제 창업자는 판단에 집중하면 됩니다 코파운더를 어디서 어떻게 찾을지는 탤런트시커가 돕겠습니다. 창업자는 우리 회사에 필요한",
    "website": "https://talentseeker.io/ko/modoo/",
    "email": "ceo@talentseeker.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/788",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "탤런트시커"
    ],
    "majorTags": [
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "분석, 자동화",
    "priceText": [
      "매니저 (Manager) / 월 구독 / 150,000원"
    ],
    "minPrice": 150000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "데이터 분석/대시보드, 업무 자동화/API 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 8,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1372,
        "name": "탤런트시커",
        "summary": "AI 헤드헌터 - 예비창업자의 가장 중요한 첫 팀 빌딩을 돕습니다.",
        "website": "",
        "keywords": [
          "ai",
          "딥테크",
          "사람",
          "인력",
          "인사",
          "인재소싱",
          "자동화",
          "채용",
          "코파운더 매칭",
          "함께 성장할 사람"
        ],
        "priceText": [
          "매니저 (Manager) / 월 구독 / 150,000원"
        ],
        "priceNumber": 150000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 자동화"
      }
    ]
  },
  {
    "id": 679,
    "name": "주식회사 니어네트웍스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/209500/2de8233e8d684472b845260bd0da42d7.png",
    "summary": "영상자료 제작의 편의성을 높이기 위해 문서 형태의 파일(PPT‧PDF)을 자동 분석하여 대본·자막·내레이션·디지털 휴먼까지 한 번에 동영상 콘텐츠로 제작해 주는 솔루션으로, 발표‧교육‧홍보 영상 제작 등에 활용 가능함.",
    "description": "[아이디어를 실현 가능한 AI 기술로, 비즈니스 성장을 돕는 AI 엑셀러레이터] 창업 기업에 필요한 것은 화려한 기술이 아니라 '시장성 있는 솔루션'입니다. 니어네트웍스는 다년간의 R&D 수행 경험과 IT 소프트웨어 개발 전문성을 통해 예비 및 초기 창업자가 직면한 기술적 장벽을 제거합니다. 딥러닝 기반의 자동화 분류 시스템부터 공공 데이터 연계 플랫폼까지, 창업 기업의 비즈니스 모델에 최적화된 AI 기술을 매칭하여 지속 가능한 성장의 발판을 마련해 드립니다. 산업용 AI 솔루션 개발뿐만 아니라, 도입 기업이 기술을 내재화할 수 있도록 AI 평생교육 시스템 구축 등 토탈 케어 서비스를 지향합니다. 혁신성장유형 벤처기업 인증을 받은 검증된 파트너로서, 귀사의 비즈니스에 인공지능이라는 강력한 엔진을 달아드리겠습니다.",
    "website": "http://aaf.co.kr",
    "email": "ihags@naver.com",
    "contact": "070-4220-8520",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/679",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "링크칼 (LINK CAL)",
      "링크클래스 (LINK CLASS)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "발표자료",
      "영상",
      "자동화",
      "교육"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API",
      "음성/STT/TTS"
    ],
    "deliverables": [
      "IR/발표자료",
      "영상",
      "자동화"
    ],
    "techEvidence": "분석, 영상제작, 동영상, 자동화, STT, 음성",
    "priceText": [
      "월정액 / 월 구독 / 2,000,000원",
      "월정액 요금 / 월 구독 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 IR/발표자료, 영상 근거가 필요한 초기 창업팀",
    "followerCount": 9,
    "likeCount": 2,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1225,
        "name": "링크칼 (LINK CAL)",
        "summary": "영상자료 제작의 편의성을 높이기 위해 문서 형태의 파일(PPT‧PDF)을 자동 분석하여 대본·자막·내레이션·디지털 휴먼까지 한 번에 동영상 콘텐츠로 제작해 주는 솔루션으로, 발표‧교육‧홍보 영상 제작 등에 활용 가능함.",
        "website": "https://user.linkcal.co.kr",
        "keywords": [
          "AI교육",
          "AI영상제작",
          "동영상제작",
          "자동영상제작"
        ],
        "priceText": [
          "월정액 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "발표자료",
          "영상",
          "자동화",
          "교육"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 영상제작, 동영상, 자동화"
      },
      {
        "id": 1226,
        "name": "링크클래스 (LINK CLASS)",
        "summary": "링크클래스는 AI 음성인식 기반 실시간 번역 자막 통합 솔루션임. 자체 개발한 음성인식(STT) 기술을 활용하여 정확한 실시간 번역 자막을 제공하며, 사용자 환경에 맞춘 커스터마이징 기능을 통해 다양한 산업 및 업무 환경에 최적화된 서비스를 제공함. 이를 통해 글로벌 사용자들이 언어 장벽 없이 실시간으로 원활하게 의사소통할 수 있도록 지원함.",
        "website": "https://user.linkclass.co.kr",
        "keywords": [
          "강의보조",
          "실시간 통번역",
          "자막"
        ],
        "priceText": [
          "월정액 요금 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "자동화",
          "교육"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "STT, 음성, 자동화"
      }
    ]
  },
  {
    "id": 696,
    "name": "주식회사 리모",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/103711/80b2922fa5dd49d68272efde2105ec6f.png",
    "summary": "상상만 하세요. AI가 영상으로 만들어 드립니다.",
    "description": "**ABOUT REMO** 주식회사 리모는 AI 기술로 영상, 데이터, 문서를 분석하고 자동화하는 솔루션 기업입니다. 일반 카메라 기반 3D 자세·동작 분석 기술과 SaaS/API 개발 역량을 바탕으로, 기업이 쉽게 활용할 수 있는 실무형 AI 서비스를 제공합니다. **핵심 역량** 리모는 체형·보행·동작 분석 등 영상 AI 기술을 보유하고 있으며, 분석 결과를 리포트, 결과 페이지, 문서, 홍보 콘텐츠로 자동 생성하는 기술을 함께 제공합니다. 복잡한 구축 없이 웹 기반으로 사용할 수 있어 창업기업과 중소기업의 업무 효율화에 적합합니다. **제공 AI 솔루션** 리모는 이번 사업에서 총 3개의 AI 솔루션을 제공합니다. **REMO AI STUDIO** 제품 소개, SNS 숏폼, 행사·채용 홍보 등 다양한 영상을 빠르게 기획하고 제작하는 AI 영상 제작 솔루션입니다. **REMO Motion API with LLM** 사람의 움직임 영상 및 입력 데이터를 분석하고, LL",
    "website": "https://www.remo.re.kr/",
    "email": "info@remo.re.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/696",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "REMO AI STUDIO",
      "REMO Motion API with LLM",
      "REMO 문서 패키지"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "리포트",
      "영상",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "리포트",
      "영상",
      "자동화"
    ],
    "techEvidence": "LLM, 데이터 분석, 분석, 리포트, 영상제작, 숏폼, 자동화, API, 인프라",
    "priceText": [
      "2개월 / 월 구독 / 1,000,000원",
      "2개월 / CAPACITY_BASED / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "가입 이벤트: 가입시무료 50건 제공"
    ],
    "recommendation": "SNS/광고 문구, 리포트 결과물로 첫 고객 반응을 빠르게 확인하려는 REMO AI STUDIO 같은 서비스가 필요한 팀",
    "followerCount": 9,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1246,
        "name": "REMO AI STUDIO",
        "summary": "상상만 하세요. AI가 영상으로 만들어 드립니다.",
        "website": "https://remo-ai-studio.vercel.app/",
        "keywords": [
          "AI 홍보 영상",
          "AI영상",
          "딥테크",
          "마케팅",
          "멀티컷",
          "스토리보드",
          "영상기획",
          "영상제작"
        ],
        "priceText": [
          "2개월 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "리포트",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "리포트",
          "영상",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 데이터 분석, 분석, 리포트, 영상제작, 숏폼, 자동화, API"
      },
      {
        "id": 1247,
        "name": "REMO Motion API with LLM",
        "summary": "움직임 영상을 넣기만 하세요. AI가 분석부터 결과까지 자동으로 만들어드립니다.",
        "website": "https://remo-api.remo.re.kr/",
        "keywords": [
          "ai 분석",
          "골프AI",
          "골프스윙분석",
          "딥테크",
          "모션AI분석",
          "보행분석",
          "신체사이즈분석",
          "신체치수분석",
          "자유모션분석",
          "체형분석"
        ],
        "priceText": [
          "2개월 / CAPACITY_BASED / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "가입 이벤트: 가입시무료 50건 제공"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "리포트",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "리포트",
          "영상",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 데이터 분석, 분석, 리포트, 숏폼, 자동화, API, 인프라"
      },
      {
        "id": 1248,
        "name": "REMO 문서 패키지",
        "summary": "창업자의 반복적인 문서 업무를 AI로 빠르게 자동화하세요",
        "website": "https://remo-ai-doc.remo.re.kr/login",
        "keywords": [
          "AI 자동생성",
          "견적서",
          "견적서 자동생성",
          "계약서",
          "계약서 AI 검토",
          "계약서 변호사 빠른 검토",
          "딥테크",
          "제안서 초안 작성"
        ],
        "priceText": [
          "2개월 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "리포트",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "리포트",
          "영상",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, 데이터 분석, 분석, 리포트, 숏폼, 자동화, API"
      }
    ]
  },
  {
    "id": 591,
    "name": "거대한에이아이실험실 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191196/fd461320699347dbadd8699d65c56936.png",
    "summary": "AI 동영상 제작 플랫폼 : 텍스트만 입력하면 시나리오부터 이미지·영상·음성까지 자동 생성하는 AI 영상 제작 플랫폼",
    "description": "**AI 도입 실패를 줄이는 검증·운영 통합 플랫폼을 서비스하는 기술 기반 기업** 🧭 **Compass** : 자사 데이터로 AI 모델을 실행 점검하고, 다양한 모델의 비교 평가를 통해 PoC의 시간, 노력, 비용을 제거하고, 최적을 모델을 빠르게 발견 🏢 **HugeSense** : 개인정보와 보안 문제 없이, 사내 환경에서 AI 기술을 활용하는 사내 AI 시스템 🎦 **Markaron** : 텍스트만 입력하면 시나리오부터 이미지·영상·음성까지 자동 생성하는 AI 영상 제작 플랫폼",
    "website": "https://hugeailab.com/",
    "email": "yhchoi@hugeailab.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/591",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Markaron"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성",
      "음성/STT/TTS"
    ],
    "deliverables": [
      "영상",
      "이미지"
    ],
    "techEvidence": "LLM, 생성형, AI 모델, 이미지, 동영상, 음성",
    "priceText": [
      "2,000 포인트 / CREDIT_TOKEN / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 영상, 이미지 근거가 필요한 초기 창업팀",
    "followerCount": 10,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1101,
        "name": "Markaron",
        "summary": "AI 동영상 제작 플랫폼 : 텍스트만 입력하면 시나리오부터 이미지·영상·음성까지 자동 생성하는 AI 영상 제작 플랫폼",
        "website": "https://www.markaron.co.kr/",
        "keywords": [
          "AI",
          "LLM",
          "동영상",
          "배경음악",
          "생성형",
          "음성",
          "이미지",
          "합성"
        ],
        "priceText": [
          "2,000 포인트 / CREDIT_TOKEN / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "음성/STT/TTS"
        ],
        "techEvidence": "LLM, 생성형, AI 모델, 이미지, 동영상, 음성"
      }
    ]
  },
  {
    "id": 644,
    "name": "애드로이트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/192230/b0615eff19be42f3a809e6a8fbadc929.png",
    "summary": "초기 창업자를 위한 아이템 고도화 및 시장 적합성 보완을 위한 : ‘창업 Copilot’은 아이디어 검증부터 린 캔버스 완성까지, 창업 초기 단계의 핵심적으로 실행해야 하는 단계들을 이끌어주는 극초기 창업자 특화형 범용 AI SaaS입니다.",
    "description": "**애드로이트는 로봇·제조 자동화 기술과 AI 솔루션을 기반으로 스타트업과 중소기업의 성장을 돕는 실행형 기술 파트너입니다.** 지능형 로봇, AI 비전 검사, 딥러닝 분류, 2D·3D 시뮬레이션, AMR, 재활용 분류 로봇 등 제조 현장에 필요한 자동화 기술을 기획부터 구축·운영까지 연결합니다. 단순한 장비 공급이 아니라, 기업의 생산성 향상과 기술 사업화를 함께 설계하는 것을 목표로 합니다. 또한 AI 창업 실행 플랫폼을 통해 아이디어 검증, 사업계획 수립, 시장분석, 마케팅 전략, 정부지원사업 준비 등 스타트업이 실제로 성장하는 데 필요한 과정을 AI 기반으로 지원합니다. **애드로이트는 로봇·제조·AI 기술을 이해하는 기업이자, 스타트업이 아이디어를 실제 사업으로 발전시킬 수 있도록 돕는 실무 중심의 파트너입니다.**",
    "website": "https://adroit.co.kr/",
    "email": "twtkor@gmail.com",
    "contact": "070-8810-5612",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/644",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "창업 Copilot"
    ],
    "majorTags": [
      "사업계획서/IR",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "시뮬레이션, 경쟁사, 시장분석, 분석, 자동화",
    "priceText": [
      "100,000 (450 크레딧) / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, 자동화 근거가 필요한 초기 창업팀",
    "followerCount": 10,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1173,
        "name": "창업 Copilot",
        "summary": "초기 창업자를 위한 아이템 고도화 및 시장 적합성 보완을 위한 : ‘창업 Copilot’은 아이디어 검증부터 린 캔버스 완성까지, 창업 초기 단계의 핵심적으로 실행해야 하는 단계들을 이끌어주는 극초기 창업자 특화형 범용 AI SaaS입니다.",
        "website": "",
        "keywords": [
          "AI 창업 코칭",
          "경쟁사 분석",
          "고객 문제 분석",
          "비즈니스 모델 설계",
          "사업계획서 작성",
          "시장 적합성 검증",
          "실행 로드맵 수립",
          "정부지원사업 준비",
          "창업 아이템 고도화",
          "초기 창업자 지원"
        ],
        "priceText": [
          "100,000 (450 크레딧) / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "시뮬레이션, 경쟁사, 시장분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 722,
    "name": "주식회사 세미콜론즈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189752/46da972e3e084b7098e284298a3ccee6.png",
    "summary": "AI 랜딩페이지 자동 생성 솔루션 - 업종 정보를 입력하고 AI와 대화하세요. 디자인부터 배포까지, 5분이면 충분합니다.",
    "description": "□ 기업 개요 - 세미콜론즈는 10년차 기술 기업으로 전체 산업군을 대상으로 웹 솔루션, 어플리케이션 등의 플랫폼, SI 및 통합 프로그램, AR/VR/메타버스 컨텐츠,데이터 및 AI 모델링 등 넓은 스펙트럼의 소프트웨어를 위탁 개발하는 IT전문 기업입니다. - 주요 고객층은 정보화 및 스마트화를 희망하는 기업이 대상이며, 컨설팅과 사후 관리를 포함하여 개발 서비스를 제공합니다. - 현재는 Unity 엔진을 기반으로 하는 AR, VR, 메타버스 플랫폼과 AI 학습 적용을 통한 융합 플랫폼의 개발 및 고도화를 신사업 영역으로 연구개발 도약 중입니다. □ 제공 서비스 [웹솔루션 및 어플리케이션이 포함된 플랫폼 구축] - 쇼핑몰, 홈페이지, 오픈마켓, 중개 목적 등 다양한 분야에 대하여 고객사의 BM에 최적화된 솔루션 또는 고객이 필요로 하는 웹 솔루션 및 어플리케이션을 개발하여 공급합니다. [SI 및 통합 프로그램의 개발] - 고객사가 필요로 하는 ERP, MES, 기타",
    "website": "https://www.semicolons.co.kr/",
    "email": "semicolons.inc@gmail.com",
    "contact": "070-4108-1119",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/722",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "IVO",
      "QAR24"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅",
      "영상/이미지"
    ],
    "detailTags": [
      "랜딩페이지",
      "홈페이지",
      "자동화",
      "컨설팅",
      "광고",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "가상고객/시뮬레이션",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "랜딩페이지",
      "홈페이지",
      "자동화",
      "컨설팅",
      "SNS/광고 문구",
      "이미지"
    ],
    "techEvidence": "AI 모델, 시뮬레이션, 랜딩페이지, 랜딩, 홈페이지, 웹페이지, 분석, 디자인 자동, 자동화, 이미지 생성",
    "priceText": [
      "PRO 요금제 / 월 구독 / 39,900원",
      "PRO 요금제 / 유/무료 혼합 / 99,000원"
    ],
    "minPrice": 39900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE: AR TAG 1개 활성화 / 클라우드 스토리지 20MB / 월간 스캔 100회 / 3D모델 1개 / 광고 카드 자동 삽입"
    ],
    "recommendation": "랜딩페이지, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 IVO 같은 서비스가 필요한 팀",
    "followerCount": 10,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1280,
        "name": "IVO",
        "summary": "AI 랜딩페이지 자동 생성 솔루션 - 업종 정보를 입력하고 AI와 대화하세요. 디자인부터 배포까지, 5분이면 충분합니다.",
        "website": "https://www.ivo.kr",
        "keywords": [
          "AI 디자인 자동화",
          "AI 랜딩페이지 제작",
          "마케팅 페이지 제작",
          "빠른 홈페이지 구축",
          "자동 웹페이지 생성"
        ],
        "priceText": [
          "PRO 요금제 / 월 구독 / 39,900원"
        ],
        "priceNumber": 39900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "랜딩페이지",
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "랜딩페이지",
          "홈페이지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 모델, 시뮬레이션, 랜딩페이지, 랜딩, 홈페이지, 웹페이지, 분석, 디자인 자동, 자동화"
      },
      {
        "id": 1281,
        "name": "QAR24",
        "summary": "QR기반 AR콘텐츠 제작 및 AI이미지 생성/관리 솔루션 - AI를 활용한 3D모델 생성과 앱 설치 없이 1분만에 완성하는 증강현실(AR)",
        "website": "https://qar24.com/about",
        "keywords": [
          "AI 3D모델 생성",
          "AR명함 솔루션",
          "AR콘텐츠 플랫폼",
          "QR기반 AR서비스",
          "디지털 전시 콘텐츠",
          "스마트 홍보 콘텐츠",
          "제품 AR시각화",
          "증강현실 콘텐츠 제작"
        ],
        "priceText": [
          "PRO 요금제 / 유/무료 혼합 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: AR TAG 1개 활성화 / 클라우드 스토리지 20MB / 월간 스캔 100회 / 3D모델 1개 / 광고 카드 자동 삽입"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "광고",
          "홈페이지",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 모델, 시뮬레이션, 홈페이지, 분석, 이미지 생성, 이미지, 자동화, 클라우드"
      }
    ]
  },
  {
    "id": 732,
    "name": "주식회사 쓰리브이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/194626/5f9b91f3fc4c44f099263195d2a98e23.png",
    "summary": "코드를 완성한 그 순간, 보안과 인프라까지 갖춘 서비스로 세상에 공개되는 1인 창업자·개발자를 위한 AI 기반 경량 프라이빗 클라우드",
    "description": "**소개 개요** 주식회사 쓰리브이아이(3Vi Inc.)는 보안(Security), 교육(Education), 개발(Development)의 세 영역을 유기적으로 연결하는 정보보호 솔루션 전문 기업입니다. AI 자율형 웹 보안, 클라우드 기반 보안 실습 교육, 그리고 정보보안 컨설팅을 하나의 흐름으로 통합 제공함으로써, 개인 개발자부터 스타트업과 중소기업, 나아가 공공기관과 엔터프라이즈에 이르기까지 누구나 보안을 쉽고 합리적으로 도입할 수 있는 환경을 만들어가고 있습니다. **핵심 사업** **AWEN**은 AI 기술을 기반으로 한 자율형 웹 인프라 보안 솔루션입니다. 트래픽을 사전에 예측하여 자원을 자동으로 확장하고, WAF를 통해 실시간으로 위협을 차단하며, 필요할 때만 서버를 기동하고 종료하는 효율적인 운영 방식을 통해 보안성과 비용 효율성을 동시에 실현합니다. **SETEP**은 클라우드 기반의 IT·보안 실습 및 역량 평가 플랫폼으로, 별도의 설치나 장비 구축 없이 즉",
    "website": "https://awen.3vi.co.kr/#/welcome",
    "email": "support@3vi.co.kr",
    "contact": "010-9522-1045",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/732",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AI 기반 경량 프라이빗 클라우드 인프라 서비스"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "피드백",
      "노코드",
      "리포트",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "노코드/앱빌더",
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "노코드, 분석, 보고서, 서버, 인프라, 클라우드",
    "priceText": [
      "베이직 요금제 / 월 구독 / 140,000원"
    ],
    "minPrice": 140000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "노코드/앱빌더, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 기반 경량 프라이빗 클라우드 인프라 서비스 같은 서비스가 필요한 팀",
    "followerCount": 9,
    "likeCount": 2,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1294,
        "name": "AI 기반 경량 프라이빗 클라우드 인프라 서비스",
        "summary": "코드를 완성한 그 순간, 보안과 인프라까지 갖춘 서비스로 세상에 공개되는 1인 창업자·개발자를 위한 AI 기반 경량 프라이빗 클라우드",
        "website": "https://www.3vi.co.kr/awen",
        "keywords": [
          "1인 개발자 인프라",
          "AI 자율형 클라우드",
          "AI 코딩 배포",
          "ISMS 인증 연계",
          "노코드 인프라",
          "스타트업 클라우드",
          "웹 방화벽 (WAF)",
          "자동 보안",
          "즉시 런칭",
          "프라이빗 클라우드"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 140,000원"
        ],
        "priceNumber": 140000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "피드백",
          "노코드",
          "리포트",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "노코드/앱빌더",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "노코드, 분석, 보고서, 서버, 인프라, 클라우드"
      }
    ]
  },
  {
    "id": 575,
    "name": "(주)셀버스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/192004/4456cafa8f654e908ccfa8f91be67f4d.png",
    "summary": "AI 통해서 몇분만에 메뉴판, 상품 이미지 생성할 수 있어요",
    "description": "㈜셀버스는 2016년 11월17일 설립되어 스마트오더 앱 서비스 사업화를 시작으로 키오스크, 테이블오더 등 스마트 상점 서비스 사업으로 확장 후 현재는 생성형 AI 에이전트 서비스로 사업화 진행 중입니다 그동안 시장의 문제 해결 위해 온-오프라인의 다양한 시행착오를 겪고 해결하며 성장한 기업입니다.",
    "website": "",
    "email": "support@selvers.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/575",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AI 콘텐츠 생성형 에이전트 (메뉴판, 홍보물, 상품이미지 등)",
      "VR 공간 콘텐츠 제작 서비스"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지",
      "랜딩페이지/홈페이지"
    ],
    "detailTags": [
      "이미지",
      "홈페이지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "이미지 생성"
    ],
    "deliverables": [
      "이미지",
      "홈페이지"
    ],
    "techEvidence": "생성형, AI 에이전트, 에이전트, 이미지 생성, 이미지",
    "priceText": [
      "유/무료 혼합 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "이미지, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 AI 콘텐츠 생성형 에이전트 (메뉴판, 홍보물, 상품이미지 등) 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 4,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1077,
        "name": "AI 콘텐츠 생성형 에이전트 (메뉴판, 홍보물, 상품이미지 등)",
        "summary": "AI 통해서 몇분만에 메뉴판, 상품 이미지 생성할 수 있어요",
        "website": "",
        "keywords": [
          "AI",
          "마케팅",
          "메뉴판",
          "상품이미지",
          "생성형",
          "에이아이",
          "에이전트",
          "콘텐츠",
          "키오스크",
          "테이블오더"
        ],
        "priceText": [
          "유/무료 혼합 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지"
        ],
        "detailTags": [
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "이미지 생성"
        ],
        "techEvidence": "생성형, AI 에이전트, 에이전트, 이미지 생성, 이미지"
      },
      {
        "id": 1078,
        "name": "VR 공간 콘텐츠 제작 서비스",
        "summary": "큰 비용없이 초보자도 쉽고 빠르게 VR 공간 콘텐츠 제작 (웹사이트, 온라인 팝업스토어, 사이니지, HMD 활용)",
        "website": "",
        "keywords": [
          "HMD",
          "vr",
          "xr",
          "마케팅",
          "브이알",
          "사이니지",
          "웹사이트",
          "콘텐츠",
          "팝업스토어"
        ],
        "priceText": [
          "유/무료 혼합 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발"
        ],
        "detailTags": [
          "홈페이지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트"
        ],
        "techEvidence": "생성형, AI 에이전트, 에이전트"
      }
    ]
  },
  {
    "id": 698,
    "name": "주식회사 메디노아",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/183696/2a0bb995a77345549ea8e2b7a80ca88b.png",
    "summary": "인공지능 학습용 데이터셋을 자동 라벨링 및 보정을 통해 쉽고 정확하게 생성할 수 있고, 추론모델을 적용해 쉽게 의료 영상을 분절화할 수 있는 변환 솔루션",
    "description": "메디노아는 인공지능과 확장현실의 힘으로 의료 환경의 변화를 꿈꾸고 이끌어갑니다. 인공지능 의료영상 변환을 이용해 단순히 3차원 시각화가 아닌 혈관을 찌르면 피가 나고, 척수강을 천자하면 뇌척수액이 나오고, x-ray를 찍으면 영상이 생성되는 등의 실제와 같은 디지털 트윈을 구현합니다. 이를 이용해 시술 시뮬레이션 및 시술 중 가이드, 확장현실 협진 및 원거리 진료 등 의료 혁신과 발전을 수행하고 있습니다.",
    "website": "https://medinnoa.com/kor/products/MedinnoAIBridge",
    "email": "jaykoh@korea.ac.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/698",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AI 기반 의료영상 데이터 분석 및 3D 모델 생성 플랫폼"
    ],
    "majorTags": [
      "MVP/개발",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "영상"
    ],
    "techTags": [
      "가상고객/시뮬레이션",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "영상"
    ],
    "techEvidence": "시뮬레이션, 데이터 분석, 분석",
    "priceText": [
      "추론모델 개발 솔루션 / 유/무료 혼합 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "데모버전: 문의 (info@medinnoa.com)"
    ],
    "recommendation": "가상고객/시뮬레이션, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 기반 의료영상 데이터 분석 및 3D 모델 생성 플랫폼 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1250,
        "name": "AI 기반 의료영상 데이터 분석 및 3D 모델 생성 플랫폼",
        "summary": "인공지능 학습용 데이터셋을 자동 라벨링 및 보정을 통해 쉽고 정확하게 생성할 수 있고, 추론모델을 적용해 쉽게 의료 영상을 분절화할 수 있는 변환 솔루션",
        "website": "https://medinnoa.com/kor/products/MedinnoAIBridge",
        "keywords": [
          "CT",
          "DICOM",
          "MRI",
          "nnUnet",
          "데이터셋",
          "딥테크",
          "라벨링",
          "의료 영상처리",
          "인공지능",
          "추론 모델"
        ],
        "priceText": [
          "추론모델 개발 솔루션 / 유/무료 혼합 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [
          "데모버전: 문의 (info@medinnoa.com)"
        ],
        "deliverables": [
          "영상"
        ],
        "majorTags": [
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "영상"
        ],
        "techTags": [
          "가상고객/시뮬레이션",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "시뮬레이션, 데이터 분석, 분석"
      }
    ]
  },
  {
    "id": 670,
    "name": "주식회사 나랑가",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/210677/2ac035e47432435480c1321195e4a7ef.png",
    "summary": "상위 노출에 최적화된 블로그 글을 AI로 자동 작성합니다",
    "description": "**Bloglo는 블로그 기반 콘텐츠 마케팅을 쉽고 지속 가능하게 만드는 서비스입니다.** 많은 개인과 기업이 블로그를 통해 고객과 소통하고 브랜드를 알리고자 하지만, 실제 운영 과정에서는 **글감 부족, 작성 시간 부담, 꾸준한 발행의 어려움, 콘텐츠 품질 관리 문제**를 겪고 있습니다. Bloglo는 이러한 문제를 해결하기 위해 콘텐츠 기획부터 작성, 관리까지 이어지는 블로그 운영 과정을 간편하게 지원합니다. Bloglo의 핵심 가치는 **콘텐츠 작성의 진입장벽을 낮추고, 사용자가 자신의 브랜드와 서비스에 집중할 수 있도록 돕는 것**입니다. 사용자는 복잡한 글쓰기 과정에 많은 시간을 쓰지 않아도 서비스 소개, 정보성 콘텐츠, 홍보 글, 리뷰형 콘텐츠 등 다양한 목적의 블로그 글을 보다 쉽게 준비할 수 있습니다. 특히 소상공인, 스타트업, 1인 창업자, 마케팅 담당자처럼 별도의 콘텐츠 전담 인력이 부족한 사용자에게 적합합니다. Bloglo는 반복적인 콘텐츠 작성 업무를 효율",
    "website": "https://www.bloglo.pro",
    "email": "ceo@naranga.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/670",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AI기반 자동 블로그 콘텐츠 생성 및 마케팅 플랫폼"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "블로그",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "자동화"
    ],
    "techEvidence": "자동화",
    "priceText": [
      "프로 요금제 / 월 구독 / 10,600원"
    ],
    "minPrice": 10600,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: 무료 체험 플랜입니다"
    ],
    "recommendation": "블로그, 자동화를 빠르게 만들고 고객 모집을 시작하려는 AI기반 자동 블로그 콘텐츠 생성 및 마케팅 플랫폼 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1207,
        "name": "AI기반 자동 블로그 콘텐츠 생성 및 마케팅 플랫폼",
        "summary": "상위 노출에 최적화된 블로그 글을 AI로 자동 작성합니다",
        "website": "",
        "keywords": [
          "AI 마케팅 툴",
          "블로그 상위노출",
          "블로그 운영 자동화",
          "자동 포스팅"
        ],
        "priceText": [
          "프로 요금제 / 월 구독 / 10,600원"
        ],
        "priceNumber": 10600,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: 무료 체험 플랜입니다"
        ],
        "deliverables": [
          "블로그",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "블로그",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      }
    ]
  },
  {
    "id": 602,
    "name": "디써클",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/209476/eeb8207cb52e4698be2473048043a5f3.png",
    "summary": "전국의 법인 기업의 현재 사업 아이템과 경쟁력에 대해 조사/분석해주는 AI Agent 기반 솔루션",
    "description": "초기 스타트업이 모든 아이템을 스스로 발굴하고 기술을 완벽하게 구현하기란 결코 쉽지 않습니다. **디써클**은 예비·초기 창업가가 겪는 리소스의 한계를 극복하고, 사업 고도화의 지름길을 제시하는 **R&D 및 사업화 연계 전문 솔루션**입니다. **[주요 서비스 안내]** **1. R&D 및 협업 파트너 매칭** 창업가의 아이디어를 현실로 만들어줄 최적의 기술 파트너와 연구진을 연결하여 기술 개발의 진입장벽을 낮춥니다. **2. 기업·연구실 검색 솔루션** 사업 아이템 발굴과 심층 분석을 위해 전국의 기업 및 연구실 데이터를 스마트하게 검색하고 최신 기술 트렌드를 분석합니다. **3. 정부과제 수주 및 수행 지원** 성장의 마중물이 되는 정부 지원사업(R&D)의 선정부터 효율적인 수행까지, 전 과정을 전략적으로 연계해 드립니다.",
    "website": "https://www.rndcircle.io/",
    "email": "info@rndcircle.io",
    "contact": "050-7131-2641",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/602",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AI 기반 기업 서칭 솔루션"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "시장조사"
    ],
    "techTags": [
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "리서치, 경쟁사, 검색, 분석",
    "priceText": [
      "100 크레딧 / 유/무료 혼합 / 25,000원"
    ],
    "minPrice": 25000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "무료 체험: 기업검색 서비스 무료 체험"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 시장/수요조사 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 7,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1113,
        "name": "AI 기반 기업 서칭 솔루션",
        "summary": "전국의 법인 기업의 현재 사업 아이템과 경쟁력에 대해 조사/분석해주는 AI Agent 기반 솔루션",
        "website": "https://www.rndcircle.io/event/corp-searching-solution",
        "keywords": [
          "경쟁사 분석",
          "기업 검색",
          "리서치",
          "사업아이템 발굴",
          "시장 분석"
        ],
        "priceText": [
          "100 크레딧 / 유/무료 혼합 / 25,000원"
        ],
        "priceNumber": 25000,
        "pricingKind": "usage",
        "benefits": [
          "무료 체험: 기업검색 서비스 무료 체험"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "시장조사"
        ],
        "techTags": [
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "리서치, 경쟁사, 검색, 분석"
      }
    ]
  },
  {
    "id": 785,
    "name": "주식회사 큐투컷",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/198955/a810864a02854ea090c3c13a33c61cff.png",
    "summary": "SNS 바이럴 콘텐츠 에이전트 AI - 제작부터 AEO·광고 운영까지, AI와 데이터로 움직이는 마케팅 에이전시",
    "description": "숏폼 제작부터 AEO·광고 운영까지, AI와 데이터로 움직이는 마케팅 에이전시, 큐투컷(Q2Cut) 감이 아닌 데이터로 기획하고, AI 자동화로 비용을 낮춥니다. 스몰브랜드도 대형 에이전시급 마케팅을 합리적으로 실행할 수 있습니다.",
    "website": "https://q2cut.com/brochure",
    "email": "hana.kim@q2cut.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/785",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "큐투컷"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "랜딩페이지",
      "브랜딩",
      "영상",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "영상",
      "자동화"
    ],
    "techEvidence": "에이전트, 랜딩, 분석, 숏폼, 자동화",
    "priceText": [
      "마케팅 서비스 범위에 따라 책정 / 유/무료 혼합 / 990,000원"
    ],
    "minPrice": 990000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "숏폼기획실: 바이럴 숏폼 랭킹, 바이럴 영상 구조 분석, 바이럴 유사 기획"
    ],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 큐투컷 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1369,
        "name": "큐투컷",
        "summary": "SNS 바이럴 콘텐츠 에이전트 AI - 제작부터 AEO·광고 운영까지, AI와 데이터로 움직이는 마케팅 에이전시",
        "website": "https://q2cut.com/brochure",
        "keywords": [
          "AEO",
          "CRM",
          "GEO",
          "SNS",
          "광고",
          "마케팅",
          "브랜딩",
          "숏폼",
          "퍼포먼스마케팅"
        ],
        "priceText": [
          "마케팅 서비스 범위에 따라 책정 / 유/무료 혼합 / 990,000원"
        ],
        "priceNumber": 990000,
        "pricingKind": "fixed",
        "benefits": [
          "숏폼기획실: 바이럴 숏폼 랭킹, 바이럴 영상 구조 분석, 바이럴 유사 기획"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "브랜딩",
          "영상",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 랜딩, 분석, 숏폼, 자동화"
      }
    ]
  },
  {
    "id": 607,
    "name": "라임프렌즈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186723/ec965d7fb6c04055a0e3b0d3a5a7deb5.webp",
    "summary": "두다웍스는 고객관리, 직원관리, 출퇴근, 계약서, 업무 요청까지 대표님이 직접 챙기던 일을 한곳에 모아 정리해주는 중소기업 맞춤 AI 오피스 매니저입니다.",
    "description": "세상의 기술이 우리 모두의 것이 되도록. We believe that technology is for everyone. 라임프렌즈는 창업기업과 중소기업이 복잡한 업무 운영에서 벗어나, 더 중요한 사업 성장과 고객 확보에 집중할 수 있도록 돕는 AI·DX 솔루션 파트너입니다. 모두의 창업 공식 AI 솔루션으로 등록된 두다 웍스(DODA Works)와 두다 웹스(DODA Webs)는 기업 운영에 필요한 고객 관리, 업무 데이터 관리, 홈페이지 운영, 마케팅 자동화, AI 기반 업무 효율화를 지원하는 실전형 솔루션입니다. 창업 초기 기업은 고객 정보, 상담 이력, 문서, 마케팅 콘텐츠, 홈페이지 관리, 지원사업 준비 등 수많은 업무를 대표님이 직접 처리해야 하는 경우가 많습니다. 라임프렌즈는 이러한 반복적이고 복잡한 업무를 AI와 데이터 기반 시스템으로 구조화하여, 기업이 더 빠르고 정확하게 일할 수 있는 환경을 만들어드립니다. 라임프렌즈는 기업 맞춤형 AI 에이전트 개발 경험을",
    "website": "",
    "email": "info@limefriends.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/607",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "DODA.Works",
      "DODA.Webs"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트",
      "디자인/브랜딩"
    ],
    "detailTags": [
      "피드백",
      "홈페이지",
      "자동화",
      "SEO",
      "SNS 문구",
      "랜딩페이지",
      "브랜딩"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "랜딩페이지 빌더",
      "업무 자동화/API"
    ],
    "deliverables": [
      "홈페이지",
      "리포트",
      "자동화",
      "SNS/광고 문구",
      "랜딩페이지"
    ],
    "techEvidence": "GPT, AI에이전트, AI 에이전트, 에이전트, 홈페이지, 자동화, 랜딩페이지, 랜딩",
    "priceText": [
      "기업 올인원 요금제 / 월 구독 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "초기 업무 진단 및 도입 상담 무료 제공: 도입 전 기업의 업무 현황, 고객관리 방식, 반복 업무, 데이터 관리 수준을 진단하고 DODA.Works 적용 방향을 무료로 상담해드립니다.",
      "초기 홈페이지 진단 및 웹 마케팅 상담 무료 제공: 현재 홈페이지 또는 준비 중인 서비스의 웹사이트 구조, 고객 유입 경로, 문의 전환 방식, SEO 개선 방향을 무료로 진단하고 DODA.Webs 적용 방향을 안내해드립니다."
    ],
    "recommendation": "홈페이지, 리포트 결과물로 첫 고객 반응을 빠르게 확인하려는 DODA.Works 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1118,
        "name": "DODA.Works",
        "summary": "두다웍스는 고객관리, 직원관리, 출퇴근, 계약서, 업무 요청까지 대표님이 직접 챙기던 일을 한곳에 모아 정리해주는 중소기업 맞춤 AI 오피스 매니저입니다.",
        "website": "",
        "keywords": [
          "AI업무자동화",
          "AI에이전트",
          "GPT",
          "고객관리",
          "그룹웨어",
          "뉴스레터",
          "마케팅자동화",
          "문서관리",
          "직원관리",
          "출퇴근관리"
        ],
        "priceText": [
          "기업 올인원 요금제 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "초기 업무 진단 및 도입 상담 무료 제공: 도입 전 기업의 업무 현황, 고객관리 방식, 반복 업무, 데이터 관리 수준을 진단하고 DODA.Works 적용 방향을 무료로 상담해드립니다."
        ],
        "deliverables": [
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백",
          "홈페이지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "랜딩페이지 빌더",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, AI에이전트, AI 에이전트, 에이전트, 홈페이지, 자동화"
      },
      {
        "id": 1119,
        "name": "DODA.Webs",
        "summary": "창업기업과 중소기업의 홈페이지, 랜딩페이지, 콘텐츠, 문의접수, SEO 마케팅을 AI 기반으로 구축·운영하는 웹 솔루션입니다.",
        "website": "",
        "keywords": [
          "AI에이전트",
          "GEO",
          "SEO",
          "고객관리",
          "뉴스레터",
          "랜딩페이지",
          "브랜드톡",
          "카카오톡문자",
          "프로모션",
          "홈페이지"
        ],
        "priceText": [
          "기업 올인원 요금제 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "초기 홈페이지 진단 및 웹 마케팅 상담 무료 제공: 현재 홈페이지 또는 준비 중인 서비스의 웹사이트 구조, 고객 유입 경로, 문의 전환 방식, SEO 개선 방향을 무료로 진단하고 DODA.Webs 적용 방향을 안내해드립니다."
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "피드백",
          "랜딩페이지",
          "홈페이지",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "랜딩페이지 빌더",
          "업무 자동화/API"
        ],
        "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 랜딩페이지, 랜딩, 홈페이지, 자동화"
      }
    ]
  },
  {
    "id": 652,
    "name": "올더스트릿(주)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185623/147b608b51fb4e5fb3d65dd7b62f64a8.jpeg",
    "summary": "제미나이, 챗지피티 이용자에게 여행상품을 콘텐츠 형식으로 노출시킵니다.",
    "description": "AllTheStreet은 (SNS) 콘텐츠 + (장소) 정보 + (이용자) 데이터를 위치기반 서비스로 구성하여 가치를 창출합니다. • SNS, 동영상 시대, 콘텐츠 기반 K-관광 서비스 • 이용자의 공유 콘텐츠와 장소 정보를 AI로 연결하여 위치기반 서비스 제공 • 유튜브에 공유된 동영상을 위치기반으로 맵핑하는 기술 및 맵핑엔진 보유 • 관련 특허 10개 (등록5 / 출원5) 보유 서비스 예시) AI로 연결한 K-Road 서비스 https://korea.allthestreet.com 여수시 SaaS 서비스 https://www.yeosu.go.kr/tour/leisure/experience/youtube_tour",
    "website": "",
    "email": "eddie@allthestreet.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/652",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "여행상품 UCP 변환 자동화",
      "SNS, 유튜브 기반 장소 AI 맵핑 콘텐츠",
      "AI 로드뷰 동영상 맵핑"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "영상",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "자동화"
    ],
    "techEvidence": "Gemini, 동영상, 자동화",
    "priceText": [
      "월 구독 / 1,000,000원",
      "월 구독 / 1,200,000원",
      "월 구독 / 800,000원"
    ],
    "minPrice": 800000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 영상 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 여행상품 UCP 변환 자동화 같은 서비스가 필요한 팀",
    "followerCount": 8,
    "likeCount": 2,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1182,
        "name": "여행상품 UCP 변환 자동화",
        "summary": "제미나이, 챗지피티 이용자에게 여행상품을 콘텐츠 형식으로 노출시킵니다.",
        "website": "",
        "keywords": [
          "Gemini",
          "GEO",
          "여행",
          "콘텐츠"
        ],
        "priceText": [
          "월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "영상",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "Gemini, 동영상, 자동화"
      },
      {
        "id": 1183,
        "name": "SNS, 유튜브 기반 장소 AI 맵핑 콘텐츠",
        "summary": "SNS에서 본 그 장소를 유튜브 동영상과 장소 정보를 하나의 콘텐츠로 연결하여 제공",
        "website": "",
        "keywords": [
          "맵핑",
          "여행",
          "위치기반",
          "유튜브",
          "콘텐츠"
        ],
        "priceText": [
          "월 구독 / 1,200,000원"
        ],
        "priceNumber": 1200000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "영상"
        ],
        "techTags": [
          "영상 생성"
        ],
        "techEvidence": "동영상"
      },
      {
        "id": 1184,
        "name": "AI 로드뷰 동영상 맵핑",
        "summary": "보행자가 길을 걷는 로드뷰 동영상의 시청화면이 시간 흐름에 따라 지도에 위치가 표시됩니다.",
        "website": "",
        "keywords": [
          "로드뷰",
          "맵핑",
          "여행",
          "위치기반",
          "유튜브"
        ],
        "priceText": [
          "월 구독 / 800,000원"
        ],
        "priceNumber": 800000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "영상"
        ],
        "techTags": [
          "영상 생성"
        ],
        "techEvidence": "동영상"
      }
    ]
  },
  {
    "id": 803,
    "name": "주식회사 페이스웹(FACEWEB)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186692/4904a5696460429e89ab5617826d222a.jpeg",
    "summary": "AI 실시간 통번역 기반 글로벌 고객 상담·운영 자동화 솔루션 - 외국어 직원 없이 해외 고객 응대부터 예약·결제·매출 관리까지 가능한 AI 글로벌 비즈니스 솔루션",
    "description": "Beyond AI. Powered by HI(Human Intelligence) 페이스웹은 글로벌 비즈니스를 더 쉽고 빠르게 만드는 AI·클라우드 기업입니다. 슬로건 ‘Beyond AI. Powered by HI(Human Intelligence)’는 기술이 사람을 대체하는 것이 아니라, 사람의 지혜를 연결하고 확장하는 데 쓰여야 한다는 우리의 철학을 담고 있습니다.",
    "website": "https://partner.linkb.ai",
    "email": "linkbee@faceweb.ai",
    "contact": "010-9086-8634",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/803",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "링크비(LinkBee)"
    ],
    "majorTags": [
      "업무자동화/생산성"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "자동화, 예약, 클라우드",
    "priceText": [
      "Lite / 유/무료 혼합 / 17,000원"
    ],
    "minPrice": 17000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Basic: 관리자 계정 1개, 상담상품 1개, 상담 내용 자동 요약, 상담 기록 전체 저장, 도메인 및 QR코드 제공, 720p 화상 상담 제공"
    ],
    "recommendation": "업무 자동화/API, DB/인프라 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 5,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1391,
        "name": "링크비(LinkBee)",
        "summary": "AI 실시간 통번역 기반 글로벌 고객 상담·운영 자동화 솔루션 - 외국어 직원 없이 해외 고객 응대부터 예약·결제·매출 관리까지 가능한 AI 글로벌 비즈니스 솔루션",
        "website": "",
        "keywords": [
          "AI 통번역",
          "K-뷰티",
          "SaaS",
          "글로벌 고객응대",
          "글로벌 메신저 통합",
          "글로벌비즈니스",
          "다국어 상담",
          "예약 관리",
          "외국인고객응대",
          "의료관광"
        ],
        "priceText": [
          "Lite / 유/무료 혼합 / 17,000원"
        ],
        "priceNumber": 17000,
        "pricingKind": "fixed",
        "benefits": [
          "Basic: 관리자 계정 1개, 상담상품 1개, 상담 내용 자동 요약, 상담 기록 전체 저장, 도메인 및 QR코드 제공, 720p 화상 상담 제공"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "업무자동화/생산성"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "자동화, 예약, 클라우드"
      }
    ]
  },
  {
    "id": 690,
    "name": "주식회사 라온버드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/194349/1c8f5d322cdc4cd8be5b2d4c9d8b6ae4.jpeg",
    "summary": "AI 제품 비주얼 생성 플랫폼 : LaonGEN Studio는 제품 사진을 기반으로 룩북, 제품컷, 상세페이지 이미지를 생성하는 AI SaaS 플랫폼입니다.",
    "description": "",
    "website": "https://laongen.com",
    "email": "grandsys@laonbud.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/690",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "LaonGEN",
      "Feeltering"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "영상/이미지"
    ],
    "detailTags": [
      "이미지",
      "SEO",
      "SNS 문구",
      "광고"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "AI 에이전트",
      "RAG/지식검색",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "이미지",
      "SNS/광고 문구"
    ],
    "techEvidence": "생성형, 이미지, 사진, 에이전트, 검색, 대시보드",
    "priceText": [
      "12000 / CREDIT_TOKEN / 1,000,000원",
      "Pro 요금제 / 월 구독 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "가입무료크레딧: 가입시 100 크레딧 제공"
    ],
    "recommendation": "이미지, SNS/광고 문구 결과물로 첫 고객 반응을 빠르게 확인하려는 LaonGEN 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 6,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1237,
        "name": "LaonGEN",
        "summary": "AI 제품 비주얼 생성 플랫폼 : LaonGEN Studio는 제품 사진을 기반으로 룩북, 제품컷, 상세페이지 이미지를 생성하는 AI SaaS 플랫폼입니다.",
        "website": "https://laongen.com",
        "keywords": [
          "AI",
          "딥테크",
          "룩북",
          "사진",
          "생성형",
          "인공지능",
          "콘텐츠",
          "패션"
        ],
        "priceText": [
          "12000 / CREDIT_TOKEN / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "가입무료크레딧: 가입시 100 크레딧 제공"
        ],
        "deliverables": [
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "영상/이미지"
        ],
        "detailTags": [
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성"
        ],
        "techEvidence": "생성형, 이미지, 사진"
      },
      {
        "id": 1238,
        "name": "Feeltering",
        "summary": "초기 창업팀을 위한 AI 마케팅 통합 대시보드 - GA4·광고·SNS·검색·콜드메일을 하나의 대시보드에서 통합 관리하며, 콘텐츠 생성도 가능한 AI 마케팅 에이전트 플랫폼입니다.",
        "website": "",
        "keywords": [
          "AI",
          "GA4",
          "SNS",
          "광고",
          "딥테크",
          "마케팅",
          "생성형",
          "콜드메일"
        ],
        "priceText": [
          "Pro 요금제 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구"
        ],
        "majorTags": [
          "마케팅 콘텐츠"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "광고"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "RAG/지식검색",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "생성형, 에이전트, 검색, 대시보드"
      }
    ]
  },
  {
    "id": 809,
    "name": "주식회사 픽켓팅",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/122165/c6d5581a505b4431b8eaa5c2e87a64b1.png",
    "summary": "AI 마케팅 에이전트 모델탑재 AI 마케팅(광고) 자동 최적화 플랫폼",
    "description": "# 모두의 창업 다음 라운드를 함께 준비하는 AI 마케팅 파트너, 픽켓팅 > # 고객 검증부터 언론 PR, 광고 자동화까지 — 제품이 아직 없어도 지금 시작할 수 있습니다. 아이디어 심사를 통과하신 모든 분께, 진심으로 축하의 말씀을 전합니다. 여기까지 온 것만으로도 이미 수많은 도전 중에서 증명해낸 것입니다. 하지만 진짜 승부는 지금부터 시작됩니다. --- ## 1라운드를 넘으면, 더 큰 질문이 기다립니다 모두의 창업은 한 번의 발표로 끝나는 대회가 아닙니다. 1라운드를 통과하면, 다음 라운드에서는 심사위원과 투자자 앞에 서게 됩니다. 멘토링을 성실히 듣고 열정을 보이는 것만으로 통과했던 단계와는 차원이 다른 질문이 기다리고 있습니다. 그들이 가장 먼저 묻는 것은 언제나 같습니다. > ## **\"이거 진짜 팔려요? 고객은 있어요? 검증은 해봤어요?\"** > > 이 질문 앞에서, 제품만 만들어 간 사람은 무너집니다. 심사위원이 보는 것은 \"만들 수 있는가\"가 아니라",
    "website": "https://picketing.ai",
    "email": "ceo@picketing.ai",
    "contact": "010-4786-6719",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/809",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "픽켓팅(PICKETING)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SEO",
      "광고",
      "발표자료",
      "MVP",
      "시장조사",
      "리포트",
      "브랜딩",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "시장조사/리서치",
      "MVP/프로토타입",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "SNS/광고 문구",
      "MVP",
      "리포트",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "에이전트, 리서치, 시제품, 검색, 대시보드, 보고서, 자동화, 연동",
    "priceText": [
      "CORE요금 / 월 구독 / 490,000원"
    ],
    "minPrice": 490000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료 대시보드 조회10일제공: 진행하는 광고를 연동하여 통합으로 볼 수 있는 기능"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 IR/발표자료, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 7,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1401,
        "name": "픽켓팅(PICKETING)",
        "summary": "AI 마케팅 에이전트 모델탑재 AI 마케팅(광고) 자동 최적화 플랫폼",
        "website": "https://picketing.ai/",
        "keywords": [
          "ai",
          "광고",
          "광고자동화",
          "광고최적화",
          "구글광고",
          "네이버광고",
          "마케팅",
          "마케팅자동화",
          "메타광고",
          "에이전트"
        ],
        "priceText": [
          "CORE요금 / 월 구독 / 490,000원"
        ],
        "priceNumber": 490000,
        "pricingKind": "fixed",
        "benefits": [
          "무료 대시보드 조회10일제공: 진행하는 광고를 연동하여 통합으로 볼 수 있는 기능"
        ],
        "deliverables": [
          "IR/발표자료",
          "SNS/광고 문구",
          "MVP",
          "리포트",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SEO",
          "광고",
          "발표자료",
          "MVP",
          "시장조사",
          "리포트",
          "브랜딩",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "MVP/프로토타입",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 리서치, 시제품, 검색, 대시보드, 보고서, 자동화, 연동"
      }
    ]
  },
  {
    "id": 719,
    "name": "주식회사 빅블루웨이브",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/175707/09d3e4696f4b451787791a77db889d01.png",
    "summary": "창업가의 아이디어 10분만 투자하세요, 사업계획·분석·마케팅을 한 번에 제공합니다. 아이디어를 실전 비즈니스로 바꾸는 창업 파트너 솔루션",
    "description": "🌊 \"비즈니스의 거친 파고를, 성장의 원동력으로\" **Bigbluewave**는 예비 창업자, 초기 스타트업의 시작부터 성장까지 전 과정을 함께 실현하는 비즈니스 파트너입니다. **Core Services** Bigbluewave는 자체 개발한 두 가지 핵심 AI 라인업을 통해, 아이디어 구상부터 실전 실행까지 공백 없는 고효율 비즈니스 인프라를 제공합니다. ------------------------------------------------------------------- **1. RiseUp AI (라이즈업 AI) 🚀** \"단 하나의 계정으로 완성하는 올인원 스타트업 솔루션\" **> 단일 플랫폼 통합 환경** **1)** 창업 및 사업 운영에 필요한 모든 AI 기능을 하나의 계정으로 운영이 가능 합니다. **2)** 계획서 작성 및 컨텐츠 생산이 각 각 분리된 플랫폼이 아닌 단일 플랫폼에서 진행됩니다. **> 아이디어 중심의 유기적 확장**",
    "website": "https://bigbluewavebiz.net/",
    "email": "info@bigbluewavebiz.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/719",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "RiseupAI",
      "AI Gem Store"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "블로그",
      "SNS 문구",
      "홈페이지",
      "로고",
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API",
      "DB/인프라",
      "영상 생성",
      "음성/STT/TTS"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "홈페이지",
      "로고",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "분석, 이미지, 자동화, 인프라, 이미지 생성, 동영상, 음성",
    "priceText": [
      "Premium / 월 구독 / 349,000원",
      "Business Class / 월 구독 / 195,000원"
    ],
    "minPrice": 195000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Secret Prompt Top 50 PDF 책자: 고급 비즈니스 프롬프트 가이드 제공",
      "비즈니스 프로세스 맵 제작 지원: 창업자의 비즈니스 아이디어 프로세스 분석 및 웹 구조도 제작 지원",
      "Secret Prompt Top 50 PDF 가이드: 고급 비즈니스 프롬프트 가이드 제공"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 블로그, SNS/광고 문구 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 8,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1276,
        "name": "RiseupAI",
        "summary": "창업가의 아이디어 10분만 투자하세요, 사업계획·분석·마케팅을 한 번에 제공합니다. 아이디어를 실전 비즈니스로 바꾸는 창업 파트너 솔루션",
        "website": "https://www.riseupai.net/",
        "keywords": [
          "AI PPT 제작",
          "SWOT/BCG 분석",
          "로고, SNS 컨텐츠 제작",
          "마케팅",
          "블로그 초안 작성",
          "비즈니스 프롬프트",
          "사업 계획서 자동 생성",
          "시장 조사 자동화",
          "아이디어 실행 계획",
          "이미지, 웹 사이트 생성"
        ],
        "priceText": [
          "Premium / 월 구독 / 349,000원"
        ],
        "priceNumber": 349000,
        "pricingKind": "fixed",
        "benefits": [
          "Secret Prompt Top 50 PDF 책자: 고급 비즈니스 프롬프트 가이드 제공",
          "비즈니스 프로세스 맵 제작 지원: 창업자의 비즈니스 아이디어 프로세스 분석 및 웹 구조도 제작 지원"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "홈페이지",
          "로고",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "홈페이지",
          "로고",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "분석, 이미지, 자동화, 인프라"
      },
      {
        "id": 1277,
        "name": "AI Gem Store",
        "summary": "비즈니스/업무 분석을 통해 최적 AI 도구 정밀하게 추천, 탐색부터 실전 활용까지 통합 지원하는 AI 솔루션 허브 \" AIGemStore\"",
        "website": "https://aigemstore.com/",
        "keywords": [
          "AI도구추천",
          "AI큐레이션",
          "SNS AI",
          "동영상 제작 AI",
          "마케팅AI",
          "업무자동화",
          "음성 AI",
          "이미지 생성 AI",
          "창업솔루션",
          "코딩AI"
        ],
        "priceText": [
          "Business Class / 월 구독 / 195,000원"
        ],
        "priceNumber": 195000,
        "pricingKind": "fixed",
        "benefits": [
          "Secret Prompt Top 50 PDF 가이드: 고급 비즈니스 프롬프트 가이드 제공"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "이미지 생성",
          "영상 생성",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "분석, 이미지 생성, 이미지, 동영상, 음성, 자동화, 인프라"
      }
    ]
  },
  {
    "id": 636,
    "name": "스토리파이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/108706/ebda459ab10b489b8b9b1914204d2f55.png",
    "summary": "AI에이전트 기반 블로그 콘텐츠 생성 서비스 - 고품질 블로그 텍스트와 최적화된 이미지를 동시에 자동 생성하는 지능형 블로그 콘텐츠 생성 솔루션",
    "description": "AI에이전트 기반 블로그 콘텐츠 생성 서비스 '워들리' 고품질 블로그 텍스트와 최적화된 이미지를 동시에 자동 생성하는 지능형 블로그 콘텐츠 생성 솔루션 안녕하세요! 초기 창업자와 1인 기업의 든든한 마케팅 메이트, 워들리입니다. 창업을 시작하고 제품을 만들다 보면 몸이 열 개라도 부족한 순간이 찾아옵니다. **\"우리 서비스를 세상에 알려야 하는데...\",** **\"서비스 런칭 전 고객들에게 서비스를 먼저 소개해야 하는데..\"** **\"공식 블로그도 꾸준히 운영해야 하고, SEO(검색엔진최적화)도 챙겨야 하는데...\"** 마음속 부담감은 커져만 가고, 정작 콘텐츠를 기획하고 글을 쓸 시간은 턱없이 부족하시지 않으셨나요? 마케팅 전담 인력을 두기 어려운 초기 창업팀과 1인 대표님들의 그 깊은 고민을 해결하기 위해 워들리가 태어났습니다. **✨ 워들리는 어떤 서비스인가요?** 워들리는 단슨히 글을 대신 써주는 AI가 아닙니다. **기획부터 리서치, 맞춤형 이미지 생성,",
    "website": "https://wordly.im",
    "email": "seohsirk@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/636",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "워들리"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "시장조사",
      "브랜딩",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "이미지",
      "자동화"
    ],
    "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 리서치, 검색, 분석, 이미지 생성, 이미지, 자동화",
    "priceText": [
      "프리미엄 요금제 / 월 구독 / 36,000원"
    ],
    "minPrice": 36000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료 회원: 회원가입 시 500콩알(크래딧) 지급"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 블로그, 이미지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 7,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1159,
        "name": "워들리",
        "summary": "AI에이전트 기반 블로그 콘텐츠 생성 서비스 - 고품질 블로그 텍스트와 최적화된 이미지를 동시에 자동 생성하는 지능형 블로그 콘텐츠 생성 솔루션",
        "website": "https://wordly.im/docs/introduction",
        "keywords": [
          "ai블로그",
          "ai콘텐츠",
          "ai팟캐스트",
          "블로그",
          "블로그콘텐츠"
        ],
        "priceText": [
          "프리미엄 요금제 / 월 구독 / 36,000원"
        ],
        "priceNumber": 36000,
        "pricingKind": "fixed",
        "benefits": [
          "무료 회원: 회원가입 시 500콩알(크래딧) 지급"
        ],
        "deliverables": [
          "블로그",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "시장조사",
          "브랜딩",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 리서치, 검색, 분석, 이미지 생성, 이미지, 자동화"
      }
    ]
  },
  {
    "id": 656,
    "name": "위드위너스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/209461/5eee0ac65f2144c890da6b65a8a19f83.png",
    "summary": "결제가 멈춰도 유입은 멈추지 않도록, AI와 검색엔진이 24시간 알아서 고객을 찾는 트래픽 자립을 실현합니다",
    "description": "**[위드위너스 : 마케팅의 월세 시대를 끝내는 디지털 자산화 파트너]** \"광고비 결제가 멈추는 순간, 왜 우리 고객도 발길을 끊을까요?\" 위드위너스는 수많은 기업 대표님들이 겪고 계신 이 깊은 고민에서 출발했습니다. 저희는 밑 빠진 독에 물 붓듯 소모되는 마케팅을 멈추고, 외부 플랫폼에 흔들리지 않는 튼튼한 '트래픽 자립'을 돕는 마케팅 기술 파트너입니다. **[AI 검색 시대의 새로운 정답, '팩트코퍼스(FactCorpus)']** 이러한 철학을 기술로 실현하기 위해 위드위너스가 자체 개발한 솔루션이 바로 '팩트코퍼스' 입니다. 고객이 검색창을 떠나 챗GPT 같은 대화형 AI에게 직접 질문하는 시대가 왔습니다. 팩트코퍼스는 기존의 검색엔진 최적화(SEO)를 넘어, 생성형 AI 검색(GEO) 환경에서 우리 회사의 가치가 가장 신뢰할 수 있는 '정답'으로 노출되도록 돕는 AI 데이터 구조화 솔루션입니다. **[어떤 채널이든 구글이 정확히 색인(Indexing)하는 콘텐츠 기",
    "website": "https://www.factcorpus.com/",
    "email": "ceo@withwinus.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/656",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "창업자를 위한 AI 기반 디지털 자산화(SEO/GEO/AEO) 오가닉 트래픽 부스터 솔루션"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "블로그",
      "SEO",
      "SNS 문구",
      "광고",
      "영상",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "영상",
      "자동화"
    ],
    "techEvidence": "GPT, 생성형, 검색, 분석, 숏폼, 자동화",
    "priceText": [
      "월 단위 과금 및 세팅 / 유/무료 혼합 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "SEO 최적화 상태: 무료 SEO 점수 분석기"
    ],
    "recommendation": "LLM/생성형AI, RAG/지식검색 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 창업자를 위한 AI 기반 디지털 자산화(SEO/GEO/AEO) 오가닉 트래픽 부스터 솔루션 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1189,
        "name": "창업자를 위한 AI 기반 디지털 자산화(SEO/GEO/AEO) 오가닉 트래픽 부스터 솔루션",
        "summary": "결제가 멈춰도 유입은 멈추지 않도록, AI와 검색엔진이 24시간 알아서 고객을 찾는 트래픽 자립을 실현합니다",
        "website": "https://www.factcorpus.com/",
        "keywords": [
          "AEO",
          "AI",
          "AI 마케팅",
          "AI 자동화",
          "AI 콘텐츠",
          "GEO",
          "SEO",
          "SEO최적화",
          "숏폼",
          "업무자동화"
        ],
        "priceText": [
          "월 단위 과금 및 세팅 / 유/무료 혼합 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [
          "SEO 최적화 상태: 무료 SEO 점수 분석기"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "SEO",
          "SNS 문구",
          "광고",
          "영상",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, 생성형, 검색, 분석, 숏폼, 자동화"
      }
    ]
  },
  {
    "id": 655,
    "name": "위더스콘텐츠",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/190238/9cd68a7cf8344507a68d97c7ff0fce5d.png",
    "summary": "AI 인플루언서 상세 분석 프로필 열람 - 내게 맞는 인플루언서 맞춤 열람",
    "description": "안녕하세요. 위더스콘텐츠(포포몬) 대표 하인덕입니다. 위더스콘텐츠는 뉴미디어 채널과 인플루언서 매칭 플랫폼 ‘포포몬’을 기반으로 성장한 애드테크 종합 광고대행사입니다. 2017년 11월 22일 인스타그램 ‘여행다녀왔습니다’ 채널 개설을 시작으로, ‘1일1핫플’, ‘MZ라이프’ 등 총 100만 명 이상의 팔로워를 보유한 SNS 채널을 직접 운영하며 MCN 사업과 콘텐츠 중심의 IMC 미디어믹스 마케팅 대행을 수행하고 있습니다. 또한, 홈페이지와 영상 등 디지털 콘텐츠 제작을 포함한 통합 마케팅 전략을 통해 브랜드 커뮤니케이션을 지원하고 있습니다. 아울러, 자사에서 개발한 인플루언서 매칭 플랫폼 ‘포포몬’을 통해 광고주가 직접 인플루언서를 매칭하고 캠페인을 운영할 수 있도록 하여, 인플루언서 마케팅의 구조를 전환하는 애드테크 서비스로 확장 중입니다. 디지털 미디어 운영 경험, 마케팅 전문성, 그리고 기술력을 바탕으로 위더스콘텐츠는 국내를 넘어 글로벌 시장에서도 경쟁력 있는 종합",
    "website": "https://popomon.com/",
    "email": "indha5543@gmail.com",
    "contact": "010-7639-5543",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/655",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "포포몬",
      "AI 인플루언서 자동 매칭(커넥트)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "홈페이지",
      "브랜딩",
      "영상"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "홈페이지",
      "영상"
    ],
    "techEvidence": "홈페이지, 분석",
    "priceText": [
      "인플루언서 프로필열람, 원하는 인플루언서를 빠르게 찾아볼 수 있음 / 유/무료 혼합 / 100,000원",
      "베이직 요금제 / 월 구독 / 80,000원"
    ],
    "minPrice": 80000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "인플루언서 모집 공고등록: 체험단 및 인플루언서를 무료로 모집할 수 있게 공고등록이 가능함. 인플루언서 구인구직 무료 플랫폼"
    ],
    "recommendation": "SNS/광고 문구, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 포포몬 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1187,
        "name": "포포몬",
        "summary": "AI 인플루언서 상세 분석 프로필 열람 - 내게 맞는 인플루언서 맞춤 열람",
        "website": "https://popomon.com/next/client/advertiseProduct?status=connect",
        "keywords": [
          "광고",
          "광고대행",
          "마케팅",
          "바이럴",
          "블로거",
          "유튜브",
          "인스타그래머",
          "인플루언서",
          "인플루언서마케팅",
          "체험단"
        ],
        "priceText": [
          "인플루언서 프로필열람, 원하는 인플루언서를 빠르게 찾아볼 수 있음 / 유/무료 혼합 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [
          "인플루언서 모집 공고등록: 체험단 및 인플루언서를 무료로 모집할 수 있게 공고등록이 가능함. 인플루언서 구인구직 무료 플랫폼"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "홈페이지",
          "브랜딩",
          "영상"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "홈페이지, 분석"
      },
      {
        "id": 1188,
        "name": "AI 인플루언서 자동 매칭(커넥트)",
        "summary": "인플루언서 AI매칭 서비스",
        "website": "https://popomon.com/next/client/advertiseProduct?status=connect",
        "keywords": [
          "광고",
          "광고대행",
          "네이버블로거",
          "마케팅",
          "바이럴",
          "바이럴마케팅",
          "유튜브",
          "인플루언서",
          "인플루언서마케팅",
          "체험단"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 80,000원"
        ],
        "priceNumber": 80000,
        "pricingKind": "fixed",
        "benefits": [
          "인플루언서 모집 공고등록: 체험단 및 인플루언서를 무료로 모집할 수 있게 공고등록이 가능함. 인플루언서 구인구직 무료 플랫폼"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "홈페이지",
          "브랜딩",
          "영상"
        ],
        "techTags": [
          "랜딩페이지 빌더"
        ],
        "techEvidence": "홈페이지"
      }
    ]
  },
  {
    "id": 712,
    "name": "주식회사 비씨티원(BCTONE Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185259/3e90c184d64e4661b6da2a29b61ee8dd.png",
    "summary": "코딩 없이 자연어 한 줄로 나만의 AI 업무 자동화 에이전트를 만들 수 있어요",
    "description": "주식회사 비씨티원은 2013년 설립된 벤처기업으로, AI 워크플로우 실험·자동화 플랫폼 **GrowFit**을 개발·운영하고 있습니다. GrowFit은 GPT-5·Claude Sonnet 4·Gemini 2.5 등 22종 이상의 AI 모델을 브라우저에서 즉시 비교·실험하고, 내 문서를 AI에 연결하는 RAG 지식베이스, 외부 도구 70종+를 AI에 연결하는 MCP, 코딩 없이 AI 자동화 워크플로우를 설계하는 노코드 에이전트 빌더까지 하나의 플랫폼에서 제공합니다. 사업계획서 작성·마케팅 카피·경쟁사 분석 등 창업 업무별 에이전트 템플릿을 기본 제공하며, 창업자가 원하는 에이전트를 선택해 즉시 활용하거나 자신의 업무에 맞게 수정할 수 있습니다. 자연어 한 줄 입력만으로 AI가 MCP 도구 조합과 에이전트 워크플로우를 자동 설계해주어 기술 지식 없이도 바로 사용할 수 있습니다.",
    "website": "https://growfit.kr/",
    "email": "bct@bctone.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/712",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "GrowFit AI 실습 플랫폼"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "사업계획서",
      "노코드",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "시장조사/리서치",
      "노코드/앱빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "자동화"
    ],
    "techEvidence": "LLM, GPT, Claude, Gemini, AI 모델, 에이전트, 경쟁사, 노코드, 빌더, RAG",
    "priceText": [
      "1,000,000 / 유/무료 혼합 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "가입 시 토큰 할당: 가입 시 토큰 할당"
    ],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 GrowFit AI 실습 플랫폼 같은 서비스가 필요한 팀",
    "followerCount": 6,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1266,
        "name": "GrowFit AI 실습 플랫폼",
        "summary": "코딩 없이 자연어 한 줄로 나만의 AI 업무 자동화 에이전트를 만들 수 있어요",
        "website": "https://growfit.kr/",
        "keywords": [
          "AI 자동화",
          "AI 플랫폼",
          "노코드 에이전트",
          "멀티 LLM",
          "업무 자동화"
        ],
        "priceText": [
          "1,000,000 / 유/무료 혼합 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [
          "가입 시 토큰 할당: 가입 시 토큰 할당"
        ],
        "deliverables": [
          "사업계획서",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "사업계획서",
          "노코드",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "노코드/앱빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, GPT, Claude, Gemini, AI 모델, 에이전트, 경쟁사, 노코드, 빌더, RAG, 분석, 자동화"
      }
    ]
  },
  {
    "id": 651,
    "name": "오키위",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/173995/f3af0709eb8f4713b284814a84868ab0.png",
    "summary": "노코드 랜딩페이지 제작 및 고객 데이터 추적이 가능한 AI 분석 기반 초고속 아이디어 검증 SaaS : 10분 노코드 랜딩페이지 제작부터 AI 데이터 분석까지 전문가의 지원으로 아이디어를 확신으로 바꾸는 초고속 검증 서비스",
    "description": "**스타트업 전문 컨설팅 에이전시의 노하우를 아낌없이 지원합니다** 저희 팀은 수많은 초기 창업팀의 고민과 성장을 가까이서 지켜본 **스타트업 전문 컨설팅 에이전시**입니다. 그렇기에 랜딩페이지 제작 이후의 과정이 얼마나 막막한지 잘 알고 있습니다. 프루프는 랜딩페이지를 완성하는 데서 끝내지 않고, 실제 고객을 모으고 비즈니스가 유효한지 판단할 수 있는 든든한 같은 편이 되어 드리겠습니다. **1. 정교한 목표 고객 발굴** 데이터 기반으로 시장에 적합한 타겟을 찾아 창업 실패 리스크를 줄입니다. **2. 실전 마케팅 기획 교육** 만들어진 페이지에 잠재 고객을 효과적으로 끌어모으는 방법을 알려드립니다. **3. 맞춤형 광고 세팅 지원** 본사의 컨설팅 노하우를 담아 초기 모객을 위한 광고 세팅을 직접 도와드립니다.",
    "website": "https://www.proofdata.co.kr",
    "email": "okiwicorp@naver.com",
    "contact": "050-6345-1977",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/651",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "프루프 : Proof"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "광고",
      "랜딩페이지",
      "홈페이지",
      "노코드",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "홈페이지",
      "컨설팅"
    ],
    "techEvidence": "노코드, 빌더, 랜딩페이지, 랜딩, 데이터 분석, 분석",
    "priceText": [
      "베이직 요금제 / 월 구독 / 750,000원"
    ],
    "minPrice": 750000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 SNS/광고 문구, 랜딩페이지 근거가 필요한 초기 창업팀",
    "followerCount": 7,
    "likeCount": 2,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1181,
        "name": "프루프 : Proof",
        "summary": "노코드 랜딩페이지 제작 및 고객 데이터 추적이 가능한 AI 분석 기반 초고속 아이디어 검증 SaaS : 10분 노코드 랜딩페이지 제작부터 AI 데이터 분석까지 전문가의 지원으로 아이디어를 확신으로 바꾸는 초고속 검증 서비스",
        "website": "",
        "keywords": [
          "AI 인사이트",
          "검증 리스크 최소화",
          "데이터 분석",
          "딥테크",
          "랜딩페이지 빌더"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 750,000원"
        ],
        "priceNumber": 750000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "홈페이지",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "광고",
          "랜딩페이지",
          "홈페이지",
          "노코드",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "노코드, 빌더, 랜딩페이지, 랜딩, 데이터 분석, 분석"
      }
    ]
  },
  {
    "id": 653,
    "name": "원더무브 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/193126/2c877be301f543f081e174a422b9472d.png",
    "summary": "별도의 개발 없이 클릭만으로 나만의 멀티 AI에이전트(마케팅담당, 개발담당등) 팀을 구성하는 서비스",
    "description": "원더무브는 AI와 클라우드 네이티브 기술을 기반으로 기업의 복잡한 업무와 운영 환경을 더 단순하고 지능적으로 바꾸는 AI 솔루션 기업입니다. 현대자동차그룹 사내벤처에서 출발한 기술 경험과 글로벌 SaaS 운영 역량을 바탕으로, 기업이 더 적은 리소스로 더 빠르게 실행할 수 있는 디지털 업무 환경을 만들어가고 있습니다. 원더무브의 핵심 솔루션인 **ClawPod**은 기업이 역할별 AI 에이전트를 구성하고 운영할 수 있는 AI 직원 운영 플랫폼입니다. 대표, 기획자, 마케터, 개발자, 운영 담당자처럼 다양한 역할의 AI 에이전트를 배치하고, 이들이 서로 협업하며 실제 조직의 업무 흐름처럼 일할 수 있도록 지원합니다. ClawPod은 단순한 챗봇이나 문서 생성 도구가 아닙니다. 기업별 독립 작업공간 안에서 사용자, 권한, 자료, AI 에이전트를 통합 관리하고, 업무 요청부터 실행, 검토, 보고까지 이어지는 과정을 AI 팀이 함께 수행하도록 설계된 업무 운영 플랫폼입니다. 특히 창업",
    "website": "https://wondermove.net",
    "email": "ikaris@wondermove.net",
    "contact": "010-2071-4125",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/653",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "ClawPod Cloud"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "시장조사",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "시장조사/리서치",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "시장/수요조사",
      "자동화"
    ],
    "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 시장조사, 자동화, 클라우드",
    "priceText": [
      "Basic (에이전트당 월정액 과금) / 월 구독 / 210,000원"
    ],
    "minPrice": 210000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 2개 AI 에이전트 구성 무상 지원"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 시장/수요조사, 자동화 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 7,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1185,
        "name": "ClawPod Cloud",
        "summary": "별도의 개발 없이 클릭만으로 나만의 멀티 AI에이전트(마케팅담당, 개발담당등) 팀을 구성하는 서비스",
        "website": "https://clawpod.cloud",
        "keywords": [
          "AI에이전트",
          "AI직원",
          "기업용AI에이전트",
          "나만의팀",
          "업무자동화AI",
          "에이전트협업"
        ],
        "priceText": [
          "Basic (에이전트당 월정액 과금) / 월 구독 / 210,000원"
        ],
        "priceNumber": 210000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 2개 AI 에이전트 구성 무상 지원"
        ],
        "deliverables": [
          "시장/수요조사",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "시장조사",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "시장조사/리서치",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI에이전트, AI 에이전트, 에이전트, 시장조사, 자동화, 클라우드"
      }
    ]
  },
  {
    "id": 756,
    "name": "이예은",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/190757/0bc19197d2cd422f80940ad054218a34.png",
    "summary": "UGC 시딩 자동화로 글로벌 콘텐츠 노출량을 100배 확장하는 인플루언서 마케팅 AI 에이전트 솔루션 - 인플루언서 탐색부터 성과 분석까지 손쉽게 마케팅 문제를 해결하세요",
    "description": "◼︎ 오초(Ocho) — 5초 안에 모든 것을 전합니다. 왜 '오초'인가요? 숏폼이 모든 콘텐츠의 표준이 된 시대, 사람들이 한 영상에 머무는 시간은 평균 5초. 그 5초를 놓치면 영상은 스크롤되어 사라지고, 그 5초를 잡으면 매출이 만들어집니다. 오초는 그 5초에 모든 것을 거는 회사입니다. ◼︎ 대(大) 숏폼 시대 — 마케팅의 룰이 바뀌었습니다. 긴 광고는 더 이상 보지 않습니다. 30초도 길다고 합니다. 이제 브랜드는 첫 5초 안에 훅을 던지고, 매력을 보여주고, 행동을 끌어내야 합니다. 짧기 때문에 더 쉬운 것이 아닙니다. 짧기 때문에 더 정교해야 합니다. 오초는 매일 이 5초를 설계합니다. 어떤 훅이 손가락을 멈추게 하는지, 어떤 인플루언서가 어떤 톤으로 말할 때 전환이 일어나는지 — 그 데이터를 매일 쌓고, 매일 검증합니다. ◼︎ 그래서 우리는 인플루언서 마케팅만 합니다. 5초 룰을 가장 잘 아는 사람은 인플루언서입니다. 매일 알고리즘과 싸우며 첫 1초의 후크, 3초의",
    "website": "https://sesaa.me/",
    "email": "contact@ocho.team",
    "contact": "010-4891-7828",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/756",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "세사미(Sesaame)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "브랜딩",
      "영상",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "데이터 분석/대시보드",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "자동화"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 대시보드, 분석, 숏폼, 자동화",
    "priceText": [
      "무제한 탐색 및 자동화 사용 / 월 구독 / 600,000원"
    ],
    "minPrice": 600000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 SNS/광고 문구, 영상 근거가 필요한 초기 창업팀",
    "followerCount": 6,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1335,
        "name": "세사미(Sesaame)",
        "summary": "UGC 시딩 자동화로 글로벌 콘텐츠 노출량을 100배 확장하는 인플루언서 마케팅 AI 에이전트 솔루션 - 인플루언서 탐색부터 성과 분석까지 손쉽게 마케팅 문제를 해결하세요",
        "website": "https://www.app.guideflo.com/workspace/6786/manuals/20721",
        "keywords": [
          "광고",
          "마케팅",
          "바이럴마케팅",
          "숏폼",
          "앱마케팅",
          "인스타그램",
          "인스타마케팅",
          "인플루언서마케팅",
          "콘텐츠마케팅",
          "틱톡"
        ],
        "priceText": [
          "무제한 탐색 및 자동화 사용 / 월 구독 / 600,000원"
        ],
        "priceNumber": 600000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "브랜딩",
          "영상",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "데이터 분석/대시보드",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 대시보드, 분석, 숏폼, 자동화"
      }
    ]
  },
  {
    "id": 847,
    "name": "핑바 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/134755/83515ede9ec34197b3895d80a852709d.png",
    "summary": "전담 디자이너 없이도, 픽셀 단위로 통제 가능한 고품질 상업용 AI 디자인 에셋을 즉시 생성하고 통합 관리할 수 있습니다.",
    "description": "핑바 주식회사는 2022년에 설립된 '혁신성장유형 벤처기업'으로, AI 기술과 지식재산권(IP) 비즈니스를 융합하는 딥테크(Deep-tech) 선도 기업입니다. *2026년 딥테크창업사관학교(서울본교) 1기 *2025년 청년창업사관학교(안산본교) 15기 우수졸업 *2024년 창업성장기술개발 디딤돌 R&D 수행 전담 디자이너가 없는 초기 창업자와 1인 기업가들이 생성부터 편집, 업스케일링까지 여러 AI 툴을 전전하며 겪는 비효율(토글 택스, Toggle Tax)을 해결하고자, 생성, 정밀 편집, 해상도 업스케일링, 자산 통합 관리까지 단일 워크스페이스에서 완결 짓는, 클라우드 기반(SaaS) 올인원 AI 솔루션 '핑바스 스튜디오(PINGVAS STUDIO)'를 서비스하고 있습니다.",
    "website": "https://pingvas.studio",
    "email": "contact@ping-ba.com",
    "contact": "070-8098-8853",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/847",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "핑바스(PINGVAS)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "DB/인프라"
    ],
    "deliverables": [
      "이미지"
    ],
    "techEvidence": "생성형, 이미지, 클라우드",
    "priceText": [
      "STUDIO / 월 구독 / 225,000원"
    ],
    "minPrice": 225000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 이미지 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 핑바스(PINGVAS) 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 4,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1463,
        "name": "핑바스(PINGVAS)",
        "summary": "전담 디자이너 없이도, 픽셀 단위로 통제 가능한 고품질 상업용 AI 디자인 에셋을 즉시 생성하고 통합 관리할 수 있습니다.",
        "website": "",
        "keywords": [
          "AI 디자인",
          "간편 AI도구",
          "고화질 변환",
          "생성형 AI",
          "쉬운 AI도구",
          "이미지 수정",
          "콘텐츠 생성",
          "콘텐츠 제작",
          "콘텐츠 편집"
        ],
        "priceText": [
          "STUDIO / 월 구독 / 225,000원"
        ],
        "priceNumber": 225000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "DB/인프라"
        ],
        "techEvidence": "생성형, 이미지, 클라우드"
      }
    ]
  },
  {
    "id": 605,
    "name": "디지털로그 테크놀로지스 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185318/e1c8c8d605b3420a91164d19c3f8be60.png",
    "summary": "소셜미디어를 ‘마케팅 + 세일즈 + CS 채널’로 바꿔주는 범용 AI 플랫폼 - AI 기반의 소셜미디어 운영 자동화 솔루션 (악성/스팸 댓글 관리, 문의 댓글 관리, 자동DM발송, 성과 레포트 생성, 댓글 이벤트 운영 자동화 등)",
    "description": "디지털로그는 AI 기반 소셜미디어 운영 자동화 솔루션 ‘Conma AI’를 개발·운영하는 글로벌 IT 기업입니다. 기업의 소셜미디어를 단순 홍보 채널이 아닌 24시간 운영 가능한 세일즈 및 고객응대 채널로 전환하는 것을 목표로 하고 있습니다. AI 기반 댓글 및 DM 자동 분류, 악성·스팸 댓글 필터링, AI 리포트 자동 생성, 이벤트 운영 자동화 등의 기능을 제공하며, 기업의 운영 효율성과 고객 대응 속도를 향상시키고 있습니다. 콘마 AI는 신한은행, 신세계백화점, 신세계푸드, 델몬트 코리아, 하림, CU, G마켓, 코웨이, SK텔레콤, LG 유플러스, 일룸, T머니 등 다양한 기업과 인플루언서들의 소셜미디어 운영 방식을 완전히 새롭게 AX/DX 전환하고 있습니다. 디지털로그는 Meta의 공식 개발 파트너이며, Google, Microsoft, NVIDIA, AWS의 글로벌 AI 스타트업 지원 프로그램에 동시 선정되었습니다.",
    "website": "https://www.conma.ai",
    "email": "help@digitalog.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/605",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Conma AI (콘마 AI)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "랜딩페이지",
      "리포트",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "리포트",
      "자동화"
    ],
    "techEvidence": "랜딩, 리포트, 자동화",
    "priceText": [
      "Plus / 월 구독 / 12,900원"
    ],
    "minPrice": 12900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 소셜미디어"
    ],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 Conma AI (콘마 AI) 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1116,
        "name": "Conma AI (콘마 AI)",
        "summary": "소셜미디어를 ‘마케팅 + 세일즈 + CS 채널’로 바꿔주는 범용 AI 플랫폼 - AI 기반의 소셜미디어 운영 자동화 솔루션 (악성/스팸 댓글 관리, 문의 댓글 관리, 자동DM발송, 성과 레포트 생성, 댓글 이벤트 운영 자동화 등)",
        "website": "https://www.conma.ai",
        "keywords": [
          "AI",
          "SNS",
          "광고",
          "마케팅",
          "브랜딩",
          "소셜미디어",
          "인스타그램",
          "인플루언서"
        ],
        "priceText": [
          "Plus / 월 구독 / 12,900원"
        ],
        "priceNumber": 12900,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 소셜미디어"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "랜딩페이지",
          "리포트",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩, 리포트, 자동화"
      }
    ]
  },
  {
    "id": 687,
    "name": "주식회사 디오비스튜디오",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/198/6e202d5ade144c7ca74f9fe1bd5a1e3b.jpeg",
    "summary": "AI로 창업에 필요한 개발 및 마케팅 사업 계획서까지 완벽하게",
    "description": "ㅇ설립 배경 및 기업 비전 AI 기술을 직접 다루지 않아도 누구나 손쉽게 고품질 콘텐츠를 제작·활용할 수 있는 환경을 구현하고자 하며, 실시간 AI 영상 변환 기술과 SaaS 기반 플랫폼 구조를 통해 개인 크리에이터부터 기업 고객까지 폭넓게 활용 가능한 콘텐츠 제작의 자동화·고도화 솔루션을 제공하는 것을 목표로 함 ㅇ사업분야 세부 소개 **- 라이브스타일러(LiveStyler) :** ++AI 기반 실시간 영상 스타일링 SaaS 플랫폼++으로 라이브 방송·교육·커머스 등 실시간 콘텐츠 환경에서 후반 편집 없이도 고품질 시각 연출이 가능하도록 설계된 영상 인프라 서비스이며, 세계 최대 IT·가전 전시회인 CES2026에서 “Content & Entertainment” 부문 혁신상을 수상하면서 국제적으로 기술력과 혁신성, 시장 잠재력을 공식 인정받음 일자 내용 2026.01 CES 혁신상 콘텐츠·엔터테인먼트부문 수상 2024.11 Digital Innovation",
    "website": "http://dob.world",
    "email": "obang@dobstudio.co.kr",
    "contact": "010-9966-3466",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/687",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "HyperTeams"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "광고",
      "영상",
      "이미지",
      "자동화",
      "교육"
    ],
    "techTags": [
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "이미지, 영상 생성, 동영상, 자동화, 인프라",
    "priceText": [
      "1000 / CREDIT_TOKEN / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "이미지 생성, 영상 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 HyperTeams 같은 서비스가 필요한 팀",
    "followerCount": 7,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1234,
        "name": "HyperTeams",
        "summary": "AI로 창업에 필요한 개발 및 마케팅 사업 계획서까지 완벽하게",
        "website": "",
        "keywords": [
          "AI 생산성 도구"
        ],
        "priceText": [
          "1000 / CREDIT_TOKEN / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "광고",
          "영상",
          "이미지",
          "자동화",
          "교육"
        ],
        "techTags": [
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "이미지, 영상 생성, 동영상, 자동화, 인프라"
      }
    ]
  },
  {
    "id": 758,
    "name": "주식회사 와이매틱스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/192200/9df783ed8d4e4abfb2c550ae7d8535ac.png",
    "summary": "중소기업·소상공인을 위한 SaaS형 AI 비서 솔루션 - 어플 설치나 프로그램 다운로드 없이, 말 한마디면 OK! 내 손 안의 AI 직원",
    "description": "**㈜와이매틱스는 ETRI 연구소에서 출발한 AI 기술 기반 기업으로, AI 추론 엔진을 활용한 지능형 시스템 구축 및 업무 자동화 솔루션을 제공합니다.** 공공 및 산업 분야를 대상으로 3D 공간 추론 기술, 지식베이스 기반 시맨틱 서치, 데이터스페이스 구축, AX 컨설팅 등 전문 솔루션을 제공하며, 고객의 생산성 향상과 운영 최적화를 실현하며 AI 기반 디지털 혁신을 수행합니다.",
    "website": "https://ymatics.com",
    "email": "contact@ymatics.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/758",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "yep"
    ],
    "majorTags": [
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "음성/STT/TTS",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "음성, 자동화, 워크플로우",
    "priceText": [
      "베이직 요금제 / 월 구독 / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "30일 무료 체험: 30일 간 전체 서비스 무료 사용 가능(단, 직원 5인 한정)"
    ],
    "recommendation": "음성/STT/TTS, 업무 자동화/API 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 3,
    "likeCount": 5,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1337,
        "name": "yep",
        "summary": "중소기업·소상공인을 위한 SaaS형 AI 비서 솔루션 - 어플 설치나 프로그램 다운로드 없이, 말 한마디면 OK! 내 손 안의 AI 직원",
        "website": "https://ymatics.com/ai_sec/",
        "keywords": [
          "AI비서",
          "HR 테크",
          "경영 파트너",
          "업무자동화",
          "음성인식",
          "전자결재 워크플로우"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "fixed",
        "benefits": [
          "30일 무료 체험: 30일 간 전체 서비스 무료 사용 가능(단, 직원 5인 한정)"
        ],
        "deliverables": [
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "음성, 자동화, 워크플로우"
      }
    ]
  },
  {
    "id": 573,
    "name": "(주)미타운",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/201414/daaede86fff34107afb2a1873fce86da.png",
    "summary": "뉴럴 렌더링 기반 초실감 3D 콘텐츠 생성·편집·배포 SaaS : EVOVA는 현실의 제품과 공간을 몇 분 안에 초실감 3D 콘텐츠로 변환하고, 웹·모바일에서 바로 공유·활용할 수 있게 해주는 뉴럴 렌더링 솔루션입니다.",
    "description": "(주)미타운이 개발한 EVOVA는 뉴럴 렌더링 기술을 기반으로 패션 제품, 공간, 인물 등 현실 세계의 대상을 초실감 3D 데이터로 디지털화하는 3D Neural Rendering Engine입니다. 기존의 3D 제작 방식은 전문 모델러의 수작업이 필요하거나, 고품질의 결과물을 만들기 위해 많은 시간과 비용이 소요된다는 한계가 있었습니다. 또한 일반적인 포토그래메트리나 3D 모델링 방식으로는 패션 제품의 털, 광택, 주름, 투명감, 금속성 질감과 같은 복잡한 재질 표현을 사실적으로 구현하기 어렵습니다. EVOVA는 이러한 문제를 해결하기 위해 자체 뉴럴 렌더링 및 3D Gaussian Splatting 기술을 활용하여, 실제 제품과 공간을 저용량·고품질의 초실감 3D 콘텐츠로 변환합니다. 이를 통해 사용자는 모바일과 웹 환경에서도 사실적인 3D 데이터를 실시간으로 확인하고, 회전·확대·이동 등 인터랙티브한 방식으로 제품과 공간을 경험할 수 있습니다. 특히 EVOVA는 단순히 3",
    "website": "https://app.evova.ai/",
    "email": "info@metown.co.kr",
    "contact": "002-6380-0315",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/573",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "EVOVA"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "데이터/리포트"
    ],
    "detailTags": [
      "홈페이지",
      "브랜딩"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "홈페이지"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "뉴럴렌더링 3D 콘텐츠 생성 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "테스트: 뉴럴렌더링 콘텐츠 제작 체험"
    ],
    "recommendation": "홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 EVOVA 같은 서비스가 필요한 팀",
    "followerCount": 6,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1075,
        "name": "EVOVA",
        "summary": "뉴럴 렌더링 기반 초실감 3D 콘텐츠 생성·편집·배포 SaaS : EVOVA는 현실의 제품과 공간을 몇 분 안에 초실감 3D 콘텐츠로 변환하고, 웹·모바일에서 바로 공유·활용할 수 있게 해주는 뉴럴 렌더링 솔루션입니다.",
        "website": "https://app.evova.ai",
        "keywords": [
          "3D",
          "3D Gaussian Splatting",
          "AI",
          "뉴럴렌더링",
          "디지털트윈",
          "렌더링",
          "초실감",
          "콘텐츠",
          "테크",
          "패션"
        ],
        "priceText": [
          "뉴럴렌더링 3D 콘텐츠 생성 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [
          "테스트: 뉴럴렌더링 콘텐츠 제작 체험"
        ],
        "deliverables": [
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "데이터/리포트"
        ],
        "detailTags": [
          "홈페이지",
          "브랜딩"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 830,
    "name": "컴네트워크 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185524/1f4a83c7696f4e12b61cf7ff20c9f150.png",
    "summary": "AI 에이전트 워크스페이스-설치 없이 몇분 만에 GPT·Claude·Gemini를 한 번에 쓰는 전용 AI Agent 워크스페이스",
    "description": "컴네트워크 주식회사(ComNetwork Co., Ltd.)는 중소기업과 스타트업을 위한 B2B 매니지드 서버 솔루션 전문 기업입니다. 웹 호스팅, VPS, VoIP/팩스, AI 에이전트, 음성 AI, FTP/DB 서버에 이르기까지, 비즈니스 운영에 필요한 IT 인프라를 통합 제공합니다. 복잡한 서버 관리를 고객 대신 책임지고, 고객은 본업에 집중할 수 있도록 지원하는 것이 핵심 가치입니다. 주요 서비스 Web Hosting / Linux, Windows VPS — 안정적인 클라우드 기반 서버 환경 제공 3CX VoIP / Fax — 기업용 클라우드 전화 및 팩스 시스템 AI Agent — 컨테이너 기반 AI 에이전트 SaaS 플랫폼 (AIdepot.Cloud) Voice AI Agent — 3CX 및 오픈소스 기반 자체 호스팅 음성 AI 서비스 FTP / DB / Storage 서버 — 안전한 데이터 저장·관리 인프라 왜 컴네트워크인가? 월 정액 구독 모델로 예측 가능한 IT",
    "website": "https://drive.google.com/file/d/1-cK3FtEdA8wFrKn2SR0An-tspnPXfVDs/view?usp=sharing",
    "email": "unimohoward@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/830",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AIdepot.Cloud",
      "3CX AI Receptionist"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "시장조사/리서치",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라",
      "설문/서베이"
    ],
    "deliverables": [
      "자동화",
      "상세 확인 필요"
    ],
    "techEvidence": "LLM, GPT, ChatGPT, Claude, Gemini, AI 에이전트, 에이전트, 경쟁사, RAG, 분석",
    "priceText": [
      "베이직 요금제 / 월 구독 / 199,000원",
      "베이직 요금제 / 유/무료 혼합 / 199,000원"
    ],
    "minPrice": 199000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AIdepot.Cloud 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1431,
        "name": "AIdepot.Cloud",
        "summary": "AI 에이전트 워크스페이스-설치 없이 몇분 만에 GPT·Claude·Gemini를 한 번에 쓰는 전용 AI Agent 워크스페이스",
        "website": "https://drive.google.com/file/d/1-cK3FtEdA8wFrKn2SR0An-tspnPXfVDs/view?usp=sharing",
        "keywords": [
          "AI Agent",
          "AI챗봇",
          "ChatGPT",
          "Claude",
          "Gemini",
          "RAG",
          "SaaS",
          "멀티LLM",
          "문서분석",
          "업무자동화"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 199,000원"
        ],
        "priceNumber": 199000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "시장조사/리서치",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, GPT, ChatGPT, Claude, Gemini, AI 에이전트, 에이전트, 경쟁사, RAG, 분석, 음성, 전화"
      },
      {
        "id": 1432,
        "name": "3CX AI Receptionist",
        "summary": "AI 인터넷 전화 리셉셔니스트-OpenAI 기반 AI가 24시간 전화를 받고 담당자에게 자동 연결하는 클라우드 AI 리셉셔니스트",
        "website": "https://www.3cx.com/phone-system/ai-receptionist/",
        "keywords": [
          "24시간운영",
          "3CX",
          "AI 자동응답",
          "AI전화응대",
          "IP-PBX",
          "OpenAI",
          "VoIP",
          "다국어",
          "스팸차단",
          "콜라우팅"
        ],
        "priceText": [
          "베이직 요금제 / 유/무료 혼합 / 199,000원"
        ],
        "priceNumber": 199000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계"
        ],
        "techTags": [
          "AI 에이전트",
          "설문/서베이",
          "시장조사/리서치",
          "RAG/지식검색",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 응답, 경쟁사, RAG, 음성, 전화, 연동, DB, 서버, 인프라, 클라우드"
      }
    ]
  },
  {
    "id": 742,
    "name": "주식회사 어치브모먼트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/102284/41c54dd6eb374c26aa83caa20b151096.png",
    "summary": "AI 업무설계 및 협업 플랫폼 - 아이디어만 입력하면 AI 팀원이 사업계획, 업무분장, 산출물 제작까지 함께 도와주는 예비창업가용 AI 협업도구",
    "description": "어치브모먼트는 창업팀의 사업 수행 과정을 AI로 구조화하고, 주관기관이 팀별 진척도와 성과를 데이터로 관리할 수 있도록 돕는 AI 업무설계·협업 SaaS 기업입니다. 핵심 서비스인 Blaybus Work는 목표 입력만으로 Agenda·Work·Task 기반 실행계획을 자동 설계하고, 업무 수행 과정, 산출물, 투입시간, AI 주간리포트를 통합 관리합니다. 이를 통해 참여팀은 체계적으로 실행하고, 주관기관은 선정팀의 실제 진척과 후속지원 대상을 객관적 데이터로 확인할 수 있습니다.",
    "website": "https://work.blaybus.com",
    "email": "hutten@achvm.com",
    "contact": "070-4786-4086",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/742",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Blaybus Work"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "리포트"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "리포트"
    ],
    "techEvidence": "리포트",
    "priceText": [
      "Pro 플랜 (1인) / 월 구독 / 10,000원"
    ],
    "minPrice": 10000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: 무료 크레딧 500 제공"
    ],
    "recommendation": "데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Blaybus Work 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1308,
        "name": "Blaybus Work",
        "summary": "AI 업무설계 및 협업 플랫폼 - 아이디어만 입력하면 AI 팀원이 사업계획, 업무분장, 산출물 제작까지 함께 도와주는 예비창업가용 AI 협업도구",
        "website": "",
        "keywords": [
          "AI 팀원",
          "AI 회의록",
          "AI업무설계",
          "업무 관리",
          "프로젝트 관리",
          "협업 SaaS"
        ],
        "priceText": [
          "Pro 플랜 (1인) / 월 구독 / 10,000원"
        ],
        "priceNumber": 10000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: 무료 크레딧 500 제공"
        ],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "리포트"
      }
    ]
  },
  {
    "id": 748,
    "name": "주식회사 에이엑스 (AX Co,. Ltd.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/201181/263f2a20fde742c086cd19cb15f9980e.jpg",
    "summary": "- AI Agent PlatformAWorker는 AI 에이전트를 생성, 실행, 관리할 수 있는 통합 플랫폼. 사용자는 전문가가 사전 제작한 에이전트를 즉시 실행하거나, 자연어 기반으로 자신만의 에이전트를 직접 구축할 수 있음",
    "description": "**□ 기업명** 주식회사 에이엑스 **□ 솔루션명** AWorker - AI Agent Platform **□ 제품 비전** AWorker는 AI 에이전트를 생성, 실행, 관리할 수 있는 통합 플랫폼. 사용자는 전문가가 사전 제작한 에이전트를 즉시 실행하거나, 자연어 기반으로 자신만의 에이전트를 직접 구축할 수 있음. 에이전트는 추론, 계획, 실행, 리뷰를 자율적으로 수행하며, 사용자는 채팅 인터페이스를 통해 에이전트와 상호작용함",
    "website": "http://aworker.ax.co.kr/",
    "email": "axcorp@ax.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/748",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AWorker"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "노코드",
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "노코드/앱빌더",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "LLM, AI 에이전트, 에이전트, 노코드, 자동화, DB",
    "priceText": [
      "1000크레딧, 한글 1만 자(5-6p)-20크레딧 소요(Gpt-4o 기준) / CREDIT_TOKEN / 5,000원"
    ],
    "minPrice": 5000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free: 제한된 횟수로 기본 에이전트 실행(Trial의 개념)"
    ],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AWorker 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1319,
        "name": "AWorker",
        "summary": "- AI Agent PlatformAWorker는 AI 에이전트를 생성, 실행, 관리할 수 있는 통합 플랫폼. 사용자는 전문가가 사전 제작한 에이전트를 즉시 실행하거나, 자연어 기반으로 자신만의 에이전트를 직접 구축할 수 있음",
        "website": "",
        "keywords": [
          "AI",
          "AI 에이전트",
          "LLM 기반 AI 챗봇-비서",
          "MCP",
          "구독형 AI 솔루션",
          "기업용/사무용/개인용 에이전트",
          "노코드-자연어 기반 에이전트",
          "업무 자동화",
          "오피스 툴",
          "온톨로지"
        ],
        "priceText": [
          "1000크레딧, 한글 1만 자(5-6p)-20크레딧 소요(Gpt-4o 기준) / CREDIT_TOKEN / 5,000원"
        ],
        "priceNumber": 5000,
        "pricingKind": "usage",
        "benefits": [
          "Free: 제한된 횟수로 기본 에이전트 실행(Trial의 개념)"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "노코드",
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "노코드/앱빌더",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 노코드, 자동화, DB"
      }
    ]
  },
  {
    "id": 801,
    "name": "주식회사 퍼셀리",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187891/532c37694d2d4b8293258f1167a9b63b.png",
    "summary": "AI 기반 인플루언서 마케팅 & 모두의 어필리에이트 서비스 - 검증된 상위노출 블로거 시딩과 자체 솔루션으로 D2C 브랜드의 첫 매출을 만드는 모두의 AI 전용 패키지",
    "description": "인플루언서 마케팅, 이제 '매출'로 증명해야 합니다. 비싼 원고료를 쓰고도 매출이 따라오지 않거나, 한 번의 단발성 캠페인으로 끝나는 협업이 답답하지 않으셨나요? 퍼셀리는 D2C·이커머스 브랜드를 위한 매출 중심의 인플루언서 마케팅 파트너입니다. 단순 노출과 바이럴에 그치지 않고, 데이터로 검증된 인플루언서를 선별해 인지부터 구매·재구매까지 이어지는 풀퍼널 캠페인을 설계합니다. 자체 개발한 솔루션으로 성과를 100% 정확히 추적하고, 정산까지 자동화합니다. \"팔리는\" 인플루언서 마케팅이 무엇인지, 퍼셀리가 증명합니다. ✓ 매출 중심의 전략 설계 단순 노출에 그치지 않습니다. 풀퍼널로 연결되는 정교한 매출 설계 모델을 제안합니다. ✓ 퍼포먼스 시딩 나노·마이크로 인플루언서의 '팔리는 콘텐츠'를 발굴하고, 광고로 ROAS를 극대화합니다. 검증된 인플루언서를 어필리에이트 파트너로 전환해 지속 가능한 매출 채널을 구축합니다. ✓ 단발성이 아닌, 매출로 이어지는 풀퍼널 설계 PPL → 마",
    "website": "https://purselly.com",
    "email": "sales@purselly.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/801",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Purselly (퍼셀리)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "블로그",
      "광고",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "AI에이전트, 에이전트, 대시보드, 자동화",
    "priceText": [
      "모두의AI패키지 / 월 구독 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 블로그, SNS/광고 문구 근거가 필요한 초기 창업팀",
    "followerCount": 2,
    "likeCount": 5,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1389,
        "name": "Purselly (퍼셀리)",
        "summary": "AI 기반 인플루언서 마케팅 & 모두의 어필리에이트 서비스 - 검증된 상위노출 블로거 시딩과 자체 솔루션으로 D2C 브랜드의 첫 매출을 만드는 모두의 AI 전용 패키지",
        "website": "",
        "keywords": [
          "AI에이전트",
          "마케팅대행서비스",
          "블로그상위노출",
          "어필리에이트솔루션",
          "이커머스자사몰",
          "인플루언서마케팅"
        ],
        "priceText": [
          "모두의AI패키지 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "블로그",
          "광고",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "AI에이전트, 에이전트, 대시보드, 자동화"
      }
    ]
  },
  {
    "id": 645,
    "name": "에브라임 시드(Ephraim Seed)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/167717/2908fa55ba7f46d584fa5e45ab78cc44.png",
    "summary": "AI 기반 1인 소상공인 CCTV 모니터링 SaaS 플랫폼 : \"스터디카페·무인매장을 위한 행동 인식 기반 AI CCTV 관제 시스템.\"",
    "description": "현장에서 시작된, 현장을 위한 AI 운영 솔루션에브라임 시드는 무인매장 운영 자동화에 특화된 AI 솔루션 사업부입니다. 인천에 기반을 두고 있으며, 수도권에서 12개 이상의 스터디카페를 직접 운영하는 에브라임 그룹의 운영 노하우를 기술로 옮기는 일을 합니다. 우리는 운영자입니다, 솔루션 업체이기 전에대부분의 CCTV·매장관리 솔루션은 IT 기업이 만들어 매장에 파는 구조로 만들어집니다. 에브라임 시드는 그 반대입니다. 인천·부천·서울에 12개가 넘는 스터디카페를 직접 운영하면서, 우리가 매일 겪는 문제 — 16채널 CCTV를 실시간으로 다 볼 수 없다는 것, 사고는 항상 늦게 발견된다는 것, 일률적인 알림은 결국 무시하게 된다는 것 — 를 해결하기 위해 직접 만든 시스템에서 출발했습니다. 자체 매장에서 검증을 끝낸 솔루션만 외부에 공개합니다. 그래서 모든 기능이 \"있으면 좋은 기능\"이 아니라 \"없으면 운영이 안 되는 기능\"입니다. 우리가 만드는 것핵심 제품은 행동인식 기반 AI",
    "website": "https://ephseed.pages.dev/",
    "email": "namho8816@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/645",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "에브라임 시드(Ephraim Seed)"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "피드백",
      "영상",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "영상",
      "자동화"
    ],
    "techEvidence": "분석, 자동화",
    "priceText": [
      "베이직 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 영상, 자동화 근거가 필요한 초기 창업팀",
    "followerCount": 6,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1174,
        "name": "에브라임 시드(Ephraim Seed)",
        "summary": "AI 기반 1인 소상공인 CCTV 모니터링 SaaS 플랫폼 : \"스터디카페·무인매장을 위한 행동 인식 기반 AI CCTV 관제 시스템.\"",
        "website": "https://ephseed.pages.dev/",
        "keywords": [
          "AI CCTV",
          "YOLO",
          "매장관리",
          "무인매장",
          "스터디카페",
          "영상분석",
          "이상행동탐지",
          "자동알림",
          "텔레그램알림",
          "행동인식"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "영상",
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백",
          "영상",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 자동화"
      }
    ]
  },
  {
    "id": 574,
    "name": "(주)바이비드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189836/250d1516c7814be69a0794ea51e8187b.png",
    "summary": "AI Video 자동편집생성 솔루션 : 텍스트 명령만 입력하면 AI가 영상 생성부터 자동편집까지 원스톱으로 처리해주는 솔루션입니다",
    "description": "㈜바이비드는 **AI 영상 자동편집 솔루션**을 개발하는 스타트업입니다. 자체 개발한 **KVID AI([kvid.ai](http://kvid.ai))**를 통해 AI 영상 생성부터 편집까지 원스톱으로 자동화하는 서비스를 제공합니다. [주요 사업] 기존 AI 영상 생성 도구는 짧은 클립 생성에 머물러 있고, 전문 영상 편집 도구는 사용이 복잡하다는 한계가 있습니다. 바이비드는 이 두 영역을 결합한 **Video AI Agent**를 개발하여, 사용자가 텍스트 명령만 입력하면 AI가 자동으로 영상을 편집·렌더링하는 솔루션을 제공합니다. 이를 통해 기존 수동 편집 대비 작업 시간을 수십 배 단축하고, 영상 제작 비용을 크게 절감할 수 있습니다. [타깃 고객] -유튜브·인스타그램 등 콘텐츠 크리에이터 -쇼핑몰·커머스 운영자 -마케팅 에이전시 및 영상 제작 대행사 -지식 서비스 기반 중소기업(법무법인 등) [차별점] -AI 영상 생성 + AI 자동편집 + 사용자 직접 수정",
    "website": "https://kvid.ai",
    "email": "kvidai030@gmail.com",
    "contact": "070-7913-7585",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/574",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "KVID AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "영상",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "영상",
      "이미지",
      "자동화"
    ],
    "techEvidence": "AI 모델, 이미지, 영상 생성, 자동화, API",
    "priceText": [
      "베이직 요금제 (1개월 30만원/ vat 별도) / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 영상, 이미지 근거가 필요한 초기 창업팀",
    "followerCount": 6,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1076,
        "name": "KVID AI",
        "summary": "AI Video 자동편집생성 솔루션 : 텍스트 명령만 입력하면 AI가 영상 생성부터 자동편집까지 원스톱으로 처리해주는 솔루션입니다",
        "website": "",
        "keywords": [
          "AI영상생성",
          "AI영상편집",
          "API솔루션",
          "Video Agent",
          "쇼츠제작",
          "영상자동화",
          "이미지생성",
          "자동편집",
          "콘텐츠제작",
          "크리에이터툴"
        ],
        "priceText": [
          "베이직 요금제 (1개월 30만원/ vat 별도) / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "영상",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "영상",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 모델, 이미지, 영상 생성, 자동화, API"
      }
    ]
  },
  {
    "id": 823,
    "name": "주식회사인트윈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191182/2b100569bcbb487b8494bbd636618d82.png",
    "summary": "사업계획서부터 마케팅까지 맞춤 비대면 1:1 멘토링",
    "description": "인트윈은 기업의 인재 성장과 조직 역량 강화를 위한 **AI 기반 HRD·멘토링 솔루션**을 개발하는 기업입니다. 비대면 환경에서도 실질적인 직무 교육과 경험 전수가 가능하도록, 멘토링 플랫폼과 AI 분석 기술을 결합한 SaaS 솔루션을 제공합니다. 인트윈은 단순 교육 플랫폼이 아닌 “**사람의 경험과 데이터를 연결하는 AI 성장 플랫폼**”을 지향합니다. 검증된 전문가 멘토와 멘티를 연결하는 1:1 멘토링 서비스부터, 대화 데이터를 기반으로 성과를 분석하고 **자동 보고서를 생성하는** AI 챗봇 솔루션까지 통합 제공하여 기업의 인재 육성과 조직 운영 효율화를 지원합니다. 인트윈은 사수 AI를 통해 기업 내 축적된 데이터를 체계적으로 관리하고, 별도의 사수나 전담 인력이 없어도 업무 노하우를 기반으로 한 AI 챗봇을 구축·활용할 수 있는 솔루션을 제공합니다. 이를 통해 기업은 반복적인 업무 문의를 줄이고, **조직 내 지식과 경험을 효과적으로 자산화**할 수 있습니다. 특",
    "website": "https://intw.co.kr/",
    "email": "mind@intw.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/823",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "사수래",
      "사수래 AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "리포트",
      "컨설팅",
      "교육",
      "DB설계"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "LLM, 분석, 리포트, 보고서, STT, 음성, DB",
    "priceText": [
      "베이직 / 월 구독 / 400,000원",
      "기업형 AI 챗봇 요금제 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 400000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, 리포트 근거가 필요한 초기 창업팀",
    "followerCount": 3,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1418,
        "name": "사수래",
        "summary": "사업계획서부터 마케팅까지 맞춤 비대면 1:1 멘토링",
        "website": "https://www.sasuraeclass.kr/",
        "keywords": [
          "AI분석",
          "멘토링플랫폼",
          "비대면멘토링",
          "사업계획서",
          "사업화",
          "전문가매칭",
          "정부지원사업",
          "직무멘토링",
          "창업교육",
          "창업컨설팅"
        ],
        "priceText": [
          "베이직 / 월 구독 / 400,000원"
        ],
        "priceNumber": 400000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "리포트",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "음성/STT/TTS"
        ],
        "techEvidence": "LLM, 분석, 리포트, 보고서, STT, 음성"
      },
      {
        "id": 1419,
        "name": "사수래 AI",
        "summary": "기업 맞춤 AI 챗봇 솔루션-LLM·STT 기반으로 멘토링 데이터를 분석하고 AI 챗봇 및 자동 보고서를 제공하는 기업 맞춤형 AI 솔루션",
        "website": "",
        "keywords": [
          "AI챗봇",
          "LLM",
          "STT",
          "감정분석",
          "기업교육",
          "대화분석",
          "멘토링AI",
          "자동보고서"
        ],
        "priceText": [
          "기업형 AI 챗봇 요금제 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "DB설계",
          "리포트",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 분석, 리포트, 보고서, STT, 음성, DB"
      }
    ]
  },
  {
    "id": 752,
    "name": "주식회사 엠케이디(MKD Co.,Ltd)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189855/9177c5de714c492cb14ff6347022d976.png",
    "summary": "기업용 도메인 특화 인공지능(AI) - 기업 문서를 이해하는 독자 AI ‘Keural’ 기반으로, 데이터 활용부터 AI 인프라까지 전 과정을 통합 제공하는 엔터프라이즈 AI 솔루션",
    "description": "주식회사 엠케이디는 기업이 AI를 직접 구축하고 운영할 수 있도록 모델부터 인프라까지 지원하는\u2028엔터프라이즈 AI 플랫폼 기업입니다. 독자 모델 ‘큐럴(Keural)’과 형식이 제각각인 문서를 자동으로 읽고 분류하는 Document AI로 기업 데이터의 구조를 이해합니다. 그리고 AI Chats를 통해\u2028내부 데이터를 실제 업무에 바로 활용할 수 있도록 지원합니다. 또한 온프레미스 AI 인프라 구축과 AI 학습 파이프라인 설계, 모델 파인튜닝 아웃소싱까지 제공하여 AI 도입부터 운영·개선까지 전 과정을 하나의 흐름으로 완성합니다.",
    "website": "https://keural.ai",
    "email": "sales@mkd.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/752",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "큐럴(Keural)"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "DB설계"
    ],
    "techTags": [
      "LLM/생성형AI",
      "DB/인프라"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "LLM, DB, 인프라",
    "priceText": [
      "구독 / 월 구독 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE: 텍스트 기반 채팅"
    ],
    "recommendation": "LLM/생성형AI, DB/인프라 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 큐럴(Keural) 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1327,
        "name": "큐럴(Keural)",
        "summary": "기업용 도메인 특화 인공지능(AI) - 기업 문서를 이해하는 독자 AI ‘Keural’ 기반으로, 데이터 활용부터 AI 인프라까지 전 과정을 통합 제공하는 엔터프라이즈 AI 솔루션",
        "website": "https://keural.ai/overview",
        "keywords": [
          "Document AI",
          "LLM",
          "기업용 AI",
          "도메인",
          "드라이브",
          "온프레미스",
          "채팅",
          "파운데이션모델",
          "프로젝트",
          "프롬프트"
        ],
        "priceText": [
          "구독 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: 텍스트 기반 채팅"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계"
        ],
        "techTags": [
          "LLM/생성형AI",
          "DB/인프라"
        ],
        "techEvidence": "LLM, DB, 인프라"
      }
    ]
  },
  {
    "id": 775,
    "name": "주식회사 칠로엔",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/203877/201043b6074649da90b5aeee303b2c8b.png",
    "summary": "IT 개발자를 위한 AI 배경음악 API 서비스",
    "description": "칠로엔은 방대한 음원들 사이에서 사용자 상황에 적합한 음악을 찾아주는 AI 기술을 보유한 AI 뮤직테크 스타트업입니다. 이를 통해 음악을 찾는 과정에서 번거로움을 겪는 사용자들의 불편함을 해결하고, 단 1분 안에 상황과 장면에 어울리는 음악을 검색·추천하는 솔루션을 제공하고 있습니다. 현재는 배경음악 서비스인 '링크뮤직'이라는 제품을 통해 영상 편집자, 브랜드·공간, 헬스케어 등 다양한 산업에 음악 솔루션을 제공합니다.",
    "website": "",
    "email": "ceo@chilloen.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/775",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "링크뮤직 API"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "SEO",
      "브랜딩",
      "영상"
    ],
    "techTags": [
      "RAG/지식검색",
      "업무 자동화/API"
    ],
    "deliverables": [
      "영상"
    ],
    "techEvidence": "검색, API",
    "priceText": [
      "Basic / 유/무료 혼합 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "RAG/지식검색, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 링크뮤직 API 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1356,
        "name": "링크뮤직 API",
        "summary": "IT 개발자를 위한 AI 배경음악 API 서비스",
        "website": "",
        "keywords": [
          "AI 음원",
          "API",
          "SaaS",
          "배경음악",
          "음악",
          "음악 AI",
          "음악 API",
          "음악 콘텐츠",
          "저작권 프리",
          "콘텐츠"
        ],
        "priceText": [
          "Basic / 유/무료 혼합 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SEO",
          "브랜딩",
          "영상"
        ],
        "techTags": [
          "RAG/지식검색",
          "업무 자동화/API"
        ],
        "techEvidence": "검색, API"
      }
    ]
  },
  {
    "id": 717,
    "name": "주식회사 비포웍스코퍼레이션",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/201302/7c7afc6518ee431a81439f9655499df3.png",
    "summary": "소상공인·1인 업장을 위한 다국어 문의 응대 AI 플랫폼 : 인스타그램·왓츠앱·라인 외국인 문의를 AI가 대신 응대해주는 다국어 고객상담 솔루션",
    "description": "**비포웍스 코퍼레이션은 브랜드, 웹, 마케팅, IT 솔루션을 통합적으로 기획·개발하는 디지털 비즈니스 회사입니다.** 초기 사업자의 브랜드 구축부터 웹사이트·서비스 개발, 고객 응대 자동화, 글로벌 고객 유입 전략까지 사업 성장에 필요한 디지털 실행을 함께 설계합니다. 최근에는 소규모 업장과 1인 사업자가 외국인 고객 문의에 더 쉽게 대응할 수 있도록, 다국어 AI 자동응대 솔루션 **Chatum AI**를 개발하고 있습니다. 비포웍스는 복잡한 기술을 실제 사업자가 쉽게 사용할 수 있는 형태로 바꾸는 것을 목표로, 실용적인 AI 기반 비즈니스 솔루션을 만들어가고 있습니다.",
    "website": "https://www.beforeworks.io",
    "email": "contact@beforeworks.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/717",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Chatum AI"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "SEO",
      "SNS 문구",
      "홈페이지",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "홈페이지",
      "자동화"
    ],
    "techEvidence": "자동화",
    "priceText": [
      "PRO / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "SNS/광고 문구, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 Chatum AI 같은 서비스가 필요한 팀",
    "followerCount": 6,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1271,
        "name": "Chatum AI",
        "summary": "소상공인·1인 업장을 위한 다국어 문의 응대 AI 플랫폼 : 인스타그램·왓츠앱·라인 외국인 문의를 AI가 대신 응대해주는 다국어 고객상담 솔루션",
        "website": "https://www.chatum.io",
        "keywords": [
          "AI",
          "GEO",
          "SEO",
          "SNS",
          "SNS자동화",
          "관광",
          "다국어상담",
          "외국어상담",
          "인스타자동화",
          "자동응대"
        ],
        "priceText": [
          "PRO / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "홈페이지",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      }
    ]
  },
  {
    "id": 697,
    "name": "주식회사 마하랩스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186938/33f89d6ab18344c19f5b0daed6003d8a.png",
    "summary": "365일 24시간 일하는 AI 퍼포먼스마케터를 채용해보세요.",
    "description": "AI 기술로서 퍼포먼스마케팅 업무를 자동화시키는 SaaS 솔루션 \"마하 MA-HA\"를 개발하는 IT 스타트업입니다. 기존의 광고대행 업계를 파괴하고, 투명하고 합리적인 비용으로 고객사의 성장을 돕고 있습니다.",
    "website": "https://ma-ha.io",
    "email": "contact@machlabs.co.kr",
    "contact": "070-8970-9586",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/697",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "퍼포먼스마케팅 범용 데이터 분석 AI SaaS 솔루션 MA-HA"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "광고",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "데이터분석, 데이터 분석, 분석, 자동화",
    "priceText": [
      "스탠다드 요금제 / 월 구독 / 39,000원"
    ],
    "minPrice": 39000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "데이터 분석/대시보드, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 퍼포먼스마케팅 범용 데이터 분석 AI SaaS 솔루션 MA-HA 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1249,
        "name": "퍼포먼스마케팅 범용 데이터 분석 AI SaaS 솔루션 MA-HA",
        "summary": "365일 24시간 일하는 AI 퍼포먼스마케터를 채용해보세요.",
        "website": "https://ma-ha.io",
        "keywords": [
          "AI 솔루션",
          "MA-HA",
          "SaaS",
          "SNS마케팅",
          "데이터분석",
          "마케팅",
          "마케팅 솔루션",
          "마케팅 프로그램",
          "마하",
          "퍼포먼스마케팅"
        ],
        "priceText": [
          "스탠다드 요금제 / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "광고",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "데이터분석, 데이터 분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 611,
    "name": "리바랩스 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186516/08bc8b1d1aa24d2b8708aefced31f699.png",
    "summary": "사업 의사 결정에 필요한 모든 컨설팅 분석 보고서를 이메일로 편하게 받아 보세요!",
    "description": "리바랩스 주식회사는 기술에만 치우치지 않고 Reality(현실)에서 실제로 중요한 문제를 포착하고, Balance(균형)로 기술과 일상을 조화롭게 접목하여 Labs(연구)에서 실험과 검증을 통해 효과적인 서비스를 제공하고자 IT/AI 분야의 10~20년 이상 된 전문가들이 모여 2024년 4월 설립되었습니다. 고도화된 인공지능 기술(멀티에이전트, 생성형 AI 등)을 누구나 직관적으로 누릴 수 있는 유용한 서비스와 매력적인 콘텐츠로 전환하는 딥테크 스타트업입니다. 정보의 신뢰성을 높이는 B2B 의사결정 솔루션인 AMEET(에이밋)부터 대중의 일상에 즐거움을 더하는 인터랙티브 엔터테인먼트(게임, 미디어 플랫폼)까지 아우르며, 기술과 사람을 연결해 더 나은 디지털 경험을 제공하는 것을 기업 핵심 비전을 바탕으로 하여, 고신뢰 AI 비즈니스 솔루션의 시장 표준화, AI 융합 킬러 콘텐츠 및 미디어 생태계 확장을 목표로 다각화된 포트폴리오 기반 지속 가능한 스케일업을 추구합니다.",
    "website": "https://rebalabs.com/",
    "email": "eco_eko@naver.com",
    "contact": "010-3331-0235",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/611",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AMEET"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "고객검증/시장조사",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "리포트",
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "생성형, 에이전트, 멀티에이전트, 분석, 보고서",
    "priceText": [
      "1000크레딧 / CREDIT_TOKEN / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 리포트, 컨설팅 근거가 필요한 초기 창업팀",
    "followerCount": 4,
    "likeCount": 2,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1477,
        "name": "AMEET",
        "summary": "사업 의사 결정에 필요한 모든 컨설팅 분석 보고서를 이메일로 편하게 받아 보세요!",
        "website": "https://drive.google.com/file/d/1iw7ku0Oxy0SwkER9-L7YnZdO9Be2SLj_/view?usp=sharing",
        "keywords": [
          "AMEET",
          "보고서",
          "분석",
          "의사결정",
          "이메일서비스",
          "컨설팅"
        ],
        "priceText": [
          "1000크레딧 / CREDIT_TOKEN / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "리포트",
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "생성형, 에이전트, 멀티에이전트, 분석, 보고서"
      }
    ]
  },
  {
    "id": 813,
    "name": "주식회사 한국데이터소프트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/177533/8b0b3aaab0d94c7b8da31371a9320942.png",
    "summary": "비싼 시장조사 전문가나 변호사, 세무사 자문료 없이 시장조사, 법률 및 세무에 있어 이슈 없이 진행할 수 있도록, 창업자가 오직 비즈니스 성장에만 몰입할 수 있는 환경을 구축하는 modu-AI 솔루션",
    "description": "값 비싼 시장조사 전문가나 변호사, 세무사 자문료 없이 시장조사, 법률 및 세무에 있어 이슈 없이 진행할 수 있도록, 창업자가 오직 비즈니스 성장에만 몰입할 수 있는 환경을 구축하는 modu-AI 솔루션을 개발한 주식회사 한국데이터소프트입니다.",
    "website": "https://modu-ai.cloud",
    "email": "rladnwnd10000@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/813",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AI 솔루션 등록(modu-Ai)"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "시장조사"
    ],
    "techTags": [
      "시장조사/리서치"
    ],
    "deliverables": [
      "시장/수요조사"
    ],
    "techEvidence": "시장조사",
    "priceText": [
      "요금제 / 월 구독 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 시장/수요조사 근거가 필요한 초기 창업팀",
    "followerCount": 5,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1407,
        "name": "AI 솔루션 등록(modu-Ai)",
        "summary": "비싼 시장조사 전문가나 변호사, 세무사 자문료 없이 시장조사, 법률 및 세무에 있어 이슈 없이 진행할 수 있도록, 창업자가 오직 비즈니스 성장에만 몰입할 수 있는 환경을 구축하는 modu-AI 솔루션",
        "website": "",
        "keywords": [
          "경영",
          "백오피스",
          "법률",
          "세무",
          "시장조사"
        ],
        "priceText": [
          "요금제 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "시장/수요조사"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "시장조사"
        ],
        "techTags": [
          "시장조사/리서치"
        ],
        "techEvidence": "시장조사"
      }
    ]
  },
  {
    "id": 715,
    "name": "주식회사 비즈크러시",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186988/d9887d1e4a1f4ec5be54a72c6b3b46a1.png",
    "summary": "45개국어 실시간 통역 지원 다국어 미팅 자동화 솔루션 : 해외 파트너와의 회의를 AI가 실시간 통번역·자동 요약해 언어 장벽 없이 진행하세요",
    "description": "BizCrush는 AI 기반 다국어 실시간 미팅 노트테이커입니다. 회의 중 발화 내용을 실시간으로 전사 및 통역/더빙을 지원하고, 미팅 종료 후 요약 및 후속 업무를 자동화합니다. 한국어·영어·일본어·중국어 등 45개 언어를 지원하며, 해외 법인·파트너와의 다국어 소통 장벽을 해소합니다. 자체 개발한 Speech Enhancement 기술로 소음 환경에서도 높은 음성 인식 정확도를 제공하며, Zoom·Google Meet 봇 연동 및 데스크톱·모바일 앱(iOS/Android)을 통해 온·오프라인 미팅 모두 지원합니다. 컨퍼런스 발표 시 실시간 자막 오버레이 기능도 제공합니다. 현재 공공기관·대기업 해외 영업팀 등 다양한 버티컬에서 도입하고 있으며, API 및 MCP 연동을 통해 기업 내 CRM·워크플로우 자동화도 지원합니다.",
    "website": "https://bizcrush.ai",
    "email": "founders@bizcrush.ai",
    "contact": "010-5965-7271",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/715",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "BizCrush"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "발표자료",
      "자동화"
    ],
    "techTags": [
      "음성/STT/TTS",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "자동화"
    ],
    "techEvidence": "STT, 음성, 자동화, API, 워크플로우, 연동",
    "priceText": [
      "프로 (1명 구좌) / CREDIT_TOKEN / 40,000원"
    ],
    "minPrice": 40000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free: 가입 후 3시간동안 무료로 사용하실 수 있습니다."
    ],
    "recommendation": "음성/STT/TTS, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 BizCrush 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1269,
        "name": "BizCrush",
        "summary": "45개국어 실시간 통역 지원 다국어 미팅 자동화 솔루션 : 해외 파트너와의 회의를 AI가 실시간 통번역·자동 요약해 언어 장벽 없이 진행하세요",
        "website": "https://bizcrush.app/ko/blog/%EB%B9%A0%EB%A5%B8-%EC%8B%9C%EC%9E%91-%EA%B0%80%EC%9D%B4%EB%93%9C",
        "keywords": [
          "AI 미팅",
          "STT",
          "글로벌 소통",
          "다국어 회의",
          "미팅 노트테이커",
          "실시간 번역",
          "음성인식",
          "자동 요약",
          "화상회의",
          "회의록 자동화"
        ],
        "priceText": [
          "프로 (1명 구좌) / CREDIT_TOKEN / 40,000원"
        ],
        "priceNumber": 40000,
        "pricingKind": "usage",
        "benefits": [
          "Free: 가입 후 3시간동안 무료로 사용하실 수 있습니다."
        ],
        "deliverables": [
          "IR/발표자료",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "발표자료",
          "자동화"
        ],
        "techTags": [
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "STT, 음성, 자동화, API, 워크플로우, 연동"
      }
    ]
  },
  {
    "id": 797,
    "name": "주식회사 파스업",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186501/beeb1ad1d0a74ba0b8ac51cfa011c244.webp",
    "summary": "파스업 데이터 인텔리전스 플랫폼 - 데이터 분석과 AI 개발에 필요한 도구를 설치 없이 브라우저에서 바로 쓸 수 있는 데이터 분석 서비스",
    "description": "파스업(PAASUP) 은 2024년 설립된 딥테크 스타트업으로, 기업과 공공기관이 AI를 제대로 활용할 수 있도록 데이터 인프라를 제공합니다. AI 도입이 실패하는 이유는 대부분 모델이 아니라 데이터 환경에 있습니다. 파스업은 이 문제를 해결하기 위해 만들어졌습니다. [ 주요 현황 ] - 설립: 2024년 - 핵심 팀: 엔터프라이즈 PaaS·DevOps 10년 이상 경력 - GS 인증 1등급 획득 - 특허 3건 보유 (OSaaS, Binup, KM) - NVIDIA 그랜드 챌린지 Top 15 선정 - 주요 고객: 관세청, 롯데카드, 부산은행 외 [ 모두의 창업 참가자를 위한 제공 서비스 ] 파스업은 모두의 창업 참가자에게 DIP(Data Intelligence Platform)를 SaaS 형태로 무상 제공합니다. 별도 설치 없이 브라우저에서 바로 데이터 분석과 AI 개발 환경을 사용할 수 있습니다. 데이터 분석 도구 - JupyterLab : Python 데이터 분석·시각화 -",
    "website": "https://paasup.io",
    "email": "steward@paasup.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/797",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "PAASUP DIP"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR",
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "자동화"
    ],
    "techEvidence": "LLM, AI 모델, RAG, 데이터 분석, 대시보드, 분석, 자동화, 데이터베이스, 인프라",
    "priceText": [
      "4core, 16g mem / 월 구독 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, RAG/지식검색 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 PAASUP DIP 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1385,
        "name": "PAASUP DIP",
        "summary": "파스업 데이터 인텔리전스 플랫폼 - 데이터 분석과 AI 개발에 필요한 도구를 설치 없이 브라우저에서 바로 쓸 수 있는 데이터 분석 서비스",
        "website": "",
        "keywords": [
          "AI 개발",
          "Flowise",
          "jupyterlab",
          "MLflow",
          "Open WebUI",
          "postgresql",
          "Superset",
          "데이터 분석",
          "브라우저 즉시 실행"
        ],
        "priceText": [
          "4core, 16g mem / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 모델, RAG, 데이터 분석, 대시보드, 분석, 자동화, 데이터베이스, 인프라"
      }
    ]
  },
  {
    "id": 760,
    "name": "주식회사 웹몬스타",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/198943/1e01a8befc3542c9b569d91ac3d9ffcf.png",
    "summary": "창업 초기 기업을 위한 문서 학습(RAG) 기반 AI 전문 상담 및 고객응대 솔루션 - 초기 창업팀의 CS 인건비를 0원으로! 문서 학습(RAG)과 실시간 DB 연동을 지원하는 24시간 AI 비서",
    "description": "",
    "website": "",
    "email": "home@barunweb.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/760",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "늘.비서"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "홈페이지",
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "RAG/지식검색",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "홈페이지",
      "자동화"
    ],
    "techEvidence": "RAG, 자동화, 연동, DB",
    "priceText": [
      "7,500만 토큰 / CREDIT_TOKEN / 450,000원"
    ],
    "minPrice": 450000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "실제 사례: 실제적용사이트 예시",
      "무료체험: 회원가입 후 무료체험 가능"
    ],
    "recommendation": "홈페이지, 자동화 결과물로 첫 고객 반응을 빠르게 확인하려는 늘.비서 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 4,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1339,
        "name": "늘.비서",
        "summary": "창업 초기 기업을 위한 문서 학습(RAG) 기반 AI 전문 상담 및 고객응대 솔루션 - 초기 창업팀의 CS 인건비를 0원으로! 문서 학습(RAG)과 실시간 DB 연동을 지원하는 24시간 AI 비서",
        "website": "",
        "keywords": [
          "AI챗봇, 고객응대, CS자동화, 매출상승, 인건비절감, RAG, 24시간상담, 업무효율화, CRM, 스타트업비서"
        ],
        "priceText": [
          "7,500만 토큰 / CREDIT_TOKEN / 450,000원"
        ],
        "priceNumber": 450000,
        "pricingKind": "usage",
        "benefits": [
          "실제 사례: 실제적용사이트 예시",
          "무료체험: 회원가입 후 무료체험 가능"
        ],
        "deliverables": [
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "홈페이지",
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "RAG, 자동화, 연동, DB"
      }
    ]
  },
  {
    "id": 778,
    "name": "주식회사 커넥트브릭(CONNECT BRICK Co. , Ltd)",
    "logo": "",
    "summary": "소상공 창업 대상 사진 촬영, 디자인외주를 대체하는 생성AI 서비스",
    "description": "",
    "website": "",
    "email": "jhs@connectbrick.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/778",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "젝터스튜디오"
    ],
    "majorTags": [
      "디자인/브랜딩",
      "영상/이미지"
    ],
    "detailTags": [
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성"
    ],
    "deliverables": [
      "이미지"
    ],
    "techEvidence": "생성AI, 사진",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "젝터스튜디오 같은 서비스가 필요한 예비창업자와 초기 팀",
    "followerCount": 4,
    "likeCount": 2,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": [
      {
        "id": 1361,
        "name": "젝터스튜디오",
        "summary": "소상공 창업 대상 사진 촬영, 디자인외주를 대체하는 생성AI 서비스",
        "website": "",
        "keywords": [],
        "priceText": [],
        "priceNumber": null,
        "pricingKind": "unknown",
        "benefits": [],
        "deliverables": [
          "이미지"
        ],
        "majorTags": [
          "디자인/브랜딩",
          "영상/이미지"
        ],
        "detailTags": [
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성"
        ],
        "techEvidence": "생성AI, 사진"
      }
    ]
  },
  {
    "id": 622,
    "name": "모프트에이아이 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/111666/0e64220e20e746d1b178298029e40e03.png",
    "summary": "최신 자료 검색, 경쟁사 분석, 기자 탐색, 기업·미디어 분석, 피치 초안 작성, 발송 운영, 답장 관리, 리포트 기능을 통합한 AI 기반 PR·경영관리 솔루션",
    "description": "AI 기반 PR 워크스페이스 **프레서([Pressor.ai](http://Pressor.ai))** 를 운영하는 PR 테크 기업입니다. 프레서는 보도자료 작성, 기자 리서치, 피치 메일 작성, 미디어 모니터링, 캠페인 관리, 성과 리포트까지 PR 실무 전 과정을 하나의 AI 업무 환경에서 처리할 수 있도록 만든 서비스입니다. 기존 PR 업무는 자료 조사, 메시지 정리, 기자 리스트업, 초안 작성, 발송 준비, 결과 정리까지 여러 툴과 수작업에 흩어져 있었습니다. 프레서는 이 과정을 하나의 워크스페이스로 모아 **“리서치부터 실행 가능한 PR 결과물까지”** 빠르게 만들 수 있도록 돕습니다. --- **프레서는 어떤 서비스인가요?** 프레서는 단순한 AI 챗봇이 아닙니다. ChatGPT처럼 자유롭게 질문하고 답변을 받을 수 있으면서도, PR 업무에 필요한 기능을 확인 후 실행할 수 있는 **AI PR 운영 워크스페이스**입니다. 사용자는 하나의 채팅창에서 다음 작업을",
    "website": "https://moftai.com",
    "email": "daniel.kim@moftai.com",
    "contact": "050-6564-8261",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/622",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "PRESSOR.AI"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "고객검증/시장조사",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "IR",
      "랜딩페이지",
      "시장조사",
      "리포트",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "랜딩페이지",
      "리포트",
      "자동화"
    ],
    "techEvidence": "LLM, GPT, ChatGPT, 리서치, 경쟁사, 랜딩, 검색, 데이터 분석, 분석, 리포트",
    "priceText": [
      "Starter / 월 구독 / 148,500원"
    ],
    "minPrice": 148500,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Starter 1주일 무료: 월 발송 150건 / 수동 크롤링 10개 도메인 등"
    ],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 IR/발표자료, 랜딩페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 4,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1135,
        "name": "PRESSOR.AI",
        "summary": "최신 자료 검색, 경쟁사 분석, 기자 탐색, 기업·미디어 분석, 피치 초안 작성, 발송 운영, 답장 관리, 리포트 기능을 통합한 AI 기반 PR·경영관리 솔루션",
        "website": "",
        "keywords": [
          "AI 솔루션",
          "PR 솔루션",
          "PR 자동화",
          "경영관리 솔루션",
          "경쟁사 분석",
          "데이터 분석",
          "리서치",
          "마케팅 자동화",
          "문서 자동화",
          "업무 자동화"
        ],
        "priceText": [
          "Starter / 월 구독 / 148,500원"
        ],
        "priceNumber": 148500,
        "pricingKind": "fixed",
        "benefits": [
          "Starter 1주일 무료: 월 발송 150건 / 수동 크롤링 10개 도메인 등"
        ],
        "deliverables": [
          "IR/발표자료",
          "랜딩페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "고객검증/시장조사",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "IR",
          "랜딩페이지",
          "시장조사",
          "리포트",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, GPT, ChatGPT, 리서치, 경쟁사, 랜딩, 검색, 데이터 분석, 분석, 리포트, 자동화"
      }
    ]
  },
  {
    "id": 816,
    "name": "주식회사 헥사아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/2458/8f88a461498c4b86bfd412c7d0f75493.jpg",
    "summary": "아이디어를 '말'하면, AI가 시장·마진·규제 실데이터를 더해 사업계획으로 빚어냅니다",
    "description": "(주)헥사아이(HEXAI)는 SI·SM 소프트웨어 개발과 HACCP 인증 식품 제조를 양대 본업으로 운영하는 벤처기업입니다. 두 본업에서 쌓은 기술과 도메인 경험을 토대로, 자사에서 직접 검증한 서비스를 독립 사업으로 키워내는 '벤처 빌더'형 성장 모델을 추구합니다. MyFactory는 그 일환으로, 제조업 예비창업자가 사업계획부터 제품개발·초기운영까지 실데이터 기반으로 준비할 수 있도록 돕는 AI 솔루션입니다.",
    "website": "",
    "email": "jpark@hexai.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/816",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "MyFactory.kr"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR"
    ],
    "techTags": [
      "시장조사/리서치",
      "노코드/앱빌더",
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "IR/발표자료"
    ],
    "techEvidence": "시장분석, 빌더, 분석",
    "priceText": [
      "프로 플랜 / 월 구독 / 39,000원"
    ],
    "minPrice": 39000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE: 아이템에 대한 시장분석을 도와드려요"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 IR/발표자료 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 4,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1411,
        "name": "MyFactory.kr",
        "summary": "아이디어를 '말'하면, AI가 시장·마진·규제 실데이터를 더해 사업계획으로 빚어냅니다",
        "website": "",
        "keywords": [
          "IR",
          "경영전략",
          "사업계획"
        ],
        "priceText": [
          "프로 플랜 / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: 아이템에 대한 시장분석을 도와드려요"
        ],
        "deliverables": [
          "IR/발표자료"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR"
        ],
        "techTags": [
          "시장조사/리서치",
          "노코드/앱빌더",
          "데이터 분석/대시보드"
        ],
        "techEvidence": "시장분석, 빌더, 분석"
      }
    ]
  },
  {
    "id": 577,
    "name": "(주)쓰리더블유",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186555/6f2eec70f5ae4cbd89e346b19501896e.png",
    "summary": "국내 최초, 핵심 7대 모듈을 단일 SaaS로 통합한 '인원 무제한 전 기능 무료' 올인원 업무 협업 플랫폼",
    "description": "***We Wave the World .*** *\"정체된 산업에 파동을 일으키다\"* **🏢 쓰리더블유(3W)는,** **AI와 플랫폼 기술을 중심으로 산업을 연결하여 SaaS·헬스케어·정부협력사업 아우르는 디지털 프로덕트 스튜디오입니다.** **💡3W의 차별점** **• W Core 모듈 기반 개발 견적 플랫폼** 단절된 산업의 지점들을 연결하고, **\"반복 가능한 성공 구조를 만드는 산업 설계자**\"로서 매번 시스템을 새로 구축하는 기존 방식에서 벗어나, **사업의 본질을 '개발'에서 '조립'으로 전환하는 혁신**을 이뤄내고 있습니다. 💻 **자체 플랫폼** • WITIM (위팀) — 국내 최초, 인원 무제한·전 기능 무료 올인원 업무 협업 SaaS • Medi-W (메디더블유) — 글로벌 의료 통합 플랫폼 **📈 보유 역량 및 성과** • 26.06 ISO 3종 (9001/14001/45001) 승인 완료 • 26.05 벤처인증 (혁신성장유형) 승",
    "website": "http://3w.ai.kr",
    "email": "codeb.lab.dev@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/577",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "WITIM (위팀)"
    ],
    "majorTags": [
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "홈페이지",
      "리포트",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "홈페이지",
      "리포트",
      "자동화"
    ],
    "techEvidence": "Gemini, 보고서, 자동화, 워크플로우, 연동",
    "priceText": [
      "추가 스토리지, 1TB 단위 / CAPACITY_BASED / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "1. 프로젝트 관리: 칸반 보드, 태스크 관리 (상태 워크플로우, 우선순위 의존성, 마일스톤)",
      "2. 실시간 메신저: 채널·DM, 파일 공유, 100ms 이하 지연",
      "3. 근태관리: GPS+WiFi 2중 인증 자동 출퇴근, 주 45/50/52시간 야간·휴일 자동 계산"
    ],
    "recommendation": "홈페이지, 리포트 결과물로 첫 고객 반응을 빠르게 확인하려는 WITIM (위팀) 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1482,
        "name": "WITIM (위팀)",
        "summary": "국내 최초, 핵심 7대 모듈을 단일 SaaS로 통합한 '인원 무제한 전 기능 무료' 올인원 업무 협업 플랫폼",
        "website": "",
        "keywords": [
          "AI SaaS",
          "ERP 그룹웨어 채팅",
          "HR 인사",
          "근태관리",
          "무료 SaaS",
          "업무 자동화",
          "연차 휴가 관리",
          "재무·회계·급여",
          "중소기업 (DX)",
          "프로젝트 관리"
        ],
        "priceText": [
          "추가 스토리지, 1TB 단위 / CAPACITY_BASED / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "usage",
        "benefits": [
          "1. 프로젝트 관리: 칸반 보드, 태스크 관리 (상태 워크플로우, 우선순위 의존성, 마일스톤)",
          "2. 실시간 메신저: 채널·DM, 파일 공유, 100ms 이하 지연",
          "3. 근태관리: GPS+WiFi 2중 인증 자동 출퇴근, 주 45/50/52시간 야간·휴일 자동 계산"
        ],
        "deliverables": [
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "홈페이지",
          "리포트",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "Gemini, 보고서, 자동화, 워크플로우, 연동"
      }
    ]
  },
  {
    "id": 768,
    "name": "주식회사 이스트북코리아",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/204854/836ed46f615846b58ca22477d5a33e5f.jpeg",
    "summary": "SaaS형 AI 글로벌 무역 워크스페이스 - 무역 업무를 위한 WEB 기반 구독형(SaaS) ERP",
    "description": "**회사 소개** 주식회사 이스트북코리아는 20년 무역 실무 경험을 바탕으로 설립된 IT 기업으로, 중소 무역기업을 위한 전용 ERP 시스템 **Eastbook**을 개발·운영하고 있습니다. 중소 무역기업은 여전히 엑셀·이메일·메신저 등 파편화된 도구에 의존하고 있으며, 반복되는 서류 업무를 위해 인건비를 지출하고 있습니다. 또한 기존의 ERP는 무역 업무에 적합하지 않은 경우가 많으며, 비용적 부담이 있어 접근성이 낮은 것이 현실입니다. 이스트북코리아의 **Eastbook**은 이러한 문제를 해결하는 통합 플랫폼으로, * 견적서·PO·PI·CI·PL 등 무역 서류 원클릭 자동 생성 * 프로젝트 관리 및 포스트 작성을 통한 업무 기록 누적 관리 * 홈페이지 및 제품 소개 페이지를 손쉽게 구현·수정 가능 * 간편한 회계 입력과 회사 내부 정보 관리 등 소규모 무역 업체가 소수의 인원으로 필수 업무를 수행할 수 있게 개발되었습니다. 또한 한국어·영어를 기본 지원하며, 필",
    "website": "https://eastbook.co/",
    "email": "ym0106@naver.com",
    "contact": "010-5530-7522",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/768",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "eastbook"
    ],
    "majorTags": [
      "사업계획서/IR",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "홈페이지"
    ],
    "techTags": [
      "랜딩페이지 빌더"
    ],
    "deliverables": [
      "사업계획서",
      "홈페이지"
    ],
    "techEvidence": "홈페이지",
    "priceText": [
      "작성 문서 개수 제한 / CAPACITY_BASED / 30,000원"
    ],
    "minPrice": 30000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "eastbook.co 참고 (web상에서 demo 체험 신청 시, ID/PW 공유): 기본 용량의 서류 및 포스트 작성 후 유료 전환"
    ],
    "recommendation": "사업계획서, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 eastbook 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1349,
        "name": "eastbook",
        "summary": "SaaS형 AI 글로벌 무역 워크스페이스 - 무역 업무를 위한 WEB 기반 구독형(SaaS) ERP",
        "website": "https://eastbook.co/",
        "keywords": [
          "AI agent 도입을 위한 무역 date 누적",
          "WEB 기반 구독형  ERP",
          "맥락기반 비지니스 관리",
          "무역업",
          "홈페이지 제작"
        ],
        "priceText": [
          "작성 문서 개수 제한 / CAPACITY_BASED / 30,000원"
        ],
        "priceNumber": 30000,
        "pricingKind": "usage",
        "benefits": [
          "eastbook.co 참고 (web상에서 demo 체험 신청 시, ID/PW 공유): 기본 용량의 서류 및 포스트 작성 후 유료 전환"
        ],
        "deliverables": [
          "사업계획서",
          "홈페이지"
        ],
        "majorTags": [
          "사업계획서/IR",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "홈페이지"
        ],
        "techTags": [
          "랜딩페이지 빌더"
        ],
        "techEvidence": "홈페이지"
      }
    ]
  },
  {
    "id": 771,
    "name": "주식회사 제이투모로우원",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/208697/3fc52fafe185434c9bc9df76f32b9c9a.jpg",
    "summary": "창업기업의 견적서, 거래명세서, 거래처 관리, 일정 업무를 AI로 쉽고 빠르게 자동화해요.",
    "description": "㈜제이투모로우원은 AI 기반 업무 자동화와 웹 서비스 개발 역량을 바탕으로 창업기업과 중소기업의 경영 행정 업무를 효율화하는 솔루션을 제공하는 기업입니다. 당사는 거래처 관리, 견적서 및 거래명세서 발행, 일정 관리, 경영 데이터 분석 등 기업 운영에 필요한 핵심 업무를 웹 기반 시스템으로 통합하여 제공하고 있습니다. 특히 창업 초기 기업이 반복적인 문서 작성과 행정 업무에 소요하는 시간을 줄이고, 핵심 사업 개발과 운영에 집중할 수 있도록 지원합니다. 주요 솔루션인 **AI 경영지원 관리시스템**은 별도 설치 없이 웹 브라우저에서 계정 생성 후 즉시 사용할 수 있는 SaaS형 경영지원 솔루션입니다. 거래처 정보와 품목 데이터를 기반으로 견적서와 거래명세서를 손쉽게 작성·발행할 수 있으며, 공지사항, 1:1 문의, 주요일정, 연차관리, 재고입고현황 등 다양한 경영지원 기능을 통합 제공합니다. ㈜제이투모로우원은 AI와 데이터 기반의 경영지원 시스템을 통해 창업기업의 업무 효율성을",
    "website": "https://jtom1.com",
    "email": "jsk@jtom1.com",
    "contact": "062-1899-3862",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/771",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AI 경영지원솔루션"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "데이터 분석, 분석, 자동화",
    "priceText": [
      "베이직 요금 / 월 구독 / 1,100,000원"
    ],
    "minPrice": 1100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "데이터 분석/대시보드, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 경영지원솔루션 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1352,
        "name": "AI 경영지원솔루션",
        "summary": "창업기업의 견적서, 거래명세서, 거래처 관리, 일정 업무를 AI로 쉽고 빠르게 자동화해요.",
        "website": "",
        "keywords": [
          "AI 경영지원",
          "거래처 관리",
          "업무자동화",
          "일정 업무",
          "창업기업 관리"
        ],
        "priceText": [
          "베이직 요금 / 월 구독 / 1,100,000원"
        ],
        "priceNumber": 1100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "데이터 분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 839,
    "name": "팔레트 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/204451/8aed9ec909e14360b4de6d96bcfd7972.png",
    "summary": "블로그부터 숏폼 영상까지, AI 에이전트 하나로 끝내는 마케팅 자동화의 완성",
    "description": "ARTFUL CRAFT, COLORFUL TECH. 팔레트는 AI기술을 기반으로 예술성과 기술성을 조화롭게 담아내 광고 전문가의 섬세한 감각과 AI의 무한한 확장성이 만나 브랜드와 마케팅의 혁신을 만들어가는 AI크리에이티브 에이전시입니다. AI Creative Partner 현실의 한계를 뛰어넘는 AI 크리에이티브 브랜드의 스토리를 담은 감각적인 영상 및 이미지 제작 크리에이티브 기획부터 AI R&D, 생성, 제작, 편집까지 AI Agent solution 맞춤형 AX 컨설팅 기반 초개인화 AI 에이전트 구축 서비스 기획, 영업, 마케팅팀 등 기업의 부서별 워크프로세스 기반 기업의 고유한 데이터를 실무에 즉시 활용할 수 있도록 솔루션 제공",
    "website": "http://pltt.xyz",
    "email": "jhmoon@pltt.xyz",
    "contact": "010-3491-9181",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/839",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Palette Marketing Platform MAO"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "블로그",
      "광고",
      "브랜딩",
      "영상",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techTags": [
      "AI 에이전트",
      "이미지 생성",
      "영상 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "영상",
      "이미지",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "AI 에이전트, 에이전트, 이미지, 숏폼, 자동화",
    "priceText": [
      "프로 플랜 / 유/무료 혼합 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "프리 플랜"
    ],
    "recommendation": "AI 에이전트, 이미지 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Palette Marketing Platform MAO 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1449,
        "name": "Palette Marketing Platform MAO",
        "summary": "블로그부터 숏폼 영상까지, AI 에이전트 하나로 끝내는 마케팅 자동화의 완성",
        "website": "",
        "keywords": [
          "MAO(Multi-Agent Orchestration)",
          "Palette AI",
          "마케팅자동화에이전트"
        ],
        "priceText": [
          "프로 플랜 / 유/무료 혼합 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [
          "프리 플랜"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "영상",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "블로그",
          "광고",
          "브랜딩",
          "영상",
          "이미지",
          "자동화",
          "컨설팅"
        ],
        "techTags": [
          "AI 에이전트",
          "이미지 생성",
          "영상 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "AI 에이전트, 에이전트, 이미지, 숏폼, 자동화"
      }
    ]
  },
  {
    "id": 610,
    "name": "루먼랩 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191922/a5c481a0b3d5493f90defb0c0187a3a4.png",
    "summary": "미성년자 유해콘텐츠 AI 모더레이션 - 해외 모더레이션이 놓치는 한국어 및 국내 환경 기반 유해 콘텐츠를 생성되기 전에 탐지하는 K-모더레이션 API",
    "description": "루먼랩 주식회사는 AI 콘텐츠 생성 서비스 \"Wenit(위닛)\"을 개발·운영하는 AI 영상 분석 기술 전문 기업입니다. 2025년 11월 위닛 정식 출시 후 2개월 만에 5만 다운로드와 가입자 대비 93%의 활성 사용자율, 그리고 유료 결제 전환을 기록하며 실제 시장에서 AI 콘텐츠 생성 서비스 운영 노하우를 축적해 왔습니다. 위닛 세이프가드는 당사가 자체 서비스를 운영하는 과정에서 직접 체감한 문제의식에서 출발했습니다. AI 콘텐츠 생성 기능을 시장에 내놓는 순간 마주하게 되는 미성년자 관련 유해 콘텐츠 사고 리스크, 그리고 해외 범용 모더레이션 도구로는 한국어 표현과 국내 콘텐츠 맥락을 충분히 잡아내기 어렵다는 한계를 운영자 입장에서 체감하였고, 이를 외부 창업자도 즉시 활용 가능한 형태의 API로 발전시킨 결과물이 본 솔루션입니다. 당사는 카이스트, 서울대, 고려대 출신의 의사과학자 및 AI 엔지니어로 구성된 핵심 기술 팀을 보유하고 있습니다. 또한 자체 보유 데이터에",
    "website": "https://www.lumanlab.com",
    "email": "info@lumanlab.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/610",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "위닛 세이프가드"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "영상"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "영상"
    ],
    "techEvidence": "생성형, 분석, API, 연동",
    "priceText": [
      "건당 종량제(텍스트 40원·이미지 100원·영상 500원) / CAPACITY_BASED / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 영상 근거가 필요한 초기 창업팀",
    "followerCount": 4,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1122,
        "name": "위닛 세이프가드",
        "summary": "미성년자 유해콘텐츠 AI 모더레이션 - 해외 모더레이션이 놓치는 한국어 및 국내 환경 기반 유해 콘텐츠를 생성되기 전에 탐지하는 K-모더레이션 API",
        "website": "https://wenit-page.web.app/pages/safeguard",
        "keywords": [
          "AI 모더레이션",
          "API 연동",
          "멀티모달 분석",
          "미성년자 유해 콘텐츠 차단",
          "생성형 AI",
          "콘텐츠 검토",
          "콘텐츠 안전",
          "콘텐츠 필터링",
          "프롬프트 분석",
          "한국어 특화"
        ],
        "priceText": [
          "건당 종량제(텍스트 40원·이미지 100원·영상 500원) / CAPACITY_BASED / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "영상"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 분석, API, 연동"
      }
    ]
  },
  {
    "id": 613,
    "name": "리얼라이저블 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/196606/60c0941f34784892941f567e442368bd.png",
    "summary": "생산 제품명만 입력하면 공정/장비/KPI를 관리할 수 있는 전용 대시보드를 1분만에 생성해드립니다.",
    "description": "**[AI 기반 제조 공정 최적화 솔루션 기업]** 얼라이저블은 제조 현장의 운영 데이터를 구조화하고, 이를 KPI 기반 의사결정과 실행으로 연결하는 제조 특화 AI 기업입니다. 단순한 모니터링 도구가 아닌, 현장에서 발생하는 데이터를 해석하고 운영 개선 활동으로 연결하는 인프라를 구축합니다. 설립: 2022년 3월 주요 제품: AI 공장장 대상: 중견/중소 제조 기업 시스템 분야: AI 기반 MES, ERP, 자동제어, Multi AI Agent Orchestrator",
    "website": "https://realizable-ai.com",
    "email": "daniel.won@realizable.kr",
    "contact": "010-4449-9968",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/613",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Product Startup AI 제품 아이디어를 실제 생산 가능한 사업으로 전환하는 AI"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "대시보드, 인프라",
    "priceText": [
      "베이직 요금제 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "데이터 분석/대시보드, DB/인프라 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Product Startup AI 제품 아이디어를 실제 생산 가능한 사업으로 전환하는 AI 같은 서비스가 필요한 팀",
    "followerCount": 5,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1125,
        "name": "Product Startup AI 제품 아이디어를 실제 생산 가능한 사업으로 전환하는 AI",
        "summary": "생산 제품명만 입력하면 공정/장비/KPI를 관리할 수 있는 전용 대시보드를 1분만에 생성해드립니다.",
        "website": "",
        "keywords": [
          "Multi AI Agent",
          "SDM",
          "제조 AI"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "대시보드, 인프라"
      }
    ]
  },
  {
    "id": 580,
    "name": "(주)웰니스고",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187597/65232eaf3e3d43e2a5a437f22d8838d0.png",
    "summary": "회의 시작부터 회의록 생성·공유·검색·자산화까지 전 과정을 자동화하는 기업용 AI 회의 시스템",
    "description": "웰니스고는 AI 기반 음성·문서·데이터 분석 기술을 활용해 기업의 비효율적인 업무 과정을 자동화하고, 조직의 지식 자산을 축적하는 AI SaaS 기업입니다. 자체 개발한 ‘MeetingFlow’는 회의 내용을 자동 전사·요약·공유·검색 가능한 데이터로 변환하여 기업의 회의를 ‘소모되는 시간’이 아닌 ‘축적되는 자산’으로 바꾸고 있습니다.",
    "website": "https://www.meetingflow.kr",
    "email": "bada@wellnessgo.kr",
    "contact": "070-8282-3230",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/580",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "미팅플로우"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "자동화"
    ],
    "techTags": [
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "검색, 데이터 분석, 분석, 음성, 자동화",
    "priceText": [
      "베이직 요금 / 유/무료 혼합 / 130,000원"
    ],
    "minPrice": 130000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "RAG/지식검색, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 미팅플로우 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1084,
        "name": "미팅플로우",
        "summary": "회의 시작부터 회의록 생성·공유·검색·자산화까지 전 과정을 자동화하는 기업용 AI 회의 시스템",
        "website": "",
        "keywords": [
          "AI 회의 자동화",
          "기업 지식 자산화",
          "실시간 전사 & 화자분리",
          "회의록 자동 생성",
          "회의실 기반 AI SaaS"
        ],
        "priceText": [
          "베이직 요금 / 유/무료 혼합 / 130,000원"
        ],
        "priceNumber": 130000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "자동화"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "검색, 데이터 분석, 분석, 음성, 자동화"
      }
    ]
  },
  {
    "id": 628,
    "name": "빅테크플러스 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186814/ba8104cd7aad44c98c086b81a472eaa3.png",
    "summary": "실시간 공적장부 열람 및 분석 SaaS : 회사 운영 및 서비스에 필요한 다양한 공적장부를 실시간으로 열람 및 데이터화하여 제공합니다.",
    "description": "빅테크플러스는 금융기관의 부동산 담보대출 프로세스를 고도화하는 B2B SaaS 전문기업입니다. 2019년 금융위원회 핀테크 아이디어 공모전 수상과 예비창업패키지 선정을 계기로 설립되었으며, 부동산 정보 시장의 비효율을 데이터와 기술 기반으로 해결해오고 있습니다. 당사는 등기 실시간 열람·분석·공유 서비스 ‘독큐(DocQ)’와 부동산 자산관리 서비스 ‘홈큐(HomeQ)’를 운영하고 있습니다. 특히 ‘독큐’는 금융기관이 API 연계를 통해 등기 데이터와 이미지를 실시간으로 제공받아 내부 시스템에 즉시 반영할 수 있도록 지원하며, 연간 약 1,000만 건의 등기 열람을 안정적으로 처리하고 있습니다. 또한 행정안전부, 국토교통부, 대법원 등 부처별로 분산된 주소 체계를 정합성 있게 연결하는 자체 매핑 솔루션과 주소 검색 엔진을 보유하고 있으며, 이는 부동산 금융 디지털 전환의 핵심 기술 자산으로 자리하고 있습니다. 이러한 기술력을 바탕으로 하나은행, KB국민은행, NH농협은행, BNK부",
    "website": "https://www.bigtech.co.kr",
    "email": "sh.yoo@bigtech.co.kr",
    "contact": "070-8835-9747",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/628",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "독큐(DocQ)"
    ],
    "majorTags": [
      "MVP/개발",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "이미지"
    ],
    "techTags": [
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "이미지"
    ],
    "techEvidence": "검색, 분석, 이미지, API, 인프라",
    "priceText": [
      "115크레딧 / CREDIT_TOKEN / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "RAG/지식검색, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 독큐(DocQ) 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 3,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1142,
        "name": "독큐(DocQ)",
        "summary": "실시간 공적장부 열람 및 분석 SaaS : 회사 운영 및 서비스에 필요한 다양한 공적장부를 실시간으로 열람 및 데이터화하여 제공합니다.",
        "website": "",
        "keywords": [
          "kb시세",
          "건축물대장",
          "등기변동 모니터링",
          "법인등기",
          "부동산 데이터 조회",
          "부동산등기",
          "토지대장"
        ],
        "priceText": [
          "115크레딧 / CREDIT_TOKEN / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "이미지"
        ],
        "majorTags": [
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "이미지"
        ],
        "techTags": [
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "검색, 분석, 이미지, API, 인프라"
      }
    ]
  },
  {
    "id": 727,
    "name": "주식회사 스타씨드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186444/cb5dab8bc04b4900acd83ca9480c49be.png",
    "summary": "AI로 보도자료 작성부터 기자 배포, 마케팅 콘텐츠 생성, 뉴스 모니터링까지 자동화하는 올인원 PR 솔루션.",
    "description": "스타씨드는 창업팀의 커뮤니케이션 장벽을 낮추는 AI 도구를 만듭니다. 예비창업자부터 초기 스타트업, 소상공인, 창업지원기관까지 — 전담 인력이나 높은 예산 없이도 시장과 빠르게 연결되고, 브랜드 신뢰를 쌓을 수 있도록 돕습니다. 핵심 서비스인 퓰리처 AI는 보도자료 작성, 미디어 배포, 뉴스 모니터링을 자동화해 창업팀이 홍보에 쓰는 시간과 비용을 줄여줍니다. AI 기반 콘텐츠 생성·배포·모니터링 기술에 대한 특허 포트폴리오를 바탕으로, 서비스의 정확도와 실무 활용성을 지속적으로 높이고 있습니다. 스타씨드는 기술로 창업의 정보·비용·기회 격차를 줄이고, 더 많은 팀이 아이디어를 사업으로 성장시킬 수 있는 환경을 만드는 데 집중합니다.",
    "website": "",
    "email": "pr@pulitzer.ai",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/727",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "퓰리처 AI (Pulitzer AI)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "블로그",
      "SNS 문구",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API"
    ],
    "deliverables": [
      "블로그",
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "자동화",
    "priceText": [
      "Basic / Standard / Permium / Premium+ / 유/무료 혼합 / 199,000원"
    ],
    "minPrice": 199000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: Free 플랜에서는 보도자료·블로그·SNS 콘텐츠 생성을 가입 시 3회 무료로 사용할 수 있으며, 작성한 콘텐츠를 다양한 마케팅 형식으로 변환하는 기능도 제공됩니다. 기자·매체 연결 서비스인 미디어브릿지와 국내 뉴스"
    ],
    "recommendation": "블로그, SNS/광고 문구를 빠르게 만들고 고객 모집을 시작하려는 퓰리처 AI (Pulitzer AI) 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1288,
        "name": "퓰리처 AI (Pulitzer AI)",
        "summary": "AI로 보도자료 작성부터 기자 배포, 마케팅 콘텐츠 생성, 뉴스 모니터링까지 자동화하는 올인원 PR 솔루션.",
        "website": "",
        "keywords": [
          "PR",
          "뉴스클리핑",
          "마케팅",
          "언론홍보"
        ],
        "priceText": [
          "Basic / Standard / Permium / Premium+ / 유/무료 혼합 / 199,000원"
        ],
        "priceNumber": 199000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: Free 플랜에서는 보도자료·블로그·SNS 콘텐츠 생성을 가입 시 3회 무료로 사용할 수 있으며, 작성한 콘텐츠를 다양한 마케팅 형식으로 변환하는 기능도 제공됩니다. 기자·매체 연결 서비스인 미디어브릿지와 국내 뉴스"
        ],
        "deliverables": [
          "블로그",
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "블로그",
          "SNS 문구",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      }
    ]
  },
  {
    "id": 733,
    "name": "주식회사 아고라스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186003/f2376cc3f662485ca92bf6367abd6a2a.png",
    "summary": "프로덕트 소개 자료, 교육 영상 자료 등 다양한 인터랙티브 콘텐츠를 만드는 AI 솔루션",
    "description": "아고라스는 기술로 현실의 문제를 해결하고, 교육으로 미래를 만듭니다. 참여형 콘텐츠 제작 및 교육 운영 솔루션, 튜터플로우(https://tutorflow.io/ko) 를 개발 및 운영합니다.",
    "website": "https://agoras.in/",
    "email": "contact@agoras.in",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/733",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "튜터플로우(TutorFlow)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지",
      "업무자동화/생산성",
      "교육/컨설팅"
    ],
    "detailTags": [
      "영상",
      "교육"
    ],
    "techTags": [
      "영상 생성"
    ],
    "deliverables": [
      "영상"
    ],
    "techEvidence": "비디오",
    "priceText": [
      "1,000 크레딧 / CREDIT_TOKEN / 49,000원"
    ],
    "minPrice": 49000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free: 100 크레딧"
    ],
    "recommendation": "영상 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 튜터플로우(TutorFlow) 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1295,
        "name": "튜터플로우(TutorFlow)",
        "summary": "프로덕트 소개 자료, 교육 영상 자료 등 다양한 인터랙티브 콘텐츠를 만드는 AI 솔루션",
        "website": "https://tutorflow.io/ko",
        "keywords": [
          "HRD",
          "강의",
          "고객교육",
          "교육",
          "비디오",
          "슬라이드",
          "영상",
          "자료",
          "장표",
          "훈련"
        ],
        "priceText": [
          "1,000 크레딧 / CREDIT_TOKEN / 49,000원"
        ],
        "priceNumber": 49000,
        "pricingKind": "usage",
        "benefits": [
          "Free: 100 크레딧"
        ],
        "deliverables": [
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "업무자동화/생산성",
          "교육/컨설팅"
        ],
        "detailTags": [
          "영상",
          "교육"
        ],
        "techTags": [
          "영상 생성"
        ],
        "techEvidence": "비디오"
      }
    ]
  },
  {
    "id": 587,
    "name": "(주)플리토",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185223/3ac7e049f49c423388dd5b348d0cbe77.png",
    "summary": "언어와 공간을 넘어 초개인화를 통한 당신만의 AI 통역 솔루션 Chat Translation은 플리토의 AI와 음성 기술을 활용해, 사용자 맞춤형 번역을 제공합니다.",
    "description": "**언어 장벽이 없는 세상을 만드는 글로벌 AI 언어 테크 기업, 플리토(Flitto)** 플리토는 \"언어 장벽을 허물어 전 세계인을 연결한다\"는 미션 아래, 자체 플랫폼을 기반으로 고품질 언어 데이터와 혁신적인 AI 번역 솔루션을 제공하는 글로벌 생성형 AI 데이터 전문 기업입니다. - **올인원 비즈니스 통번역:** 온라인·오프라인 미팅, 타운홀 미팅, 대규모 컨퍼런스, 그리고 정교한 회의록 작성까지 비즈니스의 모든 순간을 지원하는 독보적인 AI 기반 실시간 통번역 솔루션을 공급합니다. - **초개인화 맞춤형 솔루션:** 플리토는 단순한 기계적 번역을 넘어, 기업의 고유한 도메인 지식과 전문 용어는 물론 개인의 커뮤니케이션 스타일까지 완벽히 반영하는 **기업 및 개인 맞춤형 번역 서비스**를 실현합니다. 플리토와 함께라면 전 세계 어디서나 시공간과 언어의 제약 없는 완벽한 비즈니스 파트너십이 가능해집니다.",
    "website": "https://chattr.flitto.com/ko/",
    "email": "ctlt@flitto.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/587",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "Chat Translation",
      "Live Translation"
    ],
    "majorTags": [
      "업무자동화/생산성",
      "데이터/리포트",
      "마케팅 콘텐츠"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "LLM/생성형AI",
      "음성/STT/TTS"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "생성형, 음성",
    "priceText": [
      "무제한 요금제 / 월 구독 / 100,000원",
      "무제한 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free Plan: 매일 일정 시간 사용량 무료 제공"
    ],
    "recommendation": "홍보 콘텐츠를 빠르게 만들고 고객 모집을 시작하려는 Chat Translation 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1095,
        "name": "Chat Translation",
        "summary": "언어와 공간을 넘어 초개인화를 통한 당신만의 AI 통역 솔루션 Chat Translation은 플리토의 AI와 음성 기술을 활용해, 사용자 맞춤형 번역을 제공합니다.",
        "website": "https://chattr.flitto.com/ko/",
        "keywords": [
          "AI",
          "노트테이킹",
          "실시간",
          "오프라인미팅",
          "온라인미팅",
          "통역"
        ],
        "priceText": [
          "무제한 요금제 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [
          "Free Plan: 매일 일정 시간 사용량 무료 제공"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "LLM/생성형AI",
          "음성/STT/TTS"
        ],
        "techEvidence": "생성형, 음성"
      },
      {
        "id": 1096,
        "name": "Live Translation",
        "summary": "컨퍼런스, 포럼, 온라인 미팅 등 일대다 상황의 커뮤니케이션을 위한 솔루션으로 최대 42개의 언어로 도메인에 특화된 번역을 제공합니다.",
        "website": "https://livetr.flitto.com/ko/",
        "keywords": [
          "AI",
          "도메인특화",
          "온라인미팅",
          "일대다",
          "컨펀런스",
          "통역"
        ],
        "priceText": [
          "무제한 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "LLM/생성형AI"
        ],
        "techEvidence": "생성형"
      }
    ]
  },
  {
    "id": 747,
    "name": "주식회사 에이아이파크",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186624/90adcbfc696f48f6a681743d11ef7e2b.png",
    "summary": "텍스트 입력만으로 AI 아바타가 말하는 영상을 전문가 품질로 제작하는 클라우드 SaaS 플랫폼",
    "description": "**🚀AiVATAR (아이바타)** 텍스트만 입력하면 AI가 영상을 자동으로 제작하는 클라우드 기반 SaaS 플랫폼입니다. 2026년 새롭게 공개된 V-GEN 기능은 단순 AI 아바타를 넘어, 다양한 템플릿 기반 영상 콘텐츠까지 자동 제작할 수 있도록 확장되었습니다. 이제 누구나 원고만 입력하면 쉽고 빠르게 고퀄리티 영상을 만들 수 있습니다. 🔥**NEW! V-GEN** “텍스트 한 줄이 영상이 되는 자동 제작 엔진” V-GEN은 원고만 입력하면 AI가 장면 구성, 자막, 음성, 아바타를 자동으로 조합하여 완성형 영상을 제작하는 AI 영상 생성 솔루션입니다. - 제품 홍보 / 교육 / 안내 / 피칭 등 목적별 템플릿 제공 - 별도 편집 툴 없이 원고 수정만으로 영상 즉시 재생성 - 유튜브(16:9) · 쇼츠/릴스(9:16) 멀티 포맷 동시 출력 - 조달청 혁신제품 지정 → 공공기관 수의계약 가능 **🎯이런 분들께 추천합니다** 멘토링·심사용 피칭 영상이 필요한 초기 스타트",
    "website": "https://www.aivatar.ai/",
    "email": "business@aipark.ai",
    "contact": "010-8282-6028",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/747",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AiVATAR (아이바타)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "영상/이미지",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "IR",
      "브랜딩",
      "영상",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "영상 생성",
      "음성/STT/TTS",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "SNS/광고 문구",
      "영상",
      "컨설팅"
    ],
    "techEvidence": "영상 생성, 동영상, 음성, 클라우드",
    "priceText": [
      "PRO / 월 구독 / 290,000원"
    ],
    "minPrice": 290000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free 플랜: AI 아바타와 V-GEN 영상 자동 제작을 체험할 수 있는 무료 플랜"
    ],
    "recommendation": "IR/발표자료, SNS/광고 문구를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 3,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1318,
        "name": "AiVATAR (아이바타)",
        "summary": "텍스트 입력만으로 AI 아바타가 말하는 영상을 전문가 품질로 제작하는 클라우드 SaaS 플랫폼",
        "website": "https://www.aivatar.ai/",
        "keywords": [
          "AI 아바타",
          "AI 영상 제작",
          "SaaS",
          "동영상",
          "디지털 휴먼",
          "마케팅",
          "무료",
          "영상",
          "콘텐츠",
          "홍보"
        ],
        "priceText": [
          "PRO / 월 구독 / 290,000원"
        ],
        "priceNumber": 290000,
        "pricingKind": "fixed",
        "benefits": [
          "Free 플랜: AI 아바타와 V-GEN 영상 자동 제작을 체험할 수 있는 무료 플랜"
        ],
        "deliverables": [
          "IR/발표자료",
          "SNS/광고 문구",
          "영상",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "영상/이미지",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "IR",
          "브랜딩",
          "영상",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "영상 생성",
          "음성/STT/TTS",
          "DB/인프라"
        ],
        "techEvidence": "영상 생성, 동영상, 음성, 클라우드"
      }
    ]
  },
  {
    "id": 688,
    "name": "주식회사 딥앤하이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/179621/e86a8e37b40c47c894a305bf4d2fae21.png",
    "summary": "행동 데이터 분석을 통한 AI Judge 기반 구직자 역량 검증 솔루션 - AI 기반으로 구성된 실제 업무 환경과 유사한 환경에서 문제를 해결하며, '진부한 적성검사'가 아닌, '진짜 업무 역량'을 평가하세요.",
    "description": "**\"인공지능의 확산, 딥앤하이가 이끌어 갑니다.\"** (주)딥앤하이는 AI를 이용해서 비즈니스의 빈틈을 채워주는 Edu-tech 기반 AI 기술 전문 기업입니다. 검증된 LLM(대형언어모델)과 AI 에이전트 기술, 사람에 대한 이해를 바탕으로, 척박한 환경에서 고군분투하는 스타트업과 예비 창업자분들께 의미있게 다가올 수 있는 AI 솔루션을 제공합니다. **스펙 대신 '일머리'를 봅니다! AI 실무 역량 평가 플랫폼, 베리핏(VeriFit)** 스타트업에게 채용 실패는 치명적입니다. 베리핏은 지원자가 실제 업무 현장에서 어떻게 대처하는지 AI로 꿰뚫어 봅니다. **실전 시뮬레이션:** '갑작스러운 프로젝트 보류', '진상 고객 응대' 등 현업 시나리오를 주고 AI 상사·동료와 대화하게 합니다. **NCS 기반 정밀 코칭:** 단순한 서류 평가로는 알 수 없는 문제해결능력, 소통 능력을 객관적 수치와 레이더 차트로 시각화합니다. **도입 효과:** 스크리닝에 들어가는 시간과",
    "website": "https://verifit.co.kr",
    "email": "dha8102@deepnhigh.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/688",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "VeriFit"
    ],
    "majorTags": [
      "사업계획서/IR",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "컨설팅"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "가상고객/시뮬레이션",
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "컨설팅"
    ],
    "techEvidence": "LLM, AI 에이전트, 에이전트, 시뮬레이션, 데이터 분석, 분석, 인프라",
    "priceText": [
      "100 / CREDIT_TOKEN / 2,000원"
    ],
    "minPrice": 2000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "무료 크레딧: 회원 가입 시, 웰컴 크레딧"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 사업계획서, 컨설팅 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 1,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1235,
        "name": "VeriFit",
        "summary": "행동 데이터 분석을 통한 AI Judge 기반 구직자 역량 검증 솔루션 - AI 기반으로 구성된 실제 업무 환경과 유사한 환경에서 문제를 해결하며, '진부한 적성검사'가 아닌, '진짜 업무 역량'을 평가하세요.",
        "website": "https://verifit.co.kr",
        "keywords": [
          "AI",
          "AI Agent",
          "LLM",
          "NCS",
          "에듀테크",
          "역량검사",
          "적성검사",
          "채용"
        ],
        "priceText": [
          "100 / CREDIT_TOKEN / 2,000원"
        ],
        "priceNumber": 2000,
        "pricingKind": "usage",
        "benefits": [
          "무료 크레딧: 회원 가입 시, 웰컴 크레딧"
        ],
        "deliverables": [
          "사업계획서",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "컨설팅"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "가상고객/시뮬레이션",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 시뮬레이션, 데이터 분석, 분석, 인프라"
      }
    ]
  },
  {
    "id": 700,
    "name": "주식회사 메트릭스튜디오",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186289/a9c4aab7e9154e50ac4d4ff6c757aa19.png",
    "summary": "AI 기반 광고/프로모션 이미지 제작 솔루션",
    "description": "[https://www.nnt-consulting.com/](https://www.nnt-consulting.com/)",
    "website": "https://www.nnt-consulting.com/",
    "email": "sungjoon.yoon@metric-studio.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/700",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "GRYYD from NNT AI Studio"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "영상/이미지"
    ],
    "detailTags": [
      "광고",
      "이미지"
    ],
    "techTags": [
      "이미지 생성"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "이미지"
    ],
    "techEvidence": "이미지",
    "priceText": [
      "22300 / CREDIT_TOKEN / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Welcome Pack: 100 credits (one-time)"
    ],
    "recommendation": "SNS/광고 문구, 이미지를 빠르게 만들고 고객 모집을 시작하려는 GRYYD from NNT AI Studio 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1252,
        "name": "GRYYD from NNT AI Studio",
        "summary": "AI 기반 광고/프로모션 이미지 제작 솔루션",
        "website": "https://www.gryyd.ai/",
        "keywords": [
          "AI",
          "이미지",
          "프로모션"
        ],
        "priceText": [
          "22300 / CREDIT_TOKEN / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "usage",
        "benefits": [
          "Welcome Pack: 100 credits (one-time)"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "영상/이미지"
        ],
        "detailTags": [
          "광고",
          "이미지"
        ],
        "techTags": [
          "이미지 생성"
        ],
        "techEvidence": "이미지"
      }
    ]
  },
  {
    "id": 678,
    "name": "주식회사 뉴메스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189928/1ef05c24273e4ff7a8f51c0e779f0b18.png",
    "summary": "AlphaLetter는 창업자를 위한 AI 기반 트렌드 큐레이션 SaaS입니다.",
    "description": "뉴메스(NEWMES)는 연세대학교 AI 연구교수 2명과 존스홉킨스대학교 연구원이 만든 AI 기업입니다. 세계 최초로 열린 2025년 Global Medical LLM challenge 1위, 최고 권위 학술지 Nature reviews bioengineering 에서 2025년 Medical LLM 세계 1위 선정, 2026년 NVIDIA Nemotron model reasoning challenge 5위 달성 등 글로벌 AI 무대에서 압도적인 성과를 기록하며 그 실력을 증명했습니다. 뉴메스는 데이터와 인공지능 기술을 통해 비즈니스 혁신을 이끄는 AI 솔루션 전문 기업입니다. 이번 '모두의 창업' 지원사업에 발맞춰, 초기 창업자를 위한 AI 기반 트렌드 큐레이션 SaaS인 '알파레터(AlphaLetter)'를 선보입니다. 알파레터는 창업자가 바쁜 업무 속에서도 자사 도메인의 시장 동향과 기술, 경쟁사 트렌드를 놓치지 않도록 돕는 맞춤형 모니터링 솔루션입니다. AI가 주요 뉴스부",
    "website": "https://alphaletter.newmes.io",
    "email": "eric@newmes.io",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/678",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "AlphaLetter"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "LLM/생성형AI",
      "시장조사/리서치"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "LLM, 경쟁사",
    "priceText": [
      "베이직 요금제 / 월 구독 / 149,000원"
    ],
    "minPrice": 149000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "무료체험 3일 제공 플랜: 신청한 창업팀별 무료체험 3일 제공합니다."
    ],
    "recommendation": "사업계획서와 발표자료를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 3,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1224,
        "name": "AlphaLetter",
        "summary": "AlphaLetter는 창업자를 위한 AI 기반 트렌드 큐레이션 SaaS입니다.",
        "website": "",
        "keywords": [
          "AI 트렌드 큐레이션",
          "SaaS",
          "일일 AI 브리핑",
          "창업자 맞춤형",
          "콘텐츠 자동 요약"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 149,000원"
        ],
        "priceNumber": 149000,
        "pricingKind": "fixed",
        "benefits": [
          "무료체험 3일 제공 플랜: 신청한 창업팀별 무료체험 3일 제공합니다."
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "LLM/생성형AI",
          "시장조사/리서치"
        ],
        "techEvidence": "LLM, 경쟁사"
      }
    ]
  },
  {
    "id": 731,
    "name": "주식회사 써드웍스(THIRD WORKS INC.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185195/e95f6f86899d442fbf349dc903632245.png",
    "summary": "수출입 창업자 및 기업을 위한 AI 기반 전자무역 문서 자동화 및 협업 SaaS",
    "description": "**🧭수입 공급망 관리의 스마트한 혁신, 써드웍스** 써드웍스는 복잡하고 까다로운 수입 업무를 데이터와 AI 기술로 혁신하는 **'무역 올인원(All-in-One) 솔루션'** 기업입니다. 시장 조사부터 공급사 발굴, 통관 서류 작성까지 수입의 전 과정을 디지털화하여 기업의 효율성을 극대화합니다. **📍핵심 서비스** **✔️빅데이터 기반 시장 분석:** 관심 상품의 **HS 코드**를 입력하는 것만으로 업체별 시장 점유율, 통관 패턴, 글로벌 거래 흐름을 한눈에 파악할 수 있는 대시보드를 제공합니다. **✔️전략적 파트너 및 소싱 지원:** 빅데이터를 활용해 최적의 공급망 파트너를 매칭합니다. 신규 원재료 도입부터 기존 상품의 품질 비교까지, 데이터에 기반한 의사결정을 돕습니다. **✔️수입 업무 자동화:** 실무자를 괴롭히는 복잡한 무역 계약서와 통관 서류 작성을 체계적으로 관리할 수 있는 풀 커버리지 시스템을 지원합니다.",
    "website": "",
    "email": "mjkim@thirdworks.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/731",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "팔로업(Follow-Up)"
    ],
    "majorTags": [
      "사업계획서/IR",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "자동화"
    ],
    "techEvidence": "대시보드, 분석, 자동화",
    "priceText": [
      "PRO / 월 구독 / 600,000원"
    ],
    "minPrice": 600000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "FREE: 기본 통관문서 3종 무료"
    ],
    "recommendation": "사업계획서, IR/발표자료를 보강해 지원사업·IR 준비를 앞당기려는 팀",
    "followerCount": 2,
    "likeCount": 2,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1293,
        "name": "팔로업(Follow-Up)",
        "summary": "수출입 창업자 및 기업을 위한 AI 기반 전자무역 문서 자동화 및 협업 SaaS",
        "website": "",
        "keywords": [
          "무역",
          "문서",
          "수입",
          "수출",
          "업무",
          "협업"
        ],
        "priceText": [
          "PRO / 월 구독 / 600,000원"
        ],
        "priceNumber": 600000,
        "pricingKind": "fixed",
        "benefits": [
          "FREE: 기본 통관문서 3종 무료"
        ],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "대시보드, 분석, 자동화"
      }
    ]
  },
  {
    "id": 850,
    "name": "헤드리스 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185173/6fca8e8a5aad41a2bf345dd97429fee5.jpg",
    "summary": "오모플레이는 오프라인 방문 고객을 회원, 카카오 채널 친구로 전환하고, AI CRM 자동화로 재방문과 재구매를 만드는 솔루션입니다.",
    "description": "헤드리스 주식회사의 오모플레이는 오프라인 방문 고객을 자사 회원, 마케팅 수신 동의 고객, 카카오 채널 친구로 전환하여, 재방문과 재구매에 활용할 수 있는 AI CRM 솔루션입니다. 오모플레이는 매장, 팝업스토어, 체험 공간, 로컬 브랜드 등 오프라인 접점을 가진 창업자가 방문 고객을 놓치지 않고 디지털 고객 자산으로 전환할 수 있도록 돕습니다. 고객은 매장별 QR코드 또는 링크를 통해 간편하게 참여할 수 있으며, 창업자는 고객 정보와 마케팅 수신 동의를 확보하여 이후 재방문, 재구매 캠페인을 운영할 수 있습니다. 오모플레이는 다음 기능을 제공합니다. - 방문 고객 회원 전환 - 고객 데이터 수집 - 카카오 채널 친구 추가 - 마케팅 수신 동의 확보 - AI 자동 쿠폰 발송 - 자동 메시지 운영 - 고객 세그먼트 관리 - 성과 리포트 제공 이를 통해 창업자는 광고비를 계속 투입하는 방식에서 벗어나, 이미 방문한 고객을 다시 부르고 단골로 만드는 CRM 구조를 만",
    "website": "https://omoplay.com/",
    "email": "nk@headless.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/850",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "오모플레이(Omoplay)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "리포트",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "리포트",
      "자동화"
    ],
    "techEvidence": "리포트, 자동화",
    "priceText": [
      "기본 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "AI CRM 초기 세팅 무료 지원 패키지: 모두의창업 선정자에게 오모플레이 초기 세팅비를 무료로 제공합니다. 매장별 QR/링크 생성, 카카오 채널 전환 가이드, 웰컴 메시지 및 재방문 쿠폰 메시지 템플릿, 기본 캠페인 세팅, 1회 성과 리포트를 함께 지원합니"
    ],
    "recommendation": "SNS/광고 문구, 리포트를 빠르게 만들고 고객 모집을 시작하려는 오모플레이(Omoplay) 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1466,
        "name": "오모플레이(Omoplay)",
        "summary": "오모플레이는 오프라인 방문 고객을 회원, 카카오 채널 친구로 전환하고, AI CRM 자동화로 재방문과 재구매를 만드는 솔루션입니다.",
        "website": "",
        "keywords": [
          "AI CRM",
          "고객데이터",
          "고객전환",
          "마케팅자동화",
          "소상공인",
          "오프라인 매장",
          "재구매",
          "재방문",
          "카카오채널",
          "회원"
        ],
        "priceText": [
          "기본 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [
          "AI CRM 초기 세팅 무료 지원 패키지: 모두의창업 선정자에게 오모플레이 초기 세팅비를 무료로 제공합니다. 매장별 QR/링크 생성, 카카오 채널 전환 가이드, 웰컴 메시지 및 재방문 쿠폰 메시지 템플릿, 기본 캠페인 세팅, 1회 성과 리포트를 함께 지원합니"
        ],
        "deliverables": [
          "SNS/광고 문구",
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "리포트",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "리포트, 자동화"
      }
    ]
  },
  {
    "id": 799,
    "name": "주식회사 팜킷",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/198922/336af4b067194d9594cd49f0900091f7.jpg",
    "summary": "코딩 없이 몇분만에 바로 AI 개인화 상품추천 기능을 적용할 수 있어요",
    "description": "팜킷(Farmkit)은 2020년 설립된 AI 스타트업으로, D2C 자사몰의 ROAS를 직접 개선하는 온톨로지 기반 초개인화 AI 추천 엔진 'TasteQ'를 개발·운영하고 있습니다. 기존 빅데이터 학습 방식의 추천엔진과 달리 상품의 본질적 특성을 온톨로지 알고리즘으로 분석해 빅데이터 없이도 도입 즉시 개인 맞춤 추천이 가능하며, 푸드·뷰티·퍼스널케어 버티컬에 특화된 관능 분석 기술과 11건의 특허로 차별화된 경쟁력을 갖추고 있습니다. 실제 도입 고객사 기준 추천 상품 클릭률 3.5배, 구매전환율 3배, 장바구니 객단가 1.5배, 추천 구좌 ROAS 10배 향상을 달성했으며,카페24·Shopify 앱스토어를 통해 앱 설치 하루 만에 도입이 가능하고, Microsoft·Oracle·NAVER Cloud 등 글로벌 빅테크와의 파트너십을 바탕으로 국내 시장 검증을 마치고 북미 시장 확장을 본격화하고 있습니다.",
    "website": "https://www.farmkit.kr/",
    "email": "help@farmkit.kr",
    "contact": "044-8682-1940",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/799",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "테이스트큐(TasteQ) 솔루션"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "홈페이지"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "홈페이지"
    ],
    "techEvidence": "분석",
    "priceText": [
      "베이직요금제 / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "초기 테스트 플랜: 초기 도입 후 15일간 무료"
    ],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 홈페이지 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 4,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1387,
        "name": "테이스트큐(TasteQ) 솔루션",
        "summary": "코딩 없이 몇분만에 바로 AI 개인화 상품추천 기능을 적용할 수 있어요",
        "website": "https://store.cafe24.com/kr/apps/29721",
        "keywords": [
          "AI MD",
          "개인화추천",
          "온라인 쇼핑몰",
          "온사이트 마케팅"
        ],
        "priceText": [
          "베이직요금제 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [
          "초기 테스트 플랜: 초기 도입 후 15일간 무료"
        ],
        "deliverables": [
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "홈페이지"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "분석"
      }
    ]
  },
  {
    "id": 594,
    "name": "노스토스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/192229/33736a4e6d8049ee9480117ab3f5f3c3.png",
    "summary": "AI 기반 문서 자동화 SaaS : PDF 템플릿과 엑셀 데이터를 결합하여 수백 건의 문서를 자동 매칭 및 생성하는 AI 기반 문서 자동화 솔루션",
    "description": "노스토스(Nostos)는 그리스어로 '귀향(歸鄕)'을 뜻하며, 호메로스 서사시 『오디세이아』의 핵심 주제이기도 합니다. 저희는 AI가 답과 결과물을 대량으로 공급하는 시대일수록, 인간은 고유한 판단·창조·사유라는 본래의 자리로 돌아가야 한다는 문제의식에서 출발했습니다. 노스토스가 만드는 모든 제품은 'AI에 위임 가능한 작업'과 '인간이 반드시 수행해야 할 영역'을 분리하고, 후자를 더 잘 수행할 수 있도록 돕는 도구입니다. 저희는 AI 기술을 이용하여, 'AI가 사람을 대체하는 시대'가 아닌 'AI 덕분에 사람이 비로소 사람답게 일하는 시대'를 만드는 것을 목표로 합니다.",
    "website": "https://www.batchdocs.space",
    "email": "arbor8207@gmail.com",
    "contact": "070-8098-0467",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/594",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "BatchDocs"
    ],
    "majorTags": [
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "자동화",
    "priceText": [
      "1 / CREDIT_TOKEN / 50원"
    ],
    "minPrice": 50,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "단건 생성: 엑셀 데이터 없이 PDF 템플릿 만으로 1건만 생성하고자 하는 경우"
    ],
    "recommendation": "업무 자동화/API 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 1,
    "likeCount": 3,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1104,
        "name": "BatchDocs",
        "summary": "AI 기반 문서 자동화 SaaS : PDF 템플릿과 엑셀 데이터를 결합하여 수백 건의 문서를 자동 매칭 및 생성하는 AI 기반 문서 자동화 솔루션",
        "website": "https://www.batchdocs.space",
        "keywords": [
          "Excel",
          "PDF",
          "다건 출력",
          "자동 매칭"
        ],
        "priceText": [
          "1 / CREDIT_TOKEN / 50원"
        ],
        "priceNumber": 50,
        "pricingKind": "usage",
        "benefits": [
          "단건 생성: 엑셀 데이터 없이 PDF 템플릿 만으로 1건만 생성하고자 하는 경우"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      }
    ]
  },
  {
    "id": 597,
    "name": "더지피씨 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/114529/f3720f016ffe486cbd1c35190cf4577e.png",
    "summary": "스타트업 롤플레잉 솔루션 : 사업계획서가 막막한 창업자를 위해, AI가 아이템 진단부터 고객·시장·수익모델·IR·정부지원사업 신청서까지 함께 정리해주는 실전형 창업 코치입니다.",
    "description": "더지피씨 주식회사는 **AI를 ‘아는 사람’이 아니라, AI와 함께 실제 문제를 해결하는 사람을 키우는 AX 솔루션 기업**입니다. 당사는 기업과 창업자의 업무·문서·목표를 AI가 이해할 수 있는 과제와 평가 기준으로 구조화하고, 사용자가 AI를 활용해 실제 산출물을 만들어내는 과정을 진단·훈련하는 QLEARN(큐런)을 제공하고 있습니다. 큐런은 단순 교육 콘텐츠가 아니라, 문제 정의부터 실행 계획 수립, 결과물 평가, 개선 리포트까지 연결하는 AI 기반 실무 역량 평가·훈련 인프라입니다. **창업자는 더 이상 빈 문서 앞에서 혼자 고민할 필요가 없습니다.** 더지피씨는 모두의 창업 플랫폼에서 **큐런-스타트업**을 통해 예비·초기창업자가 창업 아이디어를 사업계획으로 구체화하고, 고객 문제·시장성·경쟁력·수익모델·실행가능성을 점검할 수 있도록 지원합니다. 사용자는 자신의 아이템 정보를 입력하고 AI와 함께 사업계획서, IR, 정부지원사업 신청서, 고객 페르소나, 검증 과제 등",
    "website": "https://thegpc.kr",
    "email": "jason.sung@thegpc.kr",
    "contact": "010-6868-4800",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/597",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "큐런 스타트업"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "사업계획서",
      "IR",
      "피드백",
      "리포트",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "DB/인프라"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "리포트",
      "컨설팅"
    ],
    "techEvidence": "페르소나, 리포트, 인프라",
    "priceText": [
      "스타트업 실전 점검 / CREDIT_TOKEN / 14,900원"
    ],
    "minPrice": 14900,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "경영·관리 분야의 아이디어 검증 단계에서 사업계획서, IR/발표자료 근거가 필요한 초기 창업팀",
    "followerCount": 3,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1107,
        "name": "큐런 스타트업",
        "summary": "스타트업 롤플레잉 솔루션 : 사업계획서가 막막한 창업자를 위해, AI가 아이템 진단부터 고객·시장·수익모델·IR·정부지원사업 신청서까지 함께 정리해주는 실전형 창업 코치입니다.",
        "website": "",
        "keywords": [
          "AI 창업코치",
          "IR 자료 작성",
          "사업계획서 작성",
          "시장성 검토",
          "실행계획 수립",
          "아이템 진단",
          "정부지원사업 준비",
          "창업 멘토링",
          "특허 출원"
        ],
        "priceText": [
          "스타트업 실전 점검 / CREDIT_TOKEN / 14,900원"
        ],
        "priceNumber": 14900,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "리포트",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "사업계획서",
          "IR",
          "피드백",
          "리포트",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "DB/인프라"
        ],
        "techEvidence": "페르소나, 리포트, 인프라"
      }
    ]
  },
  {
    "id": 761,
    "name": "주식회사 위드퍼스트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188639/d9bb0cad5b9047b58e949d11b0283503.png",
    "summary": "AI 봇 기반 업무 자동화 협업 메신저 플랫폼 : WITH-WORK는 AI 봇 기반의 업무 자동화 협업 메신저 플랫폼입니다.",
    "description": "데이터의 가치를 만드는 IT 기업 WITHFIRST 빅데이터 수집·분석·가공 서비스를 기반으로 고객의 데이터를 실질적인 의사결정과 비즈니스 성과로 연결합니다. 또한 인공지능·빅데이터 기반 Web·Mobile 개발과 데이터 기반 마케팅 서비스를 통해 고객의 디지털 전환, 업무 효율 향상, 지속 가능한 성장을 지원합니다.",
    "website": "",
    "email": "wants@withfirst.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/761",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "WITH-WORK"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "IR/발표자료",
      "자동화"
    ],
    "techEvidence": "분석, 자동화, 인프라",
    "priceText": [
      "메신저 + 프로젝트 관리툴 + AI 봇 / CREDIT_TOKEN / 145,500원"
    ],
    "minPrice": 145500,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "데이터 분석/대시보드, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 WITH-WORK 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1489,
        "name": "WITH-WORK",
        "summary": "AI 봇 기반 업무 자동화 협업 메신저 플랫폼 : WITH-WORK는 AI 봇 기반의 업무 자동화 협업 메신저 플랫폼입니다.",
        "website": "",
        "keywords": [
          "AI 봇",
          "개발·디자인 업무지원",
          "고객응대·영업지원",
          "데이터·인프라 관리",
          "마케팅·콘텐츠 제작",
          "문서 자동생성 및 요약",
          "백오피스·경영관리",
          "일정·작업관리 자동화",
          "자연어 업무지시 및 자동화"
        ],
        "priceText": [
          "메신저 + 프로젝트 관리툴 + AI 봇 / CREDIT_TOKEN / 145,500원"
        ],
        "priceNumber": 145500,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "분석, 자동화, 인프라"
      }
    ]
  },
  {
    "id": 824,
    "name": "㈜워크웨이즈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189182/ce829a5a90fa4291b7e2eae1275a6a47.png",
    "summary": "AI 기반 오픈마켓 셀러 운영자동화 솔루션-주문 확인부터 상품 주문처리, 고객 문자 발송, 송장 관리, 매출·수익 분석까지 오픈마켓 셀러의 반복 업무를 자동화하는 솔루션입니다.",
    "description": "우리는 이론이 아니라, ‘수익’이 나오는 시스템을 만듭니다. | 사업은 배워서 하는 것이 아니라, 실행하면서 만들어가는 것입니다. 우리는 수익이 나올 때까지 끝까지 함께합니다. 진짜 ‘사업가’가 되는 길, 워크웨이즈와 함께하세요!",
    "website": "https://workways.co.kr/",
    "email": "workwaystube@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/824",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "워크메이트"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SNS 문구",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "분석, 자동화",
    "priceText": [
      "베이직 / 월 구독 / 20,900원"
    ],
    "minPrice": 20900,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "SNS/광고 문구, 자동화를 빠르게 만들고 고객 모집을 시작하려는 워크메이트 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1420,
        "name": "워크메이트",
        "summary": "AI 기반 오픈마켓 셀러 운영자동화 솔루션-주문 확인부터 상품 주문처리, 고객 문자 발송, 송장 관리, 매출·수익 분석까지 오픈마켓 셀러의 반복 업무를 자동화하는 솔루션입니다.",
        "website": "https://workmate.ai.kr/",
        "keywords": [
          "구매대행자동화",
          "매출분석",
          "문자발송기",
          "셀러운영자동화",
          "송장관리",
          "수익분석",
          "오픈마켓자동화",
          "주문수집",
          "주문자동처리",
          "키워드분석"
        ],
        "priceText": [
          "베이직 / 월 구독 / 20,900원"
        ],
        "priceNumber": 20900,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SNS 문구",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 자동화"
      }
    ]
  },
  {
    "id": 792,
    "name": "주식회사 테크레디",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/147955/f04fd2b6f3684202b192b412569e6935.png",
    "summary": "ReadyTalk은 소상공인과 소규모 기관이 카카오톡·인스타그램DM·네이버톡톡 등 여러 채널의 고객 문의와 스케쥴 예약을 AI로 자동 응대·관리할 수 있게 해주는 옴니채널 상담 SaaS입니다.",
    "description": "테크레디(TECH READY)는 AI·클라우드·빅데이터 분야 경력을 가진 전문가들이 모여, LLM·RAG 기반 AI 상담/업무 자동화 솔루션(ReadyTalk 등)을 기획·개발·운영하는 B2B SaaS 회사입니다. AI 기술 역량을 중소·중견기업, 소상공인, 소규모 공공기관을 위한 실사용 중심 솔루션을 만드는 것을 지향합니다. 주요 사업 영역 - AI 고객응대 플랫폼: 옴니채널 상담·예약 자동화 솔루션 ReadyTalk 기획·개발·운영. - LLM·RAG 기반 업무 자동화: PDF/문서/URL 등 비정형 데이터를 활용한 FAQ, 상담, 문서 검색 자동화 엔진 구축. - 클라우드·API 기반 서비스: Google Cloud Vertex AI, RAG Retrieval, Function Calling 등을 활용한 API형 AI 서비스 제공. 주요 고객사 - SKT, 베스핀글로벌, 로이드케이, EBS, 현대모비스, 남동발전, 농촌진흥청, 산림청, 임업진흥원, 국토안전관리원, 딥노이드,",
    "website": "https://ready.talk",
    "email": "john@techready.ai",
    "contact": "010-2101-5776",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/792",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Ready Talk"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "SNS 문구",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "가상고객/시뮬레이션",
      "RAG/지식검색",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "LLM, AI 고객, RAG, 검색, 음성, 자동화, API, 예약, 클라우드",
    "priceText": [
      "기본요금 2만원 / 월 구독 / 100,000원"
    ],
    "minPrice": 100000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 가상고객/시뮬레이션 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Ready Talk 같은 서비스가 필요한 팀",
    "followerCount": 4,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1378,
        "name": "Ready Talk",
        "summary": "ReadyTalk은 소상공인과 소규모 기관이 카카오톡·인스타그램DM·네이버톡톡 등 여러 채널의 고객 문의와 스케쥴 예약을 AI로 자동 응대·관리할 수 있게 해주는 옴니채널 상담 SaaS입니다.",
        "website": "https://ready.talk",
        "keywords": [
          "AI 고객 상담 자동화",
          "AI 기반 고객 관리 및 대응",
          "AI 예약·문의 자동 응대",
          "LLM·RAG 기반 상담 AI",
          "문자 음성 통합 AI 서비스",
          "상담 전용 AI 시스템",
          "소상공인 고객센터 솔루션",
          "옴니채널 상담 솔루션",
          "창업 매장 고객 응대 효율화",
          "카카오톡·네이버톡톡·인스타그램 상담 챗봇"
        ],
        "priceText": [
          "기본요금 2만원 / 월 구독 / 100,000원"
        ],
        "priceNumber": 100000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "SNS 문구",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "RAG/지식검색",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, AI 고객, RAG, 검색, 음성, 자동화, API, 예약, 클라우드"
      }
    ]
  },
  {
    "id": 703,
    "name": "주식회사 모리",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/100787/079d2ce7b4bb4c31b0bf535c41a4c1a5.png",
    "summary": "생성형 AI 대응 이미지 보안/분석 솔루션",
    "description": "이미지 보안 솔루션을 만듭니다.",
    "website": "https://www.mori-corp.io",
    "email": "mori@mori-corp.io",
    "contact": "070-4161-5252",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/703",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "BizMori"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "이미지 생성",
      "DB/인프라"
    ],
    "deliverables": [
      "이미지"
    ],
    "techEvidence": "생성형, 분석, 이미지, 인프라",
    "priceText": [
      "이미지 1장당 / CAPACITY_BASED / 50원"
    ],
    "minPrice": 50,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 BizMori 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1257,
        "name": "BizMori",
        "summary": "생성형 AI 대응 이미지 보안/분석 솔루션",
        "website": "",
        "keywords": [
          "AI",
          "AI 무단학습방지",
          "AI 생성물 판별",
          "AI기본법",
          "IP저작권보호",
          "워터마크",
          "이미지 보안/분석",
          "콘텐츠솔루션"
        ],
        "priceText": [
          "이미지 1장당 / CAPACITY_BASED / 50원"
        ],
        "priceNumber": 50,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "이미지 생성",
          "DB/인프라"
        ],
        "techEvidence": "생성형, 분석, 이미지, 인프라"
      }
    ]
  },
  {
    "id": 794,
    "name": "주식회사 투스텝스어헤드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/136306/c616d826294241619b5551202d50a88a.png",
    "summary": "AI 답변에서 우리 브랜드가 어떻게 노출·인용되는지 분석하고, 콘텐츠 실행까지 연결합니다.",
    "description": "투스텝스어헤드는 변화의 흐름을 한발 먼저 읽고, 실행은 두 걸음 앞서가는 팀입니다. 아이디어를 전략으로, 전략을 성과로 바꾸며 더 빠르고 선명한 다음을 만듭니다.",
    "website": "",
    "email": "glenn.kim@twostepsahead.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/794",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "생성형 AI 기반 고객 획득 및 AI CX 자동화 통합 솔루션"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO",
      "피드백",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "리포트",
      "자동화"
    ],
    "techEvidence": "GPT, ChatGPT, Gemini, 생성형, 검색, 분석, 자동화",
    "priceText": [
      "베이직 요금제(데일리 모니터링 키워드 50개) / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "브랜드 Ai 노출 현황 모니터링 1회 무료: 초기 AI 검색 노출 진단을 무료로 제공합니다. 브랜드명, 주요 제품/서비스, 핵심 질문을 기준으로 ChatGPT·Gemini·Perplexity 등 AI 답변에서 브랜드가 언급되는지, 어떤 출처가 필요한지 간단히"
    ],
    "recommendation": "LLM/생성형AI, RAG/지식검색 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 생성형 AI 기반 고객 획득 및 AI CX 자동화 통합 솔루션 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1381,
        "name": "생성형 AI 기반 고객 획득 및 AI CX 자동화 통합 솔루션",
        "summary": "AI 답변에서 우리 브랜드가 어떻게 노출·인용되는지 분석하고, 콘텐츠 실행까지 연결합니다.",
        "website": "",
        "keywords": [
          "AI검색",
          "AI답변분석",
          "AI마케팅",
          "GEO",
          "검색최적화",
          "디지털마케팅",
          "리드발굴",
          "브랜드노출",
          "애드테크",
          "콘텐츠마케팅"
        ],
        "priceText": [
          "베이직 요금제(데일리 모니터링 키워드 50개) / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [
          "브랜드 Ai 노출 현황 모니터링 1회 무료: 초기 AI 검색 노출 진단을 무료로 제공합니다. 브랜드명, 주요 제품/서비스, 핵심 질문을 기준으로 ChatGPT·Gemini·Perplexity 등 AI 답변에서 브랜드가 언급되는지, 어떤 출처가 필요한지 간단히"
        ],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO",
          "피드백",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "GPT, ChatGPT, Gemini, 생성형, 검색, 분석, 자동화"
      }
    ]
  },
  {
    "id": 774,
    "name": "주식회사 지티소프트 (GT Soft Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/184880/730bb15602444503aaa8477503f8c599.jpeg",
    "summary": "생성형 AI 기반으로 상품·인물 이미지를 자동 보정·합성·고화질화하는 비주얼 콘텐츠 제작 자동화 솔루션",
    "description": "㈜지티소프트는 생성형 AI 및 플랫폼 기술 기반의 디지털 솔루션 전문 기업입니다. 웹·모바일 플랫폼, ERP, 예약·주문관리 시스템, 데이터 시각화 등 다양한 구축 경험을 바탕으로 기업 맞춤형 시스템 개발과 서비스 고도화를 수행하고 있습니다. 현재는 생성형 AI 기술을 활용한 **AI 비주얼 콘텐츠 제작 자동화 솔루션**을 통해 비전문가도 쉽고 빠르게 고품질 콘텐츠를 제작할 수 있는 환경을 구축하고 있습니다. 이를 통해 기업의 콘텐츠 제작 효율성과 디지털 전환 경쟁력 향상에 기여하고자 합니다.",
    "website": "",
    "email": "hyson@gtsoft.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/774",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "AI 비주얼 콘텐츠 제작 자동화 솔루션"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "디자인/브랜딩",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "이미지",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "이미지",
      "자동화"
    ],
    "techEvidence": "생성형, 이미지, 자동화, 예약",
    "priceText": [
      "베이직 플랜 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 이미지 생성 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 AI 비주얼 콘텐츠 제작 자동화 솔루션 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1355,
        "name": "AI 비주얼 콘텐츠 제작 자동화 솔루션",
        "summary": "생성형 AI 기반으로 상품·인물 이미지를 자동 보정·합성·고화질화하는 비주얼 콘텐츠 제작 자동화 솔루션",
        "website": "",
        "keywords": [
          "AI디자인",
          "SaaS",
          "고화질화",
          "마케팅콘텐츠",
          "배경제거",
          "생성형AI",
          "이미지자동화",
          "이미지합성",
          "커머스",
          "콘텐츠제작"
        ],
        "priceText": [
          "베이직 플랜 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "디자인/브랜딩",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "이미지",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 이미지, 자동화, 예약"
      }
    ]
  },
  {
    "id": 741,
    "name": "주식회사 알파브라더스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/199359/cb9393cdfd90463b81442c250b817d22.png",
    "summary": "파편화된 사내 데이터와 반복 업무를 AI로 해결하는 기업 맞춤형 에이전틱 AI 챗봇 플랫폼",
    "description": "🚀 **기업의 성장속도를 향상시키는 AI TEAM 입니다.** 데이터는 쌓여가는데, 정작 필요한 정보를 찾는 데 시간을 허비하고 계신가요? 단순한 챗봇을 넘어, 기업의 파편화된 데이터를 통합하고 실질적인 업무 자동화를 실현하는 에이전틱 AI(Agentic AI)가 비즈니스의 속도를 바꿉니다. ✨ **ABOUT AI TEAM** AI TEAM은 사내 위키, 업무 양식, 문서 등 기업 내 모든 데이터를 스스로 학습하여 자연어 질의만으로 정확한 답변을 제공하는 **B2B SaaS 기반 엔터프라이즈 AI 플랫폼**입니다. 단순 답변을 넘어 보고서 작성과 업무 프로세스 실행까지 담당하는 스마트한 파트너를 만나보세요. **📌 Point 1. 정확한 출처 기반의 “에이전틱 챗봇”** 사내의 방대한 데이터(PDF, 이미지, 텍스트, 링크 등)를 AI가 직접 학습합니다. 단순한 질의응답에 그치지 않고, 보고서 자동 작성 및 업무 프로세스 실행까지 직접 수행하여 실질적인 업무 자동화를",
    "website": "https://ai-team.kr/",
    "email": "ceo@alphabrothers.co.kr",
    "contact": "070-4285-2228",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/741",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AI 팀"
    ],
    "majorTags": [
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "리포트",
      "이미지",
      "자동화"
    ],
    "techTags": [
      "설문/서베이",
      "데이터 분석/대시보드",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "리포트",
      "이미지",
      "자동화"
    ],
    "techEvidence": "응답, 대시보드, 보고서, 이미지, 자동화",
    "priceText": [
      "스탠다드요금제 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "설문/서베이, 데이터 분석/대시보드 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1307,
        "name": "AI 팀",
        "summary": "파편화된 사내 데이터와 반복 업무를 AI로 해결하는 기업 맞춤형 에이전틱 AI 챗봇 플랫폼",
        "website": "https://ai-team.kr/",
        "keywords": [
          "AI 업무 자동화 솔루션",
          "AI 챗봇",
          "고객 응대 자동화 챗봇",
          "기업 맞춤형 AI 챗봇 구축",
          "사내 데이터 자동학습 AI",
          "인공지능 서비스 로봇"
        ],
        "priceText": [
          "스탠다드요금제 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "이미지",
          "자동화"
        ],
        "majorTags": [
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트",
          "이미지",
          "자동화"
        ],
        "techTags": [
          "설문/서베이",
          "데이터 분석/대시보드",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "응답, 대시보드, 보고서, 이미지, 자동화"
      }
    ]
  },
  {
    "id": 766,
    "name": "주식회사 유니바",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/205402/f8fa349ee4344b5c8216af76b1db87f4.png",
    "summary": "국내 비즈니스 환경에 최적화된 에이전트로 방대한 문서 업무 자동화부터 외부 시스템까지 연동하여 핵심 데이터들을 실질적인 비즈니스 자산으로 전환해 드립니다",
    "description": "유니바는 첨단 기술력에 진정성을 담아 인류를 위한 AGI 시대로 향하는 인공지능 전문기업으로, 가장 스마트하고 인간적인 인공지능으로 최상의 사용자 경험을 제공하겠다는 비전을 갖고 있습니다. 2026년 AI Agent 제품 **ZEPHY**를 출시했으며, 국내 비즈니스 환경에 고도화된 AI 기술을 기반으로 핵심 데이터 자산을 지능적으로 연결해 지속 가능한 효율과 가치를 제공합니다.",
    "website": "https://univa.ai",
    "email": "biz@univa.co.kr",
    "contact": "010-8178-1263",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/766",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "ZEPHY (UNIVA AI Agent)"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "음성/STT/TTS",
      "업무 자동화/API"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "LLM, AI 에이전트, 에이전트, 음성, 자동화, 연동",
    "priceText": [
      "월 55만 크레딧 / CREDIT_TOKEN / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "무료플랜: ZEPHY 접속 후 로그인/비로그인 서비스 이용 가능"
    ],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 ZEPHY (UNIVA AI Agent) 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1347,
        "name": "ZEPHY (UNIVA AI Agent)",
        "summary": "국내 비즈니스 환경에 최적화된 에이전트로 방대한 문서 업무 자동화부터 외부 시스템까지 연동하여 핵심 데이터들을 실질적인 비즈니스 자산으로 전환해 드립니다",
        "website": "https://zephy.univa.ai",
        "keywords": [
          "AI Agent",
          "LLM",
          "언어지능",
          "음성인식"
        ],
        "priceText": [
          "월 55만 크레딧 / CREDIT_TOKEN / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "usage",
        "benefits": [
          "무료플랜: ZEPHY 접속 후 로그인/비로그인 서비스 이용 가능"
        ],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 음성, 자동화, 연동"
      }
    ]
  },
  {
    "id": 659,
    "name": "이한크리에이티브 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/203413/54bc97e24ee64a2eac9f5b6ef32c31be.jpg",
    "summary": "제품의 마케팅 영상을 생성AI 기반으로 제작할 수 있습니다.",
    "description": "이한크리에이티브은 AI Agent 및 디지털트윈 기반의 산업 특화형 솔루션을 개발하는 기술 기업으로, 조선·제조·안전 분야를 중심으로 현장 중심의 가상융합 서비스를 제공합니다. 주요서비스 -세이프코어 : AI기반 산업안전보건 콘텐츠 생성 및 관리 솔루션 -마켓젠 : AI기반 제품별 영상콘텐츠 생성 솔루션 주요 사업 분야는 -AI Agent 기반 솔루션 구축 -LLM 파인튜닝 -산업용 디지털트윈 플랫폼 구축 -XR/VR 기반 교육·훈련 시스템 -AI 기반 안전보건 솔루션 -3D 공간 분석 및 시뮬레이션 -스마트 공정 운영 솔루션",
    "website": "https://marketzenai.com/login",
    "email": "marchmemory11@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/659",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "Marketzen"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "영상/이미지",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "SNS 문구",
      "영상",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "가상고객/시뮬레이션",
      "데이터 분석/대시보드",
      "영상 생성"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "영상"
    ],
    "techEvidence": "LLM, 생성AI, 시뮬레이션, 분석, 숏폼",
    "priceText": [
      "40000 / CREDIT_TOKEN / 400,000원"
    ],
    "minPrice": 400000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 가상고객/시뮬레이션 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Marketzen 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1192,
        "name": "Marketzen",
        "summary": "제품의 마케팅 영상을 생성AI 기반으로 제작할 수 있습니다.",
        "website": "https://marketzenai.com/login",
        "keywords": [
          "SNS",
          "마케팅",
          "숏폼",
          "영상",
          "유튜브",
          "제품영상",
          "홍보영상"
        ],
        "priceText": [
          "40000 / CREDIT_TOKEN / 400,000원"
        ],
        "priceNumber": 400000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "영상"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "영상/이미지",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "SNS 문구",
          "영상",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "가상고객/시뮬레이션",
          "데이터 분석/대시보드",
          "영상 생성"
        ],
        "techEvidence": "LLM, 생성AI, 시뮬레이션, 분석, 숏폼"
      }
    ]
  },
  {
    "id": 658,
    "name": "유한책임회사 블루바이저시스템즈",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189945/badf52fed36148d18dd401f0bde17e9e.png",
    "summary": "영상·음성·텍스트를 통합 분석하는 멀티모달 AI로 채용 면접부터 IR 피칭, 커뮤니케이션 훈련까지 한 번에 진단·코칭하는 솔루션",
    "description": "블루바이저시스템즈는 2016년 8월에 설립된 AI 전문기업입니다. 자체적으로 개발한 HIGHBUFF AI 투자 알고리즘을 한국금융당국 테스트베드 수익률 1위, 뉴욕 패밀리오피스 챌린지 1위로 선정된 기술력을 바탕으로, AI면접, AI로봇 플랫폼을 개발하여 B2B, B2G, B2C 시장에 공급하고 있습니다. 외부 투자 없이 자기자본으로 성장하여 대한민국 부산 본사와 서울 지사를 두고 있으며, 20명의 IT전문 인재로 AI투자 플랫폼 \"하이버프 재테크\", AI면접 플랫폼 \"하이버프 인터뷰\", AI로봇 플랫폼 \"버프 파일럿\"을 개발하였으며, 혁신기업 국가대표 1000에 선정되었습니다. 1. AI 인터뷰 & 코칭 (AI STS) 지원자의 면접 영상을 AI가 분석·평가하는 비대면 면접 플랫폼입니다. 영상·음성·STT 분석 및 종합 리포트를 제공하며, 한화생명 영업교육 서비스(LG CNS 공동개발)에 API가 적용된 바 있습니다. 2. 하이버프 AI 투자 솔루션 국내 금융당국 RA알고",
    "website": "",
    "email": "help@bluevisor.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/658",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "하이버프 AI 인터뷰 & 코칭"
    ],
    "majorTags": [
      "사업계획서/IR",
      "MVP/개발",
      "고객검증/시장조사",
      "영상/이미지",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "IR",
      "피드백",
      "리포트",
      "영상",
      "자동화",
      "컨설팅",
      "교육"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "업무 자동화/API"
    ],
    "deliverables": [
      "IR/발표자료",
      "리포트",
      "영상",
      "자동화",
      "컨설팅"
    ],
    "techEvidence": "분석, 리포트, STT, 음성, 자동화, API",
    "priceText": [
      "베이직 요금제 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 IR/발표자료, 리포트 근거가 필요한 초기 창업팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1191,
        "name": "하이버프 AI 인터뷰 & 코칭",
        "summary": "영상·음성·텍스트를 통합 분석하는 멀티모달 AI로 채용 면접부터 IR 피칭, 커뮤니케이션 훈련까지 한 번에 진단·코칭하는 솔루션",
        "website": "",
        "keywords": [
          "AI교육",
          "AI인터뷰",
          "AI코칭",
          "IR피칭",
          "SaaS",
          "멀티모달AI",
          "실시간STT",
          "역량진단",
          "채용솔루션",
          "커뮤니케이션"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "IR/발표자료",
          "리포트",
          "영상",
          "자동화",
          "컨설팅"
        ],
        "majorTags": [
          "사업계획서/IR",
          "MVP/개발",
          "고객검증/시장조사",
          "영상/이미지",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "IR",
          "피드백",
          "리포트",
          "영상",
          "자동화",
          "컨설팅",
          "교육"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API"
        ],
        "techEvidence": "분석, 리포트, STT, 음성, 자동화, API"
      }
    ]
  },
  {
    "id": 684,
    "name": "주식회사 두잇나우",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/195252/2b7b0fed36a2403ca85f1acb22438409.png",
    "summary": "AI로 QA합니다. 우리 팀은요? — 지라, 노션 이동없이 품질관리(QA)를 한큐에",
    "description": "두잇나우(DoITNow)는 스타트업과 초기 팀이 **더 빠르게 만들고, 더 적게 놓치고, 더 명확하게 실행**할 수 있도록 돕는 AI·소프트웨어 개발 파트너입니다. 좋은 아이디어가 있어도 실제 제품으로 이어지는 과정에서는 기획, 디자인, 개발, QA, 운영 사이에서 수많은 작은 누락과 오해가 생깁니다. 특히 출시 직전에는 이런 문제가 자주 반복됩니다. - “이 이슈 지금 누가 보고 있지?” - “디자인 수정사항이 개발에 제대로 전달됐나?” - “중요한 버그가 댓글 속에 묻힌 건 아닐까?” - “출시 전에 꼭 봐야 할 것들이 정리되어 있나?” 두잇나우는 이처럼 팀의 실행 속도를 떨어뜨리는 반복 업무와 커뮤니케이션 비용을 줄이고, 팀이 더 중요한 결정과 제품 개선에 집중할 수 있도록 돕습니다. 우리는 단순히 기술을 “도입”하는 회사가 아니라, **기술이 실제 실행 성과로 이어지는 구조**를 함께 설계합니다.",
    "website": "https://doitnow.ai.kr/",
    "email": "official@doitnow.ai.kr",
    "contact": "010-5659-4972",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/684",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Figma QA Board"
    ],
    "majorTags": [
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "pro / 월 구독 / 10,000원"
    ],
    "minPrice": 10000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "free: 다운로드 후 사용"
    ],
    "recommendation": "노코드/MVP 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 Figma QA Board 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 1,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1231,
        "name": "Figma QA Board",
        "summary": "AI로 QA합니다. 우리 팀은요? — 지라, 노션 이동없이 품질관리(QA)를 한큐에",
        "website": "https://doitnow.ai.kr/figma-qa-board",
        "keywords": [
          "QA",
          "QC",
          "품질관리",
          "협업",
          "협업툴",
          "효율화"
        ],
        "priceText": [
          "pro / 월 구독 / 10,000원"
        ],
        "priceNumber": 10000,
        "pricingKind": "fixed",
        "benefits": [
          "free: 다운로드 후 사용"
        ],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 725,
    "name": "주식회사 스위트앤데이터",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/111791/8fa99d44f9d34bdcbb0ce9a015445183.png",
    "summary": "Sweetify는 배경 제거, 이미지 업스케일, 헤어 컬러 변경, 증명사진·웹툰 캐릭터 생성 등 이미지·영상 AI 기능을 기업이 API로 바로 도입할 수 있게 제공하는 생성형 AI 콘텐츠 솔루션입니다.",
    "description": "스위트앤데이터는 생성형 AI 기술을 기반으로 오프라인 공간에서 바로 체험할 수 있는 AI 콘텐츠 솔루션을 만드는 기업입니다. 단순히 이미지를 생성하는 AI 서비스가 아니라, 사용자가 특정 IP·브랜드·공간 세계관 안으로 들어가 자신의 얼굴과 취향이 반영된 이미지, 영상, 포토카드, 굿즈를 경험할 수 있도록 합니다.",
    "website": "https://www.sweetndata.com",
    "email": "jakey.ahn@sweetndata.com",
    "contact": "010-2463-7232",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/725",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "Sweetify"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "디자인/브랜딩",
      "영상/이미지",
      "데이터/리포트"
    ],
    "detailTags": [
      "브랜딩",
      "영상",
      "이미지"
    ],
    "techTags": [
      "LLM/생성형AI",
      "이미지 생성",
      "업무 자동화/API"
    ],
    "deliverables": [
      "영상",
      "이미지"
    ],
    "techEvidence": "생성형, 이미지 생성, 이미지, 사진, API, 연동",
    "priceText": [
      "990 / CREDIT_TOKEN / 990,000원"
    ],
    "minPrice": 990000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "Free 플랜: 회원가입 시 30토큰을 무료로 지급하며, 배경 제거·헤어 컬러 변경 등 AI 이미지 생성 기능과 결과 이미지 다운로드, 최대 10초 영상 배경 제거 기능을 체험할 수 있습니다. 단, 워터마크가 포함되며 API 연동"
    ],
    "recommendation": "영상, 이미지를 빠르게 만들고 고객 모집을 시작하려는 Sweetify 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1285,
        "name": "Sweetify",
        "summary": "Sweetify는 배경 제거, 이미지 업스케일, 헤어 컬러 변경, 증명사진·웹툰 캐릭터 생성 등 이미지·영상 AI 기능을 기업이 API로 바로 도입할 수 있게 제공하는 생성형 AI 콘텐츠 솔루션입니다.",
        "website": "",
        "keywords": [
          "AI영상",
          "AI이미지",
          "API연동",
          "마케팅콘텐츠",
          "배경제거",
          "생성형AI",
          "웹툰캐릭터",
          "이미지업스케일",
          "증명사진생성",
          "헤어컬러변경"
        ],
        "priceText": [
          "990 / CREDIT_TOKEN / 990,000원"
        ],
        "priceNumber": 990000,
        "pricingKind": "usage",
        "benefits": [
          "Free 플랜: 회원가입 시 30토큰을 무료로 지급하며, 배경 제거·헤어 컬러 변경 등 AI 이미지 생성 기능과 결과 이미지 다운로드, 최대 10초 영상 배경 제거 기능을 체험할 수 있습니다. 단, 워터마크가 포함되며 API 연동"
        ],
        "deliverables": [
          "영상",
          "이미지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "디자인/브랜딩",
          "영상/이미지",
          "데이터/리포트"
        ],
        "detailTags": [
          "브랜딩",
          "영상",
          "이미지"
        ],
        "techTags": [
          "LLM/생성형AI",
          "이미지 생성",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, 이미지 생성, 이미지, 사진, API, 연동"
      }
    ]
  },
  {
    "id": 623,
    "name": "바이올렛페이 주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186893/0d35c95e590e485680d8aadced0e0afd.png",
    "summary": "AI FDS 기반 결제 솔루션 : [6월 말 출시 예정] 창업 초기 단계의 온라인 사업자가 거래 데이터를 기반으로 리스크를 자동 관리할 수 있는 범용 이상탐지 솔루션, point3(포인트쓰리)",
    "description": "0.3%의 낮은 수수료를 제공하는 계좌 기반 결제 PG 서비스, point3(포인트쓰리)",
    "website": "https://point3.io",
    "email": "e@point3.io",
    "contact": "010-8907-5264",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/623",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "point3"
    ],
    "majorTags": [
      "MVP/개발",
      "데이터/리포트"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "DB/인프라"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "인프라",
    "priceText": [
      "결제 수수료 0.3% / 월 구독 / 39,000원"
    ],
    "minPrice": 39000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "DB/인프라 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 point3 같은 서비스가 필요한 팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1136,
        "name": "point3",
        "summary": "AI FDS 기반 결제 솔루션 : [6월 말 출시 예정] 창업 초기 단계의 온라인 사업자가 거래 데이터를 기반으로 리스크를 자동 관리할 수 있는 범용 이상탐지 솔루션, point3(포인트쓰리)",
        "website": "https://point3.io",
        "keywords": [
          "AI",
          "FDS",
          "결제인프라",
          "이상거래탐지"
        ],
        "priceText": [
          "결제 수수료 0.3% / 월 구독 / 39,000원"
        ],
        "priceNumber": 39000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "DB/인프라"
        ],
        "techEvidence": "인프라"
      }
    ]
  },
  {
    "id": 637,
    "name": "스페시아이(Speciai)",
    "logo": "",
    "summary": "",
    "description": "",
    "website": "",
    "email": "etqe3513@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/637",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [],
    "majorTags": [],
    "detailTags": [],
    "techTags": [],
    "deliverables": [],
    "techEvidence": "확인필요",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "AI 솔루션을 검토하는 예비창업자와 초기 팀",
    "followerCount": 3,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": []
  },
  {
    "id": 740,
    "name": "주식회사 알로이에이아이",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/109278/a2cfb23263d046179f5cdea7008314a7.png",
    "summary": "AI를 활용한 문서 생성, 문서 트래킹, NDA를 통한 문서 보안, IR 덱 생성. 저장되어 있는 문서들에 대한 정보를 쉽게 파악할 수 있게 해주는 챗봇 문서 지능형 워크스페이스 솔루션입니다. **솔루션 활용 분야** 비즈니스 기밀 보호 및 NDA 자동화 ● 원클릭 NDA 승인 기반 열람 제어: 별도의 복잡한 계약서 작성 없이, 문서",
    "description": "AI를 활용한 문서 생성, 문서 트래킹, NDA를 통한 문서 보안, IR 덱 생성. 저장되어 있는 문서들에 대한 정보를 쉽게 파악할 수 있게 해주는 챗봇 문서 지능형 워크스페이스 솔루션입니다. **솔루션 활용 분야** 비즈니스 기밀 보호 및 NDA 자동화 ● 원클릭 NDA 승인 기반 열람 제어: 별도의 복잡한 계약서 작성 없이, 문서 열람 요청 시 수신자가 NDA(비밀유지협약)에 동의해야만 문서 내용이 공개되는 '선 승인 후 열람' 프로세스 구축. ● 기밀 자료의 안전한 외부 공유: 투자 제안서, 기술 사양서 등 민감한 자료를 외부 파트너에게 전달할 때 유출 리스크를 원천 차단하고 법적 보호 장치를 실시간으로 마련. 비즈니스 문서 생성 및 투자 유치 ● AI 기반 IR 덱 및 제안서 자동 생성: 기업의 핵심 데이터를 입력하면 투자자용 IR 피치 덱, 사업 제안서, 제품 브로셔 등을 AI가 시각적으로 최적화된 레이아웃으로 즉시 생성하여 문서 작성 리소스를 절감. ● 다국어",
    "website": "",
    "email": "ttyt0416@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/740",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AiDocX"
    ],
    "majorTags": [
      "사업계획서/IR",
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "IR",
      "랜딩페이지",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "사업계획서",
      "IR/발표자료",
      "랜딩페이지",
      "자동화"
    ],
    "techEvidence": "랜딩, 분석, 자동화, API, 워크플로우",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "사업계획서, IR/발표자료 결과물로 첫 고객 반응을 빠르게 확인하려는 AiDocX 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": [
      {
        "id": 1306,
        "name": "AiDocX",
        "summary": "",
        "website": "",
        "keywords": [],
        "priceText": [],
        "priceNumber": null,
        "pricingKind": "unknown",
        "benefits": [],
        "deliverables": [
          "사업계획서",
          "IR/발표자료",
          "랜딩페이지",
          "자동화"
        ],
        "majorTags": [
          "사업계획서/IR",
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "IR",
          "랜딩페이지",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩, 분석, 자동화, API, 워크플로우"
      }
    ]
  },
  {
    "id": 848,
    "name": "핑퐁주식회사",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/206281/2714d2c085004cde82aec31bb4792005.png",
    "summary": "실제 결제 데이터를 기반으로 경쟁사 고객까지 타겟팅하는 AI 마케팅 솔루션. 초기 창업자를 위한 결제 데이터 기반 마케팅 솔루션",
    "description": "**회사 소개** 핑퐁 주식회사는 AI와 데이터 기술을 기반으로 초기 창업기업과 중소사업자의 성장 문제를 해결하는 AI 솔루션 기업입니다. 2018년 설립 이후, 실제 소비 데이터 기반 마케팅, AI 개발 자동화, 클라우드 인프라 등 스타트업 운영 전반에 필요한 핵심 기술을 자체적으로 개발하며 사업을 확장하고 있습니다. 특히 핑퐁은 단순한 SaaS 제공을 넘어, “실제 매출과 연결되는 데이터”와 “적은 비용으로 빠르게 실행 가능한 AI 인프라”에 집중하고 있습니다. 이를 통해 초기 창업자와 소규모 팀이 대기업 수준의 데이터 분석·AI·개발 환경을 부담 없이 활용할 수 있도록 지원합니다. **핵심 비전** “AI 기술을 통해 누구나 더 빠르고 효율적으로 사업을 성장시킬 수 있도록 만든다.” 핑퐁은 데이터 확보부터 마케팅, 개발 자동화, 클라우드 운영까지 스타트업 성장에 필요한 핵심 기능을 AI로 자동화하여, 창업자가 아이디어와 사업 성장에만 집중할 수 있는 환경을 제공합니다",
    "website": "https://pingpong.house/",
    "email": "sion.seo@pingpong.house",
    "contact": "010-8723-3263",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/848",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "사또 애즈"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "자동화"
    ],
    "techTags": [
      "패널 리서치",
      "시장조사/리서치",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "타겟팅, 경쟁사, 데이터분석, 데이터 분석, 분석, 자동화, 인프라, 클라우드",
    "priceText": [
      "1000000 / CREDIT_TOKEN / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "패널 리서치, 시장조사/리서치 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 사또 애즈 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1464,
        "name": "사또 애즈",
        "summary": "실제 결제 데이터를 기반으로 경쟁사 고객까지 타겟팅하는 AI 마케팅 솔루션. 초기 창업자를 위한 결제 데이터 기반 마케팅 솔루션",
        "website": "",
        "keywords": [
          "AI마케팅",
          "CRM",
          "결제데이터",
          "고객데이터분석",
          "고객세분화",
          "광고최적화",
          "리타겟팅",
          "소비자분석",
          "소비트렌드",
          "캐시백마케팅"
        ],
        "priceText": [
          "1000000 / CREDIT_TOKEN / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "자동화"
        ],
        "techTags": [
          "패널 리서치",
          "시장조사/리서치",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "타겟팅, 경쟁사, 데이터분석, 데이터 분석, 분석, 자동화, 인프라, 클라우드"
      }
    ]
  },
  {
    "id": 746,
    "name": "주식회사 에이아이오투오",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186402/55e2ea107eeb4506a5ad73f8b2fc1bc0.png",
    "summary": "가로형 문서를 모바일 형태인 세로형으로 변환해주는 솔루션",
    "description": "㈜에이아이오투오는 기업의 업무 효율을 높이고 실제 현장에서 활용 가능한 AI 솔루션을 개발하는 AI 전문 기업입니다. AI 자동화, 비즈니스 프로세스 최적화, 고객 맞춤형 콘텐츠 생성, RAG 기반 채팅 시스템 등 다양한 산업 분야에 적용 가능한 AI 기술을 바탕으로 기업이 반복적으로 수행하는 업무를 보다 쉽고 효율적으로 개선하고 있습니다. 저희는 단순히 AI 기술을 연구하는 데 그치지 않고 실제 기업 환경에서 바로 사용할 수 있는 솔루션을 만드는 것을 중요하게 생각합니다. 기업 간 거래에서 발생하는 가격 협상, 마케팅 콘텐츠 제작, 고객 응대, 문서 활용 등 현장에서 시간이 많이 소요되는 업무를 AI로 자동화하고 담당자가 더 중요한 의사결정과 전략 업무에 집중할 수 있도록 지원합니다. 그 중에서도 당사는 도메인 특화 생성형 AI 솔루션, AI 기반 협상 및 거래 솔루션, AI 마케팅 자동화 솔루션, RAG 기반 채팅 시스템 등을 중심으로 사업을 확장하고 있습니다. 각 산업",
    "website": "https://serosero.o2osolution.ai/",
    "email": "info@o2o.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/746",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "세로새로"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "카드뉴스",
      "SNS 문구",
      "자동화",
      "교육"
    ],
    "techTags": [
      "LLM/생성형AI",
      "RAG/지식검색",
      "업무 자동화/API"
    ],
    "deliverables": [
      "카드뉴스",
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "생성형, RAG, 자동화",
    "priceText": [
      "1장 = 1 크래딧 당 100원 / CAPACITY_BASED / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [
      "5페이지 /월: 2k 해상도, 기본 pdf 도구 8종"
    ],
    "recommendation": "카드뉴스, SNS/광고 문구 결과물로 첫 고객 반응을 빠르게 확인하려는 세로새로 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1317,
        "name": "세로새로",
        "summary": "가로형 문서를 모바일 형태인 세로형으로 변환해주는 솔루션",
        "website": "https://serosero.o2osolution.ai/",
        "keywords": [
          "Ai ocr",
          "Sns 카드뉴스",
          "강의자료 모바일로",
          "모바일 버전"
        ],
        "priceText": [
          "1장 = 1 크래딧 당 100원 / CAPACITY_BASED / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "usage",
        "benefits": [
          "5페이지 /월: 2k 해상도, 기본 pdf 도구 8종"
        ],
        "deliverables": [
          "카드뉴스",
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "카드뉴스",
          "SNS 문구",
          "자동화",
          "교육"
        ],
        "techTags": [
          "LLM/생성형AI",
          "RAG/지식검색",
          "업무 자동화/API"
        ],
        "techEvidence": "생성형, RAG, 자동화"
      }
    ]
  },
  {
    "id": 807,
    "name": "주식회사 플롯팩토리",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/197060/36932cfbb0c448ecbc9e6fb3d92187de.png",
    "summary": "대규모 동시 AI 교육을 위한 IaC 기반 교육 인프라 MSP 솔루션 — 만들고, 쓰고, 회수하기까지 클릭 두 번으로 끝나는 AI 학습 환경 SaaS 플랫폼, FloatBelt",
    "description": "플롯팩토리는 AI/SW 솔루션 전문 개발 기업입니다. 자체 개발한 AI 교육 인프라 SaaS 솔루션 'FloatBelt'를 주력 사업으로 운영하며, 기업·공공기관 맞춤형 AI 솔루션 개발·공급, 데이터·AI 바우처 공급, AI 인재 양성 등 AI 기반 지식서비스 사업을 함께 영위하고 있습니다. FloatBelt는 AI 학습 환경을 클릭 두 번으로 생성하고 회수할 수 있는 SaaS 플랫폼으로, 현재 다수의 교육기관·대학과 협업하며 운영되고 있습니다. TIPS R&D 주관기관 선정 등 정부 R&D 트랙을 통해 기술성을 검증받아 왔습니다. AI를 다루는 일이 어렵지 않도록, 인프라의 복잡함을 해결하는 일을 계속해 가겠습니다.",
    "website": "https://www.floatfactory.kr/",
    "email": "ella@floatfactory.kr",
    "contact": "070-4849-2774",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/807",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "Floatbelt"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트",
      "교육/컨설팅"
    ],
    "detailTags": [
      "교육"
    ],
    "techTags": [
      "DB/인프라"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "인프라",
    "priceText": [
      "enterprise / 유/무료 혼합 / 199,000원"
    ],
    "minPrice": 199000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 시장/수요조사 근거가 필요한 초기 창업팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1478,
        "name": "Floatbelt",
        "summary": "대규모 동시 AI 교육을 위한 IaC 기반 교육 인프라 MSP 솔루션 — 만들고, 쓰고, 회수하기까지 클릭 두 번으로 끝나는 AI 학습 환경 SaaS 플랫폼, FloatBelt",
        "website": "https://belt.floatfactory.kr/",
        "keywords": [
          "AI 교육 인프라",
          "IaC 기반",
          "SaaS",
          "원클릭 프로비저닝",
          "자동 회수"
        ],
        "priceText": [
          "enterprise / 유/무료 혼합 / 199,000원"
        ],
        "priceNumber": 199000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트",
          "교육/컨설팅"
        ],
        "detailTags": [
          "교육"
        ],
        "techTags": [
          "DB/인프라"
        ],
        "techEvidence": "인프라"
      }
    ]
  },
  {
    "id": 672,
    "name": "주식회사 나무",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191974/65cd98944ab44945afb01cb26e44d575.jpg",
    "summary": "홈페이지 챗봇 - 기업 홈페이지 및 기초 문서 업로드만으로 즉시 구축 가능한 범용 SaaS형 AI 챗봇 솔루션으로, 별도의 프로그램 설치 없이 웹 브라우저를 통해 손쉽게 접근 및 관리할 수 있으며, 자동 고객 응대와 맞춤형 답변 생성 기능 제공",
    "description": "㈜나무는 AI솔루션 및 스마트시티 구축 전문기업으로 디지털 전환의 핵심 기술인 인공지능(AI), 로봇 프로세스 자동화(RPA), 거대 언어 모델(LLM), RAG기반 AI 어시스던트 등을 융합하여 스마트시티 서비스, 업무 자동화 시스템 등 다양한 분야에서 혁신적인 솔루션을 제공하고 있으며, AI기반 데이터 분석 및 예측을 통해 선제적인 업무 처리와 문제 해결을 지원함으로써 기업과 공공기관의 업무 효율성 극대화 및 경제와 산업, 기타 사회 시스템 전반의 성장을 이끌어 가는 선도기업입니다.",
    "website": "",
    "email": "puqusia@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/672",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "Do:Namu-Agent"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "홈페이지",
      "노코드",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "노코드/앱빌더",
      "랜딩페이지 빌더",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "홈페이지",
      "자동화"
    ],
    "techEvidence": "LLM, AI 에이전트, 에이전트, 노코드, 홈페이지, RAG, 데이터 분석, 분석, 자동화",
    "priceText": [
      "15M 토큰 제공 / 월 구독 / 50,000원"
    ],
    "minPrice": 50000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "홈페이지, 자동화 결과물로 첫 고객 반응을 빠르게 확인하려는 Do:Namu-Agent 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1209,
        "name": "Do:Namu-Agent",
        "summary": "홈페이지 챗봇 - 기업 홈페이지 및 기초 문서 업로드만으로 즉시 구축 가능한 범용 SaaS형 AI 챗봇 솔루션으로, 별도의 프로그램 설치 없이 웹 브라우저를 통해 손쉽게 접근 및 관리할 수 있으며, 자동 고객 응대와 맞춤형 답변 생성 기능 제공",
        "website": "",
        "keywords": [
          "AI챗봇",
          "LLM",
          "RAG",
          "SaaS AI 플랫폼",
          "고객응대 자동화",
          "기업 맞춤형 AI 에이전트",
          "기업용 AI 챗봇",
          "노코드 AI 챗봇",
          "저비용",
          "홈페이지 챗봇"
        ],
        "priceText": [
          "15M 토큰 제공 / 월 구독 / 50,000원"
        ],
        "priceNumber": 50000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "홈페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "홈페이지",
          "노코드",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "노코드/앱빌더",
          "랜딩페이지 빌더",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "LLM, AI 에이전트, 에이전트, 노코드, 홈페이지, RAG, 데이터 분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 660,
    "name": "점핀 주식회사(Jumpin Corp.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/185789/62fb2fb5539b4439a89fa486f76d009e.png",
    "summary": "에이전트 기반 수출 자동화 솔루션",
    "description": "점핀은 '에이전트 기반 자동화'솔루션입니다. 반복적인 수출 행정이나, 실무 행정을 '에이전트 기반'으로 자동화할 수 있습니다. 뿐만 아니라, 데이터를 한번에 맞춤 분석하고, 보고서 까지 정기적으로 발행함으로써, 행정 업무를 획기적으로 줄일 수 있습니다. 수출 채널의 경우 중국, 베트남 수출의 행정 자동화 즉, 채널의 주문, 재고, 정산, 판매 관리를 지원합니다.",
    "website": "",
    "email": "ceo@jumpin.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/660",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "수출 자동화 관리 솔루션",
      "점핀 에이전트 자동화 솔루션"
    ],
    "majorTags": [
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "리포트",
      "자동화"
    ],
    "techTags": [
      "AI 에이전트",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "리포트",
      "자동화"
    ],
    "techEvidence": "에이전트, 분석, 보고서, 자동화",
    "priceText": [
      "1000000 / 월 구독 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "AI 에이전트, 데이터 분석/대시보드 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1193,
        "name": "수출 자동화 관리 솔루션",
        "summary": "에이전트 기반 수출 자동화 솔루션",
        "website": "",
        "keywords": [
          "ai분석",
          "수출",
          "운영자동화"
        ],
        "priceText": [
          "1000000 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 분석, 보고서, 자동화"
      },
      {
        "id": 1194,
        "name": "점핀 에이전트 자동화 솔루션",
        "summary": "마스터 오케스트레이션을 통한 에이전트 운영 도구",
        "website": "",
        "keywords": [
          "에이전트",
          "오케스트레이션",
          "자동화"
        ],
        "priceText": [
          "1000000 / 월 구독 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "리포트",
          "자동화"
        ],
        "majorTags": [
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "리포트",
          "자동화"
        ],
        "techTags": [
          "AI 에이전트",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "에이전트, 분석, 보고서, 자동화"
      }
    ]
  },
  {
    "id": 838,
    "name": "틸노트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186571/ff7bee1060b04020991b9c15cfdd5c1a.jpg",
    "summary": "틸노트는 AI를 활용하여 지식 콘텐츠를 쉽게 창작 및 편집하고, 이를 직접 판매할 수 있는 서비스입니다.",
    "description": "틸노트 - AI 지식 노트 및 판매 플랫폼 틸노트는 AI를 활용하여 지식 콘텐츠를 쉽게 창작 및 편집하고, 이를 직접 판매할 수 있는 서비스입니다.",
    "website": "https://tilnote.io",
    "email": "wisdomcrane@gmail.com",
    "contact": "050-7017-8013",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/838",
    "sectors": [
      "경영·관리"
    ],
    "serviceNames": [
      "틸노트"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지"
    ],
    "detailTags": [
      "블로그",
      "홈페이지"
    ],
    "techTags": [
      "확인필요"
    ],
    "deliverables": [
      "블로그",
      "홈페이지"
    ],
    "techEvidence": "확인필요",
    "priceText": [
      "틸노트 창업자용 크리에이터 플랜 / 월 구독 / 500,000원"
    ],
    "minPrice": 500000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "블로그, 홈페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 틸노트 같은 서비스가 필요한 팀",
    "followerCount": 1,
    "likeCount": 1,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1448,
        "name": "틸노트",
        "summary": "틸노트는 AI를 활용하여 지식 콘텐츠를 쉽게 창작 및 편집하고, 이를 직접 판매할 수 있는 서비스입니다.",
        "website": "https://tilnote.io/landing",
        "keywords": [
          "AI",
          "노트",
          "블로그",
          "수익",
          "웹사이트",
          "정산",
          "창작",
          "책",
          "콘텐츠",
          "판매"
        ],
        "priceText": [
          "틸노트 창업자용 크리에이터 플랜 / 월 구독 / 500,000원"
        ],
        "priceNumber": 500000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "블로그",
          "홈페이지"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지"
        ],
        "detailTags": [
          "블로그",
          "홈페이지"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 762,
    "name": "주식회사 위밋모빌리티",
    "logo": "",
    "summary": "",
    "description": "",
    "website": "",
    "email": "david@wemeetmobility.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/762",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [],
    "majorTags": [],
    "detailTags": [],
    "techTags": [],
    "deliverables": [],
    "techEvidence": "확인필요",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "AI 솔루션을 검토하는 예비창업자와 초기 팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": []
  },
  {
    "id": 822,
    "name": "주식회사에제드",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/203838/d3a39c4091444d46b7284b6d7fb70d7e.png",
    "summary": "애드싱크(AdSync)는 온라인 광고 채널(Meta, Google, Naver, Kakao 등)과 커머스 매출 채널(스마트스토어, 쿠팡, 자사몰 등)의 데이터를 API로 자동 수집하여 하나의 대시보드에서 통합 조회할 수 있는 AI 기반 마케팅 성과 분석 솔루션입니다.",
    "description": "",
    "website": "",
    "email": "syh@e-zed.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/822",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "애드싱크(AdSync)"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구"
    ],
    "techEvidence": "대시보드, 분석, API",
    "priceText": [
      "Basic / 월 구독 / 99,000원"
    ],
    "minPrice": 99000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "14일 무료 체험 제공: 채널 2개, 기본 대시보드 사용가능"
    ],
    "recommendation": "SNS/광고 문구를 빠르게 만들고 고객 모집을 시작하려는 애드싱크(AdSync) 같은 서비스가 필요한 팀",
    "followerCount": 2,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1417,
        "name": "애드싱크(AdSync)",
        "summary": "애드싱크(AdSync)는 온라인 광고 채널(Meta, Google, Naver, Kakao 등)과 커머스 매출 채널(스마트스토어, 쿠팡, 자사몰 등)의 데이터를 API로 자동 수집하여 하나의 대시보드에서 통합 조회할 수 있는 AI 기반 마케팅 성과 분석 솔루션입니다.",
        "website": "",
        "keywords": [
          "마케팅",
          "성과분석"
        ],
        "priceText": [
          "Basic / 월 구독 / 99,000원"
        ],
        "priceNumber": 99000,
        "pricingKind": "fixed",
        "benefits": [
          "14일 무료 체험 제공: 채널 2개, 기본 대시보드 사용가능"
        ],
        "deliverables": [
          "SNS/광고 문구"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "대시보드, 분석, API"
      }
    ]
  },
  {
    "id": 767,
    "name": "주식회사 이노젠트",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/233138/b56ea1a06c0e443bb7883ad7f87efa90.png",
    "summary": "OfficeGPT는 단순한 질의응답(Chat)을 넘어, 사용자의 복잡한 의도를 파악하고 스스로 도구를 선택해 과업을 완수하는 '에이전틱 워크플로우(Agentic Workflow)' 기반의 지식 관리 플랫폼입니다.",
    "description": "이노젠트(Innogent)는 기업의 핵심 데이터를 기반으로 '자율형 에이전틱 비즈니스(AX)' 환경을 구축하는 인공지능 전문 기업입니다. 단순한 디지털 전환(DX)을 넘어, 인공지능이 스스로 판단하고 실행하는 AX(AI Transformation) 시대를 선도하며 기업의 업무 방식을 근본적으로 혁신하고 있습니다. 이노젠트의 핵심 경쟁력은 100% 온프레미스(On-Premise) 보안 환경에서 구동되는 특화 sLLM 플랫폼인 'OfficeGPT'에 있습니다. OfficeGPT는 단순 질의응답을 수행하는 챗봇의 한계를 뛰어넘어, 기업 내 구축된 ERP(전사적자원관리)는 물론 MES(제조실행시스템), WMS(창고관리시스템), CAD(컴퓨터지원설계) 등 다양한 산업 및 설계 시스템과 심층적으로 연동됩니다. 이를 통해 내부 시스템에 축적된 로우 데이터를 AI의 실행 레이어로 즉각 전환하여, 업무가 스스로 흐르는 통합 지능의 가치를 제공합니다. 당사의 AI 기술력은 실질적인 산업 현장의 지",
    "website": "https://officegpt.co.kr/",
    "email": "ghlee@innogent.co.kr",
    "contact": "010-6426-7240",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/767",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "OfficeGPT (오피스지피티)"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "SEO"
    ],
    "techTags": [
      "LLM/생성형AI",
      "AI 에이전트",
      "설문/서베이",
      "RAG/지식검색",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "LLM, GPT, 에이전트, 응답, 검색, 분석, 워크플로우, 연동, 서버",
    "priceText": [
      "(울트라) 월 10GB 이내 문서 학습 / CAPACITY_BASED / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "LLM/생성형AI, AI 에이전트 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 OfficeGPT (오피스지피티) 같은 서비스가 필요한 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1348,
        "name": "OfficeGPT (오피스지피티)",
        "summary": "OfficeGPT는 단순한 질의응답(Chat)을 넘어, 사용자의 복잡한 의도를 파악하고 스스로 도구를 선택해 과업을 완수하는 '에이전틱 워크플로우(Agentic Workflow)' 기반의 지식 관리 플랫폼입니다.",
        "website": "",
        "keywords": [
          "■ Agent",
          "■ Multi-Agent",
          "■ Orchestration",
          "Agentic Workflow",
          "에이전트",
          "에이전틱 워크플로우"
        ],
        "priceText": [
          "(울트라) 월 10GB 이내 문서 학습 / CAPACITY_BASED / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "SEO"
        ],
        "techTags": [
          "LLM/생성형AI",
          "AI 에이전트",
          "설문/서베이",
          "RAG/지식검색",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, GPT, 에이전트, 응답, 검색, 분석, 워크플로우, 연동, 서버"
      }
    ]
  },
  {
    "id": 665,
    "name": "주식회사 구일이커뮤니케이션 (912 Communication Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/172876/8e9d6b22218e4422b4599d7357736da3.png",
    "summary": "AI 음성 보안 솔루션 - 실시간 통화 중 개인정보·민감정보를 발화 단계에서 선택적으로 보호하는 AI 음성 보안 인프라",
    "description": "912 Communication은 AI 기반 실시간 음성 보안 기술을 개발하는 기술 중심 스타트업입니다. 음성 데이터가 생성되는 순간 발생하는 개인정보 및 민감정보 노출 문제를 해결하기 위해, 발화 단계에서 실시간으로 개입하는 음성 인터랙션 보안 인프라 “MUTARI”를 개발하고 있습니다. 기존 음성 보안 시장이 녹취 이후 마스킹이나 사후 탐지 중심으로 구성되어 있는 반면, 912 Communication은 음성이 저장·전사되기 이전 단계에서 위험 구간만 선택적으로 보호하는 구조를 통해 새로운 음성 보안 패러다임을 제시하고 있습니다. 회사는 Audio-LLM 기반 문맥 분석 기술과 실시간 스트리밍 처리 기술을 기반으로, 금융·헬스케어·공공·AI Voice Agent·콜센터 환경 등 다양한 음성 인터랙션 산업에 적용 가능한 보안 구조를 구축하고 있습니다. 또한 SaaS, API, On-Premise 형태로 확장 가능한 서비스 구조를 통해 다양한 기업 환경에 유연하게 적용 가능한 음",
    "website": "https://mutari-ai.com/",
    "email": "jeongwon@9-1-2.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/665",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "MUTARI"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "데이터/리포트"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "음성/STT/TTS",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "LLM, 분석, STT, 음성, API, 인프라",
    "priceText": [
      "요금제 / 월 구독 / 1,000,000원"
    ],
    "minPrice": 1000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "기술·개발 분야의 아이디어 검증 단계에서 시장/수요조사 근거가 필요한 초기 창업팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1201,
        "name": "MUTARI",
        "summary": "AI 음성 보안 솔루션 - 실시간 통화 중 개인정보·민감정보를 발화 단계에서 선택적으로 보호하는 AI 음성 보안 인프라",
        "website": "https://mutari-ai.com/",
        "keywords": [
          "AI보안",
          "STT보안",
          "VoiceAI",
          "개인정보보호",
          "보이스피싱대응",
          "실시간보안",
          "음성보안",
          "콜센터보안"
        ],
        "priceText": [
          "요금제 / 월 구독 / 1,000,000원"
        ],
        "priceNumber": 1000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "음성/STT/TTS",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 분석, STT, 음성, API, 인프라"
      }
    ]
  },
  {
    "id": 713,
    "name": "주식회사 비앤써",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/187937/30b2f94842a14dba8365ef0ea666e065.png",
    "summary": "AI 기반 계약·정산 자동 검증해서 계약서와 정산 데이터를 동시에 분석하여, 계약 조건과 실제 지급 금액 간의 차이를 자동으로 검증하는 서비스입니다",
    "description": "한국 부동산원 사내 벤처에서 시작하여 부동산 데이터 분석 및 가공을 위한 기업용 솔루션을 개발하여, 부동산 빅데이터와 IT기술을 활용, 누구나 쉽고 편리하게 부동산 거래위험을 진단하고, 해결방안을 제공하는 자동분석 솔루션(특허) 을 제공하였습니다. 현재는 AI 기반 계약·정산 자동 검증 솔루션을 개발/제공하여, 계약서(PDF 등 비정형 문서)와 정산 데이터(엑셀, ERP 등 정형 데이터)를 동시에 분석하며, 계약 조건과 실제 지급 금액 간의 차이를 자동으로 검증하는 서비스를 제공하고 있습니다.",
    "website": "https://contractguard.zerotomind.com",
    "email": "baramart@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/713",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "AI 기반 계약서 및 정산 분석 서비스"
    ],
    "majorTags": [
      "MVP/개발",
      "고객검증/시장조사",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "피드백"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "리포트"
    ],
    "techEvidence": "데이터 분석, 분석",
    "priceText": [
      "프로(월 200회 분석, 월 무제한 데이터 보관) / 유/무료 혼합 / 49,000원"
    ],
    "minPrice": 49000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [
      "Free: 월 3회 분석, 7일 데이터 보관"
    ],
    "recommendation": "경영관리 분야의 아이디어 검증 단계에서 리포트 근거가 필요한 무료 혜택까지 함께 확인하고 싶은",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": true,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1267,
        "name": "AI 기반 계약서 및 정산 분석 서비스",
        "summary": "AI 기반 계약·정산 자동 검증해서 계약서와 정산 데이터를 동시에 분석하여, 계약 조건과 실제 지급 금액 간의 차이를 자동으로 검증하는 서비스입니다",
        "website": "",
        "keywords": [
          "OCR 분석",
          "계약서 검증",
          "계약서 분석",
          "계약서 정산서 검증",
          "리스크 관리",
          "문서 분석",
          "자연어 처리",
          "정산서 검증",
          "정산서 분석"
        ],
        "priceText": [
          "프로(월 200회 분석, 월 무제한 데이터 보관) / 유/무료 혼합 / 49,000원"
        ],
        "priceNumber": 49000,
        "pricingKind": "fixed",
        "benefits": [
          "Free: 월 3회 분석, 7일 데이터 보관"
        ],
        "deliverables": [
          "리포트"
        ],
        "majorTags": [
          "MVP/개발",
          "고객검증/시장조사",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "피드백"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "데이터 분석, 분석"
      }
    ]
  },
  {
    "id": 738,
    "name": "주식회사 아토모스",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/199008/ecef52ac8936457a97a310057f38f700.png",
    "summary": "AI 기반 퍼포먼스 마케팅 자동화 및 광고 성과 분석 솔루션 - AI 기반 광고 성과 분석 및 운영 자동화를 통해 데이터 중심 마케팅을 지원하는 통합 퍼포먼스 마케팅 솔루션",
    "description": "㈜아토모스는 AI 기반 퍼포먼스 마케팅 및 데이터 분석 솔루션을 개발·운영하는 기업으로, 광고 운영 자동화와 데이터 기반 의사결정을 통해 기업의 성장을 지원하고 있습니다. 자체 개발한 AI 마케팅 통합 관리 솔루션 ‘ATMS’를 통해 Meta, Google, TikTok 등 다양한 광고 채널의 데이터를 통합 수집·분석하며, 광고 성과 최적화 및 운영 효율화를 지원합니다. 또한 콘텐츠 제작, 랜딩페이지 구축, 광고 운영, 고객 데이터 분석까지 통합적으로 수행하며, 단순 광고 대행이 아닌 콘텐츠–광고–전환 구조를 연결하는 실무 중심 솔루션을 제공합니다. 다양한 커머스 및 브랜드 운영 경험을 기반으로 초기 창업기업부터 성장 단계 기업까지 맞춤형 디지털 마케팅 환경을 지원하고 있으며, AI 기술을 활용한 자동화 및 성과 개선 중심의 서비스를 지속적으로 고도화하고 있습니다.",
    "website": "https://welcome.atmsads.io/",
    "email": "atomosprojet@atmsads.io",
    "contact": "070-7588-0581",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/738",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "ATMS"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "랜딩페이지/홈페이지",
      "MVP/개발",
      "디자인/브랜딩",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "랜딩페이지",
      "브랜딩",
      "자동화"
    ],
    "techTags": [
      "랜딩페이지 빌더",
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "랜딩페이지",
      "자동화"
    ],
    "techEvidence": "랜딩페이지, 랜딩, 데이터분석, 데이터 분석, 분석, 자동화",
    "priceText": [
      "베이직 / 유/무료 혼합 / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "SNS/광고 문구, 랜딩페이지 결과물로 첫 고객 반응을 빠르게 확인하려는 ATMS 같은 서비스가 필요한 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1303,
        "name": "ATMS",
        "summary": "AI 기반 퍼포먼스 마케팅 자동화 및 광고 성과 분석 솔루션 - AI 기반 광고 성과 분석 및 운영 자동화를 통해 데이터 중심 마케팅을 지원하는 통합 퍼포먼스 마케팅 솔루션",
        "website": "",
        "keywords": [
          "AI마케팅",
          "ROAS",
          "광고성과분석",
          "광고운영",
          "광고자동화",
          "데이터분석",
          "마케팅솔루션",
          "커머스",
          "콘텐츠마케팅",
          "퍼포먼스마케팅"
        ],
        "priceText": [
          "베이직 / 유/무료 혼합 / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "랜딩페이지",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "랜딩페이지/홈페이지",
          "MVP/개발",
          "디자인/브랜딩",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "랜딩페이지",
          "브랜딩",
          "자동화"
        ],
        "techTags": [
          "랜딩페이지 빌더",
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "랜딩페이지, 랜딩, 데이터분석, 데이터 분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 811,
    "name": "주식회사 하니",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/188015/44eb4c767fb54fa1973d8d44cb43dd93.png",
    "summary": "데이터 군집화 기반 정밀 마케팅 추천 시스템-AI 기반 정밀 마케팅 추천 솔루션",
    "description": "“AI로 더 쉬운 업무와 더 정확한 의사결정을 만드는 기업, 주식회사 하니” 주식회사 하니는 기업의 업무 효율화와 데이터 기반 의사결정을 지원하는 AI 솔루션 공급사로, 마케팅 분석 자동화와 교대근무 스케줄링 자동화 등 현장 문제 해결형 AI 서비스를 제공하는 기업입니다. 고객 데이터 분석, 업무 프로세스 최적화, 반복 업무 자동화 기술을 기반으로 기업이 보다 효율적으로 운영되고 성장할 수 있도록 실질적인 AI 활용 환경을 구축하고 있습니다.",
    "website": "https://haniai.kr/",
    "email": "braintouch94@naver.com",
    "contact": "010-7634-4252",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/811",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "TargetInsight",
      "SmartShift"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "광고",
      "자동화"
    ],
    "techTags": [
      "데이터 분석/대시보드",
      "업무 자동화/API"
    ],
    "deliverables": [
      "SNS/광고 문구",
      "자동화"
    ],
    "techEvidence": "데이터 분석, 분석, 자동화",
    "priceText": [
      "베이직 요금제 / 월 구독 / 300,000원"
    ],
    "minPrice": 300000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "데이터 분석/대시보드, 업무 자동화/API 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 TargetInsight 같은 서비스가 필요한 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1404,
        "name": "TargetInsight",
        "summary": "데이터 군집화 기반 정밀 마케팅 추천 시스템-AI 기반 정밀 마케팅 추천 솔루션",
        "website": "",
        "keywords": [
          "AI 마케팅",
          "고객 데이터 분석",
          "고객 세분화",
          "고객군 분석",
          "광고 키워드 추천",
          "마케팅 자동화",
          "온라인 광고 최적화",
          "이커머스 마케팅",
          "타겟 고객 분석",
          "퍼포먼스 마케팅"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "SNS/광고 문구",
          "자동화"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "광고",
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "데이터 분석, 분석, 자동화"
      },
      {
        "id": 1405,
        "name": "SmartShift",
        "summary": "제약조건 기반 AI 자동 스케줄링 ERP - 복잡한 근무 조건을 AI로 분석해 공정하고 효율적인 근무표를 자동으로 생성하는 스케줄링 ERP 솔루션",
        "website": "",
        "keywords": [
          "AI스케줄링",
          "ERP솔루션",
          "교대근무관리",
          "근무관리",
          "근무배정자동화",
          "근무표자동생성",
          "근무표작성",
          "스케줄링ERP",
          "업무자동화",
          "인력관리"
        ],
        "priceText": [
          "베이직 요금제 / 월 구독 / 300,000원"
        ],
        "priceNumber": 300000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "데이터 분석/대시보드",
          "업무 자동화/API"
        ],
        "techEvidence": "데이터 분석, 분석, 자동화"
      }
    ]
  },
  {
    "id": 693,
    "name": "주식회사 로비고스 (ROVIGOS Inc.)",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/189820/61092054afde4ecba37ffde4bd52894f.jpeg",
    "summary": "이커머스 셀러, 중소/중견기업 및 물류사(3PL)을 위한 LLM 기반 대화형 데이터 통합 분석 및 실행형 AI 솔루션입니다.",
    "description": "로비고스는 AI 기반 통합 관제 플랫폼 회사로써 B2B 기반 Agentic LLM 서비스를 통해 산업의 DX-AX-Physical AI로 이어지는 산업의 완전 자동화를 목표로합니다.",
    "website": "https://www.rovigos.com",
    "email": "taeyong.kim@rovigos.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/693",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "로비고스 AI Agent"
    ],
    "majorTags": [
      "MVP/개발",
      "업무자동화/생산성",
      "데이터/리포트"
    ],
    "detailTags": [
      "DB설계",
      "자동화"
    ],
    "techTags": [
      "LLM/생성형AI",
      "데이터 분석/대시보드",
      "업무 자동화/API",
      "DB/인프라"
    ],
    "deliverables": [
      "자동화"
    ],
    "techEvidence": "LLM, 분석, 자동화, DB",
    "priceText": [
      "연간계약 가능 및 옵션별 변동 가능 / 월 구독 / 49,000원"
    ],
    "minPrice": 49000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "LLM/생성형AI, 데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 로비고스 AI Agent 같은 서비스가 필요한 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1472,
        "name": "로비고스 AI Agent",
        "summary": "이커머스 셀러, 중소/중견기업 및 물류사(3PL)을 위한 LLM 기반 대화형 데이터 통합 분석 및 실행형 AI 솔루션입니다.",
        "website": "",
        "keywords": [
          "Agent AI",
          "erp",
          "LLM",
          "온톨로지",
          "자동화"
        ],
        "priceText": [
          "연간계약 가능 및 옵션별 변동 가능 / 월 구독 / 49,000원"
        ],
        "priceNumber": 49000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "MVP/개발",
          "업무자동화/생산성",
          "데이터/리포트"
        ],
        "detailTags": [
          "DB설계",
          "자동화"
        ],
        "techTags": [
          "LLM/생성형AI",
          "데이터 분석/대시보드",
          "업무 자동화/API",
          "DB/인프라"
        ],
        "techEvidence": "LLM, 분석, 자동화, DB"
      }
    ]
  },
  {
    "id": 589,
    "name": "(주)힐링스팟",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/186515/81e8e3b03c1c4610a517be8661008ef2.png",
    "summary": "기업의 팀빌딩과 조직운영을 지원하는 SaaS 기반 HRM 솔루션으로, 구성원의 심리검사 데이터와 AI 분석 기능을 결합해 보다 적합한 팀 구성과 조직관리 의사결정을 지원하는 플랫폼입니다.",
    "description": "어제보다 나은 나를 위해, 보다 나은 세상을 위해 끊임없이 고민하고 움직이는 기업 꿈을 꾸고, 키우고, 가꾸어 가는 우리는 힐링스팟입니다",
    "website": "https://expertdb.ai/",
    "email": "kahayoung@expertdb.ai",
    "contact": "070-7931-1010",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/589",
    "sectors": [
      "기술·개발"
    ],
    "serviceNames": [
      "힐링팀즈"
    ],
    "majorTags": [
      "MVP/개발",
      "데이터/리포트"
    ],
    "detailTags": [
      "기타/확인필요"
    ],
    "techTags": [
      "데이터 분석/대시보드"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "분석",
    "priceText": [
      "오늘의ME 심리검사 이용비용 10인 포함 / 월 구독 / 200,000원"
    ],
    "minPrice": 200000,
    "pricingKind": "fixed",
    "pricingSortRank": 1,
    "benefits": [],
    "recommendation": "데이터 분석/대시보드 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 힐링팀즈 같은 서비스가 필요한 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": true,
    "services": [
      {
        "id": 1099,
        "name": "힐링팀즈",
        "summary": "기업의 팀빌딩과 조직운영을 지원하는 SaaS 기반 HRM 솔루션으로, 구성원의 심리검사 데이터와 AI 분석 기능을 결합해 보다 적합한 팀 구성과 조직관리 의사결정을 지원하는 플랫폼입니다.",
        "website": "https://expertdb.ai/page/hilling_teams.php",
        "keywords": [
          "Ai챗봇",
          "심리검사",
          "조직관리",
          "팀렌즈"
        ],
        "priceText": [
          "오늘의ME 심리검사 이용비용 10인 포함 / 월 구독 / 200,000원"
        ],
        "priceNumber": 200000,
        "pricingKind": "fixed",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "MVP/개발",
          "데이터/리포트"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "데이터 분석/대시보드"
        ],
        "techEvidence": "분석"
      }
    ]
  },
  {
    "id": 586,
    "name": "(주)프랜더",
    "logo": "https://xgsaqqpairap3855818.gcdn.gov-ntruss.com/image/service/191242/1a055b9e713c4785a2dff49b1d4846c2.png",
    "summary": "비전 AI 기반 노코드 e카탈로그 퍼블리싱 : 기존 카탈로그를 디지털 카탈로그로 완성하여 반응형 웹 템플릿 자동 매핑",
    "description": "",
    "website": "",
    "email": "sunwockd@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/586",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "SnapCatalog"
    ],
    "majorTags": [
      "마케팅 콘텐츠",
      "MVP/개발"
    ],
    "detailTags": [
      "노코드"
    ],
    "techTags": [
      "노코드/앱빌더"
    ],
    "deliverables": [
      "상세 확인 필요"
    ],
    "techEvidence": "노코드",
    "priceText": [
      "1000 / CREDIT_TOKEN / 2,000,000원"
    ],
    "minPrice": 2000000,
    "pricingKind": "usage",
    "pricingSortRank": 2,
    "benefits": [],
    "recommendation": "노코드/앱빌더 기술 방식을 활용해 아이디어를 제품 형태로 보여줘야 하는 SnapCatalog 같은 서비스가 필요한 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": true,
    "hasWebsite": false,
    "services": [
      {
        "id": 1094,
        "name": "SnapCatalog",
        "summary": "비전 AI 기반 노코드 e카탈로그 퍼블리싱 : 기존 카탈로그를 디지털 카탈로그로 완성하여 반응형 웹 템플릿 자동 매핑",
        "website": "",
        "keywords": [
          "ai",
          "디지털",
          "마케팅",
          "카탈로그",
          "콘텐츠",
          "팜플렛",
          "홍보"
        ],
        "priceText": [
          "1000 / CREDIT_TOKEN / 2,000,000원"
        ],
        "priceNumber": 2000000,
        "pricingKind": "usage",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "마케팅 콘텐츠",
          "MVP/개발"
        ],
        "detailTags": [
          "노코드"
        ],
        "techTags": [
          "노코드/앱빌더"
        ],
        "techEvidence": "노코드"
      }
    ]
  },
  {
    "id": 595,
    "name": "더 컴퍼니 닥터 (The company doctor)",
    "logo": "",
    "summary": "",
    "description": "",
    "website": "",
    "email": "mjhongxi@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/595",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [],
    "majorTags": [],
    "detailTags": [],
    "techTags": [],
    "deliverables": [],
    "techEvidence": "확인필요",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "AI 솔루션을 검토하는 예비창업자와 초기 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": []
  },
  {
    "id": 624,
    "name": "버즈앤비 주식회사",
    "logo": "",
    "summary": "",
    "description": "",
    "website": "",
    "email": "charley@bzznbyd.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/624",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [],
    "majorTags": [],
    "detailTags": [],
    "techTags": [],
    "deliverables": [],
    "techEvidence": "확인필요",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "AI 솔루션을 검토하는 예비창업자와 초기 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": []
  },
  {
    "id": 689,
    "name": "주식회사 띵킹프렌즈",
    "logo": "",
    "summary": "",
    "description": "",
    "website": "",
    "email": "ceo@thinkingfriends.co.kr",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/689",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [],
    "majorTags": [],
    "detailTags": [],
    "techTags": [],
    "deliverables": [],
    "techEvidence": "확인필요",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "AI 솔루션을 검토하는 예비창업자와 초기 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": []
  },
  {
    "id": 781,
    "name": "주식회사 코디미(CodiMe Co.,Ltd.)",
    "logo": "",
    "summary": "창업자를 위한 올인원 비즈니스 자동화 AI SaaS 플랫폼",
    "description": "",
    "website": "",
    "email": "dg62534@naver.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/781",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [
      "Bizkit (비즈킷)",
      "GeoDocs (지오독스)"
    ],
    "majorTags": [
      "디자인/브랜딩",
      "업무자동화/생산성",
      "기타/확인필요"
    ],
    "detailTags": [
      "자동화",
      "기타/확인필요"
    ],
    "techTags": [
      "업무 자동화/API",
      "확인필요"
    ],
    "deliverables": [
      "자동화",
      "상세 확인 필요"
    ],
    "techEvidence": "자동화",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "업무 자동화/API 기술로 반복 업무를 줄이고 운영 효율을 높이고 싶은 팀",
    "followerCount": 1,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": [
      {
        "id": 1364,
        "name": "Bizkit (비즈킷)",
        "summary": "창업자를 위한 올인원 비즈니스 자동화 AI SaaS 플랫폼",
        "website": "",
        "keywords": [],
        "priceText": [],
        "priceNumber": null,
        "pricingKind": "unknown",
        "benefits": [],
        "deliverables": [
          "자동화"
        ],
        "majorTags": [
          "디자인/브랜딩",
          "업무자동화/생산성"
        ],
        "detailTags": [
          "자동화"
        ],
        "techTags": [
          "업무 자동화/API"
        ],
        "techEvidence": "자동화"
      },
      {
        "id": 1365,
        "name": "GeoDocs (지오독스)",
        "summary": "이커머스 상품 AI GEO 최적화 SaaS 플랫폼",
        "website": "",
        "keywords": [],
        "priceText": [],
        "priceNumber": null,
        "pricingKind": "unknown",
        "benefits": [],
        "deliverables": [
          "상세 확인 필요"
        ],
        "majorTags": [
          "기타/확인필요"
        ],
        "detailTags": [
          "기타/확인필요"
        ],
        "techTags": [
          "확인필요"
        ],
        "techEvidence": "원문에 기술 방식이 명확히 드러나지 않음"
      }
    ]
  },
  {
    "id": 846,
    "name": "핏코",
    "logo": "",
    "summary": "",
    "description": "",
    "website": "",
    "email": "yelim5980@gmail.com",
    "contact": "",
    "sourceUrl": "https://www.modoo.or.kr/ai-solution/organization/846",
    "sectors": [
      "경영관리"
    ],
    "serviceNames": [],
    "majorTags": [],
    "detailTags": [],
    "techTags": [],
    "deliverables": [],
    "techEvidence": "확인필요",
    "priceText": [],
    "minPrice": null,
    "pricingKind": "unknown",
    "pricingSortRank": 3,
    "benefits": [],
    "recommendation": "AI 솔루션을 검토하는 예비창업자와 초기 팀",
    "followerCount": 0,
    "likeCount": 0,
    "hasFreeBenefit": false,
    "hasPrice": false,
    "hasWebsite": false,
    "services": []
  }
];
