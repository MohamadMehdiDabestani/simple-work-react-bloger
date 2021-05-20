import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./Container/App";
import { BrowserRouter } from "react-router-dom";
import Load from "./Components/Load/Load";
ReactDOM.render(
  <Suspense fallback={<Load />}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);