import {ProductCategory} from './product-category.model';

export class Product {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public image: string;
  public productCategory: ProductCategory;

}
