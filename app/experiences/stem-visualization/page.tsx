import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  description:
    "Lehigh's Mountaintop Project STEM Visualization that explains engineering concepts.",
};

export default function Experience() {
  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        STEM Visualization
      </h1>
      <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
        <p className="m-3 py-2 text-black dark:text-white">
          Mountaintop Summer Project is one of the programs that is offered by
          my school, Lehigh University. It is the program hosted every summer in
          which we work with professors who come up with the project details.
          Students are then selected to help.
        </p>
        <p className="m-3 py-2 text-black dark:text-white">
          I participated in one of the programs during the summer of 2021. The
          program was called STEM Visualization. We built an interactive web
          application that is currently running on the school&apos;s server. The
          issue that the project was trying to solve is the high dropout rate of
          engineering schools. Students first entering might get frustrated from
          looking at all the complicated concepts and get scared of what would
          happen moving forward. To help those students, we try to create a web
          app that can show the introduction level concepts with both graphical
          and video demonstrations.
        </p>
        <div className="flex flex-row p-3 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl">
          <Image
            src="/experiences/python.svg"
            width={90}
            height={99}
            alt="python icon"
          />
          <Image
            src="/experiences/scikit_learn.svg"
            width={90}
            height={49}
            alt="scikit-learn icon"
          />
          <Image
            src="/experiences/bokeh.svg"
            width={90}
            height={26}
            alt="bokeh icon"
          />
        </div>
        <p className="m-3 py-2 text-black dark:text-white">
          This project was an inheritance from previous years. Since the
          professor who worked with us specializes in chemistry and machine
          learning, our primary goal was to teach data science concepts to new
          engineering students by demonstrating different processes on chemistry
          datasets. We used Python as our main coding language because it is one
          of the most popular languages in the machine learning field. As the
          final project is a web application, we then chose Bokeh as our module
          builder. Bokeh allows us to code in Python and translates to HTML and
          CSS for content and JavaScript for interactivity. The machine learning
          library we used was Scikit-learn because it is considered an
          easy-to-learn and easy-to-use library.
        </p>
        <p className="m-3 py-2 text-black dark:text-white">
          By performing basic data cleaning and modification, we were able to
          separate it into training and testing data. We then used a few
          algorithms including regressions and classifications. The user can
          select different attributes to add to the calculation and observe the
          performance.
        </p>
        <div className="max-w-xl mx-auto">
          <video autoPlay muted controls>
            <source src="/experiences/demo.mp4" type="video/mp4" />
            Video is not supported by your browser.
          </video>
        </div>
        <p className="m-3 py-2 text-black dark:text-white">
          This project is then passed along to other groups to add more modules.
          The web application can be accessed{" "}
          <Link
            href="https://srrweb.cc.lehigh.edu/app/"
            className="text-blue-500"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
