import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Hello World IBG!!</h1>
      <div className="test">
        <h2>This is my first code in REACT!</h2>
      </div>
      <img src="logo.svg" alt="logo" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
