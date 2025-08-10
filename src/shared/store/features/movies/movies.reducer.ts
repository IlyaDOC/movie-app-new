import {MoviesPremiersListItemsType} from '@entities/movies/movies.types';
import {createReducer, on} from '@ngrx/store';
import * as MoviesPremiersActions from './movies.actions'

export interface MoviesPremiersState {
  moviesPremiers: MoviesPremiersListItemsType;
  loading: boolean;
  error: string | null;
}

export const moviesPremiersInitialState: MoviesPremiersState = {
  moviesPremiers: {
    total: 0,
    totalPages: 0,
    items: []
  },
  loading: false,
  error: null
}

export const moviesPremiersReducer = createReducer(
  moviesPremiersInitialState,
  on(MoviesPremiersActions.loadMoviesPremiers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MoviesPremiersActions.loadMoviesPremiersSuccess, (state, {moviesPremiers}) => ({
    ...state,
    moviesPremiers,
    loading: false,
    error: null,
  })),
  on(MoviesPremiersActions.loadMoviesPremiersError, (state, {error}) => ({
    ...state,
    loading: false,
    error: error,
  }))
)
