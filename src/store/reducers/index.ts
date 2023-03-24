import { combineReducers } from "redux";
import { movieReducer } from "./moviesReducer";
import { genreReducer } from "./genresReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer
})

export type RootState = ReturnType<typeof rootReducer>