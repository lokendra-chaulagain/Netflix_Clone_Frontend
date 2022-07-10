import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./featured.scss";
import { Link } from "react-router-dom";

function Featured({
  genreSelected,
  genreItems,
  setGenreSelected,
  categoryItems,
  latestItems,
}) {
  console.log(latestItems);
  var index4 = Math.floor(Math.random() * latestItems?.length);
  var index3 = Math.floor(Math.random() * categoryItems?.length);
  var index = Math.floor(Math.random() * genreItems?.length);

  //All series and movies
  const [allSeriesMovies, setAllSeriesMovies] = useState([]);
  useEffect(() => {
    const fetchAllMoviesAndSeries = async () => {
      try {
        const res = await axios.get("/movies/all");
        setAllSeriesMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMoviesAndSeries();
  }, []);
  console.log(allSeriesMovies);
  var index1 = Math.floor(Math.random() * allSeriesMovies.length);
  console.log(allSeriesMovies[index1]?.thumbnail);

  //path
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);

  return (
    <div className="featured">
      {
        <>
          {categoryItems && (
            <img
              className="featuredBgImage"
              src={categoryItems[index3]?.thumbnail}
              alt=""
            />
          )}

          {genreSelected && (
            <img
              className="featuredBgImage"
              src={genreItems[index]?.thumbnail}
              alt=""
            />
          )}

          {path === "latest" && (
            <img
              className="featuredBgImage"
              src={latestItems[index4]?.thumbnail}
              alt=""
            />
          )}

          {path === "home" && (
            <img
              className="featuredBgImage"
              src={allSeriesMovies[index1]?.thumbnail}
              alt=""
            />
          )}
        </>
      }

      <div className="category">
        <span>{genreSelected}</span>
        <select
          name="genere"
          id="genere"
          onChange={(e) => setGenreSelected(e.target.value)}
        >
          <option disabled selected={true}>
            Genra
          </option>

          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Animation">Animation</option>
          <option value="Documentary">Documentary</option>
        </select>
      </div>
      {/* <img src="assets/image1.jpg" alt="" /> */}
      <div className="info">
        {categoryItems && (
          <span className="lgTitle">{categoryItems[index3]?.title}</span>
        )}

        {genreSelected && (
          <span className="lgTitle">{genreItems[index]?.title}</span>
        )}

        {path === "latest" && (
          <span className="lgTitle">{latestItems[index4]?.title}</span>
        )}

        {path === "home" && (
          <span className="lgTitle">{allSeriesMovies[index1]?.title}</span>
        )}

        {/* Desc */}

        {categoryItems && (
          <span className="desc">{categoryItems[index3]?.desc}</span>
        )}

        {genreSelected && (
          <span className="desc">{genreItems[index]?.desc}</span>
        )}

        {path === "latest" && (
          <span className="desc">{latestItems[index4]?.desc}</span>
        )}

        {path === "home" && (
          <span className="desc">{allSeriesMovies[index1]?.desc}</span>
        )}

        <div className="buttons">
          {categoryItems && (
            <Link to={`/watch/${categoryItems[index3]?._id}`} className="link">
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
            </Link>
          )}

          {genreSelected && (
            <Link to={`/watch/${genreItems[index]?._id}`} className="link">
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
            </Link>
          )}

          {path === "latest" && (
            <Link
              to={`/watch/${allSeriesMovies[index1]?._id}`}
              className="link"
            >
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
            </Link>
          )}

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
