import { bars as DEFAULT_STATE } from 'utils/defaultState'
import { updateObjectInArray } from 'utils/reducerHelpers'

const sets = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_BAR':
      return state
    case 'REMOVE_BAR':
      return state.filter((set, index) => index !== action.index)
    case 'UPDATE_BAR':
      return updateObjectInArray(state, action)
    default:
      return state
  }
}

export default sets
