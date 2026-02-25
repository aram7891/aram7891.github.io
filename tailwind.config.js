/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAFA",
        ink: "#1A1A1A",
        subtle: "#71717A",
        divider: "#E4E4E7",
        accent: "#A67C52"
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"]
      }
    }
  },
  plugins: []
};
