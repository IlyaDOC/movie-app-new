import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MoviesApi} from '@shared/api';
import * as MovieActions from "./movie.actions"
import {catchError, map, mergeMap, of} from 'rxjs';
import {MovieType} from '@entities/movies/movies.types';
import {ErrorResponseType} from '@entities/errors/error-response.type';

@Injectable()
export class MovieEffects {
  private actions$: Actions = inject(Actions);
  private moviesApi: MoviesApi = inject(MoviesApi);

  loadMovie = createEffect(()=>
    this.actions$.pipe(
      ofType(MovieActions.loadMovie),
      mergeMap(({id})=> {
        return this.moviesApi.getMovie(id).pipe(
          map((data: MovieType | ErrorResponseType) => {
            if ((data as ErrorResponseType).message) {
              throw new Error((data as ErrorResponseType).message);
            }

            return MovieActions.loadMovieSuccess({movie: data as MovieType});
          }),
          catchError(error => of(MovieActions.loadMovieError({error: error.message})))
        )
      })
    )
  )
}
