import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  products = [];
  constructor(private http: HttpClient) {}

  private productsApi: string = ' https://dummyjson.com/products';

  getProducts(): Observable<any> {
    return this.http.get(this.productsApi);
  }
}
