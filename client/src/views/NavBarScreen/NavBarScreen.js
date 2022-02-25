import React from 'react'
import { Col, Container, Input, Row } from 'reactstrap'

function NavBarScreen() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h1>NavBarScreen</h1>
        </Col>
        <Col md={4}>
          <Input placeholder="search" />
        </Col>
        <Col md={4} style={{textAlign: 'right'}}>
          <i className="fa-solid fa-user"></i>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBarScreen