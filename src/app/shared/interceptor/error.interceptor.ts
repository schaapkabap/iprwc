import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenicationService } from '../services/authenication.service';
import { ErrorInterceptorSkipHeader } from './skip.error.interceptor';


@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenicationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has(ErrorInterceptorSkipHeader)) {
      const headers = request.headers.delete(ErrorInterceptorSkipHeader);
      return next.handle(request.clone({ headers }));
    }

    return next.handle(request).pipe(catchError(err => {

      if (err.status === 401) {
        // Logout
        this.auth.logout();
        location.reload();
      }

      return throwError(err.error.message || err.statusText);
    }));
  }
}
