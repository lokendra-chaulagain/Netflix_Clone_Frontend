import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React from "react";
import "./singleMovie.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function SingleMovie() {
  return (
    <div className="singleMovie">
      <span className="frontMovieName">Movie Name</span>
      <button className="itemPlayBut">
        <PlayArrowIcon className="itemPlayIcon" /> Play Now
      </button>
      <img src="/assets/1.webp" alt="" />

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />

          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownAltOutlined className="icon" />
        </div>

        <div className="itemInfoTop">
          <span> 2 hour 35 min</span>
          <span className="ageLimit">ageLimit</span>
          <span>year</span>
        </div>

        <div className="description">des</div>
        <div className="genere"> Action</div>
      </div>
    </div>
  );
}

export default SingleMovie;
