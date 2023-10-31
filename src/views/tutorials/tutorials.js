import React from "react"
import { NavLink, Outlet } from "react-router-dom"

import styles from "./turorials.module.css"

const Tutorials = () => {
  return (
    <div className="row">
      <aside className={styles["aside"]}>
        <ul>
          <li>
            <NavLink to={'/tutorials'} end>Welcome</NavLink>
          </li>
          <li>
            <NavLink to={'react-modules'}>React Modules</NavLink>
          </li>
          <li>
            <NavLink to={'react-components'}>React Components</NavLink>
          </li>
          <li>
            <NavLink to={'using-css'}>Using CSS</NavLink>
          </li>
        </ul>
      </aside>
      <div className={styles["main-content"]}>
        <Outlet />
      </div>
    </div>
  )
}

export default Tutorials
