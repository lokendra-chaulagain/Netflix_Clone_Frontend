import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React from "react";
import "./singleMovie.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

function SingleMovie({ genreItem, categoryItem }) {
  return (
    <>
      {genreItem && (
        <div className="singleMovie">
          <span className="frontMovieName">{genreItem?.title}</span>
          <Link to={`/watch/${genreItem?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={genreItem?.thumbnail} alt="" />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{genreItem?.duration} </span>
              <span className="ageLimit">{genreItem?.ageLimit}</span>
              <span>year</span>
            </div>

            <div className="description">{genreItem?.desc}</div>
            <div className="genere"> {genreItem?.genre}</div>
          </div>
        </div>
      )}

      {categoryItem && (
        <div className="singleMovie">
          <span className="frontMovieName">{categoryItem?.title}</span>
          <Link to={`/watch/${categoryItem?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={categoryItem?.thumbnail} alt="" />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{categoryItem?.duration} </span>
              <span className="ageLimit">{categoryItem?.ageLimit}</span>
              <span>year</span>
            </div>

            <div className="description">{categoryItem?.desc}</div>
            <div className="genere"> {categoryItem?.genre}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleMovie;
