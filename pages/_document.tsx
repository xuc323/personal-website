import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative pb-16 m-0 min-h-screen bg-gray-50 dark:bg-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
