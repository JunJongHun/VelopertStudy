import React from "react";

export default function Hello({ name: s, color }) {
  return (
    <h1 style={{ color }}>
      props test ### {s} {color}
    </h1>
  );
}

Hello.defaultProps = {
  name: "이름 기본값",
  color: "green",
};
