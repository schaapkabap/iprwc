import {Component, HostListener, Input, OnInit, Output} from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthenicationService} from '../../services/authenication.service';

@Component({
  selector: 'app-settings-button',
  template: '<li class="nav-item"><a class="cursor nav-link">Profiel</a></li>',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent implements OnInit {
  @Input() path: String = '';

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthenicationService) {
  }

  ngOnInit() {
  }

  @HostListener('click') onClick() {
    const user = this.authService.currentUser;
    if (user.username === 'admin') {
      this.router.navigate(['/app/admin-panel']);
    }
    if (user != null) {
      this.router.navigate(['/app/profile']);
    }
  }

}
