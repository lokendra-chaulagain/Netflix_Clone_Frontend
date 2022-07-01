import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./featured.scss";

function Featured({ genreSelected, genreItems, setGenreSelected }) {
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
  var index1 = Math.floor(Math.random() * allSeriesMovies.length);

  return (
    <div className="featured">
      {genreSelected === undefined ? (
        <img
          className="featuredBgImage"
          src={allSeriesMovies[index1]?.img}
          alt=""
        />
      ) : (
        <img className="featuredBgImage" src={genreItems[index]?.img} alt="" />
      )}
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
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Western">Western</option>
          <option value="Animation">Animation</option>
          <option value="Drama">Drama</option>
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
