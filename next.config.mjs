/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.ASSETS_HOSTNAME,
        pathname: `/${process.env.ASSETS_PATHNAME}/**`,
        port: "",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
