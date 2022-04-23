//featured component means main home section where background ma random auta movie ko paster aunxa ra testo detail pani aunxa


import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import "./featured.scss";
import { useState, useEffect } from "react"
import axios from "axios";



function Featured({ type }) {
  //Random movie display garxau yeta feature section ma
  const [content, setContent] = useState({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`movies/random?type=${type}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
          }
        })
        console.log(res.data[0]);
        setContent(res.data[0])

      } catch (error) {
        console.log(error)
      }
    }
    getRandomContent()
  }, [type])




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




      <img src={content.img || "assets/image1.jpg"} alt="" />

      <div className="info">
        <img src={content.imgTitle || "assets/logo.png"} alt="" />
        <span className="desc">{content.desc || "This is temporary description not from database hai ta"}</span>



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
