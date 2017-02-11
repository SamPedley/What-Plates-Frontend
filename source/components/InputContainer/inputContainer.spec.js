import React from 'react'
import { shallow } from 'enzyme'

import { InputContainer } from './index.jsx'

it('renders the correct amount of inputs', () => {
  let props = { sets: [{total: 95}, {total: 55}] }
  let item = shallow(<InputContainer {...props} />)
  expect(item.find('InputItem').exists()).toBe(true)
  expect(item.find('InputItem').length).toEqual(2)
})
