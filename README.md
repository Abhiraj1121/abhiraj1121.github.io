# abhiraj1121.github.io — 3D Portfolio

Vite + React + TypeScript + React Three Fiber + Drei + Framer Motion + Tailwind.

## Setup

```
npm install
npm run dev
```

Build: `npm run build` → outputs `dist/`.

## Assets

The original site referenced images at relative paths under `photo/`
(`photo/avatar.jpg`, `photo/eka.jpg`, `photo/cognix.jpg`, `photo/ai.jpg`,
`photo/sol-net.jpg`, `photo/aboutekadev.jpg`) but the source zip did not
contain the actual image files. Drop your images into `public/photo/`
using the exact same filenames — no code changes needed, since Vite serves
`public/` at the site root, matching the original relative paths.
Two new files are referenced for the added nodes: `photo/music.jpg` and
`photo/cogno.jpg`.

## Mobile

- `AdaptiveCamera.tsx` reframes fov/camera distance based on actual canvas aspect
  (portrait vs landscape vs narrow), so the node cluster stays in frame on phones.
- `Background.tsx` and `App.tsx` cut particle count, grid density, DPR cap, and
  disable antialiasing under 768px for performance.
- `ProjectNode.tsx` cards shrink and drop the description text under the `sm:`
  breakpoint, and get `active:scale-95` tap feedback since there's no hover state.
- `OverlayUI.tsx` respects `env(safe-area-inset-*)` for notches, and scales
  down text/spacing on small screens.
- Pinch-zoom and pull-to-refresh are disabled (`touch-action: none`, fixed
  viewport meta) so touch-drag maps cleanly to camera parallax instead.

## Structure

- `src/data/projects.ts` — project schema, links, image paths, 3D positions
- `src/components/Background.tsx` — particle field + drifting grid nebula
- `src/components/Scene.tsx` — camera parallax rig, lighting, node layout
- `src/components/ProjectNode.tsx` — glassmorphic `<Html/>` floating node
- `src/components/OverlayUI.tsx` — animated header/links/footer HUD
- `src/App.tsx` — Canvas + overlay composition
