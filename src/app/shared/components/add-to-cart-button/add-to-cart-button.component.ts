import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.sass']
})
export class AddToCartButtonComponent implements OnInit {

  @Input() product: Product;

  constructor(private cart: CartService) {
  }

  ngOnInit() {
  }


  @HostListener('click') onClick() {
    this.cart.addProduct(this.product);
  }

}
