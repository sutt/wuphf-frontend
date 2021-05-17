import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import UserInfo from "./UserInfo";
import CreatePost from "./CreatePost";
import UserPosts from "./UserPosts";

function ProfilePage(props) {
  return (
    <div>
      <Header />
      <SideBar />
      <UserInfo />
      <CreatePost />
      <UserPosts />
    </div>
  );
}

export default ProfilePage;
