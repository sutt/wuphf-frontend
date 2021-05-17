import axios from 'axios';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Login() {
  const {baseURL, user, setUser, setLoggedIn, loggedIn} = useContext(Context)
  
  async function fetchUserInfo(username) {
    const url = `${baseURL}/users/${username}`
    const axiosResponse = await axios.get(url)
    console.log(axiosResponse)
    setUser(axiosResponse.data)
  }
  
  async function login(e) {
    e.preventDefault()
    const username = e.target.username.value
    fetchUserInfo(username)
    console.log("user hook", user)
    setLoggedIn(true)
    // console.log("logged in", loggedIn)
    // redirect to homepage
  }

  return (
    <div>
      <form onSubmit={login}>
        <input 
          type='text' 
          placeholder='Username' 
          name='username'
        />

        <input type='text' placeholder='Password' name='password'/>
        <button type='submit'>Log in</button>
      </form>
      { loggedIn &&
        <Link to="/homepage">Homepage</Link>
      }
    </div>
  );
}

export default Login;