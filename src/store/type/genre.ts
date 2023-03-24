export interface GenreState {
  genres: any[];
  loading: boolean;
  error: null | string;
}

export enum GenresActionTypes {
  FETCH_GENRES = 'FETCH_GENRES',
  FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS',
  FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR',
}

interface FetchGenresAction {
  type: GenresActionTypes.FETCH_GENRES;
}

interface FetchGenresSuccessAction {
  type: GenresActionTypes.FETCH_GENRES_SUCCESS;
  payload: any[];
}

interface FetchGenresErrorAction {
  type: GenresActionTypes.FETCH_GENRES_ERROR;
  payload: string;
}


export type GenreAction =
  FetchGenresAction
  | FetchGenresSuccessAction
  | FetchGenresErrorAction
