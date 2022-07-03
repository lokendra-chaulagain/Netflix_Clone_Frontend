import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Adventure from "../../components/adventure/Adventure";
import Animation from "../../components/animation/Animation";
import Crime from "../../components/crime/Crime";
import Documentary from "../../components/documentary/Documentary";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Horror from "../../components/horror/Horror";
import Navbar from "../../components/navbar/Navbar";
import Romance from "../../components/romance/Romance";
import ScienceFiction from "../../components/scienceFiction/ScienceFiction";
import SingleMovie from "../../components/singleMovie/SingleMovie";
import Thriller from "../../components/thriller/Thriller";
import Timer from "../../components/timer/Timer";
import { useAPI } from "../../context/getContext";
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

  //
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);

  const [categoryItems, setCategoryItems] = useState([]);
  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const res = await axios.get(`/movies/category/${path}`);
        setCategoryItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryItems();
  }, [path]);
  console.log(categoryItems);

  const { allAdventure } = useAPI();
  console.log(allAdventure);

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
            {path && (
              <span className="singleMovieTitle">Category : {path}</span>
            )}

            {path ? (
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
                <SingleMovie />
                <SingleMovie />
                <SingleMovie />
              </div>
            ) : (
              <>
                <Adventure />
                <Crime />
                <Horror />
                <Romance />
                <ScienceFiction />
                <Thriller />
                <Animation />
                <Documentary />
              </>
            )}

            <Timer />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
