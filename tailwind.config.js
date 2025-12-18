/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F5132',
        secondary: '#D1E7DD',
        accent: '#FAF7F2',
        dark: '#1F1F1F',
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
  plugins: [],
};
