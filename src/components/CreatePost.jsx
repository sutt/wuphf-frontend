import axios from 'axios'
import React, { useContext } from 'react';
import { Context } from './Context'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
const wuphf = <FontAwesomeIcon icon={faDog} />;

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
  <div className='card mt-2 border-primary'>
    <div className='card-body'>
      <form onSubmit={postWuphf}>

        <textarea type='text' name='post' placeholder={`What's on your mind ${user.firstName}?`}/>
        <nav className='navbar border-top border-warning'>

          <button type='button'>photo/video</button>

          <button type='submit' className="btn btn-outline-primary btn-sm"> <i class="fab fa-wolf-pack-battalion btn">{wuphf} Wuphf!</i></button>
        </nav>
      </form>
    </div>
  </div>
  )
}

export default CreatePost;
