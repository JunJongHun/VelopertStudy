import React from "react";

function Card(props) {
  let style = { border: "2px solid red", padding: "20px" };

  return (
    <div style={style}>
      <h2>{props.data.name}</h2>
      <h4>{props.data.job}</h4>
    </div>
  );
}

export default Card;
