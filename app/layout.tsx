import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { ThemeProvider } from "@/components/ProviderUtils";

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>
      <body className="relative pb-14 m-0 min-h-screen transition-all bg-gradient-to-br from-stone-100 to-sky-300 dark:bg-gradient-to-bl dark:from-sky-900 dark:to-black">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
