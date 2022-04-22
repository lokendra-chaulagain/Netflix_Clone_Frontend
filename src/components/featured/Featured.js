import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import "./featured.scss";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genere" id="genere">
            <option>Genera</option>
            <option value="adventure">Adventure</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/72eb3c6f-1a6d-4d59-b295-6fdbe747416a/NP-en-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />

      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          deserunt reiciendis, aspernatur in distinctio tempora consectetur
          repellendus nihil perspiciatis mollitia voluptate natus assumenda sint
          aliquam culpa magnam temporibus provident dolore laudantium nulla
          quibusdam reprehenderit? Consequuntur, eos culpa. Vitae sequi a
          commodi laboriosam impedit cumque error quos minima quam, tenetur
          velit!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
