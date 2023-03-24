import axios from "axios";
import { Dispatch } from "react";
import { GenreAction, GenresActionTypes } from "../type/genre";

export const fetchGenres = (): any => {
  return async (dispatch: Dispatch<GenreAction>) => {
    try {
      dispatch({ type: GenresActionTypes.FETCH_GENRES })
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ebddff987af3641a51115c7e7984a474&language=en-US')
      dispatch({ type: GenresActionTypes.FETCH_GENRES_SUCCESS, payload: response.data.genres })
      console.log(response.data.genres);
    } catch (e) {
      dispatch({
        type: GenresActionTypes.FETCH_GENRES_ERROR,
        payload: 'Виникла помилка при завантажені!'
      })
    }
  }
}

