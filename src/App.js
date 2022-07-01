import React from "react";
import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/movies" element={<Home />} />
          <Route exact path="/series" element={<Home />} />
          <Route exact path="/kids" element={<Home />} />
          <Route exact path="/latest" element={<Home />} />
          <Route exact path="/watchLater" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/watch" element={<Watch />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
