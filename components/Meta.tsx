import Head from "next/head";

type headProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

export default function Meta({
  title = "Xu's Website",
  keywords = "Personal Website, Experiences, Web Development",
  description = "Get to know Xu.",
}: headProps) {
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
      <link rel="icon" href="/favicon.ico" key="icon" />
      <title key="title">{title}</title>
    </Head>
  );
}
