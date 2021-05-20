import axios from 'axios'
import React, { useState, useContext } from "react";
import { Context } from './Context';
import EditPost from './EditPost'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEdit, faBookmark } from "@fortawesome/free-regular-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;
const edit = <FontAwesomeIcon icon={faEdit} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function UserPosts() {
  const {baseURL, posts, setPosts, user, likePost } = useContext(Context)
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
  const sortedPosts = [...posts].reverse().filter(post => post.author === user.username)
  // creating <div> tags for each post to be rendered.
  const profileFeed = sortedPosts.map(post => {
    return (
      <div key={post._id} className='card mt-2 border-info'>
        <h5 className='card-header'>@{post.author}</h5>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>{post.content}</p>
          </blockquote>
        </div>
        <nav className='navbar border-top'>

          <i className="btn" onClick={() => openEditModal(post._id, post.content)}>{edit}</i>
          
          <i className="btn" onClick={() => likePost(post, user.username)}>
            {heart} <spam className='badge badge-light'>{post.likes.length}</spam>
          </i>

          <button onClick={deleteWuphf} name={post._id}>Delete</button>
        </nav>
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
