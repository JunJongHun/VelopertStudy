import React from "react";

function InputSample({ input, updateInput, onReset, onCreate }) {
  return (
    <div>
      <input
        onChange={updateInput}
        type="text"
        placeholder="이름"
        name="name"
        value={input.name}
      />
      <input
        onChange={updateInput}
        type="text"
        placeholder="이메일"
        name="email"
        value={input.email}
      />
      <button onClick={onCreate}>생성</button>
      <button onClick={onReset}>리셋</button>
    </div>
  );
}

export default InputSample;
