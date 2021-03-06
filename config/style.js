export default {
  breakpoint: {
    phone: "0rem",
    tabletPortrait: "37.5rem",
    tabletLandscape: "56.25rem",
    desktopM: "75rem",
    desktopL: "93.75rem",
    desktopXL: "112.5rem",
    desktopXXL: "125rem"
  },
  font: {
    sansSerif: "PT Sans, sans-serif",
    serif: "PT Serif, serif",
    scale: {
      base: "1em", // >>> 16px
      p: "1.1875em", // >>> 19px
      h4: "1.1875em", // >>> 24px
      h3: "1.5em", // >>> 24px
      h2: "2em", // >>> 32px
      h1: "3em" // >>> 48px
    },
    lineHeight: 1.5,
    letterSpacing: "0.04em"
  },
  color: {
    primary: {
      light: "#64B5F6",
      main: "#1E88E5",
      dark: "#0D47A1"
    },
    seconday: {
      main: "",
      light: "",
      dark: ""
    },
    tertiary: {
      main: "",
      light: "",
      dark: ""
    },
    light: "#FAFAFA",
    dark: "#212121",
    white: "#FFFFFF",
    black: "#000000",
    grey: {
      light: "#F5F5F5",
      medium: "#9E9E9E",
      dark: "#424242"
    }
  },
  size: {
    xxs: "0.125rem", // >>> 2
    xs: "0.25rem", // >>> 4
    s: "0.5rem", // >>> 8
    m: "1rem", // >>> 16
    l: "2rem", // >>> 32
    xl: "4rem", // >>> 64
    base: "1.5rem" // >>> 24px/3em for desktop, 16px/1em for mobile,
  },
  sizeMobile: {
    xs: "0.17rem", //
    s: "0.33rem", //
    m: "0.67rem", //
    l: "1.33rem", //
    xl: "2.67rem", //
    base: "1rem" //
  },
  increment: increment => `calc(${increment} * var(--size-base))`,
  incrementFixed: increment => `calc(${increment} * var(--size-base-fixed))`,
  shadow: [
    "0 0.0625em 0.1875em rgba(0,0,0,0.12), 0 0.0625em 0.125em rgba(0,0,0,0.16)",
    "0 0.1875em 0.375em rgba(0,0,0,0.16), 0 0.1875em 0.375em rgba(0,0,0,0.16)",
    "0 0.625em 1.25em rgba(0,0,0,0.19), 0 0.375em 0.375em rgba(0,0,0,0.16)",
    "0 0.875em 1.75em rgba(0,0,0,0.25), 0 0.625em 0.625em rgba(0,0,0,0.16)",
    "0 1.1875em 2.375em rgba(0,0,0,0.30), 0 0.9375em 0.75em rgba(0,0,0,0.16)"
  ]
};
