import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ['"Monument Extended"', 'sans-serif'],
        visby: ['"Visby"', 'sans-serif'],
      },
      colors: {
        baseDark: "#0F0A0A",
        baseLight: "#FFEDCF",
        baseGreen: "#A2D544",
        baseRed: "#FF4031",
      },
      scale: {
        '150': '1.5',
      },
      opacity: {
        '97': '0.97',
      }
    },
  },
  plugins: [],
} satisfies Config;
