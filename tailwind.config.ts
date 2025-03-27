import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bme_blue: "#075cab",
        bme_grey: "#f3f4f6",
      },
      animation: {
        shine: "shine 1.5s infinite linear",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%) translateY(-100%)" },
          "100%": { transform: "translateX(100%) translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
