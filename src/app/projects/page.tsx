import CardList, { type CardItemProps } from "@/components/CardList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "All my project experiences.",
};

export default function Project() {
  const baseUrl = "/projects";

  const itemList: CardItemProps[] = [
    {
      link: `${baseUrl}/welcome-bot`,
      name: "Discord Welcome Bot",
      preview: "",
    },
    {
      link: `${baseUrl}/personal-website`,
      name: "Personal Website",
      preview: "",
    },
    {
      link: `${baseUrl}/computer-graphics`,
      name: "Computer Graphics",
      preview: "",
    },
    {
      link: `${baseUrl}/music-quiz-bowl`,
      name: "Music Quiz Bowl",
      preview: "",
    },
  ];

  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        Projects
      </h1>
      <CardList items={itemList} />
    </div>
  );
}
