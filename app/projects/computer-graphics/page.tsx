import { ASSETS_URL } from "@/components/Constants";
import {
  GroupImageContainer,
  PageContainer,
} from "@/components/ContainerUtils";
import { TitleContainer } from "@/components/TextUtils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exploring Computer Graphics with WebGL Technology",
  description:
    "Dive into the world of computer graphics with a detailed account of a Lehigh University course. Discover how modern processors and WebGL technology enable the creation of intricate, high-quality graphics, and view the showcased projects on GitHub Pages.",
  keywords: [
    "Computer Graphics",
    "Lehigh University",
    "WebGL",
    "JavaScript programming",
    "Web Development",
    "graphic rendering",
    "pixel coloration",
    "trigonometry in graphics",
    "GitHub Pages",
    "graphical project display",
  ],
};

export default function Project() {
  return (
    <div className="py-3">
      <TitleContainer>Computer Graphics</TitleContainer>

      <PageContainer>
        <p className="m-3 py-2 text-black dark:text-white">
          Computers are evolving, so are our visual expectations. We tend to
          look for higher-standard, visually appealing images. Thanks to how
          much computation the processors can do nowadays, we can add a lot more
          details to the graphics, and graphical computations can be done right
          on users&apos; devices.
        </p>
        <p className="m-3 py-2 text-black dark:text-white">
          Computers do not generate graphics. They just follow the instructions
          to do various calculations. To let the computer display the graphics
          on the monitor, we need to tell them the color of every single pixel.
          Thankfully there are programming languages out there that simplify
          this process.
        </p>
        <GroupImageContainer>
          <Image
            src={`${ASSETS_URL}/projects/html.svg`}
            width={90}
            height={90}
            alt="html logo"
          />
          <Image
            src={`${ASSETS_URL}/projects/javascript.svg`}
            width={90}
            height={90}
            alt="javascript logo"
            className="rounded-2xl"
          />
          <Image
            src={`${ASSETS_URL}/projects/webgl.svg`}
            width={90}
            height={38}
            alt="webgl logo"
          />
        </GroupImageContainer>
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
      </PageContainer>
    </div>
  );
}
