import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold dark:text-white">
        About Me
      </h1>
      <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
        <Link
          href="https://www.lehigh.edu"
          className="float-right m-5 p-5"
          aria-label="lehigh university"
        >
          <Image src="/lehigh.png" width={300} height={65} alt="lehigh" />
        </Link>
        <p className="m-3 text-black dark:text-white">
          Hello! Glad you are here!
        </p>
        <p className="m-3 text-black dark:text-white">
          My name is Xu and I am a senior at Lehigh University. I am pursuing my
          Computer Science Major here as well as a Data Science Minor. My CS
          experience hasn&apos;t started until high school. I have always been
          fascinated by how computers work and how they change our day-to-day
          life. Therefore I joined a summer camp during that time in which I
          learned my first programming language and could not wait to dive more
          into the fundamentals.
        </p>
        <p className="m-3 text-black dark:text-white">
          At this stage, I am looking for a position that can contribute to big
          projects. I look up to the applications that serve millions, and I
          admire those open-source projects that get used by millions of people.
        </p>
      </div>
    </div>
  );
}
