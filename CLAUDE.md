# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal website (xchen.org): a Next.js 16 (App Router) site deployed to Cloudflare Workers via OpenNext. Content is a mix of hand-written TSX pages and MDX (projects, experiences, a `/kb` knowledge base, `/blogs`).

## Commands

```bash
npm run dev      # next dev --webpack (local dev server)
npm run build    # next build --webpack
npm run start    # next start (serve production build)
npm run lint     # eslint
```

There is no test suite configured in this repo.

Cloudflare-specific (via `@opennextjs/cloudflare`, requires Wrangler auth):
```bash
npm run preview  # opennextjs-cloudflare build && preview — run the Worker build locally
npm run deploy   # opennextjs-cloudflare build && deploy — deploy to Cloudflare
npm run upload   # opennextjs-cloudflare build && upload — upload a new version without deploying
npm run cf-typegen  # regenerate cloudflare-env.d.ts from wrangler.jsonc bindings
```
Treat `deploy`/`upload` as user-facing, hard-to-reverse actions — don't run them unprompted.

## Architecture

- **App Router structure**: routes live under [src/app/](src/app/). Static/informational pages (`about`, `experiences/*`, `projects/*`) are plain `.tsx`; `blogs/*` and the knowledge base are `.mdx`.
- **Knowledge base (`/kb`)**: [src/app/kb/[[...slug]]/page.tsx](src/app/kb/[[...slug]]/page.tsx) is a catch-all route that dynamically resolves against [src/content/docs/](src/content/docs/) at request/build time via `import(`@/content/docs/${slugPath}.mdx`)`, in this priority order: (1) a direct `{slug}.mdx` file, (2) a folder's `index.mdx`, (3) if neither exists, an auto-generated listing of the folder's `.mdx` files (using each file's frontmatter `title`/`description`). `generateStaticParams` walks `src/content/docs` recursively to statically prerender every doc and folder listing (`dynamicParams = false`). Adding a new KB article means dropping an `.mdx` file with `title`/`description` frontmatter under `src/content/docs/`; no route code changes needed. Images referenced from KB docs live under `public/docs/<same-subpath>/`.
- **MDX rendering**: global MDX plugin config is in [next.config.ts](next.config.ts) (`remark-gfm`, `remark-frontmatter`/`remark-mdx-frontmatter` for frontmatter extraction, `rehype-highlight` for code blocks). Shared MDX element styling (headings, links, code, blockquote, etc.) is centralized in [src/mdx-components.tsx](src/mdx-components.tsx) via `useMDXComponents` — edit there, not per-page, to change how MDX content renders site-wide.
- **UI components**: [src/components/ui/](src/components/ui/) holds shadcn/ui primitives (config in [components.json](components.json), style `base-rhea`, base color `olive`, icon lib `lucide`). [src/components/layout/](src/components/layout/) holds site chrome (`Navbar`, `Footer`, `DarkModeIcon`). `CardList`/`CardItemProps` ([src/components/CardList.tsx](src/components/CardList.tsx)) is the reusable grid-of-links pattern used by `projects`, `experiences`, and the KB folder listing. `ContainerUtils.tsx` and `TextUtils.tsx` hold shared layout/typography wrapper components used across the static pages.
- **Theming**: dark mode via `next-themes`, attribute `data-theme`, configured in the root layout ([src/app/layout.tsx](src/app/layout.tsx)). Tailwind v4 (CSS-based config, no `tailwind.config.js`) — theme tokens live in [src/app/globals.css](src/app/globals.css).
- **Path alias**: `@/*` maps to `src/*` (see [tsconfig.json](tsconfig.json)).
- **Site constants**: `BASE_URL`/`BASE_DOMAIN` in [src/utils/constants.ts](src/utils/constants.ts) are the single source for the canonical domain — used by `layout.tsx`, `robots.ts`, `sitemap.ts`, and `Footer.tsx`; update there, not inline, if the domain changes.
- **Middleware**: [src/middleware.ts](src/middleware.ts) returns 404 JSON for any `/api/:path*` request — there is intentionally no API surface under `/api`. A few standalone route handlers still exist outside that prefix (e.g. `src/app/random/static/route.ts`, `src/app/random/dynamic/route.ts`), used to exercise OpenNext's static-vs-dynamic caching behavior on Cloudflare rather than as a real API.
- **Cloudflare deployment**: [open-next.config.ts](open-next.config.ts) and [wrangler.jsonc](wrangler.jsonc) configure the OpenNext Cloudflare adapter (static-assets incremental cache, smart placement, Cloudflare Images binding). `cloudflare-env.d.ts` is generated — don't hand-edit it, regenerate via `npm run cf-typegen`.
- **Formatting**: Prettier config ([prettier.config.ts](prettier.config.ts)) uses `printWidth: 160`, double quotes (`singleQuote: false`), and `prettier-plugin-tailwindcss` for class sorting — run through your editor/Prettier rather than hand-wrapping long lines.

## Verifying changes on a live preview

Cloudflare's GitHub integration posts a preview deployment URL as a PR comment (under `*.workers.dev`, from `wrangler.jsonc`'s `preview_urls` feature) whenever a commit is pushed to an open PR. When asked to validate or check rendering on "the site" / "the preview," look for that comment on the current PR and drive the URL from it with the Playwright MCP tools (`browser_navigate`, `browser_snapshot`, `browser_take_screenshot`, `browser_console_messages`, `browser_evaluate`) — don't assume a fixed URL. Playwright reads the actual post-render DOM, so it's the right tool for anything JS-dependent: the dark-mode toggle, nav/carousel interactions, console errors.

For markup-only questions (e.g. "did this CSS class end up in the output"), it's faster and needs no network access to build and read the compiled HTML directly: `npm run build`, then `Read`/`Grep` the prerendered file under `.next/server/app/<route>.html` for statically generated routes.
