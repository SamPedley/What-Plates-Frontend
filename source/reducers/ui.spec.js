import reducer from './ui'
import { ui as defaultState } from 'utils/defaultState'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(defaultState)
})

it('should toggle the menu', () => {
  let testState = { menuOpen: false }
  let action = { type: 'TOGGLE_MENU_OPEN' }
  expect(reducer(testState, action))
    .toEqual({ menuOpen: true })
})
