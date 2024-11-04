import mdx from "@next/mdx";
import type { NextConfig } from "next";
import { ASSETS_DOMAIN, ASSETS_PATH } from "./constants";

const withMDX = mdx();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: ASSETS_DOMAIN,
        port: "",
        pathname: `${ASSETS_PATH}/**`,
        search: "",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compress: false,
  output: "standalone",
};

export default withMDX(nextConfig);
