const spots = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPOT':
      return [...state, action.spot]
    case 'ADD_SPOTS':
      return [...state, ...action.spots]
    default:
      return state
  }
}

export default spots
