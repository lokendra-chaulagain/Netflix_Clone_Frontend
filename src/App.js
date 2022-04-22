import React from "react";
import "./app.scss"
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Home type="movies" />} />
        <Route exact path="/series" element={<Home type="series" />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/watch" element={<Watch />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>


  </div>;
};

export default App;
