import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any = [];

  leftBox: any[] = [];
  rightBox: any[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((productData) => {
      this.leftBox = productData.products.filter((p: any) => p.rating >= 4.5);
      console.log(this.products);
    });
  }

  moveProduct(index: number, direction: 'left' | 'right'): void {
    if (direction === 'left') {
      const productToMove = this.leftBox.splice(index, 1);
      if (productToMove.length > 0) {
        this.rightBox.push(productToMove[0]);
      }
    } else {
      const productToMove = this.rightBox.splice(index, 1);
      if (productToMove.length > 0) {
        this.leftBox.push(productToMove[0]);
      }
    }
  }
}
