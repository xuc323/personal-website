import {
  GroupImageContainer,
  PageContainer,
} from "@/components/ContainerUtils";
import { TitleContainer } from "@/components/TextUtils";
import { ASSETS_URL } from "@/constants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {};

export default function Project() {
  return (
    <div className="py-3">
      <TitleContainer>Music Quiz Bowl</TitleContainer>

      <PageContainer>
        <p className="m-3 text-black dark:text-white">
          This project was about a Computer Science course offered at Lehigh
          University. The course was called Web Systems Programming in which we
          learned about the fundamentals of web applications, protocols, and
          REST API. Music Quiz Bowl was my group&apos;s final project.
        </p>

        <GroupImageContainer>
          <Image
            src={`${ASSETS_URL}/projects/javascript.svg`}
            width={90}
            height={90}
            alt="javascript logo"
            className="rounded-2xl"
          />
          <Image
            src={`${ASSETS_URL}/projects/vue.svg`}
            width={90}
            height={78}
            alt="vuejs logo"
          />
          <Image
            src={`${ASSETS_URL}/projects/expressjs.png`}
            width={100}
            height={30}
            alt="expressjs logo"
          />
        </GroupImageContainer>

        <p className="m-3 text-black dark:text-white">
          The project required us to use at least one of the outside APIs, other
          than that, we were able to build anything we want. Therefore we chose
          the iTunes API because it is a public API that anyone can access and
          allows us to preview the music for a certain time, which is perfect
          for a quiz game. We first came up with a database of music names.
          These will be the music included in our question bank. When the user
          starts the quiz, our app will randomly select and search for one of
          the music names and get the preview version of the music. The user
          will then be provided with 4 choices, and only one would be correct.
        </p>

        <GroupImageContainer>
          <Image
            src={`${ASSETS_URL}/projects/mongodb.svg`}
            width={200}
            height={50}
            alt="mongodb logo"
            className="w-5/12"
          />
          <Image
            src={`${ASSETS_URL}/projects/firebase.svg`}
            width={180}
            height={50}
            alt="firebase logo"
            className="w-5/12"
          />
        </GroupImageContainer>

        <p className="m-3 text-black dark:text-white">
          In this project, I was focusing on the backend. We used the
          boilerplate provided by the professor with a sample Express web
          server. A few routes were added to validate and verify the answers.
          Furthermore, if an account gains admin privileges, it can add more
          music to the question bank.
        </p>
      </PageContainer>
    </div>
  );
}
