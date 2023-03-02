import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
let getPlaneta = () => "Tierra";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <p>HOla que tal{getPlaneta()}</p>
    <App />
  </div>
);