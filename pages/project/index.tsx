import Link from "next/link";
import Meta from "../../components/Meta";

export default function Project() {
  return (
    <>
      <Meta title="Projects" description="All my project experiences." />
      <main className="flex justify-center items-center py-3">
        <div>
          <h1 className="text-center text-4xl font-bold">
            Project Experiences
          </h1>
          <div className="mx-auto mt-8 rounded-2xl shadow-lg">
            <ul className="p-5 text-blue-500">
              <li>
                <Link href="/project/p1">Project 1</Link>
              </li>
              <li>
                <Link href="/project/p2">Project 2</Link>
              </li>
              <li>
                <Link href="/project/p3">Project 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
