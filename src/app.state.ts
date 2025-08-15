import {
  movieReducer,
  moviesPremiersReducer,
  MoviesPremiersState,
  MovieState,
  newsReducer,
  NewsState
} from '@shared/store';

export interface AppState {
  moviesPremiers: MoviesPremiersState;
  movie: MovieState;
  news: NewsState;
}

export const appReducers = {
  moviesPremiers: moviesPremiersReducer,
  movie: movieReducer,
  news: newsReducer,
}
