import reducer from './bars'
import { bars as defaultState } from 'utils/defaultState'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(defaultState)
})

// it('should add a bar', () => {
//   let testState = [{ name: 'Mens', inLbs: 45, inKg: 20 }]
//   let action = { type: 'ADD_BAR', bar: { } }
//   expect(reducer(testState, action))
//     .toEqual([{ name: 'Mens', inLbs: 45, inKg: 20 }, { name: 'Martians', inLbs: 20, inKg: null }])
// })

it('should delete a bar', () => {
  let testState = [{ name: 'Mens', inLbs: 45, inKg: 20 }, { name: 'Womens', inLbs: 35, inKg: 15 }]
  let action = { type: 'REMOVE_BAR', index: 0 }
  expect(reducer(testState, action))
    .toEqual([{ name: 'Womens', inLbs: 35, inKg: 15 }])
})

it('should update a bar', () => {
  let testState = [{ name: 'Mens', inLbs: 45, inKg: 20 }, { name: 'Womens', inLbs: 35, inKg: 15 }]
  let action = { type: 'UPDATE_BAR', index: 1, updateTo: { name: 'Awesome' } }
  expect(reducer(testState, action))
    .toEqual([{ name: 'Mens', inLbs: 45, inKg: 20 }, { name: 'Awesome', inLbs: 35, inKg: 15 }])
})
