/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/assets/img/img1.jpg')",
      },
    },
  },
  plugins: [],
};
