"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill, BsLaptopFill } from "react-icons/bs";

export default function DarkModeIcon() {
  /**
   * since the theme is not available on the server,
   * we need to hide the button on the server and only
   * show it once the theme is available
   */
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * we use the useTheme hook to get the current theme and
   * the setTheme function to change the theme on click
   */
  const { theme, setTheme } = useTheme();

  function handleClick() {
    // system --> light --> dark --> system
    switch (theme) {
      case "system":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("system");
        break;
      default:
        setTheme("system");
        break;
    }
  }

  return (
    <button
      role="button"
      aria-label="Toggle Dark Mode"
      className="flex w-6 justify-center overflow-hidden rounded-full border bg-white p-1 transition-all hover:scale-125 dark:bg-black"
      onClick={handleClick}
    >
      <div
        className={`flex w-20 flex-row gap-[19px] duration-300 ${
          mounted ? `opacity-100 ${determineTransition(theme)}` : "opacity-0"
        }`}
      >
        <BsSunFill size={14} />
        <BsLaptopFill size={14} />
        <BsMoonFill size={14} />
      </div>
    </button>
  );
}

/**
 * determine how far to transform for the icons based on the theme
 *
 * @param theme "system" | "light" | "dark"
 * @returns translation
 */
function determineTransition(theme?: string): string {
  switch (theme) {
    case "light":
      return "translate-x-[33px]";
    case "dark":
      return "-translate-x-[33px]";
    default:
      return "translate-x-0";
  }
}
