import axios from "axios";
import { Dispatch } from "react";
import { RecommendationAction, RecommendationsActionTypes } from "../type/recommendation";

export const fetchRecommendations = (): any => {
  return async (dispatch: Dispatch<RecommendationAction>) => {
    try {
      dispatch({ type: RecommendationsActionTypes.FETCH_RECOMMENDATIONS })
      const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=ebddff987af3641a51115c7e7984a474&language=en-US&page=1')
      dispatch({ type: RecommendationsActionTypes.FETCH_RECOMMENDATIONS_SUCCESS, payload: response.data.results.slice(0, 10) })
      console.log(response.data.results);
    } catch (e) {
      dispatch({
        type: RecommendationsActionTypes.FETCH_RECOMMENDATIONS_ERROR,
        payload: 'Виникла помилка при завантажені!'
      })
    }
  }
}