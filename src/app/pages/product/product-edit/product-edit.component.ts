import {Component, OnInit} from '@angular/core';
import {Product} from '../../../shared/models/product.model';
import {ProductService} from '../../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {

  id: number;
  private sub: any;
  product: Product;
  form: FormGroup;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.product = new Product();
    const id = +this.route.snapshot.params.id;
    this.productService.get(id).subscribe(data => this.product = data);
  }

  onSubmit(f: NgForm) {
    const valid = true;

    if (f.form.valid && valid) {
      this.productService.update(this.product).subscribe(() => {
        this.router.navigate(['/app/product/', this.product.id]);
      });

    }
  }
}
