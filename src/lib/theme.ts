export enum Color {
  link = '#00a2d5',
  avaniPink = '#B71E61',
  avaniPurple = '#300519',
  avaniPaper = '#F6F3EF',
  white = '#FFFFFF',
  gray900 = '#FAF8F7',
  black = '#000000',
}

export const radialSplash = `radial-gradient(75vw 100vh at 50% 115%, ${Color.avaniPink}, ${Color.avaniPurple} 100%)`

export const globalTheme = {
  '@global': {
    body: {
      background: Color.white,
      fontFamily: 'Noto Sans',
    },
    a: {
      textDecoration: 'none',
      color: Color.link,
      '&:hover': {
        color: Color.white,
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
