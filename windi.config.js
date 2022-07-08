// @ts-check - enable TS check for js file
//import { defineConfig } from 'windicss/helpers'

// pallette neon1: 0C1E7F, 612897, D22779, FF008E
// pallette neon2: 99DDCC, FF5DA2, 9C19E0, 000D6B

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF008E',
        secondary: '#0C1E7F',
        between: '#612897',
      },
      fontFamily: {
        'sans': ['Sora', 'Outfit', 'system-ui']
      },
      blur: {
        xs: '2px',
      }
    },
  }
};
