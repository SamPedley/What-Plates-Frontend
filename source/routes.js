import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from 'components/Header/Container'
import Footer from 'components/Footer'

import Home from 'pages/Home'
import About from 'pages/About'
import FourZeroFour from 'pages/FourZeroFour'


const Router = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route component={FourZeroFour} />
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
)

export default Router
