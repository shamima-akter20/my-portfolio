/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily:{
        display:  "'Anton'"
      }
    },
  },

  plugins: [require("daisyui")],
}

// font-family: 'Bree Serif', serif;
// font-family: 'Anton', sans-serif;