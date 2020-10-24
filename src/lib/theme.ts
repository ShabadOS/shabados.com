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
      fontFamily: 'Noto Sans',
    },
  },
}
