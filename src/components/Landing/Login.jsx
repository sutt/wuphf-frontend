import axios from 'axios';
import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '../Context';

function Login() {
  const {baseURL, user, setUser, setLoggedIn, loggedIn} = useContext(Context)

  if (loggedIn) return <Redirect to='/homepage' />
  
  async function fetchUserInfo(username, password) {
    const url = `${baseURL}/users/${username}`
    const axiosResponse = await axios.get(url)
    console.log('axiosResposne:', axiosResponse)
    if (axiosResponse.data === null ) {
      alert('Please enter valid username and password')
      console.log('axios returned data null')
    } else if (axiosResponse.data.username === username && axiosResponse.data.password === password){
      setUser(axiosResponse.data)
      setLoggedIn(true)
      console.log('user state:', user)
    } 
  }
  
  function handleLogin(e) {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    fetchUserInfo(username, password)
  }

  return (
    <div className='col-6'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type='text' placeholder='Username' name='username'/>
        <input type='text' placeholder='Password' name='password'/>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default Login;