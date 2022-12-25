import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Project(props: { message: string }) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <main className="flex justify-center items-center py-3">
        <div>
          <h1 className="text-center text-4xl font-bold">{pid}</h1>
          <div className="mx-auto mt-8 rounded-2xl shadow-lg">
            <p className="p-5">This page is about project {pid}.</p>
            <p>{props.message}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { message: `Message content for ${context.params?.pid}` },
  };
};
