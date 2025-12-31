# AGENTS.md - Project Documentation

## Project Overview

**Alemazung Website** - A modern, multilingual personal website for Dr. Joy A. Alemazung, Bürgermeister (Mayor) of Heubach and accomplished scientist.

### About Dr. Joy A. Alemazung

- **Role**: Bürgermeister (Mayor) of Heubach, Germany
- **Expertise**: Sustainability, migration policy, international relations
- **Content Areas**: 
  - Bürgermeisteramt (Mayor's Office work)
  - Wissenschaft und Publikationen (Science & Publications)
  - Vorträge und Medien (Lectures & Media)
  - Blog posts and family information

## Project Setup

### Technologies

- **Framework**: Next.js 16.0.7 (App Router)
- **Language**: TypeScript & React
- **Styling**: Tailwind CSS with CSS custom properties (--accent, --background, etc.)
- **CMS**: Strapi (headless CMS for content management)
- **Package Manager**: pnpm
- **Deployment**: Docker (multi-stage build)
- **Internationalization**: Custom locale handling with URL-based language switching
- **Icons**: lucide-react
- **Theme**: next-themes (light/dark mode support)

### Repository Structure

```
alemazung/
├── src/
│   ├── app/
│   │   └── [lang]/                      # Dynamic language routes
│   │       ├── layout.tsx               # Root layout with TopNavigation & Footer
│   │       ├── page.tsx                 # Homepage
│   │       ├── [slug]/                  # Dynamic content pages
│   │       │   └── page.tsx
│   │       ├── posts/                   # Blog posts
│   │       │   └── [slug]/
│   │       │       └── page.tsx
│   │       ├── impressum/               # Legal page
│   │       │   └── page.tsx
│   │       └── utils/
│   │           ├── fetch-api.tsx        # API calls to Strapi with locale support
│   │           ├── api-helpers.ts       # Utility functions (image URLs, etc.)
│   │           └── locale-helpers.ts    # Locale normalization
│   ├── components/
│   │   ├── topNavigation.tsx            # Main navigation (client component)
│   │   ├── menuItems.tsx                # Navigation menu items
│   │   ├── heroNavigation.tsx           # Hero section with main sections
│   │   ├── footer.tsx                   # Footer with links & legal info
│   │   ├── strapiRichText.tsx           # Rich text renderer for Strapi content
│   │   ├── postPreviewCard.tsx          # Blog post preview
│   │   ├── postGrid.tsx                 # Blog posts grid layout
│   │   ├── backButton.tsx               # Go back button (client component)
│   │   ├── chevronIconSvg.tsx           # Custom SVG chevron icon
│   │   └── [other components]
│   ├── globals.css                      # Global styles
│   └── theme-provider.tsx               # Theme provider setup
├── dockerfile                           # Multi-stage Docker build
├── src/proxy.ts                         # Locale middleware for URL routing
├── package.json
├── pnpm-lock.yaml
├── next.config.ts
└── tailwind.config.ts
```

### Key Features

- **Multilingual Support**: Dynamic routing with `/en/` and `/de/` (or `/de-DE/`) prefixes
- **Server Components**: Most pages are async server components for data fetching
- **Strapi CMS Integration**: Content (pages, posts, images) managed in Strapi
- **Rich Text Editor**: Custom renderer for Strapi's rich text blocks (headings, lists, bold, links, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Mode**: Full dark mode support with next-themes
- **Static Generation**: Automatic page generation from Strapi content via `generateStaticParams()`
- **SEO Ready**: Proper use of Next.js metadata API

## Development Guidelines

### Code Quality

#### Function Length
- **Maximum**: 60 lines per function
- Rationale: Improves readability, testability, and maintainability
- Break complex logic into smaller, focused functions
- Each function should do one thing well

#### Component Design
- **Keep components small**: Single responsibility principle
- Extract reusable UI patterns into separate components
- Use TypeScript interfaces/types for all props
- Server components for data fetching, client components (`"use client"`) for interactivity only

#### Variable & Function Naming
- Use descriptive, clear names (avoid abbreviations unless standard)
- Boolean variables: start with `is`, `has`, `should`, `can`
- Functions: use verbs (`fetchData`, `renderContent`, `normalizeLocale`)

#### File Organization
- One component per file (unless very closely related)
- Co-locate related utilities with their usage
- Group imports: external, internal, types (in that order)

### Strapi Integration

#### Fetching Content
- Always pass `locale` parameter to `fetchAPI` for multilingual content
- Use `populate` to eager-load relationships
- Filter content with `filters` parameter using Strapi query syntax

```typescript
// ✅ GOOD
const response = await fetchAPI('/posts', {
  filters: { slug },
  populate: { content: { populate: '*' } }
}, {}, locale);

// ❌ AVOID
const response = await fetchAPI('/posts', {});
```

#### Rich Text Rendering
- Use `StrapiRichText` component for any Strapi rich text blocks
- Don't manually extract and display raw text
- Component handles all formatting (bold, italic, links, headings, lists)

### Navigation & Links

#### Locale in URLs
- **All links must include locale prefix**: `/{locale}/page-slug`
- Pass `locale` prop down from layout through components
- Use template literals: `href={`/${locale}/path`}`

```typescript
// ✅ GOOD
<Link href={`/${locale}/wissenschaft-und-publikationen`}>
  Wissenschaft
</Link>

// ❌ AVOID
<Link href="/wissenschaft-und-publikationen">
  Wissenschaft
</Link>
```

### Server vs Client Components

- **Server Components** (default):
  - Data fetching (Strapi API calls)
  - Rendering dynamic content
  - Accessing environment variables

- **Client Components** (`"use client"`):
  - Event handlers (`onClick`, `onChange`)
  - State management (`useState`)
  - Browser APIs (`window`, `localStorage`)
  - Theme switching

### Styling

- Use Tailwind CSS utility classes
- Support dark mode: use `dark:` prefix variants
- Use CSS custom properties for theme colors:
  - `var(--accent)`, `var(--background)`, `var(--grey-accent)`, etc.
- Responsive: mobile-first approach
  - Base styles for mobile
  - `md:`, `lg:`, `xl:` prefixes for larger screens

### TypeScript

- Define types for all props using `type` keyword
- Create reusable type definitions
- Avoid `any`; use `unknown` if necessary and narrow the type

```typescript
// ✅ GOOD
type PostProps = {
  slug: string;
  locale: string;
};

// ❌ AVOID
export default function Post(props: any) {
```

### Performance

- Use Next.js Image component for images (`next/image`)
- Implement `generateStaticParams()` for dynamic routes
- Leverage ISR (Incremental Static Regeneration) with `revalidate`
- Minimize client-side JavaScript in server components

### Error Handling

- Handle Strapi API errors gracefully
- Return fallback UI (e.g., "Not found" message)
- Log errors for debugging

```typescript
if (pages.error) {
  throw new Error(`Failed to fetch pages: ${pages.error.message}`);
}
```

## Development Workflow

1. **Create/Modify Content**: Update in Strapi CMS
2. **Update Code**: Make changes to components, pages, or utilities
3. **Test Locally**: Run `pnpm dev` and test across locales (`/en/`, `/de/`)
4. **Build**: `pnpm build` (triggers static generation)
5. **Docker Build**: Build and push to container registry

## Common Tasks

### Adding a New Page
1. Create folder: `src/app/[lang]/new-page/`
2. Create `page.tsx` with server component
3. Fetch data with `fetchAPI(..., {}, {}, locale)`
4. Add navigation link: `/{locale}/new-page`

### Adding a New Navigation Link
1. Update `MenuItems`, `HeroNavigation`, or `Footer`
2. Pass `locale` prop and prefix href: `/{locale}/path`
3. Update all component files that use the updated component

### Creating Rich Text Content
1. Use Strapi rich text editor
2. Content is fetched as JSON blocks
3. Render with `<StrapiRichText content={blocks} />`

## Useful Links

- **Strapi Docs**: https://docs.strapi.io
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
