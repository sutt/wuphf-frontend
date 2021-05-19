import React, { useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import UserInfo from "./UserInfo";
import CreatePost from "./CreatePost";
import UserPosts from "./UserPosts";
import { Context } from "./Context";
import { Redirect } from "react-router";

function ProfilePage() {
  const {loggedIn} = useContext(Context)

  if (!loggedIn) return <Redirect to='/' />

  return (
    <>
      { loggedIn &&
        <div>
          <Header /> 
          <SideBar />
          <UserInfo />
          <CreatePost />
          <UserPosts />
        </div>
      }
    </>
  );
}

export default ProfilePage;
