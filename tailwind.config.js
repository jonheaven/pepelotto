/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { comic: ['"Comic Sans MS"', 'cursive', 'sans-serif'] },
      colors: { pepeGreen: '#69b34c', pepeDark: '#3a8a2e' }
    }
  },
  plugins: []
}
