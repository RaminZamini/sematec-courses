import React from "react"
import { NavLink, Outlet } from "react-router-dom"

import styles from "./turorials.module.css"
import BasePage from "../../layout/base-page"
import { Row } from "../../framework"

const Tutorials = () => {
  return (
    <BasePage title={"Tutorials"}>
      <Row>
        <aside className={styles["aside"]}>
          <ul>
            <li>
              <NavLink to={"/tutorials"} end>
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink to={"react-modules"}>React Modules</NavLink>
            </li>
            <li>
              <NavLink to={"react-components"}>React Components</NavLink>
            </li>
            <li>
              <NavLink to={"using-css"}>Using CSS</NavLink>
            </li>
            <li>
              <NavLink to={"using-state"}>Using State</NavLink>
            </li>
            <li>
              <NavLink to={"fc-lifecycle"}>FC Lifecycle</NavLink>
            </li>
          </ul>
        </aside>
        <div className={styles["main-content"]}>
          <Outlet />
        </div>
      </Row>
    </BasePage>
  )
}

export default Tutorials
