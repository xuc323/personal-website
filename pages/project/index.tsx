import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";

export default function Project() {
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
          <h1 className="text-center text-4xl font-bold">
            Project Experiences
          </h1>
          <div className="mx-auto mt-8 rounded-2xl shadow-lg">
            <ul className="p-5 text-blue-500">
              <li>
                <Link href="/project/p1">Project 1</Link>
              </li>
              <li>
                <Link href="/project/p2">Project 2</Link>
              </li>
              <li>
                <Link href="/project/p3">Project 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
