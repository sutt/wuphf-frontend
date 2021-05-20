import React, { useContext } from "react";
import { Link, Redirect } from 'react-router-dom'
import { Context } from "./Context";
import logo from '../favicon2.ico'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faBookmark, faUserCircle, faAddressBook, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faSearch, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const newsfeed = <FontAwesomeIcon icon={faNewspaper} />;
const bookmark = <FontAwesomeIcon icon={faBookmark} />;
const profile = <FontAwesomeIcon icon={faUserCircle} />;
const search = <FontAwesomeIcon icon={faSearch} />;
const address = <FontAwesomeIcon icon={faAddressBook} />;
const dm = <FontAwesomeIcon icon={faEnvelope} />;
const signout = <FontAwesomeIcon icon={faPowerOff} />;

function SideBar() {
  const {user, setUser, loggedIn, setLoggedIn} = useContext(Context)
  if (!loggedIn) return <Redirect to='/'/>
  function signOut(){
    setUser({})
    setLoggedIn(false)
  }

  return (
    <nav id='sidebar'>
      <div className="sideBarUl">
        <ul>
          <li className="logo">
              <img src={logo} className="align-middle" alt="logo"/>
          </li>
          <li>
            <Link className='sidebarLinks' to="/Homepage"><i className="iconSize btn">{newsfeed}</i></Link>
          </li>
          <li>
            <Link className='sidebarLinks' to="/Bookmarks"><i className="iconSize btn">{bookmark}</i></Link>
          </li>
          <li>
            <Link className='sidebarLinks' to={`/profile/${user.username}`}><i className="iconSize btn">{profile}</i></Link>
          </li>
          <li><i className="iconSize btn">{search}</i></li>
          <li><i className="iconSize btn">{address}</i></li>
          <li><i className="iconSize btn">{dm}</i></li>
          <i className='signOut iconSize btn' onClick={signOut}>{signout}</i>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
