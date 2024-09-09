/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mango-background": "url(./src/assets/mango-background.jpg)",
      },
    },
  },
  plugins: [],
};
