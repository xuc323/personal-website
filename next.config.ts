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

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
initOpenNextCloudflareForDev();

export default withMDX(nextConfig);
