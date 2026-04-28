import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDD0",
        beige: "#F5F5DC",
        red: {
          DEFAULT: "#E63946",
          light: "#ff6b77",
          dark: "#c1121f",
        },
        navy: {
          DEFAULT: "#1D3557",
          light: "#2a4a78",
          dark: "#12223a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
