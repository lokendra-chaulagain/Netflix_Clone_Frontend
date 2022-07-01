import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AllMoviesSeriesContextProvider } from "./context/getContext";

ReactDOM.render(
  <React.StrictMode>
    <AllMoviesSeriesContextProvider>
      <App />
    </AllMoviesSeriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
