import { Component, input, output, signal } from "@angular/core";

@Component({
  selector: "app-product",
  standalone: false,
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.css",
})
export class ProductComponent {
  // declare inputs
  productName = input.required<string>();
  productPhoto = input("Product Photo");
  productPrice = input.required<number>();
  productDescription = input("Product Description");
  productButton = input<string>("Buy Now");

  handleClick(message: string) {
    alert("Buy Now!: " + message);
  }

  // declare outputs
  quantityChanged = output<number>();
  // store current quantity
  currentQuantity = 0;

  // handle quantity change event
  handleQuantityChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // console.log(inputElement);
    this.currentQuantity = parseInt(inputElement.value);
    // phát thông báo rằng số lượng đã thay đổi
    this.quantityChanged.emit(this.currentQuantity);
  }
}
