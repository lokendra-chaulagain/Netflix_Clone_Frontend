import axios from "axios";
import React, { useEffect, useState } from "react";
import Adventure from "../../components/adventure/Adventure";
import Animation from "../../components/animation/Animation";
import Crime from "../../components/crime/Crime";
import Drama from "../../components/drama/Drama";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Horror from "../../components/horror/Horror";
import Navbar from "../../components/navbar/Navbar";
import Romance from "../../components/romance/Romance";
import ScienceFiction from "../../components/scienceFiction/ScienceFiction";
import SingleMovie from "../../components/singleMovie/SingleMovie";
import Thriller from "../../components/thriller/Thriller";
import Timer from "../../components/timer/Timer";
import "./home.scss";

const Home = () => {
  const [genreSelected, setGenreSelected] = useState("");
  const [genreItems, setGenreItems] = useState([]);
  useEffect(() => {
    const fetchDataAccordingToGenre = async () => {
      try {
        const res = await axios.get(`/movies/genre/${genreSelected}`);
        setGenreItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccordingToGenre();
  }, [genreSelected]);
  console.log(genreItems);
  console.log(genreSelected);

  return (
    <>
      {genreSelected ? (
        <>
          <div className="home1">
            <div className="home">
              <Navbar />
              <Featured
                setGenreSelected={setGenreSelected}
                genreSelected={genreSelected}
                genreItems={genreItems}
              />
            </div>
            <span className="singleMovieTitle">Genre : {genreSelected}</span>
            <div className="singleMovieListContainer">
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
              <SingleMovie />
            </div>
            <Timer />
            <Footer />
          </div>
        </>
      ) : (
        <>
          <div className="home">
            <Navbar />
            <Featured
              setGenreSelected={setGenreSelected}
              genreItems={genreItems}
            />
            <Adventure />
            <Crime />
            <Horror />
            <Romance />
            <ScienceFiction />
            <Thriller />
            <Animation />
            <Drama />
            <Timer />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
