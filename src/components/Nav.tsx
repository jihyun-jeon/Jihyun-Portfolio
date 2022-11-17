import React, { useEffect } from "react";

import tw from "twin.macro";
import styled from "styled-components";

function Nav() {
  return (
    <Navigation tw="fixed w-full">
      <div tw="mx-auto max-w-6xl flex justify-between bg-mainBgColor">
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
      </div>
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.nav`
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
