"use client";
import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();

  return (
    <div className="flex flex-col h-72 justify-center items-center">
      <h1 className="m-5 p-5 font-bold text-5xl">404 &middot; Not Found</h1>
      <p className="m-5 text-xl">
        Oops! Experience <b>{params.name}</b> no longer exists!
      </p>
    </div>
  );
}
