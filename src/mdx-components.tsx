import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-10 scroll-m-20 text-4xl font-bold tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 text-neutral-700 not-first:mt-6 dark:text-neutral-300">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href}
        className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-2">{children}</ol>
    ),
    li: ({ children }) => <li className="mt-2">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-neutral-300 pl-4 text-neutral-600 italic dark:border-neutral-700 dark:text-neutral-400">
        {children}
      </blockquote>
    ),
    pre: ({ children, className, ...props }) => (
      <pre
        {...props}
        className={`my-6 overflow-x-auto rounded-lg p-4 whitespace-pre ${className ?? ""}`.trim()}
      >
        {children}
      </pre>
    ),
    // code: ({ children }) => (
    //   <code className="[&:not(pre_&)]:rounded-md [&:not(pre_&)]:bg-neutral-100 [&:not(pre_&)]:px-1.5 [&:not(pre_&)]:py-0.5 [&:not(pre_&)]:font-mono [&:not(pre_&)]:text-sm [&:not(pre_&)]:text-neutral-800 dark:[&:not(pre_&)]:bg-neutral-800 dark:[&:not(pre_&)]:text-neutral-100">
    //     {children}
    //   </code>
    // ),
    img: (props) => (
      <img
        className="my-6 rounded-lg border border-neutral-200 dark:border-neutral-800"
        {...props}
      />
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="text-neutral-700 italic dark:text-neutral-300">
        {children}
      </em>
    ),
    ...components,
  };
}
