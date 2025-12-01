import { BASE_URL } from "@/utils/constants";
import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";

const FILE_PATTERN = /page\.(ts|tsx|md|mdx)$/;
const BUILD_TIME = new Date();

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const files = readdirSync("./src/app", {
    recursive: true,
    encoding: "utf-8",
  }).filter((file) => FILE_PATTERN.test(file));

  return files.map((file) => {
    return {
      url: getUrl(file, BASE_URL),
      lastModified: BUILD_TIME,
      changeFrequency: "monthly",
    };
  });
}

function getUrl(file: string, base: string) {
  const cleanedFile = file.replace(FILE_PATTERN, "");
  const url = `${base}/${cleanedFile}`.replace(/\/$/, "");

  return url;
}
