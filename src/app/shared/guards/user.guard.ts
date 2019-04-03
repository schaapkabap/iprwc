import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {User} from '../models/user.model';
import {Auth} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  private user: Auth;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('authenticated_user')) {
      this.user = JSON.parse(localStorage.getItem('authenticated_user'));

      if (this.user.user.username === 'admin') {
        return true;
      }
    }

    this.router.navigate(['/app/login'], {queryParams: {url: state.url}});
    return false;
  }
}
