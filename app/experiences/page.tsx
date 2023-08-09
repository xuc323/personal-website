import CardList, { type CardItemProps } from "@/components/CardList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "All my project experiences.",
};

export default function Experience() {
  const itemList: CardItemProps[] = [
    {
      link: "/experiences/stem-visualization",
      name: "STEM Visualization",
      preview: "",
    },
    {
      link: "/experiences/lehigh-grader",
      name: "CS Teaching Assistant / Grader",
      preview: "",
    },
  ];

  return (
    <div className="py-3">
      <h1 className="text-center text-4xl text-black font-bold dark:text-white">
        Experiences
      </h1>
      <CardList items={itemList} />
    </div>
  );
}
