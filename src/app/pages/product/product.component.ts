import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CartService} from '../../shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  private sub: any;
  products: Product[];

  constructor(private productService: ProductService,
              private http: HttpClient,
              private cart: CartService) {
  }

  ngOnInit() {
    this.products = Array<Product>();
    console.log(this.cart.getWinkelwagen().subscribe(data => {
console.log(data);
    }));
    this.productService.getAll().subscribe(data => this.products = data);
  }

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }

}
