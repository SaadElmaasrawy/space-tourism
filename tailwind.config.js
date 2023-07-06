/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B0D17',
        lightBlue: '#D0D6F9',
      },
    },
    fontFamily: {
      Bellefair :["Bellefair","serif"],
      Barlow : ["Barlow Condensed", "sans-serif"]
    }
  },
  plugins: [],
}