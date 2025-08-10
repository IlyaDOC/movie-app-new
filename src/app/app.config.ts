import {provideEventPlugins} from "@taiga-ui/event-plugins";
import {provideAnimations} from "@angular/platform-browser/animations";
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  isDevMode
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Material from '@primeuix/themes/material';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {requestInterceptor} from './interceptors/request-interceptor';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {appReducers} from '../app.state';
import {MoviesEffects} from '@shared/store/features/movies/movies.effects';
import {MovieEffects} from '@shared/store/features/movie';


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideEventPlugins(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Material
      }
    }),
    provideHttpClient(withInterceptors([
      requestInterceptor,
    ])),
    provideStore(appReducers),
    provideEffects([MoviesEffects, MovieEffects]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})
  ]
};
