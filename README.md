# Website Template

A production-ready React + Vite starter for building high-quality websites.

## Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Dev server + bundler |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 12 | Animations |
| React Router | 7 | Client-side routing |
| react-helmet-async | — | SEO / meta tags |
| react-error-boundary | — | Error handling |
| Remotion | 4 | Programmatic video (optional) |
| Prettier | — | Code formatting |
| ESLint | 10 | Linting |

## Quick start

```bash
# 1. Create a new project from this template
gh repo create my-new-project --template leohague1/Website-template-repo --clone --public
cd my-new-project

# 2. Install dependencies
npm install

# 3. Copy env file and fill in values
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

## Commands

```bash
npm run dev              # start dev server at http://localhost:5173
npm run build            # production build → dist/
npm run preview          # preview production build
npm run lint             # ESLint
npx prettier --write .   # format all files
npm run remotion:studio  # Remotion visual editor
npm run remotion:render  # render video to out/video.mp4
```

## Project structure

```
public/
  favicon.svg            # replace with your favicon
  icons.svg              # SVG sprite sheet
src/
  components/            # reusable UI (Navbar, Footer, Button, SEO, …)
  pages/                 # page-level components (Home, NotFound, …)
  assets/                # images, fonts, static files
  remotion/              # video compositions (remove if not needed)
  index.css              # global styles, Tailwind, @theme tokens
  App.jsx                # providers + router + layout
  main.jsx               # entry point
```

## New project checklist

1. `npm install`
2. Update `--color-primary` in `src/index.css`
3. Replace `public/favicon.svg`
4. Update nav links in `src/components/Navbar.jsx`
5. Update footer copy in `src/components/Footer.jsx`
6. Build out pages in `src/pages/`
7. Remove `src/remotion/` if video is not needed
8. Update `CLAUDE.md` with the project name and description
