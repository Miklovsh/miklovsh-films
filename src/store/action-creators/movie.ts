import axios from "axios";
import { Dispatch } from "react";
import { MovieAction, MoviesActionTypes } from "../type/movie";


export const fetchMovies = (): any => {
  return async (dispatch: Dispatch<MovieAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES })
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ebddff987af3641a51115c7e7984a474&language=en-US&page=1')
      setTimeout(() => {
        dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: response.data.results })
        console.log(response.data)
      }, 500)
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'Виникла помилка при завантажені користувачів!'
      })

    }
  }
}