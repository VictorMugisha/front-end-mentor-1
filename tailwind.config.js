/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-bg-200": "rgb(226,241,231)",
        "custom-green-200": "rgb(12,125,105)",
      },
    },
  },
  plugins: [],
}