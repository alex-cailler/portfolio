const { colors, boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      height: theme => ({
        '400': '400px',
        '100P': '100vh'
      }),
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '4px',
      'large': '16px',
    },
    boxShadow: {
      ...boxShadow,
      custom: '0px 15px 24px rgba(73, 73, 73, 0.27)'
    }
  },
  variants: {},
  plugins: [],
}
