import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Context } from './Context';

function Header() {
  const {user, setUser, loggedIn, setLoggedIn} = useContext(Context)

  if (!loggedIn) return <Redirect to='/'/>

  function signOut(){
    setUser({})
    setLoggedIn(false)
  }

  return (
    <nav className='navbar navbar-light bg-light justify-content-end'>
        <button className='btn btn-secondary my-2 my-sm-0' onClick={signOut}>Sign Out</button>
    </nav>
  );
}

export default Header;