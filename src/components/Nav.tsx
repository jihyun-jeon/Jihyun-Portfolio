import { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll); // [순서2]home 페이지에서 스크롤 할 때마다 onScroll함수 실행됨

    setScrolled(window.scrollY > 20); // [순서1]scoll하기 전에 맨 처음 스크롤위치 값을 넣어주기 위해 - 20px넘은 상태에서 새로고침시 바로 ture를 넣어야 함.

    return () => {
      window.removeEventListener("scroll", onScroll); // [순서3]그러나 다른 경로로 이동되면 Nav컴포넌트가 unmount되면서 이벤트 제거됨.
    };
  }, []);

  return (
    <Navigation tw="fixed w-full z-10" className={`${scrolled ? "scoll" : ""}`}>
      <div tw="mx-auto max-w-6xl px-5 flex justify-between bg-mainBgColor">
        <ul className="menu">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>TOY PROJECTS</li>
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
      </div>
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.nav`
  &.scoll {
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
  }
  .menu {
    ${tw`flex content-between items-center  h-[10vh]`}

    li {
      ${tw`font-bold text-xl flex m-5`}

      &:first-of-type {
        ${tw`ml-0`}
      }

      &:last-of-type {
        ${tw`mr-0`}
      }
    }
  }
`;
