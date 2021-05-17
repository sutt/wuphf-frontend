import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "./Context";

function SideBar() {
  const {user} = useContext(Context)

  return (
    <div>
      <Link to="/Homepage">Home</Link>
      <Link to="/Bookmarks">Bookmarks</Link>
      <Link to={`/profile/${user.username}`}>Profile</Link>
    </div>
  );
}

export default SideBar;
