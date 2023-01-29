import Meta from "../../components/Meta";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <Meta description="" />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold text-black dark:text-white">
          Music Quiz Bowl
        </h1>
        <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 indent-10 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
          <p className="m-3 text-black dark:text-white">
            This project was about a Computer Science course offered at Lehigh
            University. The course was called Web Systems Programming in which
            we learned about the fundamentals of web applications, protocols,
            and REST API. Music Quiz Bowl was my group&apos;s final project.
          </p>
          <div className="flex flex-row p-3 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl">
            <Image
              src="/project/javascript.svg"
              width={90}
              height={90}
              alt="javascript logo"
              className="rounded-2xl"
            />
            <Image
              src="/project/vue.svg"
              width={90}
              height={90}
              alt="vuejs logo"
            />
            <Image
              src="/project/expressjs.png"
              width={100}
              height={90}
              alt="expressjs logo"
            />
          </div>
          <p className="m-3 text-black dark:text-white">
            The project required us to use at least one of the outside APIs,
            other than that, we were able to build anything we want. Therefore
            we chose the iTunes API because it is a public API that anyone can
            access and allows us to preview the music for a certain time, which
            is perfect for a quiz game. We first came up with a database of
            music names. These will be the music included in our question bank.
            When the user starts the quiz, our app will randomly select and
            search for one of the music names and get the preview version of the
            music. The user will then be provided with 4 choices, and only one
            would be correct.
          </p>
          <div className="flex flex-row p-3 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl">
            <Image
              src="/project/mongodb.svg"
              width={200}
              height={50}
              alt="mongodb logo"
              className="w-5/12"
            />
            <Image
              src="/project/firebase.svg"
              width={180}
              height={50}
              alt="firebase logo"
              className="w-5/12"
            />
          </div>
          <p className="m-3 text-black dark:text-white">
            In this project, I was focusing on the backend. We used the
            boilerplate provided by the professor with a sample Express web
            server. A few routes were added to validate and verify the answers.
            Furthermore, if an account gains admin privileges, it can add more
            music to the question bank.
          </p>
        </div>
      </div>
    </>
  );
}
