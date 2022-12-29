import "twin.macro";
import tw from "twin.macro";
import { TypeAnimation } from "react-type-animation";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";
import ToyProjects from "../components/ToyProjects";
import Scene from "../3d/Scene";
import React, { useState } from "react";
import styled from "styled-components";
import { useThemeObserver } from "../hooks/useThemeObserver";

function Home() {
  const [navNumber, setNavNumber] = useState(1);
  const [homeRef] = useThemeObserver(setNavNumber, 1);
  const [aboutRef] = useThemeObserver(setNavNumber, 2);
  const [projectsRef] = useThemeObserver(setNavNumber, 3);
  const [toyRef] = useThemeObserver(setNavNumber, 4);

  return (
    <div>
      <Page id="HOME">
        <Nav navNumber={navNumber} />
        <section>
          {/* <Scene /> */}
          <div tw="w-full bg-amber-300 pt-[10vh] h-[50vh]" />
        </section>
        <section tw="mx-auto max-w-6xl px-10 flex items-center h-[40%]">
          <h1 tw="font-bold text-6xl leading-relaxed md:text-[3rem] sm:text-[2.3rem]">
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
        <div ref={homeRef} tw="pt-5" />
      </Page>
      <main tw="mx-auto max-w-6xl">
        <Page id="ABOUT" tw="pt-[10vh]  flex flex-col justify-center">
          <div ref={aboutRef} />
          <About />
        </Page>
        <Page id="PROJECTS" tw="pt-[10vh] flex flex-col justify-center">
          <div ref={projectsRef} />
          <Projects />
        </Page>
        <Page id="TOY-PROJECTS" tw="pt-[10vh] flex flex-col justify-start">
          <div ref={toyRef} />
          <ToyProjects />
        </Page>
      </main>
    </div>
  );
}

export default Home;

const Page = styled.section`
  ${tw`min-h-screen`}
`;
