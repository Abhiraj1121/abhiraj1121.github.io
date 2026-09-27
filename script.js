(() => {
  "use strict";

  /* ---------------------------------------------------------
     Fallback builders — used by inline onerror handlers in HTML
     --------------------------------------------------------- */

  window.__fallbackAvatar = function () {
    const el = document.createElement("div");
    el.className = "identity__avatar fallback-badge";
    el.style.width = "88px";
    el.style.height = "88px";
    el.style.fontSize = "28px";
    el.textContent = "A";
    return el;
  };

  window.__fallbackBadge = function () {
    const el = document.createElement("div");
    el.className = "identity__badge fallback-badge";
    el.style.width = "34px";
    el.style.height = "34px";
    el.style.fontSize = "13px";
    el.textContent = "C";
    return el;
  };

  window.__iconFallback = function (label) {
    const initials = {
      mini: "EM",
      ai: "AI",
      about: "AM",
    };
    const el = document.createElement("span");
    el.className = "fallback-icon";
    el.textContent = initials[label] || "?";
    return el;
  };

  /* ---------------------------------------------------------
     Init on DOM ready
     --------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", () => {
    stampFooterYear();
    startClock();
    assignCardStagger();
    setupSearch();
    setupRipple();
    setupKeyboardActivation();
    setupLoader();
    setupMinibar();
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
    const minDisplayMs = 700; // avoid an unpleasant instant flash
    const startedAt = Date.now();

    let progress = 0;
    const setProgress = (value) => {
      progress = Math.max(progress, Math.min(value, 100));
      if (bar) bar.style.width = `${progress}%`;
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
     Sticky mini nav bar — appears once the header scrolls
     out of view, hides again near the top.
     --------------------------------------------------------- */

  function setupMinibar() {
    const minibar = document.getElementById("minibar");
    const header = document.getElementById("top");
    if (!minibar || !header) return;

    const threshold = () => header.offsetTop + header.offsetHeight;

    let ticking = false;
    const update = () => {
      const show = window.scrollY > threshold();
      minibar.classList.toggle("is-visible", show);
      minibar.setAttribute("aria-hidden", show ? "false" : "true");
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    });

    window.addEventListener("resize", update);
    update();
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
    const cards = document.querySelectorAll(".card");
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
    const targets = document.querySelectorAll(".card, .github-btn, .minibar__github");

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
