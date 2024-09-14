/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Comissioner"],
    },
    extend: {
      colors: {
        red: "#F94F4F",
        black: "#191921",
      },
      backgroundImage: {
        "hero-tablet": "url('/src/assets/tablet/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
