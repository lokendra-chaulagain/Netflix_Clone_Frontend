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
            <span className="navNarLinks" onClick={() => window.location.replace("/")} >Home</span>
          </Link>

          <Link to={"/series"} className="link">
          <span
            className="navNarLinks"
            // onClick={() => window.location.replace("/series")}
          >
            Series
          </span>
          </Link>

          <Link to={"/movies"} className="link">
          <span
            className="navNarLinks"
            // onClick={() => window.location.replace("/movies")}
          >
            Movies
          </span>
          </Link>

          <Link to={"/kids"} className="link">
            <span className="navNarLinks">KID</span>
          </Link>


          <Link to={"/latest"} className="link">
            <span className="navNarLinks">Latest</span>
          </Link>

          <Link to={"/watchLater"} className="link">
            <span className="navNarLinks">Watch Later</span>
          </Link>
        </div>

        <div className="right">
          <Search className="icon" />

         
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
