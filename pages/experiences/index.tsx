import { CardList, Meta, type CardItemProps } from "@/components";

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
    <>
      <Meta title="Projects" description="All my project experiences." />
      <div className="py-3">
        <h1 className="text-center text-4xl text-black font-bold dark:text-white">
          Experiences
        </h1>
        <CardList items={itemList} />
      </div>
    </>
  );
}
