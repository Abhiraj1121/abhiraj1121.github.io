(() => {
  "use strict";

  /* ---------------------------------------------------------
     Fallback builders — used by inline onerror handlers in HTML
     --------------------------------------------------------- */

  /* ---------------------------------------------------------
     Init on DOM ready
     --------------------------------------------------------- */

  /* Last-resort: if a card image is still broken after its own fallback
     chain, swap in an initials tile (asset paths are never altered). */
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.closest(".card__media")) return;
    if (img.dataset.failed) return;
    const card = img.closest(".card");
    const t = card && card.querySelector(".card__title");
    const key = (img.getAttribute("src") || "");
    // allow the inline chain one more hop (e.g. svg -> jpg), then give up
    if (img.dataset.hop !== "1" && /\.svg$|Cognix 1\.png$/i.test(key)) { img.dataset.hop = "1"; return; }
    img.dataset.failed = "1";
    const el = document.createElement("span");
    el.className = "fallback-icon";
    el.textContent = t ? t.textContent.trim().slice(0, 2).toUpperCase() : "?";
    img.replaceWith(el);
  }, true);

  // Sweep for images that already failed before this script loaded.
  window.addEventListener("load", () => {
    document.querySelectorAll(".card__media img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0 && !img.dataset.failed) {
        const t = img.closest(".card") && img.closest(".card").querySelector(".card__title");
        const el = document.createElement("span");
        el.className = "fallback-icon";
        el.textContent = t ? t.textContent.trim().slice(0, 2).toUpperCase() : "?";
        img.replaceWith(el);
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    stampFooterYear();
    startClock();
    assignCardStagger();
    setupSearch();
    setupRipple();
    setupKeyboardActivation();
    setupLoader();
    setupTheme();
    setupDock();
    setupSpotlight();
  });

  /* ---------------------------------------------------------
     Footer year
     --------------------------------------------------------- */

  function stampFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------
     Boot / loading screen
     - Drives a fake-but-honest progress bar while real assets
       (fonts + images) load, then fades the overlay out and
       un-pauses the header/card entrance animations.
     --------------------------------------------------------- */

  function setupLoader() {
    const bar = document.getElementById("loaderBar");
    const pctEl = document.getElementById("loaderPct");
    const minDisplayMs = 1500; // avoid an unpleasant instant flash
    const startedAt = Date.now();

    let progress = 0;
    const setProgress = (value) => {
      progress = Math.max(progress, Math.min(value, 100));
      if (bar) bar.style.width = `${progress}%`;
      if (pctEl) pctEl.textContent = Math.round(progress);
    };

    setProgress(12);

    // Track real image loads on the page so the bar reflects actual work.
    const images = Array.from(document.querySelectorAll("img"));
    let settled = 0;
    const total = Math.max(images.length, 1);

    const onImageSettled = () => {
      settled++;
      // Reserve the last 15% for the final reveal step below.
      setProgress(15 + (settled / total) * 70);
    };

    if (images.length === 0) {
      setProgress(85);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          onImageSettled();
        } else {
          img.addEventListener("load", onImageSettled, { once: true });
          img.addEventListener("error", onImageSettled, { once: true });
        }
      });
    }

    // Trickle progress forward regardless, so a slow asset never
    // makes the bar look frozen.
    const trickle = setInterval(() => {
      setProgress(progress + (100 - progress) * 0.08);
    }, 180);

    const finish = () => {
      clearInterval(trickle);
      setProgress(100);

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(minDisplayMs - elapsed, 0);

      setTimeout(() => {
        document.body.classList.remove("is-loading");
      }, remaining + 150);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    // Absolute safety net — never trap the user behind the loader.
    setTimeout(finish, 4000);
  }

  /* ---------------------------------------------------------
     Theme toggle (persisted) with circular reveal transition
     --------------------------------------------------------- */

  function setupTheme() {
    const btn = document.getElementById("themeToggle");
    const root = document.documentElement;
    const meta = document.querySelector('meta[name="theme-color"]');
    const paint = () => meta && meta.setAttribute("content", root.dataset.theme === "light" ? "#f3f1fb" : "#0b0a12");
    paint();
    if (!btn) return;

    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      const apply = () => {
        root.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch (e) {}
        paint();
      };
      const r = btn.getBoundingClientRect();
      root.style.setProperty("--tx", `${r.left + r.width / 2}px`);
      root.style.setProperty("--ty", `${r.top + r.height / 2}px`);
      const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (document.startViewTransition && !calm) document.startViewTransition(apply);
      else apply();
    });
  }

  /* Dock: stronger shadow once scrolled */
  function setupDock() {
    const dock = document.getElementById("dock");
    if (!dock) return;
    const onScroll = () => dock.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Cursor-follow spotlight on cards */
  function setupSpotlight() {
    document.addEventListener("pointermove", (e) => {
      const el = e.target.closest && e.target.closest(".card, .app-card");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------------------------------------------------------
     Small live clock next to the status badge
     --------------------------------------------------------- */

  function startClock() {
    const clockEl = document.getElementById("clock");
    if (!clockEl) return;

    const tick = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      clockEl.textContent = `${hh}:${mm}:${ss}`;
    };

    tick();
    setInterval(tick, 1000);
  }

  /* ---------------------------------------------------------
     Give each card a CSS custom property for staggered entrance
     --------------------------------------------------------- */

  function assignCardStagger() {
    const cards = document.querySelectorAll(".card, .app-card");
    cards.forEach((card, i) => {
      card.style.setProperty("--stagger", i);
    });
  }

  /* ---------------------------------------------------------
     Instant search filter
     --------------------------------------------------------- */

  function setupSearch() {
    const input = document.getElementById("search");
    const cards = Array.from(document.querySelectorAll(".card"));
    const countEl = document.getElementById("resultCount");
    const emptyState = document.getElementById("emptyState");
    const emptyQuery = document.getElementById("emptyQuery");

    if (!input) return;

    const runFilter = () => {
      const query = input.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const haystack = (card.dataset.name || "").toLowerCase();
        const matches = query === "" || haystack.includes(query);
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleCount++;
      });

      if (countEl) {
        countEl.textContent = `${visibleCount} module${visibleCount === 1 ? "" : "s"}`;
      }

      if (emptyState) {
        if (visibleCount === 0 && query !== "") {
          emptyState.hidden = false;
          if (emptyQuery) emptyQuery.textContent = input.value.trim();
        } else {
          emptyState.hidden = true;
        }
      }
    };

    input.addEventListener("input", runFilter);

    // Allow "/" to focus search, like a command palette, unless typing elsewhere
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input) {
        const tag = document.activeElement && document.activeElement.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA") {
          e.preventDefault();
          input.focus();
        }
      }
      if (e.key === "Escape" && document.activeElement === input) {
        input.value = "";
        runFilter();
        input.blur();
      }
    });

    runFilter();
  }

  /* ---------------------------------------------------------
     Ripple / click press micro-animation
     --------------------------------------------------------- */

  function setupRipple() {
    const targets = document.querySelectorAll(".card, .btn, .dock__store");

    targets.forEach((el) => {
      // Ripple containers need relative positioning + clipping.
      el.style.position = el.style.position || "relative";
      el.style.overflow = "hidden";

      el.addEventListener("pointerdown", (e) => {
        spawnRipple(el, e.clientX, e.clientY);
      });

      // Keyboard activation (Enter/Space) — center the ripple
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          const rect = el.getBoundingClientRect();
          spawnRipple(el, rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
      });
    });
  }

  function spawnRipple(card, clientX, clientY) {
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = clientX - rect.left - size / 2;
    const y = clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "card__ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    card.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    // Safety cleanup in case animationend doesn't fire
    setTimeout(() => ripple.remove(), 800);
  }

  /* ---------------------------------------------------------
     Keyboard navigation niceties
     - Cards are native <a> tags, so Tab/Enter already work.
     - Arrow keys move focus through the grid for a console feel.
     --------------------------------------------------------- */

  function setupKeyboardActivation() {
    const grid = document.getElementById("grid");
    if (!grid) return;

    grid.addEventListener("keydown", (e) => {
      const arrowKeys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"];
      if (!arrowKeys.includes(e.key)) return;

      const cards = Array.from(grid.querySelectorAll(".card:not(.is-hidden)"));
      const currentIndex = cards.indexOf(document.activeElement);
      if (currentIndex === -1) return;

      e.preventDefault();

      let nextIndex = currentIndex;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextIndex = Math.min(currentIndex + 1, cards.length - 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      cards[nextIndex].focus();
    });
  }
})();
