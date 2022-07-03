const MovieReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_MOVIE_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_MOVIE_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;
