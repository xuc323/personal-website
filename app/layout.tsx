import "@/styles/globals.css";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Xu's Website",
  keywords: "Personal Website, Experiences, Web Development",
  description: "Get to know Xu Chen.",
  authors: [{ name: "Xu Chen" }],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_TAG}`}
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_TAG}');
            `}
      </Script>
      <body className="relative pb-16 m-0 min-h-screen bg-gray-50 dark:bg-stone-900 duration-300">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
