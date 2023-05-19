import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Graphics",
  description: "Computer Graphics is a course project",
};

export default function Project() {
  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        Computer Graphics
      </h1>
      <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
        <p className="m-3 py-2 text-black dark:text-white">
          Computers are evolving and becoming faster and faster, and so are our
          expectations of what we see. We tend to see higher-standard, visually
          appealing images. Thanks to how much computation the processors can do
          nowadays, we can add a lot more details to the graphics, and graphical
          computations can be done right on users&apos; devices.
        </p>
        <p className="m-3 py-2 text-black dark:text-white">
          Computers do not generate graphics. They just follow the instructions
          to do various calculations. To let the computer display the graphics
          on the monitor, we need to tell them the color of every single pixel.
          Thankfully there are programming languages out there that simplify
          this process.
        </p>
        <div className="flex flex-row p-5 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl">
          <Image
            src="/projects/html.svg"
            width={90}
            height={90}
            alt="html logo"
          />
          <Image
            src="/projects/javascript.svg"
            width={90}
            height={90}
            alt="javascript logo"
            className="rounded-2xl"
          />
          <Image
            src="/projects/webgl.svg"
            width={90}
            height={38}
            alt="webgl logo"
          />
        </div>
        <p className="m-3 py-2 text-black dark:text-white">
          The project is about a course offered at Lehigh University. The course
          is called Computer Graphics and I took the course in the Fall of 2022.
          We used WebGL to help us draw and shade different shapes. As most web
          browsers support WebGL, it is a good way to learn about the
          fundamentals of graphics and show the professor what we have
          accomplished easily. We learned that shapes are formed by a bunch of
          triangles, and lightings are the calculation of trigonometry, which
          involves a lot of calculus knowledge.
        </p>
        <p className="m-3 py-2 text-black dark:text-white">
          The web page is now hosted on{" "}
          <Link
            href="https://computer-graphics.xchen.org"
            className="text-blue-500"
          >
            GitHub Pages.
          </Link>
        </p>
      </div>
    </div>
  );
}
