import { ReactNode, useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Accordion = ({
  CarouselTitle,
  children,
}: {
  CarouselTitle: string;
  children: ReactNode;
}) => {
  const [isOpen, setOpen] = useState(false);
  const [cotentHeight, setCotentHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCotentHeight(contentRef.current?.scrollHeight ?? 0);
  }, []);

  return (
    <AccordionStyle>
      <div
        className={`title accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {CarouselTitle}
      </div>

      <div
        ref={contentRef}
        className={`content ${isOpen ? "" : "collapsed"}`}
        style={{ height: `${isOpen ? cotentHeight : 0}px` }}
      >
        <div tw="px-6 pb-1 pt-4">{children}</div>
      </div>
    </AccordionStyle>
  );
};

export default Accordion;

const AccordionStyle = styled.div`
  ${tw`mb-4`}

  .title {
    ${tw`font-bold cursor-pointer text-[#666] py-3 px-6 border-[1px] border-gray-700 rounded-2xl flex items-center bg-mainBgColor`}

    &:hover {
      ${tw`text-mainBlue font-bold`}
    }

    &.open {
      ${tw`text-mainBlue font-bold`}
    }

    &::before {
      ${tw`mr-3 content-[''] w-0 h-0 border-solid border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-current`}
    }

    &.open::before {
      ${tw`mr-3 content-[''] w-0 h-0 border-solid border-l-[6px] border-l-mainBlue  border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-transparent`}
    }
  }

  .content {
    ${tw`overflow-hidden  transition-[height] duration-300 ease-in-out`}
    &.collapsed {
      ${tw`h-0 transition-all duration-300 ease-out`}
    }
  }
`;
