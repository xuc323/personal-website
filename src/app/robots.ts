import { BASE_URL } from "@/utils/constants";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "" },
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
