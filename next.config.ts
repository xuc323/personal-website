import mdx from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = mdx();

const nextConfig: NextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
