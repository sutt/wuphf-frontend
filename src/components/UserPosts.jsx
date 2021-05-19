import axios from 'axios'
import React, { useState, useContext } from "react";
import { Context } from './Context';
import EditPost from './EditPost'

function UserPosts() {
  const {baseURL, posts, setPosts, user } = useContext(Context)

  async function deletePost (postId) {
    const url = `${baseURL}/posts/${postId}`
    const updatedPosts = await axios.delete(url)
    setPosts(updatedPosts.data)
  }
  function deleteWuphf (e) {
    e.preventDefault()
    const postId = e.target.name
    deletePost(postId)
  }

  // Setting up react-Modal hooks and functions:
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postToBeEdited, setPostToBeEdited] = useState({});

  function openEditModal(id, content) {
    setModalIsOpen(true)
    setPostToBeEdited({id: id, content: content})
  }

  // Need to sort posts to decending order
  const sortedPosts = [...posts].filter(post => post.author === user.username)

  // creating <div> tags for each post to be rendered.
  const profileFeed = sortedPosts.map(post => {
    return (
      <div key={post._id}>
        <h4>{post.author}</h4>
        <p>{post.content}</p>
        <button onClick={() => openEditModal(post._id, post.content)}>Edit</button>
        <button onClick={deleteWuphf} name={post._id}>Delete</button>
      </div>
    )
  })

  return(
    <div>
      {profileFeed}
      { modalIsOpen && 
        <EditPost post={postToBeEdited} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      }
    </div>
  )
}

export default UserPosts;
