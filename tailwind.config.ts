import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      main: {
        100: '#d8f4f5',
        200: '#b6ebeb',
        300: '#83dadd',
        400: '#4ac1c6',
        500: '#31afb7',
        600: '#298691',
        700: '#276d77',
        800: '#285962',
        900: '#254b54',
        950: '#143138',
      },
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        fadeslidein: 'fade-in-down 0.5s ease-in 1',
      },
    },
  },
  plugins: [],
}
export default config
