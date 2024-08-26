/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slideUp 1s ease-out forwards",
      },
      letterSpacing: {
        wide: "0.3rem",
        wider: "0.5rem",
      },
      colors: {
        gold: "#FFD700", // Define your gold color
      },

      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        coolvetica: ["Coolvetica", "sans-serif"],
        dinnext: ["DINNext", "sans-serif"],
      },
    },
  },
  plugins: [],
};
