import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Categories = () => {
  return (
    <div>
      <Container>
        <h1 style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)" }} className=' text-center fs-1 mb-0'>Find Your Perfect Match</h1>
        <p className=' fs-5 text-center' style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)",opacity:"0.6" }}>Shop by Categories</p>
        <Row>
          <Col></Col>
          <Col></Col>

        </Row>
      </Container>
    </div>
  )
}

export default Categories
