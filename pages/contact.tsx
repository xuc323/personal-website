import Meta from "../components/Meta";

export default function Contact() {
  return (
    <>
      <Meta />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold text-black dark:text-white">
          Contact Me
        </h1>
        <div className="w-10/12 mx-auto mt-8 rounded-2xl max-w-3xl shadow-lg bg-white duration-300 max-sm:w-full max-sm:shadow-none dark:bg-black">
          <p className="p-5 text-black dark:text-white">
            This is Xu Chen, currently an undergraduate student at Lehigh
            University. I&apos;m also actively looking for job opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
