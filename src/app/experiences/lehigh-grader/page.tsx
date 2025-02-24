import { PageContainer } from "@/components/ContainerUtils";
import { HeadParagraphContainer, TitleContainer } from "@/components/TextUtils";
import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function Experience() {
  return (
    <div className="py-3">
      <TitleContainer>CS Teaching Assistant / Grader</TitleContainer>

      <PageContainer>
        <HeadParagraphContainer>Graders</HeadParagraphContainer>
      </PageContainer>
    </div>
  );
}
