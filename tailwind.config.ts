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
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "stone-blue": "#26425A",
        fern: "#558F61",
        "sea-foam": "#B5D9CC",
        "consult-bg-color": "rgba(38, 66, 90, 0.70)",
        "banner-bg-color": "rgba(0, 0, 0, 0.50)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        banner: "url('/banner.jpg')",
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
