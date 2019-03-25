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
  totaalprijs: number;


  constructor() {

    this.products = JSON.parse(localStorage.getItem('winkelwagen'));
    this.total.next(this.products);
  }

  addProduct(p: Product) {
    this.products.push(p);
    localStorage.setItem('winkelwagen', JSON.stringify(this.products));
    this.total.next(this.products);
  }

  // deleteProduct(p: Product) {
  //   this.products.forEach((item, index) => {
  //     if (item === p) {
  //       this.products.splice(index, 1);
  //     }
  //     localStorage.setItem('winkelwagen',
  //       JSON.stringify(this.products));
  //     this.gettotaal();
  //   });
  // }

  // gettotaal(): Observable<number> {
  //   this.totaalprijs = 0;
  //   this.products.forEach((item, index) => {
  //     this.totaalprijs += item.price;
  //   });
  //   console.log(this.totaalprijs);
  //   return of(this.totaalprijs);
  // }

  getWinkelwagen(): Observable<Product[]> {
    return this.total;
  }


}
