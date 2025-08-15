import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {NewsAPI} from '@shared/api/news-api.service';
import * as NewsActions from './news.actions'
import {catchError, map, mergeMap, of} from 'rxjs';
import {NewsItemsType} from '@entities/news/news.types';
import {ErrorResponseType} from '@entities/errors/error-response.type';

@Injectable()
export class NewsEffects {
  private actions$: Actions = inject(Actions);
  private newsAPI: NewsAPI = inject(NewsAPI);


  loadNews = createEffect(()=>
    this.actions$.pipe(
      ofType(NewsActions.loadNews),
      mergeMap(()=> {
        return this.newsAPI.getNews().pipe(
          map((data: NewsItemsType | ErrorResponseType)=> {
            if ((data as ErrorResponseType).message) {
              throw new Error((data as ErrorResponseType).message);
            }

            return NewsActions.loadNewsSuccess({news: data as NewsItemsType});
          }),
          catchError(error => of(NewsActions.loadNewsError({error: error})))
        )
      })
    )
  )
}
