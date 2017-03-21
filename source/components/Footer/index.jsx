import React from 'react'
import Mini from 'components/Notification/Mini'
import s from './footer-styles.css'

const Footer = () => (
  <footer className={s.footer}>
    <h3>What Plates</h3>
    <p className={s.subtext}>Because Math is for Losers</p>
    <section className={s.bottomRow}>
      <p className={s.copyright}>&copy; 2016 - {new Date().getFullYear()}</p>
      <div className={s.linkContainer}>
        <a href='/privacy-policy'>Privacy Policy</a>
        <a href='https://github.com/SamPedley/What-Plates-Frontend/issues'>Report a Bug</a>
        <a href='mailto:sam@sampedley'>Contact Us</a>
      </div>
    </section>

    <Mini />
  </footer>
)

export default Footer
