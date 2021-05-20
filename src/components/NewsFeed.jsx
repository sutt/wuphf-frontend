import React, { useContext, useEffect } from 'react';
import { Context } from './Context';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;
const comment = <FontAwesomeIcon icon={faComment} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;

function Newsfeed() {
  const {user, posts, getPosts, likePost} = useContext(Context)

  useEffect(()=> {getPosts()}, [])

  console.log(`console posts: ${posts}`)
  console.log(posts)

  let sortedPosts = [...posts].reverse()

  // creating <div> tags for each post to be rendered.
  const newsFeed = sortedPosts.map(post => {
    return (
      <div key={post._id} className="card mt-2 border-primary">
        <h5 className='card-header'>@{post.author}</h5>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>{post.content}</p>
          </blockquote>
        </div>
        
        <nav className='navbar border-top'>
        <i className="far fa-comments btn">{comment}</i>

        <i onClick={() => likePost(post, user.username)} className="far fa-heart btn">{heart}<span className='badge badge-light'>{post.likes.length}</span></i>

          <i className="far fa-bookmark btn"> {bookmark}</i>
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