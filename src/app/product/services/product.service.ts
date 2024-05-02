import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product!: Product;

  constructor() {}

  addDetailProduct(product: Product) {
    this.product = product;
  }
}
