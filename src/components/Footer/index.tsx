import React from 'react'
import { createUseStyles } from 'react-jss'

import { Color } from '../../theme'
import Link from '../Link'

import { LINKS } from './consts'

const useStyles = createUseStyles( {
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Color.avaniPaper,
    padding: '0.6rem 2rem',
  },
  header: {

  },
  footer: {
    display: 'grid',
    '& ul': {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
      '& > li > a': {
        fontWeight: 'lighter',
        color: Color.black,
        opacity: '60%',
        '&:hover': {
          color: Color.linkHover,
        },
      },
      '& > strong': {
        fontWeight: 'normal',
        fontSize: '1rem',
      },
    },
    'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
    'grid-template-rows': '1fr',
  },
} )

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.main}>
      <div className={classes.header}>
        Follow us on:
      </div>
      <nav className={classes.footer}>
        {LINKS.map( ( sections ) => (
          <div key={sections[ 0 ].name}>
            {
         sections.map( ( { name, links } ) => (
           <ul key={name}>
             <strong>{name}</strong>
             {links.map( ( { name, url } ) => (
               <li key={name}><Link to={url}>{name}</Link></li>
             ) )}
           </ul>
         ) )
}
          </div>
        ) )}
      </nav>
    </footer>
  )
}

export default Footer
