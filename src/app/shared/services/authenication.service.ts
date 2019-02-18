import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenicationService {

  user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    if (!localStorage.getItem('authenticated_user')) {
      return;
    }

    const auth: Auth = JSON.parse(localStorage.getItem('authenticated_user'));
    this.user.next(auth.user);
  }

  login(username: string, password: string): any {

    const body = new FormData();
    body.append('username', username);
    body.append('password', password);

    return this.http.post<User>(environment.apiHostname + 'auth/login', body).pipe(map(data => {
      const auth = new Auth();
      const user = <User> data;

      if (user) {
        auth.user = user;
        auth.token = User.generateToken(username, password);

        this.user.next(auth.user);
        localStorage.setItem('authenticated_user', JSON.stringify(auth));
      }

      return user;
    }));
  }

  get currentUser(): User {
    return this.user.getValue();
  }

  logout() {
    localStorage.removeItem('authenticated_user');
  }
}
