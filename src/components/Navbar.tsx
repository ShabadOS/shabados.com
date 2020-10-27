import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'gatsby'
import { useWindowWidth } from '@react-hook/window-size'

import { Color, widthLessThan, Breakpoints } from '../lib/theme'

const NAV_ROUTES = [
  { name: 'About Us', url: '/about' },
  { name: 'Database', url: '/database' },
  { name: 'Viewer', url: '/viewer' },
  { name: 'Presenter', url: '/presenter' },
  { name: 'App', url: '/app' },
]

const useStyles = createUseStyles( {
  navbar: {
    background: Color.avaniPurple,
    color: Color.white,
    padding: 25,
  },
  homeLink: {
    paddingRight: '1.5rem',
    color: Color.white,
    '&:hover': {
      color: Color.link,
    },
  },
  menuButton: {
    width: '1.2rem',
    height: '1.2rem',
  },
  navItems: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    color: Color.white,
    '&:hover': {
      color: Color.link,
    },
    [ widthLessThan( Breakpoints.tablet ) ]: {
      display: 'flex',
    },
  },
} )

type MenuSwitchProps = {
  toggle :() => void,
}

const MenuSwitch = ( { toggle }:MenuSwitchProps ) => {
  const classes = useStyles()

  return (
    <button type="button" onClick={toggle}>
      <svg className={classes.menuButton} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
      </svg>
    </button>
  )
}

const Navbar = () => {
  const [ isExpanded, toggleExpansion ] = useState( false )
  const classes = useStyles()
  const width = useWindowWidth()

  const toggleSwitch = () => toggleExpansion( !isExpanded )

  useEffect( () => {
    // Not mobile then toggle cannot be expanded
    if ( width > Breakpoints.tablet ) toggleExpansion( false )
  }, [ width ] )

  return (
    <nav className={classes.navbar}>
      <MenuSwitch toggle={toggleSwitch} />
      <Link to="/" className={classes.homeLink}>Shabad OS</Link>
      {NAV_ROUTES.map( ( { name, url } ) => (
        <Link className={classes.navItems} to={url} key={url}>
          {name}
        </Link>
      ) )}
    </nav>
  )
}

export default Navbar
