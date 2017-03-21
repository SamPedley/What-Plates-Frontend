import reducer from './userSettings'
import { userSettings as defaultState } from 'utils/defaultState'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(defaultState)
})

// it('should toggle the type of weight', () => {
//   let testState = defaultState
//   let action = { type: 'TOGGLE_WEIGHT_TYPE' }
//   expect(reducer(testState, action))
//     .toEqual({ usingLbs: false, showConversion: false, roundUp: false })
// })

// it('should toggle show conversion', () => {
//   let testState = defaultState
//   let action = { type: 'TOGGLE_SHOW_CONVERSION' }
//   expect(reducer(testState, action))
//     .toEqual({ usingLbs: true, showConversion: true, roundUp: false })
// })

// it('should toggle round up', () => {
//   let action = { type: 'TOGGLE_ROUND_UP' }
//   expect(reducer(defaultState, action))
//     .toEqual({ usingLbs: true, showConversion: false, roundUp: true })
// })
