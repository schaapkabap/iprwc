import {Component, OnInit} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {AuthenicationService} from '../../shared/services/authenication.service';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;
  public form: FormGroup;

  constructor(private authService: AuthenicationService,
              private userService: UserService,
              ) {
  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(f: NgForm) {
    console.log(this.user);
    this.userService.save(this.user).subscribe();
  }
}
