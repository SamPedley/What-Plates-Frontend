import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import Home from 'pages/Home'
import FourZeroFour from 'pages/FourZeroFour'

const Router = () => (
  <BrowserRouter>
    <main>
      <Match exactly pattern='/' component={Home} />
      <Match pattern='/search' component={FourZeroFour} />
      <Miss component={FourZeroFour} />
    </main>
  </BrowserRouter>
)

export default Router
