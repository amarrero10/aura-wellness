import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f5f1",
          100: "#d8e8db",
          200: "#b0ceb8",
          300: "#7fae8a",
          400: "#4f8c60",
          500: "#2d6b43",
          600: "#1c4f30",
          700: "#163d25",
          800: "#0f2c1b",
          900: "#081a10",
          950: "#040e08",
        },
        gold: {
          50: "#fdf8ee",
          100: "#f8edcc",
          200: "#f0d88a",
          300: "#e8c059",
          400: "#d4a843",
          500: "#c9a260",
          600: "#b8863a",
          700: "#9a6d28",
          800: "#7c5520",
          900: "#5e3f18",
        },
        cream: {
          50: "#fefdfb",
          100: "#faf7f2",
          200: "#f5f0e8",
          300: "#ede4d4",
          400: "#e0d4bc",
          500: "#ccc0a0",
        },
        lime: {
          faq: "#E8F56A",
        },
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        dm: ["DM Sans", "sans-serif"],
        script: ["Great Vibes", "cursive"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
