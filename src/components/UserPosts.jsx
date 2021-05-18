import axios from 'axios'
import React, { useContext } from "react";
import { Context } from './Context';

function UserPosts() {
  const {posts, baseURL, getPosts, user } = useContext(Context)

  const sortedPosts = [...posts].filter(post => post.author === user.username)

  async function deletePost (postId) {
    const url = `${baseURL}/posts/${postId}`
    await axios.delete(url)
  }

  function deleteWuphf (e) {
    e.preventDefault()
    const postId = e.target.name
    console.log("Delete working");
    deletePost(postId)
    getPosts()
  }

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
