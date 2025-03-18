import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
    prices=["$16,000"]
    olds = ["$24,000"]
    names = ["KAWASAKI Z1000"]
    details = ["KAWASAKI Z1000: luôn đội mũ bảo hiểm, bảo vệ mắt và trang phục bảo hộ. Không bao giờ lái xe khi uống rượu..."]
}
