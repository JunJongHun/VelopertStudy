import React from "react";
import User from "./User";
function UserList({ state }) {
  return (
    <div>
      {state.users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}

export default React.memo(UserList);

