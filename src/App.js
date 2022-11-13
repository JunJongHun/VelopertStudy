import "./App.css";
import Hello from "./components/Hello";
import InputSample from "./components/InputSample";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Hello color="red" name="JungJongHun!"></Hello>
        <Hello></Hello>
        <Hello color="blue"></Hello>
        <Hello name="JJH"></Hello>
      </Wrapper>
      <InputSample></InputSample>
    </>
  );
}

export default App;
