/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainBg: "#f0f2ff",
      buttonMain: "#3f53d8",
      secondaryBlue: "#3f53d8",
      lightBlue: "#46beff",
      babyBlue: "#ADDFFF",
      blue: "#1fb6ff",
      black: "#000000",
      white: "#ffffff",
      purple: "#7e5bef",
      grey: "#808080",
    },
    fontFamily: {
      "sans-serif": ["sans-serif"],
      "open-sans": ["open-sans"],
      poppins: ["poppins"],
      "mono-space": ["Space-Mono"],
      roboto: ["roboto"],
    },
    extend: {},
  },
  plugins: [],
};
