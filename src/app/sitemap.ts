import { BASE_URL } from "@/utils/constants";
import { request } from "@octokit/request";
import { Endpoints } from "@octokit/types";
import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";

const FILE_PATTERN = /page\.(ts|tsx|md|mdx)$/;

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const files = readdirSync("./src/app", {
    recursive: true,
    encoding: "utf-8",
  }).filter((file) => FILE_PATTERN.test(file));

  return await Promise.all(
    files.map(async (file) => {
      return {
        url: getUrl(file, BASE_URL),
        lastModified: await fetchDate(file),
        changeFrequency: "monthly",
      };
    })
  );
}

type commitReturnType =
  Endpoints["GET /repos/{owner}/{repo}/commits"]["response"];

async function fetchDate(path: string) {
  const res = (await request({
    method: "GET",
    url: "/repos/{owner}/{repo}/commits?per_page=1&path=/src/app/{path}",
    owner: "xuc323",
    repo: "personal-website",
    path: path,
  })) as commitReturnType;

  const commitDate = res.data.at(0)?.commit.author?.date;
  if (!commitDate) {
    return new Date();
  }

  return new Date(commitDate);
}

function getUrl(file: string, base: string) {
  const cleanedFile = file.replace(FILE_PATTERN, "");

  const url = `${base}/${cleanedFile}`.replace(/\/$/, "");

  return url;
}
