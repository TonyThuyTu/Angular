import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  @Input() products: any[] = []; // Nếu không có dữ liệu, danh sách sẽ trống

  ngOnInit() {
    console.log(this.products); // Kiểm tra xem có dữ liệu không
  }
}

