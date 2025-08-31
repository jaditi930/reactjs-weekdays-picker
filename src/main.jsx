import React from "react";
import ReactDOM from "react-dom"; // ✅ not react-dom/client
import App from "./App";

// React 16 / 17 way
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
