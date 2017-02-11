import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import { connect } from 'react-redux'

import { toggleMenu } from 'actions'
import s from './nav.css'

const Nav = ({toggleMenu}) => (
  <nav className={s.nav}>
    <FlatButton
      icon={<NavigationMenu color='white' />}
      label='Menu'
      style={{color: 'white'}}
      labelPosition='before'
      onClick={toggleMenu} />
  </nav>
)

export default connect(null, {toggleMenu})(Nav)
