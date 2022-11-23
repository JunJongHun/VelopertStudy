import React from "react";
import User from "./User";
function UserList({ users, onDelete }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={onDelete}></User>
      ))}
    </div>
  );
}

export default UserList;
