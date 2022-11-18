import { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import "./accordionMars.css";

// const Accordion = ({ CarouselTitle, children }) => {
//   return (
//     <AccordionItem
//       title={
//         <p tw="ml-4">
//           <span>{CarouselTitle}</span>
//         </p>
//       }
//     >
//       <div>{children}</div>
//     </AccordionItem>
//   );
// };

// const AccordionItem = ({ title, children }: { title: any; children: any }) => {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <div className="itemWrapper">
//       {/* 아코디언 타이틀 */}
//       <div
//         className={`accordion-title ${isOpen ? "open" : ""}`}
//         onClick={() => setOpen(!isOpen)}
//       >
//         {title}
//       </div>
//       {/* 아코디언 아이템 */}
//       <div className={`accordionItem ${!isOpen ? "collapsed" : ""}`}>
//         <div className="accordionContent">{children}</div>
//       </div>
//     </div>
//   );
// };

const Accordion = ({ CarouselTitle, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div tw="mb-4 ">
      {/* 아코디언 타이틀 */}
      <Title
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {CarouselTitle}
      </Title>
      {/* 아코디언 아이템 */}
      {/* accordionItem */}
      <Content className={`${!isOpen ? "collapsed" : ""}`}>
        <div tw="px-6 pb-1 pt-4">{children}</div>
      </Content>
    </div>
  );
};

const Title = styled.div`
  ${tw`font-bold cursor-pointer text-[#666] py-3 px-6 border-[1px] border-gray-700 rounded-2xl flex items-center bg-mainBgColor`}

  &:hover {
    ${tw`text-mainBlue font-bold`}
  }

  &.open {
    ${tw`text-mainBlue font-bold`}
  }

  &::before {
    ${tw`content-[''] w-0 h-0 border-solid border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-current`}
  }

  &.open::before {
    ${tw`content-[''] border-t-0 border-b-[5px] border-solid`}
  }
`;

const Content = styled.div`
  ${tw`overflow-hidden h-auto transition-[height] duration-300 ease-in-expo`}
  /* transition: max-height 0.3s cubic-bezier(1, 0, 1, 0); */

  &.collapsed {
    ${tw`h-0`}/* transition: max-height 0.35s cubic-bezier(0, 1, 0, 1); */
  }
`;

// const AccordionItem = ({ title, children }: { title: any; children: any }) => {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <div className="itemWrapper">
//       <div
//         className={`accordion-title ${isOpen ? "open" : ""}`}
//         onClick={() => setOpen(!isOpen)}
//       >
//         {title}
//       </div>
//       <div className={`accordionItem ${!isOpen ? "collapsed" : ""}`}>
//         <div className="accordionContent">{children}</div>
//       </div>
//     </div>
//   );
// };

export default Accordion;

/* 
      <AccordionItem
        title={
          <p className="font-m itemTitle">
            <span> 2. Context API를 이용한 Toast 메시지</span>
          </p>
        }
      >
        <div className="content">
          <div className="contentLine">
            <div className="innerLine innerLineFlex">
              Context API를 이용하여 toast 메시지를 전역으로 두어, 다른 팀원이
              구현하는 페이지에서도 같이 사용할 수 있도록 하였습니다.
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title={
          <p className="font-m itemTitle">
            <span> 3. 재사용 가능한 컴포넌트 구상</span>
          </p>
        }
      >
        <div className="content">
          <div className="contentLine">
            <div className="innerLine innerLineFlex">
              반복되는 input box와 select box를 공통 컴포넌트로 분리하여
              재사용하였습니다. <br />
              또한 요소마다 조금씩 다른 style 처리를 해야 하는 경우가 있었는데,
              이는 props로 독립적인 style 값을 주어 해결하였습니다. <br />이
              결과 한 컴포넌트를 사용해도 상황에 맞는 별도의 UI를 그릴 수
              있었습니다.
            </div>
            <img src="/imgs/components.png" className="components" />
          </div>
        </div>
      </AccordionItem> */
