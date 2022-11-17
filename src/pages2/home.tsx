import React from "react";
import { TypeAnimation } from "react-type-animation";
import tw from "twin.macro";
import styled from "styled-components";
import { Suspense } from "react";
import { Link } from "react-router-dom";
// import Scene from "../3d/Scene";

const Scene = React.lazy(() => import("../3d/Scene"));

function Home() {
  return (
    <>
      <Header>
        <nav tw="mx-auto max-w-6xl flex justify-between">
          <ul className="menu">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SKILL</li>
            <li>EXPERIENCE</li>
            <li>PROJECTS</li>
          </ul>
          <ul className="menu">
            <li>
              <a href="https://velog.io/@jhplus13/series" target="_black">
                blog
              </a>
            </li>
            <li>
              <a href="https://github.com/jihyun-jeon" target="_black">
                github
              </a>
            </li>
          </ul>
        </nav>
        <section tw="h-[50vh]">
          <Suspense
            fallback={
              <h1 tw="w-10 h-2/3 bg-slate-600">Lazy... Lazy... Lazy...</h1>
            }
          >
            <Scene />
          </Suspense>
        </section>
        <section tw="mx-auto max-w-6xl flex items-center h-[40vh]">
          <h1 tw="font-bold text-6xl leading-relaxed">
            <div>
              <div>
                안녕하세요!
                <br /> 프론트엔드 개발자
                <span tw="text-orange-400 px-3">전지현</span>
                입니다. 🎉
              </div>
              <div tw="text-orange-400">
                <TypeAnimation
                  sequence={[
                    "기본기가 탄탄해요 💪",
                    1000,
                    "꼼꼼해요 🧐",
                    1000,
                    "능동적이에요 🏃",
                    1000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
            </div>
          </h1>
        </section>
      </Header>
      <main tw="mx-auto max-w-6xl">
        {/* 공백 */}
        <div tw="h-36 bg-slate-100" />
        {/* About me */}
        <section>
          <h1 tw="text-center text-3xl font-bold ">ABOUT ME</h1>
          <div tw="mt-11 mb-11 bg-red-300">
            <div tw="mr-7 w-1/3">
              <img src="/imgs/jihyunImg.png" />
            </div>
            <div>
              <p></p>
              <p></p>
              <p></p>
              {/* <ul>
                <li></li>
              </ul> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const Header = styled.header`
  .menu {
    ${tw`flex content-between items-center  h-[10vh]`}

    li {
      ${tw`font-bold text-xl flex m-4`}

      &:first-of-type {
        ${tw`ml-0`}
      }

      &:last-of-type {
        ${tw`mr-0`}
      }
    }
  }
`;

export default Home;
