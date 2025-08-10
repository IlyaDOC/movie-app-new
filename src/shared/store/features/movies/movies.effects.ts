import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MoviesApi} from '@shared/api';
import * as MoviesPremiersActions from './movies.actions'
import {catchError, map, mergeMap, of} from 'rxjs';
import {getActualYear} from '../../../../app/utils/getActualYear';
import {getActualMonth} from '../../../../app/utils/getActualMonth';
import {MoviesPremiersListItemsType} from '@entities/movies/movies.types';
import {ErrorResponseType} from '@entities/errors/error-response.type';


@Injectable()
export class MoviesEffects {
  private actions$: Actions = inject(Actions);
  private moviesApi: MoviesApi = inject(MoviesApi);
  private actualMonth = getActualMonth();
  private actualYear = getActualYear();

  loadMoviesPremiers = createEffect(()=>
    this.actions$.pipe(
      ofType(MoviesPremiersActions.loadMoviesPremiers),
      mergeMap(()=> {
        return this.moviesApi.getMoviesPremiers(this.actualYear, this.actualMonth).pipe(
          map((data: MoviesPremiersListItemsType | ErrorResponseType) => {
            if ((data as ErrorResponseType).message) {
              throw new Error((data as ErrorResponseType).message);
            }
            return MoviesPremiersActions.loadMoviesPremiersSuccess({moviesPremiers: data as MoviesPremiersListItemsType})
          }),
          catchError(error => of(MoviesPremiersActions.loadMoviesPremiersError({error: error.message})))
        )
      })
    )
  )
}

