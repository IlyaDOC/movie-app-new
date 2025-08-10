import {createAction, props} from '@ngrx/store';
import {MoviesPremiersListItemsType} from '@entities/movies/movies.types';


// Загрузка кинопремьер на главной
export const loadMoviesPremiers = createAction('[Movies] Load Movies Premiers');
export const loadMoviesPremiersSuccess = createAction('[Movies] Load Movies Premiers Success',
  props<{ moviesPremiers: MoviesPremiersListItemsType }>()
);
export const loadMoviesPremiersError = createAction('[Movies] Load Movies Premiers Error',
  props<{ error: string | null }>()
);

