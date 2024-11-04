import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "wipe-in-out": {
          "0%": { "stroke-dashoffset": "400" },
          "50%": { "stroke-dashoffset": "0" },
          "100%": { "stroke-dashoffset": "400" },
        },
      },
      animation: { "wipe-in-out": "wipe-in-out 10s ease-in-out infinite" },
    },
  },
  plugins: [],
  darkMode: "selector",
};

export default config;
