import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <App1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
