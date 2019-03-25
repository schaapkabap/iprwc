import {Component, OnInit} from '@angular/core';
import {CartService} from '../../shared/services/cart.service';
import {Product} from '../../shared/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: ['./card.component.sass']
})
export class CartComponent implements OnInit {

  private products: Product [] = [];

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.cart.getWinkelwagen().subscribe(data => {
      this.products = data;
    });

  }

}
