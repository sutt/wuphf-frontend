import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Context } from './Context';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  const {setUser, loggedIn, setLoggedIn} = useContext(Context)

  if (!loggedIn) return <Redirect to='/' />

  function signOut(){
    setUser({})
    setLoggedIn(false)
  }

  return (
    <Navbar bg='primary' className='justify-content-end'>
      <button onClick={signOut}>Sign Out</button>
    </Navbar>
  );
}

export default Header;