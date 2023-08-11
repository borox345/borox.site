/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        heading: ["Outfit", "sans-serif"]
      },
      colors: {
        primary: "#354264",
        second: "#4F80FF",
        grey: "#9BA3B2",
        darker: "#0E172A"
      }
    },
  },

  plugins: [],
};

module.exports = config;
