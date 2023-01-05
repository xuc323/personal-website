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
        <div className="w-10/12 mx-auto mt-8 rounded-2xl shadow-lg bg-white dark:bg-black">
          <ul className="p-5 text-blue-500">
            <li className="m-2">
              <Link href="/project/welcomebot">Discord Welcome Bot</Link>
            </li>
            <li className="m-2">
              <Link href="/project/personalweb">Personal Website</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
