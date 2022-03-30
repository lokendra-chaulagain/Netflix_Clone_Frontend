import React from "react";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <Featured  type="seriees"/> */}
      <Featured  type="seriees"/>


    </div>
  );
};

export default Home;
