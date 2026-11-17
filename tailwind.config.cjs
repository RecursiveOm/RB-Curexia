/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        obsidian: '#040208',
        amethyst: '#0b0418',
        royal: '#130728',
        bone: '#f6f4f0',
        champagne: '#ede8d0',
        stonewarm: '#a39cb4',
        crimson: '#b91c2c'
      }
    }
  },
  plugins: []
};
