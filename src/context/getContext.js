import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

//context
const AllMoviesSeriesContext = createContext();

//context provider
export function AllMoviesSeriesContextProvider({ children }) {
  const [allSeriesMovies, setAllSeriesMovies] = useState([]);
  useEffect(() => {
    const fetchAllMoviesAndSeries = async () => {
      try {
        const res = await axios.get("/movies/all");
        setAllSeriesMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMoviesAndSeries();
  }, []);
//   console.log(allSeriesMovies);

  return (
    <AllMoviesSeriesContext.Provider
      value={{
        allSeriesMovies
      }}
    >
      {children}
    </AllMoviesSeriesContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(AllMoviesSeriesContextProvider);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
