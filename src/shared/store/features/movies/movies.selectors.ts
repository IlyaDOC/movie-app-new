import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesPremiersState } from './movies.reducer';

export const selectMoviesPremiersState = createFeatureSelector<MoviesPremiersState>('moviesPremiers');

export const selectMoviesPremiers = createSelector(
  selectMoviesPremiersState,
  (state) => state.moviesPremiers
);

export const selectMoviesPremiersLoading = createSelector(
  selectMoviesPremiersState,
  (state) => state.loading
);

export const selectMoviesPremiersError = createSelector(
  selectMoviesPremiersState,
  (state) => state.error
);
