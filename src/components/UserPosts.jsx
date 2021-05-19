import axios from 'axios'
import React, { useState, useContext } from "react";
import Modal from 'react-modal'
import { Context } from './Context';

Modal.setAppElement('#root')

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
    console.log("Delete working");
    deletePost(postId)
  }

  // Setting up react-Modal hook and functions:
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  // Need to sort posts to decending order
  const sortedPosts = [...posts].filter(post => post.author === user.username)


  // creating <div> tags for each post to be rendered.
  const profileFeed = sortedPosts.map(post => {
    return (
      <div key={post._id}>
        <h4>{post.author}</h4>
        <p>{post.content}</p>
        <button onClick={toggleModal} name={post._id}>Edit</button>
        <button onClick={deleteWuphf} name={post._id}>Delete</button>
        <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
          <h2>Edit Post</h2>
          <button onClick={toggleModal}>x</button>
          <form>
            
          </form>
        </Modal>
        </div>
    )
  })

  return(
    <div>
      {profileFeed}
    </div>
  )
}

export default UserPosts;
