import tw from "twin.macro";
import styled from "styled-components";

const Card = styled.div`
  ${tw`border-2 border-solid border-neutral-200 rounded-md h-[22rem] grid grid-rows-[60%_40%] bg-gray-100`}

  &:hover {
    ${tw`cursor-pointer`}

    img {
      ${tw`scale-110`}
    }
  }

  img {
    ${tw`transform duration-300`}
  }
`;

export default Card;
