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
  //Genre selection
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

  //
  const location = useLocation();
  const path = location.pathname.split("/")[1];

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

  //Fetch all users for search query
  const { allSeriesAndMovies } = useAPI();

  //Search users by username query
  const [searchResult, setSearchResult] = useState("");
  const searchUserResultData = (data) => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchResult.toLowerCase())
    );
  };
  console.log(searchUserResultData);

  return (
    <>
      {genreSelected ? (
        <>
          <div className="home1">
            <div className="home">
              <Navbar setSearchResult={setSearchResult} />
              <Featured
                setGenreSelected={setGenreSelected}
                genreSelected={genreSelected}
                genreItems={genreItems}
              />
            </div>
            <span className="singleMovieTitle">Genre : {genreSelected}</span>
            <div className="singleMovieListContainer">
              {genreItems.map((genreItem, i) => (
                <SingleMovie index={i} key={i} genreItem={genreItem} />
              ))}
            </div>
            <Timer />
            <Footer />
          </div>
        </>
      ) : (
        <>
          <div className="home">
            <Navbar setSearchResult={setSearchResult} />
            <Featured
              setGenreSelected={setGenreSelected}
              genreItems={genreItems}
              categoryItems={categoryItems}
            />
            {path && (
              <span className="singleMovieTitle">Category : {path}</span>
            )}

            {path ? (
              <div className="singleMovieListContainer">
                {categoryItems.map((categoryItem, i) => (
                  <SingleMovie index={i} key={i} categoryItem={categoryItem} />
                ))}
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
