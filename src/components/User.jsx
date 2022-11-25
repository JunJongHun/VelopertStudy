import React, { useContext, useEffect } from "react";
import UserDispatch from "../context/UserDispatch";

function User({ user: { username, email, id, active } }) {
  let dispatch = useContext(UserDispatch);
  useEffect(() => {
    console.log(`User ${id} 컴포넌트 마운트`);
    return () => {
      console.log(`User ${id} 컴포넌트 UN마운트`);
    };
  }, []); //최초 실행되고 실행이 안될 뿐, 컴포넌트 리렌더링은 일어나는 중
  return (
    <div>
      <span
        onClick={() => {
          dispatch({ type: "ON_TOGGLE", id: id });
        }}
        style={{ color: active ? "blue" : "black" }}
      >
        {username}
      </span>
      <span> ---- </span>
      <span>{email}</span>
      <span> --- {id}</span>
      <span>
        <button
          onClick={() => {
            dispatch({ type: "ON_REMOVE", id: id });
          }}
        >
          {" "}
          삭제
        </button>
      </span>
    </div>
  );
}

export default React.memo(User);
