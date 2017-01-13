import { combineReducers } from 'redux'

import ui from './ui'
import userSettings from './userSettings'
import sets from './sets'
import plates from './plates'
import bars from './bars'

export default combineReducers({
  ui,
  userSettings,
  sets,
  plates,
  bars
})
