import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

function Nav({ navNumber }: { navNumber: number }) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    setScrolled(window.scrollY > 20);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const OnClickMenu = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let MemuData = (e.target as HTMLAnchorElement).hash;
    const IdMatchedPage = document.querySelector(MemuData);
    IdMatchedPage?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navigation
      tw="fixed w-full z-10 bg-mainBgColor"
      className={`${scrolled ? "scroll" : ""} `}
    >
      <div tw="mx-auto max-w-6xl px-5 flex justify-between bg-mainBgColor sm:px-2">
        <ul className="menu">
          {menuData.map((data, idx) => (
            <MenuList key={idx} isNow={+navNumber === +(idx + 1)}>
              <a
                href={`#${data}`}
                onClick={OnClickMenu}
                className={idx === menuData.length - 1 ? "toyMenu" : ""}
              >
                {data.includes("-") ? data.replace("-", " ") : data}
              </a>

              <p className="selectedLine" />
            </MenuList>
          ))}
        </ul>
        <ul className="menu">
          <MenuList>
            <a href="https://velog.io/@jhplus13/series" target="_black">
              <svg
                width="28"
                height="28"
                viewBox="0 0 192 192"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
                  fill="currentColor"
                />
              </svg>
              <span>Blog</span>
            </a>
          </MenuList>
          <MenuList>
            <a href="https://github.com/jihyun-jeon" target="_black">
              <AiFillGithub size="32" /> <span>Github</span>
            </a>
          </MenuList>
        </ul>
      </div>
    </Navigation>
  );
}

export default Nav;

const menuData = ["HOME", "ABOUT", "PROJECTS", "TOY-PROJECTS"];

const Navigation = styled.nav`
  &.scroll {
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
  }
  .menu {
    ${tw`flex content-between items-center h-[8vh]`}
  }
`;

const MenuList = styled.li`
  ${tw`font-bold text-xl  m-5 sm:(m-2 text-xs)`}

  &:first-of-type {
    ${tw`ml-0`}
  }

  &:last-of-type {
    ${tw`mr-0`}
  }

  .selectedLine {
    height: 5px;
    background-color: ${(props: { isNow?: boolean }) =>
      props.isNow ? "#4d559f" : ""};
  }

  a {
    ${tw`flex items-center`}
    span {
      ${tw`ml-2 sm:hidden`}
    }

    &.toyMenu {
      ${tw`sm:w-[5rem] text-center`}
    }
  }
`;
