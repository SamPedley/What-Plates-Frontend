// import { bars as DEFAULT_STATE } from 'utils/defaultState'
const thing = () => {
  if (localStorage.getItem('jwt')) {
    console.log('I have decided that they are authenticated!')
    return {
      isAuthenticated: true,
      email: null
    }
  } else {
    console.log('I have decided that they are not!')
    return {isAuthenticated: false,
      email: null}
  }
}
const DEFAULT_STATE = thing()

const user = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, isAuthenticated: true}
    case 'LOG_OUT':
      return {...state, isAuthenticated: false}
    default:
      return state
  }
}

export default user
