import type { ReactNode } from "react";

/**
 * This is the universal container to display a page.
 * It can adapt to different screen size, and has maximum width
 * @public
 * @param param0 child component
 * @returns
 */
export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="m-8 mx-auto w-10/12 max-w-3xl rounded-2xl bg-white p-5 shadow-lg duration-300 dark:bg-black max-sm:w-full max-sm:shadow-none">
      {children}
    </div>
  );
}

/**
 * @public
 * @param param0 child component
 * @returns
 */
export function GroupImageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-8 flex max-w-md flex-row items-center justify-between gap-2 rounded-2xl border bg-white p-3 shadow-xl duration-300 dark:bg-black">
      {children}
    </div>
  );
}
