import React, { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { TypeAnimation } from "react-type-animation";
import tw from "twin.macro";
import styled from "styled-components";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
// import Scene from "../3d/Scene";

const Scene = React.lazy(() => import("../../3d/Scene"));

function Home() {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible" : "not visible"}.`);
  }, [isVisible]);

  return (
    <div tw="h-screen overflow-y-scroll">
      <header>
        <Nav />
        <section tw="h-[50vh]">
          {/* <Suspense
            fallback={
              <h1 tw="w-10 h-2/3 bg-slate-600">Lazy... Lazy... Lazy...</h1>
            }
          >
            <Scene />
          </Suspense> */}
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
      </header>
      <main tw="mx-auto max-w-6xl">
        <div tw="h-32" />
        {/* About me */}
        <section tw="h-screen">
          <h1 tw="pt-36 text-center text-3xl font-bold ">ABOUT ME</h1>
          <div tw="mt-20  flex">
            <MyImg
              src="/imgs/jihyunImg.png"
              className={isVisible ? "show" : ""}
            />
            <AboutText className={isVisible ? "show" : ""}>
              <h1 ref={ref}>
                저는 <span>기본기가 탄탄한</span> 프론트엔드 개발자
                <span>전지현</span>
                입니다
              </h1>
              <p>
                저는 <span>차분하고 꼼꼼한</span> 성격을 지니고 있어 준비성이
                좋다는 말을 듣곤 합니다. <br /> 또한 저에게 주어진 모든 상황이
                저에게 기회라고 생각하기 때문에 <br /> 모든 일에 적극적인 태도로
                임하고자 합니다.
              </p>
              <p>
                이전엔 세무회계 직종에서 일하며 전산화가 될 수록 업무가
                단순해지는 것을 보고
                <br /> 복잡한 일을 단순하게 만들 수 있다는 것에 흥미를 느껴
                코딩을 시작하게 되었습니다.
              </p>
              <p>
                개발자로서 목표는 기본기가 탄탄하여 빠르게 변화하는 추세에도
                <br /> 그<span>트렌드를 따라갈 수 있는 개발자</span>가 되는 것과
                <br />
                개발로 <span>사람들의 삶을 윤택하게 하는 것</span>
                입니다.
              </p>
              <div className="tmi">
                TMI : <u>#ISFJ</u> <u>#캠핑</u> <u>#서핑</u> <u>#집순이</u>
                <u>#자바스크립트 챔피언이 되는 그날까지</u>
              </div>
            </AboutText>
          </div>
        </section>
        <div tw="h-32" />
        {/* Projects */}
        <section tw="h-screen">
          <h1 tw="pt-36 text-center text-3xl font-bold ">Projects</h1>
          <div tw="mt-20  flex"></div>
        </section>
      </main>
    </div>
  );
}

const MyImg = styled.img`
  ${tw`mr-7 w-1/3 -translate-x-32 opacity-0 transition-all delay-500 duration-500`}

  &.show {
    ${tw`translate-x-0 opacity-100`}
  }
`;

const AboutText = styled.div`
  ${tw` px-12 w-2/3 translate-x-52 opacity-0  transition-all delay-500 duration-500`}

  &.show {
    ${tw`translate-x-0 opacity-100`}
  }

  h1 {
    ${tw`text-2xl mb-14`}
  }

  p {
    ${tw`text-lg mb-10`}
  }

  span {
    ${tw`font-bold px-1 text-mainOrange`}
  }

  .tmi {
    ${tw`pt-10`}
    u {
      ${tw`mr-1 px-2 bg-sky-100 rounded-lg`}
    }
  }
`;

export default Home;

/* transform, transition, animation의 차이
transform: 요소의 "형태"를 바꿈 (ex: translate:x,y좌표로 움직이는 것 ,skew 등)
transition: "시간차를 두고", 요소의 "속성"이 바뀜 (ex: width의 길이가 바뀜)
animation: 원하는 지점에서 스타일을 바꿀 수 있음, @keyframes 사용
*/
