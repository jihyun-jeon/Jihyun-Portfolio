import tw from "twin.macro";
import styled from "styled-components";

const InfoList = styled.ul`
  ${tw`grid grid-cols-[100px_minmax(100px,_1fr)] mb-2 leading-6 sm:(block pb-3)`}

  .InfoTitle {
    ${tw`font-bold`}
  }

  .bold {
    ${tw`px-1 text-mainOrange`}
  }

  .underLine {
    ${tw`underline`}
  }

  .infoTitle {
    ${tw`sm:mb-1`}
  }
`;

export default InfoList;
