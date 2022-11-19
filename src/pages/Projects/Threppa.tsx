import React, { useEffect } from "react";
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
                파악하기 위해 라이브러리 없이 직접 구현했습니다. <br />
                또한 로그인, 회원가입 시 상황별 에러 메시지를 "백엔드와의
                소통"을 통해 맞추어 클라이언트 에러 알림을 하단에
                보여주었습니다.
              </div>

              {/* <div tw="mb-6">
                <p tw="font-bold">📍 커스텀 부분</p>
                <p tw="ml-2 mt-1">
                  <span> - </span>
                  이메일과 비밀번호 필수 입력, 입력 자릿수 길이 검사, 정규식을
                  활용한 비밀번호 유효성 검사
                </p>
                <p tw="ml-2 mt-1">
                  <span> - </span>
                  유효성 검사 오류시 각 상황에 맞는 에러 메세지 출력
                </p>
              </div> */}
            </div>
          </Accordion>
          <Accordion CarouselTitle={"2. 장바구니 및 주문완료"}>
            <div tw="mb-6">
              장바구니에서 수량 변경 또는 할인 쿠폰 입력 시 총액과 배송비가
              자동으로 계산되도록 하였습니다.
              <br /> 또한 수량 변경 시 post 요청 api을 호출해야 했는데 수량 변경
              버튼을 누를 때마다 api를 호출하면 api를 불필요하게 자주 호출하는
              문제가 있었습니다.
              <br /> 이를 해결하기 위해 "디바운스 처리"를 통해 마지막에 최종
              수량을 한 번만 post 요청 하도록 하였습니다.
            </div>
          </Accordion>
          <Accordion CarouselTitle={"3. nav bar, side menu 토글기능"}>
            <div tw="mb-6">
              마우스 hover 시 nav bar와 side menu가 토글 되는 기능을
              구현했습니다. 첫 프로젝트이기 때문에 학습을 하기 위해 애니메이션
              라이브러리를 사용하지 않고 "순수 CSS의 transition을 이용하여
              구현"하였습니다.
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
    title: "nav bar, side menu",
    url: "/imgs/threppaMenu.png",
  },
];

const GrowingData = [
  [
    "불편한 상황을 \n문제로 정의하기",
    "1. 상황\n이 프로젝트는 원티드 측에서 구축해준 json server를 통해 서버를 실행했습니다.\n그런데 구축된 데이터가 깔끔하지 않아 <u>데이터를 조작해서 써야하는 상황이 빈번</u>했으나 팀원 모두는 서버가 그렇게 구축돼있으니 어쩔 수 없는 것으로 알고 진행하였습니다.\n<br/>2. 과정\n그러나 저는 이 상황을 해결할 방법이 있을지 모색하였습니다.\n구글링을 통해 json server에 대해 알아보았고 검색 결과 api호출 주소에 expand를 넣어서 \n여러 데이터를 부모 자식 관계로 받을 수 있다는 것을 알아내었고 이를 팀원에게 공유하였습니다.\n<br/>3. 결과\n<b>저는 이렇게 불편한 상황을 문제로 바라보고 그 문제를 해결하는 개발자가 되고자 합니다.</b>",
  ],
  [
    "서버 통신 로직 분리",
    "<b>api 호출 코드를 컴포넌트로부터 따로 분리하여 한 파일로 모듈화</b> 하였습니다.\n<br/>요청 header의 반복되는 내용을 axios의 interceptor를 거쳐 api 요청하였고, Redux Toolkit에서 제공하는 createAsyncThunk를 사용하여 비동기 통신하였습니다.\n<br/>api 통신 관련된 코드를 한 파일에서 관리할 수 있어 가독성이 좋고 관리하기도 더 수월했습니다.",
  ],
  [
    "에러 해결기\n(CORS오류 해결)",
    "서버와 클라이언트의 port주소가 달라서 CORS오류가 발생하였습니다.\n 여태까지는 백엔드 측에서 이 오류를 해결해줬기 때문에 직접 다뤄보지 못하였는데 이 계기를 통해 CORS의 에러처리 법에 대해 알 수 있었습니다.\n<br/> 저는 CORS middleware를 설치하여 허용하고자 하는 도메인 주소를 추가하여 응답헤더에 Access-Control-Allow-Origin이 설정되도록 하였습니다.\n<br/> 이 방법 외에도 Proxy서버로 중계하여 해결할 수 있는 방법까지 알게되었습니다.",
  ],
];
