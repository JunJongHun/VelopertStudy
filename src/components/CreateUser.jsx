import React from "react";

function CreateUser(props) {
  return (
    <div>
      <h2>name</h2>
      <input
        placeholder="name"
        name="name"
        value={props.user.name}
        onChange={props.onChange}
      />
      <h2>job</h2>
      <input
        placeholder="job"
        name="job"
        value={props.user.job}
        onChange={props.onChange}
      />
      <div>
        name : {props.user.name} --------- job : {props.user.job}
      </div>
      <button onClick={props.onCreate}>만들기</button>
    </div>
  );
}

export default CreateUser;
