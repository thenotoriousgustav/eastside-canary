/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/assets/img/img3.jpg')",
        city: "url('/src/assets/img/city.jpg')",
        summerhill: "url('/src/assets/img/summerhill.jpg')",
        hive: "url('/src/assets/img/hive.jpg')",
        canary: "url('/src/assets/img/canary.jpg')",
      },
    },
  },
  plugins: [],
};
