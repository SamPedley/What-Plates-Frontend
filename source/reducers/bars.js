import { bars as DEFAULT_STATE } from 'utils/defaultState'
import { updateObjectInArray } from 'utils/reducerHelpers'

const sets = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_BAR':
      return [...state, action.bar]
    case 'REMOVE_BAR':
      return state.filter((set, index) => index !== action.index)
    case 'UPDATE_BAR':
      return updateObjectInArray(state, action)
    case 'SET_ACTIVE_BAR':
      return state.map((item, index) => index === action.index
        ? { ...item, active: true }
        : { ...item, active: false }
      )
    default:
      return state
  }
}

export default sets
