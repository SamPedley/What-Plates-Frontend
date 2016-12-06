import React from 'react'

import Nav from 'components/Header/Nav'
import Menu from 'components/Header/Menu'
import s from './container.css'

const Container = () => (
  <header className={s.header}>
    <Nav />
    <Menu />
  </header>
)

export default Container
