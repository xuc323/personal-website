import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <main className="flex justify-center items-center py-3">
        <div>
          <h1 className="text-center text-4xl font-bold">Contact Me</h1>
          <div className="w-10/12 mx-auto mt-8 rounded-2xl shadow-lg">
            <p className="p-5">
              This is Xu Chen, currently an undergraduate student at Lehigh
              University. I&apos;m also actively looking for job opportunities.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
