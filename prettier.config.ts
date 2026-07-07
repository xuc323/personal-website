import type { Config } from "prettier";

const config: Config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 160,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  useTabs: false,
};

export default config;
