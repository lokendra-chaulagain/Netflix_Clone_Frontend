import React from "react";
import Animation from "../../components/animation/Animation";

import Crime from "../../components/crime/Crime";
import Documentary from "../../components/documentary/Documentary";
import Drama from "../../components/drama/Drama";
import Featured from "../../components/featured/Featured";
import Horror from "../../components/horror/Horror";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Romance from "../../components/romance/Romance";
import ScienceFiction from "../../components/scienceFiction/ScienceFiction";
import Thriller from "../../components/thriller/Thriller";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
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
