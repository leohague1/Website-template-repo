# Frontend Design

Build or update UI components using React, Tailwind CSS, and Framer Motion following the conventions in this repo.

## Stack

- **React** functional components with hooks only — no class components
- **Tailwind CSS v4** utility classes in JSX; use `@theme` in `index.css` for design tokens; avoid inline `style` props unless animating
- **Framer Motion** for all transitions and micro-interactions

## Component rules

- One component per file, named to match the file (e.g. `HeroSection.jsx`)
- Keep components in `src/components/`; pages in `src/pages/`
- Props should be documented with a short JSDoc comment only when non-obvious
- No default exports from `index.js` barrel files — import directly from the component file

## Tailwind conventions

- Prefer semantic class groupings: layout → spacing → typography → color → interaction
- Use the CSS custom properties defined in `@theme` (`--color-primary`, etc.) for brand colors
- Responsive modifiers mobile-first: `base → sm → md → lg`
- Dark mode via `dark:` variant; never use separate dark-mode stylesheets

## Framer Motion conventions

- Wrap page-level entry with `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>`
- Use `whileHover` / `whileTap` for interactive elements instead of CSS `:hover` transitions
- Keep `duration` ≤ 0.4 s for UI feedback; ≤ 0.7 s for hero/page transitions
- Prefer `ease: 'easeOut'` for entrances and `ease: 'easeIn'` for exits
- Use `AnimatePresence` around any conditionally rendered element that should animate out

## Accessibility

- Every interactive element must have a visible focus ring (`focus-visible:ring-2`)
- Images need meaningful `alt` text or `alt=""` if decorative
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Colour contrast must meet WCAG AA (4.5 : 1 for normal text, 3 : 1 for large text)

## What to deliver

When implementing a component, produce:
1. The `.jsx` file with Tailwind classes + Framer Motion animations
2. Any new design tokens added to `src/index.css` under `@theme`
3. A brief note on any third-party assets (fonts, icons) that need to be added
