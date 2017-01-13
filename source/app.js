import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'utils/global.css'

import reducer from 'reducers'
import Router from 'routes.js'
import Header from 'components/Header/Container'
import Footer from 'components/Footer'

injectTapEventPlugin()

let store = createStore(reducer)

render(
  <Provider store={store} >
    <MuiThemeProvider>
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('App')
)