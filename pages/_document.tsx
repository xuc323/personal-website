import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WDE3KLWSEF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WDE3KLWSEF');
          `}
        </Script>
      </Head>
      <body className="relative pb-16 m-0 min-h-screen bg-gray-50 dark:bg-stone-900 duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
