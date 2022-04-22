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
  const user = true;
  return <div>
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route exact path="/login" element={!user ? <Login /> : <Home />} />
        <Route exact path="/register" element={!user ? <Register /> : <Home />} />

        {/* If user is present then only these pages are accessible */}
        {user && (
          <>
            <Route exact path="/movies" element={<Home type="movies" />} />
            <Route exact path="/series" element={<Home type="series" />} />
            <Route exact path="/watch" element={<Watch />} />
          </>
        )}
        
      </Routes>
    </Router>
  </div>;
};

export default App;
