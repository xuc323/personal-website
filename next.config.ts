import mdx from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = mdx();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.xchen.org",
        port: "",
        pathname: "/5552da8504271da967caf6b57acc69e5/public/**",
        search: "",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compress: false,
  output: "standalone",
};

export default withMDX(nextConfig);
