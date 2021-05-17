import React, { useContext } from "react";
import { Context } from "./Context";

function UserInfo() {
  const {user} = useContext(Context)

  return (
    <div>
      <img alt={user.username} src={user.profilePhoto}/>
      <h1>{user.name}</h1>
      <p>@{user.username}</p>
      <p>{user.location}</p>
      <p>{user.dob}</p>
    </div>);
}

export default UserInfo;
