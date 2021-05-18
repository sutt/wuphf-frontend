import React, { useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import UserInfo from "./UserInfo";
import CreatePost from "./CreatePost";
import UserPosts from "./UserPosts";
import { Context } from "./Context";

function ProfilePage({match}) {
  const matchUsername = match.params.username
  const {loggedIn} = useContext(Context)


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
