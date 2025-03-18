import { Component ,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-options',
  standalone: false,
  templateUrl: './product-options.component.html',
  styleUrl: './product-options.component.css'
})
export class ProductOptionsComponent {
  colors = ['navy', 'red', 'green', 'orange', 'goldenrod'];
  sizes = ['250-260', '260-280', '290-350'];
  quantity: number = 1; 
    constructor(private cdr: ChangeDetectorRef) {}
    tang() {
      this.cdr.detectChanges();
        this.quantity++;
    }

    giam() {
        if (this.quantity > 1) { 
            this.quantity--;
        }
    }
}