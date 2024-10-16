/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.xchen.org",
        port: "",
        pathname: "/5552da8504271da967caf6b57acc69e5/**",
        search: "",
      },
    ],
  },
  compress: false,
  output: "standalone",
};

export default nextConfig;
