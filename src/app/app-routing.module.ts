import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './product/components/products-list/products-list.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
