import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'] // <-- đã sửa đúng
})
export class AppComponent {
  title = 'lab2-angular';

  // buy
  handleBuyEvent(message: string){
    console.log('Yes', message);  
    alert(message);               
  }

  //option 
  quantityFromOptions: number = 1;

  handleQuantityChange(qty: number) {
    this.quantityFromOptions = qty;
    console.log('Count: ', qty);
  }

  selectedColor: string = '';

  handleColorSelect(color: string) {
    this.selectedColor = color;
    console.log('Màu đã chọn:', color);
  }

  products = {

    images: ['assets/white-blue.jpg', 
            'assets/white-green.jpg', 
            'assets/yellow.jpg', 
            'assets/pink.jpg',
            'assets/black.jpg'],

    name: "Iphone 15 plus",

    prices: 15500000,

    olds: 17000000,
  
    details: "The iPhone 15 Plus, which has features a 6.7-inch Super Retina XDR display, A16 Bionic chip, 6GB RAM, and up to 512GB storage. It has a 48MP dual-camera system, Dynamic Island, USB-C port, and up to 26 hours of battery life, all in a sleek glass and aluminum body with IP68 rating.",

    colors: ['white', 'yellow', 'pink','green','black'],

    sizes: ['128gb','256gb', '512gb'],

    status: ['In stock']

  }
}
