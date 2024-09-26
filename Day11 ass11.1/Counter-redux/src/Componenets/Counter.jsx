import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const Counter = useSelector((state) => state);
  console.log(Counter);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
      <h1>{Counter}</h1>
      <button onClick={() => dispatch({ type: "SUB" })}>SUB</button>
    </div>
  );
}

export default Counter;
