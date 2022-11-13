import React from "react";

export default function Wrapper(props) {
  const st = {
    border: "2px solid black",
    padding: "16px",
  };

  return <div style={st}>{props.children}</div>;
}
