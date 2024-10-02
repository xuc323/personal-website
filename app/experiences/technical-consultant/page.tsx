import { PageContainer } from "@/components/ContainerUtils";
import { TitleContainer } from "@/components/TextUtils";
import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function Experience() {
  return (
    <div className="py-3">
      <TitleContainer>Technical Consultant</TitleContainer>

      <PageContainer>
        <div></div>
      </PageContainer>
    </div>
  );
}
