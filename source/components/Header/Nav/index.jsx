import React from 'react'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import { connect } from 'react-redux'

import { toggleMenu } from 'actions'
import s from './nav.css'

const Nav = ({toggleMenu}) => (
  <nav className={s.nav}>
    <IconButton onClick={toggleMenu}>
      <NavigationMenu color='white' />
    </IconButton>
  </nav>
)

export default connect(null, {toggleMenu})(Nav)
