import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

import CloseIcon from 'material-ui/svg-icons/navigation/close'
import HomeIcon from 'material-ui/svg-icons/action/home'
import HighIcon from 'material-ui/svg-icons/notification/priority-high'

import { toggleMenu } from 'actions'

const Menu = ({open, toggleMenu, context}) => (
  <Drawer
    docked={false}
    width={200}
    open={open}
    openSecondary
    onRequestChange={toggleMenu} >
    <MenuItem
      onTouchTap={toggleMenu}
      primaryText='Close'
      rightIcon={<CloseIcon />} />
    <Divider />
    <Link to='/'>
      <MenuItem
        onTouchTap={toggleMenu}
        primaryText='Home'
        leftIcon={<HomeIcon />} />
    </Link>
    <Link to='/about'>
      <MenuItem
        onTouchTap={toggleMenu}
        primaryText='About'
        leftIcon={<HighIcon />} />
    </Link>
  </Drawer>
)

const mapStateToProps = (state) => ({ open: state.ui.menuOpen })

export default connect(mapStateToProps, {toggleMenu})(Menu)
