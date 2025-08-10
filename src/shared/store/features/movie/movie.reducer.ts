import {MovieType} from '@entities/movies/movies.types';
import * as MovieActions from './movie.actions'
import {createReducer, on} from '@ngrx/store';

export interface MovieState {
  movie: MovieType,
  loading: boolean,
  error: string | null,
}

export const movieInitialState: MovieState = {
  movie: {
    kinopoiskId: 0,
    kinopoiskHDId: '',
    imdbId: '',
    nameRu: '',
    nameEn: '',
    nameOriginal: '',
    posterUrl: '',
    posterUrlPreview: '',
    coverUrl: '',
    logoUrl: '',
    reviewsCount: 0,
    ratingGoodReview: 0,
    ratingGoodReviewVoteCount: 0,
    ratingKinopoisk: 0,
    ratingKinopoiskVoteCount: 0,
    ratingImdb: 0,
    ratingImdbVoteCount: 0,
    ratingFilmCritics: 0,
    ratingFilmCriticsVoteCount: 0,
    ratingAwait: 0,
    ratingAwaitCount: 0,
    ratingRfCritics: 0,
    ratingRfCriticsVoteCount: 0,
    webUrl: '',
    year: 0,
    filmLength: 0,
    slogan: '',
    description: '',
    shortDescription: '',
    editorAnnotation: '',
    isTicketsAvailable: false,
    productionStatus: '',
    type: '',
    ratingMpaa: '',
    ratingAgeLimits: '',
    hasImax: false,
    has3D: false,
    lastSync: '',
    countries: [
      {
        country: ''
      }
    ],
    genres: [
      {
        genre: ''
      }
    ],
    startYear: 0,
    endYear: 0,
    serial: false,
    shortFilm: false,
    completed: false
  },
  loading: false,
  error: null
}

export const movieReducer = createReducer(
  movieInitialState,
  on(MovieActions.loadMovie, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.loadMovieSuccess, (state, {movie})=> ({
    ...state,
    movie,
    loading: false,
    error: null,
  })),
  on(MovieActions.loadMovieError, (state, {error})=> ({
    ...state,
    loading: false,
    error: error,
  }))
)


