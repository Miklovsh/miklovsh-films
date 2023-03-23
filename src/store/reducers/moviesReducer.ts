import { MovieAction, MoviesActionTypes, MovieState } from "../type/movie"

const initialState: MovieState = {
  movies: [],
  page: 1,
  loading: false,
  error: null
}

export const movieReducer = (state = initialState, action: MovieAction): MovieState => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES:
      return { ...state, loading: true }
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload }
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload }
    case MoviesActionTypes.SET_MOVIES_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}