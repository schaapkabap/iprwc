import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-to-cart-button',
  template: '<button class="card-link btn btn-info">Add to Cart</button>',
  styleUrls: ['./add-to-cart-button.component.sass']
})
export class AddToCartButtonComponent implements OnInit {

  @Input() product: Product;

  constructor(private cart: CartService,
              private router: Router) {
  }

  ngOnInit() {
  }


  @HostListener('click') onClick() {
    this.cart.addProduct(this.product);
    this.router.navigate(['/app/cart']);
  }

}
