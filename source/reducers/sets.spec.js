import reducer from './sets'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([{ total: 0 }])
})

it('should add a task', () => {
  let testState = [{total: 10}]
  let action = { type: 'ADD_SET' }
  expect(reducer(testState, action))
    .toEqual([{ total: 10 }, { total: 0 }])
})

it('should delete a task', () => {
  let testState = [{ total: 10 }, { total: 0 }]
  let action = { type: 'REMOVE_SET', index: 1 }
  expect(reducer(testState, action))
    .toEqual([{ total: 10 }])
})

it('should update a task', () => {
  let testState = [{ total: 10 }]
  let action = { type: 'UPDATE_SET', index: 0, updateTo: { total: 25 } }
  expect(reducer(testState, action))
    .toEqual([{ total: 25 }])
})
