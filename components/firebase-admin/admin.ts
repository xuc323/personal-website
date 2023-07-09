import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const serviceAccount = process.env.FIREBASE_ADMIN_SECRETS!;
const app =
  getApps().length === 0
    ? initializeApp({
        credential: cert(JSON.parse(serviceAccount)),
        storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      })
    : getApp();

export const bucket = getStorage(app).bucket();
