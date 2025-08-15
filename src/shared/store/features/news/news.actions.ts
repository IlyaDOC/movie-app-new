import {createAction, props} from '@ngrx/store';
import {NewsItemsType} from '@entities/news/news.types';

export const loadNews = createAction('[News] Load News');
export const loadNewsSuccess = createAction('[News] Load News Success',
  props<{ news: NewsItemsType }>()
);
export const loadNewsError = createAction('[News] Load News Error',
  props<{ error: string | null }>()
);
