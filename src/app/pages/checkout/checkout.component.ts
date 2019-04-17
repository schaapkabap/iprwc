import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../shared/services/cart.service';
import {FormGroup, NgForm} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {AuthenicationService} from '../../shared/services/authenication.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup;
  user: any;

  constructor(private router: Router,
              private cart: CartService,
              private authService: AuthenicationService) { }

  ngOnInit() {
    this.user = <any> this.authService.currentUser;

  }

  onSubmit(f: NgForm) {


    this.router.navigate(['/']);
  }
}
