import React, { useState, useContext } from "react";
import { Context } from "./Context";
import EditUser from './EditUser'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const cake = <FontAwesomeIcon icon={faBirthdayCake} />;
const location = <FontAwesomeIcon icon={faMapMarkerAlt} />;

function UserInfo({modalStyling}) {
  const {user} = useContext(Context)
  // Setting up react-Modal hooks and functions:
  const [userInfoModalIsOpen, setUserInfoModalIsOpen] = useState(false);  
  function openUserInfoModal() {
    setUserInfoModalIsOpen(true)
  }

  return (
    <div className='card mt-3 mb-3 text-center border-0 userBackground'>
      <div className='card-body' style={{paddingBottom: "0"}}>
        <div className="align-self-end">
          <img className='rounded-circle img-thumbnail border-primary' onClick={openUserInfoModal} alt={user.username} src={user.profilePhoto}/>
        </div>
        <h1>{user.firstName} {user.lastName}</h1>
        <p className='m-0'>@{user.username}</p>
      </div>
      <div className='row'>
        <div className='col text-right'>
          <p><i>{location} {user.location}</i></p>
        </div>
        <div className='col text-left'>
          <p><i>{cake} {user.dob}</i></p>
        </div>
      </div>
      <div>
        { userInfoModalIsOpen &&
          <EditUser modalStyling={modalStyling} userInfoModalIsOpen={userInfoModalIsOpen} setUserInfoModalIsOpen={setUserInfoModalIsOpen}/>
        }
      </div>
    </div>
  );
}

export default UserInfo;
