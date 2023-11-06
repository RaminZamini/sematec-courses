import React from "react"
import styles from "./framework.module.css"

const Col = ({ xs, sm, md, lg, xl, xxl, children }) => {
  let cols = [
    xs ? styles[`col-${xs}`] : "",
    sm ? styles[`col-sm-${sm}`] : "",
    md ? styles[`col-md-${md}`] : "",
    lg ? styles[`col-lg-${lg}`] : "",
    xl ? styles[`col-xl-${xl}`] : "",
    xxl ? styles[`col-xxl-${xxl}`] : "",
  ]

  return <div className={cols.join(" ")}>{children}</div>
}

export default Col
