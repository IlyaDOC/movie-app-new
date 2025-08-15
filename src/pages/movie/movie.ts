import {Component, inject, OnInit, Signal} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {loadMovie, selectMovie} from '@shared/store';
import {toSignal} from '@angular/core/rxjs-interop';
import {MovieType} from '@entities/movies/movies.types';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.html',
  styleUrl: './movie.scss',
  standalone: true
})
export class Movie implements OnInit {
  private store: Store = inject(Store);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public movie: Signal<MovieType | null> = toSignal(this.store.select(selectMovie), {initialValue: null});

  ngOnInit() {
    const movieId: number = Number(this.activatedRoute.snapshot.params['id']);
    this.store.dispatch(loadMovie({id: movieId}));
  }
}
