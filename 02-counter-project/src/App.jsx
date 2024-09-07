import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5); // cant be const
  // useState returns an array having 2 things, one is the value of the variable declared on 0th index
  // other is a function to update that variable

  //let counter = 5;

  const addValue = function () {
    counter += 1;
    if (counter < 20) setCounter(counter);
    // document.querySelector("h2").innerHTML = `Counter value: ${counter}`;
  };

  const decreaseValue = () => {
    counter -= 1;
    if (counter > 0) setCounter(counter);
  };
  return (
    <>
      <h1>Dhavit Gandhi</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
    </>
  );
}

export default App;
