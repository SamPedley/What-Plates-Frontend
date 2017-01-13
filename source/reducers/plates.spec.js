import reducer from './plates'
import { plates as defaultPlates } from 'utils/defaultState'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(defaultPlates)
})

it('should add a plate', () => {
  let testState = [{ weight: 55, isLbs: true, active: true }]
  let action = { type: 'ADD_PLATE' }
  expect(reducer(testState, action))
    .toEqual([{ weight: 55, isLbs: true, active: true }, {'active': false, 'isLbs': true, 'weight': 0}])
})

it('should delete a plate', () => {
  let testState = [{ weight: 55, isLbs: true, active: true }, {'active': false, 'isLbs': true, 'weight': 0}]
  let action = { type: 'REMOVE_PLATE', index: 1 }
  expect(reducer(testState, action))
    .toEqual([{ weight: 55, isLbs: true, active: true }])
})

it('should update a plate', () => {
  let testState = [{ weight: 55, isLbs: true, active: false }]
  let action = { type: 'UPDATE_PLATE', index: 0, updateTo: {isLbs: false, active: true} }
  expect(reducer(testState, action))
    .toEqual([{ weight: 55, isLbs: false, active: true }])
})
