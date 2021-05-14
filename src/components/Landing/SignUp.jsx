import React from 'react';

function SignUp(props) {
  return (
    <div>
      <form>
        <input type='text' placeholder='Full Name' name='name'/>
        <input type='text' placeholder='username' name='username'/>
        <input type='text' placeholder='Password' name='password'/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;