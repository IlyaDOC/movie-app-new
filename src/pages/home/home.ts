import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {MovieCard} from '@widgets/movie-card';
import {Store} from '@ngrx/store';
import {loadMoviesPremiers, selectMoviesPremiers} from '@shared/store/features/movies';
import {toSignal} from '@angular/core/rxjs-interop';
import {loadNews, selectNews} from '@shared/store';
import {NewsCard} from '@widgets/news-card';


@Component({
  selector: 'app-home',
  imports: [
    MovieCard,
    NewsCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements OnInit {
  private store: Store = inject(Store);
  public moviesPremiers = toSignal(this.store.select(selectMoviesPremiers));
  public news = toSignal(this.store.select(selectNews));

  ngOnInit() {
    this.store.dispatch(loadMoviesPremiers());
    this.store.dispatch(loadNews());
  }
}
