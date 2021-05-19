import React, { useContext, useEffect } from 'react';
import { Context } from './Context';

function Newsfeed() {
  const {user, posts, getPosts, likePost} = useContext(Context)

  useEffect(()=> {getPosts()}, [])

  console.log(`console posts: ${posts}`)
  console.log(posts)

  let sortedPosts = [...posts]

  // creating <div> tags for each post to be rendered.
  const newsFeed = sortedPosts.map(post => {
    return (
      <div key={post._id}>
        <h4>{post.author}</h4>
        <p>{post.content}</p>
        <p>{post.likes.length}</p>
        <button>Comment</button>
        <button onClick={() => likePost(post, user.username)}>Like</button>
        <button>Bookmark</button>
      </div>
    )
  })

  return (
    <div>
      {newsFeed}
    </div>
  );
}

export default Newsfeed;