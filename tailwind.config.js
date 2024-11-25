/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: 'var(--darkGray)',
        primary: 'var(--primary)',
        primaryLight: 'var(--primaryLight)',
        background: 'var(--background)',
      },
      spacing: {
        page: '100px',
      },
      fontSize: {
        regular: '1.25rem',
      },
    },
  },
  plugins: [],
}
