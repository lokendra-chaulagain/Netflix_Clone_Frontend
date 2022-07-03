
  
  export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
  });
  
  export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
  });
  
  export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
  });
  
  