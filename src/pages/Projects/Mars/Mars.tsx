import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Label } from "../../../components/Label";
import Carousel from "../../../components/Carousel";
import Accordion from "../../../components/Accordion";
import LinkIcon from "../../../components/LinkIcon";
import Growing from "./Growing";

const Mars = () => {
  return (
    <div tw="max-w-3xl mx-auto">
      <h1 tw="w-full font-bold mb-5 text-3xl flex justify-between">
        Mars 프로젝트
      </h1>
      <div tw="my-12">
        <InfoList>
          <li tw="font-bold mb-3">링크</li>
          <li tw="flex">
            <LinkIcon
              txt="git"
              url="https://github.com/jihyun-jeon/Mars-monitoring-system"
            />

            <LinkIcon
              txt="개발노트"
              url="https://velog.io/@jhplus13/MARS-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Management-Automated-Reporting-System"
            />
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-8">서비스 소개</li>
          <li>
            이 서비스는 공사현장 관리자를 위한
            <span tw="font-semibold pl-1 text-mainOrange">
              실시간 장비 모니터링 시스템
            </span>
            이며,
            <br />
            <span tw="font-semibold pl-1 text-mainOrange">
              기획부터 앱 제작까지
            </span>
            모두 주도적으로 담당하였습니다.
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">사용 스택</li>
          <li>
            <Label txt="React.js" color="blue" />
            <Label txt="Typescript" color="green" />
            <Label txt="MobX" color="rosy" />
            <Label txt="Tailwind" color="violet" />
            <Label txt="Javascript" color="yellow" />
          </li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">기간</li>
          <li>2022. 07. 18 ~ 2022. 08. 11 (4주)</li>
        </InfoList>
        <InfoList>
          <li tw="font-bold mb-2">팀 구성</li>
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
            <div tw="mb-6">
              Context API를 이용하여 toast 메시지를 전역으로 두어, 다른 팀원이
              구현하는 페이지에서도 같이 사용할 수 있도록 하였습니다.
            </div>
          </Accordion>
          <Accordion CarouselTitle={"3. 재사용 가능한 컴포넌트 구상"}>
            <div tw="mb-6">
              <div>
                반복되는 input box와 select box를 공통 컴포넌트로 분리하여
                재사용하였습니다. <br />
                <br />
                또한 요소마다 조금씩 다른 style 처리를 해야 하는 경우가
                있었는데, 이는 props로 독립적인 style 값을 주어 해결하였습니다.
                <br />
                <br />이 결과 한 컴포넌트를 사용해도 상황에 맞는 별도의 UI를
                그릴 수 있었습니다.
              </div>
              <img src="/imgs/components.png" tw="w-full h-96 mt-2" />
            </div>
          </Accordion>
        </div>

        <div tw="max-w-[660px] mx-auto my-10">
          <h1 tw="py-8 text-xl font-bold">성장 포인트</h1>

          <Growing />
        </div>
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
