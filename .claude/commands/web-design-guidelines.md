# Web Design Guidelines

Apply these design principles whenever creating or reviewing UI for this project.

## Visual hierarchy

- One dominant heading per screen — never compete with two equal-weight titles
- Supporting text should be at least 20% lighter in weight or colour than the heading
- Use whitespace (padding/margin) to group related elements; do not rely solely on borders or dividers

## Typography

- **Scale**: 12 / 14 / 16 / 20 / 24 / 32 / 40 / 56 px — stay on this scale; no arbitrary sizes
- **Body**: 16–18 px, line-height 1.5–1.6, max-width 65–75 ch for readability
- **Headings**: tighten tracking as size grows (`tracking-tight` at 32 px+, `tracking-tighter` at 48 px+)
- **Weight**: body 400, UI labels 500, headings 600–700; avoid 800+ except for display use
- Limit to two typefaces maximum: one for headings, one for body/UI

## Colour

- Start from the `--color-primary` token; derive tints/shades rather than adding ad-hoc colours
- Backgrounds: near-white (`gray-50`) or pure white in light mode; `gray-900` / `gray-950` in dark mode
- Text: `gray-900` (headings) and `gray-500`–`gray-600` (body) in light; `gray-100` / `gray-400` in dark
- Destructive / error: `red-600` light, `red-400` dark
- Success: `green-600` light, `green-400` dark
- Never convey information by colour alone — pair with an icon or label

## Spacing

- Base unit: 4 px (Tailwind's default). All spacing values must be multiples of 4 px
- Section padding: 80–120 px vertical on desktop, 48–64 px on mobile
- Component internal padding: 16–24 px; card padding: 24–32 px
- Gap between related items: 8–16 px; between sections: 40–64 px

## Layout

- Max content width: 1200 px, centred with `mx-auto`
- Use a 12-column grid for complex layouts; flexbox for simple row/column alignment
- Mobile breakpoint: < 640 px (Tailwind `sm`); tablet: 640–1024 px; desktop: > 1024 px
- Never let a text block span the full viewport width on desktop — cap at 65–75 ch

## Interactive elements

- Buttons: minimum 44 × 44 px touch target
- Primary button: filled with `--color-primary`; secondary: outline or ghost
- Hover state: subtle background shift or scale (use Framer Motion `whileHover`)
- Focus state: 2 px ring offset by 2 px in `--color-primary`
- Disabled state: 40% opacity, `cursor-not-allowed`
- Loading state: skeleton or spinner — never leave the user with no feedback

## Motion

- Animate only opacity and transform — never layout properties (width, height, margin)
- Duration budget: 150–200 ms micro-interactions, 300–500 ms page transitions
- Respect `prefers-reduced-motion`: wrap all animations in a check or use Framer Motion's `useReducedMotion()`
- Avoid simultaneous animations on more than 3 elements

## Icons

- Use a single icon library consistently (e.g. Lucide React) — do not mix libraries
- Icon size: 16 px in-line with text, 20 px for standalone UI icons, 24 px for emphasis
- Always pair icons with a text label or `aria-label`

## Images & media

- Serve modern formats (WebP / AVIF) with JPEG/PNG fallbacks
- Always specify `width` and `height` attributes to avoid layout shift
- Lazy-load images below the fold (`loading="lazy"`)
- Hero images: provide a low-quality placeholder or dominant colour background while loading

## Checklist before shipping a new page

- [ ] One clear primary CTA visible above the fold
- [ ] All text passes WCAG AA contrast
- [ ] Keyboard navigation works end-to-end
- [ ] Looks correct at 375 px, 768 px, and 1280 px widths
- [ ] No layout shift during page load (images have dimensions, fonts are preloaded)
- [ ] Animations respect `prefers-reduced-motion`
