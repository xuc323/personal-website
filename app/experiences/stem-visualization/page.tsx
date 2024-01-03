import { Headline, Paragraph } from "@/components/TextUtils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Mountaintop Summer Project: Innovating STEM Education at Lehigh University",
  description:
    "Join the journey of the Mountaintop Summer Project at Lehigh University, where students collaborate on STEM Visualization to reduce dropout rates. Discover how interactive web applications, blending chemistry, machine learning, and data science, are revolutionizing engineering education.",
  keywords: [
    "Mountaintop Summer Project",
    "Lehigh University",
    "STEM Visualization",
    "interactive web application",
    "engineering education",
    "student-faculty collaboration",
    "Python programming",
    "Bokeh module",
    "Scikit-learn",
    "machine learning in education",
    "data science for beginners",
  ],
};

export default function Experience() {
  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        STEM Visualization
      </h1>
      <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
        <Headline text="Introduction to the Mountaintop Summer Project" />
        <Paragraph text="Lehigh University's Mountaintop Summer Project is a unique program where students collaborate with faculty on diverse projects. Every summer, professors design the project details and select students to contribute. This program offers a hands-on experience, blending academic guidance with student innovation." />
        <Headline text="My Experience with the STEM Visualization Program" />
        <Paragraph text="In the summer of 2021, I participated in the STEM Visualization program. We developed an interactive web application, now hosted on the university's server, aimed at addressing the high dropout rates in engineering programs. Recognizing that new students often feel overwhelmed by complex concepts, our web app was designed to simplify these ideas through graphical and video demonstrations, making them more approachable and understandable." />
        <div className="flex flex-row mb-8 p-3 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl">
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
        <Headline text="Developing Educational Tools with Chemistry and Machine Learning" />
        <Paragraph text="Building on the work of previous years, our project, guided by a professor specializing in chemistry and machine learning, focused on introducing data science concepts to new engineering students. We used Python, a leading language in machine learning, and selected Bokeh for building our web application modules. Bokeh translates Python code into HTML, CSS, and JavaScript, ensuring seamless interactivity. For our machine learning tasks, we utilized Scikit-learn, known for its simplicity and effectiveness." />
        <div className="max-w-xl mx-auto my-5 rounded-2xl border shadow-md overflow-hidden">
          <video autoPlay muted controls>
            <source src="/experiences/demo.mp4" type="video/mp4" />
            Video is not supported by your browser.
          </video>
        </div>
        <Headline text="Interactive Learning through Data Science Techniques" />
        <Paragraph text="Our approach involved basic data cleaning and segmentation into training and testing sets. We employed various algorithms, including regressions and classifications, allowing users to experiment with different attributes and observe the algorithm's performance. This interactive aspect aimed to demystify data science and make learning more engaging for engineering students." />
        <Headline text="Passing the Baton: Ongoing Development of the Web Application" />
        <Paragraph text="Upon completion of our phase of the project, we handed it over to the next group of students for further development. This process ensures the continuous evolution of the web application, adding new modules and features, and keeping the tool relevant and effective for future engineering students." />
        <div className="text-center">
          <Link
            href="https://srrweb.cc.lehigh.edu/app/"
            className="text-blue-500 underline hover:text-blue-800"
          >
            Access the Application Here
          </Link>
        </div>
      </div>
    </div>
  );
}
