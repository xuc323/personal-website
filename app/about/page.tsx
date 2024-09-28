import { ASSETS_URL } from "@/components/Constants";
import { PageContainer } from "@/components/ContainerUtils";
import { ParagraphContainer, TitleContainer } from "@/components/TextUtils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  keywords: [
    "Xu Chen",
    "Personal Website",
    "Jobs",
    "Lehigh University",
    "Perficient",
  ],
};

export default function About() {
  return (
    <div className="py-3">
      <TitleContainer>About Me</TitleContainer>

      <PageContainer>
        <Link
          href="https://www.lehigh.edu"
          className="float-right m-5 p-5"
          aria-label="lehigh university"
        >
          <Image
            src={`${ASSETS_URL}/lehigh.png`}
            width={300}
            height={65}
            alt="lehigh"
          />
        </Link>
        <ParagraphContainer>Hello! Glad you are here!</ParagraphContainer>
        <ParagraphContainer>
          My name is Xu, and I also go by Albert. I am a senior at Lehigh
          University. I am pursuing my Computer Science Major here as well as a
          Data Science Minor. My CS experience hasn&apos;t started until high
          school. I have always been fascinated by how computers work and how
          they change our day-to-day life. Therefore I joined a summer camp
          during that time in which I learned my first programming language and
          could not wait to dive more into the fundamentals.
        </ParagraphContainer>
        <ParagraphContainer>
          At this stage, I am looking for a position that can contribute to big
          projects. I look up to the applications that serve millions, and I
          admire those open-source projects that get used by millions of people.
        </ParagraphContainer>
      </PageContainer>
    </div>
  );
}
