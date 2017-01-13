import { plates as DEFAULT_STATE } from 'utils/defaultState'
import { updateObjectInArray } from 'utils/reducerHelpers'

const makePlate = (weight = 0, isLbs = true, active = false) => ({weight, isLbs, active})

const plates = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_PLATE':
      return [...state, makePlate(action.plate)]
    case 'REMOVE_PLATE':
      return state.filter((set, index) => index !== action.index)
    case 'UPDATE_PLATE':
      return updateObjectInArray(state, action)
    default:
      return state
  }
}

export default plates
