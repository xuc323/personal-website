import Head from "next/head";

type HeadProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

export default function Meta({
  title = "Xu's Website",
  keywords = "Personal Website, Experiences, Web Development",
  description = "Get to know Xu.",
}: HeadProps) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta name="keywords" content={keywords} key="keywords" />
      <meta name="description" content={description} key="description" />
      <meta name="author" content="Xu Chen" key="author" />
      <meta charSet="utf-8" key="charset" />
      {/* <link rel="icon" href="/favicon.ico" key="icon" /> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
        key="apple-touch-icon"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        key="favicon-32x32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        key="favicon-16x16"
      />
      <link rel="manifest" href="/site.webmanifest" key="manifest" />
      <title key="title">{title}</title>
    </Head>
  );
}
