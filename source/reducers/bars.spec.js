import reducer from './bars'
import { bars as defaultState } from 'utils/defaultState'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(defaultState)
})

it('should add a bar', () => {
  let testState = [{ name: 'Mens', isLbs: true, weight: 45, active: true }]
  let action = { type: 'ADD_BAR', bar: { name: 'Martians', isLbs: false, weight: 25, active: false } }
  expect(reducer(testState, action))
    .toEqual([{ name: 'Mens', isLbs: true, weight: 45, active: true }, { name: 'Martians', isLbs: false, weight: 25, active: false }])
})

it('should delete a bar', () => {
  let testState = [{ name: 'Mens', isLbs: true, weight: 45, active: true }, { name: 'Womens', isLbs: true, weight: 35, active: false }]
  let action = { type: 'REMOVE_BAR', index: 0 }
  expect(reducer(testState, action))
    .toEqual([{ name: 'Womens', isLbs: true, weight: 35, active: false }])
})

it('should update a bar', () => {
  let testState = [{ name: 'Mens', isLbs: true, weight: 45, active: true }, { name: 'Womens', isLbs: true, weight: 35, active: false }]
  let action = { type: 'UPDATE_BAR', index: 1, updateTo: { name: 'Awesome' } }
  expect(reducer(testState, action))
    .toEqual([{ name: 'Mens', isLbs: true, weight: 45, active: true }, { name: 'Awesome', isLbs: true, weight: 35, active: false }])
})

it('should set an active bar', () => {
  let testState = [{ name: 'Mens', isLbs: true, weight: 45, active: true }, { name: 'Womens', isLbs: true, weight: 35, active: false }]
  let action = { type: 'SET_ACTIVE_BAR', index: 1 }
  expect(reducer(testState, action))
    .toEqual([{ name: 'Mens', isLbs: true, weight: 45, active: false }, { name: 'Womens', isLbs: true, weight: 35, active: true }])
})
