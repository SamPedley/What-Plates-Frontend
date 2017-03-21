import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateOnly = ({ component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

const PublicOnly = ({ component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    !isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    )
  )} />
)

const mapStateToProps = (state) => ({ isAuthenticated: state.user.isAuthenticated })

export const PrivateRoute = connect(mapStateToProps)(PrivateOnly)
export const PublicOnlyRoute = connect(mapStateToProps)(PublicOnly)
