/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,png,jpg}"],
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
      fraunces: "Fraunces",
    },
    backgroundImage: {
      "mobile-img": "url('/img/hero-pattern.svg')",
      "desktop-img": "url('/img/footer-texture.png')",
    },
    extend: {},
  },
  plugins: [],
};
