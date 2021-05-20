import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Context } from './Context';
import logo from '../favicon2.ico'

function Header() {
  const {user, setUser, loggedIn, setLoggedIn} = useContext(Context)

  if (!loggedIn) return <Redirect to='/'/>

  function signOut(){
    setUser({})
    setLoggedIn(false)
  }

  return (
    <nav className='navbar bg-primary align-items-right'>
      <a class="navbar-brand" href="/homepage">
        <img src={logo} alt="logo"/>
      </a>

      <h3 style={{color: '#FFFFFF'}} >Welcome {user.firstName}</h3>

      <div>
        <button className='btn btn-secondary my-2 my-sm-0' onClick={signOut}>Sign Out</button>
      </div>
    </nav>
  );
}

export default Header;