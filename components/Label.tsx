import tw, { TwStyle } from "twin.macro";

type colorTypes = "blue" | "rosy" | "violet" | "green" | "yellow";

interface LabelTypes {
  color: colorTypes;
  txt?: string;
}

const labelColors: Record<colorTypes, TwStyle> = {
  blue: tw` bg-[#d3e5ef]`,
  rosy: tw` bg-[#ffe2dd]`,
  violet: tw` bg-[#eadcf1]`,
  green: tw` bg-[#dbf4db]`,
  yellow: tw` bg-[#fdecc8]`,
};

const styles = ({ color }: LabelTypes) => [
  tw`px-[6px] py-[2px] rounded-2xl text-sm mr-2`,
  labelColors[color],
];

export const Label = ({ txt, color }: LabelTypes) => {
  return <span css={styles({ color })}>{txt}</span>;
};
