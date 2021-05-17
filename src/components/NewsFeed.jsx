import axios from 'axios';
import React, { useContext } from 'react';
import { Context } from './Context';

function Newsfeed(props) {
  const {posts, setPosts} = useContext(Context)

  // let sortedPosts = [...posts]
  let sortedPosts = [
    {author: 'Raihan', content: 'post1'},
    {author: 'MAx', content: 'post2'},
    {author: 'Justin', content: 'post3'},
    {author: 'Evan', content: 'post4'},
  ]

  // creating <div> tags for each post to be rendered.
  const newsFeed = sortedPosts.map(post => {
    return (
      <div>
        <h4>{post.author}</h4>
        <p>{post.content}</p>
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