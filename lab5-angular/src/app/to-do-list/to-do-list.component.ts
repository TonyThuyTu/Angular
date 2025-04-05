import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: false,
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'] // Fixed property name
})
export class ToDoListComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(250)]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      colors: ['', Validators.required],
      photos: [null, Validators.required]
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.productForm.patchValue({ photos: input.files[0] });
    }
  }
  

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product Data:', this.productForm.value);
    }
  }
}
