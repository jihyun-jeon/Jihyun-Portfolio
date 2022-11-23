import tw from "twin.macro";
import { TypeAnimation } from "react-type-animation";
import Nav from "../components/Nav";
import About from "./About";
import Projects from "./Projects/Projects";
import Scene from "../3d/Scene";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useThemeObserver } from "../hooks/useThemeObserver";

function Home() {
  const [navNumber, setNavNumber] = useState(1);

  const [explainRef] = useThemeObserver(setNavNumber, 1);
  const [analysisRef] = useThemeObserver(setNavNumber, 2);
  const [eventRef] = useThemeObserver(setNavNumber, 3);

  return (
    <>
      <Page>
        <Nav navNumber={navNumber} />
        <section>
          {/* <Scene /> */} <div tw="w-full pt-[10vh] h-[50vh]" />
        </section>
        <section tw="mx-auto max-w-6xl flex items-center h-[40%]">
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
        <div ref={explainRef} tw="pt-5" />
      </Page>
      <main tw="mx-auto max-w-6xl">
        <Page tw="pt-[10vh]  flex flex-col justify-center border-[2px]">
          <About />
          <div ref={analysisRef} />
        </Page>
        {/* <div tw="h-32" /> */}
        {/* <h1 tw="pt-36 text-center text-3xl font-bold">Projects</h1> */}
        <Page tw="pt-[10vh] flex flex-col justify-center  bg-sky-200">
          <Projects />
          <div ref={eventRef} />
        </Page>
        <h1>toy</h1>
      </main>
    </>
  );
}

export default Home;

const Page = styled.section`
  ${tw`h-screen`}
`;
