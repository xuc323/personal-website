import type { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: use file system to read in folder as names

  return [
    {
      url: "https://www.xchen.org/",
      lastModified: await fetchDate(""),
    },
    {
      url: "https://www.xchen.org/about",
      lastModified: await fetchDate("about/"),
    },
    {
      url: "https://www.xchen.org/projects",
      lastModified: await fetchDate("projects/"),
    },
    {
      url: "https://www.xchen.org/projects/welcome-bot",
      lastModified: await fetchDate("projects/welcome-bot/"),
    },
    {
      url: "https://www.xchen.org/projects/personal-website",
      lastModified: await fetchDate("projects/personal-website/"),
    },
    {
      url: "https://www.xchen.org/projects/computer-graphics",
      lastModified: await fetchDate("projects/computer-graphics/"),
    },
    {
      url: "https://www.xchen.org/projects/music-quiz-bowl",
      lastModified: await fetchDate("projects/music-quiz-bowl/"),
    },
    {
      url: "https://www.xchen.org/experiences",
      lastModified: await fetchDate("experiences/"),
    },
    {
      url: "https://www.xchen.org/experiences/stem-visualization",
      lastModified: await fetchDate("experiences/stem-visualization/"),
    },
    {
      url: "https://www.xchen.org/experiences/technical-consultant",
      lastModified: await fetchDate("experiences/technical-consultant/"),
    },
    {
      url: "https://www.xchen.org/experiences/lehigh-grader",
      lastModified: await fetchDate("experiences/lehigh-grader/"),
    },
  ];
}

async function fetchDate(path: string) {
  const data = await fetch(
    `https://api.github.com/repos/xuc323/personal-website/commits?per_page=1&path=/app/${path}page.tsx`
  );
  const json:
    | [
        {
          commit: {
            url: string;
            author: { email: string; name: string; date: string };
          };
        }
      ]
    | [] = await data.json();

  if (json.length === 0) {
    return new Date();
  }

  return new Date(json.at(0)!.commit.author.date);
}
