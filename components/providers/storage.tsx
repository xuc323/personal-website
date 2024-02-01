"use client";

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import type { FirebaseStorage, StorageError } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useFirebaseApp } from ".";

const StorageContext = createContext<FirebaseStorage | undefined>(undefined);

export function StorageProvider({ children }: { children: ReactNode }) {
  const app = useFirebaseApp();

  return (
    <StorageContext.Provider value={getStorage(app)}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage() {
  const storage = useContext(StorageContext);

  return storage;
}

export function StorageVideo({ reference }: { reference: string }) {
  const storage = useStorage();
  const videoRef = ref(storage!, reference);

  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const invokeGetUrl = async () => {
      try {
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
      } catch (e) {
        const error = e as StorageError;
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            console.log("File does not exist");
            break;
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log("User doesn't have permission to access the object");
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            console.log("Unknown error occured");
            break;
        }
      }
    };

    invokeGetUrl();
  }, [videoRef]);

  return (
    <video autoPlay muted controls className="w-full">
      <source src={videoUrl} type="video/mp4" />
      Video is not supported by your browser.
    </video>
  );
}
