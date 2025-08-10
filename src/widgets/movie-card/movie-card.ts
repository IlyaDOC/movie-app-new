import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MoviesPremiersItemType} from '@entities/movies/movies.types';

@Component({
  selector: 'app-movie-card',
  imports: [
    RouterLink,
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
  standalone: true,
})
export class MovieCard {
  movie = input.required<MoviesPremiersItemType>();
}
