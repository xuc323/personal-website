import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import dynamic from "next/dynamic";

const DarkModeIcon = dynamic(() => import("./DarkModeIcon"), {
  ssr: false,
  loading: () => (
    <div className="border p-1 rounded-full w-6 h-6 bg-white dark:bg-black" />
  ),
});

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="font-serif text-center border-t-2 bg-gray-100 pb-4 pt-3 text-black w-full absolute bottom-0 max-sm:px-2 dark:bg-black dark:text-white">
      <div className="flex text-center justify-between items-center max-w-4xl mx-auto px-2">
        <div className="flex w-1/12 justify-start">
          <DarkModeIcon />
        </div>
        <div className="grow items-center justify-center">
          <p>Copyright &copy; {year}, www.xchen.org</p>
        </div>
        <div className="flex w-1/12 max-sm:w-2/12 justify-end gap-3">
          <Link
            href="https://github.com/xuc323"
            aria-label="Learn more at my Github page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={24} className="transition-all hover:scale-125" />
          </Link>
          <Link
            href="mailto:xuc@xchen.org?subject=[Website Contact]&body=Hello,%0D%0D[Your message goes here....]%0D%0D%0DBest,%0D[Your Name]"
            aria-label="Send me an email"
          >
            <IoMdMail size={24} className="transition-all hover:scale-125" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
