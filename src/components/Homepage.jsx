import React from 'react';
import CreatePost from './CreatePost'
import Newsfeed from './NewsFeed'
import SideBar from './SideBar'

function Homepage() {
  return (
    <div className='homePageWrapper'>
      <SideBar />
      <div className='container homeBackground'>
        <div className='row'>
          <div className='col'>
            <h1 className='newsfeedTitle'>Welcome to Wuphf</h1>
            <CreatePost />
            <Newsfeed /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;