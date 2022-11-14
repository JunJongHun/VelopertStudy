import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div>
      {props.data.map((v) => (
        <Card data={v} key={v.id}></Card>
      ))}
    </div>
  );
}

export default CardList;
