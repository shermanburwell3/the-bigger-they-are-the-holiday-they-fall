/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html", "./*js"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#751A1A",
        "custom-blue": "#19374A",
        "custom-white": "#EAE0CC",
        "custom-orange": "#FF7D00",
        "custom-green": "#386641",
      },
    },
  },
  plugins: [],
};
