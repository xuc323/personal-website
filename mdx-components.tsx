import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-center text-4xl font-bold">{children}</h1>
    ),
    ...components,
  };
}
