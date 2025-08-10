import {HttpInterceptorFn} from '@angular/common/http';
import {environment} from '../../environments/environment.development';

const apiKey = environment.API_KEY;

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  if (apiKey) {
    const cloneReq = req.clone({
      headers: req.headers
        .set('Accept', 'application/json')
        .set('X-API-KEY', apiKey)
    });

    return next(cloneReq);
  }

  return next(req);
};
