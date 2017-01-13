export const toggleMenu = () => ({ type: 'TOGGLE_MENU_OPEN' })

export const updateSetTotal = (total) => {
  console.log(total)
  return { type: 'UPDATE_SET_TOTAL', total }
}
