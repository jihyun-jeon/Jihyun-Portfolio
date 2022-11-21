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
      <div tw="px-36 grid mt-12 gap-8 grid-cols-[1fr_minmax(350px,_1fr)]">
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
          </div>
        </Card>
      </div>
      {/*     <h1 className="font-ll toyTitle">🧸 Toy Project</h1>
    <div className="itemContainer">
        <div className="item" data-value="instargram" onClick={onClickProject}>
          <div className="itemBgContainer">
            <img src={`${import.meta.env.BASE_URL}imgs/instargramBg.gif`} />
          </div>
          <div className="ImgDescription">
            <p className="title">Instargram</p>
            <p>
              <span className="blue label">React.js</span>
              <span className="yellow label">Javascript</span>
              <span className="green label">CSS</span>
              <span className="yellow label">HTML</span>
            </p>
          </div>
        </div>
        <div className="item">s</div>
      </div> */}
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
