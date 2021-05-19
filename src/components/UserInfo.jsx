import React, { useState, useContext } from "react";
import { Context } from "./Context";
import EditUser from './EditUser'

function UserInfo() {
  const {user} = useContext(Context)

    // Setting up react-Modal hooks and functions:
    const [userInfoModalIsOpen, setUserInfoModalIsOpen] = useState(false);
  
    function openUserInfoModal() {
      setUserInfoModalIsOpen(true)
    }

  return (
    <div>
      <img alt={user.username} src={user.profilePhoto}/>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>@{user.username}</p>
      <p>{user.location}</p>
      <p>{user.dob}</p>
      <button onClick={openUserInfoModal}>Edit User Info</button>
      { userInfoModalIsOpen &&
        <EditUser userInfoModalIsOpen={userInfoModalIsOpen} setUserInfoModalIsOpen={setUserInfoModalIsOpen}/>
      }
    </div>
  );
}

export default UserInfo;
