import "./globals.css";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Providers } from "./providers";
import { analytics } from "@/components/firebase/app";

export const metadata: Metadata = {
  title: "Xu Chen",
  keywords: ["Personal Website", "Experiences", "Web Development", "Projects"],
  description: "Get to know Xu Chen.",
  authors: [{ name: "Xu Chen" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <body className="relative pb-14 m-0 min-h-screen bg-gradient-to-br from-stone-100 to-sky-300">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
