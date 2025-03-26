import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "var(--color-dark-gray)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        "very-dark-gray": "var(--color-very-dark-gray)",
        
      },
      fontFamily: {
        primary: "var(--font-family-primary)",
      },
      fontSize: {
        base: "var(--font-size-base)",
      },
      fontWeight: {
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",

      },
    },
  },
  plugins: [],
} satisfies Config;
