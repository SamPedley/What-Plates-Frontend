import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'

import { updateWeight } from 'actions'

const Weight = ({weight, updateWeight}) => (
  <TextField
    type='number'
    onChange={updateWeight}
    value={weight}
    />
)

const mapStateToProps = (state) => ({ weight: state.calculate.sets[0].weight })

export default connect(mapStateToProps, {updateWeight})(Weight)
