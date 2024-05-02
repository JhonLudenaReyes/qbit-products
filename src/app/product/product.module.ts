import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';

//primeng
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [CommonModule, CardModule, ButtonModule, TableModule],
  exports: [ProductsListComponent],
})
export class ProductModule {}
