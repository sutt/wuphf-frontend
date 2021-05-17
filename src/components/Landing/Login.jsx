import axios from 'axios';
import React, {useContext} from 'react';
import { Context } from '../Context';

function Login() {
  const {baseURL, user, setUser} = useContext(Context)
  
  async function getUser(username) {
    const url = `${baseURL}/users/${username}`
   await axios.get(url)
    .then(res => {
      console.log(res.data)
      setUser(res.data)
    })
    .catch(error => console.error(error))
  }

  function login(e) {
    e.preventDefault()
    const username = e.target.username.value
    getUser(username)
    // redirect to homepage
    .then( console.log(user))
   
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
    </div>
  );
}

export default Login;