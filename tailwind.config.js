/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
    },
     colors: {
      
          
    extend: {
        brand: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
         },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  
  ],
};
