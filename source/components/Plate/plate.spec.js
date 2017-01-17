import React from 'react'
import { shallow } from 'enzyme'

import { Plate } from './index.jsx'

it('renders a KG Plate', () => {
  const props = {
    weight: 45,
    isLbs: false
  }
  const plate = shallow(<Plate {...props} />)

  expect(plate.find('.weight').text()).toBe('45')
  expect(plate.find('.unit').text()).toBe('KG')
})

it('renders a Pound Plate', () => {
  const props = {
    weight: 25,
    isLbs: true
  }
  const plate = shallow(<Plate {...props} />)

  expect(plate.find('.weight').text()).toBe('25')
  expect(plate.find('.unit').text()).toBe('LBS')
})
