import React from 'react'
import { connect } from 'react-redux'
import { logOutUser } from 'actions'
import { Redirect } from 'react-router-dom'

const LogOut = ({logOutUser, props}) => {
  logOutUser()
  return (<Redirect to={{ pathname: '/' }} />)
}

export default connect(null, {logOutUser})(LogOut)
