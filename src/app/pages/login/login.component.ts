import {Component, OnInit} from '@angular/core';
import {AuthenicationService} from 'src/app/shared/services/authenication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-inlog',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public error = '';
  public url = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Always logout the previous user
    this.auth.logout();

    // Setup route
    this.url = this.route.snapshot.queryParams['url'] || '/app/product';
  }

  onLogin() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.auth.login(
      this.form.controls.username.value,
      this.form.controls.password.value
    ).subscribe(
      data => {
        if (this.form.controls.username.value === 'admin') {
          this.router.navigate(['app/admin-panel']);
        } else {
          this.router.navigate([this.url]);
        }

      },
      error => {
        console.error(error);
        this.error = 'Er bestaat geen gebruiker met de ingevulde gegevens.';
        this.loading = false;
      }
    );
  }
}
