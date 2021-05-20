import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import logo from '../../logo.png'

function Landing() {
  return (
    <>
    <div className='jumbotron text-center'>
      <img src={logo} width="30%" height="30%" alt='wuphfLogo'/>
      {/* <h1 className='display-5'>Welcome to Wuphf</h1> */}
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
