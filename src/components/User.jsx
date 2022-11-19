import React, { useEffect } from "react";

function User({ user, onToggle, onDelete }) {
  let changeColor = () => {};

  useEffect(() => {
    console.log("자식 컴포넌트 마운트");
    return () => {
      console.log("자식 컴포넌트 언 마운트");
    };
  });
  return (
    <div>
      <div
        onClick={() => {
          onToggle(user.id);
        }}
        style={{ color: user.toggle ? "red" : "blue" }}
      >
        {user.name} {user.id}
      </div>
      <div>{user.email}</div>
      <button>색 바꾸기</button>
      <button
        onClick={() => {
          onDelete(user.id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default User;
