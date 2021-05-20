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
    <div className='card mt-3 mb-3 text-center border-0'>
      <div className='card-body' style={{paddingBottom: "0"}}>
          <img className='rounded-circle img-thumbnail border-primary' alt={user.username} src={user.profilePhoto}/>
          <h1>{user.firstName} {user.lastName}</h1>
          <p className='m-0'>@{user.username}</p>
      </div>
      <div className='row'>
        <div className='col text-right'>
          <p>{user.location}</p>
        </div>
        <div className='col text-left'>
          <p>{user.dob}</p>
        </div>
      </div>
      <div>
        <button onClick={openUserInfoModal}>Edit User Info</button>
        { userInfoModalIsOpen &&
          <EditUser userInfoModalIsOpen={userInfoModalIsOpen} setUserInfoModalIsOpen={setUserInfoModalIsOpen}/>
        }
      </div>
    </div>
  );
}

export default UserInfo;
