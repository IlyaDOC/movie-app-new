import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewsItemsType} from '@entities/news/news.types';
import {ErrorResponseType} from '@entities/errors/error-response.type';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewsAPI {
  private http: HttpClient = inject(HttpClient);

  getNews():Observable<NewsItemsType | ErrorResponseType> {
    return this.http.get<NewsItemsType | ErrorResponseType>(environment.API_URL + 'v1/media_posts', {
      params: {

      }
    })
  }
}
