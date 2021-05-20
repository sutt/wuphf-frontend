import React, { useContext } from "react";
import SideBar from "./SideBar";
import CreatePost from "./CreatePost";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import { Context } from "./Context";
import { Redirect } from "react-router";

function ProfilePage() {
  const {loggedIn} = useContext(Context)

  if (!loggedIn) return <Redirect to='/'/>

  let modalStyling = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#BAC7CDBF'
    },
    content: {
      position: 'absolute',
      top: '20%',
      left: '40px',
      right: '40px',
      bottom: '20%',
      border: '5px solid #303e2b',
      borderRadius: '15px',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      padding: '20px',
    }
  }

  return (
    <>
      { loggedIn &&
        <div className='profilePageWrapper'>
          <SideBar />
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <UserInfo modalStyling={modalStyling}/>
                <CreatePost />
                <UserPosts modalStyling={modalStyling} />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProfilePage;
