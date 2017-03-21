import { ui as DEFAULT_STATE } from 'utils/defaultState'

const ui = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU_OPEN':
      return {...state, menuOpen: !state.menuOpen}
    case 'SHOW_MINI_MESSAGE':
      return {...state, miniMessage: action.miniMessage}
    case 'HIDE_MINI_MESSAGE':
      return {...state, miniMessage: ''}
    default:
      return state
  }
}

export default ui
