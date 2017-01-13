import { ui as DEFAULT_STATE } from 'utils/defaultState'

const ui = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU_OPEN':
      return {...state, menuOpen: !state.menuOpen}
    default:
      return state
  }
}

export default ui
