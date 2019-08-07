import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";

class App1 extends Component {
  render() {
    return React.createElement("h1", { style: { color: "red" } }, "hello");
  }
}

export default App1;
