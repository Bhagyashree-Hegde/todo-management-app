import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoFormComponent} from '../todo-form/todo-form.component';
import {Todo} from '../todo.model';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['edit-todo.component.less']
})
export class EditTodoComponent implements OnInit {

  todo: Todo;
  showErrors = false;

  @ViewChild('formElement') formElement: TodoFormComponent;

  constructor(private activatedRoute: ActivatedRoute,
              private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const todoId = params.id;
      this.todoService.getTodoById(todoId).subscribe((todo: Todo) => {
        this.todo = todo;
      });
    });
  }

  _cancelTodoEdit(): void {
    this.router.navigate(['/todo/list']);
  }

  _saveTodo(): void {
    this.showErrors = true;
    if (this.formElement.todoForm.form.status === 'VALID') {
      this.todoService.updateTodo(this.todo).subscribe((updatedTodo: Todo) => {
        this.router.navigate(['/todo/list']);
      });
    }
  }

  _deleteTodoEdit(): void {
    this.todoService.deleteTodo(this.todo.id).subscribe((deletedTodo: Todo) => {
      this.router.navigate(['/todo/list']);
    });
  }
}
