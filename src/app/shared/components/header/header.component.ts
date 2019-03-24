import {Component, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() total: number;

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.cart.getWinkelwagen().subscribe(data => {
      this.total = data.length;
    });

  }
}
