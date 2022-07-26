import React, { useEffect } from "react";
import UserItem from "./UserItem";

const Users = ({ users }) => {
  console.log("Users Component Rendered");

  return (
    <div className="users">
      <button id="add-button" onClick={null}>
        Add User
      </button>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
