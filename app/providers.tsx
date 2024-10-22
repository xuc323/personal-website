"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system">
      {children}
    </NextThemeProvider>
  );
}
