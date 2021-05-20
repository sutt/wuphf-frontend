import axios from 'axios'
import React, { useContext } from 'react';
import { Context } from './Context'


const CreatePost = () => {
  const {baseURL, setPosts, user} = useContext(Context) 
  
  async function addPost (newPost) {
    const url = `${baseURL}/posts`
    const updatedPosts = await axios.post(url, newPost)
    setPosts(updatedPosts.data)
  }

  function postWuphf (e) {
    e.preventDefault()
    const newPost = {
      author: user.username,
      content: e.target.post.value
    }
    console.log(newPost)
    addPost(newPost)
    e.target.reset()
  }

  return (
  <div className='card mt-2 border-info'>
    <div className='card-body'>
      <form onSubmit={postWuphf}>
        <textarea type='text' name='post' placeholder={`What's on your mind ${user.firstName}?`}/>
        <nav className='navbar border-top border-warning'>
          <button type='button'>photo/video</button>
          <button type='submit'>wuphf!</button>
        </nav>
      </form>
    </div>
  </div>
  )
}

export default CreatePost;
