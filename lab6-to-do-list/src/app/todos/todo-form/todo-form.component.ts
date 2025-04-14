import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  standalone: false,
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input() todo: Todo = { title: '', status: 'pending' };
  @Output() formSubmit = new EventEmitter<Todo>();

  submitForm() {
    this.formSubmit.emit(this.todo);
    this.todo = { title: '', status: 'pending' };  // reset form after submit
  }
}
