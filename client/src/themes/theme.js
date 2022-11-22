// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#2D3250',
      secondary: '#3F62FE',
      accent: '#A44CC4',
      white: '#ffffff',
      clear: '#eef1ff',
      dark: '#1A202C',
      danger: "#E46369",
      success: "#07C19C",
    },
    mainBlue: {
      50: '#EBEEFF',
      200: '#3F62FE',
      300: '#3459FE',
      500: '#3F62FE',
      600: '#3459FE',
    },
    mainPurple: {
      50: '#a373b5',
      200: '#A44CC4',
      300: '#B975D1',
      500: '#A44CC4',
      600: '#A147C2',
    },
  },
  styles: {
    global: {
      body: {
        /* bg: mode('#212121', '#151D30'), */
      },
    },
  },
  fonts: {
    heading: `'Mark Pro', sans-serif`,
    body: `'Circular Std Book', sans-serif`,
  },
});

export default theme;
