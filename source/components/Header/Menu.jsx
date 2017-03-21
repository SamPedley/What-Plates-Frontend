import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

import CloseIcon from 'material-ui/svg-icons/navigation/close'

import { toggleMenu, logOutUser } from 'actions'

const Menu = ({open, toggleMenu, context, loggedIn, logOutUser}) => (
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
        primaryText='Home' />
    </Link>
    <Link to='/about'>
      <MenuItem
        onTouchTap={toggleMenu}
        primaryText='About' />
    </Link>
    <Divider />

    {
      loggedIn
      ? <div>
        <Link to='/logout'>
          <MenuItem
            onTouchTap={() => { toggleMenu(); logOutUser() }}
            primaryText='Logout' />
        </Link>
      </div>
      : <div>
        <Link to='/register'>
          <MenuItem
            onTouchTap={toggleMenu}
            primaryText='Register' />
        </Link>
        <Link to='/login'>
          <MenuItem
            onTouchTap={toggleMenu}
            primaryText='Login' />
        </Link>
      </div>

    }

  </Drawer>
)

const mapStateToProps = (state) => ({ open: state.ui.menuOpen, loggedIn: state.user.isAuthenticated })

export default connect(mapStateToProps, {toggleMenu, logOutUser})(Menu)
