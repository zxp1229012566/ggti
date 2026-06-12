import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        glass: {
          bg: "rgba(255, 255, 255, 0.08)",
          border: "rgba(255, 255, 255, 0.15)",
          "border-hover": "rgba(255, 255, 255, 0.30)",
        },
        accent: {
          purple: "#8b5cf6",
          cyan: "#06b6d4",
        },
        surface: {
          dark: "#0f0c29",
          mid: "#302b63",
          light: "#24243e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-out-left": "slide-out-left 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-out-left": {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-40px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
