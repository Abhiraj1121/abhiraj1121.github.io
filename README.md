# Abhi Raj — Portfolio Landing Page

A single-file, dark-themed landing page for the EkaDev / Cognix ecosystem, featuring an animated mesh-gradient background (gold / purple / black / blue) and 3D tilt hover effects.

## Files

- `index.html` — the entire site (HTML + CSS + JS, no build step, no dependencies)
- `photo/` — optional images folder (create this yourself)

## Adding Images

Everything works with **zero images** — avatars and card icons fall back to gradient letter badges automatically. To add real images, create a `photo/` folder next to `index.html` and drop in any of the following filenames. Each one is optional and falls back cleanly if missing.

| File | Used for |
|---|---|
| `photo/avatar.jpg` | Header profile photo |
| `photo/aboutekadev.jpg` | About EkaDev card |
| `photo/eka.jpg` | Eka card |
| `photo/cognix.jpg` | Cognix card |
| `photo/ekamini.jpg` | Eka Mini card |
| `photo/agenticai.jpg` | Agentic AI card |
| `photo/cognix-studio.jpg` | Cognix Studio card |
| `photo/ai.jpg` | AI card |
| `photo/sol-net.jpg` | Sol Net card |
| `photo/about-me.jpg` | About Me card |

Any image size/aspect ratio works — images are auto-cropped with `object-fit: cover`.

## Deploying (GitHub Pages)

1. Put `index.html` (and `photo/` if used) in your repo root.
2. Enable GitHub Pages → deploy from the branch/root.
3. Done — no build tools needed.

## Customizing

- **Links / cards**: edit the `projects` array near the bottom of the `<script>` section in `index.html`.
- **Colors**: edit the CSS variables at the top of the `<style>` section (`--violet`, `--cyan`, `--coral`, `--bg`, etc.) and the `blobs` array colors in the JS to adjust the background gradient.
- **Bio text**: edit the `<header>` section's tagline paragraph directly.
