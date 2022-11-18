import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Label } from "../../../components/Label";

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
      {/* <Carousel />
      <div className="projectContent">
        <div className="contentItem">
          <h1>개발 내용</h1>
          <AccordionMars />
        </div>
        <br />
        <br />
        <div className="contentItem">
          <h1>성장 포인트</h1>
          <Growing />
        </div>
      </div> */}
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
