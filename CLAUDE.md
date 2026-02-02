# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a personal portfolio website for a front-end developer, built with Next.js 14 (App Router).

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS custom properties (design tokens in `globals.css`)
- **Font**: Geist Sans via `geist` package
- **Analytics**: PostHog (client-side) and Vercel Speed Insights
- **Image Handling**: Next.js Image with `sharp`, medium-zoom for lightbox

### Project Structure
- `src/app/` - Next.js App Router pages
  - `page.tsx` - Main portfolio page (single-page site, ~45KB with all content inline)
  - `layout.tsx` - Root layout with PHProvider, Footer, and SpeedInsights
  - `providers.tsx` - Client-side providers (PostHog, medium-zoom)
  - `globals.css` - Global styles and CSS custom properties (color palette: N, B, T, G, Y, R, P, C series)
  - `blog/` - Blog listing and article pages
    - `page.tsx` - Blog index page
    - `[slug]/page.tsx` - Dynamic blog post page (uses MDXRemote)
  - `api/` - API routes for blog interactions
    - `views/route.ts` - Track post views
    - `likes/route.ts` - Handle post likes
    - `stats/route.ts` - Fetch post statistics
- `src/components/` - Reusable UI components (barrel exported via `index.ts`)
- `src/images/` - Static images imported directly into page.tsx
- `src/lib/` - Shared utilities
  - `blog.ts` - Blog post fetching, parsing (gray-matter), and stats helpers
  - `mdx-components.tsx` - Custom MDX component mappings
  - `redis.ts` - Upstash Redis client for views/likes persistence
- `src/content/blog/` - MDX blog posts (frontmatter: title, description, date, tags, coverImage, published)

### Component Pattern
Each component follows this structure:
```
ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.module.css
  └── index.ts (re-exports from ComponentName.tsx)
```

Components are exported from `src/components/index.ts` for clean imports.

### Blog Components (MDX)
Components available in MDX files via `src/lib/mdx-components.tsx`:
- `Article` - Wrapper with typography styles and reading progress
- `ArticleImage` - Optimized images with captions
- `ArticleSlider` - Image carousel/slider
- `Callout` - Highlighted info/warning boxes
- `CodeBlock` - Syntax-highlighted code (rehype-pretty-code with one-dark-pro theme)
- `InlineLink` - Styled anchor links (auto-applied to `<a>` tags)
- `LinkCard` - Rich link previews
- `Mention` - User/entity mentions
- `LikeButton` - Client-side like interaction
- `ViewCounter` - Display post view count

### Path Alias
`@/*` maps to `./src/*` (configured in tsconfig.json)

### Environment Variables
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog project key
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog API host
- `UPSTASH_REDIS_REST_URL` - Upstash Redis URL for blog stats
- `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis auth token

### Key Patterns
- Images use `data-zoomable` attribute for medium-zoom integration
- Static images are imported and used with Next.js Image `placeholder="blur"`
- Page uses static regeneration with `revalidate = 604800` (1 week)

### Blog Post Frontmatter
MDX files in `src/content/blog/` use this frontmatter schema:
```yaml
title: "Post Title"
description: "Brief description"
date: "2024-01-15"
tags: ["tag1", "tag2"]
coverImage: "/images/cover.jpg"  # optional
published: true                   # false to hide from listing
```
