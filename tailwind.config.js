/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700", // Define your gold color
      },

      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        coolvetica: ["Coolvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
