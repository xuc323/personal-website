"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function DarkModeIcon() {
  // we use the useTheme hook to get the current theme and
  // the setTheme function to change the theme on click
  const { theme, setTheme } = useTheme();

  function handleClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  // since the theme is not available on the server, we
  // need to hide the button on the server and only show
  // it once the theme is available
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      role="button"
      aria-label="Toggle Dark Mode"
      className="border p-1 rounded-full w-6 overflow-hidden transition-all bg-white dark:bg-black hover:scale-125"
      onClick={handleClick}
    >
      <div
        className={`flex flex-row w-9 gap-1 transition-opacity duration-300 ${
          mounted
            ? `opacity-100 ${
                theme === "dark" ? "-translate-x-1/2" : "translate-x-0"
              }`
            : "opacity-0"
        }`}
      >
        <BsSunFill size={14} />
        <BsMoonFill size={14} />
      </div>
    </button>
  );
}
