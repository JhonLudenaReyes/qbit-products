import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.product = this.productService.product;
  }

  backProductList() {
    this.productService.product = {
      productId: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0,
      state: '',
    };

    this.router.navigate(['']);
  }
}
