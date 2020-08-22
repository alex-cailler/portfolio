const { colors, boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      primary: colors.red,
      secondary: colors.gray,
      success: colors.green,
      danger: colors.orange,
      warning: colors.yellow,
      info: colors.teal,
      ...colors,
    },
    boxShadow: {
      ...boxShadow,
      lg: '0px 5px 10px rgba(105, 105, 105, 0.11)',
    },
    extend: {
      boxShadow: {
        outline: '0 0 0 3px rgba(218, 94, 72, 0.5)'
      }
    },
    customForms: (theme) => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          borderColor: theme('colors.gray.200'),
          '&::placeholder': {
            color: theme('colors.gray.600'),
            fontWeight: theme('fontWeight.thin')
          }
        },
        'input, textarea, multiselect, select, radio, checkbox': {
          '&:focus': {
            boxShadow: theme('boxShadow.outline'),
            borderColor: undefined
          }
        }
      },
      white: {
        'input, textarea, multiselect, select': {
          backgroundColor: 'transparent',
          borderColor: theme('colors.white'),
          color: theme('colors.white'),
          '&::placeholder': {
            color: theme('colors.white')
          }
        }
      }
    }),
    maxHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
