import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-10/12 mx-auto m-8 rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none bg-white dark:bg-black">
      {children}
    </div>
  );
}

export function GroupImageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row justify-between items-center gap-2 mx-auto mb-8 p-3 max-w-md border rounded-2xl shadow-xl duration-300 bg-white dark:bg-black">
      {children}
    </div>
  );
}
