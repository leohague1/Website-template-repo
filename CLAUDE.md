# Project

React + Vite website. Replace this file with a description of your specific project.

## Stack

| Tool | Version | Notes |
|---|---|---|
| React | 19 | Functional components + hooks only |
| Vite | 6 | Dev server and bundler |
| Tailwind CSS | 4 | Via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed |
| Framer Motion | latest | All animations and transitions |
| Remotion | 4 | Programmatic video; studio + render CLI included |

## Commands

```bash
npm run dev               # start Vite dev server
npm run build             # production build
npm run preview           # preview production build
npm run remotion:studio   # open Remotion Studio (visual timeline editor)
npm run remotion:render   # render MyComp to out/video.mp4
```

## Project structure

```
src/
  components/        # reusable UI components
  pages/             # page-level components
  assets/            # images, fonts, static files
  remotion/
    index.jsx        # Remotion entry point (registerRoot)
    Root.jsx         # <Composition> declarations
    MyComp.jsx       # starter composition — rename/duplicate for each video
  index.css          # global styles + Tailwind + @theme tokens
  App.jsx            # root component; includes <Player> embed example
  main.jsx           # entry point
```

## Skills

Use `/frontend-design` when building or updating components.
Use `/web-design-guidelines` when reviewing UI or making design decisions.
