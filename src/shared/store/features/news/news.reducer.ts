import {NewsItemsType} from '@entities/news/news.types';
import {createReducer, on} from '@ngrx/store';
import * as NewsActions from './news.actions'

export interface NewsState {
  news: NewsItemsType;
  loading: boolean;
  error: string | null;
}

export const newsInitialState: NewsState = {
  news: {
    total: 0,
    totalPages: 0,
    items: []
  },
  loading: false,
  error: null,
}

export const newsReducer = createReducer(
  newsInitialState,
  on(NewsActions.loadNews, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(NewsActions.loadNewsSuccess, (state, {news}) => ({
    ...state,
    news,
    loading: false,
    error: null,
  })),
  on(NewsActions.loadNewsError, (state, {error}) => ({
    ...state,
    loading: false,
    error: error,
  }))
)
