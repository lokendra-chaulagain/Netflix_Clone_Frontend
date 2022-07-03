import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
} from "./MovieActions";

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("movies/create", movie);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};
