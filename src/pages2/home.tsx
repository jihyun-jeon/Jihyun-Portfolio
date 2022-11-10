import { TypeAnimation } from "react-type-animation";
import tw from "twin.macro";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Header>
        <div tw="max-w-6xl mx-auto">
          <nav>
            <ul className="menu">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SKILL</li>
              <li>EXPERIENCE</li>
              <li>PROJECTS</li>
            </ul>
          </nav>
        </div>
        <section tw="h-[90vh] flex items-center max-w-6xl mx-auto">
          <h1 tw="font-bold text-6xl leading-relaxed">
            <div>
              <div>
                안녕하세요!
                <br /> 프론트엔드 개발자{" "}
                <span tw="text-orange-400">전지현</span>
                입니다. 🎉
              </div>
              <div tw="text-orange-400">
                <TypeAnimation
                  sequence={[
                    "책임감의 아이콘",
                    3000,
                    "기본기가 탄탄해요",
                    3000,
                    "울보에요 🥲",
                    3000,
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
    </>
  );
}

const Header = styled.header`
  .menu {
    ${tw`flex content-center h-[10vh]`}

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
