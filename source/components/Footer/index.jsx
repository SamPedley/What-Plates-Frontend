import React from 'react'

import s from './footer.css'

const Footer = () => (
  <footer className={s.footer}>
    <h3>What Plates</h3>
    <p className={s.subtext}>Because Math is for Losers</p>
    <p>&copy; 2016 - {new Date().getFullYear()}</p>
    <a href='https://github.com/SamPedley/What-Plates-Frontend/issues'>Report a Bug</a>
    <a href='mailto:whatplates@sampedley'>Contact Us</a>
  </footer>
)

export default Footer
