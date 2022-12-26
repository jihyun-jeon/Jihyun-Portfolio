import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { OneLineBreaking, SeveralLineBreaking } from "../util/LineBreaking";

const Growing = ({ GrowingData }: { GrowingData: string[][] }) => {
  const [clickValue, setClickValue] = useState(0);

  const onMouseCircle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setClickValue(+value);
  };

  return (
    <StyledGrowing tw="max-w-[660px] mx-auto">
      <div tw="flex flex-nowrap justify-around gap-12">
        {GrowingData.map((itemData, idx) => {
          return (
            <button
              type="button"
              key={idx}
              value={idx}
              onMouseEnter={onMouseCircle}
              dangerouslySetInnerHTML={{ __html: OneLineBreaking(itemData[0]) }}
              className={clickValue === idx ? "btnClicked" : ""}
            ></button>
          );
        })}
      </div>

      <div tw="min-h-[250px] leading-6">
        <div tw="border-[1px] rounded-2xl border-gray-700 p-4 mt-8">
          {clickValue === 0 && (
            <div
              dangerouslySetInnerHTML={{
                __html: SeveralLineBreaking(GrowingData[clickValue][1]),
              }}
            />
          )}
          {clickValue === 1 && (
            <div
              dangerouslySetInnerHTML={{
                __html: SeveralLineBreaking(GrowingData[clickValue][1]),
              }}
            />
          )}
          {clickValue === 2 && (
            <div
              dangerouslySetInnerHTML={{
                __html: SeveralLineBreaking(GrowingData[clickValue][1]),
              }}
            />
          )}
        </div>
      </div>
    </StyledGrowing>
  );
};

const StyledGrowing = styled.div`
  button {
    ${tw`w-1/3 aspect-square bg-mainBlue text-white rounded-[50%] border-[5px] border-[#f9f2ed]`}
  }

  button:hover {
    cursor: pointer;
  }

  button.btnClicked {
    ${tw`border-[5px] border-transparent rounded-[50%] bg-origin-border`}
    background-image: linear-gradient(rgb(77 85 159), rgb(77 85 159)),
      linear-gradient(
        to top,
        rgb(234 179 8) 0%,
        rgb(254 215 170) 10%,
        rgb(222 94 60) 100%
      );
    background-clip: content-box, border-box;
  }

  .circleContent p {
    ${tw`mb-1`}
  }

  b {
    ${tw`text-mainOrange`}
  }
`;

export default Growing;
