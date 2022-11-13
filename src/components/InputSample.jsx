import React, { useState } from "react";

function InputSample(props) {
  let [input, setInput] = useState({ name: "", nickName: "" });

  let onClickReset = (e) => {
    setInput({ name: "", nickName: "" });
  };

  let getValue = (e) => {
    let { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <input
        onChange={getValue}
        placeholder="name"
        name="name"
        value={input.name}
      />
      <input
        onChange={getValue}
        placeholder="nickName"
        name="nickName"
        value={input.nickName}
      />
      <button onClick={onClickReset}>RESET</button>
      <div>name = {input.name}</div>
      <div>nickName = {input.nickName}</div>
    </div>
  );
}

export default InputSample;
