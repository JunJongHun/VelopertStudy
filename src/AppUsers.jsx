import React from "react";
import Users from "./Users";

function AppUsers(props) {
  let users = [
    { id: 1, username: "종훈" },
    { id: 2, username: "남훈" },
  ];

  let onToggle = (id) => {
    console.log(id);
  };
  return (
    <div>
      <Users users={users}></Users>
    </div>
  );
}

export default AppUsers;
