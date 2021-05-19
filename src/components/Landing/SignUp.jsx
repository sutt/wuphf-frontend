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
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      username: e.target.username.value,
      password: e.target.password.value
    }
    addUser(newUser)
  }

  return (
    <div className='col-6'>
      <h1>Sign Up</h1>
      <form onSubmit={signUp}>
        <input type='text' placeholder='First Name' name='firstname'/>
        <input type='text' placeholder='Last Name' name='lastname'/>
        <input type='text' placeholder='Username' name='username'/>
        <input type='text' placeholder='Password' name='password'/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;