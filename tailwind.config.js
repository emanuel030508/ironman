/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "acero-oscuro": "#1a1a2e",
        grafito: "#16213e",
        "acero-medio": "#0f3460",
        "naranja-soldadura": "#e94560",
        "plata-metal": "#e8e8e8",
        "oro-metal": "#ffd700",
        cobre: "#b87333",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        spark: "spark 2s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        spark: {
          "0%, 100%": { opacity: "0", transform: "translateY(0) scale(0)" },
          "50%": { opacity: "1", transform: "translateY(-20px) scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
