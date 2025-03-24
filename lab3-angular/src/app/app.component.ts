import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2-angular';


  
  products = {

    // Slide
    images: ['assets/white-blue.jpg',
              'assets/white-green.jpg',
              'assets/yellow.jpg',
              'assets/pink.jpg'],

    // Detail
    name: "Iphone 15 plus",
    prices: 15500000,
    olds: "17.000.000đ",
    details: "Thiết kế thời thượng và bền bỉ - Mặt lưng kính được pha màu xu hướng cùng khung viền nhôm bền bỉ",

    // option
    colors: ['black', 'white', 'yellow', 'pink'],
    sizes: ['256gb', '512gb', '1024gb'],
    
  }
}
