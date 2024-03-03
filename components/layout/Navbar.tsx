"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="58"
              height="58"
              viewBox="0 0 128 128"
              aria-label="Home Page"
              className="fill-black stroke-white duration-300 dark:fill-white dark:stroke-black"
            >
              <path d="M 70 18.074219 C 69.225 18.074219 68.450391 18.350391 67.900391 18.900391 L 14.099609 72.599609 C 12.899609 73.799609 12.899609 75.700781 14.099609 76.800781 L 22.599609 85.300781 C 23.199609 85.900781 23.899219 86.199219 24.699219 86.199219 C 25.499219 86.199219 26.300781 85.900781 26.800781 85.300781 L 70 42.199219 L 102 74.199219 L 102 114.5 C 99.1 115.5 96.899219 118 96.199219 121 L 84 121 L 84 80 C 84 78.3 82.7 77 81 77 L 59 77 C 57.3 77 56 78.3 56 80 L 56 121 L 38 121 L 38 94 C 38 92.3 36.7 91 35 91 C 33.3 91 32 92.3 32 94 L 32 101.40039 C 27.1 102.60039 23.300781 106.40078 22.300781 111.30078 C 17.400781 112.30078 13.500391 116.2 12.400391 121 L 4 121 C 2.3 121 1 122.3 1 124 C 1 125.7 2.3 127 4 127 L 99 127 C 100.7 127 102 125.7 102 124 L 102 123 C 102 121.3 103.3 120 105 120 C 106.7 120 108 121.3 108 123 L 108 124 C 108 125.7 109.3 127 111 127 L 114 127 C 115.7 127 117 125.7 117 124 C 117 122.3 115.7 121 114 121 L 113.80078 121 C 113.10078 118 110.9 115.5 108 114.5 L 108 80.199219 L 113.09961 85.300781 C 113.69961 85.900781 114.39922 86.199219 115.19922 86.199219 C 115.99922 86.199219 116.80078 85.900781 117.30078 85.300781 L 125.80078 76.800781 C 127.00078 75.600781 127.00078 73.699609 125.80078 72.599609 L 72.099609 18.900391 C 71.549609 18.350391 70.775 18.074219 70 18.074219 z M 70 25.300781 L 119.5 74.800781 L 115.30078 79 L 72.099609 35.900391 C 71.499609 35.300391 70.8 35 70 35 C 69.2 35 68.500391 35.300391 67.900391 35.900391 L 24.699219 79 L 20.5 74.800781 L 70 25.300781 z M 64 101 C 65.7 101 67 102.3 67 104 C 67 105.7 65.7 107 64 107 C 62.3 107 61 105.7 61 104 C 61 102.3 62.3 101 64 101 z M 32 107.69922 L 32 121 L 18.699219 121 C 19.799219 118.6 22.2 117 25 117 C 26.7 117 28 115.7 28 114 C 28 111.2 29.6 108.79922 32 107.69922 z M 124 121 A 3 3 0 0 0 121 124 A 3 3 0 0 0 124 127 A 3 3 0 0 0 127 124 A 3 3 0 0 0 124 121 z"></path>
            </svg>
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
