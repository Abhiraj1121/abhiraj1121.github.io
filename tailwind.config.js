/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050508",
        bg2: "#0a0813",
        violet: "#8b5cf6",
        cyan: "#4c6fff",
        coral: "#f0b429",
        muted: "#8f8aa8",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Segoe UI", "sans-serif"],
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
