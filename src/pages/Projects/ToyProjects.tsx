import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import LinkIcon from "../../components/LinkIcon";
import { Label } from "../../components/Label";
import { Link } from "react-router-dom";

function ToyProjects() {
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
        Toy Projects
      </h1>
      <div tw="px-36 grid my-10 gap-8 grid-cols-[1fr_minmax(350px,_1fr)]">
        <Card>
          <div tw="h-full overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}imgs/portfolio.png`} />
          </div>
          <div tw="py-1 px-3">
            <p tw="font-bold   py-1 flex justify-between">
              <span tw="text-mainBlue">포트폴리오 사이트</span>
              <li tw="flex">
                <ToyLabel>
                  <a
                    href="https://github.com/jihyun-jeon/portfolio"
                    target="_blank"
                  >
                    📍 git
                  </a>
                </ToyLabel>

                <ToyLabel>
                  <a
                    href="https://velog.io/@jhplus13/series/TIL"
                    target="_blank"
                  >
                    📍 개발노트
                  </a>
                </ToyLabel>
              </li>
            </p>
            <p>
              <Label txt="React.js" color="blue" />
              <Label txt="Typescript" color="green" />
              <Label txt="Tailwind" color="violet" />
              <Label txt="Styled-component" color="rosy" />
            </p>
            <p tw="pt-3">현재 포트폴리오 사이트 입니다.</p>
          </div>
        </Card>
        <Card>
          <div tw="h-full overflow-hidden">
            <a
              href={"https://jihyun-jeon.github.io/instargram/"}
              target="_blank"
            >
              <img src={`${import.meta.env.BASE_URL}imgs/instargramBg.gif`} />
            </a>
          </div>
          <div tw="py-1 px-3">
            <p tw="font-bold   py-1 flex justify-between">
              <span tw="text-mainBlue"> Instargram</span>
              <li tw="flex">
                <ToyLabel>
                  <a
                    href="https://github.com/jihyun-jeon/instargram"
                    target="_blank"
                  >
                    📍 git
                  </a>
                </ToyLabel>

                <ToyLabel>
                  <a
                    href="https://velog.io/@jhplus13/%EC%9C%84%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EA%B0%9C%EB%B0%9C%EB%85%B8%EB%93%9CReact"
                    target="_blank"
                  >
                    📍 개발노트
                  </a>
                </ToyLabel>
              </li>
            </p>
            <p>
              <Label txt="React.js" color="blue" />
              <Label txt="SCSS" color="violet" />
              <Label txt="HTML" color="yellow" />
            </p>
            <p tw="pt-3">
              마크업과 React 실력 향상을 위한 토이프로젝트 입니다.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ToyProjects;

const Card = styled.div`
  ${tw`border-2 border-solid border-neutral-200 rounded-md h-80 grid grid-rows-[65%_35%] bg-gray-100`}

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

const ToyLabel = styled.span`
  ${tw`px-4 py-1 flex justify-center`}
`;
