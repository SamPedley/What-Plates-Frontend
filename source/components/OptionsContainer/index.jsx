import React from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'

import { setActiveBar } from 'actions'
import s from './styles.css'

export const OptionsContainer = ({ bars, usingLbs, setActiveBar }) => (
  <section className={s.container}>
    <h2 className={s.header}>Options</h2>
    <SelectField
      floatingLabelText='Frequency'
      value={bars.reduce((acc, item, index) => item.active ? index : acc, 0)}
      onChange={(event, val) => setActiveBar(val)} >
      {

        bars.reduce(
          (acc, item, index) => item.isLbs === usingLbs
            ? [...acc, {...item, key: index}]
            : acc, [])
          .map((item, index) => <MenuItem
            value={item.key}
            key={`select-menu-item-${index}`}
            primaryText={`${item.name} Bar (${item.weight}${item.isLbs ? 'lbs' : 'kg'})`} />)
      }
    </SelectField>
    <Checkbox
      label='Simple'
    />
  </section>
)

const mapStateToProps = (state) => ({ bars: state.bars, usingLbs: state.userSettings.usingLbs })

export default connect(mapStateToProps, {setActiveBar})(OptionsContainer)
