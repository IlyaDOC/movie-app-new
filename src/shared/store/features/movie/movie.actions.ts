import {createAction, props} from '@ngrx/store';
import {MovieType} from '@entities/movies/movies.types';

// Загрузка страницы фильма
export const loadMovie = createAction('[Movies] Load Movie',
  props<{id: number}>()
);
export const loadMovieSuccess = createAction('[Movies] Load Movie Success',
  props<{ movie: MovieType }>()
)
export const loadMovieError = createAction('[Movies] Load Movie Error',
  props<{ error: string | null }>()
);
