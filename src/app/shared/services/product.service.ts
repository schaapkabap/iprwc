import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>  {
    return this.http.get<Product[]>(environment.apiHostname + 'products');
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(environment.apiHostname + 'products/' + id);
  }

  save(product: any): Observable<Object> {
    return this.http.post(environment.apiHostname + 'products', product);
  }

  update(product: any): Observable<Object> {
    return this.http.put(environment.apiHostname + 'products', product);
  }

  delete(product: Product): Observable<Object> {
    return this.http.delete(environment.apiHostname + 'products/' + product.id);
  }

}
