import React from "react";
import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";

function App() {
  //to get old state
  // const counter = useSelector(state => state.counter);
  //console.log("----hhhhh", counter);
  const dispatch = useDispatch(); //do actions
  //console.log("--------sdfs", dispatch);

  const state = useSelector(state => state);
  console.log(state.name);

  return (
    <div className="App">
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "DISPATCH" })}>DISPATCH</button>
      name: {state.name}
    </div>
  );
}

export default App;
