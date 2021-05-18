import axios from 'axios'
import React, { useContext } from "react";
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

  // Need to sort posts to decending order
  const sortedPosts = [...posts].filter(post => post.author === user.username)

  // creating <div> tags for each post to be rendered.
  const profileFeed = sortedPosts.map(post => {
    return (
      <div key={post._id}>
        <h4>{post.author}</h4>
        <p>{post.content}</p>
        <button>Edit</button>
        <button onClick={deleteWuphf} name={post._id}>Delete</button>
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
