# abhiraj1121 / Cognix Studio — Launchpad

A material-style, floating-dock launchpad (light + dark themes) site that links out to every project under **abhiraj1121** and **Cognix Studio**. Built as static HTML/CSS/JS for GitHub Pages — no build step, no dependencies to install.

**Live site:** https://abhiraj1121.github.io/

---

## What's here

```
├── index.html      # markup + content (cards, header, search bar)
├── store.html / store.js / store.css  # Cognix Store (app downloads)
├── style.css       # design system: light/dark tokens, dock, loader, cards
├── script.js       # search filter, ripple effect, fallbacks, clock/year
└── photo/          # all image and video assets referenced by the site
    ├── avatar.jpg
    ├── cognix-icon-transparent.png
    ├── cognix.jpg
    ├── Cognix 1.png
    ├── Cognix2.png
    ├── eka_logo.svg
    ├── eka.jpg
    ├── aboutekadev.jpg
    ├── ai.jpg
    ├── COGNIX.mp4
    ├── EKA.mp4
    └── gemini_generated_video_5064cc8c.mp4
```

## Features

- **Identity header** — profile photo + Cognix badge, with a pulsing green "Systems Operational" indicator and a live clock.
- **Command-style search bar** — instant filter across all cards as you type. Press `/` to jump into it, `Esc` to clear.
- **Project grid** — 9 launch cards (EKA, EKA Mini, Music, FPS, Sol-Net, Cogno, AI, Cognix Studio, About Me), each linking to its own GitHub Pages site.
- **Graceful image fallbacks** — if an image is missing or fails to load, each card falls back to an alternate asset or a styled icon/initial badge, so nothing ever breaks visually.
- **Micro-interactions** — hover lift + neon border glow, click/tap ripple, staggered entrance animation on load.
- **Keyboard accessible** — cards are real links (Tab/Enter work natively); arrow keys move focus through the grid; visible focus outlines throughout.
- **Responsive** — CSS Grid auto-fits from a single phone column up to wide desktop layouts.
- **Reduced motion respected** — animations are disabled for users with `prefers-reduced-motion` set.

## Editing the project list

Each card lives in `index.html` inside `<div class="grid" id="grid">`. To add, remove, or change a project, copy an existing `<a class="card">` block and edit:

- `href` — destination URL
- `data-name` — lowercase text used by the search filter (include title + subtitle keywords)
- the `<img>` `src` and `onerror` fallback chain, or swap in an inline SVG icon block for projects with no dedicated image
- `.card__title` and `.card__subtitle` text

## Deploying

This is a static site — no build process required.

1. Push `index.html`, `style.css`, `script.js`, and the `photo/` folder to the root of the `abhiraj1121.github.io` repository.
2. Enable GitHub Pages on the `main` branch (root) in **Settings → Pages**, if not already enabled.
3. Visit https://abhiraj1121.github.io/ — changes typically go live within a minute or two of pushing.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses `backdrop-filter` for the glass effect, which is supported in all current major browsers; on older browsers cards will render as solid panels instead of blurred glass, with no loss of functionality.

## License

No license specified — all rights reserved by default. Add a `LICENSE` file if you want to make this reusable by others.
