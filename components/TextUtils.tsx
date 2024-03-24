import type { ReactNode } from "react";

export function TitleContainer({ children }: { children: ReactNode }) {
  return (
    <h1 className="px-2 pt-3 text-center text-4xl font-bold text-black dark:text-white">
      {children}
    </h1>
  );
}

export function HeadParagraphContainer({ children }: { children: ReactNode }) {
  return <h3 className="m-3 text-lg font-semibold">{children}</h3>;
}

export function ParagraphContainer({ children }: { children?: ReactNode }) {
  return <p className="m-3 py-2 text-black dark:text-white">{children}</p>;
}
