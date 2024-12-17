import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baseDark: "#0F0A0A",
        baseLight: "#FFEDCF",
        baseGreen: "#A2D544",
        baseRed: "#FF4031",
      },
    },
  },
  plugins: [],
} satisfies Config;
