import React, { useEffect, useRef, useState } from "react";

function UseRefTest(props) {
  let [count, setCount] = useState(0);

  let useRefVal = useRef(0);

  let value = 0;

  useEffect(() => {
    console.log("렌더링 했음");
  });

  let onUp = () => {
    setCount((count += 1));
  };

  let onUpUseRefVal = () => {
    useRefVal.current += 1;
  };

  let onUpValue = () => {
    value += 1;
  };

  let show = () => {
    console.log(
      `count : ${count}  useRefVal : ${useRefVal.current}  value : ${value}`
    );
  };

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={onUp}>+</button>
      <h1>useRefVal : {useRefVal.current}</h1>
      <button onClick={onUpUseRefVal}>+</button>
      <h1>value :{value}</h1>
      <button onClick={onUpValue}>+</button>
      <button onClick={show}>콘솔로그 출력</button>
    </div>
  );
}

export default UseRefTest;
