import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
function App(props) {
  let [input, setInput] = useState({ name: "", email: "" });
  let [users, setUsers] = useState([
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
  ]);
  let updateInput = useCallback(
    (e) => {
      let { name, value } = e.target;
      setInput({ ...input, [name]: value });
    },
    [input]
  );

  let onReset = useCallback(() => {
    setInput({ name: "", email: "" });
  }, [users]);

  const nextId = useRef(4);

  let onCreate = useCallback(() => {
    const { name, email } = input;
    const newUser = { id: nextId.current, username: name, email: email };
    setUsers([...users, newUser]);
    setInput({ name: "", email: "" });
    nextId.current += 1;
  }, [users]);

  let onDelete = useCallback(
    (id) => {
      setUsers((users) => users.filter((user) => user.id !== id));
    },
    [users]
  );
  let onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는중...");
    return users.filter((user) => user.active).length;
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  // let [count, setCount] = useState(users.filter((user) => user.active).length);
  // useEffect(() => {
  //   console.log("유즈이펙트로 활성사용자 세는 중..");
  //   setCount(users.filter((user) => user.active).length);
  // }, [users]);

  return (
    <>
      <InputSample
        input={input}
        updateInput={updateInput}
        onReset={onReset}
        onCreate={onCreate}
      ></InputSample>
      <UserList
        users={users}
        onToggle={onToggle}
        onDelete={onDelete}
      ></UserList>
      <div>활성 사용자 {count} </div>
    </>
  );
}

export default App;
