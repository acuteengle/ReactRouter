import React from "react";
import { useParams } from "react-router-dom";

const Action = () => {
  let { actionId } = useParams();

  return (
    <div className="App">
      <h1>Action: {actionId}</h1>
    </div>
  );
};

export default Action;
