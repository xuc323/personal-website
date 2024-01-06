"use client";

import { getAnalytics, isSupported } from "firebase/analytics";
import type { Analytics } from "firebase/analytics";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useFirebaseApp } from ".";

const AnalyticsContext = createContext<Analytics | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const app = useFirebaseApp();

  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const checkIsSupported = async () => {
      (await isSupported()) ? setSupported(true) : setSupported(false);
    };

    checkIsSupported();
  }, []);

  return (
    <AnalyticsContext.Provider
      value={supported ? getAnalytics(app) : undefined}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const analytics = useContext(AnalyticsContext);

  return analytics;
}
