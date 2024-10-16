/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'slide-in-right': {
          '0%': {
            visibility: 'visible',
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'slide-out-right': {
          '0%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            visibility: 'hidden',
            transform: 'translate3d(100%, 0, 0)',
          },
        },
      },
      animation: {
        slideinright: 'slide-in-right 1s ease-in-out forwards',
        slideoutright: 'slide-out-right 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
