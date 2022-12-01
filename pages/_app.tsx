import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";

// 클라이언트에서 - html파일을 만들때 html의 wrapper임
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
