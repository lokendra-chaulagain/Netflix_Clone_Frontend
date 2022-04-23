import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const Home = ({ type }) => {

  //for getting any random lists with query
  const [lists, setLists] = useState([])
  const [genere, setGenere] = useState('')

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists ${type ? "?type=" + type : " "}${genere ? "&genere=" + genere : " "}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
          }
        }
        )
        // console.log(res.data)
        setLists(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  }, [type, genere])


  //




  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
