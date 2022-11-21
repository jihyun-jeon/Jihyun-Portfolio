import { useIntersectionObserver } from "react-intersection-observer-hook";
import tw from "twin.macro";
import styled from "styled-components";
const About = () => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  return (
    <div tw="flex" ref={ref}>
      <MyImg
        className={isVisible ? "show" : ""}
        tw="bg-contain bg-[center_top_-4rem] bg-no-repeat"
      />
      <AboutText className={isVisible ? "show" : ""}>
        <h1>
          저는 <span>기본기가 탄탄한</span> 프론트엔드 개발자
          <span>전지현</span>
          입니다
        </h1>
        <p>
          저는 <span>차분하고 꼼꼼한</span> 성격을 지니고 있어 준비성이 좋다는
          말을 듣곤 합니다. <br /> 또한 저에게 주어진 모든 상황이 저에게
          기회라고 생각하기 때문에 <br /> 모든 일에 능동적으로 임하곤 합니다.
        </p>
        <p>
          이전엔 세무회계 직종에서 일하며 전산화가 될 수록 업무가 수월해지는
          것을 보고
          <br /> 복잡한 일을 단순하게 만들 수 있다는 것에 흥미를 느껴 코딩을
          시작하게 되었습니다.
        </p>
        <p>
          개발자로서 목표는 기본기가 탄탄하여 빠르게 변화하는 추세에도
          <br /> 그<span>트렌드를 따라갈 수 있는 개발자</span>가 되는 것과
          <br />
          개발로 문제를 해결하여 <span>사람들의 삶을 윤택하게 하는 것</span>
          입니다.
        </p>
        <div className="tmi">
          TMI : <u>#캠핑</u> <u>#서핑</u> <u>#등산</u>
          <u>#ISFJ</u>
          <u>#자바스크립트 챔피언이 되는 그날까지</u>
        </div>
      </AboutText>
    </div>
  );
};

export default About;

const MyImg = styled.div`
  ${tw`w-1/3 -translate-x-32 opacity-0 transition-all delay-300 duration-500`}

  background-image: url(${import.meta.env.BASE_URL}imgs/jihyunImg.png);

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
      ${tw`mr-2 rounded-lg`}
    }
  }
`;
