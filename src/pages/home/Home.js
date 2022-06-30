import axios from "axios";
import React, { useEffect, useState } from "react";
import Adventure from "../../components/adventure/Adventure";
import Animation from "../../components/animation/Animation";
import Crime from "../../components/crime/Crime";
import Documentary from "../../components/documentary/Documentary";
import Drama from "../../components/drama/Drama";
import Featured from "../../components/featured/Featured";
import Horror from "../../components/horror/Horror";
import Navbar from "../../components/navbar/Navbar";
import Romance from "../../components/romance/Romance";
import ScienceFiction from "../../components/scienceFiction/ScienceFiction";
import Thriller from "../../components/thriller/Thriller";
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

  return (
    <div className="home">
      <Navbar />
      <Featured setGenreSelected={setGenreSelected} />
      <Adventure />
      <Crime />
      <Horror />
      <Romance />
      <ScienceFiction />
      <Thriller />
      <Animation />
      <Drama />
      <Documentary />
    </div>
  );
};

export default Home;
