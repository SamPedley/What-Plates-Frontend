import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

import { updateWeight } from 'actions'
import s from './styles.css'

const InputContainer = ({updateWeight, weight}) => (
  <section className={s.container}>
    <Paper>
      <h3>What Plates</h3>
      <TextField
        id='name'
        type='number'
        onChange={updateWeight}
        value={weight}
        />
    </Paper>
  </section>
)
const mapStateToProps = (state) => ({ weight: state.calculate.sets[0].weight })

export default connect(mapStateToProps, {updateWeight})(InputContainer)
