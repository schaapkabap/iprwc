import {Component, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';
import {AuthenicationService} from '../../services/authenication.service';
import {Auth} from '../../models/auth.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total: number;
  @Input() user: User;

  constructor(private cart: CartService,
              private authService: AuthenicationService) {
  }

  ngOnInit() {
    this.cart.getWinkelwagen().subscribe(data => {
      this.total = data.length;
    });
    this.authService.currentObserverUser().subscribe(data => {
      if (data == null) {
        this.user = new User();
      } else {
        this.user = data;
      }
    });

  }
}
