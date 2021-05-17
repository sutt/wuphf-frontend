import axios from 'axios'
import React, { useContext } from 'react';
import { Context } from './Context'


const CreatePost = () => {
  const {baseURL, getPosts, user} = useContext(Context) 
  
  async function addPost (newPost) {
    const url = `${baseURL}/posts`
    await axios.post(url, newPost)
  }

  function postWuphf (e) {
    e.preventDefault()
    const newPost = {
      author: user.username,
      content: e.target.post.value
    }
    console.log(newPost)
    addPost(newPost)
    getPosts()
  }

  return (
  <div>
    <form onSubmit={postWuphf}>
    <textarea type='text' name='post' placeholder='Make a new post!'/>
    <button type='submit'>Submit Post</button> 
    </form>
  </div>
  )
}

export default CreatePost;
