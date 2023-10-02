import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="preload"
          href="/fonts//Pretendard-ExtraBold.subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link rel="preload" href="/fonts/Pretendard-Bold.subset.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Pretendard-SemiBold.subset.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Pretendard-Medium.subset.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Pretendard-Regular.subset.woff2" as="font" type="font/woff2" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
