import Image from "next/image";
import Meta from "../../components/Meta";

export default function Project() {
  return (
    <>
      <Meta description="" />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold text-black dark:text-white">
          Personal Website
        </h1>
        <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
          <p className="m-3 py-2 text-black dark:text-white">
            As the world is evolving right now, more and more businesses are
            moving to the cloud. Website is becoming more popular than ever, and
            building websites seems to be an essential need to showcase
            ourselves to a broader audience. Not only does the world evolve, but
            the website also changed so much. Although we still enjoy the
            content from different web pages, we also feel the joy of
            interactivity from the web pages.
          </p>
          <div className="flex flex-row p-3 justify-between items-center gap-2 max-w-md mx-auto border rounded-2xl bg-white shadow-xl duration-300 dark:bg-black">
            <Image
              src="/project/react.svg"
              width={90}
              height={90}
              alt="reactjs icon"
            />
            <Image
              src="/project/next.svg"
              width={90}
              height={90}
              alt="nextjs icon"
              className="rounded-full border bg-white"
            />
            <Image
              src="/project/tailwind.svg"
              width={90}
              height={90}
              alt="tailwind icon"
            />
          </div>
          <p className="m-3 py-2 text-black dark:text-white">
            The project was started in the fall of 2022. Not only because of the
            need of having a website to show my personal experiences but also as
            a good way to learn about React.js and its framework Next.js, as
            well as Tailwind CSS.
          </p>
          <p className="m-3 py-2 text-black dark:text-white">
            My first impression of a personal website is just a web server
            serving static content. Although it is easy to implement and serve
            static web pages on the Internet, it creates the overhead for
            maintenance later. The navigation bar on the top and the footer on
            the bottom might be the same throughout all pages, so having to code
            them once and shared them between pages might be a better practice.
            React is a front-end JavaScript library that is capable of building
            single-page applications, and it also uses routers to render the
            website based on different URLs. The user can then visit a specific
            page on the website right away rather than going through the home
            page every time. Most importantly, React handles each page as a
            component, therefore navigating through different pages does not
            require a full page load.
          </p>
          <p className="m-3 py-2 text-black dark:text-white">
            Although React seems to be the perfect choice for my use case,
            there&apos;s still one thing that React is not capable of, which is
            server-side rendering. The initial page is just an empty HTML
            boilerplate, and the content gets injected after JavaScript loads.
            Therefore the initial page load is likely to be slow, and it&apos;s
            not friendly for search engines to index our pages. Next.js comes
            into play by providing page build during build time, which will be
            much more efficient for my use case.
          </p>
          <p className="m-3 py-2 text-black dark:text-white">
            Moving forward, although this is only a personal website that the
            content might not change that often, I still wish to implement a
            database at the backend so changing the content doesn&apos;t need to
            touch the codebase.
          </p>
        </div>
      </div>
    </>
  );
}
