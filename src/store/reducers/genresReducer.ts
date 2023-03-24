import { GenreAction, GenresActionTypes, GenreState } from "../type/genre"

const initialState: GenreState = {
  genres: [],
  loading: false,
  error: null
}

export const genreReducer = (state = initialState, action: GenreAction): GenreState => {
  switch (action.type) {
    case GenresActionTypes.FETCH_GENRES:
      return { ...state, loading: true }
    case GenresActionTypes.FETCH_GENRES_SUCCESS:
      return { ...state, loading: false, genres: action.payload }
    case GenresActionTypes.FETCH_GENRES_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}