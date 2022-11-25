import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import UserDispatch from "./context/UserDispatch";
import userReducer from "./reducer/userReducer";
function App(props) {
  const initialState = {
    input: { name: "", email: "" },
    users: [
      {
        id: 1,
        username: "velopert",
        email: "public.velopert@gmail.com",
        active: true,
      },
      {
        id: 2,
        username: "tester",
        email: "tester@example.com",
        active: false,
      },
      {
        id: 3,
        username: "liz",
        email: "liz@example.com",
        active: false,
      },
    ],
  };

  let [state, dispatch] = useReducer(userReducer, initialState);

  let updateInput = useCallback((e) => {
    let { name, value } = e.target;
    dispatch({ type: "UPDATE_INPUT", name, value });
  }, []);

  let onReset = useCallback(() => {
    dispatch({ type: "ON_RESET" });
  }, []);

  const nextId = useRef(4);

  let onCreate = useCallback(() => {
    const { name, email } = state.input;
    dispatch({ type: "ON_CREATE", name, email, id: nextId.current });
    dispatch({ type: "ON_RESET" });
    nextId.current += 1;
  }, []);

  // let onDelete = useCallback((id) => {
  //   dispatch({ type: "ON_REMOVE", id: id });
  // }, []);
  // let onToggle = useCallback((id) => {
  //   dispatch({ type: "ON_TOGGLE", id: id });
  // }, []);

  // function countActiveUsers(users) {
  //   console.log("활성 사용자 수를 세는중...");
  //   return users.filter((user) => user.active).length;
  // }

  // const count = useMemo(() => countActiveUsers(users), [users]);

  // let [count, setCount] = useState(users.filter((user) => user.active).length);
  // useEffect(() => {
  //   console.log("유즈이펙트로 활성사용자 세는 중..");
  //   setCount(users.filter((user) => user.active).length);
  // }, [users]);

  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <InputSample
          state={state}
          updateInput={updateInput}
          onCreate={onCreate}
          onReset={onReset}
        ></InputSample>
        <UserList state={state}></UserList>
        <div>활성 사용자 </div>
      </UserDispatch.Provider>
    </>
  );
}

export default App;
