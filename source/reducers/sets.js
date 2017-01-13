import { sets as DEFAULT_STATE } from 'utils/defaultState'
import { updateObjectInArray } from 'utils/reducerHelpers'

const sets = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_SET':
      return [...state, {total: 0}]
    case 'REMOVE_SET':
      return state.filter((set, index) => index !== action.index)
    case 'UPDATE_SET':
      return updateObjectInArray(state, action)
    default:
      return state
  }
}

export default sets
