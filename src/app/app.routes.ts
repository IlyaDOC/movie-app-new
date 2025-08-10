import { Routes } from '@angular/router';
import {Home} from '@pages/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('@pages/movie').then(m => m.Movie),
  }
];
