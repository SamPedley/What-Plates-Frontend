export const toggleMenu = () => ({ type: 'TOGGLE_MENU_OPEN' })

export const updateSet = (index, set) => ({
  type: 'UPDATE_SET',
  index,
  updateTo: { ...set }
})

export const addSet = () => ({ type: 'ADD_SET' })
export const removeSet = (index) => ({ type: 'REMOVE_SET', index })
export const setActiveBar = (index) => ({ type: 'SET_ACTIVE_BAR', index })
