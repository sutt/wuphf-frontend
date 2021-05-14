import React, {useContext} from 'react';
import { Context } from '../Context';

function Login() {
  const {user, setUser} = useContext(Context)

  const baseURL = 'http://localhost:4000/users'
  
  let username = ""
  function recordUsername(e) {
    username = e.target.value
  }

  function getUser(e) {
    e.preventDefault()
    let url = `${baseURL}/${username}`
    fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setUser(res)
    })
    .catch(error => console.error(error))
  }

  return (
    <div>
      <form onSubmit={getUser}>
        <input 
          type='text' 
          placeholder='Username' 
          name='username'
          onChange={recordUsername}
        />

        <input type='text' placeholder='Password' name='password'/>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default Login;