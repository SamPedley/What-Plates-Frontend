const DEFAULT_STATE = { menuOpen: false }

const ui = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU_OPEN':
      return Object.assign({}, state, {menuOpen: !state.menuOpen})
    default:
      return state
  }
}

export default ui
