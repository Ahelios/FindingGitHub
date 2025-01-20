/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cyberpunk: {
          ...require('daisyui/src/colors/themes')['[data-theme=cyberpunk]'],
          accent: '#FFD700', // Set accent color to yellow (golden shade)
        },
      },
    ],
  },
};
