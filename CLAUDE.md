# Project

React + Vite website template. When starting a new project, replace the intro paragraph below with a description of the specific client or project.

## Stack

| Tool | Version | Notes |
|---|---|---|
| React | 19 | Functional components + hooks only. No class components. |
| Vite | 8 | Dev server and bundler |
| Tailwind CSS | 4 | Via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed |
| Framer Motion | 12 | All animations and transitions — use `motion.*` components |
| React Router | 7 | Client-side routing via `react-router-dom` |
| react-helmet-async | latest | SEO and meta tags — use the `<SEO>` component |
| react-error-boundary | latest | Runtime error handling — wraps the app in `App.jsx` |
| Remotion | 4 | Programmatic video; studio + render CLI included. Remove if not needed. |

## Commands

```bash
npm install               # install dependencies (always run first on a new clone)
npm run dev               # start Vite dev server (http://localhost:5173)
npm run build             # production build → dist/
npm run preview           # preview production build locally
npm run lint              # run ESLint
npx prettier --write .    # format all files with Prettier
npm run remotion:studio   # open Remotion Studio (visual timeline editor)
npm run remotion:render   # render MyComp to out/video.mp4
```

## Project structure

```
public/
  favicon.svg             # replace with client favicon
  icons.svg               # SVG sprite sheet
src/
  components/             # reusable UI components
    Navbar.jsx            # sticky nav with mobile menu + active NavLink
    Footer.jsx            # footer with nav links
    Button.jsx            # motion button — variant (primary/secondary/outline/ghost) + size (sm/md/lg)
    Card.jsx              # surface card — hover prop lifts on hover
    Badge.jsx             # pill label — variant (default/primary/success/warning/error/info)
    Input.jsx             # text input with label, hint, error state
    Textarea.jsx          # textarea with label, hint, error state
    SEO.jsx               # Helmet wrapper for title, description, OG/Twitter tags
    PageTransition.jsx    # wrap every page in this for route fade/slide transitions
    ScrollReveal.jsx      # animate children into view on scroll (whileInView)
  pages/                  # page-level components (default exports)
    Home.jsx              # hero + features + CTA starter page
    NotFound.jsx          # 404 page
  assets/                 # images, fonts, static files
  remotion/
    index.jsx             # Remotion entry point (registerRoot)
    Root.jsx              # <Composition> declarations
    MyComp.jsx            # starter composition — rename/duplicate for each video
  index.css               # global styles + Tailwind imports + @theme tokens
  App.jsx                 # providers (HelmetProvider, BrowserRouter, ErrorBoundary) + AppLayout
  main.jsx                # entry point
.env.example              # env variable stubs — copy to .env.local
.prettierrc               # Prettier config (single quotes, no semi, 100 char width)
```

## Design tokens

All tokens are defined in the `@theme {}` block in `src/index.css`. Reference them in JSX as `bg-[--token-name]`, `text-[--token-name]`, etc.

### Colour palette

| Token | Use |
|---|---|
| `--color-primary` | Brand colour — buttons, links, accents |
| `--color-primary-light` | Hover/lighter tint of brand |
| `--color-primary-dark` | Darker tint for pressed states |
| `--color-success` / `--color-success-bg` | Positive feedback (green) |
| `--color-warning` / `--color-warning-bg` | Caution (amber) |
| `--color-error` / `--color-error-bg` | Destructive / validation errors (red) |
| `--color-info` / `--color-info-bg` | Neutral information (blue) |
| `--color-surface` | Subtle off-white background for sections |
| `--color-border` | Default border colour |
| `--color-muted` | Secondary/muted text |

To change the brand for a new project, update `--color-primary` (and optionally `--color-primary-light` / `--color-primary-dark`) in `src/index.css`.

### Border radius tokens

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Inputs, small elements |
| `--radius-md` | 8px | Buttons |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Panels, modals |
| `--radius-full` | 9999px | Pills, badges |

## Typography scale

Use these class combinations consistently across the project:

| Level | Classes |
|---|---|
| Display / Hero h1 | `text-4xl sm:text-6xl font-bold tracking-tight` |
| Section h2 | `text-3xl sm:text-4xl font-bold tracking-tight` |
| Card / sub-section h3 | `text-xl sm:text-2xl font-semibold` |
| Label h4 | `text-lg font-semibold` |
| Body | `text-base leading-relaxed` |
| Secondary body | `text-sm text-[--color-muted]` |
| Caption / hint | `text-xs text-[--color-muted]` |

## Routing

- Routes are defined in `src/App.jsx` inside `AppLayout` using `<Routes>` and `<Route>`
- Add new pages: create `src/pages/MyPage.jsx`, then add `<Route path="/my-page" element={<MyPage />} />` in `AppLayout`
- Use `<Link>` / `<NavLink>` from `react-router-dom` for all internal navigation — never `<a href>`
- The `*` catch-all route renders `<NotFound />`
- `AnimatePresence` in `AppLayout` drives page transition animations automatically

## Page transitions

Wrap every page's root element in `<PageTransition>` — `AnimatePresence` in `App.jsx` handles the rest:

```jsx
import { PageTransition } from '../components/PageTransition'

export default function MyPage() {
  return (
    <PageTransition>
      {/* page content */}
    </PageTransition>
  )
}
```

## Scroll animations

Use `<ScrollReveal>` to animate any element into view as the user scrolls:

```jsx
import { ScrollReveal } from '../components/ScrollReveal'

<ScrollReveal delay={0.1} direction="up">
  <Card>...</Card>
</ScrollReveal>
```

Props: `delay` (seconds, default 0), `direction` (up/down/left/right, default up).
Each element animates once (`viewport={{ once: true }}`).

## SEO

Use the `<SEO>` component at the top of every page:

```jsx
import { SEO } from '../components/SEO'

<SEO title="Page Title" description="One sentence description." />
```

`VITE_APP_NAME` in `.env.local` sets the site name appended to every `<title>`. Open Graph and Twitter card tags are set automatically.

## Styling conventions

- Tailwind CSS 4 is configured in `src/index.css` via `@import "tailwindcss"` — do NOT create a `tailwind.config.js`
- Reference custom tokens in JSX as Tailwind classes: `bg-[--color-primary]`, `text-[--color-muted]`
- Mobile-first: always use responsive prefixes (`sm:`, `md:`, `lg:`) where needed
- Max content width: `max-w-6xl` with `px-4 sm:px-6 lg:px-8` horizontal padding
- Section vertical padding: `py-20 sm:py-28` for standard sections, `py-24 sm:py-36` for hero

## Animation conventions

- Use Framer Motion for all animations — import `motion` from `framer-motion`
- Standard entrance animation (hero / above-the-fold):
```jsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
```
- Staggered lists: use `variants` with a parent `staggerChildren` container (see `Home.jsx`)
- Scroll-triggered: use `<ScrollReveal>` — do not manually write `whileInView` on every element
- Interactive: use `whileHover` / `whileTap` on buttons, cards, links

## Component conventions

- One component per file, named the same as the file (e.g. `Card.jsx` exports `Card`)
- Named exports for `src/components/`, default export for `src/pages/`
- Wrap every page in `<PageTransition>` and `<SEO>`

## Error handling

- The app is wrapped in `<ErrorBoundary FallbackComponent={ErrorFallback}>` in `App.jsx`
- `ErrorFallback` is defined inline in `App.jsx` — update its copy per project
- For async errors (data fetching), handle locally with try/catch or React Query error states

## New project setup checklist

When scaffolding a new project from this template:
1. Run `npm install`
2. Copy `.env.example` → `.env.local` and set `VITE_APP_NAME`
3. Update `--color-primary` (and light/dark variants) in `src/index.css`
4. Replace the favicon at `public/favicon.svg`
5. Update nav links in `src/components/Navbar.jsx`
6. Update footer copy and links in `src/components/Footer.jsx`
7. Build out pages in `src/pages/` and wire routes in `src/App.jsx`'s `AppLayout`
8. Remove Remotion files from `src/remotion/` if video is not needed
9. Update this `CLAUDE.md` intro with the project name and description

## Skills

Use `/frontend-design` skill when building or styling components.
Use `/web-design-guidelines` skill when reviewing UI or making design decisions.

## GitHub template usage

To start a new project from this template:
```bash
gh repo create my-new-project --template leohague1/Website-template-repo --clone --public
cd my-new-project
npm install
npm run dev
```
