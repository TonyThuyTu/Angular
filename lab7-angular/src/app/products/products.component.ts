import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      name: 'Razer V3 Pro TKL',
      description: 'Wireless mechanical keyboard with RGB lighting.',
      image: 'https://product.hstatic.net/200000722513/product/250-9303-ban-phim-razer-v3-pro-tenkeyless-1_b7d6ef40b1224ede9552186f348113da_1024x1024.jpg'
    },
    {
      name: 'Razer Viper V3 Pro',
      description: 'Wireless gaming mouse with ultra-lightweight design.',
      image: 'https://product.hstatic.net/200000722513/product/5360-viper-v3-pro-black-1_25c278a13aff48f28dd6bdfe2cf85b26_1024x1024.jpg'
    },
    {
      name: 'HyperX Earbuds 2',
      description: 'Wired earbuds with noise cancellation.',
      image: 'https://techspace.vn/wp-content/uploads/2023/05/1-43.webp'
    }
  ];
  
}
