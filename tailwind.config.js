/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        app: "url(/app-bg.png)",
      },
      colors: {
        gray: {
          900: "#121214",
          800: "#202024",
          500: "#323238",
          400: "#8D8D99",
        },
        green: "#129E57",
        yellow: {
          500: "#F7DD43",
        },
        black: "#09090A",
      },
    },
  },
  plugins: [],
};
