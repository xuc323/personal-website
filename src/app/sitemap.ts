import { BASE_URL } from "@/utils/constants";
import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { readdirSync } from "node:fs";

const FILE_PATTERN = /page\.(ts|tsx|md|mdx)$/;

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const files = readdirSync("./src/app", {
    recursive: true,
    encoding: "utf-8",
  }).filter((file) => FILE_PATTERN.test(file));

  return files.map((file) => {
    return {
      url: getUrl(file, BASE_URL),
      lastModified: getLastModified(file),
      changeFrequency: "monthly",
    };
  });
}

function getLastModified(filePath: string): Date {
  try {
    const timestamp = execSync(
      `git log -1 --format=%aI -- src/app/${filePath}`,
      { encoding: "utf-8" }
    ).trim();
    return new Date(timestamp);
  } catch {
    return new Date();
  }
}

function getUrl(file: string, base: string) {
  const cleanedFile = file.replace(FILE_PATTERN, "");
  const url = `${base}/${cleanedFile}`.replace(/\/$/, "");

  return url;
}
