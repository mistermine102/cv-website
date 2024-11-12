/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: 'var(--darkGray)',
        primary: 'var(--primary)',
        primaryLight: 'var(--primaryLight)',
      },
    },
  },
  plugins: [],
}