import React from 'react';
import CreatePost from './CreatePost'
import Newsfeed from './NewsFeed'
import SideBar from './SideBar'

function Homepage() {
  return (
    <div className='wrapper'>
      <SideBar />
      <div className='container homeBackground'>
        <div className='row'>
          <div className='col'>
            <CreatePost />
            <Newsfeed /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;