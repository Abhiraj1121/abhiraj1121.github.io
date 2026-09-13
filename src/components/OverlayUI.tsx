import { motion } from "framer-motion";

const links = [
  { label: "★ GitHub", href: "https://github.com/Abhiraj1121", primary: true },
  { label: "About Me", href: "https://abhiraj1121.github.io/about-me" },
  { label: "EkaDev Docs", href: "https://abhiraj1121.github.io/aboutekadev" },
];

export default function OverlayUI() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 flex flex-col justify-between px-4 sm:px-6"
      style={{
        paddingTop: "max(1.5rem, env(safe-area-inset-top))",
        paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet to-cyan text-lg sm:text-2xl font-bold text-[#07080c] shadow-[0_20px_60px_-10px_rgba(124,92,255,0.5)]">
          A
        </div>
        <span className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] sm:tracking-[4px] text-cyan/90">
          Software Developer · AI Systems
        </span>
        <h1 className="mb-2 sm:mb-3 bg-gradient-to-b from-white to-[#9fa3c0] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Abhi Raj
        </h1>
        <p className="mb-4 sm:mb-6 max-w-lg px-2 text-xs leading-relaxed text-muted sm:text-base">
          Building the <b className="text-white">EkaDev</b> ecosystem — a family of tools spanning
          intelligent web platforms, agentic workflows, and developer tooling. Creator of{" "}
          <b className="text-white">Cognix</b>, focused on practical AI-driven software that ships.
        </p>
        <div className="pointer-events-auto flex flex-wrap justify-center gap-2 sm:gap-3">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`touch-manipulation rounded-xl sm:rounded-2xl border px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold backdrop-blur-md transition-colors ${
                l.primary
                  ? "border-transparent bg-gradient-to-br from-violet to-[#5b3fe0] text-white"
                  : "border-white/10 bg-white/5 text-white hover:border-violet/50"
              }`}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </motion.header>

      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="pointer-events-auto mx-auto text-center text-[10px] sm:text-xs text-muted"
      >
        © 2026 Abhi Raj — COGNIX STUDIO
      </motion.footer>
    </div>
  );
}
