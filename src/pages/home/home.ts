import {Component, inject, OnInit} from '@angular/core';;
import {MovieCard} from '@widgets/movie-card';
import {Store} from '@ngrx/store';
import {loadMoviesPremiers, selectMoviesPremiers} from '@shared/store/features/movies';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [
    MovieCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home implements OnInit {
  private store: Store = inject(Store);
  public moviesPremiers = toSignal(this.store.select(selectMoviesPremiers));

  ngOnInit() {
    this.store.dispatch(loadMoviesPremiers());
  }
}
