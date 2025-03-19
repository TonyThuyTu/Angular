import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  standalone: false,
  styleUrls: ['./slide.component.css'] // <-- Phải là style**Urls**, không phải styleUrl
})
export class SlideComponent {
  images = [
    'assets/white-blue.jpg',
    'assets/white-green.jpg',
    'assets/yellow.jpg',
    'assets/pink.jpg'
  ];
  currentImage = 0;
}
