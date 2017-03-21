import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { connect } from 'react-redux'
import { createUser } from 'actions'

import s from './styles.css'

class Register extends React.Component {
  constructor ({ createUser }) {
    super()
    this.createUser = createUser
    this.state = { username: '', email: '', password: '', passwordConfirm: '' }
  }

  render () {
    return (
      <section className={s.container}>
        <TextField
          floatingLabelText='username'
          value={this.state.username}
          onChange={(event, value) => this.setState({username: value})}
        />
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
        <TextField
          floatingLabelText='Confirm Password'
          type='password'
          value={this.state.passwordConfirm}
          onChange={(event, value) => this.setState({passwordConfirm: value})}
        />
        <div>
          <RaisedButton label='Login' onClick={() => this.createUser(this.state)} primary />
          <RaisedButton label='Go Home' secondary />
        </div>
      </section>
    )
  }
}

export default connect(null, {createUser})(Register)
