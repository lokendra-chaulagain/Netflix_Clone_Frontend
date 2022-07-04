import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, { useRef } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import { Link } from "react-router-dom";

function ListItem({
  index,
  adventure,
  horror,
  animation,
  documentary,
  crime,
  thriller,
  scienceFiction,
  romance,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <Link to={`/watch/${id}`} className="link">
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {adventure && (
        <>
          <span className="frontMovieName">{adventure?.title}</span>

          <Link to={`/watch/${adventure?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>

          <img src={adventure?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{adventure?.duration}</span>
              <span className="ageLimit">{adventure?.ageLimit}</span>
              <span>{adventure?.releasedYear}</span>
            </div>

            <div className="description">{adventure?.desc}</div>
            <div className="genere"> {adventure?.genre}</div>
          </div>
        </>
      )}

      {horror && (
        <>
          <span className="frontMovieName">{horror?.title}</span>
          <Link to={`/watch/${horror?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={horror?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span> {horror?.duration}</span>
              <span className="ageLimit">{horror?.ageLimit}</span>
              <span>{horror?.releasedYear}</span>
            </div>

            <div className="description">{horror?.desc}</div>
            <div className="genere"> {horror?.genre}</div>
          </div>
        </>
      )}

      {animation && (
        <>
          <span className="frontMovieName">{animation?.title}</span>
          <Link to={`/watch/${animation?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>

          <img src={animation?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span> {animation?.duration}</span>
              <span className="ageLimit">{animation?.ageLimit}</span>
              <span>{animation?.releasedYear}</span>
            </div>

            <div className="description">{animation?.desc}</div>
            <div className="genere"> {animation?.genre}</div>
          </div>
        </>
      )}

      {documentary && (
        <>
          <span className="frontMovieName">{documentary?.title}</span>
          <Link to={`/watch/${documentary?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={documentary?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{documentary?.duration}</span>
              <span className="ageLimit">{documentary?.ageLimit}</span>
              <span>{documentary?.releasedYear}</span>
            </div>

            <div className="description">{documentary?.desc}</div>
            <div className="genere"> {documentary?.genre}</div>
          </div>
        </>
      )}

      {crime && (
        <>
          <span className="frontMovieName">{crime?.title}</span>
          <Link to={`/watch/${crime?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={crime?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{crime?.duration}</span>
              <span className="ageLimit">{crime?.ageLimit}</span>
              <span>{crime?.releasedYear}</span>
            </div>

            <div className="description">{crime?.desc}</div>
            <div className="genere"> {crime?.genre}</div>
          </div>
        </>
      )}

      {thriller && (
        <>
          <span className="frontMovieName">{thriller?.title}</span>
          <Link to={`/watch/${thriller?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={thriller?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{thriller?.duration}</span>
              <span className="ageLimit">{thriller?.ageLimit}</span>
              <span>{thriller?.releasedYear}</span>
            </div>

            <div className="description">{thriller?.desc}</div>
            <div className="genere"> {thriller?.genre}</div>
          </div>
        </>
      )}

      {scienceFiction && (
        <>
          <span className="frontMovieName">{scienceFiction?.title}</span>
          <Link to={`/watch/${scienceFiction?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={scienceFiction?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{scienceFiction?.duration}</span>
              <span className="ageLimit">{scienceFiction?.ageLimit}</span>
              <span>{scienceFiction?.releasedYear}</span>
            </div>

            <div className="description">{scienceFiction?.desc}</div>
            <div className="genere"> {scienceFiction?.genre}</div>
          </div>
        </>
      )}

      {romance && (
        <>
          <span className="frontMovieName">{romance?.title}</span>
          <Link to={`/watch/${romance?._id}`} className="link">
            <button className="itemPlayBut">
              <PlayArrowIcon className="itemPlayIcon" /> Play Now
            </button>
          </Link>
          <img src={romance?.thumbnail} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{romance?.duration}</span>
              <span className="ageLimit">{romance?.ageLimit}</span>
              <span>{romance?.releasedYear}</span>
            </div>

            <div className="description">{romance?.desc}</div>
            <div className="genere"> {romance?.genre}</div>
          </div>
        </>
      )}
    </div>
    //  </Link>
  );
}

export default ListItem;
