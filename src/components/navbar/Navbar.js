import { ArrowDropDown } from "@mui/icons-material";
import React, { useContext } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

const Navbar = ({ setSearchResult }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  //Logout
  const { dispatch } = useContext(AuthContext);
  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="/assets/logo.png" alt="" />

          <NavLink to={"/"} activeclassname="active" className="link">
            <span
              className="navNarLinks"
              onClick={() => window.location.replace("/")}
            >
              Home
            </span>
          </NavLink>

          <NavLink to={"/series"} activeclassname="active" className="link">
            <span className="navNarLinks">Series</span>
          </NavLink>

          <NavLink to={"/movies"} activeclassname="active" className="link">
            <span className="navNarLinks">Movies</span>
          </NavLink>

          <NavLink to={"/kids"} activeclassname="active" className="link">
            <span className="navNarLinks">KID</span>
          </NavLink>

          <NavLink to={"/latest"} activeclassname="active" className="link">
            <span className="navNarLinks">Latest</span>
          </NavLink>

          <NavLink to={"/watchLater"} activeclassname="active" className="link">
            <span className="navNarLinks">Watch Later</span>
          </NavLink>

          <NavLink to={"/dashboard"} activeclassname="active" className="link">
            <span className="navNarLinks">Dashboard</span>
          </NavLink>
        </div>

        <div className="right">
          <div className="topbarLeft__search">
            <SearchIcon className="topSearchInputIcon" />
            <input
              className="topSearchInput"
              type="text"
              placeholder="Search Facebook"
              onChange={(e) => setSearchResult(e.target.value)}
            />
          </div>

          <img className="nabBarProfile" src="assets/profile.jpg" alt="" />

          <div className="profile">
            <ArrowDropDown className="icon" />

            <div className="options">
              <span className="navNarLinks">Settings </span>

              <Link to={"/"} className="link">
                <span className="navNarLinks" onClick={handleLogout}>
                  Log out
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
