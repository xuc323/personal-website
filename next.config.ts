import mdx from "@next/mdx";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { all } from "lowlight";
import type { NextConfig } from "next";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMDX = mdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMdxFrontmatter],
    rehypePlugins: [[rehypeHighlight, { detect: true, languages: all }]],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactCompiler: true,
  typedRoutes: true,
};

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
initOpenNextCloudflareForDev();

export default withMDX(nextConfig);
