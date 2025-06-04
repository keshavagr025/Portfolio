/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: { 
  extend: {
    animation: {
      "spin-slow-y": "spinY 10s linear infinite",
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
     fontFamily: {
      Ingrid : ['"Ingrid Darling"', 'cursive'],
        edu: ['"Edu QLD Hand"', 'cursive'],
        caveat: ['"Caveat"', 'cursive'],
      },
       spinY: {
      "0%": { transform: "rotateY(0deg)" },
      "100%": { transform: "rotateY(360deg)" },
    },
  },
},

  plugins: [],
}