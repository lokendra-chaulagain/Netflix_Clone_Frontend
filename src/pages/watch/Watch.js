import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const location = useLocation();
  console.log(location);
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon className="videoBackBut" />
          Home
        </div>
      </Link>

      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={movie.video}
      />
    </div>
  );
}

export default Watch;
