import React from 'react'
import { createUseStyles } from 'react-jss'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

import { Breakpoints, Color, focusRing, widthLessThan, widthMoreThan } from '../../theme'
import Link from '../Link'
import useToggle from '../../hooks/use-toggle'

import { LINKS } from './consts'
import Expand from './Expand'

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
        ...focusRing,
        padding: '0 0.2rem',
      },
      '& strong': {
        fontWeight: 'normal',
        fontSize: '1rem',
      },
    },
    'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
    'grid-template-rows': '1fr',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandIcon: {
    [ widthMoreThan( Breakpoints.tablet ) ]: {
      display: 'none',
    },
  },
} )

type NavSectionProps= {
  label:string,
  links: { name:string, url:string }[],
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>

const NavSection = ( { label, links, ...props }:NavSectionProps ) => {
  const [ open, setOpen ] = useToggle()
  const classes = useStyles()

  return (
    <ul {...props}>
      <div className={classes.section}>
        <strong>{label}</strong>
        <Expand toggled={open} onClick={setOpen} className={classes.expandIcon} />
      </div>
      {open && links.map( ( { name, url } ) => (
        <li key={name}><Link to={url}>{name}</Link></li>
      ) )}
    </ul>
  )
}

const FooterNav = () => {
  const classes = useStyles()

  return (
    <nav className={classes.footer}>
      {LINKS.map( ( sections ) => (
        <div key={sections[ 0 ].label}>
          {sections.map( ( { label, links } ) => (
            <NavSection key={label} label={label} links={links} />
          ) )}
        </div>
      ) )}
    </nav>
  )
}

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.main}>
      <div className={classes.header}>
        Follow us on:
      </div>
      <FooterNav />
    </footer>
  )
}

export default Footer
