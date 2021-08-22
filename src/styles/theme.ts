import { Theme } from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    mainBackground: string
    secondaryBackground: string
    corner: {
      primary: string
    }
    shadow: {
      primary: string
    }
    colors: {
      primary: {
        blue: string
        green: string
        orange: string
        red: string
        black: string
        white: string
      }
      secondary: {
        blueLight: string
        greenLight: string
        orangeLight: string
        redLight: string
        gray900: string
        gray800: string
        gray700: string
        gray600: string
        gray500: string
      }
    }
    withIcon?: boolean
  }
}

export const theme: Theme = {
  mainBackground: '#232D5A',
  secondaryBackground: '#ECF0FA',
  corner: {
    primary: '4px',
  },
  shadow: {
    primary: '5px 5px 15px rgba(15, 36, 83, 0.05)',
  },
  colors: {
    primary: {
      blue: '#2E7CD9',
      green: '#329134',
      orange: '#ff9635',
      red: '#ea3535',
      black: '#1c1c1c',
      white: '#ffffff',
    },
    secondary: {
      blueLight: '#e5f1ff',
      greenLight: '#e2f6e2',
      orangeLight: '#FDF1E5',
      redLight: '#FFECEC',
      gray900: '#585757',
      gray800: '#969696',
      gray700: '#d2d2d2',
      gray600: '#F5F5F5',
      gray500: '#FAFAFA',
    },
  },
}
