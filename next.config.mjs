import mdx from "@next/mdx";

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  compress: false,
  output: "standalone",
};

export default withMDX(nextConfig);
