"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getPerformance } from "firebase/performance";
import type { FirebasePerformance } from "firebase/performance";
import { useFirebaseApp } from ".";

const PerformanceContext = createContext<FirebasePerformance | undefined>(
  undefined
);

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const app = useFirebaseApp();
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const checkIsSupported = () => {
      typeof window !== "undefined" ? setSupported(true) : setSupported(false);
    };

    checkIsSupported();
  }, []);

  return (
    <PerformanceContext.Provider
      value={supported ? getPerformance(app) : undefined}
    >
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  const performance = useContext(PerformanceContext);

  return performance;
}
