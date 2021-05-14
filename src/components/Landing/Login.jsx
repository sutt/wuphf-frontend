import React from 'react';

function Login(props) {
  return (
    <div>
      <form>
        <input type='text' placeholder='Username' name='username'/>
        <input type='text' placeholder='Password' name='password'/>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default Login;