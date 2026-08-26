import createMDX from "@next/mdx";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";
import path from "node:path";

// Turbopack resolves MDX plugins itself, so every entry below must stay a string
// with serializable options — one imported function re-breaks the build. Local
// ones resolve via `require.resolve` relative to the MDX file being compiled,
// hence absolute paths; tsconfig `@/*` aliases don't apply.
const local = (file: string) => path.join(process.cwd(), "mdx-plugins", file);

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm", "remark-frontmatter", "remark-mdx-frontmatter"],
    rehypePlugins: [local("rehype-highlight-all.mjs")],
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
