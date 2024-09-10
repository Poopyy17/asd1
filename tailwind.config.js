/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gap: {
        0.5: "0.125rem", // Smallest custom gap
        0.1: "0.025rem", // Even smaller gap if needed
      },
      keyframes: {
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        shineEffect: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
      },
      animation: {
        "gradient-flow": "gradientFlow 5s linear infinite",
        "shine-effect": "shineEffect 2s infinite",
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
