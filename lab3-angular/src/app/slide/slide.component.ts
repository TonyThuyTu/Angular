import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare var bootstrap: any; // khai báo để dùng bootstrap JS

@Component({
  selector: 'app-slide',
  standalone: false,
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnChanges, AfterViewInit {
  @Input() selectedColor: string = '';
  @Input() images: string[] = [];

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ngAfterViewInit() {
    // Khi carousel đã sẵn sàng sau render
    if (this.selectedColor) {
      this.changeImageByColor(this.selectedColor);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedColor'] && this.selectedColor && this.carousel) {
      this.changeImageByColor(this.selectedColor);
    }
  }

  changeImageByColor(color: string) {
    const index = this.images.findIndex(img => img.includes(color));
    if (index >= 0 && this.carousel?.nativeElement) {
      const carouselElement = this.carousel.nativeElement;
      const carouselInstance = bootstrap.Carousel.getInstance(carouselElement)
                              || new bootstrap.Carousel(carouselElement);
      carouselInstance.to(index);
    }
  }
}
