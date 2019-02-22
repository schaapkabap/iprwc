import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenicationService} from '../../shared/services/authenication.service';

@Component({
  selector: 'app-logout',
  template: ' ',
  styles: [' ']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthenicationService, private route: Router) {
  }

  ngOnInit() {
    this.auth.logout();
    this.route.navigate(['app/login']);

  }

}
