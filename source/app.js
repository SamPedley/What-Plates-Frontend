import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import thunk from 'redux-thunk'

import 'utils/global.css'

import reducer from 'reducers'
import Routes from 'routes'
import Header from 'components/Header'
import Footer from 'components/Footer'
import createLogger from 'redux-logger'

injectTapEventPlugin()
const logger = createLogger()
const store = createStore(reducer, applyMiddleware(thunk, logger))

render(
  <Provider store={store} >
    <MuiThemeProvider>
      <BrowserRouter>
        <div id='ApplicationWrapper'>
          <Header />
          <main id='ApplicationContent'>
            <Routes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('App')
)
