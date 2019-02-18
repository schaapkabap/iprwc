import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BasicAuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authenticatedUser = JSON.parse(localStorage.getItem('authenticated_user'));
    if (authenticatedUser && authenticatedUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${authenticatedUser.token}`
        }
      });
    }

    return next.handle(request);
  }

}
