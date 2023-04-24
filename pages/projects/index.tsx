import { CardList, Meta, type CardItemProps } from "@/components";

export default function Project() {
  const itemList: CardItemProps[] = [
    { link: "/projects/welcome-bot", name: "Discord Welcome Bot", preview: "" },
    {
      link: "/projects/personal-website",
      name: "Personal Website",
      preview: "",
    },
    {
      link: "/projects/computer-graphics",
      name: "Computer Graphics",
      preview: "",
    },
    { link: "/projects/music-quiz-bowl", name: "Music Quiz Bowl", preview: "" },
  ];

  return (
    <>
      <Meta title="Projects" description="All my project experiences." />
      <div className="py-3">
        <h1 className="text-center text-4xl text-black font-bold dark:text-white">
          Projects
        </h1>
        <CardList items={itemList} />
      </div>
    </>
  );
}
