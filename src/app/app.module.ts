import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, EmployeeTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'employees',
        component: EmployeeTableComponent,
      },
      {
        path: '',
        loadChildren: () =>
          import('./products/products.module').then(
            (mod: any) => mod.ProductsModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./post/post.module').then((mod: any) => mod.PostModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
