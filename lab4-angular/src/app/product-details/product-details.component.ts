import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any; // Biến lưu sản phẩm hiện tại
  selectedStorage: string = ''; // Lưu dung lượng được chọn

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Để điều hướng nếu không tìm thấy sản phẩm
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Lấy ID sản phẩm từ URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Tìm sản phẩm theo ID
    this.product = this.productService.getProductById(id);

    // Nếu không tìm thấy sản phẩm, điều hướng về trang lỗi
    if (!this.product) {
      console.log('Không tìm thấy sản phẩm!');
      this.router.navigate(['/not-found']);
    } else {
      // Chọn dung lượng mặc định nếu có
      this.selectedStorage = this.product.storage ? this.product.storage[0] : '';
    }
  }

  // Hàm xử lý mua hàng
  buyNow() {
    if (this.selectedStorage) {
      alert(`Bạn đã chọn mua ${this.product.name} - Dung lượng: ${this.selectedStorage}`);
    } else {
      alert('Vui lòng chọn dung lượng trước khi mua!');
    }
  }
}
