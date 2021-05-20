import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "./Context";
import logo from '../favicon2.ico'

function SideBar() {
  const {user} = useContext(Context)

  return (
    <nav id='sidebar'>
      <div className='sidebar-header'>
        <a class="navbar-brand" href="/homepage">
          <img src={logo} className="align-middle" alt="logo"/>
        </a>
      </div>

      <ul>
        <li>
          <Link className='sidebarLinks' to="/Homepage">Newsfeed</Link>
        </li>
        <li>
          <Link className='sidebarLinks' to="/Bookmarks">Bookmarks</Link>
        </li>
        <li>
          <Link className='sidebarLinks' to={`/profile/${user.username}`}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
