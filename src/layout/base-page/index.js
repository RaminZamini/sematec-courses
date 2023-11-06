import React from "react"
import styles from "./base-page.module.css"
import { Container } from "../../framework"
import { Helmet } from "react-helmet-async"

const BasePage = ({ title, description = "default description", children }) => {
  return (
    <Container fluid>
      <Helmet>
        <title>{title} - React Case Study</title>
        <meta name="description" content={description} />
      </Helmet>
      <h2 className={styles["title"]}>
        <span>{title}</span>
      </h2>
      {children}
    </Container>
  )
}

export default BasePage
