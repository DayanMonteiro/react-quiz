import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      error: "#D41C1C",
      white: "#FFFFFF",
      black: "#0A0A0A",

      primary100: "#DDE2FF",
      primary200: "#BAC6FF",
      primary300: "#98A9FF",
      primary400: "#758DFF",
      primary500: "#5370FF",
      primary600: "#425BD4",
      primary700: "#3246AA",
      primary800: "#21317F",
      primary900: "#19276A",

      cyan100: "#cffafe",
      cyan200: "#a5f3fc",
      cyan300: "#67e8f9",
      cyan400: "#22d3ee",

      sky400: "#38bdf8",
      sky500: "#0ea5e9",
      sky600: "#0284c7",
      sky700: "#32487C",

      grey100: "#F5F5F5",
      grey200: "#BFBFBF",
      grey300: "#A1A1A1",
      grey400: "#848484",
      grey500: "#666666",
      grey600: "#525252",
      grey700: "#3D3D3D",
      grey800: "#292929",
      grey900: "#1F1F1F",

      green: "#02b302",
    },
    fonts: {
      sans: "Open Sans, apple-system, sans-serif",
    },
    fontSizes: {
      xxs: "1rem",
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "2rem",
      xl: "2.4rem",
      xxl: "3.2rem",
    },
    fontWeights: {
      light: "300",
      regular: "400",
      medium: "600",
      bold: "700",
    },
    shadows: {
      light: "1px 2px 2px hsl(0deg 0% 50% / 0.333)",
      default: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
      active: "0 0 #0000, 0 0 #0000, 0 4px #5370FF",
    },
  },
  media: {
    mobile: "(min-width: 640px)",
    tablet: "(min-width: 1024px)",
    maxTablet: "(max-width: 1024px)",
    desktop: "(min-width: 1280px)",
    laptopSmall: "(min-width: 1366px)",
    laptopMedium: "(min-width: 1440px)",
    laptopHigh: "(min-width: 1920px)",
  },
});
