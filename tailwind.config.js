/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"]
      },
      colors: {
        neon: {
          green: "#22c55e",
          cyan: "#22d3ee"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(34,197,94,0.35)"
      }
    }
  },
  plugins: []
}
