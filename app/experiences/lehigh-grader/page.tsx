import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function Experience() {
  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        CS Teaching Assistant / Grader
      </h1>
      <div className="m-3 mx-auto w-10/12 max-w-3xl rounded-2xl bg-white p-5 indent-10 shadow-lg duration-300 dark:bg-black max-sm:w-full max-sm:shadow-none">
        <p className="m-3 text-black dark:text-white">Graders </p>
        <p className="m-3 text-black dark:text-white"></p>
        <p className="m-3 text-black dark:text-white"></p>
        <p className="m-3 text-black dark:text-white"></p>
      </div>
    </div>
  );
}
