import {Component, Input, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['todo-form.component.less']
})
export class TodoFormComponent {
  @Input() todo: Todo;
  @Input() showErrors = false;

  @ViewChild('todoForm') todoForm: NgForm;
}
