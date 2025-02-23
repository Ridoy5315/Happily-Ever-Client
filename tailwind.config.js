/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontHeading: "'Playfair Display', serif",
        fontBody: "'Poppins', serif",
      },
      colors: {
        "maroon-color": "#800000",
        "gold-color": "#d4bb6c",
        "gold2-color": "#F7E7CE",
      },
    },
  },
  plugins: [require("daisyui")],
};
