import React, { useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import CreatePost from "./CreatePost";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import { Context } from "./Context";
import { Redirect } from "react-router";

function ProfilePage() {
  const {loggedIn} = useContext(Context)

  if (!loggedIn) return <Redirect to='/'/>

  return (
    <>
      { loggedIn &&
        <div className='wrapper'>
          <SideBar />
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <Header />
                <UserInfo />
                <CreatePost />
                <UserPosts />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProfilePage;
