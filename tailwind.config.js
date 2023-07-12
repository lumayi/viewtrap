/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: { colors: [{ main: '#00B78A' }, { bgDark: '#1a1c35' }] },
  },
  plugins: [],
  darkMode: 'class',
};
