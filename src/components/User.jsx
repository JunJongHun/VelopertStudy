import React from "react";

function User({ user: { username, email, id }, onDelete }) {
  return (
    <div>
      <span>{username}</span>
      <span> ---- </span>
      <span>{email}</span>
      <span> --- {id}</span>
      <span>
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          삭제
        </button>
      </span>
    </div>
  );
}

export default User;
