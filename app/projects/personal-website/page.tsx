import { ASSETS_URL } from "@/components/Constants";
import {
  GroupImageContainer,
  PageContainer,
} from "@/components/ContainerUtils";
import {
  HeadParagraphContainer,
  ParagraphContainer,
  TitleContainer,
} from "@/components/TextUtils";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Full-Stack Developer's Journey: Building a Personal Website with React and Next.js",
  description:
    "Explore the evolution of a full-stack development project starting in fall 2022, emphasizing the integration of React.js, Next.js, and Tailwind CSS for building a dynamic, efficient personal website. Learn about the challenges and solutions in creating a responsive, SEO-friendly site with server-side rendering and potential database implementation for content management.",
  keywords: [
    "Personal website development",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "server-side rendering",
    "SEO optimization",
    "JavaScript programming",
    "TypeScript programming",
    "single-page application",
    "dynamic web content",
    "frontend development",
    "backend integration",
    "database management",
    "website maintenance",
  ],
};

export default function Project() {
  return (
    <div className="py-3">
      <TitleContainer>Personal Website</TitleContainer>

      <PageContainer>
        <HeadParagraphContainer>
          Embracing Cloud Technology: The Shift to Online Presence
        </HeadParagraphContainer>
        <ParagraphContainer>
          As the digital landscape evolves, businesses increasingly migrate to
          the cloud, emphasizing the importance of websites. Recognizing this
          trend, I embarked on a project in fall 2022 to create my own website.
          This endeavor wasn&apos;t just about carving a digital identity; it
          was also a learning journey into React.js, Next.js, and Tailwind CSS.
          I aimed to build a platform that not only showcases my personal
          experiences but also hones my skills in these cutting-edge web
          technologies.
        </ParagraphContainer>

        <GroupImageContainer>
          <Image
            src={`${ASSETS_URL}/projects/react.svg`}
            width={90}
            height={80}
            alt="reactjs icon"
          />
          <Image
            src={`${ASSETS_URL}/projects/next.svg`}
            width={90}
            height={90}
            alt="nextjs icon"
            className="rounded-full border bg-white"
          />
          <Image
            src={`${ASSETS_URL}/projects/tailwind.svg`}
            width={90}
            height={90}
            alt="tailwind icon"
          />
        </GroupImageContainer>

        <HeadParagraphContainer>
          Optimizing Web Development with React
        </HeadParagraphContainer>
        <ParagraphContainer>
          Initially, I viewed personal websites as simple static content
          providers. However, I quickly realized the limitations and maintenance
          challenges of this approach. Utilizing React, a JavaScript library for
          building dynamic single-page applications, seemed a more efficient
          solution. React&apos;s ability to reuse components like navigation
          bars and footers across different pages streamlines the development
          process. Moreover, its routing system allows direct access to specific
          pages, bypassing the need to navigate from the homepage each time, and
          ensures smooth transitions without full page reloads.
        </ParagraphContainer>

        <HeadParagraphContainer>
          Enhancing Performance and SEO with Next.js
        </HeadParagraphContainer>
        <ParagraphContainer>
          While React excels in creating interactive user interfaces, it falls
          short in server-side rendering, which is crucial for SEO and
          performance. The initial page load with React can be slow, as it
          relies on JavaScript to render content. This is where Next.js becomes
          invaluable. By pre-building pages and serving pre-rendered HTML,
          Next.js addresses these limitations, offering faster load times and
          improved search engine visibility - essential for increasing my
          website&apos;s reach.
        </ParagraphContainer>

        <HeadParagraphContainer>
          Future Plans: Integrating a Backend Database
        </HeadParagraphContainer>
        <ParagraphContainer>
          Looking ahead, I plan to integrate a database into my personal
          website. Despite its content being relatively static, a backend
          database will facilitate content updates without altering the
          codebase. This step will not only simplify maintenance but also
          enhance the website&apos;s functionality and scalability.
        </ParagraphContainer>
      </PageContainer>
    </div>
  );
}
