import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Landing() {
  return (
    <>
    <div className='jumbotron text-center'>
      <h1 className='display-5'>Welcome to wuphf</h1>
    </div>
    <div className='container'>
      <div className='row align-items-center'>
        <SignUp />
        <Login />
      </div>
    </div>
    </>
  )
}

export default Landing;
