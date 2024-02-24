import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  AnalyticsProvider,
  AppCheckProvider,
  FirebaseAppProvider,
  PerformanceProvider,
  StorageProvider,
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
        <AppCheckProvider>
          <PerformanceProvider>
            <body>
              <ThemeProvider>
                <AnalyticsProvider>
                  <StorageProvider>
                    <div className="relative m-0 min-h-screen bg-gradient-to-br from-stone-100 to-sky-300 pb-[54px] transition-all dark:bg-gradient-to-bl dark:from-sky-900 dark:to-black">
                      <Navbar />
                      <main>{children}</main>
                      <Footer />
                    </div>
                  </StorageProvider>
                </AnalyticsProvider>
              </ThemeProvider>
            </body>
          </PerformanceProvider>
        </AppCheckProvider>
      </FirebaseAppProvider>
    </html>
  );
}
