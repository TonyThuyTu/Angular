import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  standalone: false,
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  // colors = ['black', 'white', 'yellow', 'pink'];
  // sizes = ['256gb', '512gb', '1024gb'];

  @Input() colors: string[] = [];

  @Input() sizes: string[] = [];

  @Input() status: string[] = [];

  quantity: number = 1;

  @Output() quantityChange = new EventEmitter<number>();

  increaseQuantity() {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  @Output() colorSelected = new EventEmitter<string>();

  selectColor(color: string) {
    this.colorSelected.emit(color);
  }
}
