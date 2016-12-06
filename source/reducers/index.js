import { combineReducers } from 'redux'

import ui from './ui'
import calculate from './calculate'

export default combineReducers({
  ui,
  calculate
})
