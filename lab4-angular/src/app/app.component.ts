import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tony Nguyen';

  products = [

    {
      id: 1,
      name: 'iPhone 16 ',
      image: 'assets/ip16prm titan black.png',
      oldPrice: 23990000,
      newPrice: 18990000,
      discount: -17
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      image: 'assets/ip16prm titan yellow.png',
      oldPrice: 29990000,
      newPrice: 26990000,
      discount: -10
    },
    {
      id: 3,
      name: 'Xiaomi 14 Pro',
      image: 'assets/ip16prm titan white.png',
      oldPrice: 19990000,
      newPrice: 17990000,
      discount: -10
    },
    {
      id: 4,
      name: 'Xiaomi 14 Pro',
      image: 'assets/ip16prm titan nature.png',
      oldPrice: 19990000,
      newPrice: 17990000,
      discount: -10
    }

  ];
}
