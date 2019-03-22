import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../shared/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  private sub: any;
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.product = new Product();
    const id = +this.route.snapshot.params.id;
    this.productService.get(id).subscribe(data => this.product = data);
  }

}
