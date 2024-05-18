import type { MetadataRoute } from "next";
import { request } from "@octokit/request";
import { Endpoints } from "@octokit/types";
import { readdirSync } from "node:fs";
import { BASE_URL } from "@/components/Constants";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const FILE_PATTERN = "page.tsx";

  const files = readdirSync("./app", {
    recursive: true,
    encoding: "utf-8",
  }).filter((file) => file.endsWith(FILE_PATTERN));

  return await Promise.all(
    files.map(async (file) => {
      return {
        url: getUrl(file, BASE_URL, FILE_PATTERN),
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
    url: "/repos/{owner}/{repo}/commits?per_page=1&path=/app/{path}",
    owner: "xuc323",
    repo: "personal-website",
    path: path,
  })) as commitReturnType;

  return new Date(res.data.at(0)?.commit.author?.date!);
}

function getUrl(file: string, base: string, pattern: string) {
  const cleanedFile = file.substring(0, file.length - pattern.length);

  const url = `${base}/${cleanedFile}`;

  return url.endsWith("/") ? url.slice(0, -1) : url;
}
