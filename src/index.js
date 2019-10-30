import React from "react";
import ReactDOM from "react-dom";
import Image from "react-native-remote-svg";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Hello World IBG!!</h1>
      <div className="test">
        <h2>This is my first code in REACT!</h2>
      </div>
      <div className="Logo" id="Logo">
        <image source={require("./logo.svg")} alt={"Logo goes here"} />
        <image source={"logo.svg"}>logo goes here</image>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
