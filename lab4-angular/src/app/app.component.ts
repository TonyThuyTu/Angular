import { Component, OnInit } from '@angular/core';
import { ProductService } from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tony Nguyen';

  products: any [] = [];

  constructor(private productService: ProductService){}

  ngOnInit() {
      this.products = this.productService.getProducts();
  }
  // products = [

  //   {
  //     id: 1,
  //     name: 'iPhone 16 ',
  //     image: 'assets/ip16prm titan black.png',
  //     oldPrice: 23990000,
  //     newPrice: 18990000,
  //     discount: -17
  //   },
  //   {
  //     id: 2,
  //     name: 'Samsung Galaxy S24 Ultra',
  //     image: 'assets/ip16prm titan yellow.png',
  //     oldPrice: 29990000,
  //     newPrice: 26990000,
  //     discount: -10
  //   },
  //   {
  //     id: 3,
  //     name: 'Xiaomi 14 Pro',
  //     image: 'assets/ip16prm titan white.png',
  //     oldPrice: 19990000,
  //     newPrice: 17990000,
  //     discount: -10
  //   },
  //   {
  //     id: 4,
  //     name: 'Xiaomi 14 Pro',
  //     image: 'assets/ip16prm titan nature.png',
  //     oldPrice: 19990000,
  //     newPrice: 17990000,
  //     discount: -10
  //   }

  // ];

  // product: any;

  // constructor(private route: ActivatedRoute, private router: Router) {}

  // ngOnInit() {
  //   const productId = Number(this.route.snapshot.paramMap.get('id'));
    
  //   // Kiểm tra ID sản phẩm có tồn tại không
  //   this.product = this.products.find(p => p.id === productId);

  //   if (!this.product) {
  //     // Nếu không tìm thấy sản phẩm, chuyển hướng đến trang Not Found
  //     this.router.navigate(['/not-found']);
  //   }
  // }
}
