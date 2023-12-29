/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ccd9e0',
          200: '#99b2c0',
          300: '#668ca1',
          400: '#336581',
          500: '#003f62',
          600: '#00324e',
          700: '#00263b',
          800: '#001927',
          900: '#000d14',
        },
      },
    },
  },
  plugins: [],
};
