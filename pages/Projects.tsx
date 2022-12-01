import React from "react";
import { useRouter } from "next/router";
import tw from "twin.macro";
import styled from "styled-components";
import { Label } from "../components/Label";
import Image from "next/image";
import { env } from "process";

function Projects() {
  const navigate = useRouter();

  const onClickProject = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.currentTarget as HTMLDivElement).dataset.value;

    if (value) {
      navigate.push(value);
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
            <Image
              src={`/imgs/musmaBg.png`}
              alt="mars이미지"
              width={430}
              height={300}
            />
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
          </div>
        </Card>
        <Card data-value="account" onClick={onClickProject}>
          <div tw="h-full overflow-hidden">
            <Image
              src={`/imgs/accountBg.png`}
              alt="accountApp"
              width={430}
              height={300}
            />
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
          </div>
        </Card>

        <Card data-value="airbnb" onClick={onClickProject}>
          <div tw="h-full overflow-hidden">
            <Image
              src={`/imgs/airbnbBg.png`}
              alt="airbnb"
              width={430}
              height={300}
            />
          </div>
          <div tw="py-1 px-2">
            <p tw="font-bold text-mainBlue pb-2">Tamna BnB</p>
            <p>
              <Label txt="React.js" color="blue" />
              <Label txt="Styled-component" color="violet" />
              <Label txt="HTML" color="yellow" />
            </p>
          </div>
        </Card>

        <Card data-value="threppa" onClick={onClickProject}>
          <div tw="h-full overflow-hidden">
            <Image
              src={`/imgs/threppaBg.png`}
              alt="threppa"
              width={430}
              height={300}
            />
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
          </div>
        </Card>
      </div>
    </>
  );
}

export default Projects;

const Card = styled.div`
  ${tw`border-2 border-solid border-neutral-200 rounded-md h-72 grid grid-rows-[75%_25%] bg-gray-100`}

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
