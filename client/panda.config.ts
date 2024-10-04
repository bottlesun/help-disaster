import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./_components/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#2d69e9" },
          lightDark: { value: "#275ccf" },
          dark: { value: "#142f69" },
          textBlue: { value: "#334469" },
          text: { value: "#333" },
          error: { value: "#b3261e" },
          gary: { value: "#b2b2b2" },
        },
        fonts: {
          noto: { value: "Noto Sans KR, sans-serif" },
          namum: { value: "NanumSquare, sans-serif" },
        },
      },
    },
  },

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
});
