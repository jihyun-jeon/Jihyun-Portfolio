import { useRouter } from "next/router";
import { ReactNode } from "react";
import tw from "twin.macro";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";

export const ProjectWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <div tw="py-[3rem] overflow-x-hidden" />
      {children}
      <BackBtn onClick={() => router.back()}>
        <MdArrowBackIos size={55} color="gray" />
      </BackBtn>
    </>
  );
};

const BackBtn = styled.div`
  ${tw`fixed  top-[55%] left-[3%] sm:(hidden) md:(hidden)`}

  &:hover {
    * {
      ${tw` text-mainOrange cursor-pointer`}
    }
  }

  svg {
    ${tw`sm:w-8 md:w-8`}
  }
`;
