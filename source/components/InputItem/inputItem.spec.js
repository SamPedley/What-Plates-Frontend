import React from 'react'
import { shallow, mount } from 'enzyme'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { InputItem } from './index.jsx'

// Annoyingly needed for testing with Material UI crap
const muiTheme = getMuiTheme()
const Context = { context: {muiTheme}, childContextTypes: {muiTheme: React.PropTypes.object} }
injectTapEventPlugin()

it('renders an input field', () => {
  let item = shallow(<InputItem />)
  expect(item.find('TextField').exists()).toBe(true)
})

it('renders the weight type', () => {
  let props = { total: 45, usingLbs: true }
  let item = shallow(<InputItem {...props} />)
  expect(item.find('.weightType').text()).toBe('LBS')
  item.setProps({ usingLbs: false })
  expect(item.find('.weightType').text()).toBe('KG')
})

it('only allows nums between 0 and 10000', () => {
  const onChange = jest.fn()
  let props = { total: 45, onChange }

  let item = mount(<InputItem {...props} />, Context)
  let input = item.find('input')
  expect(item.state('error')).toBe(false)

  input.simulate('change', {target: {value: -1}})
  expect(item.state('error')).toBe('DO YOU EVEN LIFT BRO?!')

  input.simulate('change', {target: {value: 10001}})
  expect(item.state('error')).toBe('Stop. Just. Stop.')

  input.simulate('change', {target: {value: 10}})
  expect(item.state('error')).toBe(false)
  expect(onChange.mock.calls.length).toBe(1)
})
