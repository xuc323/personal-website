import type { ReactNode } from "react";

export function PageContainer({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="m-8 mx-auto w-10/12 max-w-3xl rounded-2xl bg-white p-5 shadow-lg duration-300 max-sm:w-full max-sm:shadow-none dark:bg-black">
      {children}
    </div>
  );
}

export function GroupImageContainer({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto mb-8 flex max-w-md flex-row items-center justify-between gap-2 rounded-2xl border bg-white p-3 shadow-xl duration-300 dark:bg-black">
      {children}
    </div>
  );
}
