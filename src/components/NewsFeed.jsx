import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Context } from './Context';

function Newsfeed(props) {
  const {posts, setPosts, baseURL} = useContext(Context)

  //Getting all the posts
  async function getPosts () {
    const url = `${baseURL}/posts/`
    await axios.get(url)
    .then(res => {
      console.log(`res.data:`)
      console.log(res.data)
      setPosts(res.data)
    })
    .catch(error => {
      console.log("axios didnt work")
      console.log(error)
    })
  }
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