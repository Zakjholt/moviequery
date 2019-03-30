import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import logo from 'src/global/images/logo.png'
import styles from './styles.scss'

const Nav = () => (
  <nav className="navbar is-fixed-top">
    <div className="navbar-brand">
      <Link to="/" className={classnames('navbar-item', styles.brandLink)}>
        <img src={logo} />
      </Link>
    </div>
  </nav>
)
export default Nav
