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
          <ul className="flex flex-col p-5 text-blue-500">
            <div className="flex justify-between items-center max-sm:block">
              <li className="m-2 w-1/3 border p-2 text-center rounded-lg min-h-[200px] max-sm:w-full max-sm:mx-auto">
                <Link href="/project/welcomebot">Discord Welcome Bot</Link>
                <p className="text-black dark:text-white">D</p>
              </li>
              <li className="m-2 w-1/3 border p-2 text-center rounded-lg min-h-[200px] max-sm:w-full max-sm:mx-auto">
                <Link href="/project/personalweb">Personal Website</Link>
              </li>
              <li className="m-2 w-1/3 border p-2 text-center rounded-lg min-h-[200px] max-sm:w-full max-sm:mx-auto">
                <Link href="/project/visualization">STEM Visualization</Link>
              </li>
            </div>
            <div className="flex justify-between items-center max-sm:block">
              <li className="m-2 w-1/3 border p-2 text-center rounded-lg min-h-[200px] max-sm:w-full max-sm:mx-auto">
                <Link href="/project/computergraphics">Computer Graphics</Link>
              </li>
              <li className="m-2 w-1/3 border p-2 text-center rounded-lg min-h-[200px] max-sm:w-full max-sm:mx-auto">
                <Link href="/project/quizbowl">Music Quiz Bowl</Link>
              </li>
              <li className="m-2 w-1/3 border p-2 text-center rounded-lg min-h-[200px] max-sm:w-full max-sm:mx-auto">
                <Link href="/project/grader">
                  CS Teaching Assistant / Grader
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
