/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["16px", "20px"],
      base: ["20px", "normal"],
      lg: ["32px", "normal"],
      xl: ["64px", "normal"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    fontWeight: {
      light: 300,
      normal: 500,
      bold: 800,
      extrabold: 900,
    },
    extend: {
      fontFamily: {
        // avenir: ["Avenir", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#144F7C",
        secondary: "#26425A",
        tertiary: "#558F61",
        quaternary: "#",
        "sea-foam": "#B5D9CC",
        "consult-bg-color": "rgba(38, 66, 90, 0.70)",
        "hero-bg-color":
          "bg-gradient-to-r from-[rgba(0, 0, 0, 0.80)] to-[rgba(0, 0, 0, 0.00)]",
        // "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 12.01%, rgba(0, 0, 0, 0.00) 88.89%)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        consult: "url('/consult.jpg')",
      },
      screens: {
        wide: "1440px",
        navscreen: "1090px",
        medium: "1225px",
        small: "950px",
        extrasmall: "740px",
        mobile: "750px",
      },
    },
  },
  plugins: [],
};
