import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./featured.scss";

function Featured({
  genreSelected,
  genreItems,
  setGenreSelected,
  categoryItems,
}) {
  console.log(genreSelected);
  // const location = useLocation();
  // const path = location.pathname.split("/")[1];
  // console.log(path);

  // const [pathItem, setPathItem] = useState([]);
  // useEffect(() => {
  //   const fetchPathItem = async () => {
  //     try {
  //       const res = await axios.get(`/movies/category/${path}`);
  //       setPathItem(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPathItem();
  // }, [path]);

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

  return (
    <div className="featured">
      {/* {genreSelected === undefined ? (
        <img
          className="featuredBgImage"
          src={allSeriesMovies[index1]?.thumbnail}
          alt=""
        />
      ) ??  categoryItems  (
        <img
          className="featuredBgImage"
          src={categoryItems[index3]?.thumbnail}
          alt=""
        />
      ) : (
        <img
          className="featuredBgImage"
          src={genreItems[index]?.thumbnail}
          alt=""
        />
      )} */}

      {
        <>
          {categoryItems && (
            <img
              className="featuredBgImage"
              src={categoryItems[index3]?.thumbnail}
              alt=""
            />
          )}

          {genreSelected === undefined && <img
            className="featuredBgImage"
            src={allSeriesMovies[index1]?.thumbnail}
            alt=""
          />}

         {genreSelected &&  <img
            className="featuredBgImage"
            src={genreItems[index]?.thumbnail}
            alt=""
          />}
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

      <img src="assets/image1.jpg" alt="" />

      <div className="info">
        <img src="assets/logo.png" alt="" />
        <span className="desc">
          {" "}
          "This is temporary description not from database hai ta"
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
