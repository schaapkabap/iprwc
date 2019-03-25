import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];
  private total = new BehaviorSubject<Product[]>(this.products);
  private singleProducts = new BehaviorSubject<Product[]>(this.products);

  totaalprijs: number;


  constructor() {
    if (localStorage.getItem('winkelwagen') == null) {
      localStorage.setItem('winkelwagen', JSON.stringify(this.products));
    }
    this.products = JSON.parse(localStorage.getItem('winkelwagen'));
    this.updateCart();

  }

  addProduct(p: Product) {
    this.products.push(p);
    localStorage.setItem('winkelwagen', JSON.stringify(this.products));
    this.updateCart();
  }

  deleteProduct(p: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === p.id) {
        this.products.splice(i, 1);
        localStorage.setItem('winkelwagen', JSON.stringify(this.products));
        break;
      }
    }
    this.updateCart();


  }

  getSingleProducts(): Observable<Product[]> {
    return this.singleProducts;

  }

  // gettotaal(): Observable<number> {
  //   this.totaalprijs = 0;
  //   this.products.forEach((item, index) => {
  //     this.totaalprijs += item.price;
  //   });
  //   console.log(this.totaalprijs);
  //   return of(this.totaalprijs);
  // }

  private searchSingleProducts(products: Product[]) {

    const singleProducts: Product[] = [];
    for (let i = 0; i < products.length; i++) {
      let k = true;
      for (let j = 0; j < singleProducts.length; j++) {
        if (products[i].id === singleProducts[j].id) {
          k = false;
        }
      }
      if (k) {
        singleProducts.push(products[i]);
      }

    }
    return singleProducts;
  }

  getWinkelwagen(): Observable<Product[]> {
    return this.total;
  }


  private updateCart() {
    this.total.next(this.products);
    this.singleProducts.next(this.searchSingleProducts(this.products));
  }
}
