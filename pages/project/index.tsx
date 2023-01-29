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
        {/* Project List */}
        <div className="w-10/12 mx-auto mt-8 rounded-2xl max-w-3xl shadow-lg bg-white duration-300 max-sm:w-full max-sm:shadow-none dark:bg-black">
          <ul className="grid grid-cols-3 p-5 text-blue-500 max-md:grid-cols-2 max-sm:grid-cols-1">
            <ProjectItem
              link="/project/welcome-bot"
              name="Discord Welcome Bot"
            />
            <ProjectItem
              link="/project/personal-website"
              name="Personal Website"
            />
            <ProjectItem
              link="/project/stem-visualization"
              name="STEM Visualization"
            />
            <ProjectItem
              link="/project/computer-graphics"
              name="Computer Graphics"
            />
            <ProjectItem
              link="/project/music-quiz-bowl"
              name="Music Quiz Bowl"
            />
            <ProjectItem
              link="/project/lehigh-grader"
              name="CS Teaching Assistant / Grader"
            />
          </ul>
        </div>
        {/* Project List */}
      </div>
    </>
  );
}

interface ProjectItemProps {
  link: string;
  name: string;
}

function ProjectItem({ link, name }: ProjectItemProps) {
  return (
    <li className="m-2 border p-2 text-center rounded-lg min-h-[200px]">
      <Link href={link}>{name}</Link>
    </li>
  );
}
