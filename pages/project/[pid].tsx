import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";

export default function Project() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center items-center py-3">
        <div>
          <h1 className="text-center text-4xl font-bold">{pid}</h1>
          <div className="mx-auto mt-8 rounded-2xl shadow-lg">
            <p className="p-5">This page is about project {pid}.</p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
