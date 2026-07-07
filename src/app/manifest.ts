import type { MetadataRoute } from "next";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: "Xu Chen",
    short_name: "XC",
    description: "Xu Chen's personal website",
    start_url: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#111111",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
