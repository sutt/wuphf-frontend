import React from 'react';

function CreatePost(props) {
  return (
    <div>
      <form onSubmit={addPosts}>
      <input type='text' placeholder='username' name='username' />
      <textarea type='text' name='post'/>
      <button type='submit'>Submit Post</button> 
     


      </form>
    </div>
  );
}

export default CreatePost;