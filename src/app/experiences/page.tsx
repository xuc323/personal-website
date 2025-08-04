import CardList, { type CardItemProps } from "@/components/CardList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "All my project experiences.",
};

export default function Experience() {
  const baseUrl = "/experiences";

  const itemList: CardItemProps[] = [
    {
      link: `${baseUrl}/stem-visualization`,
      name: "STEM Visualization",
      preview: "",
    },
    {
      link: `${baseUrl}/lehigh-grader`,
      name: "CS Teaching Assistant / Grader",
      preview: "",
    },
    {
      link: `${baseUrl}/technical-consultant`,
      name: "Technical Consultant",
      preview: "",
    },
  ];

  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        Experiences
      </h1>
      <CardList items={itemList} />
    </div>
  );
}
