import {Component, Output, TemplateRef, ViewChild} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {TodoFormComponent} from '../todo-form/todo-form.component';
import {Todo} from '../todo.model';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['create-todo.component.less']
})
export class CreateTodoComponent {
  showErrors = false;
  todo: Todo = {title: '', text: ''};

  @ViewChild('formElement') formElement: TodoFormComponent;

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  _createTodo(): void {
    this.todo = this.formElement.todo;
    this.showErrors = true;
    if (this.formElement.todoForm.form.status === 'VALID') {
      this.todoService.createTodo(this.todo).subscribe((newTodo: Todo) => {
        this.router.navigate(['/todo/list']);
      });
    }
  }

  _cancelTodoCreation(): void {
    this.router.navigate(['/todo/list']);
  }
}
