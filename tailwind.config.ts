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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#192928",
        secondary: "#D2FD89",
        gridiantOne: " #e8e2d9",
        gridiantTow: " #b0d7a3",
      },
    },
  },
  plugins: [],
};
export default config;
