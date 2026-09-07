import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-primary": "#d4af37",
        "gold-accent": "#e6ca65",
        "gold-deep": "#b8860b",
        "gold-bright": "#f2ca50",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4rem",
        "space-4xl": "6rem",
        "space-5xl": "8rem",
        "gutter-desktop": "2rem",
        "container-max": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
