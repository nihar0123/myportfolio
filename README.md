# EinCode

An AI/ML portfolio site built with Next.js 16, TypeScript, Tailwind CSS, and Radix UI.

## What’s inside

- `app/` for the App Router routes, layouts, metadata, and structured data.
- `components/` for shared chrome and route-specific UI.
- `lib/` for content, site helpers, and schema data.
- `public/` for static assets and social images.

## Scripts

```bash
corepack pnpm dev
corepack pnpm lint
corepack pnpm test
corepack pnpm build
```

## Notes

- Site URL handling is centralized in `lib/site.ts`.
- Blog content is rendered with React Markdown instead of a custom regex parser.
- Blog sidebar counts are derived from the actual post data.

