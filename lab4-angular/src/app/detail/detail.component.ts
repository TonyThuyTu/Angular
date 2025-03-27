import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input() name!: string;
  @Input() prices!: number;
  @Input() olds!: number;
  @Input() details!: string;


  // prices=["15.500.000đ"]
  // olds = ["17.000.000đ"]
  // names = ["Iphone 15 plus"]
  // details = ["Thiết kế thời thượng và bền bỉ - Mặt lưng kính được pha màu xu hướng cùng khung viền nhôm bền bỉ"]
}
