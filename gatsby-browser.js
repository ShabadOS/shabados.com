import React from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry, JssProvider } from 'react-jss'
import 'normalize.css'

import { globalTheme } from './src/lib/theme'

const setupJss = () => {
  jss.setup( preset() )
  const sheetsRegistry = new SheetsRegistry()

  const globalStyleSheet = jss.createStyleSheet( globalTheme ).attach()

  sheetsRegistry.add( globalStyleSheet )

  return sheetsRegistry
}

const sheets = setupJss()

export const wrapRootElement = ( { element } ) => (
  <JssProvider registry={sheets}>
    {element}
  </JssProvider>
)
