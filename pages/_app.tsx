import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import Script from "next/script";

// 클라이언트에서 - html파일을 만들때 html의 wrapper임
function MyApp({ Component, pageProps }: AppProps) {
  // GA 설정 시작
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // GA 설정 끝

  // scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = "auto";

    const cacheScrollPositions: Array<[number, number]> = [];
    let shouldScrollRestore: null | { x: number; y: number };

    router.events.on("routeChangeStart", () => {
      cacheScrollPositions.push([window.scrollX, window.scrollY]);
    });

    router.events.on("routeChangeComplete", () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore;
        window.scrollTo(x, y);
        shouldScrollRestore = null;
      }
      window.history.scrollRestoration = "auto";
    });

    router.beforePopState(() => {
      if (cacheScrollPositions.length > 0) {
        const scrollPosition = cacheScrollPositions.pop();
        if (scrollPosition) {
          shouldScrollRestore = {
            x: scrollPosition[0],
            y: scrollPosition[1],
          };
        }
      }
      window.history.scrollRestoration = "manual";
      return true;
    });
  }, []);

  return (
    <>
      {/* GA 설정 시작 */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      {/* GA 설정 끝 */}
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
