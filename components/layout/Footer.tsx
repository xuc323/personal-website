import Image from "next/image";
import Link from "next/link";
import DarkModeIcon from "./DarkModeIcon";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="font-serif text-center border-t-2 bg-gray-100 p-5 text-gray-500 w-full absolute bottom-0 max-sm:px-2 dark:bg-black">
      <div className="flex text-center justify-between items-center max-w-4xl mx-auto px-2">
        <div className="flex w-1/12 justify-start">
          <DarkModeIcon />
        </div>
        <div className="grow items-center justify-center">
          <p>Copyright &copy; {year}, www.xchen.org</p>
        </div>
        <div className="flex w-1/12 max-sm:w-2/12 justify-end gap-2">
          <Link href="https://github.com/xuc323">
            <Image
              src="/github.svg"
              width={24}
              height={24}
              alt="github link"
              className="bg-white rounded-full p-1 transition-all hover:scale-125"
            />
          </Link>
          <Link href="mailto:xuc@xchen.org?subject=[Website Contact]&body=Hello,%0D%0D[Your message goes here....]%0D%0D%0DBest,%0D[Your Name]">
            <Image
              src="/email.svg"
              width={24}
              height={24}
              alt="email link"
              className="bg-white rounded-full p-1 transition-all hover:scale-125"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
