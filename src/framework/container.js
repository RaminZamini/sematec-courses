import React from "react"
import styles from "./framework.module.css"

const Container = ({ fluid = false, children }) => (
  <div className={styles[`${fluid ? "container-fluid" : "container"}`]}>{children}</div>
)

export default Container
