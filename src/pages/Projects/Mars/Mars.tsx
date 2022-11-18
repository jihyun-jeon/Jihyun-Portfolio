import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Label } from "../../../components/Label";
import Carousel from "../../../components/Carousel";
import Accordion from "../../../components/Accordion";

const CarouselData = [
  { title: "home 대쉬보드", url: "https://www.youtube.com/embed/sI7kB4cCKz0" },
  {
    title: "장비 디테일 페이지",
    url: "https://www.youtube.com/embed/qcmL_gua0Y0",
  },
  {
    title: "디바이스 디테일 페이지",
    url: "https://www.youtube.com/embed/_-b6ophYQ9s",
  },
];

const Mars = () => {
  return (
    <div tw="max-w-3xl mx-auto">
      <h1 tw="font-bold mb-5 text-3xl">Mars 프로젝트</h1>
      <div tw="my-12">
        <InfoList>
          <li className="InfoTitle">서비스 소개</li>
          <li>
            이 서비스는 <span className="underLine">공사현장 관리자</span>를
            위한
            <span className="bold underLine">실시간 장비 모니터링 시스템</span>
            이며,
            <br />
            (주)무스마 내에서 실제 고객사에게 자사 제품 소개시 사용될 샘플
            시안을 만든 것 입니다.
          </li>
        </InfoList>
        <InfoList>
          <li className="InfoTitle">사용 스택</li>
          <li>
            <Label txt="React.js" color="blue" />
            <Label txt="Typescript" color="green" />
            <Label txt="MobX" color="rosy" />
            <Label txt="Tailwind" color="violet" />
            <Label txt="Javascript" color="yellow" />
          </li>
        </InfoList>
        <InfoList>
          <li className="InfoTitle">기간</li>
          <li>2022. 07. 18 ~ 2022. 08. 11 (4주)</li>
        </InfoList>
        <InfoList>
          <li className="InfoTitle">팀 구성</li>
          <li>프론트엔드 2명, 백엔드 2명</li>
        </InfoList>
      </div>
      <Carousel CarouselData={CarouselData} />
      <div tw="my-20">
        <div tw="max-w-[660px] mx-auto">
          <h1 tw="py-8 text-xl font-bold">개발 내용</h1>

          <Accordion
            CarouselTitle={
              "1. Google Maps Javascript API 연동 장비 현황도 구현"
            }
          >
            <div>
              <div tw="mb-6">
                이 서비스는 해외 공사 현장에서도 사용될 것을 고려했기 때문에,
                <br /> 전 세계의 지도를 제공하는 Google Maps Javascript API를
                사용했습니다.
              </div>

              <div tw="mb-6">
                <p tw="font-bold">📍 도면을 지도 배경으로 커스텀</p>
                <p tw="ml-2 mt-1">
                  <span> - </span>
                  실제 공사장 도면을 지도 배경 이미지로 활용하여 장비의 위치를
                  파악할 수 있도록 하였습니다.
                </p>
              </div>

              <div tw="mb-6">
                <p tw="font-bold"> 📍 Marker를 이용한 장비의 가동상황 표시</p>
                <p tw="ml-2 mt-1">
                  <span> - </span>
                  장비별 아이콘을 Marker로 표시하고, 장비 가동 상태에 따라
                  아이콘 색상이 변경됩니다.
                </p>
              </div>
              <div tw="mb-6">
                <p tw="font-bold">
                  📍 Cluster와 Overlay를 활용한 공사현장 표시
                </p>
                <p tw="ml-2 mt-1">
                  <span> - </span>
                  지도 축소 시 Cluster로 마커가 하나로 모이고, 마커 클릭 시
                  Overlay에 장비 이름이 표시되어 <br />
                  관리자가 공사현장을 한눈에 파악할 수 있도록 하였습니다.
                </p>
              </div>
            </div>
          </Accordion>
          <Accordion CarouselTitle={"2. Context API를 이용한 Toast 메시지"}>
            <h2>children2</h2>
          </Accordion>
          <Accordion CarouselTitle={"3. 재사용 가능한 컴포넌트 구상"}>
            <h3>children3</h3>
          </Accordion>
        </div>
        {/*   
        <div className="contentItem">
          <h1>성장 포인트</h1>
          <Growing />
        </div>*/}
      </div>
    </div>
  );
};

export default Mars;

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
