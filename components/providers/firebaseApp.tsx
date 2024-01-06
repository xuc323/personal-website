"use client";

import { getApps, initializeApp, registerVersion } from "firebase/app";
import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import { createContext, useContext, useMemo, version } from "react";
import type { ReactNode } from "react";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const FirebaseAppContext = createContext<FirebaseApp | undefined>(undefined);

export function FirebaseAppProvider({ children }: { children: ReactNode }) {
  const app = useMemo(() => {
    const existingApp = getApps().find((app) => app.name === "[DEFAULT]");
    if (existingApp) {
      return existingApp;
    }

    const reactVersion = version || "unknown";
    registerVersion("react", reactVersion);
    return initializeApp(firebaseConfig);
  }, []);

  return (
    <FirebaseAppContext.Provider value={app}>
      {children}
    </FirebaseAppContext.Provider>
  );
}

export function useFirebaseApp() {
  const app = useContext(FirebaseAppContext);
  if (!app) {
    throw new Error(
      "Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider."
    );
  }

  return app;
}
