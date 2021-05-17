import React from 'react';
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
      SideBar:
      <Link to="/Homepage" key="NewsFeed">News Feed</Link>
      <Link to="/Bookmarks" key="Bookmarks">Bookmarks</Link>
      <Link to="/Profile" key="Profile">Profile</Link>
    </div>
  );
}

export default SideBar;
