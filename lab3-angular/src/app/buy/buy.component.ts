import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buy',
  standalone: false,
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  @Input() buynow: string = 'Add to cart';

  @Output() buyOutput = new EventEmitter<string>();

  buy() {
    this.buyOutput.emit('Done');
  }
  
}
