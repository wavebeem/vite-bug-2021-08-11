import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export function hello() {
  console.log("hello");
}

ReactDOM.render(<App />, document.getElementById("root"));
