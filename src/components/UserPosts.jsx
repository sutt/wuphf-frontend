import axios from 'axios'
import React, { useState, useContext } from "react";
import Modal from 'react-modal'
import { Context } from './Context';

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModaltoOpenToTrue = () => {
    setModalIsOpen(true)
    console.log(modalIsOpen)
  }
  const setModalIsOpenToFalse =() => {
    setModalIsOpen(false)
}



  // Need to sort posts to decending order
  const sortedPosts = [...posts].filter(post => post.author === user.username)


  // creating <div> tags for each post to be rendered.
  const profileFeed = sortedPosts.map(post => {
    return (
      <div key={post._id}>
        <h4>{post.author}</h4>
        <p>{post.content}</p>
        <button onClick={setModaltoOpenToTrue} name={post._id}>Edit</button>
        <button onClick={deleteWuphf} name={post._id}>Delete</button>
        <Modal isOpen={modalIsOpen} ariaHideApp={false}>
          <button onClick={setModalIsOpenToFalse}>x</button>
          {/* This will cause an error because of needing an onchange function */}
          {/* <form><textarea type='text' value={post.content} name='post'/> */}
          {/* When using post.content, only the last comment will render in the Modal */}
          {/* <h1>{post.content}</h1> */}
          <h1>Hello</h1>
          {/* </form> */}
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
