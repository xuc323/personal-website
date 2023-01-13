import Meta from "../../components/Meta";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <Meta description="Lehigh's Mountaintop Project STEM Visualization that explains engineering concepts." />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold text-black dark:text-white">
          STEM Visualization
        </h1>
        <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
          <p className="m-3 py-2 text-black dark:text-white">
            Mountaintop Summer Project is one of the programs that is offered by
            my school, Lehigh University. It is the program hosted every summer
            in which we work with professors who came up with the project
            details. Students are then selected to help.
          </p>
          <p className="m-3 py-2 text-black dark:text-white">
            I participated in one of the programs during the summer of 2021. The
            program was called STEM Visualization in which we built an
            interactive web application that is currently running on the
            school&apos;s server. The issue that the project was trying to solve
            is the high dropout rate of students from engineering schools.
            Students first entering engineering school might get frustrated from
            looking at all the complicated concepts and get scared of what would
            happen moving forward. In order to help those students, we try to
            create a web app that is able to show the introduction level
            concepts with both graphical and video demonstrations.
          </p>
          <div className="flex flex-row p-3 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl">
            <Image
              src="/project/python.svg"
              width={90}
              height={90}
              alt="python icon"
            />
            <Image
              src="/project/scikit_learn.svg"
              width={90}
              height={90}
              alt="scikit-learn icon"
            />
            <Image
              src="/project/bokeh.svg"
              width={90}
              height={90}
              alt="bokeh icon"
            />
          </div>
          <p className="m-3 py-2 text-black dark:text-white">
            This project was an inheritance from previous years. Since the
            professor who worked with us specializes in chemistry and machine
            learning, our primary goal was to teach data science concepts to new
            engineering students by using some chemistry datasets. We used
            Python as our main coding language because it is one of the most
            popular languages in the machine learning field. As the final
            project is a web application, we then chose Bokeh as our module
            builder. Bokeh allows us to code in Python and translates to HTML
            and CSS for content and JavaScript for interactivity. The machine
            learning library we used was Scikit-learn because it is considered
            an easy-to-learn and easy-to-use library.
          </p>
          <p className="m-3 py-2 text-black dark:text-white">
            By performing basic data cleaning and modification, we were able to
            separate it into training and testing data. We then used a few
            algorithms including regressions and classifications. The user can
            select different attributes to add to the calculation and observe
            the performance.
          </p>
          <div className="py-2 max-w-lg mx-auto">
            <video autoPlay muted>
              <source src="/project/demo.mp4" type="video/mp4" />
              Video is not supported by your browser.
            </video>
          </div>
          <p className="m-3 py-2 text-black dark:text-white">
            This project is then passed along to other groups to add more
            modules.
          </p>
        </div>
      </div>
    </>
  );
}
