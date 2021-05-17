import axios from 'axios'
import React, { useContext } from "react";
import { Context } from './Context';

function UserPosts() {
  const {user, posts} = useContext(Context)

  const sortedPosts = [...posts].filter(post => post.author === user.username)

  // creating <div> tags for each post to be rendered.
  const profileFeed = sortedPosts.map(post => {
    return (
      <div key={post._id}>
        <h4>{post.author}</h4>
        <p>{post.content}</p>
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
