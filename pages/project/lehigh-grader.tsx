import Meta from "../../components/Meta";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <Meta description="" />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold text-black dark:text-white">
          CS Teaching Assistant / Grader
        </h1>
        <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 indent-10 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
          <p className="m-3 text-black dark:text-white"></p>
          <p className="m-3 text-black dark:text-white"></p>
          <div className="flex flex-row p-3 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl"></div>
          <p className="m-3 text-black dark:text-white"></p>
          <p className="m-3 text-black dark:text-white"></p>
        </div>
      </div>
    </>
  );
}
