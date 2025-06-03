/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',      
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',        
  ],
  theme: {
    extend: {
      // your customizations here
    },
  },
  plugins: [
    // add any Tailwind plugins here, e.g. forms, typography, etc.
  ],
};
