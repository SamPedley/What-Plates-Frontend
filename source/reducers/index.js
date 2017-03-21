import { combineReducers } from 'redux'

import ui from './ui'
import userSettings from './userSettings'
import sets from './sets'
import plates from './plates'
import bars from './bars'
import user from './user'

export default combineReducers({
  user,
  ui,
  userSettings,
  sets,
  plates,
  bars
})

const getActivePlates = state => state.plates.filter(
  (plate) => plate.active && plate.isLbs === state.userSettings.usingLbs
)

export const getCalcDeps = state => ({
  userSettings: state.userSettings,
  plates: getActivePlates(state),
  sets: state.sets
})

export const getPossibleBars = state => ({
  bars: state.bars.filter((item) => item.isLbs === state.userSettings.usingLbs)
})
