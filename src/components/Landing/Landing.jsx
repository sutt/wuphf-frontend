import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Landing() {
  return (
    <>
    <h1>Welcome to wuphf</h1>
    <Container>
      <Row>
        <Col>
          <SignUp />
        </Col>
        <Col>
          <Login />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Landing;
