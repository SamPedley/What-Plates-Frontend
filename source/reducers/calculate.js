const DEFAULT_SET = { weight: 120, percentage: 100 }
const DEFAULT_SETS = { bar: 'MENS', usePercent: false, roundUp: false, sets: DEFAULT_SET }

const calculate = (state = DEFAULT_SETS, action) => {
  switch (action.type) {
    case 'UPDATE_WEIGHT_TOTAL':
      return Object.assign({}, state, {menuOpen: !state.menuOpen})
    default:
      return state
  }
}

export default calculate
