import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://gorest.co.in/public/v2/users/7380163/todos';
  private token = 'Bearer cd2a27c23b4e986511fc64653fc3a97908e88e1e7bc9332cc84cf527276f6f5e';  // Token API

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl, {
      headers: new HttpHeaders({ Authorization: this.token })
    });
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo, {
      headers: new HttpHeaders({ Authorization: this.token })
    });
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo, {
      headers: new HttpHeaders({ Authorization: this.token })
    });
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    });
  }
}
