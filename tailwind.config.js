/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinIn: {
          to: { transform: 'rotate(18deg)'}
        },
        spinOut: {
          to: { transform: 'rotate(360deg)'}
        }
      },
      animation: {
        spinIn: 'spinIn 30s linear infinite',
        spinout: 'spinIn 10s linear infinite',
      }
    }
  },
  plugins: [],
};
