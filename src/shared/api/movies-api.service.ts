import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MoviesPremiersListItemsType, MovieType} from '@entities/movies/movies.types';
import {ErrorResponseType} from '@entities/errors/error-response.type';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPI {
  private http: HttpClient = inject(HttpClient);

  getMoviesPremiers(year: number, month: string): Observable<MoviesPremiersListItemsType | ErrorResponseType> {
    return this.http.get<MoviesPremiersListItemsType | ErrorResponseType>(environment.API_URL + 'v2.2/films/premieres', {
      params: {
        year,
        month,
      }
    });
  };

  getMovie(id: number): Observable<MovieType | ErrorResponseType> {
    return this.http.get<MovieType | ErrorResponseType>(environment.API_URL + 'v2.2/films/' + id);
  }
}
