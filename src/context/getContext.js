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
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMoviesSeries();
  }, []);
  console.log(allAnimation);

  return (
    <AllSeriesMoviesContext.Provider
      value={{
        allAdventure,
        allHorror,
        allDocumentary,
        allAnimation,
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
