import tw from "twin.macro";
import styled from "styled-components";
import { Label } from "../../components/Label";
import Carousel from "../../components/Carousel";
import Accordion from "../../components/Accordion";
import LinkIcon from "../../components/LinkIcon";
import Growing from "../../components/Growing";

const Threppa = () => {
  return (
    <div tw="max-w-3xl mx-auto">
      <h1 tw="w-full font-bold mb-5 text-3xl flex justify-between">
        Threppa (신발 온라인 쇼핑몰)
      </h1>
      <div tw="my-12">
        <InfoList>
          <li tw="font-bold mb-3">링크</li>
          <li tw="flex">
            <LinkIcon
              txt="git"
              url="https://github.com/jihyun-jeon/crocs-clone-threppa-team"
            />
            <LinkIcon
              txt="notion"
              url="https://velog.io/@jhplus13/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0"
            />
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">서비스 소개</li>
          <li>이 서비스는 Crocs 사이트를 모티브하여 진행한 프로젝트 입니다.</li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">사용 스택</li>
          <li>
            <Label txt="HTML" color="violet" />
            <Label txt="SCSS" color="green" />
            <Label txt="React.js" color="blue" />
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">기간</li>
          <li>2022. 06. 20 ~ 2022. 06. 30 (2주)</li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">팀 구성</li>
          <li>프론트엔드 3명, 백엔드 1명</li>
        </InfoList>
      </div>
      <Carousel CarouselData={CarouselData} />
      <div tw="my-20">
        <div tw="max-w-[660px] mx-auto">
          <h1 tw="py-8 text-xl font-bold">개발 내용</h1>

          <Accordion CarouselTitle={"1. 로그인, 회원가입  폼 유효성 검사"}>
            <div>
              <div tw="mb-6">
                첫 팀 프로젝트였던 터라 유효성 검사 기능이 어떻게 돌아가는지
                파악하기 위해 라이브러리 없이
                <br /> 직접 구현했습니다. <br />
                <br />
                또한 로그인, 회원가입 시 상황별 에러 메시지를 &nbsp;
                <u>
                  <b>백엔드와의 소통 </b>
                </u>
                을 통해 맞추어 <br />
                클라이언트 에러 알림을 하단에 보여주었습니다.
              </div>
            </div>
          </Accordion>
          <Accordion CarouselTitle={"2. 장바구니 및 주문완료"}>
            <div tw="mb-6">
              장바구니에서 수량 변경 또는 할인 쿠폰 입력 시 총액과 배송비가
              자동으로 계산되도록 하였습니다. <br />
              <br /> 또한 수량 변경 시 post 요청 api을 호출해야 했는데 수량 변경
              버튼을 누를 때마다 <br />
              api를 호출하면 api를 불필요하게 자주 호출하는 문제가 있었습니다.
              <br /> <br /> 이를 해결하기 위해&nbsp;
              <u>
                <b>디바운스 처리 </b>
              </u>
              를 통해 마지막에 최종 수량을 한 번만 post 요청 하도록 하였습니다.
            </div>
          </Accordion>
          <Accordion CarouselTitle={"3. Nav bar, Side menu 토글기능"}>
            <div tw="mb-6">
              마우스 hover 시 nav bar와 side menu가 토글 되는 기능을
              구현했습니다.
              <br /> 첫 프로젝트이기 때문에 학습을 하기 위해 애니메이션
              라이브러리를 사용하지 않고
              <br />
              <u>
                <b>순수 CSS의 transition</b>
              </u>
              을 이용하여 구현 하였습니다.
            </div>
          </Accordion>
        </div>

        <div tw="max-w-[660px] mx-auto my-10">
          <h1 tw="py-8 text-xl font-bold">성장 포인트</h1>

          <Growing GrowingData={GrowingData} />
        </div>
      </div>
    </div>
  );
};

export default Threppa;

const InfoList = styled.ul`
  ${tw`grid grid-cols-[100px_minmax(100px,_1fr)] mb-2 leading-6`}

  .InfoTitle {
    ${tw`font-bold`}
  }

  .bold {
    ${tw`px-1 text-mainOrange`}
  }

  .underLine {
    ${tw`underline`}
  }
`;

const CarouselData = [
  {
    title: "로그인, 회원가입",
    url: "https://www.youtube.com/embed/YzbRaQwVHlo",
  },
  {
    title: "장바구니 페이지",
    url: "https://www.youtube.com/embed/IoGZxKdliYY",
  },
  {
    title: "Nav bar, Side menu",
    url: `${import.meta.env.BASE_URL}imgs/threppaMenu.png`,
  },
];

const GrowingData = [
  [
    "소통의 중요성",
    "다른 파트와 협업시 원활한 소통에 대한 중요성을 느꼈습니다.\n<br/>\n navigation bar, render와 같이 프론트엔드에겐 당연한 용어가 백엔드에겐 낯선 용어일 수 있다는 것을 알고, 앞으론 타 부서와 협업시 좀 더 <b>상대를 배려하는 용어와 태도</b>를 취해야 겠다는 생각을 하였습니다.\n<br/> 또한 백엔드와 논의시 구두로 하기보단 <b>문서화하여 정확히 자료를 남기는 것</b>이<br/> 서로에게 더 확실히 소통할 수 있는 방법이라는 것도 알게되었습니다.",
  ],

  [
    "state 선언에 대한 고민",
    "불필요한 state를 선언하게 되면 불필요한 리렌더링이 일어나 성능이 악화된다는 것을 알았습니다.\n<br/>때문에 로그인 구현시 기존에 id와 password를 각각 state로 선언한 코드를 하나의 객체 형태의 state로 바꾸거나, state값을 참조하여 계산되는 값은 변수로 선언하였습니다. \n<br/>이렇게 <b>state를 적절히 선언하는 법</b>에 대해 알게되었고 \n나아가 <u>리액트 렌더링 성능 향상을 고민</u>하며 코드를 작성하고자 노력하고 있습니다. \n<br/>",
  ],
];
