module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wave: 'wave 2.5s linear infinite',
        spin: 'spin 5s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate( 0.0deg)' },
          '10%': { transform: 'rotate(18.0deg)' },
          '20%': { transform: 'rotate(-10.0deg)' },
          '30% ': { transform: 'rotate(18.0deg)' },
          '40%': { transform: 'rotate(-10.0deg)' },
          '50%': { transform: 'rotate(12.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' },
        },
      },
      transformOrigin: {
        wave: '70% 70%',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
