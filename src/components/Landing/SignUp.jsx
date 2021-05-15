import axios from 'axios';
import React, { useContext } from 'react';
import { Context } from '../Context';

function SignUp() {
  const {user, setUser, getUser} = useContext(Context)
    
  function addUser (newUser) {
    const baseURL = 'http://localhost:4000/users'
    axios.post(baseURL, newUser)
  }

  function signUp(e) {
    e.preventDefault()
    const newUser = {
      name: e.target.name.value,
      username: e.target.username.value.toLowerCase(),
      password: e.target.password.value
    }
    console.log(newUser)
    addUser(newUser)
    setUser(newUser)
    // Login function
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