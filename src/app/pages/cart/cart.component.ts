import {Component, OnInit, Output} from '@angular/core';
import {CartService} from '../../shared/services/cart.service';
import {Product} from '../../shared/models/product.model';
import {forEach} from '@angular/router/src/utils/collection';
import {isCombinedNodeFlagSet} from 'tslint';

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: ['./card.component.sass']
})
export class CartComponent implements OnInit {

  public products: Product [] = [];
  public singleProducts: Product[] = [];
  @Output() total;

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.cart.getWinkelwagen().subscribe(data => {
      this.products = data;
      console.log(this.products.length);
    });

    this.cart.getSingleProducts().subscribe(data => {
      this.singleProducts = data;
      this.total = this.counTotal();
      console.log(data);
    });


  }

  getTotal(product: Product) {
    let singleProducts: Product[];

    singleProducts = this.products.filter(singleProduct => (
      product.id === singleProduct.id
    ));
    return singleProducts.length;
  }
  counTotal(): number {
    let total: number;
    total = 0;
    for (const product of this.products) {
      total = total + product.price;
    }
    return total;
  }

  removeProductOfCart(product: Product) {
    this.cart.deleteProduct(product);
  }

  addProductToCart(product: Product) {
    this.cart.addProduct(product);
  }


}
