import { BASE_DOMAIN } from "@/constants";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import DarkModeIcon from "./DarkModeIcon";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="absolute bottom-0 w-full border-t-2 bg-gray-100 pb-4 pt-3 text-center font-serif text-black max-sm:px-2 dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-2 text-center">
        <div className="flex w-1/12 justify-start">
          <DarkModeIcon />
        </div>
        <div className="grow items-center justify-center">
          <p>
            Copyright &copy; {year}, {BASE_DOMAIN}
          </p>
        </div>
        <div className="flex w-1/12 justify-end gap-3 max-sm:w-2/12">
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
