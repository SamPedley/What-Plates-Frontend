import qwest from 'qwest'
export const toggleMenu = () => ({ type: 'TOGGLE_MENU_OPEN' })

export const updateSet = (index, set) => ({
  type: 'UPDATE_SET',
  index,
  updateTo: { ...set }
})

export const updateTotal = (index, set, state) => {
  return null
}

export const addSet = () => ({ type: 'ADD_SET' })
export const removeSet = (index) => ({ type: 'REMOVE_SET', index })
export const setActiveBar = (index) => ({ type: 'SET_ACTIVE_BAR', index })

export const signIn = user => dispatch => {
  qwest.post(`${API_BASE_URL}/auth/signin`, user)
    .then((xhr, res) => localStorage.setItem('jwt', res.token))
    .then(() => dispatch({ type: 'LOG_IN', user }))
    .then(() => dispatch({type: 'SHOW_MINI_MESSAGE', miniMessage: `Welcome ${user.email}`}))
    .then(() => console.log('fired the user sing in thing '))
}

export const createUser = user => dispatch => {
  qwest.post(`${API_BASE_URL}/user/create`, user)
    .then((xhr, res) => { console.log(res); return res })
    // .then( (res) => localStorage.setItem('jwt', res.token) )
    // .then( () => dispatch({ type: 'LOG_IN', user }) )
    .then(() => dispatch({type: 'SHOW_MINI_MESSAGE', miniMessage: `Welcome ${user.email}`}))
    .then(() => console.log('finished siging in the user'))
}

export const logOutUser = () => dispatch => {
  localStorage.removeItem('jwt')
  dispatch({ type: 'LOG_OUT' })
  dispatch({ type: 'SHOW_MINI_MESSAGE', miniMessage: `Bye for now!` })
}

export const showMiniMessage = miniMessage => ({type: 'SHOW_MINI_MESSAGE', miniMessage})

export const hideMiniMessage = () => ({type: 'HIDE_MINI_MESSAGE'})
