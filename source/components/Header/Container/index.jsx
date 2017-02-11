import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'components/Header/Nav'
import Menu from 'components/Header/Menu'
import s from './container.css'

const Container = () => (
  <header className={s.header}>
    <Link to='/' className={s.wp}>What Plates</Link>
    <div className={s.menuIcon}>
      <Nav />
      <Menu />
    </div>
  </header>
)

export default Container
