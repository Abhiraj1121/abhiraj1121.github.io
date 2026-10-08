/* ============================================================
   Cognix Store — app catalog
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
    version: "v3.0.0",
    icon: "photo/novaboard-icon.webp",
    iconFallbackText: "NB",
    platforms: [
      {
        os: "windows",
        label: "Windows",
        fileLabel: "Setup .exe",
        url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-Setup-v3.0.0.exe",
      },
      {
        os: "linux",
        label: "Linux",
        fileLabel: ".deb package",
        url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-v3.0.0-amd64.deb",
      },
      {
        os: "linux",
        label: "Linux",
        fileLabel: ".AppImage",
        url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-3.0.0-x86_64.AppImage",
      },
       {
          os: "android",
          label: "Android",
          fileLabel: ".apk",
          url: "https://github.com/Abhiraj1121/novaboard/releases/download/Novaboard/NovaBoard-OS-v3.0.0-Beta.apk",
       }
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
  
];

/* ---------- platform icon glyphs (inline SVG, no external files) ---------- */

const OS_ICONS = {
  windows: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm8.5-1.2L21 3v8.4h-9.5V4.3ZM3 12.6h7.5v7.1L3 18.6v-6ZM11.5 12.6H21V21l-9.5-1.3v-7.1Z"/></svg>`,
  linux: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.5 0 2.6 1.3 2.6 3.2 0 1.3-.4 2.1-.9 3 .8.4 1.6 1.2 1.9 2.3.5-.2 1-.1 1.3.3.5.6.2 1.7-.6 2.6.4.5.5 1.1.2 1.7-.5 1-2 1.6-3.4 1.4-.3.6-1 1-1.8 1h-2.6c-.8 0-1.5-.4-1.8-1-1.4.2-2.9-.4-3.4-1.4-.3-.6-.2-1.2.2-1.7-.8-.9-1.1-2-.6-2.6.3-.4.8-.5 1.3-.3.3-1.1 1.1-1.9 1.9-2.3-.5-.9-.9-1.7-.9-3C9.4 3.3 10.5 2 12 2Z"/></svg>`,
  android: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M7 8.5v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0Zm8 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0ZM8.5 20a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-9h-7v9Zm7.6-13.3.9-1.6a.4.4 0 1 0-.7-.4l-.9 1.6a5.9 5.9 0 0 0-5 0l-.9-1.6a.4.4 0 1 0-.7.4l.9 1.6A5.5 5.5 0 0 0 7 10.5h10a5.5 5.5 0 0 0-2.9-3.8ZM9.8 9a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm4.4 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z"/></svg>`,
  macos: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 2.3c.1 1-.3 2-.9 2.8-.6.7-1.6 1.3-2.6 1.2-.1-1 .4-2 .9-2.7.6-.8 1.7-1.3 2.6-1.3ZM20 17.1c-.5 1.2-.8 1.7-1.5 2.7-1 1.4-2.3 3.2-4 3.2-1.5 0-1.9-1-3.9-1s-2.5 1-3.9 1c-1.7 0-3-1.6-4-3-1.8-2.6-3.1-7.3-1.3-10.5.9-1.6 2.5-2.6 4.2-2.6 1.4 0 2.3 1 3.9 1 1.4 0 2.1-1 3.9-1 1.6 0 3.2.9 4.2 2.4-1.5.9-2.4 2.5-2.4 4.2 0 2.1 1.3 3.1 1.8 3.6Z"/></svg>`,
};

/* ---------- rendering ---------- */

function renderApps() {
  const grid = document.getElementById("appGrid");
  const countEl = document.getElementById("storeResultCount");
  if (!grid) return;

  grid.innerHTML = APPS.map(appCardHTML).join("");
  if (countEl) countEl.textContent = `${APPS.length} app${APPS.length === 1 ? "" : "s"}`;
}

function appCardHTML(app) {
  const platformButtons = app.platforms
    .map(
      (p) => `
      <a class="dl-btn" href="${p.url}" data-os="${p.os}" download>
        <span class="dl-btn__icon">${OS_ICONS[p.os] || ""}</span>
        <span class="dl-btn__text">
          <span class="dl-btn__os">${p.label}</span>
          <span class="dl-btn__file">${p.fileLabel}</span>
        </span>
        <svg class="dl-btn__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v13m0 0 5-5m-5 5-5-5M5 21h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>`
    )
    .join("");

  const searchable = [app.name, app.tagline, ...app.platforms.map((p) => p.label)]
    .join(" ")
    .toLowerCase();

  return `
    <article class="app-card" data-name="${searchable}">
      <div class="app-card__head">
        <span class="app-card__icon">
          <img src="${app.icon}" alt="" width="52" height="52"
               onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'app-card__icon-fallback',textContent:'${app.iconFallbackText || "?"}'}));">
        </span>
        <div class="app-card__title-block">
          <h2 class="app-card__title">${app.name}</h2>
          <p class="app-card__tagline">${app.tagline}</p>
        </div>
        <span class="app-card__version">${app.version}</span>
      </div>
      <p class="app-card__desc">${app.description}</p>
      <div class="dl-grid">${platformButtons}</div>
    </article>`;
}

/* ---------- platform filter chips ---------- */

let activeOS = "all";

function setupFilters() {
  const wrap = document.getElementById("filters");
  if (!wrap) return;
  const oses = ["all", ...new Set(APPS.flatMap((a) => a.platforms.map((p) => p.os)))];
  wrap.innerHTML = oses
    .map((o) => `<button type="button" class="filter${o === "all" ? " is-active" : ""}" data-os="${o}">${o === "all" ? "All" : (OS_ICONS[o] || "") + o[0].toUpperCase() + o.slice(1)}</button>`)
    .join("");
  wrap.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    activeOS = b.dataset.os;
    wrap.querySelectorAll(".filter").forEach((f) => f.classList.toggle("is-active", f === b));
    document.getElementById("storeSearch").dispatchEvent(new Event("input"));
  });
}

/* ---------- search filter (mirrors launchpad behavior) ---------- */

function setupStoreSearch() {
  const input = document.getElementById("storeSearch");
  const countEl = document.getElementById("storeResultCount");
  const emptyState = document.getElementById("storeEmptyState");
  const emptyQuery = document.getElementById("storeEmptyQuery");
  if (!input) return;

  const run = () => {
    const query = input.value.trim().toLowerCase();
    const cards = Array.from(document.querySelectorAll(".app-card"));
    let visible = 0;

    cards.forEach((card) => {
      const hay = card.dataset.name || "";
      const match = (query === "" || hay.includes(query)) && (activeOS === "all" || hay.includes(activeOS));
      card.style.display = match ? "" : "none";
      if (match) visible++;
    });

    if (countEl) countEl.textContent = `${visible} app${visible === 1 ? "" : "s"}`;

    if (emptyState) {
      if (visible === 0 && query !== "") {
        emptyState.hidden = false;
        if (emptyQuery) emptyQuery.textContent = input.value.trim();
      } else {
        emptyState.hidden = true;
      }
    }
  };

  input.addEventListener("input", run);
  run();
}

/* ---------- download click feedback ---------- */

function setupDownloadFeedback() {
  document.querySelectorAll(".dl-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.getAttribute("href")) return;
      btn.classList.add("is-downloading");
      const fileEl = btn.querySelector(".dl-btn__file");
      const original = fileEl ? fileEl.textContent : "";
      if (fileEl) fileEl.textContent = "Starting download…";
      setTimeout(() => {
        btn.classList.remove("is-downloading");
        if (fileEl) fileEl.textContent = original;
      }, 2200);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderApps();
  setupFilters();
  setupStoreSearch();
  document.querySelectorAll(".app-card").forEach((c, i) => c.style.setProperty("--stagger", i));
  setupDownloadFeedback();
});
