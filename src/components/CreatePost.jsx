import axios from 'axios'
import React, { useContext } from 'react';
import { Context } from './Context'


const CreatePost = () => {
  const {baseURL, setPosts, user} = useContext(Context) 
  const addPost = async (newPost) => {
    const url = `${baseURL}/posts`
    axios.post(url, newPost)
  }

  const postWuphf = (e) => {
    e.preventDefault()
    const newPost = {
      author: user.username,
      content: e.target.post.value
    }
    console.log(newPost)
    addPost(newPost)
    setPosts(newPost)
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
