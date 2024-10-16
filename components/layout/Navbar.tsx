"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import HomeIcon from "./HomeIcon";

export default function Navbar() {
  // state to check if the burger menu is clicked
  // this only works on smaller screen
  const [isOpen, setIsOpen] = useState(false);

  // get the current url so navbar item will have a grey out background
  const path = useSelectedLayoutSegment();

  return (
    <header className="sticky top-0 w-full border-b-2 bg-white font-serif dark:bg-black">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-8 p-2 max-sm:flex-col max-sm:gap-0">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="px-3">
            <HomeIcon />
          </Link>
          {/* Burger menu icon*/}
          <button
            role="menu"
            aria-label="Menu"
            className="group hidden h-12 w-12 items-center justify-center max-sm:flex max-sm:flex-col"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span
              className={`mb-1 h-1 w-6 transform rounded-full bg-black transition duration-300 ease-linear ${
                isOpen
                  ? "translate-y-2 rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              } dark:bg-white`}
            ></span>
            <span
              className={`h-1 w-6 transform rounded-full bg-black transition duration-300 ease-linear ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              } dark:bg-white`}
            ></span>
            <span
              className={`mt-1 h-1 w-6 transform rounded-full bg-black transition duration-300 ease-linear ${
                isOpen
                  ? "-translate-y-2 -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              } dark:bg-white`}
            ></span>
          </button>
        </div>
        {/* Full menu */}
        <ul
          className={`m-0 flex list-none gap-4 p-0 text-gray-500 dark:text-gray-200 max-sm:pt-2 ${
            isOpen ? "max-sm:max-h-40" : "max-sm:max-h-0"
          } transition-all duration-500 max-sm:block max-sm:w-full max-sm:overflow-hidden`}
        >
          <li className="text-center">
            <Link
              href="/projects"
              className={`inline-block w-20 items-center p-2 text-center no-underline transition-all ${
                path === "projects" &&
                "rounded-2xl bg-gray-300 dark:bg-gray-700"
              } hover:text-black dark:hover:text-white max-sm:w-full`}
              onClick={() => setIsOpen(false)}
            >
              Project
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/experiences"
              className={`inline-block items-center p-2 text-center no-underline transition-all ${
                path === "experiences" &&
                "rounded-2xl bg-gray-300 dark:bg-gray-700"
              } hover:text-black dark:hover:text-white max-sm:w-full`}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/about"
              className={`inline-block w-20 items-center p-2 text-center no-underline transition-all ${
                path === "about" && "rounded-2xl bg-gray-300 dark:bg-gray-700"
              } hover:text-black dark:hover:text-white max-sm:w-full`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
