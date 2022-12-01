import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'LINESeedSansKR';
    src: url('/fonts/LINESeedSansKR-Rg.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: 'LINESeedSansKR';
    src: url('/fonts/LINESeedSansKR-Bd.woff2') format('woff2');
    font-style: bold;
    font-weight: 700;
    font-display: fallback;
  }
`;

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased  bg-[#f9f2ed] font-[LINESeedSansKR]`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <FontStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
