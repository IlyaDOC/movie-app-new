import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MovieState} from '@shared/store/features/movie/movie.reducer';

export const selectMovieState = createFeatureSelector<MovieState>('movie');

export const selectMovie = createSelector(
  selectMovieState,
  (state) => state.movie,
);

export const selectMoviesLoading = createSelector(
  selectMovieState,
  (state) => state.loading
);

export const selectMovieError = createSelector(
  selectMovieState,
  (state) => state.error
)
