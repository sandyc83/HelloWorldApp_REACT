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
      <div className="Logo" id="Logo">
        <img src="logo.svg" alt="Logo goes here" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
