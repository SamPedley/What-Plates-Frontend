import { userSettings as DEFAULT_STATE } from 'utils/defaultState'

const sets = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_WEIGHT_TYPE':
      return {...state, usingLbs: !state.usingLbs}
    case 'TOGGLE_SHOW_CONVERSION':
      return {...state, showConversion: !state.showConversion}
    case 'TOGGLE_ROUND_UP':
      return {...state, roundUp: !state.roundUp}
    default:
      return state
  }
}

export default sets
