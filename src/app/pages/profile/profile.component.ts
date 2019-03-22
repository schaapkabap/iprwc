import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {AuthenicationService} from '../../shared/services/authenication.service';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  form: FormGroup;

  constructor(
    private authService: AuthenicationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = <any> this.authService.currentUser;

  }

  onSubmit(f: NgForm) {

    let valid = true;

    if (this.user.password.length !== 0 && this.user.password.length <= 5) {
      valid = false;
      alert('Uw wachtwoord voldoet niet aan de minimale lengte.');
    }

    if (f.form.valid && valid) {

      this.userService.update(this.user).subscribe(() => {

        // Login again
        this.authService.login(this.user.username, this.user.password).subscribe(() => {
          this.router.navigate(['/']);
        });
      });

    }
  }

}
