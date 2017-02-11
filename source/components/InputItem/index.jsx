import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ContentClear from 'material-ui/svg-icons/content/clear'
import Slider from 'material-ui/Slider'
import CloseIcon from 'material-ui/svg-icons/navigation/close'

import s from './styles.css'

export class InputItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: false }
  }

  isValidInput (event, input) {
    var num = parseInt(input)
    if (num < 0) {
      this.setState({error: 'DO YOU EVEN LIFT BRO?!'})
    } else if (num > 10000) {
      this.setState({error: 'Stop. Just. Stop.'})
    } else {
      this.setState({error: false})
      this.props.onChange({total: input})
    }
  }

  render () {
    const {set, remove, onChange, usingLbs = true} = this.props
    return (
      <section className={s.container}>
        <button className={s.close}>
          <CloseIcon style={{height: '15px', width: '15px'}} viewBox='0 0 24 24' />
        </button>
        <div className={s.inputWrapper}>
          <TextField
            id='name'
            type='number'
            onChange={this.isValidInput.bind(this)}
            value={set.total}
            className={s.input}
            errorText={this.state.error}
          />
          <h4 className={s.weightType}>{usingLbs ? 'LBS' : 'KG'}</h4>
        </div>
        <div>Set # 1</div>
      </section>
    )
  }
}

export default InputItem
