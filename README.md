# 모두의 창업 AI솔루션 비교하기

모두의창업 AI 솔루션 업체 데이터를 태그 기반으로 탐색하고 비교할 수 있는 React 프로토타입입니다.

## 주요 기능

- 큰 작업 태그 다중 선택
- 세부 태그 기반 필터링
- 업체명, 서비스명, 키워드 검색
- 추천순, 인기순, 가격 낮은순, 가격 높은순 정렬
- 업체 카드 상세 보기
- 업체별 AI 기술/방식, 결과물, 가격, 무료 혜택 확인
- 선택 업체 비교 화면
- 모바일/PC 반응형 레이아웃

## 데이터

데이터는 모두의창업 AI 솔루션 업체 원본 JSON을 기반으로 생성됩니다.

- 원본 데이터: `/Users/macintosh/modoo_ai_solution/outputs/modoo_ai_solution/modoo_ai_solution_raw.json`
- 앱 데이터: `src/data/solutions.ts`
- 데이터 생성 스크립트: `scripts/build-real-data.mjs`

데이터를 다시 생성하려면:

```bash
node scripts/build-real-data.mjs
```

## 실행

```bash
npm install
npm start
```

## 빌드

```bash
npm run build
```

## 기술 스택

- React
- TypeScript
- Tailwind CSS
- lucide-react
