import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { AllSeriesMoviesContextProvider } from "./context/getContext";

ReactDOM.render(
  <React.StrictMode>
    <AllSeriesMoviesContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AllSeriesMoviesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
