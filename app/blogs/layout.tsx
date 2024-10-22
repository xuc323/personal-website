import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="p-5">{children}</div>;
}
