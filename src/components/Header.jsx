import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Context } from './Context';

function Header() {
  const {setUser, loggedIn, setLoggedIn} = useContext(Context)

  if (!loggedIn) return <Redirect to='/' />

  function signOut(){
    setUser({})
    setLoggedIn(false)
  }

  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Header;