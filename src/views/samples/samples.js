import React from "react"
import { NavLink, Outlet } from "react-router-dom"

import styles from "../tutorials/turorials.module.css"
import BasePage from "../../layout/base-page"
import { Row } from "../../framework"

const Samples = () => {
  return (
    <BasePage title={"Samples"}>
      <Row>
        <aside className={styles["aside"]}>
          <ul>
            <li>
              <NavLink to={"/samples"} end>
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink to={"w3schools"}>W3Schools</NavLink>
            </li>
            <li>
              <NavLink to={"calculator"}>Calculator</NavLink>
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

export default Samples
