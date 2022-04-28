import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useState, useEffect } from "react";
import axios from "axios";



const Home = ({ type }) => {
  //we created type props here to pass it to featured component to determine whether it is movie page or series page




  //FETCHING RANDOM LISTS FOR HORIZONTAL SCROLLING=========================================================
  const [lists, setLists] = useState([]) //empty array for initial state
  const [genere, setGenere] = useState(null)
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists ${type ? "?type=" + type : " "}${genere ? "&genere=" + genere : " "}`,

          //json web token is sent to the server to verify the user
          //we have not login yet so we have to send token for the verification
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
            }
          }
        )

        console.log(res.data);
        setLists(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  }, [genere, type])//whenever we change type or genere it will call useEffect and get random lists
  //===========================================================================================================






  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />      {/* passing the type props here  lets manege route in app.js*/}

      {lists.map((list, key) => (
        <List key={key} list={list} />   //passing list as props to list component 
      ))}

    </div>
  );
};

export default Home;
