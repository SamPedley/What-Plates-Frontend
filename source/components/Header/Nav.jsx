import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import { connect } from 'react-redux'

import { toggleMenu } from 'actions'

const Nav = ({toggleMenu}) => (
  <nav>
    <FlatButton
      icon={<NavigationMenu color='white' />}
      label='Menu'
      style={{color: 'white'}}
      labelPosition='before'
      onClick={toggleMenu} />
  </nav>
)

export default connect(null, {toggleMenu})(Nav)
