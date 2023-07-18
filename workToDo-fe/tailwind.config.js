/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlue": "#164B60",
        "midBlue": "#1B6B93",
        "lightBlue": "#4FC0D0",
        "success": "#A2FF86",
        "text-inactive": "#39494f",
        "normal-text":"#333333"
      }
    },
  },
  plugins: [],
}