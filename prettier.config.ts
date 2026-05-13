import type { Config } from "prettier";

const config: Config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 140,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  useTabs: false,
};

export default config;
