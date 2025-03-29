import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  products: any[] = [];

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

