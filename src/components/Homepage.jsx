import React from 'react';
import Header from './Header'
import CreatePost from './CreatePost'
import Newsfeed from './NewsFeed'
import SideBar from './SideBar'

function Homepage() {
  return (
    <div className='wrapper'>
      <SideBar />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Header />
            <CreatePost />
            <Newsfeed /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;