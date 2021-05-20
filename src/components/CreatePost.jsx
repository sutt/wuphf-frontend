import axios from 'axios'
import React, { useContext } from 'react';
import { Context } from './Context'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import {faImages} from '@fortawesome/free-regular-svg-icons'
const wuphf = <FontAwesomeIcon icon={faDog} />;
const photo = <FontAwesomeIcon icon={faImages} />
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
    addPost(newPost)
    e.target.reset()
  }

  return (
  <div className='card mt-2 border-primary'>
    <div className='card-body'>
      <form onSubmit={postWuphf}>
        <textarea type='text' name='post' placeholder={`What's on your mind ${user.firstName}?`}/>
        <div className='border-top newPosts'>
          <button type='button' className='buttons'><i>{photo}  Photo/video</i></button>
          <button type='submit' className="buttons"> <i class="fab fa-wolf-pack-battalion">{wuphf} Wuphf!</i></button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CreatePost;
