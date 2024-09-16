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
        "red-light": "#FF9393",
        "black-light": "#434356",
      },
      backgroundImage: {
        "hero-tablet": "url('/src/assets/tablet/image-hero.jpg')",
        "hero-desktop": "url('/src/assets/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
