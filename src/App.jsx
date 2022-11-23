import React, { useRef, useState } from "react";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
function App(props) {
  let [input, setInput] = useState({ name: "", email: "" });

  let updateInput = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  let onReset = () => {
    setInput({ name: "", email: "" });
  };

  const nextId = useRef(4);

  let onCreate = () => {
    const { name, email } = input;
    const newUser = { id: nextId.current, username: name, email: email };
    setUsers([...users, newUser]);
    setInput({ name: "", email: "" });
    nextId.current += 1;
  };

  let onDelete = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };

  let [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  return (
    <>
      <InputSample
        input={input}
        updateInput={updateInput}
        onReset={onReset}
        onCreate={onCreate}
      ></InputSample>
      <UserList users={users} onDelete={onDelete}></UserList>
    </>
  );
}

export default App;
