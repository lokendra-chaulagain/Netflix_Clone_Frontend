import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

function ListItem({
  index,
  adventure,
  horror,
  animation,
  documentary,
  crime,
  thriller,
  scienceFiction,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {adventure && (
        <>
          <span className="frontMovieName">{adventure?.title}</span>
          <button className="itemPlayBut">
            <PlayArrowIcon className="itemPlayIcon" /> Play Now
          </button>
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
          <button className="itemPlayBut">
            <PlayArrowIcon className="itemPlayIcon" /> Play Now
          </button>
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
          <button className="itemPlayBut">
            <PlayArrowIcon className="itemPlayIcon" /> Play Now
          </button>
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
          <button className="itemPlayBut">
            <PlayArrowIcon className="itemPlayIcon" /> Play Now
          </button>
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
          <button className="itemPlayBut">
            <PlayArrowIcon className="itemPlayIcon" /> Play Now
          </button>
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
          <button className="itemPlayBut">
            <PlayArrowIcon className="itemPlayIcon" /> Play Now
          </button>
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
          <button className="itemPlayBut">
            <PlayArrowIcon className="itemPlayIcon" /> Play Now
          </button>
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
    </div>
  );
}

export default ListItem;
