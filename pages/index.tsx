import { Meta } from "@/components";

export default function Home() {
  return (
    <>
      <Meta title="Home Page" />
      <div className="flex h-96 justify-center items-center">
        <h1 className="font-bold text-5xl text-center text-black dark:text-white duration-300">
          Welcome to My Website!
        </h1>
      </div>
    </>
  );
}
