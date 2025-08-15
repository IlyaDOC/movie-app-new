import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NewsState} from '@shared/store';

export const selectNewsState = createFeatureSelector<NewsState>('news');

export const selectNews = createSelector(
  selectNewsState,
  (state) => state.news
);

export const selectNewsLoading = createSelector(
  selectNewsState,
  (state) => state.loading
);

export const selectNewsSuccess = createSelector(
  selectNewsState,
  (state) => state.error
)

