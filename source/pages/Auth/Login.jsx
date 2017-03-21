import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { connect } from 'react-redux'
import { signIn } from 'actions'

import s from './styles.css'

class Login extends React.Component {
  constructor ({ signIn }) {
    super()
    this.signIn = signIn
    this.state = { email: '', password: '' }
  }

  render () {
    return (
      <section className={s.container}>
        <TextField
          floatingLabelText='Email'
          value={this.state.email}
          onChange={(event, value) => this.setState({email: value})}
        />
        <TextField
          floatingLabelText='Password'
          type='password'
          value={this.state.password}
          onChange={(event, value) => this.setState({password: value})}
        />
        <div>
          <RaisedButton label='Login' onClick={() => this.signIn(this.state)} primary />
          <RaisedButton label='Go Home' secondary />
        </div>
      </section>
    )
  }
}

export default connect(null, {signIn})(Login)
