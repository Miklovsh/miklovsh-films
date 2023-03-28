import axios from "axios";
import { Dispatch } from "react";
import { MovieAction, MoviesActionTypes } from "../type/movie";


export const fetchMovies = (page = 1): any => {
  return async (dispatch: Dispatch<MovieAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES })
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ebddff987af3641a51115c7e7984a474&language=uk-UA&page=${page}`, {
        params: { _page: page }
      })
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: response.data.results.slice(0, 9) })
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'Виникла помилка при завантажені списку з фільмами!'
      })
    }
  }
}

export function SetMoviesPage(page: number): MovieAction {
  return { type: MoviesActionTypes.SET_MOVIES_PAGE, payload: page }
}