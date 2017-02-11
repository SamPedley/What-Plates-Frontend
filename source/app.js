import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'utils/global.css'

import reducer from 'reducers'
import Router from 'routes.js'

injectTapEventPlugin()
const store = createStore(reducer)

render(
  <Provider store={store} >
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('App')
)
