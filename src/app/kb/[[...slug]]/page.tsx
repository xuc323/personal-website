import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import { readdirSync } from "node:fs";
// import path from "node:path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  let slugPath = Array.isArray(slug) ? slug.join("/") : slug;

  if (!slugPath) {
    // return <div>Knowledge Base</div>;
    slugPath = "index";
  }
  try {
    const { default: Post } = await import(`@/content/docs/${slugPath}.md`);
    return <Post />;
  } catch (err) {
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let slugPath = Array.isArray(slug) ? slug.join("/") : slug;

  if (!slugPath) {
    slugPath = "index";
  }

  try {
    const { frontmatter } = await import(`@/content/docs/${slugPath}.md`);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch (err) {
    return {};
  }
}

// export function generateStaticParams() {
//   const files = readdirSync(path.join(process.cwd(), "src/content/docs"), {
//     recursive: true,
//   }) as string[];

//   const paths = files
//     .filter((file) => file.endsWith(".md"))
//     .map((file) => {
//       const slug = file.replace(/\.md$/, "").split(path.sep);
//       return { slug: slug };
//     });

//   return [...paths, { slug: [] }];
// }
