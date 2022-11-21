import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Label } from "../../components/Label";
import Carousel from "../../components/Carousel";
import Accordion from "../../components/Accordion";
import LinkIcon from "../../components/LinkIcon";
import Growing from "../../components/Growing";

const AccountApp = () => {
  return (
    <div tw="max-w-3xl mx-auto">
      <h1 tw="w-full font-bold mb-5 text-3xl flex justify-between">
        Account Manage App
      </h1>
      <div tw="my-12">
        <InfoList>
          <li tw="font-bold mb-3">링크</li>
          <li tw="flex">
            <LinkIcon
              txt="git"
              url="https://github.com/jihyun-jeon/Account-Manage-App/tree/JH"
            />
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-5">서비스 소개</li>
          <li>
            투자 관리 서비스의 관리자 페이지이며, 계좌정보와 고객 정보를 관리할
            수 있습니다.
            <br />
            원티드 프리온보딩 프로그램을 하며 진행한 프로젝트 중 제가 팀원들께
            도움을 준 사항이 많아 제일 기억에 남는 과제입니다.
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">사용 스택</li>
          <li>
            <Label txt="React.js" color="blue" />
            <Label txt="Redux-toolkit" color="rosy" />
            <Label txt="Axios" color="yellow" />
            <Label txt="Tailwind CSS" color="violet" />
            <Label txt="Antd" color="violet" />
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">기간</li>
          <li>2022. 09. 20 ~ 2022. 09. 24 (1주)</li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">팀 구성</li>
          <li>개인 프로젝트 (프론트엔드 1명)</li>
        </InfoList>
      </div>
      <Carousel CarouselData={CarouselData} />
      <div tw="my-20">
        <div tw="max-w-[660px] mx-auto">
          <h1 tw="py-8 text-xl font-bold">개발 내용</h1>

          <Accordion
            CarouselTitle={"1. React Hook Form 라이브러리를 활용한 로그인 구현"}
          >
            <div>
              <div tw="mb-6">
                로그인 폼 유효성 검사시 좀 더 직관적이고 간결한 코드를 쓸 수
                있어서 React Hook Form 라이브러리를 사용하였습니다.
              </div>

              <div tw="mb-6">
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
              </div>
            </div>
          </Accordion>
          <Accordion CarouselTitle={"2. 페이징 히스토리 연동 처리"}>
            <div tw="mb-6">
              선택된 필터 항목 값으로 쿼리 주소를 바꾸고, 브라우저의 주소가
              이동되면 해당 쿼리 값을 URLSearchParams로 읽어서 해당 페이지에
              맞는 리스트를 추려서 보여줄 수 있도록 구현하였습니다.
            </div>
          </Accordion>
          <Accordion CarouselTitle={"3. Redux Toolkit을 사용한 상태관리"}>
            <div tw="mb-6">
              사용자 리스트 데이터를 store로 관리하여 고객명 수정, 사용자 추가,
              사용자 삭제 시 자동으로 리렌더링 되도록 처리하였습니다.
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

export default AccountApp;

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
    title: "React Hook Form 라이브러리를 활용한 로그인 구현",
    url: "/imgs/account-login.gif",
  },
  {
    title: "계좌 리스트 페이지",
    url: "/imgs/account-list.gif",
  },
  {
    title: "사용자 상세 페이지",
    url: "",
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
