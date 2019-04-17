import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../shared/services/cart.service';
import {FormGroup, NgForm} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {AuthenicationService} from '../../shared/services/authenication.service';
import {Button} from 'selenium-webdriver';
declare let paypal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router,
              private cart: CartService,
              private authService: AuthenicationService) { }

  form: FormGroup;
  user: any;
  addScript = false;
  paypalLoad = true;

  finalAmount = 1;


  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AZfI7nsbGOZv_A1ZzWE-hnT1vnt3cSB6Q3bNzE2gP1RIpuf5-ojCe_w60zDl-Nthw1emP5Pc8CpofMzV',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: { total: '1.00', currency: 'USD' }
            }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // Do something when payment is successful.
      });
    }
  };

  ngOnInit() {
    this.user = <any> this.authService.currentUser;

  }

  onSubmit(f: NgForm) {


    this.router.navigate(['/']);
  }

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      });
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }
}
