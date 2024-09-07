import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "DhavitG";

// creating elements according to react's syntax
// end of the day this gets converted into an object
// this element gets injected by babel - a transpiler
const reactElement = React.createElement(
  "a", // the tag, can be anything
  {
    href: "https://apple.com",
    target: "_blank",
  },
  "Click me to visit apple",
  anotherUser // variables evaluated in the end
);

/* same thing with a button if you like
const reactElement = React.createElement(
  "button",
  {
    onClick: () => window.location.href = "https://apple.com"
  },
  "Click me to visit Apple"
);

*/

createRoot(document.getElementById("root")).render(<App />);
