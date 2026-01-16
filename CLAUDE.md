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
- `src/components/` - Reusable UI components (barrel exported via `index.ts`)
- `src/images/` - Static images imported directly into page.tsx

### Component Pattern
Each component follows this structure:
```
ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.module.css
  └── index.ts (re-exports from ComponentName.tsx)
```

Components are exported from `src/components/index.ts` for clean imports.

### Path Alias
`@/*` maps to `./src/*` (configured in tsconfig.json)

### Environment Variables
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog project key
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog API host

### Key Patterns
- Images use `data-zoomable` attribute for medium-zoom integration
- Static images are imported and used with Next.js Image `placeholder="blur"`
- Page uses static regeneration with `revalidate = 604800` (1 week)
