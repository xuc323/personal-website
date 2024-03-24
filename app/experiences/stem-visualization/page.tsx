import { PageContainer } from "@/components/ContainerUtils";
import {
  HeadParagraphContainer,
  ParagraphContainer,
  TitleContainer,
} from "@/components/TextUtils";
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
      <TitleContainer>STEM Visualization</TitleContainer>

      <PageContainer>
        <HeadParagraphContainer>
          Introduction to the Mountaintop Summer Project
        </HeadParagraphContainer>
        <ParagraphContainer>
          Lehigh University&apos;s Mountaintop Summer Project is a unique
          program where students collaborate with faculty on diverse projects.
          Every summer, professors design the project details and select
          students to contribute. This program offers a hands-on experience,
          blending academic guidance with student innovation.
        </ParagraphContainer>

        <HeadParagraphContainer>
          My Experience with the STEM Visualization Program
        </HeadParagraphContainer>
        <ParagraphContainer>
          In the summer of 2021, I participated in the STEM Visualization
          program. We developed an interactive web application, now hosted on
          the university&apos;s server, aimed at addressing the high dropout
          rates in engineering programs. Recognizing that new students often
          feel overwhelmed by complex concepts, our web app was designed to
          simplify these ideas through graphical and video demonstrations,
          making them more approachable and understandable.
        </ParagraphContainer>

        <div className="mx-auto mb-8 flex max-w-md flex-row items-center justify-between gap-2 rounded-2xl border bg-white p-3 shadow-xl">
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

        <HeadParagraphContainer>
          Developing Educational Tools with Chemistry and Machine Learning
        </HeadParagraphContainer>
        <ParagraphContainer>
          Building on the work of previous years, our project, guided by a
          professor specializing in chemistry and machine learning, focused on
          introducing data science concepts to new engineering students. We used
          Python, a leading language in machine learning, and selected Bokeh for
          building our web application modules. Bokeh translates Python code
          into HTML, CSS, and JavaScript, ensuring seamless interactivity. For
          our machine learning tasks, we utilized Scikit-learn, known for its
          simplicity and effectiveness.
        </ParagraphContainer>

        <div className="mx-auto my-5 max-w-xl overflow-hidden rounded-2xl border shadow-md">
          <video muted controls>
            <source src="/experiences/demo.mp4" type="video/mp4" />
            Video is not supported by your browser.
          </video>
        </div>

        <HeadParagraphContainer>
          Interactive Learning through Data Science Techniques
        </HeadParagraphContainer>
        <ParagraphContainer>
          Our approach involved basic data cleaning and segmentation into
          training and testing sets. We employed various algorithms, including
          regressions and classifications, allowing users to experiment with
          different attributes and observe the algorithm&apos;s performance.
          This interactive aspect aimed to demystify data science and make
          learning more engaging for engineering students.
        </ParagraphContainer>

        <HeadParagraphContainer>
          Passing the Baton: Ongoing Development of the Web Application
        </HeadParagraphContainer>
        <ParagraphContainer>
          Upon completion of our phase of the project, we handed it over to the
          next group of students for further development. This process ensures
          the continuous evolution of the web application, adding new modules
          and features, and keeping the tool relevant and effective for future
          engineering students.
        </ParagraphContainer>

        <div className="text-center">
          <Link
            href="https://srrweb.cc.lehigh.edu/app/"
            className="text-blue-500 underline hover:text-blue-800"
          >
            Access the Application Here
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
