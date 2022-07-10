import React, { useContext } from "react";
import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthContext } from "./context/authContext/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/home" element={user ? <Home /> : <Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/movies" element={user ? <Home /> : <Login />} />
          <Route exact path="/series" element={user ? <Home /> : <Login />} />
          <Route exact path="/kids" element={user ? <Home /> : <Login />} />
          <Route exact path="/latest" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/watchLater"
            element={user ? <Home /> : <Login />}
          />
          <Route
            exact
            path="/dashboard"
            element={user?.isAdmin === true ? <Dashboard /> : <Login />}
          />
          <Route
            exact
            path="/watch/:id"
            element={user ? <Watch /> : <Login />}
          />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
