import "./App.css";
import Card from "./components/Card";

function App() {
  let data = [
    { name: "jonghun", job: "frontend", id: 1 },
    { name: "yeonji", job: "backend", id: 2 },
    { name: "showmethemoney", job: "teacher", id: 3 },
  ];
  return (
    <>
      {data.map((v) => {
        return <Card data={v} key={v.id}></Card>;
      })}
    </>
  );
}

export default App;
