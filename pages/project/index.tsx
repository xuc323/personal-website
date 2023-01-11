import Link from "next/link";
import Meta from "../../components/Meta";

export default function Project() {
  return (
    <>
      <Meta title="Projects" description="All my project experiences." />
      <div className="py-3">
        <h1 className="text-center text-4xl text-black font-bold dark:text-white">
          Project Experiences
        </h1>
        <div className="w-10/12 mx-auto mt-8 rounded-2xl shadow-lg bg-white max-w-3xl dark:bg-black max-sm:w-full">
          <ul className="grid grid-cols-3 p-5 text-blue-500 max-md:grid-cols-2 max-sm:grid-cols-1">
            <li className="m-2 border p-2 text-center rounded-lg min-h-[200px]">
              <Link href="/project/welcomebot">Discord Welcome Bot</Link>
              <p className="text-black dark:text-white"></p>
            </li>
            <li className="m-2 border p-2 text-center rounded-lg min-h-[200px]">
              <Link href="/project/personalweb">Personal Website</Link>
            </li>
            <li className="m-2 border p-2 text-center rounded-lg min-h-[200px]">
              <Link href="/project/visualization">STEM Visualization</Link>
            </li>
            <li className="m-2 border p-2 text-center rounded-lg min-h-[200px]">
              <Link href="/project/graphics">Computer Graphics</Link>
            </li>
            <li className="m-2 border p-2 text-center rounded-lg min-h-[200px]">
              <Link href="/project/quizbowl">Music Quiz Bowl</Link>
            </li>
            <li className="m-2 border p-2 text-center rounded-lg min-h-[200px]">
              <Link href="/project/grader">CS Teaching Assistant / Grader</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
