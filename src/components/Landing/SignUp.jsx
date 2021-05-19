import axios from 'axios';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Context } from '../Context';

function SignUp() {
  const {baseURL, setUser, loggedIn, setLoggedIn} = useContext(Context)

  if (loggedIn) return <Redirect to='/homepage' />

  async function addUser (newUser) {
    const url = `${baseURL}/users`
    await axios.post(url, newUser)
    setUser(newUser)
    setLoggedIn(true)
  }

  function signUp(e) {
    e.preventDefault()
    const newUser = {
      name: e.target.name.value,
      username: e.target.username.value.toLowerCase(),
      password: e.target.password.value
    }
    addUser(newUser)
  }

  return (
    <div>
      <form onSubmit={signUp}>
        <input type='text' placeholder='Full Name' name='name'/>
        <input type='text' placeholder='username' name='username'/>
        <input type='text' placeholder='Password' name='password'/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;