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
    Button.jsx            # motion button with variant + size props
    SEO.jsx               # Helmet wrapper for title, description, OG tags
  pages/                  # page-level components (default exports)
    Home.jsx              # hero starter page
    NotFound.jsx          # 404 page
  assets/                 # images, fonts, static files
  remotion/
    index.jsx             # Remotion entry point (registerRoot)
    Root.jsx              # <Composition> declarations
    MyComp.jsx            # starter composition — rename/duplicate for each video
  index.css               # global styles + Tailwind imports + @theme tokens
  App.jsx                 # providers (HelmetProvider, BrowserRouter, ErrorBoundary) + layout
  main.jsx                # entry point
.env.example              # env variable stubs — copy to .env.local
.prettierrc               # Prettier config (single quotes, no semi, 100 char width)
```

## Routing

- Routes are defined in `src/App.jsx` using `<Routes>` and `<Route>`
- Add new pages: create `src/pages/MyPage.jsx`, then add `<Route path="/my-page" element={<MyPage />} />` in `App.jsx`
- Use `<Link>` / `<NavLink>` from `react-router-dom` for all internal navigation — never `<a href>`
- The `*` catch-all route renders `<NotFound />`

## SEO

- Use the `<SEO>` component at the top of every page:
```jsx
import { SEO } from '../components/SEO'

<SEO title="Page Title" description="One sentence description." />
```
- `VITE_APP_NAME` in `.env.local` sets the site name appended to every `<title>`
- Open Graph and Twitter card tags are set automatically from the same props

## Styling conventions

- Tailwind CSS 4 is configured in `src/index.css` via `@import "tailwindcss"` — do NOT create a `tailwind.config.js`
- Custom design tokens live in the `@theme {}` block in `src/index.css`:
```css
  @theme {
    --color-primary: oklch(55% 0.22 290);
    --color-primary-light: oklch(70% 0.18 290);
    --font-sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  }
```
- To change the brand colour for a new project, update `--color-primary` in `index.css`
- Reference custom tokens in JSX as Tailwind classes: `bg-[--color-primary]`, `text-[--color-primary]`
- Mobile-first: always use responsive prefixes (`sm:`, `md:`, `lg:`) where needed
- Max content width is `max-w-6xl` with `px-4 sm:px-6 lg:px-8` horizontal padding

## Animation conventions

- Use Framer Motion for all animations — import `motion` from `framer-motion`
- Standard entrance animation:
```jsx
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
```
- For staggered lists, use `variants` with a parent `staggerChildren` container
- Use `whileHover` and `whileTap` for interactive elements (buttons, cards, links)

## Component conventions

- One component per file, named the same as the file (e.g. `Navbar.jsx` exports `Navbar`)
- Place shared/reusable components in `src/components/`
- Place full page components in `src/pages/`
- Use named exports for components inside `src/components/`, default export for pages

## Error handling

- The app is wrapped in `<ErrorBoundary FallbackComponent={ErrorFallback}>` in `App.jsx`
- The `ErrorFallback` component is defined inline in `App.jsx` — customise its copy per project
- For async errors (data fetching), handle locally with try/catch or React Query error states

## New project setup checklist

When scaffolding a new project from this template:
1. Run `npm install`
2. Copy `.env.example` → `.env.local` and set `VITE_APP_NAME`
3. Update `--color-primary` in `src/index.css` to match the client's brand colour
4. Replace the favicon at `public/favicon.svg`
5. Update nav links in `src/components/Navbar.jsx`
6. Update footer copy and links in `src/components/Footer.jsx`
7. Build out pages in `src/pages/` and wire routes in `src/App.jsx`
8. Remove Remotion files from `src/remotion/` if video is not needed for this project
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
