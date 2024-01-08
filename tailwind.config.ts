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
      xm: ["16px", "normal"],
      sm: ["20px", "normal"],
      md: ["24px", "normal"],
      lg: ["30px", "normal"],
      xl: ["40px", "normal"],
      hero: ["64px", "normal"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#144F7C",
        secondary: "#26425A",
        tertiary: "#6E57D4",
        quaternary: "#",
        "sea-foam": "#B5D9CC",
        "consult-bg-color": "rgba(20, 79, 124, 0.70)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        consult: "url('/consult.jpg')",
      },
      screens: {
        wideplus: "2000px",
        wide: "1440px",
        medium: "1225px",
        navscreen: "1090px",
        small: "950px",
        tablet: "835px",
        extrasmall: "740px",
        mobileplus: "470px",
        mobile: "394px",
      },
    },
  },
  plugins: [],
};
