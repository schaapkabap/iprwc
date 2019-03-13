import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  id: number;
  private sub: any;
  products: Product[];


  constructor(private productService: ProductService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.products = Array<Product>();

    this.productService.getAll().subscribe(data => this.products = data);


  }

  deleteItem(product: Product) {
    console.log(product.name);
    this.products.slice(product.id);
    this.productService.delete(product).subscribe(success => {
      const index = this.products.indexOf(product, 0);
      if (index > -1) {
        this.products.splice(index, 1);
      }
    });

  }

}
