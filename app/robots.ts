import { BASE_URL } from "@/components/Constants";
import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "" },
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
