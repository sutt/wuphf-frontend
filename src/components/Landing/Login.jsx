import axios from 'axios';
import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '../Context';

function Login() {
  const {baseURL, user, setUser, setLoggedIn, loggedIn} = useContext(Context)

  if (loggedIn) return <Redirect to='/homepage' />
  
  async function fetchUserInfo(username, password) {
    const url = `${baseURL}/users/${username}`
    // const url = `${baseURL}/users/`
    // const requestBody = {username: username, password: password}
    // const axiosResponse = await axios.get(url, requestBody)
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
    <div className='col-md-6'>
      <h3 className='text-center'>Login</h3>
      <form onSubmit={handleLogin} name='login'>
        <div className='form-group'>
          <label>Username</label>
          <input type='text' className='form-control' name='username' placeholder='Enter your username' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' name='password' placeholder='Enter your password' />
        </div>
        <div className="text-left form-group">
          <button type="submit" className="btn btn-primary btn-lg">Login</button>
        </div>
        <div class="form-group">
          <a href="#" className="ForgetPwd">Forget Password?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;