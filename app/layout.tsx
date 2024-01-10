import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  AnalyticsProvider,
  FirebaseAppProvider,
  ThemeProvider,
} from "@/components/providers";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Xu Chen",
  keywords: ["Personal Website", "Experiences", "Web Development", "Projects"],
  description: "Get to know Xu Chen.",
  authors: [{ name: "Xu Chen" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <FirebaseAppProvider>
        <AnalyticsProvider>
          <body>
            <ThemeProvider>
              <div className="relative pb-[54px] m-0 min-h-screen transition-all bg-gradient-to-br from-stone-100 to-sky-300 dark:bg-gradient-to-bl dark:from-sky-900 dark:to-black">
                <Navbar />
                <main>{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </body>
        </AnalyticsProvider>
      </FirebaseAppProvider>
    </html>
  );
}
