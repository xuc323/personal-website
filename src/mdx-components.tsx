import type { MDXComponents } from "mdx/types";
import type { ImageProps } from "next/image";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-center text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
    img: (props) => <Image className="" {...(props as ImageProps)} />,
    ...components,
  };
}
