import React from "react"
import { NavLink } from "react-router-dom"

import styles from './top-nav.module.css'

const TopNav = () => {
  return (
    <ul className={styles['nav']}>
      <li>
        <NavLink className={styles['nav-link']} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={styles['nav-link']} to="/tutorials">Tutorials</NavLink>
      </li>
      
    </ul>
  )
}

export default TopNav
