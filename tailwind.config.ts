import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#122A42",
        "paper-deep": "#0D2033",
        ink: "#EAF2FB",
        "ink-dim": "#9FB6CC",
        "ink-faint": "#6E8AA3",
        accent: "#E3A63E",
        "accent-dim": "rgba(227,166,62,0.14)",
        line: "rgba(234,242,251,0.12)",
        "line-strong": "rgba(234,242,251,0.24)",
        grid: "rgba(234,242,251,0.02)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
