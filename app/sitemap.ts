import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.xchen.org/",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/experiences",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/projects/welcome-bot",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/projects/personal-website",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/projects/computer-graphics",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/projects/music-quiz-bowl",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/experiences/stem-visualization",
      lastModified: new Date(),
    },
    {
      url: "https://www.xchen.org/experiences/lehigh-grader",
      lastModified: new Date(),
    },
  ];
}
