import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070a",
        bgSoft: "#0b0f14",
        glass: "rgba(255,255,255,0.06)",
        borderGlass: "rgba(255,255,255,0.14)",
        neonCyan: "#00f5d4",
        neonEmerald: "#34d399"
      },
      boxShadow: {
        neon: "0 0 24px rgba(0,245,212,.30)",
        neonSoft: "0 0 16px rgba(0,245,212,.22)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;