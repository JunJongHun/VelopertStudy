import React, { useEffect, useRef, useState } from "react";
import User from "./User";

function UserList(props) {
  let [users, setUsers] = useState([
    { name: "전종훈", email: "minn4072@gmail.com", toggle: false, id: 100 },
    { name: "최연지", email: "minn123@gmail.com", toggle: true, id: 101 },
  ]);

  let id = useRef(102);

  useEffect(() => {
    console.log("부모 컴포넌트 마운트");

    return () => {
      console.log("부모 컴포넌트 언 마운트");
    };
  });

  let onCreate = () => {
    let copy = [
      ...users,
      {
        name: "홍길동",
        email: "honggildong@gmail.com",
        toggle: false,
        id: id.current,
      },
    ];
    console.log(id.current);
    id.current += 1;
    setUsers(copy);
  };

  let onToggle = (id) => {
    let copy = [...users].map((user) =>
      user.id !== id ? user : { ...user, toggle: !user.toggle }
    );
    setUsers(copy);
  };

  let onDelete = (id) => {
    let copy = [...users].filter((user) => user.id !== id);
    setUsers(copy);
  };

  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onDelete={onDelete}
          onToggle={onToggle}
        ></User>
      ))}
      <button onClick={onCreate}>추가</button>
    </div>
  );
}

export default UserList;
