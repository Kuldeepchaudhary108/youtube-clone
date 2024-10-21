/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // Custom grid template using auto-fit and minmax
        "autofit-250": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
