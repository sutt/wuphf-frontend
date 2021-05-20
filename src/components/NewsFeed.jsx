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
      <div key={post._id} className="card">
        <h6 className='card-header'>@{post.author}</h6>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>{post.content}</p>
          </blockquote>
        </div>
        <nav className='navbar'>
          <button>Comment</button>
          <button onClick={() => likePost(post, user.username)}>
            Like <spam className='badge badge-light'>{post.likes.length}</spam>
          </button>
          <button>Bookmark</button>
        </nav>
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