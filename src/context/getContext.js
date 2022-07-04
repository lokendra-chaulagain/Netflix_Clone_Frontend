import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

//context
const AllSeriesMoviesContext = createContext();

//context provider
export function AllSeriesMoviesContextProvider({ children }) {
  const [allAdventure, setAllAdventure] = useState([]);
  const [allHorror, setAllHorror] = useState([]);
  const [allDocumentary, setAllDocumentary] = useState([]);
  const [allAnimation, setAllAnimation] = useState([]);
  const [allScienceFiction, setAllScienceFiction] = useState([]);
  const [allCrime, setAllCrime] = useState([]);
  const [allThriller, setAllThriller] = useState([]);
  const [allRomance, setAllRomance] = useState([]);

  useEffect(() => {
    const fetchAllMoviesSeries = async () => {
      try {
        const res1 = await axios.get("/movies/genre/Adventure");
        setAllAdventure(res1.data);

        const res2 = await axios.get("/movies/genre/Horror");
        setAllHorror(res2.data);

        const res3 = await axios.get("/movies/genre/Documentary");
        setAllDocumentary(res3.data);

        const res4 = await axios.get("/movies/genre/Animation");
        setAllAnimation(res4.data);

        const re5 = await axios.get("/movies/genre/Science-Fiction");
        setAllScienceFiction(re5.data);

        const res6 = await axios.get("/movies/genre/Crime");
        setAllCrime(res6.data);

        const res7 = await axios.get("/movies/genre/Thriller");
        setAllThriller(res7.data);

        const res8 = await axios.get("/movies/genre/Romance");
        setAllRomance(res8.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMoviesSeries();
  }, []);

  return (
    <AllSeriesMoviesContext.Provider
      value={{
        allAdventure,
        allHorror,
        allDocumentary,
        allAnimation,
        allScienceFiction,
        allCrime,
        allThriller,
        allRomance,
      }}
    >
      {children}
    </AllSeriesMoviesContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(AllSeriesMoviesContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
