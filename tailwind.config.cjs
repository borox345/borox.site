/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        roboto: ["Inconsolata", "sans-serif"]
      },
      colors: {
        primary: "#354264",
        second: "#4F80FF",
        grey: "#9BA3B2",
        darker: "#333342"
      }
    },
  },

  plugins: [],
};

module.exports = config;
