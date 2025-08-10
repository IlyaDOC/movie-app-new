import {moviesPremiersReducer, MoviesPremiersState} from '@shared/store/features/movies/movies.reducer';
import {movieReducer, MovieState} from '@shared/store/features/movie';

export interface AppState {
  moviesPremiers: MoviesPremiersState;
  movie: MovieState;
}

export const appReducers = {
  moviesPremiers: moviesPremiersReducer,
  movie: movieReducer
}
