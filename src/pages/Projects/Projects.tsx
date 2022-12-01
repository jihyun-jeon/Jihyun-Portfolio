import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { Label } from "../../components/Label";

function Projects() {
  const navigate = useNavigate();

  const onClickProject = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.currentTarget as HTMLDivElement).dataset.value;

    if (value) {
      navigate(value);
    }
  };

  return (
    <>
      <h1 tw="flex justify-center font-semibold text-4xl text-mainBlue">
        Projects
      </h1>
      <div tw="px-36 grid my-10 gap-8 grid-cols-[1fr_minmax(350px,_1fr)]">
        <Card data-value="mars" onClick={onClickProject}>
          <div tw="h-full overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}imgs/musmaBg.png`} />
          </div>
          <div tw="py-1 px-2">
            <p tw="font-bold text-mainBlue pb-2">MARS</p>
            <p>
              <Label txt="React.js" color="blue" />
              <Label txt="Typescript" color="green" />
              <Label txt="MobX" color="rosy" />
              <Label txt="Tailwind" color="violet" />
              <Label txt="Javascript" color="yellow" />
            </p>
            <p tw="pt-4 leading-[1.7rem]">
              (주)무스마에서 입턴십을 하며 진행한 프로젝트.
              <br /> 실서비스의 가치를 이해하고 그 가치를 코드로 구현했습니다.
            </p>
          </div>
        </Card>
        <Card data-value="account" onClick={onClickProject}>
          <div tw="h-full overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}imgs/accountBg.png`} />
          </div>
          <div tw="py-1 px-2">
            <p tw="font-bold text-mainBlue pb-2">Account Manage App</p>
            <p>
              <Label txt="React.js" color="blue" />
              <Label txt="Redux-toolkit" color="rosy" />
              <Label txt="Axios" color="yellow" />
              <Label txt="Tailwind" color="violet" />
              <Label txt="Antd" color="violet" />
            </p>
            <p tw="pt-4 leading-[1.7rem]">
              원티드 프리온보딩 프로그램에 참여하여 진행한 프로젝트.
              <br /> 동료들과 best practice를 찾아가며 진행하였습니다.
            </p>
          </div>
        </Card>

        <Card data-value="airbnb" onClick={onClickProject}>
          <div tw="h-full overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}imgs/airbnbBg.png`} />
          </div>
          <div tw="py-1 px-2">
            <p tw="font-bold text-mainBlue pb-2">Tamna BnB</p>
            <p>
              <Label txt="React.js" color="blue" />
              <Label txt="Styled-component" color="violet" />
              <Label txt="HTML" color="yellow" />
            </p>
            <p tw="pt-4 leading-[1.7rem]">
              제주지역 숙소 예약 및 검색 사이트 입니다.
            </p>
          </div>
        </Card>

        <Card data-value="threppa" onClick={onClickProject}>
          <div tw="h-full overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}imgs/threppaBg.png`} />
          </div>
          <div tw="py-1 px-2">
            <p tw="font-bold text-mainBlue pb-2">
              Threppa &nbsp;(신발 온라인 쇼핑몰)
            </p>
            <p>
              <Label txt="React.js" color="blue" />
              <Label txt="SCSS" color="violet" />
              <Label txt="HTML" color="yellow" />
            </p>
            <p tw="pt-4 leading-[1.7rem]">신발 이커머스 사이트 입니다.</p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Projects;

const Card = styled.div`
  ${tw`border-2 border-solid border-neutral-200 rounded-md h-[21rem] grid grid-rows-[60%_40%] bg-gray-100`}

  &:hover {
    ${tw`cursor-pointer`}

    img {
      ${tw`scale-110`}
    }
  }

  img {
    ${tw`transform duration-300`}
  }
`;
