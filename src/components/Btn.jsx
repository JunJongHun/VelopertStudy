import React from "react";
import "./Btn.scss";
import classNames from "classnames";

function Btn({ size }) {
  return (
    <div className="Container">
      <button className={`Button ${size}`}>{size} 버튼</button>
      <button className={["Button", size].join(" ")}>
        {size} 배열로 동적 버튼
      </button>
      <button className={classNames("Button", size)}>
        {size} classNames라이브러리 사용 버튼
      </button>
      <button className={classNames({ Button: true, size: false })}>
        {size} classNames 조건 사용 버튼
      </button>
      <button className={`Button with`}>
        {`.Button .with == &쓰면 같은 내용`} 버튼
      </button>
      <button className={`Button B outline`}>B-color 버튼</button>
      <button className={`Button A outline`}>A-color 버튼</button>
    </div>
  );
}

Btn.defaultProps = {
  size: "M",
};

export default Btn;
