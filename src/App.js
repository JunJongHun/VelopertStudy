import { useRef, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CreateUser from "./components/CreateUser";

function App() {
  let [data, setData] = useState([
    { name: "jonghun", job: "frontend", id: 1 },
    { name: "yeonji", job: "backend", id: 2 },
    { name: "showmethemoney", job: "teacher", id: 3 },
  ]);

  let [user, setUser] = useState({ name: "", job: "" });

  let nextId = useRef(4);
  let onCreate = () => {
    let u = { name: user.name, job: user.job, id: nextId.current };
    setData([...data, u]);

    setUser({ name: "", job: "" });

    nextId.current += 1;
  };

  let onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let onDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };
  return (
    <>
      <CreateUser
        onChange={onChange}
        onCreate={onCreate}
        user={user}
      ></CreateUser>
      <CardList data={data} onDelete={onDelete}></CardList>
    </>
  );
}

export default App;
