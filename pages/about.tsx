import Meta from "../components/Meta";

export default function About() {
  return (
    <>
      <Meta />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold">About Me</h1>
        <div className="w-10/12 mx-auto mt-8 rounded-2xl shadow-lg bg-white">
          <p className="p-5">
            This is Xu Chen, currently an undergraduate student at Lehigh
            University. I&apos;m also actively looking for job opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
