module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      body: ['Nunito'],
    },
    extend: {
      fontSize: {
        sm: ['14px', '16px'],
      },
      colors: {
        gray: {
          100: '#F8F8FA',
          200: '#F0F1F5',
          300: '#E0E2EA',
          400: '#B9BDCF',
          500: '#9194A5',
          600: '#1A1B1D',
        },
        blue: {
          primary: '#4460F7',
          secondary: '#2140E8',
        },
        orange: {
          primary: '#F9A52B',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
};
