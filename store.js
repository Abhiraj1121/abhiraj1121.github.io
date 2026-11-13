/* ============================================================
   Cognix App Store — app catalog
   ------------------------------------------------------------
   TO ADD A NEW APP: copy one object in the APPS array below and
   edit its fields. TO UPDATE A LINK: just change the url string
   for that platform. Nothing else in this file needs to change.
   ============================================================ */

const APPS = [
  {
    id: "novaboard",
    name: "NovaBoard",
    tagline: "Productivity Dashboard",
    description: "A fast, local-first dashboard for tracking tasks, notes and widgets in one place.",
    version: "v3.0.3",
    icon: "photo/novaboard-icon.webp",
    iconFallbackText: "NB",
    platforms: [
      {
        os: "windows",
        label: "Windows",
        fileLabel: "Setup .exe",
        url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-Setup-v3.0.3.exe",
      },
      {
        os: "linux",
        label: "Linux",
        fileLabel: ".deb package",
        url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-v3.0.3-amd64.deb",
      },
      {
        os: "linux",
        label: "Linux",
        fileLabel: ".AppImage",
        url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-3.0.3-x86_64.AppImage",
      },
       {
          os: "android",
          label: "Android",
          fileLabel: ".apk",
          url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-v3.0.3.apk",
       }
    ],
  },
   {
    id: "LAN HUB",
    name: "LAN VIEWER",
    tagline: "Core Ecosystem App",
    description: "Local hosting made easy.",
    version: "v1.0.0",
    icon: "photo/lanview.png",
    iconFallbackText: "LH",
    platforms: [
      { os: "windows", label: "Windows", fileLabel: "Setup .exe", url: "https://github.com/cognixstudio/lan-hub/releases/download/LAB-HUB/lan-viewer-1.0.0-win-x64.zip" },
      { os: "linux",   label: "Linux",   fileLabel: ".deb package", url: "https://github.com/cognixstudio/lan-hub/releases/download/LAB-HUB/lan-viewer-1.0.0-linux-amd64.deb" },
      { os: "linux", label:"Linux", fileLabel: ".AppImage", url: "https://github.com/cognixstudio/lan-hub/releases/download/LAB-HUB/lan-viewer-1.0.0-linux-x86_64.AppImage" },
      { os: "android", label:"Android", fileLabel : ".apk", url: "https://github.com/cognixstudio/lan-hub/releases/download/LAB-HUB/lan-viewer-0.0.0-dev-android.apk" },
   ],
  },
   {
    id: "LAN HUB HOST",
    name: "LAN HOST",
    tagline: "Core Ecosystem App",
    description: "Local hosting made easy.",
    version: "v1.0.0",
    icon: "photo/lanhost.png",
    iconFallbackText: "LV",
    platforms: [
      { os: "windows", label: "Windows", fileLabel: "Setup .exe", url: "https://github.com/cognixstudio/lan-hub/releases/download/LAB-HUB/lan-host-1.0.0-win-x64.zip" },
      { os: "linux",   label: "Linux",   fileLabel: ".deb package", url: "https://github.com/cognixstudio/lan-hub/releases/download/LAB-HUB/lan-host-1.0.0-linux-amd64.deb" },
      { os: "linux", label:"Linux", fileLabel: ".AppImage", url: "https://github.com/cognixstudio/lan-hub/releases/download/LAB-HUB/lan-host-1.0.0-linux-x86_64.AppImage"},
    ],
  },

  // Example — EKA, once builds exist. Copy, uncomment, and fill in real URLs:
  {
    id: "eka",
    name: "EKA",
    tagline: "Core Ecosystem App",
    description: "The EKA desktop and mobile client.",
    version: "v1.0.0",
    icon: "photo/eka_logo.svg",
    iconFallbackText: "EK",
    platforms: [
      { os: "windows", label: "Windows", fileLabel: "Setup .exe", url: "https://github.com/Abhiraj1121/eka/releases/download/EKA/EKA-AI-1.0.0-win-x64.exe" },
      { os: "linux",   label: "Linux",   fileLabel: ".deb package", url: "https://github.com/Abhiraj1121/eka/releases/download/EKA/EKA-AI-1.0.0-linux-amd64.deb" },
    ],
  },
  {
    id: "music",
    name: "Audio Visualizer",
    tagline: "Core Ecosystem App",
    description: "A Audio tracking app.",
    version: "v3.0.0",
    icon: "photo/cognix.jpg",
    iconFallbackText: "EK",
    platforms: [
      { os: "windows", label: "Windows", fileLabel: "Setup .exe", url: "https://github.com/Abhiraj1121/music/releases/download/Cognoproject/Cognix.3D.Audio.Visualizer-Setup-3.0.0.exe" },
      { os: "linux",   label: "Linux",   fileLabel: ".deb package", url: "https://github.com/Abhiraj1121/music/releases/download/Cognoproject/cognix-3d-audio-visualizer_3.0.0_amd64.deb" },
    ],
  },
   {
    id: "gesture-lab",
    name: "Gesture Lab",
    tagline: "Core Ecosystem App",
    description: "Advance app control by finger.",
    version: "v1.0.0",
    icon: "photo/favicon.jpg",
    iconFallbackText: "GL",
    platforms: [
      { os: "windows", label: "Windows", fileLabel: "Setup .exe", url: "https://github.com/cognixstudio/exibition/releases/download/Exibition/Gesture-Lab-Installer-v1.0.0-exe.zip" },
    ],
  },
  
];

/* ---------- platform icon glyphs (inline SVG, no external files) ---------- */

const OS_ICONS = {
  windows: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm8.5-1.2L21 3v8.4h-9.5V4.3ZM3 12.6h7.5v7.1L3 18.6v-6ZM11.5 12.6H21V21l-9.5-1.3v-7.1Z"/></svg>`,
  linux: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.5 0 2.6 1.3 2.6 3.2 0 1.3-.4 2.1-.9 3 .8.4 1.6 1.2 1.9 2.3.5-.2 1-.1 1.3.3.5.6.2 1.7-.6 2.6.4.5.5 1.1.2 1.7-.5 1-2 1.6-3.4 1.4-.3.6-1 1-1.8 1h-2.6c-.8 0-1.5-.4-1.8-1-1.4.2-2.9-.4-3.4-1.4-.3-.6-.2-1.2.2-1.7-.8-.9-1.1-2-.6-2.6.3-.4.8-.5 1.3-.3.3-1.1 1.1-1.9 1.9-2.3-.5-.9-.9-1.7-.9-3C9.4 3.3 10.5 2 12 2Z"/></svg>`,
  android: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M7 8.5v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0Zm8 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0ZM8.5 20a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-9h-7v9Zm7.6-13.3.9-1.6a.4.4 0 1 0-.7-.4l-.9 1.6a5.9 5.9 0 0 0-5 0l-.9-1.6a.4.4 0 1 0-.7.4l.9 1.6A5.5 5.5 0 0 0 7 10.5h10a5.5 5.5 0 0 0-2.9-3.8ZM9.8 9a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm4.4 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z"/></svg>`,
  macos: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 2.3c.1 1-.3 2-.9 2.8-.6.7-1.6 1.3-2.6 1.2-.1-1 .4-2 .9-2.7.6-.8 1.7-1.3 2.6-1.3ZM20 17.1c-.5 1.2-.8 1.7-1.5 2.7-1 1.4-2.3 3.2-4 3.2-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3-1.8-2.6-3.1-7.3-1.3-10.5.9-1.6 2.5-2.6 4.2-2.6 1.4 0 2.3 1 3.9 1 1.4 0 2.1-1 3.9-1 1.6 0 3.2.9 4.2 2.4-1.5.9-2.4 2.5-2.4 4.2 0 2.1 1.3 3.1 1.8 3.6Z"/></svg>`,
};

/* ---------- helpers ---------- */

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const osName = (o) => (o ? o[0].toUpperCase() + o.slice(1) : "");
const appOSList = (app) => [...new Set(app.platforms.map((p) => p.os))];
const iconHTML = (app, size) => `
  <img src="${esc(app.icon)}" alt="" width="${size}" height="${size}" loading="lazy"
       onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'icon-fallback',textContent:${JSON.stringify(app.iconFallbackText || "?")}}));">`;

/* ---------- state ---------- */

let activeOS = "all";
let query = "";

/* ---------- hero stats ---------- */

function renderStats() {
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set("statApps", APPS.length);
  set("statPlatforms", new Set(APPS.flatMap(appOSList)).size);
  set("statFiles", APPS.reduce((n, a) => n + a.platforms.length, 0));
}

/* ---------- featured spotlight (first app, or one with featured: true) ---------- */

function renderFeatured() {
  const box = document.getElementById("featured");
  if (!box) return;
  const app = APPS.find((a) => a.featured) || APPS[0];
  if (!app) { box.hidden = true; return; }
  box.innerHTML = `
    <div class="featured__glow" aria-hidden="true"></div>
    <div class="featured__icon">${iconHTML(app, 112)}</div>
    <div class="featured__body">
      <span class="featured__badge">★ Featured</span>
      <h2 class="featured__title">${esc(app.name)}</h2>
      <p class="featured__tagline">${esc(app.tagline)}</p>
      <p class="featured__desc">${esc(app.description)}</p>
      <div class="featured__actions">
        <button type="button" class="get-btn get-btn--lg" data-open="${esc(app.id)}">Get ${esc(app.name)}</button>
        <span class="os-row">${appOSList(app).map((o) => `<span class="os-pill" title="${osName(o)}">${OS_ICONS[o] || ""}${osName(o)}</span>`).join("")}</span>
        <span class="ver">${esc(app.version)}</span>
      </div>
    </div>`;
}

/* ---------- app tiles ---------- */

function appCardHTML(app) {
  const oses = appOSList(app);
  const searchable = [app.name, app.tagline, app.description, ...app.platforms.map((p) => p.label + " " + p.fileLabel)].join(" ").toLowerCase();
  return `
    <article class="app-card tile" data-id="${esc(app.id)}" data-name="${esc(searchable)}" data-os="${oses.join(" ")}">
      <div class="tile__top">
        <span class="tile__icon">${iconHTML(app, 72)}</span>
        <span class="ver">${esc(app.version)}</span>
      </div>
      <div class="tile__body">
        <h3 class="tile__title">${esc(app.name)}</h3>
        <p class="tile__tagline">${esc(app.tagline)}</p>
        <p class="tile__desc">${esc(app.description)}</p>
      </div>
      <div class="tile__foot">
        <span class="os-icons">${oses.map((o) => `<span class="os-icon" title="${osName(o)}">${OS_ICONS[o] || ""}</span>`).join("")}</span>
        <button type="button" class="get-btn" data-open="${esc(app.id)}" aria-label="Get ${esc(app.name)}">Get</button>
      </div>
    </article>`;
}

function renderApps() {
  const grid = document.getElementById("appGrid");
  if (!grid) return;
  grid.innerHTML = APPS.map(appCardHTML).join("");
  grid.querySelectorAll(".app-card").forEach((c, i) => c.style.setProperty("--stagger", i));
}

/* ---------- platform filter chips (with counts) ---------- */

function setupFilters() {
  const wrap = document.getElementById("filters");
  if (!wrap) return;
  const oses = ["all", ...new Set(APPS.flatMap(appOSList))];
  const count = (o) => (o === "all" ? APPS.length : APPS.filter((a) => appOSList(a).includes(o)).length);
  wrap.innerHTML = oses
    .map((o) => `<button type="button" class="filter${o === "all" ? " is-active" : ""}" data-os="${o}">${o === "all" ? "All apps" : (OS_ICONS[o] || "") + osName(o)}<span class="filter__n">${count(o)}</span></button>`)
    .join("");
  wrap.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    activeOS = b.dataset.os;
    wrap.querySelectorAll(".filter").forEach((f) => f.classList.toggle("is-active", f === b));
    applyFilters();
  });
}

/* ---------- search + filter ---------- */

function applyFilters() {
  const countEl = document.getElementById("storeResultCount");
  const emptyState = document.getElementById("storeEmptyState");
  const emptyQuery = document.getElementById("storeEmptyQuery");
  const featured = document.getElementById("featured");
  let visible = 0;

  document.querySelectorAll(".app-card").forEach((card) => {
    const okQuery = query === "" || (card.dataset.name || "").includes(query);
    const okOS = activeOS === "all" || (card.dataset.os || "").split(" ").includes(activeOS);
    const show = okQuery && okOS;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  if (featured) featured.style.display = query === "" && activeOS === "all" ? "" : "none";
  if (countEl) countEl.textContent = `${visible} app${visible === 1 ? "" : "s"}`;
  if (emptyState) {
    emptyState.hidden = visible !== 0;
    if (emptyQuery) emptyQuery.textContent = query || osName(activeOS);
  }
}

function setupStoreSearch() {
  const input = document.getElementById("storeSearch");
  if (!input) return;
  input.addEventListener("input", () => { query = input.value.trim().toLowerCase(); applyFilters(); });
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement && document.activeElement.tagName;
    if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") { e.preventDefault(); input.focus(); }
    if (e.key === "Escape" && document.activeElement === input) { input.value = ""; query = ""; applyFilters(); input.blur(); }
  });
  applyFilters();
}

/* ---------- detail sheet (all download options for one app) ---------- */

function setupSheet() {
  const dlg = document.getElementById("appSheet");
  const content = document.getElementById("sheetContent");
  if (!dlg || !content) return;

  const open = (id) => {
    const app = APPS.find((a) => a.id === id);
    if (!app) return;
    content.innerHTML = `
      <div class="sheet__head">
        <span class="sheet__icon">${iconHTML(app, 84)}</span>
        <div class="sheet__title-block">
          <h2 class="sheet__title" id="sheetTitle">${esc(app.name)}</h2>
          <p class="sheet__tagline">${esc(app.tagline)}</p>
          <span class="ver">${esc(app.version)}</span>
        </div>
      </div>
      <p class="sheet__desc">${esc(app.description)}</p>
      <h3 class="sheet__sub">Choose your download</h3>
      <div class="dl-list">
        ${app.platforms.map((p) => `
          <a class="dl-btn" href="${esc(p.url)}" data-os="${esc(p.os)}" download>
            <span class="dl-btn__icon">${OS_ICONS[p.os] || ""}</span>
            <span class="dl-btn__text">
              <span class="dl-btn__os">${esc(p.label)}</span>
              <span class="dl-btn__file">${esc(p.fileLabel)}</span>
            </span>
            <svg class="dl-btn__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v13m0 0 5-5m-5 5-5-5M5 21h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>`).join("")}
      </div>`;
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    document.body.classList.add("sheet-open");
  };
  const close = () => { dlg.close ? dlg.close() : dlg.removeAttribute("open"); };

  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-open]");
    if (opener) { open(opener.dataset.open); return; }
    if (e.target.closest("[data-close]") || e.target === dlg) close();
    const dl = e.target.closest(".dl-btn");
    if (dl) feedback(dl);
  });
  dlg.addEventListener("close", () => document.body.classList.remove("sheet-open"));

  /* clicking anywhere on a tile (not just Get) opens it too */
  document.getElementById("appGrid").addEventListener("click", (e) => {
    if (e.target.closest("[data-open]")) return;
    const card = e.target.closest(".app-card");
    if (card) open(card.dataset.id);
  });
}

/* ---------- download click feedback ---------- */

function feedback(btn) {
  if (!btn.getAttribute("href")) return;
  btn.classList.add("is-downloading");
  const fileEl = btn.querySelector(".dl-btn__file");
  const original = fileEl ? fileEl.textContent : "";
  if (fileEl) fileEl.textContent = "Starting download…";
  setTimeout(() => {
    btn.classList.remove("is-downloading");
    if (fileEl) fileEl.textContent = original;
  }, 2200);
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderFeatured();
  renderApps();
  setupFilters();
  setupStoreSearch();
  setupSheet();
});
