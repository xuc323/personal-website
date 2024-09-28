import type { MetadataRoute } from "next";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: "Xu Chen",
    description: "Xu Chen's personal website",
    start_url: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
