import Meta from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta title="Home Page" />
      <main className="flex justify-center items-center h-[50vh]">
        <h1 className="font-bold text-5xl">Welcome to My Website</h1>
      </main>
    </>
  );
}
