module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        charcoal: '#353B50',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
      },
    },
  },
  purge: [
    './components/**/*.jsx', // all components
    './pages/**/*.js', // all pages as well
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
