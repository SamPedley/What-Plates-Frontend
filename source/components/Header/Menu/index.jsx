import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'

import { toggleMenu } from 'actions'

const Menu = ({open, toggleMenu}) => (
  <Drawer
    docked={false}
    width={200}
    open={open}
    onRequestChange={toggleMenu}
  >
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
  </Drawer>
)

const mapStateToProps = (state) => ({ open: state.ui.menuOpen })

export default connect(mapStateToProps, {toggleMenu})(Menu)
