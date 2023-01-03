import Meta from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta title="Home Page" />
      <div className="flex h-[calc(100vh-180px)] justify-center items-center">
        <h1 className="font-bold text-5xl text-center">
          Welcome to My Website!
        </h1>
      </div>
    </>
  );
}
