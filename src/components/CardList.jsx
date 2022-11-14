import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div>
      {props.data.map((v) => (
        <Card data={v} key={v.id} onDelete={props.onDelete}></Card>
      ))}
    </div>
  );
}

export default CardList;
