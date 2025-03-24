import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: false,
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "my-angular";
  // product info
  product = {
    name: "Orange",
    description: "The most popular JavaScript framework",
    photoUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
    buttonLabel: "Buy Now",
    price: 150,
    quantity: 1,
  };
  total: number = 0;
  onQuantityChanged(quantity: number) {
    this.total = quantity * this.product.price;
  }
}
