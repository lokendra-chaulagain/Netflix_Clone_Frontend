import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="/assets/logo.png" alt="" />

          <Link to={"/"} className="link">
            <span className="navNarLinks">HomePage</span>
          </Link>

          <Link to={"/series"} className="link">
            <span className="navNarLinks">Series</span>
          </Link>

          <Link to={"/movies"} className="link">
            <span className="navNarLinks">Movies</span>
          </Link>

          <Link to={"/trending"} className="link">
            <span className="navNarLinks">New and Popular</span>
          </Link>

          <Link to={"/myList"} className="link">
            <span className="navNarLinks">My LIst</span>
          </Link>
        </div>

        <div className="right">
          <Search className="icon" />

          <Link to={"/"} className="link">
            <span className="navBarKid">KID</span>
          </Link>

          <Notifications className="icon" />
          <img className="nabBarProfile" src="assets/profile.jpg" alt="" />

          <div className="profile">
            <ArrowDropDown className="icon" />

            <div className="options">
              <span className="navNarLinks">Settings </span>

              <Link to={"/"} className="link">
                <span className="navNarLinks">Log out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
