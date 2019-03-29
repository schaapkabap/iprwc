import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  update(user: any): Observable<Object> {
    return this.http.put(environment.apiHostname + 'users/me', user);
  }
  save(user: any): Observable<Object> {
    return this.http.post(environment.apiHostname + 'users', user);

  }

}
