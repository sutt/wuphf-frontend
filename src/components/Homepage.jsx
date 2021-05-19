import React from 'react';
import Header from './Header'
import CreatePost from './CreatePost'
import Newsfeed from './NewsFeed'
import SideBar from './SideBar'

function Homepage() {
  return (
    <div>
      <Header />
      <SideBar />
      <CreatePost />
      <Newsfeed /> 
    </div>
  );
}

export default Homepage;