import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AllSeriesMoviesContextProvider } from "./context/getContext";


ReactDOM.render(
  <React.StrictMode>
    <AllSeriesMoviesContextProvider>
      <App />
    </AllSeriesMoviesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
