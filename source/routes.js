import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { PrivateRoute, PublicOnlyRoute } from 'utils/RouteHelpers'
import Home from 'pages/Home'
import Options from 'pages/Options'
import Register from 'pages/Auth/Register'
import Login from 'pages/Auth/Login'
import Logout from 'pages/Auth/Logout'
import About from 'pages/Static/About'
import PrivacyPolicy from 'pages/Static/PrivacyPolicy'
import FourZeroFour from 'pages/Static/FourZeroFour'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/options' component={Options} />
    {/* ---------- Auth Routes ---------- */}
    <PublicOnlyRoute exact path='/register' component={Register} />
    <PublicOnlyRoute exact path='/login' component={Login} />
    <Route exact path='/logout' component={Logout} />
    {/* ---------- Static Pages ---------- */}
    <PrivateRoute exact path='/about' component={About} />
    <Route exact path='/privacy-policy' component={PrivacyPolicy} />
    <Route component={FourZeroFour} />
  </Switch>
)

export default Routes
