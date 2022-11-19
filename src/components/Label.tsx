import tw, { TwStyle } from "twin.macro";

// [t1] union타입- color 값의 타입은 colorTypes 중 하나여야 한다.
type colorTypes = "blue" | "rosy" | "violet" | "green" | "yellow";

interface LabelTypes {
  color: colorTypes;
  txt?: string;
}

// [t2] Record타입
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

// [t2] Record타입
// - 키는 colorTypes만 되고, 값은 TwStyle타입 이라는 뜻
// - 객체의 프로퍼티 각각에 타입을 지정하지 않고도 Record<K,T> 형태로 한번에 지정 가능하다.
// - Record를 쓰면 Union타입을 새 타입의 속성으로 쓸 수 있다.
