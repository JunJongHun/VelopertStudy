import React from "react";

function userReducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        input: { ...state.input, [action.name]: action.value },
      };
    case "ON_RESET":
      return {
        ...state,
        input: { name: "", email: "" },
      };
    case "ON_CREATE":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.id,
            username: action.name,
            email: action.email,
            active: action.active,
          },
        ],
      };
    case "ON_TOGGLE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "ON_REMOVE":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      break;
  }
}

export default userReducer;
