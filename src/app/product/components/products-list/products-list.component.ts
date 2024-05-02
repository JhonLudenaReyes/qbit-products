import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.initProducts();
  }

  initProducts(): Product[] {
    return [
      {
        productId: 1,
        name: "televisor lg 55''",
        description: 'full hd, sistema android, oled',
        price: 3500,
        stock: 8,
        state: 'A',
      },
      {
        productId: 2,
        name: 'refrigerador electrolux',
        description: 'electrolux - minibar erd90g6hrw 90 litros| blanco',
        price: 1750,
        stock: 9,
        state: 'A',
      },
      {
        productId: 3,
        name: "televisor indurama 60''",
        description: 'televisor indurama 60" qled google tv 50tikgf2gqled',
        price: 2700,
        stock: 4,
        state: 'A',
      },
      {
        productId: 4,
        name: 'cocina global',
        description: 'global - cocina a gas bermuda cromado',
        price: 3500,
        stock: 10,
        state: 'A',
      },
      {
        productId: 5,
        name: 'lavadora innova',
        description: 'innova - lavadora semiautomatica blanca | 15kg',
        price: 845,
        stock: 6,
        state: 'A',
      },
      {
        productId: 6,
        name: 'Aire acondicionado samsung',
        description:
          'samsung - aire acondicionado split ar12trhqdwkned|12.000 btu',
        price: 2400,
        stock: 8,
        state: 'A',
      },
    ];
  }

  detailProduct(product: Product) {
    this.productService.addDetailProduct(product);
    this.router.navigate(['product-detail']);
  }
}
