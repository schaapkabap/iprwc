import {Component, OnInit} from '@angular/core';
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

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.cart.getWinkelwagen().subscribe(data => {
      this.products = data;
      console.log(this.products.length);
    });

    this.cart.getSingleProducts().subscribe(data => {
      this.singleProducts = data;
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

  removeProductOfCart(product: Product) {
    this.cart.deleteProduct(product);
  }

  addProductToCart(product: Product) {
    this.cart.addProduct(product);
  }


}
