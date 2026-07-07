import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import { BASE_URL } from "@/utils/constants";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  alternates: {
    canonical: "./",
  },
  authors: [{ name: "Xu Chen" }],
  description: "Get to know Xu Chen.",
  icons: {
    icon: [
      { url: "/logo.svg", media: "(prefers-color-scheme: light)" },
      { url: "/logo-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
  keywords: ["Personal Website", "Experiences", "Web Development", "Projects"],
  metadataBase: new URL(BASE_URL),
  openGraph: {},
  title: "Xu Chen",
  twitter: {},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-mono", jetbrainsMono.variable)}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem scriptProps={{ "data-cfasync": "false" }}>
          <div className="relative m-0 min-h-screen pb-13.5 transition-all">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
