import Link from "next/link";
import Meta from "../../components/Meta";

export default function Project() {
  return (
    <>
      <Meta />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold">Personal Website</h1>
        <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 indent-10 max-w-3xl max-sm:w-full max-sm:shadow-none">
          
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <Link href={"/project"} className="text-blue-500">
          {"<- Project"}
        </Link>
        <Link href={"/project/personalweb"} className="text-blue-500">
          {"Personal Website ->"}
        </Link>
      </div>
    </>
  );
}
