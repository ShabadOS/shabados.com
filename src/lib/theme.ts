export enum Colour {
  white = '#FFFFFF',
  lightGrey = '#FAF8F7',
  lightBrown = '#F6F3EF',
  blue = '#0088BF',
  pink = '#B71E61',
  darkPink = '#300519',
  black = '#000000',
}
export const radialSplash = `radial-gradient(75vw 100vh at 50% 115%, ${Colour.pink}, ${Colour.darkPink} 100%)`

export const globalTheme = {
  '@global': {
    body: {
      background: Colour.white,
    },
    a: {
      textDecoration: 'none',
      color: Colour.blue,
      '&:hover': {
        color: Colour.white,
      },
    },
  },
}

export enum Breakpoints {
  mobile = 480,
  tablet = 768,
  laptop = 1024,
}

export const widthMoreThan = ( width:number ) => `@media screen and (min-width: ${width}px)`

export const widthLessThan = ( width:number ) => `@media screen and (max-width: ${width - 1}px)`
