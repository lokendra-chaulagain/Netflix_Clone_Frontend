import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const Home = ({ type }) => {

  const [lists, setLists] = useState([])
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type && "?type=" + type}`)

      } catch (error) {
        console.log(error);
      }



    }

  })


  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
