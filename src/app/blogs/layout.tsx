import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="px-20 py-10">
      <div className="relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 p-10">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
