import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    age: 20,
    name: "Dhavit Gandhi",
  };

  let myArr = [0, 1, 2];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4">Tailwind test</h1>
      <Card
        username="MenWithStoicMindset"
        someObj={myObj}
        someArr={myArr}
        btnText="click me"
      />
      {/*props is initially an empty object, now it has channel but cant directly add arrays/objects */}
      <Card username="dhavitg" btnText="visit me" />
    </>
  );
}

export default App;
