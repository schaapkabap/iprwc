import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Product} from '../../../shared/models/product.model';
import {ProductService} from '../../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.sass']
})
export class ProductNewComponent implements OnInit {

  product: Product;
  form: FormGroup;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.product = new Product();
  }
  onSubmit(f: NgForm) {
    const valid = true;

    if (f.form.valid && valid) {
      this.productService.save(this.product).subscribe(() => {
        this.router.navigate(['/app/product/']);
      });

    }
  }
}
