## 포트폴리오 사이트

여태까지의 성장 이력을 정리한 포트폴리오 사이트 입니다.

[📎 개발노트 바로가기](https://velog.io/@jhplus13/series/TIL)

<br/>

## 사용 기술

React.js, TypeScript, TailwindCSS, Styled-components, three.js

<br/>

## 구현 기능

NAV

1. 메뉴 클릭시 페이지 스크롤 처리<br/>
   : React anchor scroll 활용

2. 스크롤시 nav bar에 shadow 스타일 적용 <br/>
   : window에 scroll이벤트를 걸어 scrollY 위치가 20px 이상이면 nav에 스타일 추가

3. 페이지 스크롤시 해당 페이지 메뉴에 border처리 <br/>
   : IntersectionObserver 기능을 hook으로 만들어 활용 <br/>
   : 특정 요소 교차시 state값을 바꾸어 Nav메뉴에 조건부 스타일링 적용

HOME<br/>

1. 3D 화면<br/>
   : three.js를 취미로 배워보고 있습니다.

2. 타이핑 애니메이션 효과<br/>
   : TypeAnimation 라이브러리 활용

PROJECYS<br/>

1. 동영상 캐러셀 기능<br/>
   : react-slick 활용 (좌우 화살표, 하단 점표시 css 커스텀하여 사용)<br/>
   : preLoad를 활용한 슬라이드시 동영상 로딩 속도 개선

2. 반복되는 컴포넌트 분리<br/>
   : Card, Accordion, Growing 등
