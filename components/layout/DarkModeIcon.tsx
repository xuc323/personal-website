"use client";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function DarkModeIcon() {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <button
      role="button"
      aria-label="Toggle Dark Mode"
      className="border p-1 rounded-full w-6 overflow-hidden transition-all bg-white dark:bg-black hover:scale-125"
      onClick={handleClick}
    >
      <div
        className={`flex flex-row w-9 gap-1 duration-300 ${
          theme === "dark" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <BsSunFill size={14} />
        <BsMoonFill size={14} />
      </div>
    </button>
  );
}
