import React, { useState } from "react"
import BasePage from "../../layout/base-page"
import { Col, Container, Row } from "../../framework"

const Teachers = () => {
    const [teacherList, setTeacherList] = useState([
        {firstName:'', lastName:'', nationalCode: '', phone: ''}
    ])
  return (
    <BasePage title={"Teachers"} description="show teachers">
      <Container fluid>
        <Row>
          <Col sm={6} md={3}>sds</Col>
          <Col sm={6} md={3}>sds</Col>
          <Col sm={6} md={3}>sds</Col>
          <Col sm={6} md={3}>sds</Col>
        </Row>
      </Container>
    </BasePage>
  )
}

export default Teachers
