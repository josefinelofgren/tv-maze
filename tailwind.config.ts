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
        black: "#0F0F0F",
        "black-900": "#1A1A1A",
        "black-800": "#2B2B2B",
        "black-700": "#353535",
        "black-600": "#3E3E3E",
        "black-500": "#484848",
        "black-400": "#515151",
        "black-300": "#5B5B5B",
        "black-200": "#646464",
        "black-100": "#6E6E6E",
        "white-900": "#FFFFFF90",
        "white-800": "#FFFFFF80",
        "white-700": "#FFFFFF70",
        "white-600": "#FFFFFF60",
        "white-500": "#FFFFFF50",
        "white-400": "#FFFFFF40",
        "white-300": "#FFFFFF30",
        "white-200": "#FFFFFF20",
        "white-100": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
