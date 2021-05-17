import React from 'react';
import Header from './Header'
import CreatePost from './CreatePost'
import Newsfeed from './NewsFeed'
import SideBar from './SideBar'

function Homepage(props) {
  return (
    <div>
      <Header/>
      <CreatePost />
      <Newsfeed /> 
      <SideBar />
    </div>
  );
}

export default Homepage;