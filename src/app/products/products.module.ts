import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../service/products.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductsComponent,
      },
    ]),
  ],
  providers: [ProductsService],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
