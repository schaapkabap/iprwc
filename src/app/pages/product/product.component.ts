import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
              private http: HttpClient) {
  }

  ngOnInit() {
    this.products = Array<Product>();

    this.productService.getAll().subscribe(data => this.products = data);
  }

}
