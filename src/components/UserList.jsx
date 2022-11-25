import React from "react";
import User from "./User";
function UserList({ users, onDelete, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          onToggle={onToggle}
          user={user}
          onDelete={onDelete}
        ></User>
      ))}
    </div>
  );
}

export default React.memo(UserList);
