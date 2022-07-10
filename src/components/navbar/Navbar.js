import { ArrowDropDown } from "@mui/icons-material";
import React, { useContext } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import HomeIcon from "@mui/icons-material/Home";
import ClearIcon from "@mui/icons-material/Clear";

import LogoutIcon from "@mui/icons-material/Logout";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";

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

  //Toggle Sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSlider = () => {
    setSidebar(!sidebar);
  };

  const {user} = useContext(AuthContext);
  console.log(user)

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="/assets/logo.png" alt="" />

          <HorizontalSplitIcon className="barIcon" onClick={showSlider} />
          {/* slider======== */}
          {sidebar && (
            <div className="sideBar" onClick={showSlider}>
              <ClearIcon className="clearIcon" />
              <div className="drawerSliderWrapper">
                <NavLink to="/home"  activeclassname="dactive" className="link">
                  <div className="sliderItems">
                    <HomeIcon className="sliderListIcons" />
                    <span className="sliderListItem">Home</span>
                  </div>
                </NavLink>

                <NavLink to="/series" activeclassname="dactive" className="link">
                  <div className="sliderItems">
                    <DriveFileRenameOutlineIcon className="sliderListIcons" />
                    <span className="sliderListItem">Series</span>
                  </div>
                </NavLink>

                <NavLink to="/movies" activeclassname="dactive" className="link">
                  <div className="sliderItems">
                    <AccountBoxIcon className="sliderListIcons" />
                    <span className="sliderListItem">Movies</span>
                  </div>
                </NavLink>

                <NavLink to="/kids" activeclassname="dactive" className="link">
                  <div className="sliderItems">
                    <SettingsIcon className="sliderListIcons" />
                    <span className="sliderListItem">Kids</span>
                  </div>
                </NavLink>

                <NavLink to="/latest" activeclassname="dactive" className="link">
                  <div className="sliderItems">
                    <SettingsIcon className="sliderListIcons" />
                    <span className="sliderListItem">Latest</span>
                  </div>
                </NavLink>

                <NavLink to="/" activeclassname="dactive" className="link">
                  <div className="sliderItems">
                    <LogoutIcon className="sliderListIcons" />
                    <span className="sliderListItem" onClick={handleLogout}>
                      Logout
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>
          )}
          {/* */}
          {/* ========== */}

          <NavLink to={"/home"} activeclassname="active" className="link">
            <span
              className="navNarLinks"
              // onClick={() => window.location.replace("/home")}
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

          <NavLink to={"/dashboard"} activeclassname="active" className="link">
            {user.isAdmin===true && <span className="navNarLinks">Dashboard</span>}
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

          <div className="profile">
            <ArrowDropDown className="dropDownIcon" />

            <div className="options">
              <span className="navNarLinks">Settings </span>

              <Link to={"/"} className="link">
                <span className="navNarLinks" onClick={handleLogout}>
                  Logout
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
