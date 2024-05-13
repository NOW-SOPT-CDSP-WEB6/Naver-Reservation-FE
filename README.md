# NAVER_Reservation

**NOW SOPT WEB 6조**

본 프로젝트는 SOPT 34th, 기획/디자인/클라이언트/서버 합동 세미나 프로젝트입니다.

> 2024.05.11 ~ 05.25

## 👬 팀 소개

|                                                                    **최주용**                                                                    |                                                                     **이진**                                                                     |                                                                    **김한서**                                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <center><img src="https://velog.velcdn.com/images/wuzoo/post/142ca9e2-1b00-4c56-a79c-d751c7f4430b/image.jpeg" width="150" height="150"></center> | <center><img src="https://velog.velcdn.com/images/wuzoo/post/48d244c4-229e-44d5-acf7-87cf64fd4469/image.jpeg" width="150" height="150"></center> | <center><img src="https://velog.velcdn.com/images/wuzoo/post/18d99ff7-e654-4beb-b634-2fc8b6f38f8c/image.jpeg" width="150" height="150"></center> |
|                                                        [wuzoo](https://github.com/wuzoo)                                                         |                                                       [j-nary](https://github.com/j-nary)                                                        |                                                      [seueooo](https://github.com/seueooo)                                                       |
|                                                                     홈 페이지                                                                     |                                                                     키워드 페이지, 리뷰 페이지                                                                     |                                                                     완료 페이지                                                                     |
|                                                                     방문한 모든 가게 조회(`GET`)                                                                     |                                                                     리뷰 작성(`POST`)                                                                      |                                                                    모든 리뷰어들 조회(`GET`)                                                                      |
|첫화면 별표 누르기(`POST`)|||
|예약 횟수와 총 금액 반환(`GET`)|||

## 🔗 기술 스택

| **category** | **stack** |
| :----------: | :-------: |
|      `Common`        |      `eslint`, `prettier`, `yarn`     |
|`Language`|`TypeScript`,`JavaScript`|
|`Build`|`Vite`|
|`Framework`|`React`|
|`Style`|`emotion`|
|`Data Fetching`|`Axios`, `React-Query`|
|`Collaboration`|`Notion`, `Figma`, `Discord`|

## 🎯 기능 목록

- 카테고리별 예약건 조회
- 카테고리별 사용자의 총 예약 건수, 총 결제 금액 안내
- 예약건 무한 스크롤
- 예약건 즐겨찾기
- 리뷰 작성하기
  - 해당 장소 좋아요 기능
  - 이미지를 포함한 리뷰 작성
- 최근 해당 장소를 다녀간 모든 리뷰어들 조회

## 🖋️ 커밋 컨벤션

| **태그**  |           **설명**            |
| :-------: | :---------------------------: |
|   feat:   |   새로운 기능을 구현한 경우   |
|   fix:    |     버그 수정, 오류 해결      |
| refactor: |     코드 수정 및 리팩토링     |
|  style:   |      스타일 추가 및 수정      |
|   docs:   |     문서 추가, 수정, 삭제     |
|   init:   |      개발 환경 초기 세팅      |
|  chore:   | 그 외 자잘한 수정 (주석 삭제) |

## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 assets
	|      |--📁imgs
	|      |--📁svgs
	|-- 📁 api
	|      |-- member.ts
	|      |-- reservation.ts
	|-- 📁 components
	|      |--📁commons
	|         |-- 📁Button
	|             |-- Button.tsx
	|             |-- Button.style.ts 
	|      |--📁reservation (domain)
	|-- 📁 constants
	|      |-- index.ts (상수 데이터 많다면 분리)
	|-- 📁 hooks
	|      |-- 📁 commons
	|          |-- useOverlay.ts
	|      |-- 📁 apis
	|          |-- useMyReservations.ts       
	|-- 📁 pages
	|      |--📁APage
	|      |     |-- Apage.tsx
	|      |     |-- Apage.style.ts
	|      |--📁BPage
	|      |--📁CPage
	|-- 📁 router
	|      |-- router.tsx
	|-- 📁 styles
	|      |-- 📁 theme
	|          |-- theme.ts
	|          |-- emotion.d.ts
	|      |-- GlobalStyle.ts
	|-- 📁 utils 
	|      |-- date.ts
	|-- 📁 type 
	|      |-- api.ts
	|      |-- reservation.ts
	|-- App.tsx
	|-- main.tsx
|-- .eslintrc.json
|-- .prettierrc
|-- .stylelintrc
|-- .gitignore
```
