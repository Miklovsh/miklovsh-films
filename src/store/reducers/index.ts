import { combineReducers } from "redux";
import { movieReducer } from "./moviesReducer";
import { genreReducer } from "./genresReducer";
import { recommendationReducer } from "./recommendationsReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
  recommendations: recommendationReducer
})

export type RootState = ReturnType<typeof rootReducer>