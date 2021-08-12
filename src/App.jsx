import React from "react";

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//
// Uncaught ReferenceError: can't access lexical declaration 'App' before
// initialization
//
import { hello } from "./main";
hello();
//
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

function App() {
  return <div>CHANGE ME</div>;
}

export default App;
