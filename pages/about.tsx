import Link from "next/link";
import Meta from "../components/Meta";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Meta />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold dark:text-white">
          About Me
        </h1>
        <div className="w-10/12 mx-auto mt-8 rounded-2xl max-w-3xl shadow-lg bg-white duration-300 max-sm:w-full max-sm:shadow-none dark:bg-black">
          <Link
            href="https://www.lehigh.edu"
            className="float-right m-5 p-5"
            aria-label="lehigh university"
          >
            <Image src="/lehigh.png" width={300} height={300} alt="lehigh" />
          </Link>
          <p className="m-3 p-5 text-black dark:text-white">
            Hello! My name is Xu Chen, currently an undergraduate student at
            Lehigh University. I&apos;m also actively looking for job
            opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
