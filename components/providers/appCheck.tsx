"use client";

import {
  ReCaptchaEnterpriseProvider,
  initializeAppCheck,
} from "firebase/app-check";
import type { AppCheck } from "firebase/app-check";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useFirebaseApp } from ".";

const AppCheckContext = createContext<AppCheck | undefined>(undefined);

export function AppCheckProvider({ children }: { children: ReactNode }) {
  const app = useFirebaseApp();
  const siteKey = process.env.NEXT_PUBLIC_APP_CHECK_ID!;
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const checkIsSupported = () => {
      typeof window !== "undefined" ? setSupported(true) : setSupported(false);
    };

    // self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    checkIsSupported();
  }, []);

  return (
    <AppCheckContext.Provider
      value={
        supported
          ? initializeAppCheck(app, {
              provider: new ReCaptchaEnterpriseProvider(siteKey),
              isTokenAutoRefreshEnabled: true,
            })
          : undefined
      }
    >
      {children}
    </AppCheckContext.Provider>
  );
}

export function useAppCheck() {
  const appCheck = useContext(AppCheckContext);

  return appCheck;
}
