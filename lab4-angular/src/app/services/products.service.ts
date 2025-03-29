import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      image: "assets/ip16prm titan black.png",
      details: "The best phone for high demand!",
      price: 15000000,
      old: 12000000,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      image: "assets/ip16prm titan nature.png",
      details: "A premium Android experience!",
      price: 18000000,
      old: 16000000,
    },
    {
      id: 3,
      name: "Xiaomi 14 Pro",
      image: "assets/ip16prm titan yellow.png",
      details: "Affordable flagship with top performance!",
      price: 12000000,
      old: 10000000,
    },
    {
      id: 4,
      name: "Google Pixel 9",
      image: "assets/ip16prm titan white.png",
      details: "Best-in-class camera with Google AI!",
      price: 17000000,
      old: 14000000,
    },
    {
      id: 5,
      name: "OnePlus 12",
      image: "assets/yellow.jpg",
      details: "Smooth performance and clean UI!",
      price: 14000000,
      old: 12500000,
    },
    {
      id: 6,
      name: "Asus ROG Phone 8",
      image: "assets/pink.jpg",
      details: "Gaming beast with high refresh rate!",
      price: 20000000,
      old: 18000000,
    },
    {
      id: 7,
      name: "Sony Xperia 1 V",
      image: "assets/white-blue.jpg",
      details: "Perfect for multimedia and photography!",
      price: 19000000,
      old: 17000000,
    },
    {
      id: 8,
      name: "Realme GT 6 Pro",
      image: "assets/white-green.jpg",
      details: "Flagship killer at a budget price!",
      price: 11000000,
      old: 9500000,
    },

  ];

  // lấy danh sách sản phẩm
  getProducts() {
    return this.products;
  }
  // lấy danh sách sản phẩm dựa theo id
  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}

