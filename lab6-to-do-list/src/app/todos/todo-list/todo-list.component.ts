import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  selectedTodo: Todo = { title: '', status: 'pending' };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
      },
      error: (err) => {
        console.error('Có lỗi khi lấy danh sách công việc:', err);
      }
    });
  }

  onFormSubmit(todo: Todo): void {
    if (todo.id) {
      this.todoService.updateTodo(todo).subscribe({
        next: () => this.getTodos(),
        error: (err) => console.error('Lỗi khi cập nhật công việc:', err)
      });
    } else {
      this.todoService.createTodo(todo).subscribe({
        next: () => this.getTodos(),
        error: (err) => console.error('Lỗi khi thêm công việc:', err)
      });
    }
  }

  editTodo(todo: Todo): void {
    this.selectedTodo = { ...todo };
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        // Sau khi xóa thành công, tải lại danh sách công việc
        this.getTodos();
      },
      error: (err) => {
        console.error('Lỗi khi xóa công việc:', err);
      }
    });
  }
  
}
