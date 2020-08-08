import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   constructor(private httpClient: HttpClient) {}

   getTodos(): Observable<any> {
     return this.httpClient.get('http://localhost:8080/todos');
   }
   getTodoById(id: string): Observable<any> {
     return this.httpClient.get('http://localhost:8080/todos/' + id);
   }
   updateTodo(todo: Todo): Observable<any> {
     return this.httpClient.put('http://localhost:8080/todos/' + todo.id, {title: todo.title, text: todo.text});
   }
   deleteTodo(id: string): Observable<any> {
     return this.httpClient.delete('http://localhost:8080/todos/' + id);
   }
   createTodo(body: Todo): Observable<any> {
     return this.httpClient.post('http://localhost:8080/todos', body);
   }
}
