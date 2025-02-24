import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { BASE_URL } from "@/constants";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Xu Chen",
  keywords: ["Personal Website", "Experiences", "Web Development", "Projects"],
  description: "Get to know Xu Chen.",
  authors: [{ name: "Xu Chen" }],
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="relative m-0 min-h-screen bg-gradient-to-br from-stone-100 to-sky-300 pb-[54px] transition-all dark:bg-gradient-to-bl dark:from-sky-900 dark:to-black">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
